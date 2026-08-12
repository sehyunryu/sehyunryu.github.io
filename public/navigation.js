(() => {
  const initializeNavigation = () => {
    const links = Array.from(document.querySelectorAll(".nav-link"));
    if (!links.length) return;

    const setActive = (key) => {
      links.forEach((link) => {
        const isActive = link.classList.contains(`nav-${key}`);
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    };

    const path = window.location.pathname.replace(/\/$/, "") || "/";
    if (path === "/my-vision") {
      setActive("my-vision");
      return;
    }
    if (path === "/my-learnings") {
      setActive("my-learnings");
      return;
    }

    const sections = [
      { key: "about", element: document.getElementById("about") },
      { key: "publications", element: document.getElementById("publications") },
      { key: "experience", element: document.getElementById("experience") },
    ].filter((section) => section.element);

    let frame = 0;
    const updateFromScroll = () => {
      frame = 0;
      const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
      const probe = window.scrollY + headerHeight + window.innerHeight * 0.28;
      let current = sections[0]?.key || "about";
      sections.forEach((section) => {
        if (section.element.offsetTop <= probe) current = section.key;
      });
      setActive(current);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFromScroll);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    updateFromScroll();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeNavigation, { once: true });
  } else {
    initializeNavigation();
  }
})();
