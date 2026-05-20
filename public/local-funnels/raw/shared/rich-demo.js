(function () {
  const activateInGroup = (target, selector) => {
    document.querySelectorAll(selector).forEach((item) => item.classList.remove("active"));
    target.classList.add("active");
  };

  document.querySelectorAll("[data-channel], [data-route], [data-choice]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const attr = chip.hasAttribute("data-channel") ? "data-channel" : chip.hasAttribute("data-route") ? "data-route" : "data-choice";
      activateInGroup(chip, `[${attr}]`);
    });
    chip.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        chip.click();
      }
    });
  });

  document.querySelectorAll(".upload-tile input").forEach((input) => {
    input.addEventListener("change", () => {
      const tile = input.closest(".upload-tile");
      if (tile && input.files.length) {
        tile.classList.add("selected");
        const helper = tile.querySelector("span");
        if (helper) helper.textContent = "追加済み";
      }
    });
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      activateInGroup(button, "[data-lang]");
      const translations = window.demoTranslations || {};
      const copy = translations[button.dataset.lang];
      if (!copy) return;
      const title = document.getElementById("heroTitle");
      const lead = document.getElementById("heroLead");
      if (title) title.innerHTML = copy.title;
      if (lead) lead.textContent = copy.lead;
    });
  });

  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    const submit = form.querySelector("[data-submit]");
    const message = form.querySelector("[data-message]");
    const success = form.querySelector("[data-success]");
    if (!submit || !message || !success) return;

    submit.addEventListener("click", () => {
      const required = (form.dataset.required || "")
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean);
      const missing = required.some((id) => {
        const field = document.getElementById(id);
        return !field || !field.value.trim();
      });

      message.className = "message";
      success.style.display = "none";

      if (missing) {
        message.className = "message error";
        message.textContent = form.dataset.error || "必須項目を入力すると送信体験を確認できます。";
        return;
      }

      submit.disabled = true;
      submit.textContent = form.dataset.loading || "送信中...";

      window.setTimeout(() => {
        submit.disabled = false;
        submit.textContent = form.dataset.submit || "送信する";
        message.className = "message success";
        message.textContent = form.dataset.done || "入力内容を整理しました。";
        success.style.display = "block";
      }, 520);
    });
  });

  if (location.hash === "#smoke-submit") {
    document.querySelectorAll("[data-smoke-value]").forEach((field) => {
      field.value = field.dataset.smokeValue;
    });
    const submit = document.querySelector("button[data-submit]");
    if (submit) submit.click();
  }
})();
