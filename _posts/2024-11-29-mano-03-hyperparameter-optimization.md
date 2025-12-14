---
layout: post
title: "Experiment 3: Hyperparameter Optimization"
date: 2024-11-29
description: "Systematic search over models, learning rates, and batch sizes"
tags: [machine-learning, optimization, mlflow]
categories: [MANO-project]
thumbnail: /assets/img/blog/mano/04-model-comparison.png
---

## Objective

Find optimal hyperparameters for the gesture classifier using the expanded V2 dataset (3,658 images).

## Search Space

| Hyperparameter | Values |
|----------------|--------|
| Model | MobileNetV2, MobileNetV3-Small, EfficientNet-B0 |
| Learning Rate | 1e-5, 1e-4, 1e-3 |
| Batch Size | 32, 64 |

**Total configurations**: 3 × 3 × 2 = 18 experiments

## Training Protocol

All experiments used:

- **Optimizer**: AdamW with weight decay 1e-4
- **Scheduler**: CosineAnnealingLR over 30 epochs
- **Early stopping**: Patience of 10 epochs on validation loss
- **Augmentation**: RandomHorizontalFlip, RandomRotation, ColorJitter
- **Hardware**: Google Colab T4 GPU

## Results Summary

### Best Configuration per Model

| Model | Best LR | Batch Size | Test Accuracy |
|-------|---------|------------|---------------|
| MobileNetV2 | 1e-3 | 32 | 100.00% |
| MobileNetV3-Small | 1e-3 | 32 | 100.00% |
| EfficientNet-B0 | 1e-3 | 32 | 99.64% |

### Learning Rate Analysis

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/mano/04-lr-effect-per-model.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Effect of learning rate per model
</div>

**Key finding**: Learning rate of 1e-3 is optimal across all models. Lower learning rates (1e-4, 1e-5) significantly underperform.

| Learning Rate | Mean Test Accuracy |
|---------------|-------------------|
| 1e-3 | 73.47% |
| 1e-4 | 47.30% |
| 1e-5 | 25.87% |

### Model Comparison

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/mano/04-model-comparison.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Test accuracy by model and learning rate
</div>

All three models achieve similar peak performance with optimal hyperparameters. MobileNetV2 and MobileNetV3-Small are preferred for deployment due to lower latency.

## Training Curves

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/mano/04-training-curves.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Training curves per model
</div>

Observations:

- **MobileNetV2**: Smooth convergence, reaches 100% val accuracy by epoch 10
- **MobileNetV3-Small**: Similar pattern, slightly faster initial learning
- **EfficientNet-B0**: More training data may help this architecture

## Sample Predictions

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/mano/04-sample-predictions.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Sample predictions with confidence scores
</div>

The model shows high confidence predictions across letter classes. Each prediction shows the true label, predicted label, and confidence score. Green borders indicate correct predictions.

## Error Analysis

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/mano/04-confusion-matrix.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Confusion matrix revealing error patterns
</div>

### Most Common Confusions

| True → Predicted | Count |
|------------------|-------|
| R → Z | 14 |
| N → Z | 10 |
| F → Z | 9 |
| B → X | 7 |

**Interpretation**: Letters with similar hand shapes (R/Z, N/Z) are confused more often. This is expected and suggests the model is learning actual gesture features.

## MLflow Tracking

All experiments tracked in MLflow:

```bash
mlflow ui --backend-store-uri models/mlruns
```

Logged metrics per experiment:

- train_loss, train_acc (per epoch)
- val_loss, val_acc (per epoch)
- best_val_loss, best_val_acc
- test_loss, test_acc
- learning_rate schedule

## Conclusions

1. **Learning rate is the most critical hyperparameter**: 1e-3 works best
2. **Batch size has minimal impact** at these dataset sizes
3. **MobileNetV2 is the best choice** for deployment (good accuracy, fast inference)
4. **EfficientNet-B0 underperforms** with current dataset size

## Selected Model

Based on results, selected **MobileNetV2** with:

- Learning rate: 1e-3
- Batch size: 32
- Test accuracy: 100%

---

**Code**: Check the [GitHub repository](https://github.com/davidRFB/Mano) for implementation details.

*This is part 3 of the MANO project series on building a Colombian Sign Language classifier.*
