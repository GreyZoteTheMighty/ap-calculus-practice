// AP-style practice problems. Math is written in LaTeX ($...$ inline, $$...$$ display)
// and rendered with MathJax. Each question has exactly one correct choice (answer index).
// Contributions welcome — see README. Keep the schema and use topic strings from data/units.js.
// Schema: { id, unit, course, topic, difficulty, stem, choices, answer, solution }.
window.AP_CALC_QUESTIONS = [
  /* ===================== UNIT 1: Limits and Continuity ===================== */
  {
    id: "u1-1", unit: 1, course: "AB/BC", topic: "Algebraic limit techniques", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 3}\\frac{x^2-9}{x-3}$.",
    choices: ["$0$", "$3$", "$6$", "The limit does not exist"],
    answer: 2,
    solution: "Factor: $\\dfrac{x^2-9}{x-3}=\\dfrac{(x-3)(x+3)}{x-3}=x+3$ for $x\\neq 3$. As $x\\to 3$ this approaches $6$."
  },
  {
    id: "u1-2", unit: 1, course: "AB/BC", topic: "Estimating & evaluating limits", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin(5x)}{2x}$.",
    choices: ["$0$", "$\\dfrac{2}{5}$", "$\\dfrac{5}{2}$", "The limit does not exist"],
    answer: 2,
    solution: "Rewrite as $\\dfrac{5}{2}\\cdot\\dfrac{\\sin(5x)}{5x}$. Since $\\lim_{u\\to 0}\\dfrac{\\sin u}{u}=1$ with $u=5x$, the limit is $\\dfrac{5}{2}$."
  },
  {
    id: "u1-3", unit: 1, course: "AB/BC", topic: "Limits at infinity", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^2+2x}{5x^2-1}$.",
    choices: ["$0$", "$\\dfrac{3}{5}$", "$\\dfrac{2}{5}$", "$\\infty$"],
    answer: 1,
    solution: "Divide by $x^2$: $\\dfrac{3+2/x}{5-1/x^2}\\to\\dfrac{3}{5}$. For matching degrees, use the ratio of leading coefficients."
  },
  {
    id: "u1-4", unit: 1, course: "AB/BC", topic: "Continuity & discontinuities", difficulty: "Medium",
    stem: "Let $f(x)=\\dfrac{x^2-1}{x-1}$ for $x\\neq 1$ and $f(1)=k$. For what value of $k$ is $f$ continuous at $x=1$?",
    choices: ["$0$", "$1$", "$2$", "No value makes $f$ continuous"],
    answer: 2,
    solution: "For $x\\neq1$, $f(x)=x+1$, so $\\lim_{x\\to1}f(x)=2$. Continuity requires $f(1)=2$, so $k=2$."
  },
  {
    id: "u1-5", unit: 1, course: "AB/BC", topic: "Estimating & evaluating limits", difficulty: "Hard",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$.",
    choices: ["$0$", "$\\dfrac{1}{2}$", "$1$", "The limit does not exist"],
    answer: 1,
    solution: "Multiply by the conjugate: $\\dfrac{1-\\cos x}{x^2}\\cdot\\dfrac{1+\\cos x}{1+\\cos x}=\\dfrac{\\sin^2 x}{x^2(1+\\cos x)}\\to\\dfrac{1}{2}$."
  },
  {
    id: "u1-6", unit: 1, course: "AB/BC", topic: "Limits at infinity", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 2^{+}}\\frac{1}{x-2}$.",
    choices: ["$0$", "$+\\infty$", "$-\\infty$", "$\\dfrac{1}{2}$"],
    answer: 1,
    solution: "As $x\\to 2^{+}$, $x-2$ is small and positive, so $\\dfrac{1}{x-2}\\to +\\infty$."
  },
  {
    id: "u1-7", unit: 1, course: "AB/BC", topic: "Intermediate Value Theorem", difficulty: "Medium",
    stem: "$f$ is continuous on $[1,4]$ with $f(1)=-2$ and $f(4)=5$. Which statement must be true?",
    choices: [
      "$f$ has a maximum of $5$",
      "There exists $c\\in(1,4)$ with $f(c)=0$",
      "$f$ is increasing on $[1,4]$",
      "$f'(c)=0$ for some $c$"
    ],
    answer: 1,
    solution: "By the Intermediate Value Theorem, since $f$ is continuous and $0$ lies between $f(1)=-2$ and $f(4)=5$, there is some $c\\in(1,4)$ with $f(c)=0$."
  },
  {
    id: "u1-8", unit: 1, course: "AB/BC", topic: "Algebraic limit techniques", difficulty: "Hard",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 4}\\frac{\\sqrt{x}-2}{x-4}$.",
    choices: ["$0$", "$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "The limit does not exist"],
    answer: 1,
    solution: "Multiply by the conjugate: $\\dfrac{\\sqrt{x}-2}{x-4}\\cdot\\dfrac{\\sqrt{x}+2}{\\sqrt{x}+2}=\\dfrac{x-4}{(x-4)(\\sqrt{x}+2)}=\\dfrac{1}{\\sqrt{x}+2}\\to\\dfrac{1}{4}$."
  },
  {
    id: "u1-9", unit: 1, course: "AB/BC", topic: "Continuity & discontinuities", difficulty: "Medium",
    stem: "What type of discontinuity does $f(x)=\\dfrac{|x|}{x}$ have at $x=0$?",
    choices: ["Removable", "Jump", "Infinite", "None — it is continuous"],
    answer: 1,
    solution: "For $x>0$, $f=1$; for $x<0$, $f=-1$. The one-sided limits differ ($1$ vs $-1$), so there is a jump discontinuity."
  },
  {
    id: "u1-10", unit: 1, course: "AB/BC", topic: "Estimating & evaluating limits", difficulty: "Medium",
    stem: "If $-x^2\\le g(x)\\le x^2$ for all $x$, what is $\\displaystyle\\lim_{x\\to 0}g(x)$?",
    choices: ["$0$", "$1$", "Cannot be determined", "The limit does not exist"],
    answer: 0,
    solution: "By the Squeeze Theorem, both $-x^2\\to 0$ and $x^2\\to 0$ as $x\\to 0$, so $g(x)\\to 0$."
  },
  {
    id: "u1-11", unit: 1, course: "AB/BC", topic: "Limits at infinity", difficulty: "Hard",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\frac{\\sqrt{4x^2+1}}{x}$.",
    choices: ["$1$", "$2$", "$4$", "$\\infty$"],
    answer: 1,
    solution: "For $x>0$, $\\sqrt{4x^2+1}=x\\sqrt{4+1/x^2}$, so the ratio is $\\sqrt{4+1/x^2}\\to\\sqrt{4}=2$."
  },
  {
    id: "u1-12", unit: 1, course: "AB/BC", topic: "Algebraic limit techniques", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to -1}\\frac{x+1}{x^2-1}$.",
    choices: ["$-\\dfrac{1}{2}$", "$\\dfrac{1}{2}$", "$0$", "The limit does not exist"],
    answer: 0,
    solution: "$\\dfrac{x+1}{(x-1)(x+1)}=\\dfrac{1}{x-1}$ for $x\\neq-1$. As $x\\to-1$, this is $\\dfrac{1}{-2}=-\\dfrac{1}{2}$ (a removable discontinuity)."
  },

  /* ===================== UNIT 2: Definition & Fundamental Properties ===================== */
  {
    id: "u2-1", unit: 2, course: "AB/BC", topic: "Power rule", difficulty: "Easy",
    stem: "If $f(x)=5x^4-3x^2+7$, find $f'(x)$.",
    choices: ["$20x^3-6x$", "$20x^3-6x+7$", "$5x^3-3x$", "$20x^4-6x^2$"],
    answer: 0,
    solution: "Power rule term by term: $20x^3-6x$ (the constant $7$ differentiates to $0$)."
  },
  {
    id: "u2-2", unit: 2, course: "AB/BC", topic: "Definition of the derivative", difficulty: "Medium",
    stem: "Using the definition of the derivative, find $f'(2)$ for $f(x)=x^3$.",
    choices: ["$6$", "$8$", "$12$", "$3$"],
    answer: 2,
    solution: "$f'(x)=3x^2$, so $f'(2)=3(4)=12$. Equivalently $\\lim_{h\\to0}\\frac{(2+h)^3-8}{h}=12$."
  },
  {
    id: "u2-3", unit: 2, course: "AB/BC", topic: "Power rule", difficulty: "Medium",
    stem: "If $f(x)=\\sqrt{x}$, find $f'(4)$.",
    choices: ["$\\dfrac{1}{2}$", "$\\dfrac{1}{4}$", "$2$", "$4$"],
    answer: 1,
    solution: "$f(x)=x^{1/2}$ so $f'(x)=\\dfrac{1}{2\\sqrt{x}}$. Then $f'(4)=\\dfrac{1}{4}$."
  },
  {
    id: "u2-4", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[x^2\\sin x\\right]$.",
    choices: ["$2x\\cos x$", "$2x\\sin x+x^2\\cos x$", "$x^2\\cos x$", "$2x\\sin x-x^2\\cos x$"],
    answer: 1,
    solution: "Product rule: $2x\\sin x + x^2\\cos x$."
  },
  {
    id: "u2-5", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[\\dfrac{x}{x+1}\\right]$.",
    choices: ["$1$", "$\\dfrac{1}{(x+1)^2}$", "$\\dfrac{-1}{(x+1)^2}$", "$\\dfrac{2x+1}{(x+1)^2}$"],
    answer: 1,
    solution: "Quotient rule: $\\dfrac{(1)(x+1)-(x)(1)}{(x+1)^2}=\\dfrac{1}{(x+1)^2}$."
  },
  {
    id: "u2-6", unit: 2, course: "AB/BC", topic: "Derivatives of e^x, ln x, sin, cos", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[x\\,e^{x}\\right]$.",
    choices: ["$e^x$", "$e^x(1+x)$", "$xe^x$", "$e^x(x-1)$"],
    answer: 1,
    solution: "Product rule with $u=x$, $v=e^x$: $e^x + x e^x = e^x(1+x)$."
  },
  {
    id: "u2-7", unit: 2, course: "AB/BC", topic: "Derivatives of e^x, ln x, sin, cos", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[\\cos x\\right]$.",
    choices: ["$\\sin x$", "$-\\sin x$", "$\\cos x$", "$-\\cos x$"],
    answer: 1,
    solution: "The derivative of $\\cos x$ is $-\\sin x$."
  },
  {
    id: "u2-8", unit: 2, course: "AB/BC", topic: "Derivatives of e^x, ln x, sin, cos", difficulty: "Medium",
    stem: "If $f(x)=\\ln x$, find $f'(2)$.",
    choices: ["$\\dfrac{1}{2}$", "$2$", "$\\ln 2$", "$\\dfrac{1}{\\ln 2}$"],
    answer: 0,
    solution: "$f'(x)=\\dfrac{1}{x}$, so $f'(2)=\\dfrac{1}{2}$."
  },
  {
    id: "u2-9", unit: 2, course: "AB/BC", topic: "Power rule", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[\\dfrac{1}{x^2}\\right]$.",
    choices: ["$-\\dfrac{2}{x^3}$", "$\\dfrac{2}{x^3}$", "$-\\dfrac{1}{2x}$", "$\\dfrac{1}{x^3}$"],
    answer: 0,
    solution: "Write as $x^{-2}$. Power rule: $-2x^{-3}=-\\dfrac{2}{x^3}$."
  },
  {
    id: "u2-10", unit: 2, course: "AB/BC", topic: "Definition of the derivative", difficulty: "Hard",
    stem: "The limit $\\displaystyle\\lim_{h\\to 0}\\frac{\\sin\\!\\left(\\frac{\\pi}{6}+h\\right)-\\sin\\!\\left(\\frac{\\pi}{6}\\right)}{h}$ equals:",
    choices: ["$\\dfrac{1}{2}$", "$\\dfrac{\\sqrt{3}}{2}$", "$-\\dfrac{1}{2}$", "$1$"],
    answer: 1,
    solution: "This is the definition of $f'\\!\\left(\\frac{\\pi}{6}\\right)$ for $f(x)=\\sin x$. Since $f'(x)=\\cos x$, the value is $\\cos\\frac{\\pi}{6}=\\dfrac{\\sqrt{3}}{2}$."
  },
  {
    id: "u2-11", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[(2x+1)(x-3)\\right]$.",
    choices: ["$4x-5$", "$2x-5$", "$4x-6$", "$2$"],
    answer: 0,
    solution: "Product rule: $2(x-3)+(2x+1)(1)=2x-6+2x+1=4x-5$ (or expand to $2x^2-5x-3$ and differentiate)."
  },
  {
    id: "u2-12", unit: 2, course: "AB/BC", topic: "Derivatives of e^x, ln x, sin, cos", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[3\\sin x-2e^{x}\\right]$.",
    choices: ["$3\\cos x-2e^x$", "$-3\\cos x-2e^x$", "$3\\cos x-2xe^{x-1}$", "$3\\cos x+2e^x$"],
    answer: 0,
    solution: "Differentiate term by term: $3\\cos x-2e^x$."
  },

  /* ===================== UNIT 3: Composite, Implicit & Inverse ===================== */
  {
    id: "u3-1", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[(3x^2+1)^4\\right]$.",
    choices: ["$4(3x^2+1)^3$", "$24x(3x^2+1)^3$", "$12x(3x^2+1)^3$", "$(6x)^4$"],
    answer: 1,
    solution: "Chain rule: $4(3x^2+1)^3\\cdot 6x=24x(3x^2+1)^3$."
  },
  {
    id: "u3-2", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[\\sin(x^2)\\right]$.",
    choices: ["$\\cos(x^2)$", "$2x\\cos(x^2)$", "$2x\\sin(x^2)$", "$-2x\\cos(x^2)$"],
    answer: 1,
    solution: "Chain rule: $\\cos(x^2)\\cdot 2x=2x\\cos(x^2)$."
  },
  {
    id: "u3-3", unit: 3, course: "AB/BC", topic: "Implicit differentiation", difficulty: "Medium",
    stem: "If $x^2+y^2=25$, find $\\dfrac{dy}{dx}$.",
    choices: ["$-\\dfrac{x}{y}$", "$\\dfrac{x}{y}$", "$-\\dfrac{y}{x}$", "$\\dfrac{25-x^2}{2y}$"],
    answer: 0,
    solution: "Differentiate implicitly: $2x+2y\\,y'=0\\Rightarrow y'=-\\dfrac{x}{y}$."
  },
  {
    id: "u3-4", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[\\ln(x^2+1)\\right]$.",
    choices: ["$\\dfrac{1}{x^2+1}$", "$\\dfrac{2x}{x^2+1}$", "$\\dfrac{1}{2x}$", "$2x\\ln(x^2+1)$"],
    answer: 1,
    solution: "Chain rule: $\\dfrac{1}{x^2+1}\\cdot 2x=\\dfrac{2x}{x^2+1}$."
  },
  {
    id: "u3-5", unit: 3, course: "AB/BC", topic: "Derivatives of inverse functions", difficulty: "Hard",
    stem: "Let $f(x)=x^3+x$, so $f(1)=2$. Find $(f^{-1})'(2)$.",
    choices: ["$4$", "$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$2$"],
    answer: 1,
    solution: "$(f^{-1})'(a)=\\dfrac{1}{f'(f^{-1}(a))}$. Here $f^{-1}(2)=1$ and $f'(x)=3x^2+1$, so $f'(1)=4$ and $(f^{-1})'(2)=\\dfrac{1}{4}$."
  },
  {
    id: "u3-6", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[\\tan(3x)\\right]$.",
    choices: ["$\\sec^2(3x)$", "$3\\sec^2(3x)$", "$3\\tan(3x)$", "$\\sec(3x)\\tan(3x)$"],
    answer: 1,
    solution: "$\\frac{d}{dx}\\tan u=\\sec^2 u\\cdot u'$ with $u=3x$: $3\\sec^2(3x)$."
  },
  {
    id: "u3-7", unit: 3, course: "AB/BC", topic: "Higher-order derivatives", difficulty: "Easy",
    stem: "If $f(x)=\\sin x$, find $f''(x)$.",
    choices: ["$\\sin x$", "$-\\sin x$", "$\\cos x$", "$-\\cos x$"],
    answer: 1,
    solution: "$f'(x)=\\cos x$ and $f''(x)=-\\sin x$."
  },
  {
    id: "u3-8", unit: 3, course: "AB/BC", topic: "Implicit differentiation", difficulty: "Medium",
    stem: "If $y^2=x^3$, find $\\dfrac{dy}{dx}$.",
    choices: ["$\\dfrac{3x^2}{2y}$", "$\\dfrac{2y}{3x^2}$", "$\\dfrac{3x^2}{y}$", "$\\dfrac{x^2}{2y}$"],
    answer: 0,
    solution: "Differentiate implicitly: $2y\\,y'=3x^2\\Rightarrow y'=\\dfrac{3x^2}{2y}$."
  },
  {
    id: "u3-9", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[e^{3x}\\right]$.",
    choices: ["$e^{3x}$", "$3e^{3x}$", "$3xe^{3x-1}$", "$e^{3}$"],
    answer: 1,
    solution: "Chain rule: $e^{3x}\\cdot 3=3e^{3x}$."
  },
  {
    id: "u3-10", unit: 3, course: "AB/BC", topic: "Derivatives of inverse functions", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[\\arctan x\\right]$.",
    choices: ["$\\dfrac{1}{1+x^2}$", "$\\dfrac{1}{\\sqrt{1-x^2}}$", "$\\dfrac{-1}{1+x^2}$", "$\\sec^2 x$"],
    answer: 0,
    solution: "The derivative of the inverse tangent is $\\dfrac{1}{1+x^2}$."
  },
  {
    id: "u3-11", unit: 3, course: "AB/BC", topic: "Higher-order derivatives", difficulty: "Medium",
    stem: "If $f(x)=x^3-2x^2$, find $f''(1)$.",
    choices: ["$2$", "$-1$", "$6$", "$-4$"],
    answer: 0,
    solution: "$f'(x)=3x^2-4x$, $f''(x)=6x-4$, so $f''(1)=6-4=2$."
  },
  {
    id: "u3-12", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[\\sin^2 x\\right]$.",
    choices: ["$2\\sin x$", "$2\\sin x\\cos x$", "$\\cos^2 x$", "$2\\cos x$"],
    answer: 1,
    solution: "Chain rule on $(\\sin x)^2$: $2\\sin x\\cdot\\cos x=\\sin(2x)$."
  },

  /* ===================== UNIT 4: Contextual Applications ===================== */
  {
    id: "u4-1", unit: 4, course: "AB/BC", topic: "Motion (position, velocity, acceleration)", difficulty: "Medium",
    stem: "A particle moves with position $s(t)=t^3-6t^2+9t$. What is its velocity at $t=2$?",
    choices: ["$-3$", "$3$", "$9$", "$0$"],
    answer: 0,
    solution: "$s'(t)=3t^2-12t+9$. At $t=2$: $12-24+9=-3$."
  },
  {
    id: "u4-2", unit: 4, course: "AB/BC", topic: "Related rates", difficulty: "Medium",
    stem: "The radius of a circle increases at $\\dfrac{dr}{dt}=2$ cm/s. How fast is the area changing when $r=3$ cm?",
    choices: ["$6\\pi$ cm$^2$/s", "$12\\pi$ cm$^2$/s", "$9\\pi$ cm$^2$/s", "$4\\pi$ cm$^2$/s"],
    answer: 1,
    solution: "$A=\\pi r^2\\Rightarrow\\dfrac{dA}{dt}=2\\pi r\\dfrac{dr}{dt}=2\\pi(3)(2)=12\\pi$."
  },
  {
    id: "u4-3", unit: 4, course: "AB/BC", topic: "Linear approximation", difficulty: "Hard",
    stem: "Use the linearization of $f(x)=\\sqrt{x}$ at $x=4$ to approximate $\\sqrt{4.1}$.",
    choices: ["$2.05$", "$2.025$", "$2.1$", "$2.0025$"],
    answer: 1,
    solution: "$L(x)=2+\\tfrac14(x-4)$, so $L(4.1)=2+\\tfrac14(0.1)=2.025$."
  },
  {
    id: "u4-4", unit: 4, course: "AB/BC", topic: "Motion (position, velocity, acceleration)", difficulty: "Medium",
    stem: "A particle has position $s(t)=t^3-6t^2+9t$. At which times is the particle at rest?",
    choices: ["$t=0$ only", "$t=1$ and $t=3$", "$t=2$ only", "$t=3$ only"],
    answer: 1,
    solution: "At rest when $v(t)=3t^2-12t+9=3(t-1)(t-3)=0$, i.e. $t=1$ and $t=3$."
  },
  {
    id: "u4-5", unit: 4, course: "AB/BC", topic: "L'Hospital's Rule", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{e^{x}-1}{x}$.",
    choices: ["$0$", "$1$", "$e$", "The limit does not exist"],
    answer: 1,
    solution: "This is $\\tfrac{0}{0}$. By L'Hospital's Rule, $\\lim_{x\\to0}\\dfrac{e^x}{1}=1$."
  },
  {
    id: "u4-6", unit: 4, course: "AB/BC", topic: "Motion (position, velocity, acceleration)", difficulty: "Easy",
    stem: "A particle has velocity $v(t)=4t-6$. What is its acceleration at any time $t$?",
    choices: ["$4$", "$4t$", "$-6$", "$2t^2-6t$"],
    answer: 0,
    solution: "Acceleration is $a(t)=v'(t)=4$ (constant)."
  },
  {
    id: "u4-7", unit: 4, course: "AB/BC", topic: "Related rates", difficulty: "Hard",
    stem: "A cube's side length increases at $2$ cm/s. How fast is its volume increasing when the side is $3$ cm?",
    choices: ["$18$ cm$^3$/s", "$27$ cm$^3$/s", "$54$ cm$^3$/s", "$108$ cm$^3$/s"],
    answer: 2,
    solution: "$V=s^3\\Rightarrow\\dfrac{dV}{dt}=3s^2\\dfrac{ds}{dt}=3(9)(2)=54$ cm$^3$/s."
  },
  {
    id: "u4-8", unit: 4, course: "AB/BC", topic: "L'Hospital's Rule", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\frac{\\ln x}{x}$.",
    choices: ["$0$", "$1$", "$\\infty$", "$e$"],
    answer: 0,
    solution: "This is $\\tfrac{\\infty}{\\infty}$. By L'Hospital's Rule, $\\lim_{x\\to\\infty}\\dfrac{1/x}{1}=\\lim_{x\\to\\infty}\\dfrac{1}{x}=0$."
  },
  {
    id: "u4-9", unit: 4, course: "AB/BC", topic: "Linear approximation", difficulty: "Medium",
    stem: "Use the linearization of $f(x)=x^3$ at $x=2$ to approximate $(2.01)^3$.",
    choices: ["$8.00$", "$8.12$", "$8.06$", "$8.24$"],
    answer: 1,
    solution: "$f(2)=8$, $f'(x)=3x^2$ so $f'(2)=12$. $L(2.01)=8+12(0.01)=8.12$."
  },
  {
    id: "u4-10", unit: 4, course: "AB/BC", topic: "Motion (position, velocity, acceleration)", difficulty: "Medium",
    stem: "A particle has velocity $v(t)=t^2-4$. In which direction is it moving at $t=1$?",
    choices: ["Positive (right)", "Negative (left)", "It is at rest", "Cannot be determined"],
    answer: 1,
    solution: "$v(1)=1-4=-3<0$, so the particle is moving in the negative direction."
  },
  {
    id: "u4-11", unit: 4, course: "AB/BC", topic: "Related rates", difficulty: "Medium",
    stem: "The side of a square increases at $3$ cm/s. How fast is the area increasing when the side is $5$ cm?",
    choices: ["$15$ cm$^2$/s", "$25$ cm$^2$/s", "$30$ cm$^2$/s", "$75$ cm$^2$/s"],
    answer: 2,
    solution: "$A=s^2\\Rightarrow\\dfrac{dA}{dt}=2s\\dfrac{ds}{dt}=2(5)(3)=30$ cm$^2$/s."
  },
  {
    id: "u4-12", unit: 4, course: "AB/BC", topic: "L'Hospital's Rule", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{e^{2x}-1}{3x}$.",
    choices: ["$0$", "$\\dfrac{2}{3}$", "$\\dfrac{1}{3}$", "$2$"],
    answer: 1,
    solution: "This is $\\tfrac{0}{0}$. By L'Hospital's Rule, $\\lim_{x\\to0}\\dfrac{2e^{2x}}{3}=\\dfrac{2}{3}$."
  },

  /* ===================== UNIT 5: Analytical Applications ===================== */
  {
    id: "u5-1", unit: 5, course: "AB/BC", topic: "Increasing/decreasing & extrema", difficulty: "Medium",
    stem: "For $f(x)=x^3-3x$, at which $x$ does $f$ have a local maximum?",
    choices: ["$x=1$", "$x=-1$", "$x=0$", "$f$ has no local maximum"],
    answer: 1,
    solution: "$f'(x)=3(x-1)(x+1)$. $f'$ changes from $+$ to $-$ at $x=-1$, a local maximum."
  },
  {
    id: "u5-2", unit: 5, course: "AB/BC", topic: "Concavity & inflection points", difficulty: "Medium",
    stem: "Find the $x$-coordinate of the inflection point of $f(x)=x^3-3x^2$.",
    choices: ["$x=0$", "$x=1$", "$x=2$", "$x=-1$"],
    answer: 1,
    solution: "$f''(x)=6x-6=0$ at $x=1$, where it changes sign — an inflection point."
  },
  {
    id: "u5-3", unit: 5, course: "AB/BC", topic: "Mean Value Theorem", difficulty: "Medium",
    stem: "For $f(x)=x^2$ on $[0,2]$, find the value $c$ guaranteed by the Mean Value Theorem.",
    choices: ["$c=1$", "$c=\\dfrac{1}{2}$", "$c=2$", "$c=\\sqrt{2}$"],
    answer: 0,
    solution: "$f'(c)=\\dfrac{f(2)-f(0)}{2}=2$. Since $f'(x)=2x$, $2c=2\\Rightarrow c=1$."
  },
  {
    id: "u5-4", unit: 5, course: "AB/BC", topic: "Optimization", difficulty: "Hard",
    stem: "A rectangle has perimeter $20$. What is the maximum possible area?",
    choices: ["$20$", "$25$", "$50$", "$100$"],
    answer: 1,
    solution: "$A=x(10-x)$, $A'=10-2x=0\\Rightarrow x=5$, giving $A=25$ (a square)."
  },
  {
    id: "u5-5", unit: 5, course: "AB/BC", topic: "Concavity & inflection points", difficulty: "Easy",
    stem: "On what interval is $f(x)=x^3$ concave up?",
    choices: ["$(-\\infty,0)$", "$(0,\\infty)$", "$(-\\infty,\\infty)$", "Never concave up"],
    answer: 1,
    solution: "$f''(x)=6x>0$ when $x>0$, so $f$ is concave up on $(0,\\infty)$."
  },
  {
    id: "u5-6", unit: 5, course: "AB/BC", topic: "Increasing/decreasing & extrema", difficulty: "Easy",
    stem: "On what interval is $f(x)=x^2-4x$ decreasing?",
    choices: ["$(-\\infty,2)$", "$(2,\\infty)$", "$(-\\infty,\\infty)$", "$(0,4)$"],
    answer: 0,
    solution: "$f'(x)=2x-4<0$ when $x<2$, so decreasing on $(-\\infty,2)$."
  },
  {
    id: "u5-7", unit: 5, course: "AB/BC", topic: "Increasing/decreasing & extrema", difficulty: "Hard",
    stem: "What is the absolute maximum value of $f(x)=x^3-3x$ on the closed interval $[0,2]$?",
    choices: ["$-2$", "$0$", "$2$", "$8$"],
    answer: 2,
    solution: "Check critical points and endpoints: $f(0)=0$, $f(1)=-2$, $f(2)=2$. The absolute maximum value is $2$ (at $x=2$)."
  },
  {
    id: "u5-8", unit: 5, course: "AB/BC", topic: "Mean Value Theorem", difficulty: "Medium",
    stem: "For $f(x)=x^2-4$ on $[-2,2]$, find the value $c$ guaranteed by Rolle's Theorem.",
    choices: ["$c=0$", "$c=1$", "$c=2$", "$c=-2$"],
    answer: 0,
    solution: "Since $f(-2)=f(2)=0$, Rolle's Theorem gives $f'(c)=0$. As $f'(x)=2x$, $c=0$."
  },
  {
    id: "u5-9", unit: 5, course: "AB/BC", topic: "Concavity & inflection points", difficulty: "Medium",
    stem: "If $f''(x)=6x-12$, on what interval is $f$ concave down?",
    choices: ["$(-\\infty,2)$", "$(2,\\infty)$", "$(-\\infty,\\infty)$", "$(0,2)$"],
    answer: 0,
    solution: "$f$ is concave down where $f''(x)<0$: $6x-12<0\\Rightarrow x<2$, i.e. $(-\\infty,2)$."
  },
  {
    id: "u5-10", unit: 5, course: "AB/BC", topic: "Increasing/decreasing & extrema", difficulty: "Medium",
    stem: "If $f'(x)=(x-2)(x+1)$, at which $x$ does $f$ have a local minimum?",
    choices: ["$x=-1$", "$x=2$", "$x=0$", "$f$ has no local minimum"],
    answer: 1,
    solution: "By the First Derivative Test, $f'$ changes from $-$ to $+$ at $x=2$, a local minimum."
  },
  {
    id: "u5-11", unit: 5, course: "AB/BC", topic: "Optimization", difficulty: "Hard",
    stem: "A rectangular pen is built against a wall using $40$ m of fence for the other three sides. What is the maximum enclosed area?",
    choices: ["$100$ m$^2$", "$150$ m$^2$", "$200$ m$^2$", "$400$ m$^2$"],
    answer: 2,
    solution: "Let the side parallel to the wall be $x$ and the two perpendicular sides $y$: $x+2y=40$. Area $A=xy=(40-2y)y$, $A'=40-4y=0\\Rightarrow y=10,\\,x=20$, so $A=200$ m$^2$."
  },
  {
    id: "u5-12", unit: 5, course: "AB/BC", topic: "Concavity & inflection points", difficulty: "Hard",
    stem: "Does $f(x)=x^4$ have an inflection point at $x=0$?",
    choices: [
      "No — $f''$ does not change sign there",
      "Yes — because $f''(0)=0$",
      "Yes — because $f'(0)=0$",
      "No — because $f$ has a maximum there"
    ],
    answer: 0,
    solution: "$f''(x)=12x^2\\ge 0$ for all $x$, so it is $0$ at $x=0$ but does not change sign. There is no inflection point (an inflection point requires a sign change in $f''$)."
  },

  /* ===================== UNIT 6: Integration and Accumulation ===================== */
  {
    id: "u6-1", unit: 6, course: "AB/BC", topic: "Antiderivatives & indefinite integrals", difficulty: "Easy",
    stem: "Find $\\displaystyle\\int 6x^2\\,dx$.",
    choices: ["$2x^3+C$", "$12x+C$", "$6x^3+C$", "$3x^3+C$"],
    answer: 0,
    solution: "$\\int 6x^2\\,dx=6\\cdot\\dfrac{x^3}{3}+C=2x^3+C$."
  },
  {
    id: "u6-2", unit: 6, course: "AB/BC", topic: "Riemann sums & definite integrals", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\int_0^2 3x^2\\,dx$.",
    choices: ["$4$", "$6$", "$8$", "$12$"],
    answer: 2,
    solution: "$\\left[x^3\\right]_0^2=8-0=8$."
  },
  {
    id: "u6-3", unit: 6, course: "AB/BC", topic: "u-substitution", difficulty: "Medium",
    stem: "Find $\\displaystyle\\int 2x(x^2+1)^3\\,dx$.",
    choices: ["$(x^2+1)^4+C$", "$\\dfrac{(x^2+1)^4}{4}+C$", "$\\dfrac{(x^2+1)^2}{2}+C$", "$3(x^2+1)^2+C$"],
    answer: 1,
    solution: "Let $u=x^2+1$, $du=2x\\,dx$: $\\int u^3\\,du=\\dfrac{(x^2+1)^4}{4}+C$."
  },
  {
    id: "u6-4", unit: 6, course: "AB/BC", topic: "Fundamental Theorem of Calculus", difficulty: "Medium",
    stem: "If $g(x)=\\displaystyle\\int_0^x \\sin(t^2)\\,dt$, find $g'(x)$.",
    choices: ["$\\cos(x^2)$", "$\\sin(x^2)$", "$2x\\sin(x^2)$", "$-\\cos(x^2)$"],
    answer: 1,
    solution: "By the Fundamental Theorem of Calculus (Part 1), $g'(x)=\\sin(x^2)$."
  },
  {
    id: "u6-5", unit: 6, course: "AB/BC", topic: "Riemann sums & definite integrals", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\int_1^{e}\\frac{1}{x}\\,dx$.",
    choices: ["$0$", "$1$", "$e$", "$e-1$"],
    answer: 1,
    solution: "$\\left[\\ln|x|\\right]_1^e=\\ln e-\\ln 1=1$."
  },
  {
    id: "u6-6", unit: 6, course: "AB/BC", topic: "Riemann sums & definite integrals", difficulty: "Medium",
    stem: "Using a left Riemann sum with two equal subintervals, approximate $\\displaystyle\\int_0^4 x^2\\,dx$.",
    choices: ["$8$", "$16$", "$20$", "$24$"],
    answer: 0,
    solution: "$\\Delta x=2$, left endpoints $x=0,2$: $2\\big(f(0)+f(2)\\big)=2(0+4)=8$."
  },
  {
    id: "u6-7", unit: 6, course: "AB/BC", topic: "Antiderivatives & indefinite integrals", difficulty: "Easy",
    stem: "Find $\\displaystyle\\int \\cos x\\,dx$.",
    choices: ["$\\sin x+C$", "$-\\sin x+C$", "$\\cos x+C$", "$-\\cos x+C$"],
    answer: 0,
    solution: "An antiderivative of $\\cos x$ is $\\sin x$, so $\\int\\cos x\\,dx=\\sin x+C$."
  },
  {
    id: "u6-8", unit: 6, course: "AB/BC", topic: "Riemann sums & definite integrals", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\int_0^{\\pi} \\sin x\\,dx$.",
    choices: ["$0$", "$1$", "$2$", "$\\pi$"],
    answer: 2,
    solution: "$\\left[-\\cos x\\right]_0^{\\pi}=-\\cos\\pi+\\cos 0=1+1=2$."
  },
  {
    id: "u6-9", unit: 6, course: "AB/BC", topic: "u-substitution", difficulty: "Hard",
    stem: "Find $\\displaystyle\\int \\cos x\\,e^{\\sin x}\\,dx$.",
    choices: ["$e^{\\sin x}+C$", "$e^{\\cos x}+C$", "$\\sin x\\,e^{\\sin x}+C$", "$e^{\\sin x}\\cos x+C$"],
    answer: 0,
    solution: "Let $u=\\sin x$, $du=\\cos x\\,dx$: $\\int e^{u}\\,du=e^{\\sin x}+C$."
  },
  {
    id: "u6-10", unit: 6, course: "AB/BC", topic: "Fundamental Theorem of Calculus", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\int_1^3 2x\\,dx$.",
    choices: ["$6$", "$8$", "$9$", "$4$"],
    answer: 1,
    solution: "$\\left[x^2\\right]_1^3=9-1=8$."
  },
  {
    id: "u6-11", unit: 6, course: "AB/BC", topic: "Antiderivatives & indefinite integrals", difficulty: "Medium",
    stem: "Find $\\displaystyle\\int \\frac{1}{x^2}\\,dx$.",
    choices: ["$-\\dfrac{1}{x}+C$", "$\\dfrac{1}{x}+C$", "$\\ln x^2+C$", "$-\\dfrac{2}{x^3}+C$"],
    answer: 0,
    solution: "Write as $x^{-2}$: $\\int x^{-2}\\,dx=\\dfrac{x^{-1}}{-1}+C=-\\dfrac{1}{x}+C$."
  },
  {
    id: "u6-12", unit: 6, course: "AB/BC", topic: "Fundamental Theorem of Calculus", difficulty: "Hard",
    stem: "Find $\\dfrac{d}{dx}\\displaystyle\\int_0^{x^2}\\cos t\\,dt$.",
    choices: ["$\\cos(x^2)$", "$2x\\cos(x^2)$", "$\\sin(x^2)$", "$2x\\sin(x^2)$"],
    answer: 1,
    solution: "By the FTC with the chain rule, $\\dfrac{d}{dx}\\int_0^{x^2}\\cos t\\,dt=\\cos(x^2)\\cdot\\dfrac{d}{dx}(x^2)=2x\\cos(x^2)$."
  },

  /* ===================== UNIT 7: Differential Equations ===================== */
  {
    id: "u7-1", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Medium",
    stem: "Solve $\\dfrac{dy}{dx}=2x$ with $y(0)=1$.",
    choices: ["$y=x^2$", "$y=x^2+1$", "$y=2x^2+1$", "$y=x^2-1$"],
    answer: 1,
    solution: "Integrate: $y=x^2+C$. Using $y(0)=1$ gives $C=1$, so $y=x^2+1$."
  },
  {
    id: "u7-2", unit: 7, course: "AB/BC", topic: "Exponential & logistic growth", difficulty: "Medium",
    stem: "The general solution of $\\dfrac{dy}{dx}=y$ is:",
    choices: ["$y=Cx$", "$y=Ce^{x}$", "$y=x+C$", "$y=e^{x}+C$"],
    answer: 1,
    solution: "Separate: $\\int\\frac{dy}{y}=\\int dx\\Rightarrow\\ln|y|=x+C_1$, so $y=Ce^{x}$."
  },
  {
    id: "u7-3", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Hard",
    stem: "Solve $\\dfrac{dy}{dx}=\\dfrac{x}{y}$ (general solution).",
    choices: ["$y^2=x^2+C$", "$y=x^2+C$", "$y^2-x^2=0$", "$y=\\ln x+C$"],
    answer: 0,
    solution: "Separate: $y\\,dy=x\\,dx$. Integrate: $\\tfrac{y^2}{2}=\\tfrac{x^2}{2}+C_1$, so $y^2=x^2+C$."
  },
  {
    id: "u7-4", unit: 7, course: "AB/BC", topic: "Exponential & logistic growth", difficulty: "Medium",
    stem: "A population satisfies $\\dfrac{dP}{dt}=0.05P$ with $P(0)=200$. What is $P(t)$?",
    choices: ["$P=200+0.05t$", "$P=200e^{0.05t}$", "$P=0.05e^{200t}$", "$P=200t^{0.05}$"],
    answer: 1,
    solution: "Exponential growth: $P(t)=P(0)e^{kt}=200e^{0.05t}$."
  },
  {
    id: "u7-5", unit: 7, course: "BC", topic: "Euler's method (BC)", difficulty: "Hard",
    stem: "Given $\\dfrac{dy}{dx}=x+y$ and $y(0)=1$, use Euler's method with step size $\\Delta x=0.5$ to approximate $y(0.5)$.",
    choices: ["$1.0$", "$1.5$", "$2.0$", "$1.25$"],
    answer: 1,
    solution: "Slope at $(0,1)$ is $0+1=1$. Then $y(0.5)\\approx 1+0.5(1)=1.5$."
  },
  {
    id: "u7-6", unit: 7, course: "BC", topic: "Exponential & logistic growth", difficulty: "Medium",
    stem: "For the logistic model $\\dfrac{dP}{dt}=0.1P\\left(1-\\dfrac{P}{500}\\right)$, what is the carrying capacity?",
    choices: ["$0.1$", "$100$", "$250$", "$500$"],
    answer: 3,
    solution: "In $\\dfrac{dP}{dt}=kP\\left(1-\\dfrac{P}{L}\\right)$, the carrying capacity is $L=500$ (growth is fastest at $P=250$)."
  },
  {
    id: "u7-7", unit: 7, course: "AB/BC", topic: "Slope fields", difficulty: "Medium",
    stem: "For the differential equation $\\dfrac{dy}{dx}=x$, what is the slope of the slope field at every point on the $y$-axis?",
    choices: ["$0$", "$1$", "Undefined", "It depends on $y$"],
    answer: 0,
    solution: "On the $y$-axis, $x=0$, so $\\dfrac{dy}{dx}=0$ regardless of $y$: the segments are horizontal."
  },
  {
    id: "u7-8", unit: 7, course: "AB/BC", topic: "Slope fields", difficulty: "Medium",
    stem: "For the slope field of $\\dfrac{dy}{dx}=y$, along which line are all the slope segments horizontal?",
    choices: ["$x=0$", "$y=0$", "$y=x$", "$y=1$"],
    answer: 1,
    solution: "The slope is $0$ where $y=0$, i.e. along the $x$-axis, so segments there are horizontal."
  },
  {
    id: "u7-9", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Hard",
    stem: "Solve $\\dfrac{dy}{dx}=xy$ with $y(0)=1$.",
    choices: ["$y=e^{x^2/2}$", "$y=e^{x^2}$", "$y=\\tfrac{x^2}{2}+1$", "$y=e^{x}$"],
    answer: 0,
    solution: "Separate: $\\dfrac{dy}{y}=x\\,dx\\Rightarrow\\ln y=\\tfrac{x^2}{2}+C$. With $y(0)=1$, $C=0$, so $y=e^{x^2/2}$."
  },
  {
    id: "u7-10", unit: 7, course: "AB/BC", topic: "Exponential & logistic growth", difficulty: "Medium",
    stem: "Bacteria grow according to $\\dfrac{dP}{dt}=0.5P$ with $P(0)=100$. Approximately what is $P(2)$?",
    choices: ["$200$", "$272$", "$100e^{0.5}$", "$150$"],
    answer: 1,
    solution: "$P(t)=100e^{0.5t}$, so $P(2)=100e^{1}\\approx 271.8\\approx 272$."
  },
  {
    id: "u7-11", unit: 7, course: "BC", topic: "Euler's method (BC)", difficulty: "Hard",
    stem: "Given $\\dfrac{dy}{dx}=2x+y$ and $y(0)=1$, use Euler's method with $\\Delta x=1$ to estimate $y(1)$.",
    choices: ["$1$", "$2$", "$3$", "$4$"],
    answer: 1,
    solution: "Slope at $(0,1)$ is $2(0)+1=1$. Then $y(1)\\approx 1+1(1)=2$."
  },
  {
    id: "u7-12", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Medium",
    stem: "Solve $\\dfrac{dy}{dx}=6x^2$ with $y(1)=5$.",
    choices: ["$y=2x^3+3$", "$y=2x^3+5$", "$y=6x^3+5$", "$y=2x^3-3$"],
    answer: 0,
    solution: "Integrate: $y=2x^3+C$. Using $y(1)=5$: $5=2+C\\Rightarrow C=3$, so $y=2x^3+3$."
  },

  /* ===================== UNIT 8: Applications of Integration ===================== */
  {
    id: "u8-1", unit: 8, course: "AB/BC", topic: "Area between curves", difficulty: "Medium",
    stem: "Find the area of the region between $y=x$ and $y=x^2$ from $x=0$ to $x=1$.",
    choices: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$\\dfrac{5}{6}$"],
    answer: 0,
    solution: "On $[0,1]$, $x\\ge x^2$. Area $=\\int_0^1 (x-x^2)\\,dx=\\tfrac12-\\tfrac13=\\tfrac16$."
  },
  {
    id: "u8-2", unit: 8, course: "AB/BC", topic: "Average value of a function", difficulty: "Medium",
    stem: "Find the average value of $f(x)=x^2$ on $[0,3]$.",
    choices: ["$3$", "$9$", "$\\dfrac{9}{2}$", "$\\dfrac{1}{3}$"],
    answer: 0,
    solution: "Average $=\\dfrac{1}{3}\\int_0^3 x^2\\,dx=\\dfrac13\\cdot 9=3$."
  },
  {
    id: "u8-3", unit: 8, course: "AB/BC", topic: "Volumes of revolution", difficulty: "Hard",
    stem: "The region under $y=\\sqrt{x}$ from $x=0$ to $x=4$ is revolved about the $x$-axis. Find the volume.",
    choices: ["$4\\pi$", "$8\\pi$", "$16\\pi$", "$\\dfrac{32\\pi}{3}$"],
    answer: 1,
    solution: "Disk method: $V=\\pi\\int_0^4 (\\sqrt{x})^2\\,dx=\\pi\\int_0^4 x\\,dx=\\pi\\cdot 8=8\\pi$."
  },
  {
    id: "u8-4", unit: 8, course: "AB/BC", topic: "Accumulation & net change", difficulty: "Medium",
    stem: "A particle moves with velocity $v(t)=3t^2$. What is its displacement from $t=0$ to $t=2$?",
    choices: ["$6$", "$8$", "$12$", "$4$"],
    answer: 1,
    solution: "Displacement $=\\int_0^2 3t^2\\,dt=\\left[t^3\\right]_0^2=8$."
  },
  {
    id: "u8-5", unit: 8, course: "AB/BC", topic: "Accumulation & net change", difficulty: "Medium",
    stem: "Water flows into a tank at rate $r(t)=4t$ liters/min. How many liters enter during the first $3$ minutes?",
    choices: ["$12$", "$18$", "$36$", "$6$"],
    answer: 1,
    solution: "Total $=\\int_0^3 4t\\,dt=\\left[2t^2\\right]_0^3=18$ liters."
  },
  {
    id: "u8-6", unit: 8, course: "AB/BC", topic: "Accumulation & net change", difficulty: "Hard",
    stem: "A particle moves with velocity $v(t)=t-2$ on $[0,3]$. What is the total distance traveled?",
    choices: ["$1.5$", "$2.5$", "$3$", "$0.5$"],
    answer: 1,
    solution: "Total distance $=\\int_0^3 |t-2|\\,dt=\\int_0^2 (2-t)\\,dt+\\int_2^3 (t-2)\\,dt=2+\\tfrac12=2.5$."
  },
  {
    id: "u8-7", unit: 8, course: "AB/BC", topic: "Average value of a function", difficulty: "Easy",
    stem: "Find the average value of $f(x)=2x$ on $[0,4]$.",
    choices: ["$2$", "$4$", "$8$", "$16$"],
    answer: 1,
    solution: "Average $=\\dfrac{1}{4}\\int_0^4 2x\\,dx=\\dfrac14\\cdot 16=4$."
  },
  {
    id: "u8-8", unit: 8, course: "AB/BC", topic: "Area between curves", difficulty: "Hard",
    stem: "Find the area of the region bounded by $y=4$ and $y=x^2$.",
    choices: ["$\\dfrac{16}{3}$", "$\\dfrac{32}{3}$", "$8$", "$16$"],
    answer: 1,
    solution: "The curves meet at $x=\\pm 2$. Area $=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\tfrac{x^3}{3}\\right]_{-2}^{2}=\\dfrac{32}{3}$."
  },
  {
    id: "u8-9", unit: 8, course: "AB/BC", topic: "Volumes of revolution", difficulty: "Medium",
    stem: "The region under $y=x$ from $x=0$ to $x=3$ is revolved about the $x$-axis. Find the volume.",
    choices: ["$3\\pi$", "$9\\pi$", "$27\\pi$", "$18\\pi$"],
    answer: 1,
    solution: "Disk method: $V=\\pi\\int_0^3 x^2\\,dx=\\pi\\left[\\tfrac{x^3}{3}\\right]_0^3=\\pi\\cdot 9=9\\pi$."
  },
  {
    id: "u8-10", unit: 8, course: "AB/BC", topic: "Accumulation & net change", difficulty: "Medium",
    stem: "If $f(0)=5$ and $\\displaystyle\\int_0^4 f'(x)\\,dx=10$, what is $f(4)$?",
    choices: ["$5$", "$10$", "$15$", "$50$"],
    answer: 2,
    solution: "By the Net Change Theorem, $f(4)=f(0)+\\int_0^4 f'(x)\\,dx=5+10=15$."
  },
  {
    id: "u8-11", unit: 8, course: "AB/BC", topic: "Volumes of revolution", difficulty: "Hard",
    stem: "The region between $y=x$ and $y=x^2$ (from $x=0$ to $x=1$) is revolved about the $x$-axis. Find the volume.",
    choices: ["$\\dfrac{\\pi}{15}$", "$\\dfrac{2\\pi}{15}$", "$\\dfrac{\\pi}{6}$", "$\\dfrac{\\pi}{3}$"],
    answer: 1,
    solution: "Washers with outer radius $x$, inner radius $x^2$: $V=\\pi\\int_0^1 (x^2-x^4)\\,dx=\\pi\\left(\\tfrac13-\\tfrac15\\right)=\\dfrac{2\\pi}{15}$."
  },
  {
    id: "u8-12", unit: 8, course: "AB/BC", topic: "Area between curves", difficulty: "Medium",
    stem: "Find the area of the region between $y=\\sqrt{x}$ and $y=x^2$ from $x=0$ to $x=1$.",
    choices: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$\\dfrac{2}{3}$"],
    answer: 1,
    solution: "On $[0,1]$, $\\sqrt{x}\\ge x^2$. Area $=\\int_0^1 (\\sqrt{x}-x^2)\\,dx=\\tfrac23-\\tfrac13=\\tfrac13$."
  },

  /* ===================== UNIT 9 (BC): Parametric, Polar, Vector ===================== */
  {
    id: "u9-1", unit: 9, course: "BC", topic: "Parametric derivatives & arc length", difficulty: "Medium",
    stem: "For the parametric curve $x=t^2$, $y=t^3$, find $\\dfrac{dy}{dx}$.",
    choices: ["$\\dfrac{3t}{2}$", "$\\dfrac{2}{3t}$", "$t$", "$6t$"],
    answer: 0,
    solution: "$\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}=\\dfrac{3t^2}{2t}=\\dfrac{3t}{2}$."
  },
  {
    id: "u9-2", unit: 9, course: "BC", topic: "Vector-valued motion & speed", difficulty: "Medium",
    stem: "A particle has velocity $\\langle 3,4\\rangle$ at $t=1$. What is its speed at $t=1$?",
    choices: ["$5$", "$7$", "$12$", "$25$"],
    answer: 0,
    solution: "Speed $=\\sqrt{3^2+4^2}=\\sqrt{25}=5$."
  },
  {
    id: "u9-3", unit: 9, course: "BC", topic: "Area of polar regions", difficulty: "Hard",
    stem: "Find the area enclosed by the polar curve $r=2$ using the polar area formula.",
    choices: ["$2\\pi$", "$4\\pi$", "$8\\pi$", "$\\pi$"],
    answer: 1,
    solution: "$A=\\tfrac12\\int_0^{2\\pi} r^2\\,d\\theta=\\tfrac12\\int_0^{2\\pi}4\\,d\\theta=4\\pi$ (matches $\\pi r^2$)."
  },
  {
    id: "u9-4", unit: 9, course: "BC", topic: "Parametric derivatives & arc length", difficulty: "Hard",
    stem: "Which integral gives the arc length of $x=t$, $y=t^2$ from $t=0$ to $t=1$?",
    choices: [
      "$\\displaystyle\\int_0^1 \\sqrt{1+4t^2}\\,dt$",
      "$\\displaystyle\\int_0^1 \\sqrt{1+2t}\\,dt$",
      "$\\displaystyle\\int_0^1 (1+4t^2)\\,dt$",
      "$\\displaystyle\\int_0^1 \\sqrt{t^2+t^4}\\,dt$"
    ],
    answer: 0,
    solution: "Arc length $=\\int\\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt$. Here $dx/dt=1$, $dy/dt=2t$, giving $\\sqrt{1+4t^2}$."
  },
  {
    id: "u9-5", unit: 9, course: "BC", topic: "Polar derivatives", difficulty: "Medium",
    stem: "Convert the polar point $\\left(2,\\dfrac{\\pi}{2}\\right)$ to rectangular coordinates.",
    choices: ["$(2,0)$", "$(0,2)$", "$(-2,0)$", "$(\\sqrt2,\\sqrt2)$"],
    answer: 1,
    solution: "$x=r\\cos\\theta=2\\cos\\tfrac{\\pi}{2}=0$, $y=r\\sin\\theta=2\\sin\\tfrac{\\pi}{2}=2$, so $(0,2)$."
  },
  {
    id: "u9-6", unit: 9, course: "BC", topic: "Parametric derivatives & arc length", difficulty: "Hard",
    stem: "For $x=t^2$, $y=t^3$, find $\\dfrac{d^2y}{dx^2}$.",
    choices: ["$\\dfrac{3}{4t}$", "$\\dfrac{3t}{2}$", "$\\dfrac{3}{2}$", "$\\dfrac{9t}{4}$"],
    answer: 0,
    solution: "$\\dfrac{dy}{dx}=\\dfrac{3t}{2}$, so $\\dfrac{d^2y}{dx^2}=\\dfrac{\\frac{d}{dt}(3t/2)}{dx/dt}=\\dfrac{3/2}{2t}=\\dfrac{3}{4t}$."
  },
  {
    id: "u9-7", unit: 9, course: "BC", topic: "Parametric derivatives & arc length", difficulty: "Medium",
    stem: "For the parametric curve $x=\\cos t$, $y=\\sin t$, find $\\dfrac{dy}{dx}$.",
    choices: ["$\\tan t$", "$-\\cot t$", "$\\cot t$", "$-\\tan t$"],
    answer: 1,
    solution: "$\\dfrac{dy}{dx}=\\dfrac{\\cos t}{-\\sin t}=-\\cot t$."
  },
  {
    id: "u9-8", unit: 9, course: "BC", topic: "Vector-valued motion & speed", difficulty: "Medium",
    stem: "A particle has position $\\langle t^2,\\,2t\\rangle$. What is its speed at $t=1$?",
    choices: ["$2$", "$2\\sqrt{2}$", "$4$", "$\\sqrt{6}$"],
    answer: 1,
    solution: "Velocity $=\\langle 2t,2\\rangle$, which is $\\langle 2,2\\rangle$ at $t=1$. Speed $=\\sqrt{2^2+2^2}=\\sqrt{8}=2\\sqrt{2}$."
  },
  {
    id: "u9-9", unit: 9, course: "BC", topic: "Area of polar regions", difficulty: "Hard",
    stem: "Find the area enclosed by the polar curve $r=2\\cos\\theta$.",
    choices: ["$\\dfrac{\\pi}{2}$", "$\\pi$", "$2\\pi$", "$4\\pi$"],
    answer: 1,
    solution: "$r=2\\cos\\theta$ is a circle of radius $1$. $A=\\tfrac12\\int_{-\\pi/2}^{\\pi/2}(2\\cos\\theta)^2\\,d\\theta=\\tfrac12\\int_{-\\pi/2}^{\\pi/2}4\\cos^2\\theta\\,d\\theta=\\pi$."
  },
  {
    id: "u9-10", unit: 9, course: "BC", topic: "Polar derivatives", difficulty: "Medium",
    stem: "Convert the polar point $(4,\\pi)$ to rectangular coordinates.",
    choices: ["$(4,0)$", "$(-4,0)$", "$(0,-4)$", "$(0,4)$"],
    answer: 1,
    solution: "$x=4\\cos\\pi=-4$, $y=4\\sin\\pi=0$, so $(-4,0)$."
  },
  {
    id: "u9-11", unit: 9, course: "BC", topic: "Vector-valued motion & speed", difficulty: "Easy",
    stem: "A particle has position $\\langle t^2,\\,t^3\\rangle$. What is its velocity vector at $t=2$?",
    choices: ["$\\langle 4,12\\rangle$", "$\\langle 2,3\\rangle$", "$\\langle 4,8\\rangle$", "$\\langle 2,12\\rangle$"],
    answer: 0,
    solution: "Velocity $=\\langle 2t,3t^2\\rangle$. At $t=2$: $\\langle 4,12\\rangle$."
  },
  {
    id: "u9-12", unit: 9, course: "BC", topic: "Parametric derivatives & arc length", difficulty: "Medium",
    stem: "Find the arc length of $x=3t$, $y=4t$ from $t=0$ to $t=1$.",
    choices: ["$5$", "$7$", "$\\sqrt{7}$", "$12$"],
    answer: 0,
    solution: "$\\sqrt{(3)^2+(4)^2}=5$, so length $=\\int_0^1 5\\,dt=5$ (a straight segment)."
  },

  /* ===================== UNIT 10 (BC): Infinite Series ===================== */
  {
    id: "u10-1", unit: 10, course: "BC", topic: "Geometric & p-series", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\frac{1}{2}\\right)^n$.",
    choices: ["$1$", "$\\dfrac{1}{2}$", "$2$", "The series diverges"],
    answer: 2,
    solution: "Geometric with $a=1$, $r=\\tfrac12$: sum $=\\dfrac{a}{1-r}=\\dfrac{1}{1-1/2}=2$."
  },
  {
    id: "u10-2", unit: 10, course: "BC", topic: "Geometric & p-series", difficulty: "Medium",
    stem: "The p-series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^p}$ converges for which values of $p$?",
    choices: ["$p>0$", "$p>1$", "$p\\ge 1$", "all $p$"],
    answer: 1,
    solution: "A p-series converges if and only if $p>1$. ($p=1$ is the divergent harmonic series.)"
  },
  {
    id: "u10-3", unit: 10, course: "BC", topic: "Convergence tests", difficulty: "Hard",
    stem: "Using the Ratio Test on $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}$, what is the radius of convergence?",
    choices: ["$1$", "$0$", "$e$", "$\\infty$"],
    answer: 3,
    solution: "$\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{|x|}{n+1}\\to 0<1$ for every $x$, so the radius of convergence is $\\infty$."
  },
  {
    id: "u10-4", unit: 10, course: "BC", topic: "Taylor & Maclaurin series", difficulty: "Medium",
    stem: "What is the Maclaurin series for $e^{x}$?",
    choices: [
      "$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}$",
      "$\\displaystyle\\sum_{n=0}^{\\infty}x^n$",
      "$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^n}{n!}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^n}{n}$"
    ],
    answer: 0,
    solution: "Every derivative of $e^x$ at $0$ is $1$, so $e^x=\\sum_{n=0}^{\\infty}\\dfrac{x^n}{n!}$."
  },
  {
    id: "u10-5", unit: 10, course: "BC", topic: "Convergence tests", difficulty: "Medium",
    stem: "Does the alternating series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}$ converge?",
    choices: ["Yes, conditionally", "Yes, absolutely", "No, it diverges", "Only if rearranged"],
    answer: 0,
    solution: "The Alternating Series Test gives convergence, but $\\sum\\tfrac1n$ diverges, so it converges conditionally (its sum is $\\ln 2$)."
  },
  {
    id: "u10-6", unit: 10, course: "BC", topic: "Taylor & Maclaurin series", difficulty: "Hard",
    stem: "The Maclaurin series for $\\sin x$ begins with which terms?",
    choices: [
      "$1-\\dfrac{x^2}{2!}+\\dfrac{x^4}{4!}-\\cdots$",
      "$x-\\dfrac{x^3}{3!}+\\dfrac{x^5}{5!}-\\cdots$",
      "$x+\\dfrac{x^3}{3!}+\\dfrac{x^5}{5!}+\\cdots$",
      "$1+x+\\dfrac{x^2}{2!}+\\cdots$"
    ],
    answer: 1,
    solution: "$\\sin x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}=x-\\dfrac{x^3}{3!}+\\dfrac{x^5}{5!}-\\cdots$."
  },
  {
    id: "u10-7", unit: 10, course: "BC", topic: "Geometric & p-series", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\sum_{n=0}^{\\infty}3\\left(\\frac{1}{4}\\right)^n$.",
    choices: ["$3$", "$4$", "$\\dfrac{3}{4}$", "$12$"],
    answer: 1,
    solution: "Geometric with $a=3$, $r=\\tfrac14$: sum $=\\dfrac{3}{1-1/4}=\\dfrac{3}{3/4}=4$."
  },
  {
    id: "u10-8", unit: 10, course: "BC", topic: "Geometric & p-series", difficulty: "Easy",
    stem: "The geometric series $\\displaystyle\\sum_{n=0}^{\\infty}r^n$ converges if and only if:",
    choices: ["$r>0$", "$|r|<1$", "$|r|\\le 1$", "$r<1$"],
    answer: 1,
    solution: "A geometric series converges exactly when $|r|<1$; otherwise the terms do not approach $0$."
  },
  {
    id: "u10-9", unit: 10, course: "BC", topic: "Convergence tests", difficulty: "Medium",
    stem: "Does $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{n}{n+1}$ converge?",
    choices: [
      "No — the terms do not approach $0$",
      "Yes — by the Alternating Series Test",
      "Yes — it is a p-series",
      "Yes — by the Ratio Test"
    ],
    answer: 0,
    solution: "Since $\\dfrac{n}{n+1}\\to 1\\neq 0$, the series diverges by the $n$th-Term Test for Divergence."
  },
  {
    id: "u10-10", unit: 10, course: "BC", topic: "Interval of convergence", difficulty: "Hard",
    stem: "What is the interval of convergence of $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^n}{n}$?",
    choices: ["$(-1,1)$", "$[-1,1)$", "$(-1,1]$", "$[-1,1]$"],
    answer: 1,
    solution: "The ratio test gives radius $1$. At $x=-1$ the series is the convergent alternating harmonic series; at $x=1$ it is the divergent harmonic series. So the interval is $[-1,1)$."
  },
  {
    id: "u10-11", unit: 10, course: "BC", topic: "Taylor & Maclaurin series", difficulty: "Medium",
    stem: "What is the Maclaurin series for $\\dfrac{1}{1-x}$ (for $|x|<1$)?",
    choices: [
      "$\\displaystyle\\sum_{n=0}^{\\infty}x^n$",
      "$\\displaystyle\\sum_{n=0}^{\\infty}(-1)^n x^n$",
      "$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^n}{n}$"
    ],
    answer: 0,
    solution: "This is the geometric series $\\dfrac{1}{1-x}=1+x+x^2+\\cdots=\\sum_{n=0}^{\\infty}x^n$ for $|x|<1$."
  },
  {
    id: "u10-12", unit: 10, course: "BC", topic: "Convergence tests", difficulty: "Medium",
    stem: "Applying the Ratio Test to $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{2^n}{n!}$, the limit $\\displaystyle\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|$ equals:",
    choices: ["$2$", "$0$", "$1$", "$\\infty$"],
    answer: 1,
    solution: "$\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{2^{n+1}/(n+1)!}{2^n/n!}=\\dfrac{2}{n+1}\\to 0$, so the series converges (limit $<1$)."
  },

  /* ===================== UNIT 1: more ===================== */
  {
    id: "u1-13", unit: 1, course: "AB/BC", topic: "Estimating & evaluating limits", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{\\tan x}{x}$.",
    choices: ["$0$", "$1$", "$\\infty$", "The limit does not exist"],
    answer: 1,
    solution: "$\\dfrac{\\tan x}{x}=\\dfrac{\\sin x}{x}\\cdot\\dfrac{1}{\\cos x}\\to 1\\cdot 1=1$ as $x\\to 0$."
  },
  {
    id: "u1-14", unit: 1, course: "AB/BC", topic: "Algebraic limit techniques", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 2}\\frac{x^2-x-2}{x-2}$.",
    choices: ["$1$", "$3$", "$0$", "The limit does not exist"],
    answer: 1,
    solution: "Factor: $\\dfrac{(x-2)(x+1)}{x-2}=x+1\\to 3$."
  },
  {
    id: "u1-15", unit: 1, course: "AB/BC", topic: "Limits at infinity", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\frac{2x^3+1}{x^2+3}$.",
    choices: ["$0$", "$2$", "$\\infty$", "$\\dfrac{2}{3}$"],
    answer: 2,
    solution: "The numerator's degree ($3$) exceeds the denominator's ($2$), so the limit is $\\infty$."
  },
  {
    id: "u1-16", unit: 1, course: "AB/BC", topic: "Continuity & discontinuities", difficulty: "Medium",
    stem: "For what value of $a$ is $f(x)=\\begin{cases}ax+1,&x\\le 1\\\\ x^2+2,&x>1\\end{cases}$ continuous at $x=1$?",
    choices: ["$1$", "$2$", "$3$", "No value works"],
    answer: 1,
    solution: "Left value: $a+1$; right limit: $1+2=3$. Continuity requires $a+1=3$, so $a=2$."
  },
  {
    id: "u1-17", unit: 1, course: "AB/BC", topic: "Intermediate Value Theorem", difficulty: "Easy",
    stem: "$f$ is continuous with $f(2)=1$ and $f(5)=7$. The IVT guarantees $f(c)=4$ for some $c$ in which interval?",
    choices: ["$(1,7)$", "$(2,5)$", "$(4,7)$", "$(0,2)$"],
    answer: 1,
    solution: "The IVT applies to the input interval $[2,5]$: since $4$ is between $f(2)=1$ and $f(5)=7$, some $c\\in(2,5)$ gives $f(c)=4$."
  },
  {
    id: "u1-18", unit: 1, course: "AB/BC", topic: "Continuity & discontinuities", difficulty: "Easy",
    stem: "What type of discontinuity does $f(x)=\\dfrac{x^2-4}{x-2}$ have at $x=2$?",
    choices: ["Removable", "Jump", "Infinite", "None — it is continuous"],
    answer: 0,
    solution: "$f(x)=x+2$ for $x\\neq 2$, so $\\lim_{x\\to2}f(x)=4$ exists but $f(2)$ is undefined — a removable (hole) discontinuity."
  },

  /* ===================== UNIT 2: more ===================== */
  {
    id: "u2-13", unit: 2, course: "AB/BC", topic: "Definition of the derivative", difficulty: "Medium",
    stem: "The limit $\\displaystyle\\lim_{h\\to 0}\\frac{(3+h)^2-9}{h}$ equals:",
    choices: ["$3$", "$6$", "$9$", "$0$"],
    answer: 1,
    solution: "This is the definition of $f'(3)$ for $f(x)=x^2$. Since $f'(x)=2x$, the value is $6$."
  },
  {
    id: "u2-14", unit: 2, course: "AB/BC", topic: "Power rule", difficulty: "Easy",
    stem: "If $f(x)=2x^3-x$, find $f'(1)$.",
    choices: ["$5$", "$6$", "$1$", "$2$"],
    answer: 0,
    solution: "$f'(x)=6x^2-1$, so $f'(1)=6-1=5$."
  },
  {
    id: "u2-15", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Hard",
    stem: "Find $\\dfrac{d}{dx}\\left[\\dfrac{x^2}{x-1}\\right]$.",
    choices: ["$\\dfrac{x^2-2x}{(x-1)^2}$", "$\\dfrac{2x}{x-1}$", "$\\dfrac{x^2+2x}{(x-1)^2}$", "$\\dfrac{2x}{(x-1)^2}$"],
    answer: 0,
    solution: "Quotient rule: $\\dfrac{2x(x-1)-x^2(1)}{(x-1)^2}=\\dfrac{x^2-2x}{(x-1)^2}$."
  },
  {
    id: "u2-16", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[x^2 e^{x}\\right]$.",
    choices: ["$2xe^x$", "$e^x(2x+x^2)$", "$2xe^x+x^2$", "$x^2e^x$"],
    answer: 1,
    solution: "Product rule: $2x e^x + x^2 e^x = e^x(2x+x^2)$."
  },
  {
    id: "u2-17", unit: 2, course: "AB/BC", topic: "Derivatives of e^x, ln x, sin, cos", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[\\tan x\\right]$.",
    choices: ["$\\sec^2 x$", "$\\sec x\\tan x$", "$-\\csc^2 x$", "$\\cot x$"],
    answer: 0,
    solution: "The derivative of $\\tan x$ is $\\sec^2 x$."
  },
  {
    id: "u2-18", unit: 2, course: "AB/BC", topic: "Power rule", difficulty: "Easy",
    stem: "What is the slope of the tangent line to $y=x^2$ at $x=3$?",
    choices: ["$3$", "$6$", "$9$", "$2$"],
    answer: 1,
    solution: "The slope is $f'(3)$ where $f'(x)=2x$, so the slope is $6$."
  },

  /* ===================== UNIT 3: more ===================== */
  {
    id: "u3-13", unit: 3, course: "AB/BC", topic: "Implicit differentiation", difficulty: "Medium",
    stem: "If $x^2+xy=6$, find $\\dfrac{dy}{dx}$.",
    choices: ["$-\\dfrac{2x+y}{x}$", "$\\dfrac{2x+y}{x}$", "$-\\dfrac{y}{x}$", "$-2x-y$"],
    answer: 0,
    solution: "Differentiate: $2x+y+x\\,y'=0$, so $y'=-\\dfrac{2x+y}{x}$."
  },
  {
    id: "u3-14", unit: 3, course: "AB/BC", topic: "Higher-order derivatives", difficulty: "Medium",
    stem: "If $f(x)=e^{2x}$, find $f''(x)$.",
    choices: ["$2e^{2x}$", "$4e^{2x}$", "$e^{2x}$", "$4e^{x}$"],
    answer: 1,
    solution: "$f'(x)=2e^{2x}$, $f''(x)=4e^{2x}$."
  },
  {
    id: "u3-15", unit: 3, course: "AB/BC", topic: "Derivatives of inverse functions", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[\\arcsin x\\right]$.",
    choices: ["$\\dfrac{1}{1+x^2}$", "$\\dfrac{1}{\\sqrt{1-x^2}}$", "$\\dfrac{-1}{\\sqrt{1-x^2}}$", "$\\cos x$"],
    answer: 1,
    solution: "The derivative of the inverse sine is $\\dfrac{1}{\\sqrt{1-x^2}}$."
  },
  {
    id: "u3-16", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[\\cos(5x)\\right]$.",
    choices: ["$-\\sin(5x)$", "$-5\\sin(5x)$", "$5\\sin(5x)$", "$5\\cos(5x)$"],
    answer: 1,
    solution: "Chain rule: $-\\sin(5x)\\cdot 5=-5\\sin(5x)$."
  },
  {
    id: "u3-17", unit: 3, course: "AB/BC", topic: "Implicit differentiation", difficulty: "Medium",
    stem: "If $\\sin y=x$, find $\\dfrac{dy}{dx}$.",
    choices: ["$\\cos y$", "$\\sec y$", "$\\csc y$", "$\\dfrac{1}{\\sin y}$"],
    answer: 1,
    solution: "Differentiate: $\\cos y\\,y'=1$, so $y'=\\dfrac{1}{\\cos y}=\\sec y$."
  },
  {
    id: "u3-18", unit: 3, course: "AB/BC", topic: "Higher-order derivatives", difficulty: "Medium",
    stem: "If $f(x)=x^5$, find $f'''(x)$.",
    choices: ["$20x^3$", "$60x^2$", "$120x$", "$5x^4$"],
    answer: 1,
    solution: "$f'=5x^4$, $f''=20x^3$, $f'''=60x^2$."
  },

  /* ===================== UNIT 4: more ===================== */
  {
    id: "u4-13", unit: 4, course: "AB/BC", topic: "Linear approximation", difficulty: "Medium",
    stem: "Use the linearization of $f(x)=\\ln x$ at $x=1$ to approximate $\\ln(1.1)$.",
    choices: ["$0.1$", "$0.01$", "$1.1$", "$0.05$"],
    answer: 0,
    solution: "$f(1)=0$, $f'(x)=\\tfrac1x$ so $f'(1)=1$. $L(1.1)=0+1(0.1)=0.1$."
  },
  {
    id: "u4-14", unit: 4, course: "AB/BC", topic: "Related rates", difficulty: "Hard",
    stem: "A spherical balloon ($V=\\tfrac{4}{3}\\pi r^3$) has radius increasing at $3$ cm/s. How fast is the volume increasing when $r=2$ cm?",
    choices: ["$12\\pi$ cm$^3$/s", "$36\\pi$ cm$^3$/s", "$48\\pi$ cm$^3$/s", "$16\\pi$ cm$^3$/s"],
    answer: 2,
    solution: "$\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}=4\\pi(4)(3)=48\\pi$ cm$^3$/s."
  },
  {
    id: "u4-15", unit: 4, course: "AB/BC", topic: "Motion (position, velocity, acceleration)", difficulty: "Easy",
    stem: "A particle has position $s(t)=t^2-4t+3$. When is its velocity zero?",
    choices: ["$t=1$", "$t=2$", "$t=3$", "$t=4$"],
    answer: 1,
    solution: "$v(t)=2t-4=0\\Rightarrow t=2$."
  },
  {
    id: "u4-16", unit: 4, course: "AB/BC", topic: "L'Hospital's Rule", difficulty: "Hard",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 3x}{\\sin 2x}$.",
    choices: ["$1$", "$\\dfrac{3}{2}$", "$\\dfrac{2}{3}$", "$0$"],
    answer: 1,
    solution: "This is $\\tfrac00$. By L'Hospital's Rule, $\\lim_{x\\to0}\\dfrac{3\\cos 3x}{2\\cos 2x}=\\dfrac{3}{2}$."
  },
  {
    id: "u4-17", unit: 4, course: "AB/BC", topic: "Motion (position, velocity, acceleration)", difficulty: "Medium",
    stem: "A particle has acceleration $a(t)=6t$ and velocity $v(0)=1$. Find $v(t)$.",
    choices: ["$3t^2$", "$3t^2+1$", "$6t^2+1$", "$t^3+1$"],
    answer: 1,
    solution: "$v(t)=\\int 6t\\,dt=3t^2+C$. Since $v(0)=1$, $C=1$, so $v(t)=3t^2+1$."
  },
  {
    id: "u4-18", unit: 4, course: "AB/BC", topic: "Linear approximation", difficulty: "Medium",
    stem: "If $y=x^3$ and $x$ changes from $2$ to $2.1$, use differentials to estimate the change $dy$.",
    choices: ["$1.2$", "$0.3$", "$12$", "$0.6$"],
    answer: 0,
    solution: "$dy=3x^2\\,dx=3(2)^2(0.1)=1.2$."
  },

  /* ===================== UNIT 5: more ===================== */
  {
    id: "u5-13", unit: 5, course: "AB/BC", topic: "Mean Value Theorem", difficulty: "Hard",
    stem: "For $f(x)=x^3$ on $[0,3]$, find the value $c$ guaranteed by the Mean Value Theorem.",
    choices: ["$c=\\sqrt{3}$", "$c=\\dfrac{3}{2}$", "$c=1$", "$c=3$"],
    answer: 0,
    solution: "$f'(c)=\\dfrac{27-0}{3}=9$. Since $f'(x)=3x^2$, $3c^2=9\\Rightarrow c=\\sqrt{3}$ (taking the value in $(0,3)$)."
  },
  {
    id: "u5-14", unit: 5, course: "AB/BC", topic: "Optimization", difficulty: "Hard",
    stem: "Two positive numbers have product $16$. What is the minimum possible value of their sum?",
    choices: ["$8$", "$16$", "$4$", "$10$"],
    answer: 0,
    solution: "Minimize $S=x+\\dfrac{16}{x}$: $S'=1-\\dfrac{16}{x^2}=0\\Rightarrow x=4$. Then the sum is $4+4=8$."
  },
  {
    id: "u5-15", unit: 5, course: "AB/BC", topic: "Increasing/decreasing & extrema", difficulty: "Medium",
    stem: "If $f'(x)=x^2-4$, at which $x$ does $f$ have a local minimum?",
    choices: ["$x=-2$", "$x=2$", "$x=0$", "$f$ has no local minimum"],
    answer: 1,
    solution: "$f'(x)=(x-2)(x+2)$. $f'$ changes from $-$ to $+$ at $x=2$, a local minimum."
  },
  {
    id: "u5-16", unit: 5, course: "AB/BC", topic: "Concavity & inflection points", difficulty: "Medium",
    stem: "At what $x$ does $f(x)=x^3-6x^2+5$ change concavity?",
    choices: ["$x=0$", "$x=2$", "$x=4$", "$x=6$"],
    answer: 1,
    solution: "$f''(x)=6x-12=0$ at $x=2$, where it changes sign — an inflection point."
  },
  {
    id: "u5-17", unit: 5, course: "AB/BC", topic: "Increasing/decreasing & extrema", difficulty: "Medium",
    stem: "What is the absolute minimum value of $f(x)=x^2+2x$ on $[-3,1]$?",
    choices: ["$-1$", "$0$", "$3$", "$-3$"],
    answer: 0,
    solution: "$f'(x)=2x+2=0\\Rightarrow x=-1$, $f(-1)=-1$. Endpoints: $f(-3)=3$, $f(1)=3$. The absolute minimum value is $-1$."
  },
  {
    id: "u5-18", unit: 5, course: "AB/BC", topic: "Mean Value Theorem", difficulty: "Medium",
    stem: "Does the Mean Value Theorem apply to $f(x)=|x|$ on $[-1,1]$?",
    choices: [
      "No — $f$ is not differentiable at $x=0$",
      "Yes — and $c=0$",
      "No — $f$ is not continuous",
      "Yes — and $c=\\tfrac12$"
    ],
    answer: 0,
    solution: "The MVT requires differentiability on the open interval. $f(x)=|x|$ has a corner at $x=0$, so it is not differentiable there and the MVT does not apply."
  },

  /* ===================== UNIT 6: more ===================== */
  {
    id: "u6-13", unit: 6, course: "AB/BC", topic: "Antiderivatives & indefinite integrals", difficulty: "Easy",
    stem: "Find $\\displaystyle\\int (4x^3-2x)\\,dx$.",
    choices: ["$x^4-x^2+C$", "$12x^2-2+C$", "$x^4-2x^2+C$", "$4x^4-x^2+C$"],
    answer: 0,
    solution: "$\\int 4x^3\\,dx=x^4$ and $\\int -2x\\,dx=-x^2$, so $x^4-x^2+C$."
  },
  {
    id: "u6-14", unit: 6, course: "AB/BC", topic: "u-substitution", difficulty: "Medium",
    stem: "Find $\\displaystyle\\int \\frac{x}{x^2+1}\\,dx$.",
    choices: ["$\\ln(x^2+1)+C$", "$\\tfrac12\\ln(x^2+1)+C$", "$\\arctan x+C$", "$\\tfrac12(x^2+1)^2+C$"],
    answer: 1,
    solution: "Let $u=x^2+1$, $du=2x\\,dx$: $\\int\\frac{1}{2u}\\,du=\\tfrac12\\ln(x^2+1)+C$."
  },
  {
    id: "u6-15", unit: 6, course: "AB/BC", topic: "Riemann sums & definite integrals", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\int_0^1 e^{x}\\,dx$.",
    choices: ["$e$", "$e-1$", "$1-e$", "$1$"],
    answer: 1,
    solution: "$\\left[e^x\\right]_0^1=e^1-e^0=e-1$."
  },
  {
    id: "u6-16", unit: 6, course: "AB/BC", topic: "Riemann sums & definite integrals", difficulty: "Medium",
    stem: "Using a right Riemann sum with two equal subintervals, approximate $\\displaystyle\\int_0^2 x\\,dx$.",
    choices: ["$1$", "$2$", "$3$", "$4$"],
    answer: 2,
    solution: "$\\Delta x=1$, right endpoints $x=1,2$: $1\\big(f(1)+f(2)\\big)=1+2=3$ (the exact value is $2$)."
  },
  {
    id: "u6-17", unit: 6, course: "AB/BC", topic: "Fundamental Theorem of Calculus", difficulty: "Hard",
    stem: "Find $\\dfrac{d}{dx}\\displaystyle\\int_x^{5} t^2\\,dt$.",
    choices: ["$x^2$", "$-x^2$", "$25-x^2$", "$5^2$"],
    answer: 1,
    solution: "$\\int_x^5 t^2\\,dt=-\\int_5^x t^2\\,dt$, so its derivative is $-x^2$ (differentiating with respect to the lower limit flips the sign)."
  },
  {
    id: "u6-18", unit: 6, course: "AB/BC", topic: "u-substitution", difficulty: "Medium",
    stem: "Find $\\displaystyle\\int \\sin x\\cos x\\,dx$.",
    choices: ["$\\tfrac12\\sin^2 x+C$", "$\\sin^2 x+C$", "$-\\cos^2 x+C$", "$\\tfrac12\\cos^2 x+C$"],
    answer: 0,
    solution: "Let $u=\\sin x$, $du=\\cos x\\,dx$: $\\int u\\,du=\\tfrac12\\sin^2 x+C$."
  },

  /* ===================== UNIT 7: more ===================== */
  {
    id: "u7-13", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Medium",
    stem: "Solve $\\dfrac{dy}{dx}=\\dfrac{y}{x}$ with $y(1)=2$ (for $x>0$).",
    choices: ["$y=2x$", "$y=x+1$", "$y=2e^{x}$", "$y=x^2+1$"],
    answer: 0,
    solution: "Separate: $\\int\\frac{dy}{y}=\\int\\frac{dx}{x}\\Rightarrow\\ln y=\\ln x+C$, so $y=Cx$. With $y(1)=2$, $C=2$: $y=2x$."
  },
  {
    id: "u7-14", unit: 7, course: "AB/BC", topic: "Exponential & logistic growth", difficulty: "Medium",
    stem: "Solve $\\dfrac{dy}{dt}=-2y$ with $y(0)=5$.",
    choices: ["$y=5e^{2t}$", "$y=5e^{-2t}$", "$y=5-2t$", "$y=-2e^{5t}$"],
    answer: 1,
    solution: "Exponential decay: $y=y(0)e^{kt}=5e^{-2t}$."
  },
  {
    id: "u7-15", unit: 7, course: "AB/BC", topic: "Slope fields", difficulty: "Medium",
    stem: "For which differential equation does the slope depend only on $y$ (so slopes are constant along any horizontal line)?",
    choices: ["$\\dfrac{dy}{dx}=x$", "$\\dfrac{dy}{dx}=y$", "$\\dfrac{dy}{dx}=x+y$", "$\\dfrac{dy}{dx}=xy$"],
    answer: 1,
    solution: "$\\dfrac{dy}{dx}=y$ depends only on $y$, so for a fixed $y$ (a horizontal line) the slope is the same everywhere."
  },
  {
    id: "u7-16", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Easy",
    stem: "What is the general solution of $\\dfrac{dy}{dx}=3y$?",
    choices: ["$y=Ce^{3x}$", "$y=3x+C$", "$y=Ce^{x/3}$", "$y=e^{3x}+C$"],
    answer: 0,
    solution: "Separating gives $\\ln|y|=3x+C_1$, so $y=Ce^{3x}$."
  },
  {
    id: "u7-17", unit: 7, course: "BC", topic: "Euler's method (BC)", difficulty: "Hard",
    stem: "Given $\\dfrac{dy}{dx}=y$ and $y(0)=1$, use Euler's method with $\\Delta x=0.5$ (two steps) to approximate $y(1)$.",
    choices: ["$2.0$", "$2.25$", "$2.5$", "$1.5$"],
    answer: 1,
    solution: "Step 1: $y(0.5)\\approx 1+0.5(1)=1.5$. Step 2: $y(1)\\approx 1.5+0.5(1.5)=2.25$."
  },
  {
    id: "u7-18", unit: 7, course: "BC", topic: "Exponential & logistic growth", difficulty: "Medium",
    stem: "For a logistic model $\\dfrac{dP}{dt}=kP\\left(1-\\dfrac{P}{L}\\right)$, at what population is the growth rate $\\dfrac{dP}{dt}$ greatest?",
    choices: ["$P=0$", "$P=\\dfrac{L}{2}$", "$P=L$", "$P=2L$"],
    answer: 1,
    solution: "The parabola $kP(1-P/L)$ in $P$ is maximized at $P=\\dfrac{L}{2}$ — the population grows fastest at half the carrying capacity."
  },

  /* ===================== UNIT 8: more ===================== */
  {
    id: "u8-13", unit: 8, course: "AB/BC", topic: "Average value of a function", difficulty: "Hard",
    stem: "Find the average value of $f(x)=\\sin x$ on $[0,\\pi]$.",
    choices: ["$\\dfrac{2}{\\pi}$", "$\\dfrac{1}{\\pi}$", "$0$", "$\\dfrac{\\pi}{2}$"],
    answer: 0,
    solution: "Average $=\\dfrac{1}{\\pi}\\int_0^{\\pi}\\sin x\\,dx=\\dfrac{1}{\\pi}\\big[-\\cos x\\big]_0^{\\pi}=\\dfrac{1}{\\pi}(2)=\\dfrac{2}{\\pi}$."
  },
  {
    id: "u8-14", unit: 8, course: "AB/BC", topic: "Area between curves", difficulty: "Medium",
    stem: "Find the area of the region between $y=2x$ and $y=x^2$.",
    choices: ["$\\dfrac{4}{3}$", "$\\dfrac{2}{3}$", "$2$", "$\\dfrac{8}{3}$"],
    answer: 0,
    solution: "They meet at $x=0,2$, with $2x\\ge x^2$ there. Area $=\\int_0^2 (2x-x^2)\\,dx=\\big[x^2-\\tfrac{x^3}{3}\\big]_0^2=4-\\tfrac83=\\tfrac43$."
  },
  {
    id: "u8-15", unit: 8, course: "AB/BC", topic: "Volumes of revolution", difficulty: "Medium",
    stem: "The region bounded by $y=2$, the $x$-axis, $x=0$ and $x=3$ is revolved about the $x$-axis. Find the volume.",
    choices: ["$6\\pi$", "$12\\pi$", "$9\\pi$", "$4\\pi$"],
    answer: 1,
    solution: "A cylinder of radius $2$, length $3$: $V=\\pi\\int_0^3 2^2\\,dx=\\pi(4)(3)=12\\pi$."
  },
  {
    id: "u8-16", unit: 8, course: "AB/BC", topic: "Accumulation & net change", difficulty: "Medium",
    stem: "Water enters a tank at rate $r(t)=6-2t$ liters/min. What is the net change in volume over the first $3$ minutes?",
    choices: ["$6$ L", "$9$ L", "$12$ L", "$18$ L"],
    answer: 1,
    solution: "Net change $=\\int_0^3 (6-2t)\\,dt=\\big[6t-t^2\\big]_0^3=18-9=9$ liters."
  },
  {
    id: "u8-17", unit: 8, course: "AB/BC", topic: "Volumes of revolution", difficulty: "Medium",
    stem: "The region under $y=x$ from $x=0$ to $x=2$ is revolved about the $x$-axis. Find the volume.",
    choices: ["$\\dfrac{8\\pi}{3}$", "$4\\pi$", "$8\\pi$", "$\\dfrac{4\\pi}{3}$"],
    answer: 0,
    solution: "Disk method: $V=\\pi\\int_0^2 x^2\\,dx=\\pi\\big[\\tfrac{x^3}{3}\\big]_0^2=\\dfrac{8\\pi}{3}$."
  },
  {
    id: "u8-18", unit: 8, course: "AB/BC", topic: "Area between curves", difficulty: "Medium",
    stem: "Find the area of the region between $y=x$ and $y=x^3$ from $x=0$ to $x=1$.",
    choices: ["$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$\\dfrac{1}{12}$", "$\\dfrac{1}{3}$"],
    answer: 0,
    solution: "On $[0,1]$, $x\\ge x^3$. Area $=\\int_0^1 (x-x^3)\\,dx=\\tfrac12-\\tfrac14=\\tfrac14$."
  },

  /* ===================== UNIT 9 (BC): more ===================== */
  {
    id: "u9-13", unit: 9, course: "BC", topic: "Polar derivatives", difficulty: "Medium",
    stem: "Convert the rectangular point $(0,-3)$ to polar coordinates with $r>0$.",
    choices: ["$\\left(3,\\dfrac{3\\pi}{2}\\right)$", "$\\left(3,\\dfrac{\\pi}{2}\\right)$", "$\\left(-3,\\dfrac{\\pi}{2}\\right)$", "$(3,\\pi)$"],
    answer: 0,
    solution: "$r=\\sqrt{0^2+(-3)^2}=3$, and the point is on the negative $y$-axis, so $\\theta=\\dfrac{3\\pi}{2}$."
  },
  {
    id: "u9-14", unit: 9, course: "BC", topic: "Area of polar regions", difficulty: "Medium",
    stem: "Find the area enclosed by the polar curve $r=3$.",
    choices: ["$3\\pi$", "$6\\pi$", "$9\\pi$", "$\\dfrac{9\\pi}{2}$"],
    answer: 2,
    solution: "$A=\\tfrac12\\int_0^{2\\pi}3^2\\,d\\theta=\\tfrac12(9)(2\\pi)=9\\pi$ (matches $\\pi r^2$)."
  },
  {
    id: "u9-15", unit: 9, course: "BC", topic: "Parametric derivatives & arc length", difficulty: "Medium",
    stem: "For $x=e^{t}$, $y=e^{2t}$, find $\\dfrac{dy}{dx}$.",
    choices: ["$2e^{t}$", "$e^{t}$", "$2e^{2t}$", "$\\dfrac{1}{2}e^{t}$"],
    answer: 0,
    solution: "$\\dfrac{dy}{dx}=\\dfrac{2e^{2t}}{e^{t}}=2e^{t}$."
  },
  {
    id: "u9-16", unit: 9, course: "BC", topic: "Vector-valued motion & speed", difficulty: "Medium",
    stem: "A particle has position $\\langle \\sin t,\\,\\cos t\\rangle$. What is its speed at any time $t$?",
    choices: ["$0$", "$1$", "$2$", "$\\sin t+\\cos t$"],
    answer: 1,
    solution: "Velocity $=\\langle \\cos t,\\,-\\sin t\\rangle$, speed $=\\sqrt{\\cos^2 t+\\sin^2 t}=1$."
  },
  {
    id: "u9-17", unit: 9, course: "BC", topic: "Polar derivatives", difficulty: "Medium",
    stem: "For the polar curve $r=1+\\cos\\theta$, what is the rectangular point at $\\theta=0$?",
    choices: ["$(2,0)$", "$(1,0)$", "$(0,2)$", "$(0,0)$"],
    answer: 0,
    solution: "At $\\theta=0$, $r=1+\\cos 0=2$, so $x=2\\cos 0=2$, $y=2\\sin 0=0$: the point $(2,0)$."
  },
  {
    id: "u9-18", unit: 9, course: "BC", topic: "Parametric derivatives & arc length", difficulty: "Medium",
    stem: "Find the arc length of $x=\\cos t$, $y=\\sin t$ for $0\\le t\\le \\pi$.",
    choices: ["$\\pi$", "$2\\pi$", "$2$", "$\\dfrac{\\pi}{2}$"],
    answer: 0,
    solution: "$\\sqrt{(dx/dt)^2+(dy/dt)^2}=\\sqrt{\\sin^2 t+\\cos^2 t}=1$, so length $=\\int_0^{\\pi}1\\,dt=\\pi$ (half the unit circle)."
  },

  /* ===================== UNIT 10 (BC): more ===================== */
  {
    id: "u10-13", unit: 10, course: "BC", topic: "Geometric & p-series", difficulty: "Easy",
    stem: "Does $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^3}$ converge or diverge?",
    choices: ["Converges", "Diverges", "Converges to $0$", "Cannot be determined"],
    answer: 0,
    solution: "It is a p-series with $p=3>1$, so it converges."
  },
  {
    id: "u10-14", unit: 10, course: "BC", topic: "Taylor & Maclaurin series", difficulty: "Medium",
    stem: "The Maclaurin series for $\\cos x$ begins with which terms?",
    choices: [
      "$x-\\dfrac{x^3}{3!}+\\cdots$",
      "$1-\\dfrac{x^2}{2!}+\\dfrac{x^4}{4!}-\\cdots$",
      "$1+\\dfrac{x^2}{2!}+\\dfrac{x^4}{4!}+\\cdots$",
      "$1+x+\\dfrac{x^2}{2!}+\\cdots$"
    ],
    answer: 1,
    solution: "$\\cos x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n}}{(2n)!}=1-\\dfrac{x^2}{2!}+\\dfrac{x^4}{4!}-\\cdots$ (even powers, alternating)."
  },
  {
    id: "u10-15", unit: 10, course: "BC", topic: "Interval of convergence", difficulty: "Hard",
    stem: "What is the radius of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} n!\\,x^n$?",
    choices: ["$\\infty$", "$1$", "$0$", "$e$"],
    answer: 2,
    solution: "Ratio test: $\\left|\\dfrac{(n+1)!\\,x^{n+1}}{n!\\,x^n}\\right|=(n+1)|x|\\to\\infty$ unless $x=0$. The series converges only at $x=0$, so the radius is $0$."
  },
  {
    id: "u10-16", unit: 10, course: "BC", topic: "Convergence tests", difficulty: "Medium",
    stem: "Which test is most appropriate for determining the convergence of $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{\\sqrt{n}}$?",
    choices: ["Alternating Series Test", "Geometric Series Test", "p-series Test", "Ratio Test"],
    answer: 0,
    solution: "The terms alternate in sign and $\\dfrac{1}{\\sqrt{n}}$ decreases to $0$, so the Alternating Series Test applies (and shows convergence)."
  },
  {
    id: "u10-17", unit: 10, course: "BC", topic: "Taylor & Maclaurin series", difficulty: "Medium",
    stem: "In the Maclaurin series for $e^{x}$, what is the coefficient of $x^2$?",
    choices: ["$1$", "$\\dfrac{1}{2}$", "$2$", "$\\dfrac{1}{6}$"],
    answer: 1,
    solution: "$e^x=\\sum\\dfrac{x^n}{n!}$, so the $x^2$ coefficient is $\\dfrac{1}{2!}=\\dfrac{1}{2}$."
  },
  {
    id: "u10-18", unit: 10, course: "BC", topic: "Interval of convergence", difficulty: "Medium",
    stem: "For which values of $x$ does $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}$ converge?",
    choices: ["Only $x=0$", "$|x|<1$", "$-1\\le x\\le 1$", "All real $x$"],
    answer: 3,
    solution: "This is the series for $e^x$. The ratio test gives $\\dfrac{|x|}{n+1}\\to 0<1$ for every $x$, so it converges for all real $x$."
  }
];
