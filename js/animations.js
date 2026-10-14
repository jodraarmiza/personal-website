(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /*--/ Scroll progress bar /--*/
  var progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);

  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  /*--/ Scroll-down hint in the hero /--*/
  var home = document.getElementById("home");
  if (home) {
    var hint = document.createElement("a");
    hint.className = "scroll-down js-scroll";
    hint.href = "#about";
    hint.setAttribute("aria-label", "Scroll to About section");
    home.appendChild(hint);
  }

  if (reduceMotion || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("js-anim");

  /*--/ Scroll reveal, staggered within each group /--*/
  var groups = [
    ".title-box",
    "#about .box-shadow-full",
    ".exp-item",
    "#cv .box-shadow-full",
    ".service-box",
    "#work .work-box",
    "#certificates .work-box2",
    "#contact"
  ];

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  groups.forEach(function (selector) {
    var items = document.querySelectorAll(selector);
    items.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.setProperty("--reveal-delay", Math.min(i % 3, 2) * 0.12 + "s");
      revealObserver.observe(el);
    });
  });

  /*--/ Skill bars fill when visible /--*/
  var skills = document.querySelector(".skill-mf");
  if (skills) {
    var bars = skills.querySelectorAll(".progress-bar");
    var targets = [];
    bars.forEach(function (bar) {
      targets.push(bar.style.width);
      bar.style.width = "0";
    });

    var skillObserver = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      bars.forEach(function (bar, i) {
        setTimeout(function () { bar.style.width = targets[i]; }, i * 90);
      });
      skillObserver.disconnect();
    }, { threshold: 0.3 });
    skillObserver.observe(skills);
  }
})();
