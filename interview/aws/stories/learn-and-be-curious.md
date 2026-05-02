# Story: Learn & Be Curious — BTech ML Capstone Failure → Pivot

**LP:** Learn & Be Curious  
**Secondary LP:** Earn Trust, Dive Deep  
**Experience:** BTech Computer Science Capstone Project  
**Code name:** ML-Capstone-Pivot

---

## Metrics Checklist

- [ ] Initial model accuracy: **52%** ✓
- [ ] Final model accuracy: **89%** ✓ (target was 85%)
- [ ] Processing time reduction: **~40%** ✓
- [ ] Dataset size: **~10,000 student records** ✓
- [ ] Number of features before/after selection: **50+ → 10** ✓
- [ ] Days remaining when problem discovered: **4 days** ✓
- [ ] Number of corrupted records removed: **~5%** ✓
- [ ] Project weight in final grade: **30%** ✓

---

## 2-Minute Version (~250 words)

> Use for phone screens.

In my final BTech year, I was leading the ML component of a capstone project
predicting student performance — the model needed at least 85% accuracy for a
presentation worth 30% of our grade.

I made a classic mistake: I assumed a deep-learning architecture with three
hidden layers would outperform simpler models automatically, so I skipped
thorough data preprocessing and went straight to building. When I finally ran
validation with four days left, accuracy was **52%** — barely better than random.

Instead of hiding this from my team, I called a meeting immediately, admitted
what I'd done wrong, and proposed a pivot. We diagnosed the dataset: it had
missing values, inconsistent grading scales, and over 50 features where only
about 10 were actually predictive. We cleaned the data, selected the relevant
features, and switched to a Decision Tree with Grid Search tuning — a much
simpler, more interpretable model.

The result: accuracy jumped to **89%**, exceeding our original target, and
processing time dropped **40%**. At the presentation, we confidently explained
the failure and the pivot, and the evaluators specifically praised our ability
to recognise the mistake and adapt.

I learned that curiosity has to extend to questioning your own assumptions.
The most powerful question I asked that week was: "Why is this failing, and
what am I refusing to reconsider?" At AWS, that mindset — willing to scrap a
complex approach when the fundamentals aren't right — is something I apply to
every diagnostic and design problem.

---

## 8-Minute Version (~650 words)

> Use for virtual on-site loops.

**Situation:**  
This was my final-year BTech capstone in Computer Science, a team project to
predict student academic performance using machine learning. The project was
high-stakes: **30% of our final grade**, presented to a panel of faculty and
industry professionals. Our team's self-imposed accuracy target was 85%, which
we agreed was the minimum for a model to be credible in a real-world context.

**Task:**  
I was personally responsible for the model architecture and training pipeline.
My teammates were handling data collection and the presentation slides, trusting
me to deliver a working model with at least 85% accuracy in time for the
submission date.

**Action:**  
*The mistake — and why I made it:*  
I was confident in my coding ability and over-indexed on complexity. I built a
deep-learning model: three hidden layers, 128 neurons each, trained on roughly
10,000 records. My assumption was that more capacity would automatically yield
better results. I skipped thorough data exploration because I thought clean data
was "someone else's step."

*Discovering the problem:*  
With four days left, I ran the full evaluation. Accuracy: **52%**. The model was
also predicting wrong directions — high performers flagged as at-risk,
struggling students predicted as top performers. I knew immediately what I'd
done: garbage in, garbage out. The dataset had missing values, two incompatible
grading scales, and over 50 features where most were noise.

*Owning the mistake:*  
I did not try to silently fix it. I called a team meeting within an hour of
seeing the results, explained what had happened, and laid out a recovery plan.
This was uncomfortable — I was admitting the "ML expert" had skipped the basics —
but transparency was the only way to recover in four days.

*The pivot:*  
We broke down the remaining time into parallel tracks:  
- **Data cleaning:** removed approximately 5% of corrupted records, normalised
  grading scales to a consistent 0–100 range.  
- **Feature selection:** used correlation analysis and domain knowledge to reduce
  50+ features to the **10 most predictive**.  
- **Model change:** switched from deep learning to a **Decision Tree Classifier**,
  which is interpretable, fast to train, and robust to the dataset size.  
- **Tuning:** ran Grid Search cross-validation to find optimal depth and
  splitting criteria.

*Why Decision Tree instead of a lighter neural net?*  
Three reasons: (1) interpretability — we could explain every decision to the
panel; (2) training speed — critical with four days left; (3) Decision Trees
perform well when features are carefully selected, which ours now were.

**Result:**  
Accuracy: **52% → 89%**, surpassing the 85% target. Processing time dropped by
approximately **40%** due to the smaller feature set and simpler model.
At presentation, rather than glossing over the failure, we foregrounded it:
"Here's what we tried first, here's what the data told us, here's what we
changed and why." The evaluators praised the intellectual honesty and the
structured problem-solving under pressure. I received recognition from the
faculty lead for the approach.

**What I learned:**  
Curiosity has to be directed inward as well as outward. The most important
question I failed to ask early was: "What assumptions am I making that could
be wrong?" Now it's the first question I ask.

**Connection to AWS:**  
In DC operations, I apply the same principle: before reaching for a complex
solution, I verify the fundamentals. A loose fiber or a stale ARP entry can look
like a complex routing problem until you check the physical layer first.

---

## 15–20 Minute Expandable Outline

### Chapter 1 — Project Context
- Team composition, role assignments, academic stakes
- Why 85% accuracy was the benchmark and how it was determined
- Prior experience with ML models coming into this project

### Chapter 2 — The Mistaken Approach
- Detailed architecture: layer sizes, activation functions, optimizer choice
- Why deep learning seemed like the obvious choice in 2021–22
- What I skipped: exploratory data analysis, data-quality audit, feature importance

### Chapter 3 — Discovery of Failure
- Exact sequence: trained overnight, evaluated morning of Day N-4
- Initial reactions and internal reasoning process
- Time spent verifying the failure before accepting it (not assuming it was a code bug)

### Chapter 4 — Team Communication
- How I framed the problem to the team ("I made a mistake, here's the plan")
- Team reactions and how I maintained momentum
- Task division logic: who cleaned data, who ran feature selection, who built new model

### Chapter 5 — Technical Recovery in Detail
- Data-cleaning decisions: what was removed and why
- Feature selection methodology: Pearson correlation + decision heuristics
- Grid Search parameters explored: max_depth, min_samples_split, criterion
- How we validated the new model: train/test split, cross-validation

### Chapter 6 — Presentation & Academic Outcome
- Evaluator feedback on the transparency and pivot explanation
- How we framed failure-and-recovery as a strength, not a weakness
- Final grade outcome (if comfortable sharing)

### Chapter 7 — Long-Term Behaviour Change
- How this project changed my pre-implementation checklist for every technical project
- Application to data centre work: "check the fundamentals before the complex"
- Why I now specifically document assumptions at the start of any diagnostic

---

## Common Follow-Up Questions & Strong Answer Bullets

| Follow-up | Key points |
|---|---|
| "Why didn't you do data exploration first?" | Overconfidence bias; complex model felt like a proxy for competence. Lesson: complexity is not a substitute for rigour. |
| "How did your teammates react when you admitted the error?" | Initially concerned about the timeline; my structured recovery plan (with clear task assignments and daily milestones) converted concern to confidence. |
| "Couldn't you have just added more epochs or tuned the neural net?" | I ran a quick experiment — adding epochs didn't help because the input features were still noisy. The problem was upstream of the model. |
| "What would you have done with more time?" | Explored ensemble methods (Random Forest, XGBoost) and compared interpretability vs. accuracy trade-offs. |
| "How does this apply to your DC work?" | Same principle: I now always verify the physical layer (cable, optic, port) before assuming a software or config issue. It's the data-quality step for physical infrastructure. |
