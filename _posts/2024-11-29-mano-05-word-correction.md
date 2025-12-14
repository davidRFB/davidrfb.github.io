---
layout: post
title: "From Letters to Words: Two Approaches to Real-Time Correction"
date: 2024-11-29
description: "Building instant autocomplete with tries and smart LLM correction for sign language translation"
tags: [nlp, llm, algorithms]
categories: [MANO-project]
---

## The Challenge: Letters Aren't Words

Our sign language recognizer outputs individual letters. Great for spelling, but users don't want to see `H O L A` — they want `hola`. 

Even worse, because we're processing video frames, the raw output looks like this:

```
CCCCCAAAAASSSSSAAA
```

When the user meant: `CASA`

We need to:

1. **Deduplicate** repeated letters from frame-by-frame capture
2. **Correct** the sequence into a real Spanish word

## Two Approaches

I implemented two complementary solutions with very different tradeoffs:

| Approach | Latency | Cost | Best For |
|----------|---------|------|----------|
| **Trie Autocomplete** | <1ms | Free | Real-time suggestions |
| **LLM Correction** | ~100-200ms | Free tier | Complex error correction |

## Approach 1: Trie-Based Autocomplete (Instant)

### The Problem with Raw Frames

Video runs at 30fps. If you hold a gesture for 1 second, you get 30 identical predictions:

```python
# Raw buffer after spelling "CASA"
["c", "c", "c", "a", "a", "a", "s", "s", "s", "a", "a"]
```

### Solution: Transition-Based Deduplication

Only add a letter when it **changes**:

```python
def deduplicate_letters(letters: list[str]) -> list[str]:
    if not letters:
        return []
    result = [letters[0]]
    for letter in letters[1:]:
        if letter.lower() != result[-1].lower():
            result.append(letter)
    return result

# Input:  ["c", "c", "c", "a", "a", "s", "s", "a", "a"]
# Output: ["c", "a", "s", "a"] → "CASA"
```

### Trie Data Structure

A Trie (prefix tree) enables instant lookups:

```
        root
       /    \
      c      h
     /        \
    a          o
   / \          \
  s   r         l
 /     \         \
a       r         a
↓       ↓         ↓
"casa" "carro"   "hola"
```

As the user spells, we traverse the trie and show matching words:

```python
auto = SpanishAutocomplete()
auto.suggest("cas")  # → ["casa", "caso", "casar", "casado", "castillo"]
```

**Latency: <1ms** — no network calls, pure in-memory lookup.

### Edge Case: Double Letters

What about words like "carro" (car) or "llave" (key)?

The user needs to **break the stability** between repeated letters:

1. Sign `C → A → R`
2. Move hand away briefly (or sign something else)
3. Sign `R → O`
4. Result: `CARRO` ✓

This is a natural flow — you can't physically hold two Rs simultaneously anyway.

## Approach 2: LLM Correction (Smart)

For more complex corrections, we use an LLM. I tested two backends:

### Ollama (Local)

```python
# Local model - works offline
corrector = SignLanguageCorrector(backend="ollama", model="llama3.2")
```

- **Latency**: 5-10 seconds 😬
- **Cost**: Free (runs on your machine)
- **Pros**: Private, offline, no API limits

### Groq (Cloud API)

```python
# Cloud API - much faster
corrector = SignLanguageCorrector(backend="groq")
```

- **Latency**: 100-200ms ✨
- **Cost**: Free tier available
- **Pros**: Fast enough for interactive use

### Why Groq is Fast

Groq uses custom LPU (Language Processing Unit) hardware designed specifically for LLM inference. It's not magic — it's specialized silicon.

### The Prompt

I kept it minimal for speed:

```python
FAST_PROMPT = """Corrige estas letras a palabra española: {letters}
Responde SOLO JSON: {{"corrected": "palabra", "confidence": "high"}}"""
```

Less tokens = faster response.

## The Hybrid Pipeline

In practice, I use both approaches together:

```
┌─────────────────────────────────────────────────┐
│  Frame: Hand detected → Letter: "A"             │
├─────────────────────────────────────────────────┤
│  Stability Filter: Wait 3 frames                │
│  (prevents noise from brief misclassifications) │
├─────────────────────────────────────────────────┤
│  Deduplication: Only add if letter changed      │
│  Buffer: [C, A, S, A]                           │
├─────────────────────────────────────────────────┤
│  Trie Lookup: Instant suggestions               │
│  → ["casa", "caso", "casar"]                    │
├─────────────────────────────────────────────────┤
│  User picks suggestion (keys 1-5)               │
│  OR presses ENTER for LLM correction            │
└─────────────────────────────────────────────────┘
```

## Latency Comparison

Real measurements from my setup:

| Operation | Time |
|-----------|------|
| Deduplication | <0.1ms |
| Trie lookup | <1ms |
| Groq LLM | 100-200ms |
| Ollama (local) | 5-10s |

For real-time UX, the trie handles 99% of cases. LLM is the fallback for edge cases.

## Controls

The inference window now supports:

| Key | Action |
|-----|--------|
| SPACE | Capture letter manually |
| 1-5 | Pick autocomplete suggestion |
| ENTER | LLM correction (for hard cases) |
| BACKSPACE | Delete last letter |
| C | Clear buffer |

## What I Learned

1. **Don't over-engineer**: A simple trie beats an LLM for prefix matching
2. **Latency matters**: 5s feels broken, 100ms feels instant
3. **Hybrid approaches win**: Use the right tool for each sub-problem
4. **Frame deduplication is essential**: Video isn't text input

---

**Code**: Check the [GitHub repository](https://github.com/davidRFB/Mano) for the full implementation.

*This is part 5 of the MANO project series on building a Colombian Sign Language classifier.*
