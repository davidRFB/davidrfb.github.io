---
layout: post
title: "From Local Scripts to Web Application"
date: 2025-12-14
description: "Building and deploying the full-stack LSC translator with FastAPI, Docker, and Hugging Face Spaces"
tags: [deployment, api, docker, hugging-face]
categories: [MANO-project]
featured: true
---

## From Scripts to API

We started with Python scripts that ran locally: OpenCV for camera access, MediaPipe for hand landmark detection, and our trained model for predictions. This worked great on my machine, but we needed a way to serve predictions to anyone, anywhere.

**The solution:** Build a FastAPI backend that:
- Accepts image uploads via HTTP
- Detects hands and extracts landmarks
- Runs inference with our model
- Returns predictions as JSON

```python
@app.post("/predict")
async def predict(file: UploadFile):
    # Load image → MediaPipe → Model → Return letter + confidence
    return {"letter": "A", "confidence": 0.95}
```

Simple, but it only ran on `localhost`.

## Dockerization

To make deployment consistent, we dockerized everything:

```dockerfile
FROM python:3.11-slim
COPY requirements-docker-cpu.txt .
RUN pip install -r requirements-docker-cpu.txt
COPY src/ /app/src/
COPY models/ /app/models/
CMD ["uvicorn", "src.api.main:app", "--host", "0.0.0.0"]
```

**Key decision:** CPU-only image to reduce size and cost (no GPU needed for inference at this scale).

Now we could test the containerized API locally, but it still wasn't accessible to the world.

## Deployment: The Cloud Dilemma

**Option 1: Google Cloud Run**
- ✅ Powerful, scalable
- ❌ Pay-per-use (risky for video frames = 10+ predictions/sec)
- ❌ Potential surprise bills

**Option 2: Hugging Face Spaces**
- ✅ **Free** Docker deployment
- ✅ Built for ML model hosting
- ✅ Persistent URL
- ⚠️ Strict file structure requirements

We chose **Hugging Face Spaces** for the free tier and ML-first infrastructure.

## Deploying to Hugging Face

Hugging Face Spaces expects:
- `Dockerfile` at root
- Specific port (`7860` by default)
- Lightweight images (memory limits)

**Strategy:**
1. Created `deploy-huggingface` branch with only:
   - API code (`src/api/`)
   - Best model checkpoint
   - Minimal dependencies
2. Connected repo to Hugging Face Spaces
3. Got public URL: `https://davidrfb97-mano.hf.space`

The backend was live! ✅

## Frontend: HTML over Streamlit

Initially considered Streamlit for the UI, but it doesn't handle continuous camera frames well (too many re-renders, threading issues).

**Better solution:** Vanilla HTML + JavaScript
- MediaPipe JS runs hand detection **in the browser**
- Crops hand region before sending to API
- Only sends 1 frame every ~100ms (reduces backend load)
- Draws colored landmarks matching training data

```javascript
// 1. MediaPipe detects hand in browser
// 2. Crop hand region
// 3. Mirror + add landmarks (match training colors)
// 4. Send to API
const result = await fetch(`${API_URL}/predict`, {
    method: 'POST',
    body: formData
});
```

Deployed to **GitHub Pages**: [davidrfb97.github.io/Mano](https://davidrfb97.github.io/Mano)

## Architecture Overview

```
┌─────────────────┐
│  User Browser   │
│  (HTML + JS)    │
│  - MediaPipe JS │
│  - Camera       │
│  - Crop hands   │
└────────┬────────┘
         │ HTTP POST
         │ (cropped image)
         ▼
┌─────────────────┐
│ Hugging Face    │
│ (Docker)        │
│  - FastAPI      │
│  - PyTorch      │
│  - Model        │
└────────┬────────┘
         │
         ▼
    Prediction
```

## Key Learnings

1. **Serverless is tricky for real-time video**: Frame rates can rack up costs fast. Throttling is essential.
2. **Browser-side processing**: MediaPipe JS reduced backend load by 90% (only send crops, not full frames).
3. **Landmark consistency matters**: Ensuring JS landmarks match Python training colors improved accuracy significantly.
4. **Free tiers exist**: Hugging Face Spaces is perfect for ML demos without AWS bills.

## What's Next

- Add LLM word correction (already working locally)
- Mobile optimization (touch-friendly UI)
- Analytics dashboard (track usage, popular letters)
- A/B test different models

The app is live and working! Try it at [davidrfb97.github.io/Mano](https://davidrfb97.github.io/Mano) 🤟

---

**Tech Stack:**
- Backend: FastAPI, PyTorch, MediaPipe (Python)
- Frontend: Vanilla JS, MediaPipe JS, Canvas API
- Deployment: Hugging Face Spaces (backend), GitHub Pages (frontend)
- Infrastructure: Docker, Git branches for deployment

**Code**: Check the [GitHub repository](https://github.com/davidRFB/Mano) for the full implementation.

*This is the final part of the MANO project series on building a Colombian Sign Language classifier.*
