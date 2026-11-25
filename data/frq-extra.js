// Additional free-response questions (hand-written), appended to AP_CALC_FRQ.
// Same schema as frq.js.
window.AP_CALC_FRQ = (window.AP_CALC_FRQ || []).concat([
  {
    id: "frq-u1-4", unit: 1, course: "AB/BC", topic: "Limits at infinity", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=\\dfrac{2x-6}{x-1}$.",
    parts: [
      { label: "a", points: 1, prompt: "Find $\\displaystyle\\lim_{x\\to\\infty}f(x)$.",
        solution: "Ratio of leading coefficients: $\\dfrac{2}{1}=2$ (horizontal asymptote $y=2$)." },
      { label: "b", points: 1, prompt: "Give the equation of the vertical asymptote.",
        solution: "The denominator is $0$ at $x=1$ (numerator $\\neq 0$ there), so $x=1$." },
      { label: "c", points: 1, prompt: "Find $f(3)$.",
        solution: "$f(3)=\\dfrac{6-6}{3-1}=0$." }
    ]
  },
  {
    id: "frq-u1-5", unit: 1, course: "AB/BC", topic: "Intermediate Value Theorem", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=x^3+x-1$.",
    parts: [
      { label: "a", points: 2, prompt: "Evaluate $f(0)$ and $f(1)$.",
        solution: "$f(0)=-1$ and $f(1)=1$." },
      { label: "b", points: 2, prompt: "Explain why $f$ has a zero on the interval $(0,1)$.",
        solution: "$f$ is a polynomial, hence continuous on $[0,1]$. Since $f(0)=-1<0<1=f(1)$, the Intermediate Value Theorem guarantees some $c\\in(0,1)$ with $f(c)=0$." }
    ]
  },

  {
    id: "frq-u2-4", unit: 2, course: "AB/BC", topic: "Definition of the derivative", difficulty: "Hard",
    calculator: false,
    context: "Let $f(x)=\\dfrac{1}{x}$.",
    parts: [
      { label: "a", points: 2, prompt: "Use the limit definition to find $f'(x)$.",
        solution: "$f'(x)=\\lim_{h\\to0}\\dfrac{\\frac{1}{x+h}-\\frac1x}{h}=\\lim_{h\\to0}\\dfrac{-h}{h\\,x(x+h)}=-\\dfrac{1}{x^2}$." },
      { label: "b", points: 1, prompt: "Find the slope of the tangent line at $x=2$.",
        solution: "$f'(2)=-\\dfrac{1}{4}$." },
      { label: "c", points: 1, prompt: "Write an equation of the tangent line at $x=2$.",
        solution: "$f(2)=\\tfrac12$, so $y-\\tfrac12=-\\tfrac14(x-2)$." }
    ]
  },
  {
    id: "frq-u2-5", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=x\\sin x$.",
    parts: [
      { label: "a", points: 2, prompt: "Find $f'(x)$.",
        solution: "Product rule: $f'(x)=\\sin x + x\\cos x$." },
      { label: "b", points: 2, prompt: "Find $f'(\\pi)$.",
        solution: "$f'(\\pi)=\\sin\\pi+\\pi\\cos\\pi=0+\\pi(-1)=-\\pi$." }
    ]
  },

  {
    id: "frq-u3-4", unit: 3, course: "AB/BC", topic: "Chain rule", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=\\sin(x^2)$.",
    parts: [
      { label: "a", points: 2, prompt: "Find $f'(x)$.",
        solution: "Chain rule: $f'(x)=\\cos(x^2)\\cdot 2x=2x\\cos(x^2)$." },
      { label: "b", points: 1, prompt: "Find $f'(0)$.",
        solution: "$f'(0)=2(0)\\cos(0)=0$." },
      { label: "c", points: 1, prompt: "Is $x=0$ a critical number of $f$? Explain.",
        solution: "Yes, since $f'(0)=0$ (the derivative exists and equals $0$ there)." }
    ]
  },
  {
    id: "frq-u3-5", unit: 3, course: "AB/BC", topic: "Derivatives of inverse functions", difficulty: "Hard",
    calculator: false,
    context: "Let $f(x)=x^3+2x+1$, so that $f(1)=4$.",
    parts: [
      { label: "a", points: 1, prompt: "Find $f'(x)$.",
        solution: "$f'(x)=3x^2+2$." },
      { label: "b", points: 2, prompt: "Find $(f^{-1})'(4)$.",
        solution: "$(f^{-1})'(4)=\\dfrac{1}{f'(f^{-1}(4))}=\\dfrac{1}{f'(1)}=\\dfrac{1}{5}$." }
    ]
  },

  {
    id: "frq-u4-4", unit: 4, course: "AB/BC", topic: "Related rates", difficulty: "Hard",
    calculator: false,
    context: "Air is pumped into a spherical balloon so that its volume increases at $36\\pi$ cm$^3$/s. The volume is $V=\\tfrac43\\pi r^3$.",
    parts: [
      { label: "a", points: 1, prompt: "Find $\\dfrac{dV}{dr}$.",
        solution: "$\\dfrac{dV}{dr}=4\\pi r^2$." },
      { label: "b", points: 3, prompt: "How fast is the radius increasing when $r=3$ cm?",
        solution: "$\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}$, so $36\\pi=4\\pi(9)\\dfrac{dr}{dt}\\Rightarrow\\dfrac{dr}{dt}=1$ cm/s." }
    ]
  },
  {
    id: "frq-u4-5", unit: 4, course: "AB/BC", topic: "L'Hospital's Rule", difficulty: "Hard",
    calculator: false,
    context: "Consider $\\displaystyle\\lim_{x\\to 0}\\frac{e^{x}-1-x}{x^2}$.",
    parts: [
      { label: "a", points: 1, prompt: "Explain why the limit has indeterminate form.",
        solution: "As $x\\to0$, the numerator $e^x-1-x\\to 0$ and the denominator $x^2\\to 0$, giving $\\tfrac00$." },
      { label: "b", points: 1, prompt: "Apply L'Hospital's Rule once and state the resulting limit.",
        solution: "$\\lim_{x\\to0}\\dfrac{e^x-1}{2x}$, which is again $\\tfrac00$." },
      { label: "c", points: 2, prompt: "Evaluate the limit.",
        solution: "Apply L'Hospital's Rule again: $\\lim_{x\\to0}\\dfrac{e^x}{2}=\\dfrac{1}{2}$." }
    ]
  },

  {
    id: "frq-u5-4", unit: 5, course: "AB/BC", topic: "Concavity & inflection points", difficulty: "Hard",
    calculator: false,
    context: "Let $f(x)=x^4-4x^3$.",
    parts: [
      { label: "a", points: 2, prompt: "Find $f'(x)$ and all critical numbers.",
        solution: "$f'(x)=4x^3-12x^2=4x^2(x-3)$, so the critical numbers are $x=0$ and $x=3$." },
      { label: "b", points: 1, prompt: "Classify $x=3$.",
        solution: "$f'$ changes from $-$ to $+$ at $x=3$, so it is a local minimum." },
      { label: "c", points: 2, prompt: "Find $f''(x)$ and the $x$-coordinates of the inflection points.",
        solution: "$f''(x)=12x^2-24x=12x(x-2)$, which changes sign at $x=0$ and $x=2$: both are inflection points." }
    ]
  },
  {
    id: "frq-u5-5", unit: 5, course: "AB/BC", topic: "Optimization", difficulty: "Hard",
    calculator: false,
    context: "A rectangle has its base on the $x$-axis and its two upper vertices on the parabola $y=9-x^2$. Its area is $A(x)=2x(9-x^2)$ for $0\\le x\\le 3$.",
    parts: [
      { label: "a", points: 2, prompt: "Find $A'(x)$.",
        solution: "$A(x)=18x-2x^3$, so $A'(x)=18-6x^2$." },
      { label: "b", points: 2, prompt: "Find the value of $x$ that maximizes the area.",
        solution: "$A'(x)=18-6x^2=0\\Rightarrow x^2=3\\Rightarrow x=\\sqrt{3}$ (since $A'$ changes $+\\to-$ there)." }
    ]
  },

  {
    id: "frq-u6-4", unit: 6, course: "AB/BC", topic: "Riemann sums & definite integrals", difficulty: "Medium",
    calculator: false,
    context: "Evaluate each definite integral.",
    parts: [
      { label: "a", points: 2, prompt: "$\\displaystyle\\int_1^2 6x^2\\,dx$",
        solution: "$\\left[2x^3\\right]_1^2=16-2=14$." },
      { label: "b", points: 2, prompt: "$\\displaystyle\\int_0^{\\pi/2}\\cos x\\,dx$",
        solution: "$\\left[\\sin x\\right]_0^{\\pi/2}=1-0=1$." }
    ]
  },
  {
    id: "frq-u6-5", unit: 6, course: "AB/BC", topic: "u-substitution", difficulty: "Hard",
    calculator: false,
    context: "Evaluate $\\displaystyle\\int_0^1 3x^2(x^3+1)^2\\,dx$.",
    parts: [
      { label: "a", points: 1, prompt: "State an appropriate substitution.",
        solution: "Let $u=x^3+1$, so $du=3x^2\\,dx$." },
      { label: "b", points: 2, prompt: "Rewrite the integral in terms of $u$, including new limits.",
        solution: "When $x=0$, $u=1$; when $x=1$, $u=2$. The integral becomes $\\int_1^2 u^2\\,du$." },
      { label: "c", points: 2, prompt: "Evaluate.",
        solution: "$\\left[\\tfrac{u^3}{3}\\right]_1^2=\\tfrac{8}{3}-\\tfrac{1}{3}=\\tfrac{7}{3}$." }
    ]
  },

  {
    id: "frq-u7-4", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Hard",
    calculator: false,
    context: "Consider $\\dfrac{dy}{dx}=\\dfrac{x}{y}$ with $y(0)=2$.",
    parts: [
      { label: "a", points: 2, prompt: "Find the general solution (an implicit relation is fine).",
        solution: "$y\\,dy=x\\,dx\\Rightarrow \\tfrac{y^2}{2}=\\tfrac{x^2}{2}+C_1$, so $y^2=x^2+C$." },
      { label: "b", points: 2, prompt: "Find the particular solution with $y(0)=2$.",
        solution: "$4=0+C\\Rightarrow C=4$, so $y^2=x^2+4$, i.e. $y=\\sqrt{x^2+4}$ (positive branch)." }
    ]
  },
  {
    id: "frq-u7-5", unit: 7, course: "AB/BC", topic: "Exponential & logistic growth", difficulty: "Medium",
    calculator: true,
    context: "A substance decays so that $\\dfrac{dA}{dt}=-0.1A$, with $A(0)=50$ grams.",
    parts: [
      { label: "a", points: 1, prompt: "Write an expression for $A(t)$.",
        solution: "$A(t)=50e^{-0.1t}$." },
      { label: "b", points: 2, prompt: "Find $A(5)$, rounded to two decimal places.",
        solution: "$A(5)=50e^{-0.5}\\approx 50(0.6065)\\approx 30.33$ grams." },
      { label: "c", points: 2, prompt: "Find the half-life of the substance.",
        solution: "Solve $25=50e^{-0.1t}\\Rightarrow e^{-0.1t}=\\tfrac12\\Rightarrow t=\\dfrac{\\ln 2}{0.1}\\approx 6.93$." }
    ]
  },

  {
    id: "frq-u8-4", unit: 8, course: "AB/BC", topic: "Average value of a function", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=4-x^2$ on $[0,2]$.",
    parts: [
      { label: "a", points: 2, prompt: "Find the area under the graph of $f$ on $[0,2]$.",
        solution: "$\\int_0^2 (4-x^2)\\,dx=\\left[4x-\\tfrac{x^3}{3}\\right]_0^2=8-\\tfrac{8}{3}=\\tfrac{16}{3}$." },
      { label: "b", points: 2, prompt: "Find the average value of $f$ on $[0,2]$.",
        solution: "Average $=\\dfrac{1}{2}\\cdot\\dfrac{16}{3}=\\dfrac{8}{3}$." }
    ]
  },
  {
    id: "frq-u8-5", unit: 8, course: "AB/BC", topic: "Accumulation & net change", difficulty: "Medium",
    calculator: true,
    context: "Water flows into a tank at a rate of $R(t)=2t+1$ liters/min for $0\\le t\\le 4$. The tank starts with $5$ liters.",
    parts: [
      { label: "a", points: 2, prompt: "How much water flows in during the first $4$ minutes?",
        solution: "$\\int_0^4 (2t+1)\\,dt=\\left[t^2+t\\right]_0^4=16+4=20$ liters." },
      { label: "b", points: 2, prompt: "How much water is in the tank at $t=4$?",
        solution: "Initial $+$ accumulated $=5+20=25$ liters." }
    ]
  },

  {
    id: "frq-u9-4", unit: 9, course: "BC", topic: "Parametric derivatives & arc length", difficulty: "Hard",
    calculator: false,
    context: "A particle moves with $x(t)=t^2$ and $y(t)=\\tfrac23 t^3$ for $t\\ge 0$.",
    parts: [
      { label: "a", points: 1, prompt: "Find $\\dfrac{dx}{dt}$ and $\\dfrac{dy}{dt}$.",
        solution: "$\\dfrac{dx}{dt}=2t$ and $\\dfrac{dy}{dt}=2t^2$." },
      { label: "b", points: 2, prompt: "Find the speed at $t=1$.",
        solution: "Speed $=\\sqrt{(2)^2+(2)^2}=\\sqrt{8}=2\\sqrt{2}$." },
      { label: "c", points: 2, prompt: "Write an integral expression for the distance traveled on $[0,2]$.",
        solution: "$\\displaystyle\\int_0^2 \\sqrt{(2t)^2+(2t^2)^2}\\,dt=\\int_0^2 \\sqrt{4t^2+4t^4}\\,dt$." }
    ]
  },
  {
    id: "frq-u9-5", unit: 9, course: "BC", topic: "Area of polar regions", difficulty: "Medium",
    calculator: true,
    context: "Consider the cardioid $r=1+\\cos\\theta$.",
    parts: [
      { label: "a", points: 2, prompt: "Write an integral for the total area enclosed by the curve.",
        solution: "$A=\\dfrac12\\int_0^{2\\pi}(1+\\cos\\theta)^2\\,d\\theta$." },
      { label: "b", points: 1, prompt: "Find $r$ when $\\theta=\\dfrac{\\pi}{2}$.",
        solution: "$r=1+\\cos\\tfrac{\\pi}{2}=1+0=1$." },
      { label: "c", points: 1, prompt: "Give the rectangular point at $\\theta=\\dfrac{\\pi}{2}$.",
        solution: "With $r=1$: $x=1\\cos\\tfrac{\\pi}{2}=0$, $y=1\\sin\\tfrac{\\pi}{2}=1$, so $(0,1)$." }
    ]
  },

  {
    id: "frq-u10-4", unit: 10, course: "BC", topic: "Taylor & Maclaurin series", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=\\cos x$.",
    parts: [
      { label: "a", points: 2, prompt: "Write the first three nonzero terms of the Maclaurin series for $f$.",
        solution: "$\\cos x=1-\\dfrac{x^2}{2!}+\\dfrac{x^4}{4!}-\\cdots$." },
      { label: "b", points: 2, prompt: "Use the first two nonzero terms to approximate $\\cos(0.1)$.",
        solution: "$\\cos(0.1)\\approx 1-\\dfrac{(0.1)^2}{2}=1-0.005=0.995$." }
    ]
  },
  {
    id: "frq-u10-5", unit: 10, course: "BC", topic: "Interval of convergence", difficulty: "Hard",
    calculator: false,
    context: "Consider the power series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^n}{n\\,3^n}$.",
    parts: [
      { label: "a", points: 2, prompt: "Use the Ratio Test to find the radius of convergence.",
        solution: "$\\left|\\dfrac{x^{n+1}/((n+1)3^{n+1})}{x^n/(n\\,3^n)}\\right|=\\dfrac{|x|}{3}\\cdot\\dfrac{n}{n+1}\\to\\dfrac{|x|}{3}$. Convergence needs $\\dfrac{|x|}{3}<1$, so $R=3$." },
      { label: "b", points: 3, prompt: "Find the interval of convergence, checking the endpoints.",
        solution: "Center $0$, radius $3$ gives $(-3,3)$. At $x=3$: $\\sum\\tfrac1n$ diverges. At $x=-3$: $\\sum\\tfrac{(-1)^n}{n}$ converges. So the interval is $[-3,3)$." }
    ]
  }
]);
