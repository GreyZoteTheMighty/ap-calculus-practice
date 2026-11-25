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
  },

  {
    id: "frq-u1-2", unit: 1, course: "AB/BC", topic: "Limits at infinity", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=\\dfrac{3x^2-2}{x^2+1}$.",
    parts: [
      { label: "a", points: 1, prompt: "Find $\\displaystyle\\lim_{x\\to\\infty}f(x)$.",
        solution: "Divide by $x^2$: $\\dfrac{3-2/x^2}{1+1/x^2}\\to 3$." },
      { label: "b", points: 1, prompt: "Find $\\displaystyle\\lim_{x\\to-\\infty}f(x)$.",
        solution: "The same reasoning gives $3$." },
      { label: "c", points: 1, prompt: "State the horizontal asymptote(s) of the graph of $f$.",
        solution: "Since both limits at infinity equal $3$, the line $y=3$ is the only horizontal asymptote." }
    ]
  },
  {
    id: "frq-u1-3", unit: 1, course: "AB/BC", topic: "Continuity & discontinuities", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=\\begin{cases}\\dfrac{x^2-4}{x-2},&x\\neq 2\\\\[4pt] k,&x=2\\end{cases}$",
    parts: [
      { label: "a", points: 1, prompt: "Find $\\displaystyle\\lim_{x\\to 2}f(x)$.",
        solution: "For $x\\neq 2$, $f(x)=\\dfrac{(x-2)(x+2)}{x-2}=x+2$, so the limit is $4$." },
      { label: "b", points: 1, prompt: "Find the value of $k$ that makes $f$ continuous at $x=2$.",
        solution: "Continuity requires $k=\\lim_{x\\to2}f(x)=4$." },
      { label: "c", points: 2, prompt: "Is $f$ continuous at $x=5$? Justify your answer.",
        solution: "Yes. For $x\\neq 2$, $f(x)=x+2$, a polynomial, which is continuous everywhere; at $x=5$, $f(5)=7$ and $\\lim_{x\\to5}f(x)=7$, so $f$ is continuous there." }
    ]
  },

  {
    id: "frq-u2-2", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=x^2 e^{x}$.",
    parts: [
      { label: "a", points: 2, prompt: "Find $f'(x)$.",
        solution: "Product rule: $f'(x)=2x e^x + x^2 e^x = e^x(2x+x^2)$." },
      { label: "b", points: 1, prompt: "Find $f'(0)$.",
        solution: "$f'(0)=e^0(0+0)=0$." },
      { label: "c", points: 1, prompt: "Write an equation of the tangent line to $y=f(x)$ at $x=0$.",
        solution: "$f(0)=0$ and $f'(0)=0$, so the tangent line is $y=0$." }
    ]
  },
  {
    id: "frq-u2-3", unit: 2, course: "AB/BC", topic: "Product & quotient rules", difficulty: "Hard",
    calculator: false,
    context: "$f$ and $g$ are differentiable with $f(2)=3$, $f'(2)=4$, $g(2)=5$, and $g'(2)=-1$.",
    parts: [
      { label: "a", points: 2, prompt: "If $h(x)=f(x)g(x)$, find $h'(2)$.",
        solution: "$h'(2)=f'(2)g(2)+f(2)g'(2)=4(5)+3(-1)=17$." },
      { label: "b", points: 2, prompt: "If $p(x)=\\dfrac{f(x)}{g(x)}$, find $p'(2)$.",
        solution: "$p'(2)=\\dfrac{f'(2)g(2)-f(2)g'(2)}{[g(2)]^2}=\\dfrac{4(5)-3(-1)}{25}=\\dfrac{23}{25}$." }
    ]
  },

  {
    id: "frq-u3-2", unit: 3, course: "AB/BC", topic: "Implicit differentiation", difficulty: "Hard",
    calculator: false,
    context: "Consider the curve $x^2+xy+y^2=3$.",
    parts: [
      { label: "a", points: 1, prompt: "Verify that the point $(1,1)$ lies on the curve.",
        solution: "$1^2+1\\cdot1+1^2=3$. ✓" },
      { label: "b", points: 2, prompt: "Find $\\dfrac{dy}{dx}$.",
        solution: "Differentiate: $2x+y+x\\,y'+2y\\,y'=0\\Rightarrow y'=-\\dfrac{2x+y}{x+2y}$." },
      { label: "c", points: 1, prompt: "Find the slope of the tangent line at $(1,1)$.",
        solution: "$y'=-\\dfrac{2(1)+1}{1+2(1)}=-\\dfrac{3}{3}=-1$." }
    ]
  },
  {
    id: "frq-u3-3", unit: 3, course: "AB/BC", topic: "Higher-order derivatives", difficulty: "Medium",
    calculator: false,
    context: "Let $f(x)=(2x+1)^3$.",
    parts: [
      { label: "a", points: 2, prompt: "Find $f'(x)$.",
        solution: "Chain rule: $f'(x)=3(2x+1)^2\\cdot 2=6(2x+1)^2$." },
      { label: "b", points: 2, prompt: "Find $f''(x)$.",
        solution: "$f''(x)=6\\cdot 2(2x+1)\\cdot 2=24(2x+1)$." }
    ]
  },

  {
    id: "frq-u4-2", unit: 4, course: "AB/BC", topic: "Related rates", difficulty: "Hard",
    calculator: false,
    context: "A $10$-ft ladder leans against a wall. Its base slides away from the wall at $2$ ft/s. Let $x$ be the distance from the wall to the base and $y$ the height of the top, so $x^2+y^2=100$.",
    parts: [
      { label: "a", points: 2, prompt: "Write an equation relating $\\dfrac{dx}{dt}$ and $\\dfrac{dy}{dt}$.",
        solution: "Differentiate $x^2+y^2=100$: $2x\\dfrac{dx}{dt}+2y\\dfrac{dy}{dt}=0$, so $\\dfrac{dy}{dt}=-\\dfrac{x}{y}\\dfrac{dx}{dt}$." },
      { label: "b", points: 1, prompt: "Find $y$ when $x=6$.",
        solution: "$y=\\sqrt{100-36}=8$." },
      { label: "c", points: 2, prompt: "How fast is the top of the ladder moving when $x=6$?",
        solution: "$\\dfrac{dy}{dt}=-\\dfrac{6}{8}(2)=-1.5$ ft/s (moving down)." }
    ]
  },
  {
    id: "frq-u4-3", unit: 4, course: "AB/BC", topic: "Motion (position, velocity, acceleration)", difficulty: "Hard",
    calculator: true,
    context: "A particle moves along a line with velocity $v(t)=3t^2-12t+9$ m/s for $0\\le t\\le 5$.",
    parts: [
      { label: "a", points: 1, prompt: "Find the acceleration at $t=4$.",
        solution: "$a(t)=v'(t)=6t-12$, so $a(4)=12$ m/s$^2$." },
      { label: "b", points: 2, prompt: "Find all times when the particle changes direction. Justify.",
        solution: "$v(t)=3(t-1)(t-3)=0$ at $t=1$ and $t=3$; $v$ changes sign at each, so the particle changes direction at $t=1$ and $t=3$." },
      { label: "c", points: 2, prompt: "Find the displacement over $[0,5]$.",
        solution: "$\\int_0^5 (3t^2-12t+9)\\,dt=\\left[t^3-6t^2+9t\\right]_0^5=125-150+45=20$ m." }
    ]
  },

  {
    id: "frq-u5-2", unit: 5, course: "AB/BC", topic: "Optimization", difficulty: "Hard",
    calculator: false,
    context: "An open-top box is formed from a $12\\times 12$ square sheet by cutting a square of side $x$ from each corner and folding up the sides. Its volume is $V(x)=x(12-2x)^2$.",
    parts: [
      { label: "a", points: 1, prompt: "State the domain of $x$ for a physical box.",
        solution: "$0<x<6$ (the cut cannot exceed half the side)." },
      { label: "b", points: 2, prompt: "Find $V'(x)$ and simplify.",
        solution: "$V'(x)=(12-2x)^2+x\\cdot 2(12-2x)(-2)=(12-2x)\\big[(12-2x)-4x\\big]=(12-2x)(12-6x)$." },
      { label: "c", points: 2, prompt: "Find the value of $x$ that maximizes the volume.",
        solution: "$V'(x)=0$ gives $x=6$ (rejected) or $x=2$. Since $V'$ changes $+\\to-$ at $x=2$, the volume is maximized at $x=2$." }
    ]
  },
  {
    id: "frq-u5-3", unit: 5, course: "AB/BC", topic: "Increasing/decreasing & extrema", difficulty: "Medium",
    calculator: false,
    context: "A function $f$ has derivative $f'(x)=(x-1)(x-3)$ for all real $x$.",
    parts: [
      { label: "a", points: 1, prompt: "Find the critical numbers of $f$.",
        solution: "$f'(x)=0$ at $x=1$ and $x=3$." },
      { label: "b", points: 2, prompt: "Classify each critical number as a local maximum or minimum. Justify.",
        solution: "$f'$ changes $+\\to-$ at $x=1$ (local maximum) and $-\\to+$ at $x=3$ (local minimum)." },
      { label: "c", points: 1, prompt: "On what interval(s) is $f$ increasing?",
        solution: "$f'(x)>0$ for $x<1$ or $x>3$, so $f$ increases on $(-\\infty,1)\\cup(3,\\infty)$." }
    ]
  },

  {
    id: "frq-u6-2", unit: 6, course: "AB/BC", topic: "Fundamental Theorem of Calculus", difficulty: "Medium",
    calculator: false,
    context: "Let $F(x)=\\displaystyle\\int_0^x (3t^2-2)\\,dt$.",
    parts: [
      { label: "a", points: 1, prompt: "Find $F'(x)$.",
        solution: "By the FTC, $F'(x)=3x^2-2$." },
      { label: "b", points: 1, prompt: "Find $F(2)$.",
        solution: "$F(2)=\\left[t^3-2t\\right]_0^2=8-4=4$." },
      { label: "c", points: 2, prompt: "Find the $x$-coordinate of the critical point of $F$ in $(0,\\infty)$.",
        solution: "$F'(x)=3x^2-2=0\\Rightarrow x=\\sqrt{\\tfrac23}=\\dfrac{\\sqrt6}{3}$." }
    ]
  },
  {
    id: "frq-u6-3", unit: 6, course: "AB/BC", topic: "Riemann sums & definite integrals", difficulty: "Medium",
    calculator: true,
    context: "A continuous function $g$ has these values: $g(0)=2$, $g(2)=5$, $g(4)=4$, $g(6)=7$.",
    parts: [
      { label: "a", points: 2, prompt: "Use a left Riemann sum with the subintervals $[0,2],[2,4],[4,6]$ to approximate $\\displaystyle\\int_0^6 g(t)\\,dt$.",
        solution: "$\\Delta t=2$, left endpoints $0,2,4$: $2\\big(g(0)+g(2)+g(4)\\big)=2(2+5+4)=22$." },
      { label: "b", points: 2, prompt: "Use a right Riemann sum with the same subintervals.",
        solution: "Right endpoints $2,4,6$: $2\\big(g(2)+g(4)+g(6)\\big)=2(5+4+7)=32$." }
    ]
  },

  {
    id: "frq-u7-2", unit: 7, course: "AB/BC", topic: "Separation of variables", difficulty: "Hard",
    calculator: false,
    context: "Consider $\\dfrac{dy}{dx}=6x^2 y$ with $y(0)=2$.",
    parts: [
      { label: "a", points: 2, prompt: "Find the general solution.",
        solution: "Separate: $\\int\\dfrac{dy}{y}=\\int 6x^2\\,dx\\Rightarrow\\ln|y|=2x^3+C_1$, so $y=Ce^{2x^3}$." },
      { label: "b", points: 1, prompt: "Find the particular solution satisfying $y(0)=2$.",
        solution: "$2=Ce^{0}=C$, so $y=2e^{2x^3}$." },
      { label: "c", points: 1, prompt: "Find $y(1)$.",
        solution: "$y(1)=2e^{2}$." }
    ]
  },
  {
    id: "frq-u7-3", unit: 7, course: "AB/BC", topic: "Exponential & logistic growth", difficulty: "Medium",
    calculator: true,
    context: "A population $P$ satisfies $\\dfrac{dP}{dt}=0.04P$ with $P(0)=1500$ ($t$ in years).",
    parts: [
      { label: "a", points: 1, prompt: "Write an expression for $P(t)$.",
        solution: "$P(t)=1500e^{0.04t}$." },
      { label: "b", points: 2, prompt: "Find $P(10)$, rounded to the nearest whole number.",
        solution: "$P(10)=1500e^{0.4}\\approx 1500(1.4918)\\approx 2238$." },
      { label: "c", points: 2, prompt: "Find the time $t$ at which the population reaches $3000$.",
        solution: "$3000=1500e^{0.04t}\\Rightarrow e^{0.04t}=2\\Rightarrow t=\\dfrac{\\ln 2}{0.04}\\approx 17.33$ years." }
    ]
  },

  {
    id: "frq-u8-3", unit: 8, course: "AB/BC", topic: "Area between curves", difficulty: "Hard",
    calculator: false,
    context: "Let $R$ be the region bounded by $y=x$ and $y=x^2$.",
    parts: [
      { label: "a", points: 1, prompt: "Find the $x$-coordinates of the points of intersection.",
        solution: "$x=x^2\\Rightarrow x(1-x)=0\\Rightarrow x=0,1$." },
      { label: "b", points: 2, prompt: "Find the area of $R$.",
        solution: "On $[0,1]$, $x\\ge x^2$: $\\int_0^1 (x-x^2)\\,dx=\\tfrac12-\\tfrac13=\\tfrac16$." },
      { label: "c", points: 2, prompt: "Find the volume when $R$ is revolved about the $x$-axis.",
        solution: "Washers (outer $x$, inner $x^2$): $V=\\pi\\int_0^1 (x^2-x^4)\\,dx=\\pi\\left(\\tfrac13-\\tfrac15\\right)=\\dfrac{2\\pi}{15}$." }
    ]
  },

  {
    id: "frq-u9-2", unit: 9, course: "BC", topic: "Vector-valued motion & speed", difficulty: "Hard",
    calculator: false,
    context: "A particle moves in the plane with $x(t)=t^2-2t$ and $y(t)=t^3$ for $t\\ge 0$.",
    parts: [
      { label: "a", points: 2, prompt: "Find the velocity vector at $t=1$.",
        solution: "$\\langle x'(t),y'(t)\\rangle=\\langle 2t-2,\\,3t^2\\rangle$, which at $t=1$ is $\\langle 0,3\\rangle$." },
      { label: "b", points: 1, prompt: "Find the speed at $t=1$.",
        solution: "Speed $=\\sqrt{0^2+3^2}=3$." },
      { label: "c", points: 2, prompt: "Find $\\dfrac{dy}{dx}$ at $t=2$.",
        solution: "$\\dfrac{dy}{dx}=\\dfrac{3t^2}{2t-2}$; at $t=2$, $\\dfrac{12}{2}=6$." }
    ]
  },
  {
    id: "frq-u9-3", unit: 9, course: "BC", topic: "Area of polar regions", difficulty: "Medium",
    calculator: true,
    context: "Consider the cardioid $r=2+2\\cos\\theta$.",
    parts: [
      { label: "a", points: 2, prompt: "Write an integral expression for the area enclosed by the curve.",
        solution: "$A=\\dfrac12\\int_0^{2\\pi}(2+2\\cos\\theta)^2\\,d\\theta$." },
      { label: "b", points: 1, prompt: "Find the rectangular coordinates of the point at $\\theta=0$.",
        solution: "At $\\theta=0$, $r=4$, so $(x,y)=(4\\cos 0,4\\sin 0)=(4,0)$." }
    ]
  },

  {
    id: "frq-u10-2", unit: 10, course: "BC", topic: "Taylor & Maclaurin series", difficulty: "Hard",
    calculator: false,
    context: "Let $f(x)=\\ln(1+x)$.",
    parts: [
      { label: "a", points: 2, prompt: "Find $f(0)$, $f'(0)$, and $f''(0)$.",
        solution: "$f(0)=0$; $f'(x)=\\dfrac{1}{1+x}$ so $f'(0)=1$; $f''(x)=-\\dfrac{1}{(1+x)^2}$ so $f''(0)=-1$." },
      { label: "b", points: 2, prompt: "Write the first three nonzero terms of the Maclaurin series for $f$.",
        solution: "$\\ln(1+x)=x-\\dfrac{x^2}{2}+\\dfrac{x^3}{3}-\\cdots$." }
    ]
  },
  {
    id: "frq-u10-3", unit: 10, course: "BC", topic: "Interval of convergence", difficulty: "Hard",
    calculator: false,
    context: "Consider the power series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(x-2)^n}{n}$.",
    parts: [
      { label: "a", points: 2, prompt: "Use the Ratio Test to find the radius of convergence.",
        solution: "$\\left|\\dfrac{(x-2)^{n+1}/(n+1)}{(x-2)^n/n}\\right|=|x-2|\\cdot\\dfrac{n}{n+1}\\to|x-2|$. Convergence needs $|x-2|<1$, so $R=1$." },
      { label: "b", points: 3, prompt: "Find the interval of convergence, checking the endpoints.",
        solution: "Center $2$, radius $1$ gives $(1,3)$. At $x=3$: $\\sum\\tfrac1n$ diverges. At $x=1$: $\\sum\\tfrac{(-1)^n}{n}$ converges (alternating). So the interval is $[1,3)$." }
    ]
  }
];
