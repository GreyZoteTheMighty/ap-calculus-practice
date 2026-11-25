// AP-style practice problems. Math is written in LaTeX ($...$ inline, $$...$$ display)
// and rendered with MathJax. Each question has exactly one correct choice (answer index).
// Contributions welcome — see README. Keep the schema: { id, unit, course, topic, difficulty, stem, choices, answer, solution }.
window.AP_CALC_QUESTIONS = [
  /* ===================== UNIT 1: Limits and Continuity ===================== */
  {
    id: "u1-1", unit: 1, course: "AB/BC", topic: "Algebraic limit techniques", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 3}\\frac{x^2-9}{x-3}$.",
    choices: ["$0$", "$3$", "$6$", "The limit does not exist"],
    answer: 2,
    solution: "Factor the numerator: $\\dfrac{x^2-9}{x-3}=\\dfrac{(x-3)(x+3)}{x-3}=x+3$ for $x\\neq 3$. As $x\\to 3$ this approaches $3+3=6$."
  },
  {
    id: "u1-2", unit: 1, course: "AB/BC", topic: "Estimating & evaluating limits", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin(5x)}{2x}$.",
    choices: ["$0$", "$\\dfrac{2}{5}$", "$\\dfrac{5}{2}$", "The limit does not exist"],
    answer: 2,
    solution: "Rewrite as $\\dfrac{5}{2}\\cdot\\dfrac{\\sin(5x)}{5x}$. Since $\\lim_{u\\to 0}\\dfrac{\\sin u}{u}=1$ with $u=5x$, the limit is $\\dfrac{5}{2}\\cdot 1=\\dfrac{5}{2}$."
  },
  {
    id: "u1-3", unit: 1, course: "AB/BC", topic: "Limits at infinity", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^2+2x}{5x^2-1}$.",
    choices: ["$0$", "$\\dfrac{3}{5}$", "$\\dfrac{2}{5}$", "$\\infty$"],
    answer: 1,
    solution: "Divide numerator and denominator by $x^2$: $\\dfrac{3+2/x}{5-1/x^2}\\to\\dfrac{3}{5}$ as $x\\to\\infty$. For a rational function the limit at infinity is the ratio of leading coefficients when degrees match."
  },
  {
    id: "u1-4", unit: 1, course: "AB/BC", topic: "Continuity & discontinuities", difficulty: "Medium",
    stem: "Let $f(x)=\\dfrac{x^2-1}{x-1}$ for $x\\neq 1$ and $f(1)=k$. For what value of $k$ is $f$ continuous at $x=1$?",
    choices: ["$0$", "$1$", "$2$", "No value makes $f$ continuous"],
    answer: 2,
    solution: "For $x\\neq1$, $f(x)=\\dfrac{(x-1)(x+1)}{x-1}=x+1$, so $\\lim_{x\\to1}f(x)=2$. Continuity requires $f(1)=\\lim_{x\\to1}f(x)$, so $k=2$."
  },
  {
    id: "u1-5", unit: 1, course: "AB/BC", topic: "Estimating & evaluating limits", difficulty: "Hard",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$.",
    choices: ["$0$", "$\\dfrac{1}{2}$", "$1$", "The limit does not exist"],
    answer: 1,
    solution: "Multiply by the conjugate: $\\dfrac{1-\\cos x}{x^2}\\cdot\\dfrac{1+\\cos x}{1+\\cos x}=\\dfrac{\\sin^2 x}{x^2(1+\\cos x)}$. As $x\\to0$, $\\dfrac{\\sin^2 x}{x^2}\\to 1$ and $1+\\cos x\\to 2$, giving $\\dfrac{1}{2}$."
  },
  {
    id: "u1-6", unit: 1, course: "AB/BC", topic: "Limits at infinity", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 2^{+}}\\frac{1}{x-2}$.",
    choices: ["$0$", "$+\\infty$", "$-\\infty$", "$\\dfrac{1}{2}$"],
    answer: 1,
    solution: "As $x\\to 2^{+}$, $x-2$ is a small positive number, so $\\dfrac{1}{x-2}\\to +\\infty$. (From the left it would be $-\\infty$, so the two-sided limit does not exist.)"
  },

  /* ===================== UNIT 2: Definition & Fundamental Properties ===================== */
  {
    id: "u2-1", unit: 2, course: "AB/BC", topic: "Power rule", difficulty: "Easy",
    stem: "If $f(x)=5x^4-3x^2+7$, find $f'(x)$.",
    choices: ["$20x^3-6x$", "$20x^3-6x+7$", "$5x^3-3x$", "$20x^4-6x^2$"],
    answer: 0,
    solution: "Apply the power rule term by term: $\\frac{d}{dx}[5x^4]=20x^3$, $\\frac{d}{dx}[-3x^2]=-6x$, and the derivative of the constant $7$ is $0$. So $f'(x)=20x^3-6x$."
  },
  {
    id: "u2-2", unit: 2, course: "AB/BC", topic: "Definition of the derivative", difficulty: "Medium",
    stem: "Using the definition of the derivative, find $f'(2)$ for $f(x)=x^3$.",
    choices: ["$6$", "$8$", "$12$", "$3$"],
    answer: 2,
    solution: "$f'(x)=3x^2$ (or use $\\lim_{h\\to0}\\frac{(2+h)^3-8}{h}$). Then $f'(2)=3(2)^2=12$."
  },
  {
    id: "u2-3", unit: 2, course: "AB/BC", topic: "Derivatives of basic functions", difficulty: "Medium",
    stem: "If $f(x)=\\sqrt{x}$, find $f'(4)$.",
    choices: ["$\\dfrac{1}{2}$", "$\\dfrac{1}{4}$", "$2$", "$4$"],
    answer: 1,
    solution: "$f(x)=x^{1/2}$ so $f'(x)=\\tfrac{1}{2}x^{-1/2}=\\dfrac{1}{2\\sqrt{x}}$. Then $f'(4)=\\dfrac{1}{2\\sqrt{4}}=\\dfrac{1}{4}$."
  },
  {
    id: "u2-4", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[x^2\\sin x\\right]$.",
    choices: ["$2x\\cos x$", "$2x\\sin x+x^2\\cos x$", "$x^2\\cos x$", "$2x\\sin x-x^2\\cos x$"],
    answer: 1,
    solution: "Product rule: $(uv)'=u'v+uv'$ with $u=x^2$, $v=\\sin x$. So $2x\\sin x + x^2\\cos x$."
  },
  {
    id: "u2-5", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[\\dfrac{x}{x+1}\\right]$.",
    choices: ["$1$", "$\\dfrac{1}{(x+1)^2}$", "$\\dfrac{-1}{(x+1)^2}$", "$\\dfrac{2x+1}{(x+1)^2}$"],
    answer: 1,
    solution: "Quotient rule: $\\dfrac{(1)(x+1)-(x)(1)}{(x+1)^2}=\\dfrac{x+1-x}{(x+1)^2}=\\dfrac{1}{(x+1)^2}$."
  },
  {
    id: "u2-6", unit: 2, course: "AB/BC", topic: "Derivatives of basic functions", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[x\\,e^{x}\\right]$.",
    choices: ["$e^x$", "$e^x(1+x)$", "$xe^x$", "$e^x(x-1)$"],
    answer: 1,
    solution: "Product rule with $u=x$, $v=e^x$: $(1)e^x + x e^x = e^x(1+x)$."
  },

  /* ===================== UNIT 3: Composite, Implicit & Inverse ===================== */
  {
    id: "u3-1", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[(3x^2+1)^4\\right]$.",
    choices: ["$4(3x^2+1)^3$", "$24x(3x^2+1)^3$", "$12x(3x^2+1)^3$", "$(6x)^4$"],
    answer: 1,
    solution: "Chain rule: $4(3x^2+1)^3\\cdot\\frac{d}{dx}(3x^2+1)=4(3x^2+1)^3\\cdot 6x=24x(3x^2+1)^3$."
  },
  {
    id: "u3-2", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[\\sin(x^2)\\right]$.",
    choices: ["$\\cos(x^2)$", "$2x\\cos(x^2)$", "$2x\\sin(x^2)$", "$-2x\\cos(x^2)$"],
    answer: 1,
    solution: "Chain rule: $\\cos(x^2)\\cdot\\frac{d}{dx}(x^2)=\\cos(x^2)\\cdot 2x=2x\\cos(x^2)$."
  },
  {
    id: "u3-3", unit: 3, course: "AB/BC", topic: "Implicit differentiation", difficulty: "Medium",
    stem: "If $x^2+y^2=25$, find $\\dfrac{dy}{dx}$.",
    choices: ["$-\\dfrac{x}{y}$", "$\\dfrac{x}{y}$", "$-\\dfrac{y}{x}$", "$\\dfrac{25-x^2}{2y}$"],
    answer: 0,
    solution: "Differentiate implicitly: $2x+2y\\dfrac{dy}{dx}=0$, so $\\dfrac{dy}{dx}=-\\dfrac{x}{y}$."
  },
  {
    id: "u3-4", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Easy",
    stem: "Find $\\dfrac{d}{dx}\\left[\\ln(x^2+1)\\right]$.",
    choices: ["$\\dfrac{1}{x^2+1}$", "$\\dfrac{2x}{x^2+1}$", "$\\dfrac{1}{2x}$", "$2x\\ln(x^2+1)$"],
    answer: 1,
    solution: "Chain rule: $\\dfrac{1}{x^2+1}\\cdot\\frac{d}{dx}(x^2+1)=\\dfrac{2x}{x^2+1}$."
  },
  {
    id: "u3-5", unit: 3, course: "AB/BC", topic: "Derivatives of inverse functions", difficulty: "Hard",
    stem: "Let $f(x)=x^3+x$, so $f(1)=2$. Find $(f^{-1})'(2)$.",
    choices: ["$4$", "$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$2$"],
    answer: 1,
    solution: "$(f^{-1})'(a)=\\dfrac{1}{f'(f^{-1}(a))}$. Here $f^{-1}(2)=1$ and $f'(x)=3x^2+1$, so $f'(1)=4$. Thus $(f^{-1})'(2)=\\dfrac{1}{4}$."
  },
  {
    id: "u3-6", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Medium",
    stem: "Find $\\dfrac{d}{dx}\\left[\\tan(3x)\\right]$.",
    choices: ["$\\sec^2(3x)$", "$3\\sec^2(3x)$", "$3\\tan(3x)$", "$\\sec(3x)\\tan(3x)$"],
    answer: 1,
    solution: "$\\frac{d}{dx}\\tan u=\\sec^2 u\\cdot u'$ with $u=3x$: $\\sec^2(3x)\\cdot 3=3\\sec^2(3x)$."
  },

  /* ===================== UNIT 4: Contextual Applications ===================== */
  {
    id: "u4-1", unit: 4, course: "AB/BC", topic: "Motion", difficulty: "Medium",
    stem: "A particle moves with position $s(t)=t^3-6t^2+9t$. What is its velocity at $t=2$?",
    choices: ["$-3$", "$3$", "$9$", "$0$"],
    answer: 0,
    solution: "Velocity is $s'(t)=3t^2-12t+9$. At $t=2$: $3(4)-12(2)+9=12-24+9=-3$."
  },
  {
    id: "u4-2", unit: 4, course: "AB/BC", topic: "Related rates", difficulty: "Medium",
    stem: "The radius of a circle increases at $\\dfrac{dr}{dt}=2$ cm/s. How fast is the area changing when $r=3$ cm?",
    choices: ["$6\\pi$ cm$^2$/s", "$12\\pi$ cm$^2$/s", "$9\\pi$ cm$^2$/s", "$4\\pi$ cm$^2$/s"],
    answer: 1,
    solution: "$A=\\pi r^2\\Rightarrow\\dfrac{dA}{dt}=2\\pi r\\dfrac{dr}{dt}=2\\pi(3)(2)=12\\pi$ cm$^2$/s."
  },
  {
    id: "u4-3", unit: 4, course: "AB/BC", topic: "Linear approximation", difficulty: "Hard",
    stem: "Use the linearization of $f(x)=\\sqrt{x}$ at $x=4$ to approximate $\\sqrt{4.1}$.",
    choices: ["$2.05$", "$2.025$", "$2.1$", "$2.0025$"],
    answer: 1,
    solution: "$f(4)=2$, $f'(x)=\\dfrac{1}{2\\sqrt x}$ so $f'(4)=\\dfrac14$. Linearization: $L(x)=2+\\tfrac14(x-4)$. Then $L(4.1)=2+\\tfrac14(0.1)=2.025$."
  },
  {
    id: "u4-4", unit: 4, course: "AB/BC", topic: "Motion", difficulty: "Medium",
    stem: "A particle has position $s(t)=t^3-6t^2+9t$. At which times is the particle at rest?",
    choices: ["$t=0$ only", "$t=1$ and $t=3$", "$t=2$ only", "$t=3$ only"],
    answer: 1,
    solution: "The particle is at rest when $v(t)=s'(t)=3t^2-12t+9=3(t-1)(t-3)=0$, i.e. $t=1$ and $t=3$."
  },
  {
    id: "u4-5", unit: 4, course: "AB/BC", topic: "L'Hospital's Rule", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{e^{x}-1}{x}$.",
    choices: ["$0$", "$1$", "$e$", "The limit does not exist"],
    answer: 1,
    solution: "This is $\\tfrac{0}{0}$. By L'Hospital's Rule, $\\lim_{x\\to0}\\dfrac{e^x-1}{x}=\\lim_{x\\to0}\\dfrac{e^x}{1}=1$."
  },
  {
    id: "u4-6", unit: 4, course: "AB/BC", topic: "Motion", difficulty: "Easy",
    stem: "A particle has velocity $v(t)=4t-6$. What is its acceleration at any time $t$?",
    choices: ["$4$", "$4t$", "$-6$", "$2t^2-6t$"],
    answer: 0,
    solution: "Acceleration is $a(t)=v'(t)=\\dfrac{d}{dt}(4t-6)=4$ (constant)."
  },

  /* ===================== UNIT 5: Analytical Applications ===================== */
  {
    id: "u5-1", unit: 5, course: "AB/BC", topic: "Increasing/decreasing & extrema", difficulty: "Medium",
    stem: "For $f(x)=x^3-3x$, at which $x$ does $f$ have a local maximum?",
    choices: ["$x=1$", "$x=-1$", "$x=0$", "$f$ has no local maximum"],
    answer: 1,
    solution: "$f'(x)=3x^2-3=3(x-1)(x+1)$, zero at $x=\\pm1$. $f'$ changes from $+$ to $-$ at $x=-1$, so there is a local maximum there."
  },
  {
    id: "u5-2", unit: 5, course: "AB/BC", topic: "Concavity & inflection points", difficulty: "Medium",
    stem: "Find the $x$-coordinate of the inflection point of $f(x)=x^3-3x^2$.",
    choices: ["$x=0$", "$x=1$", "$x=2$", "$x=-1$"],
    answer: 1,
    solution: "$f''(x)=6x-6$, which is zero at $x=1$ and changes sign there, so $x=1$ is an inflection point."
  },
  {
    id: "u5-3", unit: 5, course: "AB/BC", topic: "Mean Value Theorem", difficulty: "Medium",
    stem: "For $f(x)=x^2$ on $[0,2]$, find the value $c$ guaranteed by the Mean Value Theorem.",
    choices: ["$c=1$", "$c=\\dfrac{1}{2}$", "$c=2$", "$c=\\sqrt{2}$"],
    answer: 0,
    solution: "MVT: $f'(c)=\\dfrac{f(2)-f(0)}{2-0}=\\dfrac{4-0}{2}=2$. Since $f'(x)=2x$, set $2c=2$, so $c=1$."
  },
  {
    id: "u5-4", unit: 5, course: "AB/BC", topic: "Optimization", difficulty: "Hard",
    stem: "A rectangle has perimeter $20$. What is the maximum possible area?",
    choices: ["$20$", "$25$", "$50$", "$100$"],
    answer: 1,
    solution: "With width $x$ and height $10-x$, area $A=x(10-x)=10x-x^2$. $A'=10-2x=0\\Rightarrow x=5$. Then $A=5\\cdot5=25$ (a square maximizes area)."
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
    solution: "$f'(x)=2x-4<0$ when $x<2$, so $f$ is decreasing on $(-\\infty,2)$."
  },

  /* ===================== UNIT 6: Integration and Accumulation ===================== */
  {
    id: "u6-1", unit: 6, course: "AB/BC", topic: "Antiderivatives", difficulty: "Easy",
    stem: "Find $\\displaystyle\\int 6x^2\\,dx$.",
    choices: ["$2x^3+C$", "$12x+C$", "$6x^3+C$", "$3x^3+C$"],
    answer: 0,
    solution: "Reverse the power rule: $\\int 6x^2\\,dx=6\\cdot\\dfrac{x^3}{3}+C=2x^3+C$."
  },
  {
    id: "u6-2", unit: 6, course: "AB/BC", topic: "Definite integrals", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\int_0^2 3x^2\\,dx$.",
    choices: ["$4$", "$6$", "$8$", "$12$"],
    answer: 2,
    solution: "$\\int 3x^2\\,dx=x^3$. Evaluate: $\\left[x^3\\right]_0^2=8-0=8$."
  },
  {
    id: "u6-3", unit: 6, course: "AB/BC", topic: "u-substitution", difficulty: "Medium",
    stem: "Find $\\displaystyle\\int 2x(x^2+1)^3\\,dx$.",
    choices: ["$(x^2+1)^4+C$", "$\\dfrac{(x^2+1)^4}{4}+C$", "$\\dfrac{(x^2+1)^2}{2}+C$", "$3(x^2+1)^2+C$"],
    answer: 1,
    solution: "Let $u=x^2+1$, $du=2x\\,dx$. Then $\\int u^3\\,du=\\dfrac{u^4}{4}+C=\\dfrac{(x^2+1)^4}{4}+C$."
  },
  {
    id: "u6-4", unit: 6, course: "AB/BC", topic: "Fundamental Theorem of Calculus", difficulty: "Medium",
    stem: "If $g(x)=\\displaystyle\\int_0^x \\sin(t^2)\\,dt$, find $g'(x)$.",
    choices: ["$\\cos(x^2)$", "$\\sin(x^2)$", "$2x\\sin(x^2)$", "$-\\cos(x^2)$"],
    answer: 1,
    solution: "By the Fundamental Theorem of Calculus (Part 1), $g'(x)=\\sin(x^2)$."
  },
  {
    id: "u6-5", unit: 6, course: "AB/BC", topic: "Definite integrals", difficulty: "Easy",
    stem: "Evaluate $\\displaystyle\\int_1^{e}\\frac{1}{x}\\,dx$.",
    choices: ["$0$", "$1$", "$e$", "$e-1$"],
    answer: 1,
    solution: "$\\int\\frac1x\\,dx=\\ln|x|$. Evaluate: $\\ln e-\\ln 1=1-0=1$."
  },
  {
    id: "u6-6", unit: 6, course: "AB/BC", topic: "Riemann sums", difficulty: "Medium",
    stem: "Using a left Riemann sum with two subintervals of equal width, approximate $\\displaystyle\\int_0^4 x^2\\,dx$.",
    choices: ["$8$", "$16$", "$20$", "$24$"],
    answer: 0,
    solution: "Width $\\Delta x=2$. Left endpoints: $x=0,2$. Sum $=2\\big(f(0)+f(2)\\big)=2(0+4)=8$."
  },

  /* ===================== UNIT 7: Differential Equations ===================== */
  {
    id: "u7-1", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Medium",
    stem: "Solve $\\dfrac{dy}{dx}=2x$ with $y(0)=1$.",
    choices: ["$y=x^2$", "$y=x^2+1$", "$y=2x^2+1$", "$y=x^2-1$"],
    answer: 1,
    solution: "Integrate: $y=x^2+C$. Using $y(0)=1$: $1=0+C$, so $C=1$ and $y=x^2+1$."
  },
  {
    id: "u7-2", unit: 7, course: "AB/BC", topic: "Exponential growth", difficulty: "Medium",
    stem: "The general solution of $\\dfrac{dy}{dx}=y$ is:",
    choices: ["$y=Cx$", "$y=Ce^{x}$", "$y=x+C$", "$y=e^{x}+C$"],
    answer: 1,
    solution: "Separate: $\\int\\frac{dy}{y}=\\int dx\\Rightarrow \\ln|y|=x+C_1$. Exponentiate: $y=Ce^{x}$."
  },
  {
    id: "u7-3", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Hard",
    stem: "Solve $\\dfrac{dy}{dx}=\\dfrac{x}{y}$ (general solution).",
    choices: ["$y^2=x^2+C$", "$y=x^2+C$", "$y^2-x^2=0$", "$y=\\ln x+C$"],
    answer: 0,
    solution: "Separate: $y\\,dy=x\\,dx$. Integrate: $\\tfrac{y^2}{2}=\\tfrac{x^2}{2}+C_1$, so $y^2=x^2+C$."
  },
  {
    id: "u7-4", unit: 7, course: "AB/BC", topic: "Exponential growth", difficulty: "Medium",
    stem: "A population satisfies $\\dfrac{dP}{dt}=0.05P$ with $P(0)=200$. What is $P(t)$?",
    choices: ["$P=200+0.05t$", "$P=200e^{0.05t}$", "$P=0.05e^{200t}$", "$P=200t^{0.05}$"],
    answer: 1,
    solution: "Exponential growth: $P(t)=P(0)e^{kt}=200e^{0.05t}$."
  },
  {
    id: "u7-5", unit: 7, course: "BC", topic: "Euler's method", difficulty: "Hard",
    stem: "Given $\\dfrac{dy}{dx}=x+y$ and $y(0)=1$, use Euler's method with step size $\\Delta x=0.5$ to approximate $y(0.5)$.",
    choices: ["$1.0$", "$1.5$", "$2.0$", "$1.25$"],
    answer: 1,
    solution: "At $(0,1)$ the slope is $0+1=1$. Then $y(0.5)\\approx y(0)+\\Delta x\\cdot\\text{slope}=1+0.5(1)=1.5$."
  },
  {
    id: "u7-6", unit: 7, course: "BC", topic: "Logistic growth", difficulty: "Medium",
    stem: "For the logistic model $\\dfrac{dP}{dt}=0.1P\\left(1-\\dfrac{P}{500}\\right)$, what is the carrying capacity?",
    choices: ["$0.1$", "$100$", "$250$", "$500$"],
    answer: 3,
    solution: "In $\\dfrac{dP}{dt}=kP\\left(1-\\dfrac{P}{L}\\right)$, the carrying capacity is $L$. Here $L=500$ (and growth is fastest at $P=L/2=250$)."
  },

  /* ===================== UNIT 8: Applications of Integration ===================== */
  {
    id: "u8-1", unit: 8, course: "AB/BC", topic: "Area between curves", difficulty: "Medium",
    stem: "Find the area of the region between $y=x$ and $y=x^2$ from $x=0$ to $x=1$.",
    choices: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$\\dfrac{5}{6}$"],
    answer: 0,
    solution: "On $[0,1]$, $x\\ge x^2$. Area $=\\int_0^1 (x-x^2)\\,dx=\\left[\\tfrac{x^2}{2}-\\tfrac{x^3}{3}\\right]_0^1=\\tfrac12-\\tfrac13=\\tfrac16$."
  },
  {
    id: "u8-2", unit: 8, course: "AB/BC", topic: "Average value", difficulty: "Medium",
    stem: "Find the average value of $f(x)=x^2$ on $[0,3]$.",
    choices: ["$3$", "$9$", "$\\dfrac{9}{2}$", "$\\dfrac{1}{3}$"],
    answer: 0,
    solution: "Average $=\\dfrac{1}{3-0}\\int_0^3 x^2\\,dx=\\dfrac13\\cdot\\left[\\tfrac{x^3}{3}\\right]_0^3=\\dfrac13\\cdot 9=3$."
  },
  {
    id: "u8-3", unit: 8, course: "AB/BC", topic: "Volumes of revolution", difficulty: "Hard",
    stem: "The region under $y=\\sqrt{x}$ from $x=0$ to $x=4$ is revolved about the $x$-axis. Find the volume.",
    choices: ["$4\\pi$", "$8\\pi$", "$16\\pi$", "$\\dfrac{32\\pi}{3}$"],
    answer: 1,
    solution: "Disk method: $V=\\pi\\int_0^4 (\\sqrt{x})^2\\,dx=\\pi\\int_0^4 x\\,dx=\\pi\\left[\\tfrac{x^2}{2}\\right]_0^4=\\pi\\cdot 8=8\\pi$."
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
    solution: "Total $=\\int_0^3 4t\\,dt=\\left[2t^2\\right]_0^3=2(9)=18$ liters."
  },
  {
    id: "u8-6", unit: 8, course: "AB/BC", topic: "Accumulation & net change", difficulty: "Hard",
    stem: "A particle moves with velocity $v(t)=t-2$ on $[0,3]$. What is the total distance traveled?",
    choices: ["$1.5$", "$2.5$", "$3$", "$0.5$"],
    answer: 1,
    solution: "Total distance $=\\int_0^3 |t-2|\\,dt$. Split at $t=2$: $\\int_0^2 (2-t)\\,dt+\\int_2^3 (t-2)\\,dt=2+\\tfrac12=2.5$."
  },

  /* ===================== UNIT 9 (BC): Parametric, Polar, Vector ===================== */
  {
    id: "u9-1", unit: 9, course: "BC", topic: "Parametric derivatives", difficulty: "Medium",
    stem: "For the parametric curve $x=t^2$, $y=t^3$, find $\\dfrac{dy}{dx}$.",
    choices: ["$\\dfrac{3t}{2}$", "$\\dfrac{2}{3t}$", "$\\dfrac{3t^2}{2t}=t$", "$6t$"],
    answer: 0,
    solution: "$\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}=\\dfrac{3t^2}{2t}=\\dfrac{3t}{2}$."
  },
  {
    id: "u9-2", unit: 9, course: "BC", topic: "Vector-valued motion & speed", difficulty: "Medium",
    stem: "A particle has position $\\langle x(t),y(t)\\rangle$ with velocity $\\langle 3,4\\rangle$ at $t=1$. What is its speed at $t=1$?",
    choices: ["$5$", "$7$", "$12$", "$25$"],
    answer: 0,
    solution: "Speed $=\\sqrt{(dx/dt)^2+(dy/dt)^2}=\\sqrt{3^2+4^2}=\\sqrt{25}=5$."
  },
  {
    id: "u9-3", unit: 9, course: "BC", topic: "Area of polar regions", difficulty: "Hard",
    stem: "Find the area enclosed by the polar curve $r=2$ (a circle) using the polar area formula.",
    choices: ["$2\\pi$", "$4\\pi$", "$8\\pi$", "$\\pi$"],
    answer: 1,
    solution: "$A=\\tfrac12\\int_0^{2\\pi} r^2\\,d\\theta=\\tfrac12\\int_0^{2\\pi}4\\,d\\theta=\\tfrac12\\cdot 4\\cdot 2\\pi=4\\pi$ (matches $\\pi r^2=4\\pi$)."
  },
  {
    id: "u9-4", unit: 9, course: "BC", topic: "Parametric arc length", difficulty: "Hard",
    stem: "Set up the arc length of $x=t$, $y=t^2$ from $t=0$ to $t=1$. Which integral is correct?",
    choices: [
      "$\\displaystyle\\int_0^1 \\sqrt{1+4t^2}\\,dt$",
      "$\\displaystyle\\int_0^1 \\sqrt{1+2t}\\,dt$",
      "$\\displaystyle\\int_0^1 (1+4t^2)\\,dt$",
      "$\\displaystyle\\int_0^1 \\sqrt{t^2+t^4}\\,dt$"
    ],
    answer: 0,
    solution: "Arc length $=\\int\\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt$. Here $dx/dt=1$, $dy/dt=2t$, so the integrand is $\\sqrt{1+4t^2}$."
  },
  {
    id: "u9-5", unit: 9, course: "BC", topic: "Polar derivatives", difficulty: "Medium",
    stem: "Convert the polar point $\\left(r,\\theta\\right)=\\left(2,\\dfrac{\\pi}{2}\\right)$ to rectangular coordinates.",
    choices: ["$(2,0)$", "$(0,2)$", "$(-2,0)$", "$(\\sqrt2,\\sqrt2)$"],
    answer: 1,
    solution: "$x=r\\cos\\theta=2\\cos\\tfrac{\\pi}{2}=0$ and $y=r\\sin\\theta=2\\sin\\tfrac{\\pi}{2}=2$, giving $(0,2)$."
  },
  {
    id: "u9-6", unit: 9, course: "BC", topic: "Parametric derivatives", difficulty: "Hard",
    stem: "For $x=t^2$, $y=t^3$, find $\\dfrac{d^2y}{dx^2}$.",
    choices: ["$\\dfrac{3}{4t}$", "$\\dfrac{3t}{2}$", "$\\dfrac{3}{2}$", "$\\dfrac{9t}{4}$"],
    answer: 0,
    solution: "$\\dfrac{dy}{dx}=\\dfrac{3t}{2}$. Then $\\dfrac{d^2y}{dx^2}=\\dfrac{\\frac{d}{dt}\\left(\\frac{3t}{2}\\right)}{dx/dt}=\\dfrac{3/2}{2t}=\\dfrac{3}{4t}$."
  },

  /* ===================== UNIT 10 (BC): Infinite Series ===================== */
  {
    id: "u10-1", unit: 10, course: "BC", topic: "Geometric & p-series", difficulty: "Medium",
    stem: "Evaluate $\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\frac{1}{2}\\right)^n$.",
    choices: ["$1$", "$\\dfrac{1}{2}$", "$2$", "The series diverges"],
    answer: 2,
    solution: "Geometric series with $a=1$, $r=\\tfrac12$ ($|r|<1$): sum $=\\dfrac{a}{1-r}=\\dfrac{1}{1-1/2}=2$."
  },
  {
    id: "u10-2", unit: 10, course: "BC", topic: "Geometric & p-series", difficulty: "Medium",
    stem: "The p-series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^p}$ converges for which values of $p$?",
    choices: ["$p>0$", "$p>1$", "$p\\ge 1$", "all $p$"],
    answer: 1,
    solution: "A p-series converges if and only if $p>1$. (For example $\\sum 1/n$ with $p=1$ is the divergent harmonic series.)"
  },
  {
    id: "u10-3", unit: 10, course: "BC", topic: "Convergence tests", difficulty: "Hard",
    stem: "Using the Ratio Test on $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}$, what is the radius of convergence?",
    choices: ["$1$", "$0$", "$e$", "$\\infty$"],
    answer: 3,
    solution: "$\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{|x|}{n+1}\\to 0<1$ for every $x$. The series converges for all $x$, so the radius of convergence is $\\infty$."
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
    solution: "Since every derivative of $e^x$ at $0$ equals $1$, $e^x=\\sum_{n=0}^{\\infty}\\dfrac{x^n}{n!}=1+x+\\dfrac{x^2}{2!}+\\cdots$."
  },
  {
    id: "u10-5", unit: 10, course: "BC", topic: "Convergence tests", difficulty: "Medium",
    stem: "Does the alternating series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}$ converge?",
    choices: [
      "Yes, conditionally",
      "Yes, absolutely",
      "No, it diverges",
      "Only if rearranged"
    ],
    answer: 0,
    solution: "By the Alternating Series Test it converges (terms decrease to $0$). But $\\sum\\tfrac1n$ diverges, so the convergence is conditional, not absolute. (Its sum is $\\ln 2$.)"
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
    solution: "$\\sin x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}=x-\\dfrac{x^3}{3!}+\\dfrac{x^5}{5!}-\\cdots$ (odd powers, alternating signs)."
  }
];
