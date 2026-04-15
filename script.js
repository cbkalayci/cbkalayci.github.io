document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-tabs]").forEach((tabsRoot) => {
  const buttons = Array.from(tabsRoot.querySelectorAll('[role="tab"][data-tab-target]'));
  const panels = Array.from(tabsRoot.querySelectorAll('[role="tabpanel"]'));

  if (!buttons.length || !panels.length) {
    return;
  }

  const activate = (panelId, updateHash = true) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.tabTarget === panelId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    panels.forEach((panel) => {
      const isActive = panel.id === panelId;
      panel.classList.toggle("is-active", isActive);
      if (isActive) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });

    if (updateHash) {
      history.replaceState(null, "", `#${panelId}`);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activate(button.dataset.tabTarget);
    });
  });

  const hashTarget = window.location.hash.slice(1);
  const hasHashTarget = panels.some((panel) => panel.id === hashTarget);
  const initialTarget = hasHashTarget ? hashTarget : buttons[0].dataset.tabTarget;
  activate(initialTarget, false);
});
