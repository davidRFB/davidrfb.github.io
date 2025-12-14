---
layout: post
title: "Experiment 1: Initial Dataset and Baseline Model"
date: 2024-11-27
description: "Data collection, model selection, and first training results"
tags: [machine-learning, computer-vision, sign-language, baseline]
categories: [MANO-project]
thumbnail: /assets/img/blog/mano/v1_dataset_histogram.png
---

## Objective

Establish a baseline gesture recognition system for the 26 LSC alphabet letters using transfer learning.

## Data Collection

### Method

Built a capture tool using MediaPipe for hand detection:

- Press a letter key (a-z) to capture that gesture
- MediaPipe detects 21 hand landmarks
- Auto-crop to hand region with padding
- Save only when hand is detected

### Dataset Statistics (V1)

| Metric | Value |
|--------|-------|
| Total images | 1,871 |
| Classes | 26 (a-z) |
| Min per class | 46 |
| Max per class | 129 |
| Image size | 224×224 |

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/mano/v1_dataset_histogram.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Class distribution showing imbalance
</div>

The dataset shows moderate class imbalance with a 2.8× ratio between the most and least represented classes.

## Model Selection

Selected **MobileNetV2** for the baseline:

- Pretrained on ImageNet (transfer learning)
- 3.4M parameters (suitable for real-time inference)
- Proven performance on similar gesture recognition tasks

### Training Configuration

```python
model = mobilenet_v2(pretrained=True)
model.classifier[1] = nn.Linear(1280, 26)

optimizer = AdamW(lr=1e-3, weight_decay=1e-4)
scheduler = CosineAnnealingLR(T_max=30)
batch_size = 32
epochs = 30
```

## Results

### Training Metrics

| Metric | Value |
|--------|-------|
| Final Train Accuracy | 100% |
| Final Val Accuracy | 100% |
| Test Accuracy | 100% |
| Early Stopping Epoch | 10 |

### Observations

1. **Rapid convergence**: Model reached 100% validation accuracy by epoch 10
2. **Potential overfitting concerns**: Perfect test accuracy suggests possible data leakage
3. **Next steps needed**: Investigate training dynamics and test robustness

---

**Code**: Check the [GitHub repository](https://github.com/davidRFB/Mano) for implementation details.

*This is part 1 of the MANO project series on building a Colombian Sign Language classifier.*
