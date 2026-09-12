/**
 * OpsAI site — scroll reveal only.
 * Purpose: prevent jarring appearance of content (state indication / spatial consistency).
 * Frequency: once per page load → standard animation OK.
 * Tool: CSS transition + IntersectionObserver (cheapest that works).
 * Properties: opacity + transform only. Ease-out, ~500ms, short stagger.
 * Reduced motion: opacity only, no transform.
 */

(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  if (prefersReduced) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08,
    }
  );

  reveals.forEach((el) => observer.observe(el));
})();
