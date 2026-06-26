# The 20/80 Study Plan — High-Leverage Prep

*The full 12-week planner is the complete menu. This is the concentrate: the ~20% of concepts that carry ~80% of the result in interviews and on the job — weighted toward your repositioning (applied GenAI + ML infra) and stripped of theory you won't use. Each session is ~1–2 hrs of learning + a 15-min active review. Do the review every time — passive watching is the trap; retrieval is what sticks.*

---

## How to use this

- **One session per study block.** Don't mix. Finish a concept, do its review, move on.
- **The 15-min review is non-negotiable.** It's where learning actually happens — you're forcing recall, not re-reading.
- **Practical bias:** wherever you can *run* it, *build* it, or *explain* it out loud, do that instead of taking notes.
- **Repeat the weak ones.** A session you can't pass the review on goes back in the queue.
- Maps onto your tracker: Track 1 = your DSA thread; Tracks 2–3 = the LLM/system-design days; Tracks 4–5 = fundamentals + behavioral.

## Bookmark these once (they recur everywhere)

| Anchor | What it's for | Link |
|---|---|---|
| **NeetCode** | DSA patterns + free solution videos | neetcode.io/roadmap |
| **Karpathy — Zero to Hero** | Build LLMs from scratch, the clearest there is | karpathy.ai/zero-to-hero.html |
| **Maxime Labonne — LLM Course** | Free curated roadmap w/ a resource for every LLM topic | github.com/mlabonne/llm-course |
| **Lilian Weng's blog** | Deep, current posts on attention, RLHF, inference | lilianweng.github.io |
| **alirezadir — ML Interviews** | Free ML system-design framework + company case studies | github.com/alirezadir/Machine-Learning-Interviews |
| **Chip Huyen** | Applied ML systems, GenAI platform, eval | huyenchip.com |
| **StatQuest** | Intuition for any single ML fundamental | youtube.com/@statquest |

---

# Track 1 — Coding: the patterns that cover most problems

*You don't need all of DSA. ~6 patterns solve the large majority of interview questions. Go in NeetCode roadmap order so patterns compound.*

### Session 1 — Hashing + Two Pointers + Sliding Window
The array trio. A huge share of "easy/medium" questions reduce to one of these three.
- **Learn:** NeetCode roadmap → *Arrays & Hashing*, *Two Pointers*, *Sliding Window* sections (neetcode.io/roadmap). Pattern cheatsheet: seanprashad.com/leetcode-patterns
- **15-min review:** Solve *Longest Substring Without Repeating Characters* timed, from scratch, no hints. If stuck >5 min, watch the solution, then redo it tomorrow.

### Session 2 — Trees + BFS/DFS + Graphs
Traversal is the backbone of a third of all problems. Master BFS/DFS once and graphs stop being scary.
- **Learn:** NeetCode → *Trees* and *Graphs* sections.
- **15-min review:** From a blank page, write BFS and DFS for a graph from memory. Then solve *Number of Islands*.

### Session 3 — Heap / Top-K + Binary Search
"Top K", "Kth largest", "median", and any "search in sorted / find boundary" — these two patterns own that whole category.
- **Learn:** NeetCode → *Heap / Priority Queue* and *Binary Search* sections.
- **15-min review:** Solve *Kth Largest Element in an Array* (heap) and *Koko Eating Bananas* (binary search on the answer).

### Session 4 — Dynamic Programming (1-D)
The one "hard" pattern worth the ROI. 1-D DP shows up constantly; 2-D is rarer, so master 1-D first.
- **Learn:** NeetCode → *1-D Dynamic Programming*. Watch how to go brute-force → memoize → tabulate.
- **15-min review:** Solve *Coin Change* and *House Robber*. Rule: **write the recurrence relation in words before any code.**

---

# Track 2 — LLMs & modern ML: the heart (your gap + your repositioning)

*This track is what turns "JLR vision engineer" into "applied GenAI engineer." Highest strategic value per hour.*

### Session 5 — The Transformer & Self-Attention
The single highest-leverage concept in modern ML. Everything downstream assumes you own this.
- **Learn:** Jay Alammar, *The Illustrated Transformer* (jalammar.github.io/illustrated-transformer) for the mental model → Karpathy, *Let's build GPT: from scratch* (in the Zero-to-Hero playlist) for how it actually works in code.
- **15-min review:** Write a <150-word plain-English explanation of Q/K/V and why multi-head attention helps. If you can't explain it simply, rewatch the attention section.

### Session 6 — Tokenization
Underrated and very interview-relevant — especially for Sarvam (Indic tokenization is a real efficiency problem).
- **Learn:** Karpathy, *Let's build the GPT Tokenizer* (Zero-to-Hero) + code at github.com/karpathy/minbpe. Reference: HF LLM Course, tokenizer chapter (huggingface.co/learn/llm-course).
- **15-min review (practical):** `pip install tiktoken`, encode the same paragraph in English and in Hindi, compare token counts. See the Indic inefficiency with your own eyes — that's a talking point in a Sarvam interview.

### Session 7 — Fine-tuning: LoRA / QLoRA
The practical way models get adapted in industry. Massive ROI; you already have the hardware to do it.
- **Learn:** Sebastian Raschka, *Practical Tips for Finetuning LLMs Using LoRA* (sebastianraschka.com / "Ahead of AI"). Docs: HF PEFT (huggingface.co/docs/peft).
- **15-min review:** Flashcards on `rank`, `alpha`, `target_modules`, and the memory math (why QLoRA fits a 7B on one consumer GPU). Bonus: kick off a LoRA run on a tiny model.

### Session 8 — RAG (Retrieval-Augmented Generation)
The dominant applied LLM pattern, and already your strength from scene-search — sharpen it into crisp vocabulary.
- **Learn:** Chip Huyen, *Building A Generative AI Platform* (huyenchip.com) → the RAG + retrieval sections. Hands-on: HF LLM Course RAG material.
- **15-min review:** From memory, sketch the full RAG pipeline as a diagram: chunk → embed → index → retrieve → **rerank** → generate → eval. Label where latency and quality each get won or lost.

### Session 9 — Inference Optimization
Your differentiator for ML-infra roles. This is where your JLR serving work becomes a frontier-lab asset.
- **Learn:** Lilian Weng, *Large Transformer Model Inference Optimization* (lilianweng.github.io). Then vLLM docs (docs.vllm.ai) on PagedAttention + continuous batching.
- **15-min review:** Write one paragraph explaining how **KV cache + continuous batching** cut cost/latency. Flashcards on quantization types (INT8/INT4, GPTQ, AWQ, GGUF) — what each trades off.

### Session 10 — Evaluation (LLM + ML)
Neglected by most candidates, which makes it high-leverage. "How would you evaluate this?" separates senior from mid.
- **Learn:** Chip Huyen on evaluation (huyenchip.com) + the eval section of Labonne's course (github.com/mlabonne/llm-course). Applied perspective: eugeneyan.com eval posts.
- **15-min review (practical):** On paper, design an eval plan for a RAG system — offline metrics, online metrics, and an LLM-as-judge setup. Name one failure each would catch that the others miss.

---

# Track 3 — ML systems & infra: your strength, made articulate

*You've built this. The gap is saying it crisply under interview pressure with a repeatable structure.*

### Session 11 — The ML System Design framework
A reusable skeleton means you never freeze on an open-ended "design X" question.
- **Learn:** alirezadir's 9-step ML system-design flow (github.com/alirezadir/Machine-Learning-Interviews) + Chip Huyen's free booklet (github.com/chiphuyen/machine-learning-systems-design).
- **15-min review:** Apply the framework end-to-end, timed 15 min, to **"design a video dedup / data-curation system"** — i.e. your own JLR work. Hearing your real system fit the framework builds real confidence.

### Session 12 — Model Serving & Deployment at scale
Directly your EKS/autoscaling work — convert it into clean tradeoff language.
- **Learn:** Made With ML serving module (madewithml.com) + company eng blogs via eugeneyan.com's applied-ML list.
- **15-min review:** From memory, list the tradeoffs of **batch vs online serving** across latency, throughput, cost, and complexity. Then state where autoscale-to-zero helps and where it hurts.

### Session 13 — Distributed Training basics
Your Ray work, framed in the vocabulary frontier labs use.
- **Learn:** The distributed-training + parallelism links in Labonne's course (github.com/mlabonne/llm-course) → HF *Ultra-Scale Playbook* if you want depth.
- **15-min review:** Explain **data vs model vs pipeline parallelism** in your own words, and when you'd reach for each. One sentence each.

### Session 14 — Monitoring & Data Drift
The production reality interviewers probe to see if you've actually run things, not just trained them.
- **Learn:** Evidently AI guides (evidentlyai.com) + Chip Huyen on data distribution shifts (huyenchip.com).
- **15-min review:** Flashcards distinguishing **data drift vs concept drift vs covariate shift**, and one concrete way to detect each in production.

---

# Track 4 — Fundamentals that actually recur

*Not all of classical ML — just the handful that come up in nearly every loop.*

### Session 15 — Bias-Variance, Overfitting & Regularization
The most-asked conceptual cluster in ML interviews, full stop.
- **Learn:** StatQuest videos on *Bias/Variance* and *Regularization (Ridge/Lasso)* (youtube.com/@statquest). Reference: ISLR ch. 6 (statlearning.com, free PDF).
- **15-min review:** Explain in writing **why L1 produces sparsity and L2 doesn't.** Flashcards: 3 signs of overfitting + 3 fixes.

### Session 16 — Metrics & Optimization
The other always-asked cluster: which metric when, and how models actually learn.
- **Learn:** StatQuest on *Precision/Recall*, *ROC & AUC*. 3Blue1Brown on *Gradient Descent* (youtube.com/@3blue1brown).
- **15-min review (practical):** Given a confusion matrix, compute precision/recall/F1 by hand. Then explain **Adam vs plain SGD** in two sentences — what Adam adds and why it matters.

---

# Track 5 — Behavioral: the highest return-per-hour

*At senior level this is 30–50% of the loop, and it's the cheapest to prep. Your real systems are the material.*

### Session 17 — The Project Deep-Dive Doc (the unlock)
One written doc feeds your CV, your behavioral answers, *and* your system-design round simultaneously.
- **Learn:** Eugene Yan's ML design-doc template (eugeneyan.com/writing/ml-design-docs) for structure; any concise STAR-method primer for framing.
- **15-min review (writing):** Write the **Scene Search** deep-dive: problem → constraints → alternatives you rejected → key decisions & tradeoffs → metrics → what you'd redo. One page. (Then repeat for the lane pipeline and the MLOps work in later blocks.)

### Session 18 — STAR Stories + "Why leaving"
Crisp, rehearsed stories beat brilliant improvised ones. And "why are you leaving JLR" must sound forward-looking, not bitter.
- **Learn:** Any short STAR-method guide. Prepare answers for: hardest technical decision, biggest failure, conflict, largest impact, ambiguity.
- **15-min review (out loud):** Record yourself answering *"Tell me about your hardest technical decision"* in under 2 minutes. Play it back. Tighten. Speaking it is a different skill from knowing it.

---

## The honest 80/20 of the 80/20

If you could only do **six** sessions before an interview, do these: **5 (Transformers), 9 (Inference Optimization), 11 (System Design framework), 17 (Deep-dive doc), 1 (Array patterns), 4 (1-D DP).** That stack covers your differentiator (infra), your gap (LLMs), the design round, the behavioral round, and the coding floor — the true core of the core.

*Cut from the bottom of any track if time-pressed — never skip the deep-dive doc or the DSA patterns.*
