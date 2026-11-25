// AP-style Free-Response Questions (FRQs): multi-part, open-ended problems.
// Since these are worked by hand, the app reveals a scoring rubric and lets the
// student self-score each part (as on the real AP exam).
// Schema: { id, unit, course, topic, difficulty, calculator (bool), context, parts: [{label, prompt, points, solution}] }.
window.AP_CALC_FRQ = [
  {
    id: "frq-u1-1", unit: 1, course: "AB/BC", topic: "Continuity & discontinuities", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=\\dfrac{x^2-9}{x-3}$ for $x\\neq 3$, and $f(3)=c$.",
    parts: [
      { label: "a", points: 1, prompt: "Evaluate $\\displaystyle\\lim_{x\\to 3}f(x)$.",
        solution: "For $x\\neq 3$, $f(x)=\\dfrac{(x-3)(x+3)}{x-3}=x+3$, so $\\lim_{x\\to 3}f(x)=6$." },
      { label: "b", points: 1, prompt: "Find the value of $c$ that makes $f$ continuous at $x=3$.",
        solution: "Continuity requires $f(3)=\\lim_{x\\to3}f(x)$, so $c=6$." },
      { label: "c", points: 2, prompt: "With this value of $c$, is $f$ differentiable at $x=3$? Justify your answer.",
        solution: "Yes. With $c=6$, $f(x)=x+3$ for all $x$, a line with constant slope $1$. Since $f$ equals a differentiable function everywhere, $f'(3)=1$ exists." }
    ]
  },
  {
    id: "frq-u2-1", unit: 2, course: "AB/BC", topic: "Definition of the derivative", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=x^3$.",
    parts: [
      { label: "a", points: 2, prompt: "Use the limit definition of the derivative to find $f'(x)$.",
        solution: "$f'(x)=\\lim_{h\\to0}\\dfrac{(x+h)^3-x^3}{h}=\\lim_{h\\to0}\\dfrac{3x^2h+3xh^2+h^3}{h}=\\lim_{h\\to0}(3x^2+3xh+h^2)=3x^2$." },
      { label: "b", points: 2, prompt: "Find an equation of the tangent line to $y=f(x)$ at $x=2$.",
        solution: "$f(2)=8$ and $f'(2)=3(2)^2=12$. Tangent: $y-8=12(x-2)$, i.e. $y=12x-16$." }
    ]
  },
  {
    id: "frq-u3-1", unit: 3, course: "AB/BC", topic: "Implicit differentiation", difficulty: "Medium",
    calculator: false,
    context: "Consider the circle $x^2+y^2=4$.",
    parts: [
      { label: "a", points: 2, prompt: "Find $\\dfrac{dy}{dx}$ by implicit differentiation.",
        solution: "Differentiate: $2x+2y\\dfrac{dy}{dx}=0$, so $\\dfrac{dy}{dx}=-\\dfrac{x}{y}$." },
      { label: "b", points: 1, prompt: "Find the slope of the tangent line at the point $(1,\\sqrt{3})$.",
        solution: "$\\dfrac{dy}{dx}=-\\dfrac{1}{\\sqrt{3}}=-\\dfrac{\\sqrt{3}}{3}$." },
      { label: "c", points: 2, prompt: "Write an equation of the tangent line at $(1,\\sqrt{3})$.",
        solution: "$y-\\sqrt{3}=-\\dfrac{1}{\\sqrt{3}}(x-1)$." }
    ]
  },
  {
    id: "frq-u4-1", unit: 4, course: "AB/BC", topic: "Motion (position, velocity, acceleration)", difficulty: "Hard",
    calculator: false,
    context: "A particle moves along the $x$-axis with velocity $v(t)=t^2-4t+3$ for $0\\le t\\le 4$ (position in meters, $t$ in seconds).",
    parts: [
      { label: "a", points: 1, prompt: "Find all times in $[0,4]$ when the particle is at rest.",
        solution: "$v(t)=(t-1)(t-3)=0$ at $t=1$ and $t=3$." },
      { label: "b", points: 1, prompt: "Find the acceleration at $t=2$.",
        solution: "$a(t)=v'(t)=2t-4$, so $a(2)=0$." },
      { label: "c", points: 2, prompt: "Find the total distance traveled over $[0,3]$.",
        solution: "$v>0$ on $(0,1)$ and $v<0$ on $(1,3)$. $\\int_0^1 v\\,dt=\\tfrac43$ and $\\left|\\int_1^3 v\\,dt\\right|=\\tfrac43$, so total distance $=\\tfrac43+\\tfrac43=\\tfrac83$ m." },
      { label: "d", points: 1, prompt: "Find the displacement over $[0,3]$.",
        solution: "$\\int_0^3 (t^2-4t+3)\\,dt=\\left[\\tfrac{t^3}{3}-2t^2+3t\\right]_0^3=9-18+9=0$ m." }
    ]
  },
  {
    id: "frq-u5-1", unit: 5, course: "AB/BC", topic: "Increasing/decreasing & extrema", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=x^3-3x^2$.",
    parts: [
      { label: "a", points: 1, prompt: "Find the critical numbers of $f$.",
        solution: "$f'(x)=3x^2-6x=3x(x-2)=0$ at $x=0$ and $x=2$." },
      { label: "b", points: 2, prompt: "Classify each critical number as a local maximum or minimum. Justify.",
        solution: "$f'$ changes $+\\to-$ at $x=0$ (local maximum) and $-\\to+$ at $x=2$ (local minimum), by the First Derivative Test." },
      { label: "c", points: 1, prompt: "Find the $x$-coordinate of the inflection point.",
        solution: "$f''(x)=6x-6=0$ at $x=1$, where concavity changes." },
      { label: "d", points: 1, prompt: "On what interval is $f$ concave up?",
        solution: "$f''(x)=6x-6>0$ for $x>1$, so $f$ is concave up on $(1,\\infty)$." }
    ]
  },
  {
    id: "frq-u6-1", unit: 6, course: "AB/BC", topic: "Fundamental Theorem of Calculus", difficulty: "Medium",
    calculator: false,
    context: "Let $g(x)=\\displaystyle\\int_1^x (2t-3)\\,dt$.",
    parts: [
      { label: "a", points: 1, prompt: "Find $g(1)$.",
        solution: "$g(1)=\\int_1^1(2t-3)\\,dt=0$." },
      { label: "b", points: 1, prompt: "Find $g'(x)$.",
        solution: "By the FTC, $g'(x)=2x-3$." },
      { label: "c", points: 2, prompt: "Find $g(4)$.",
        solution: "$g(4)=\\left[t^2-3t\\right]_1^4=(16-12)-(1-3)=4-(-2)=6$." },
      { label: "d", points: 1, prompt: "On what interval is $g$ decreasing?",
        solution: "$g'(x)=2x-3<0$ for $x<\\tfrac32$, so $g$ is decreasing on $\\left(-\\infty,\\tfrac32\\right)$." }
    ]
  },
  {
    id: "frq-u7-1", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Hard",
    calculator: false,
    context: "Consider the differential equation $\\dfrac{dy}{dx}=2xy$.",
    parts: [
      { label: "a", points: 2, prompt: "Find the general solution.",
        solution: "Separate: $\\int\\dfrac{dy}{y}=\\int 2x\\,dx\\Rightarrow\\ln|y|=x^2+C_1$, so $y=Ce^{x^2}$." },
      { label: "b", points: 1, prompt: "Find the particular solution satisfying $y(0)=3$.",
        solution: "$3=Ce^{0}=C$, so $y=3e^{x^2}$." },
      { label: "c", points: 1, prompt: "Find $y(1)$.",
        solution: "$y(1)=3e^{1}=3e$." }
    ]
  },
  {
    id: "frq-u8-1", unit: 8, course: "AB/BC", topic: "Volumes of revolution", difficulty: "Hard",
    calculator: false,
    context: "Let $R$ be the region bounded by $y=\\sqrt{x}$, the $x$-axis, and the line $x=4$.",
    parts: [
      { label: "a", points: 2, prompt: "Find the area of $R$.",
        solution: "$\\int_0^4\\sqrt{x}\\,dx=\\left[\\tfrac23 x^{3/2}\\right]_0^4=\\tfrac23(8)=\\tfrac{16}{3}$." },
      { label: "b", points: 2, prompt: "Find the volume of the solid formed when $R$ is revolved about the $x$-axis.",
        solution: "Disk method: $V=\\pi\\int_0^4(\\sqrt{x})^2\\,dx=\\pi\\int_0^4 x\\,dx=\\pi(8)=8\\pi$." },
      { label: "c", points: 2, prompt: "The region $R$ is the base of a solid whose cross-sections perpendicular to the $x$-axis are squares. Find the volume.",
        solution: "Side length $=\\sqrt{x}$, area $=(\\sqrt{x})^2=x$. $V=\\int_0^4 x\\,dx=8$." }
    ]
  },
  {
    id: "frq-u8-2", unit: 8, course: "AB/BC", topic: "Accumulation & net change", difficulty: "Medium",
    calculator: true,
    context: "Water flows into a tank at a rate of $R(t)=3\\sqrt{t}$ liters per minute for $0\\le t\\le 9$.",
    parts: [
      { label: "a", points: 2, prompt: "How many liters of water flow into the tank during the first $9$ minutes?",
        solution: "$\\int_0^9 3\\sqrt{t}\\,dt=3\\left[\\tfrac23 t^{3/2}\\right]_0^9=2(27)=54$ liters." },
      { label: "b", points: 2, prompt: "What is the average rate of flow over $[0,9]$?",
        solution: "Average rate $=\\dfrac{1}{9}\\int_0^9 3\\sqrt{t}\\,dt=\\dfrac{54}{9}=6$ liters per minute." }
    ]
  },
  {
    id: "frq-u9-1", unit: 9, course: "BC", topic: "Vector-valued motion & speed", difficulty: "Hard",
    calculator: false,
    context: "A particle moves in the plane with position $x(t)=t^2$, $y(t)=t^3-3t$ for $t\\ge 0$.",
    parts: [
      { label: "a", points: 2, prompt: "Find $\\dfrac{dy}{dx}$ in terms of $t$.",
        solution: "$\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}=\\dfrac{3t^2-3}{2t}$." },
      { label: "b", points: 1, prompt: "Find the slope of the tangent line at $t=2$.",
        solution: "$\\dfrac{3(4)-3}{2(2)}=\\dfrac{9}{4}$." },
      { label: "c", points: 2, prompt: "Find the speed of the particle at $t=1$.",
        solution: "$x'(t)=2t$, $y'(t)=3t^2-3$. At $t=1$: $x'=2$, $y'=0$, so speed $=\\sqrt{2^2+0^2}=2$." }
    ]
  },
  {
    id: "frq-u10-1", unit: 10, course: "BC", topic: "Taylor & Maclaurin series", difficulty: "Hard",
    calculator: false,
    context: "Let $f(x)=e^{2x}$.",
    parts: [
      { label: "a", points: 2, prompt: "Write the first three nonzero terms of the Maclaurin series for $f$.",
        solution: "$e^{2x}=\\sum_{n=0}^{\\infty}\\dfrac{(2x)^n}{n!}=1+2x+\\dfrac{(2x)^2}{2!}+\\cdots=1+2x+2x^2+\\cdots$." },
      { label: "b", points: 1, prompt: "Write the general term of the series.",
        solution: "The general term is $\\dfrac{(2x)^n}{n!}=\\dfrac{2^n x^n}{n!}$." },
      { label: "c", points: 1, prompt: "State the radius of convergence.",
        solution: "Like $e^x$, the series converges for all $x$, so the radius of convergence is $\\infty$." }
    ]
  }
];
