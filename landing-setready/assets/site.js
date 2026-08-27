(() => {
  const nav = document.querySelector("[data-nav]");
  const menu = document.querySelector("[data-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const langToggle = document.querySelector("[data-lang-toggle]");
  const langMenu = document.querySelector("[data-lang-menu]");

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const onScroll = () => {
    nav?.classList.toggle("nav--scrolled", window.scrollY > 16);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle?.addEventListener("click", () => {
    menu?.classList.toggle("nav__links--open");
    toggle.classList.toggle("nav__toggle--open");
  });

  langToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    langMenu?.classList.toggle("nav__lang-menu--open");
  });

  document.addEventListener("click", () => {
    langMenu?.classList.remove("nav__lang-menu--open");
  });

  const support = window.SETREADY_SUPPORT;
  if (!support || !window.emailjs) return;

  emailjs.init(support.publicKey);
  const form = document.getElementById("support-form");
  const subject = document.getElementById("support-subject");
  const topic = document.getElementById("support-topic");
  const submit = document.getElementById("support-submit");
  const success = document.getElementById("form-success");
  const error = document.getElementById("form-error");
  const ratelimit = document.getElementById("form-ratelimit");

  const setState = (state) => {
    if (form) form.hidden = state !== "form";
    if (success) success.hidden = state !== "success";
    if (error) error.hidden = state !== "error";
    if (ratelimit) ratelimit.hidden = state !== "ratelimit";
  };

  const canSend = () => {
    const now = Date.now();
    const times = JSON.parse(localStorage.getItem(support.rateKey) || "[]").filter((item) => now - item < 60 * 60 * 1000);
    if (times.length >= 3) return false;
    times.push(now);
    localStorage.setItem(support.rateKey, JSON.stringify(times));
    return true;
  };

  topic?.addEventListener("change", () => {
    if (subject) subject.value = "[" + support.appName + "] " + topic.value;
  });

  document.querySelector("[data-reset-form]")?.addEventListener("click", () => setState("form"));

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.querySelector("input[name='honeypot']")?.value) return;
    if (!canSend()) {
      setState("ratelimit");
      return;
    }
    if (submit) {
      submit.disabled = true;
      submit.textContent = submit.dataset.sending || "Sending...";
    }
    emailjs.sendForm(support.serviceId, support.templateId, form)
      .then(() => {
        form.reset();
        if (subject) subject.value = "[" + support.appName + "] " + support.defaultTopic;
        if (submit) {
          submit.disabled = false;
          submit.textContent = submit.dataset.label || "Send";
        }
        setState("success");
      })
      .catch(() => {
        if (submit) {
          submit.disabled = false;
          submit.textContent = submit.dataset.label || "Send";
        }
        setState("error");
      });
  });
})();