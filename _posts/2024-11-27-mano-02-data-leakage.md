---
layout: post
title: "Experiment 2: Data Leakage Analysis and Model Diagnostics"
date: 2024-11-27
description: "Investigating why 100% test accuracy fails in real-world inference"
tags: [machine-learning, debugging, data-quality]
categories: [MANO-project]
thumbnail: /assets/img/blog/mano/02-training-curves.png
---

## Problem Statement

The model trained in Experiment 1 achieved 100% test accuracy but performed poorly during live webcam inference:

- Low confidence scores (30-50%)
- Frequent misclassifications
- Inconsistent predictions frame-to-frame

This experiment investigates the root cause.

## Analysis 1: Training Dynamics

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/mano/02-training-curves.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Training curves showing immediate convergence
</div>

### Observations

- Both train and val accuracy reach ~100% within 5-10 epochs
- No visible generalization gap
- Loss drops to near-zero quickly

**Interpretation**: This pattern suggests the model is memorizing rather than learning generalizable features.

## Analysis 2: Image Similarity

### Consecutive Image Correlation

Measured pixel correlation between consecutive captures:

| Letter | Mean Correlation | Interpretation |
|--------|-----------------|----------------|
| A | 0.94 | High similarity |
| T | 0.92 | High similarity |
| B | 0.91 | High similarity |

Correlation >0.9 indicates near-duplicate images. With random train/val/test splits, these duplicates leak across all sets.

### Capture Rate Analysis

```
Average capture rate: 12.3 images/second
Time span per letter: ~10 seconds
Result: ~120 nearly identical images per gesture
```

## Analysis 3: Robustness Testing

Tested model on augmented versions of training images:

| Augmentation | Accuracy | Confidence |
|--------------|----------|------------|
| Original | 100% | 98-100% |
| Brightness +30% | 99% | 95-99% |
| Brightness -30% | 98% | 90-98% |
| Gaussian blur σ=2 | 72% | 40-70% |
| Color shift +20° | 65% | 30-60% |

**Finding**: Model is sensitive to blur and color variations—common in real webcam conditions.

## Analysis 4: Confusion Matrix

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/mano/02-confusion-matrix.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Confusion matrix showing perfect diagonal
</div>

The confusion matrix shows perfect classification on the test set, but this is misleading due to the data leakage issue.

## Root Cause: Data Leakage

**The Problem**: Nearly identical images from high-speed capture were randomly distributed across train/val/test splits.

**The Solution**:
1. Recapture dataset with diverse backgrounds, lighting, and hand positions
2. Ensure temporal separation between captures
3. Use proper validation strategy (time-based or session-based splits)

## Key Takeaway

> **Test accuracy means nothing if your test set doesn't represent the real world.**

This is a textbook example of why rigorous data collection and validation strategies are crucial for ML systems that need to work in production.

---

**Code**: Check the [GitHub repository](https://github.com/davidRFB/Mano) for implementation details.

*This is part 2 of the MANO project series on building a Colombian Sign Language classifier.*
