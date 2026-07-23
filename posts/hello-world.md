---
title: Hello, world: why this site exists
date: 2026-07-12
category: meta
tags: blog, writing
summary: What I plan to write about here — computer vision, MLOps war stories, and whatever else survives a second draft.
---

Every ML engineer has a folder of notes that never sees daylight — debugging
sessions, deployment checklists, half-formed opinions about tooling. This site
is my attempt to give that folder an audience, starting with an audience of
one: future me.

## What to expect

Mostly computer vision and MLOps. Things like getting detection models to
behave outside the lab, the gap between a good `mAP` score and a good product,
and infrastructure that doesn't wake you up at 3 a.m.

> If you can't explain it in a blog post, you probably got lucky the first time.

## A code block, for calibration

Proof that code renders properly here:

```python
from ultralytics import YOLO

model = YOLO("yolov8n.pt")
results = model("frame.jpg", conf=0.5)
# the easy part ends here
```

Markdown works as you'd expect: **bold**, *italics*, [links](https://github.com/aryanshar),
lists, tables, images — all of it.

That's it. If you want to say hi, the links are on the [home page](index.html).
