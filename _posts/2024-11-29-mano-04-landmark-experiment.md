---
layout: post
title: "The Landmark Experiment: Fixing Train-Inference Distribution Mismatch"
date: 2024-11-29
description: "How adding landmarks to training data fixed live inference instability"
tags: [deep-learning, computer-vision, mlops]
categories: [MANO-project]
thumbnail: /assets/img/blog/mano/05-v2-v3-comparison.png
featured: true
---

## The Problem: Perfect Test Accuracy, Failed Live Inference

After training our Colombian Sign Language classifier to 100% test accuracy, I was excited to try it with my webcam. The result? **Complete failure.** The model was confused, unstable, and predictions were all over the place.

How could a model with 100% test accuracy perform so poorly in real-world conditions?

## The Investigation

I spent time examining the inference pipeline and discovered something crucial:

```python
# In inference.py (lines 486-499)
# Draw landmarks on frame FIRST
mp_drawing.draw_landmarks(frame, hand_landmarks, ...)

# THEN crop the hand region for prediction
hand_crop = crop_hand(frame, current_bbox)
```

**The inference pipeline draws MediaPipe landmarks on the frame BEFORE cropping!**

This meant:
- **Training data**: Clean RGB hand crops (no landmarks)
- **Inference data**: Hand crops WITH landmarks drawn

Classic **train-inference distribution mismatch**.

## The Hypothesis

If we train on images WITH landmarks drawn, the model should generalize better to live inference because the training distribution will match the inference distribution.

## The Experiment

### Creating the Landmark Dataset

I wrote a script to process all 3,658 training images:

```python
# scripts/add_landmarks_to_dataset.py
for image in dataset:
    # Run MediaPipe hand detection
    results = hands.process(image)
    
    # Draw landmarks (same style as inference.py)
    mp_drawing.draw_landmarks(
        image, hand_landmarks,
        mp_drawing_styles.get_default_hand_landmarks_style(),
        mp_drawing_styles.get_default_hand_connections_style()
    )
    
    # Save to new directory
    save(image, output_path)
```

**Results**: 3,079 images processed (84% success rate). MediaPipe couldn't detect hands in ~16% of the cropped images - these were gestures with unusual hand poses.

## Results

I trained MobileNetV2 and MobileNetV3-Small on the landmark dataset using two learning rates (1e-3, 5e-4).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/mano/05-v2-v3-comparison.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    V2 vs V3 accuracy comparison - the landmark dataset improved live inference stability
</div>

**Key findings:**

| Metric | V2 (no landmarks) | V3 (landmarks) |
|--------|-------------------|----------------|
| Test Accuracy | 100% | 100% |
| Live Inference | Unstable | Stable! |

Both achieved perfect test accuracy, but the crucial difference was in **live inference stability**.

## Why It Works

The fix is conceptually simple:

1. **Before**: Train on raw images → Inference with landmarks = **Mismatch**
2. **After**: Train on landmark images → Inference with landmarks = **Match**

This is a textbook example of why understanding your inference pipeline is crucial when building ML systems.

## Lessons Learned

1. **Test accuracy isn't everything** - Your model needs to match the inference distribution
2. **Inspect your pipeline end-to-end** - The bug was hiding in plain sight
3. **Data preprocessing matters** - The same image can look very different after transformations

## What's Next

- Deploy the V3 model to a live demo
- Explore temporal smoothing for more stable predictions
- Build the full translation pipeline (gesture → word → sentence)

---

**Code**: Check the [GitHub repository](https://github.com/davidRFB/Mano) for the full implementation.

*This is part 4 of the MANO project series on building a Colombian Sign Language classifier.*
