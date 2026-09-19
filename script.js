/**
 * OpsAI site — i18n (EN / 繁中) + scroll reveal
 */
(function () {
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.models": "Models",
      "nav.github": "GitHub",
      "nav.download": "Download OpsAgent",
      "hero.eyebrow": "Fully Open Source",
      "hero.title.1": "AI that runs",
      "hero.title.2": "where you choose",
      "hero.sub": "OpsAI delivers open-source AI models you can run locally or via API. Pair them with OpsAgent in your terminal for practical computer control and everyday tasks.",
      "hero.cta.download": "Download OpsAgent",
      "hero.cta.explore": "Explore Models",
      "features.title": "Built for control and openness",
      "features.sub": "No lock-in. Run models your way — on your machine or through an API.",
      "feat1.title": "Fully Open Source",
      "feat1.desc": "Every component is open. Inspect, fork, and contribute under Apache License 2.0.",
      "feat2.title": "Local or API",
      "feat2.desc": "Download a local model for privacy and offline use, or call an API when you need more power.",
      "feat3.title": "Terminal-First Agent",
      "feat3.desc": "OpsAgent works inside PowerShell today. Type opsss and start chatting with any Ops model.",
      "feat4.title": "Practical Capabilities",
      "feat4.desc": "Handle computer data, control your browser via BrowserUSE, and complete everyday tasks — with continuous improvements underway.",
      "how.title": "How to get started",
      "how.sub": "One agent works with every Ops model. Install once, then chat.",
      "step1.title": "Download OpsAgent",
      "step1.desc": "Visit the opsai-agent/agent repository and grab the required terminal files from the Agent directory.",
      "step2.title": "Run the installer",
      "step2.desc": "Locate the downloaded files and open install.exe to configure. When it finishes you will see “Install successful.”",
      "step3.title": "Open a fresh terminal",
      "step3.desc": "Close the current terminal completely and open a new one (a new tab is not enough).",
      "step4.title": "Start chatting",
      "step4.desc": "Type opsss and begin talking with Ops 1.0 or any other Ops model. Choose local weights or an API key as preferred.",
      "how.note": "Note: Currently only terminal support is available. A web-based computer-control agent may arrive later. Browser control uses agent360dk/browser-mcp. Models can still be unstable — local or API is your choice.",
      "cta.title": "Ready to try OpsAI?",
      "cta.sub": "Download the agent, pick a model, and start in your terminal in minutes.",
      "cta.btn": "Download OpsAgent",
      "footer.tagline": "Open-source AI models & agent.",
      "footer.models": "Models",
      "footer.github": "GitHub",
      "footer.license": "License (Apache 2.0)",
      "footer.note": "PowerShell is a trademark of Microsoft. OpsAI is independent and unaffiliated.",
      "models.eyebrow": "Source",
      "models.title": "Models & Agent",
      "models.sub": "All OpsAI components are open source. Explore the repositories, run them locally, or integrate via API.",
      "model.agent.title": "OpsAgent",
      "model.agent.desc": "The terminal agent that talks to every Ops model. Install once, then type opsss to start. Supports local models and API backends. Browser control via BrowserUSE.",
      "model.agent.meta1": "Terminal (PowerShell)",
      "model.agent.meta2": "Local + API",
      "model.agent.meta3": "Apache 2.0",
      "model.agent.btn": "View Repository",
      "model.ops.title": "Ops 1.0",
      "model.ops.desc": "An open-source and free AI model created by OpsAI. Use it with OpsAgent in the terminal. Currently handles computer data, browser control, and basic tasks — training continues to strengthen capabilities.",
      "model.ops.meta1": "Open weights",
      "model.ops.meta2": "Works with OpsAgent",
      "model.ops.meta3": "Apache 2.0",
      "model.ops.btn": "View Repository",
      "models.capability": "About capability: Ops 1.0 is intentionally positioned as an early beta. It is not yet a frontier model. We are accelerating training so it can do more — please look forward to updates. You can always choose a local model or an API call.",
      "models.license": "License: Apache License 2.0. Notice: Currently only terminal support is available; a web version may come later. BrowserUSE uses agent360dk/browser-mcp. PowerShell is a trademark of Microsoft.",
      "meta.title.home": "OpsAI — Open-Source AI Models & Agent",
      "meta.desc.home": "OpsAI is a fully open-source AI platform. Choose local models or API. Powered by OpsAgent for terminal-based AI assistance.",
      "meta.title.models": "Models — OpsAI",
      "meta.desc.models": "Source repositories for OpsAgent and Ops 1.0 Beta — fully open-source AI models from OpsAI.",
      "lang.label": "中文"
    },
    zh: {
      "nav.home": "首頁",
      "nav.models": "模型",
      "nav.github": "GitHub",
      "nav.download": "下載 OpsAgent",
      "hero.eyebrow": "完全開源",
      "hero.title.1": "AI 隨你選擇",
      "hero.title.2": "本地或 API",
      "hero.sub": "OpsAI 提供完全開源的 AI 模型，可選擇本地下載或透過 API 使用。搭配 OpsAgent 在終端機中實現實用的電腦控制與日常任務。",
      "hero.cta.download": "下載 OpsAgent",
      "hero.cta.explore": "探索模型",
      "features.title": "為控制與開放而生",
      "features.sub": "無鎖定。依你的方式運行模型——在本機或透過 API。",
      "feat1.title": "完全開源",
      "feat1.desc": "每個元件皆開源。可檢視、分支並在 Apache License 2.0 下貢獻。",
      "feat2.title": "本地或 API",
      "feat2.desc": "下載本地模型以保護隱私並離線使用，或在需要更強大能力時呼叫 API。",
      "feat3.title": "終端機優先 Agent",
      "feat3.desc": "OpsAgent 目前在 PowerShell 中運作。輸入 opsss 即可開始與任何 Ops 模型對話。",
      "feat4.title": "實用能力",
      "feat4.desc": "處理電腦資料、透過 BrowserUSE 控制瀏覽器，並完成日常任務——我們持續加速訓練以強化能力。",
      "how.title": "如何開始使用",
      "how.sub": "一個 Agent 適用於所有 Ops 模型。安裝一次，即可開始對話。",
      "step1.title": "下載 OpsAgent",
      "step1.desc": "前往 opsai-agent/agent 儲存庫，從 Agent 目錄取得終端機所需檔案。",
      "step2.title": "執行安裝程式",
      "step2.desc": "找到下載的檔案並開啟 install.exe 進行設定。成功後會顯示「Install successful.」。",
      "step3.title": "開啟全新終端機",
      "step3.desc": "完全關閉目前終端機，再開啟一個新的（僅開新分頁不夠）。",
      "step4.title": "開始對話",
      "step4.desc": "輸入 opsss，即可開始與 Ops 1.0 或其他 Ops 模型聊天。可選擇本地模型或 API 金鑰。",
      "how.note": "注意：目前僅支援終端機。未來可能推出網頁版電腦控制 Agent。瀏覽器控制使用 agent360dk/browser-mcp。模型可能仍不穩定——可自行選擇本地模型或 API。",
      "cta.title": "準備好體驗 OpsAI 了嗎？",
      "cta.sub": "下載 Agent、選擇模型，幾分鐘內就能在終端機開始使用。",
      "cta.btn": "下載 OpsAgent",
      "footer.tagline": "開源 AI 模型與 Agent。",
      "footer.models": "模型",
      "footer.github": "GitHub",
      "footer.license": "授權 (Apache 2.0)",
      "footer.note": "PowerShell 為 Microsoft 商標。OpsAI 為獨立專案，與 Microsoft 無關。",
      "models.eyebrow": "原始碼",
      "models.title": "模型與 Agent",
      "models.sub": "所有 OpsAI 元件皆開源。探索儲存庫、本機運行，或透過 API 整合。",
      "model.agent.title": "OpsAgent",
      "model.agent.desc": "與所有 Ops 模型對話的終端機 Agent。安裝一次，輸入 opsss 即可開始。支援本地模型與 API 後端。瀏覽器控制透過 BrowserUSE。",
      "model.agent.meta1": "終端機 (PowerShell)",
      "model.agent.meta2": "本地 + API",
      "model.agent.meta3": "Apache 2.0",
      "model.agent.btn": "查看儲存庫",
      "model.ops.title": "Ops 1.0",
      "model.ops.desc": "由 OpsAI 打造的開源免費 AI 模型。可搭配 OpsAgent 在終端機使用。目前能處理電腦資料、瀏覽器控制與基本任務——我們正加速訓練以強化能力。",
      "model.ops.meta1": "開放權重",
      "model.ops.meta2": "搭配 OpsAgent",
      "model.ops.meta3": "Apache 2.0",
      "model.ops.btn": "查看儲存庫",
      "models.capability": "關於能力：Ops 1.0 定位為早期 Beta。它尚未是前沿模型。我們正加速訓練以提升能力——敬請期待。你可隨時選擇本地模型或 API 呼叫。",
      "models.license": "授權：Apache License 2.0。注意：目前僅支援終端機；未來可能推出網頁版。BrowserUSE 使用 agent360dk/browser-mcp。PowerShell 為 Microsoft 商標。",
      "meta.title.home": "OpsAI — 開源 AI 模型與 Agent",
      "meta.desc.home": "OpsAI 是完全開源的 AI 平台。可選擇本地模型或 API。由 OpsAgent 提供終端機 AI 助手能力。",
      "meta.title.models": "模型 — OpsAI",
      "meta.desc.models": "OpsAgent 與 Ops 1.0 Beta 的原始碼儲存庫——OpsAI 完全開源的 AI 模型。",
      "lang.label": "EN"
    }
  };

  let currentLang = localStorage.getItem("opsai-lang") || "en";

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("opsai-lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    var isModels = window.location.pathname.indexOf("model") !== -1;
    document.title = isModels ? t("meta.title.models") : t("meta.title.home");
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", isModels ? t("meta.desc.models") : t("meta.desc.home"));
    }

    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.textContent = t("lang.label");
      langBtn.setAttribute("aria-label", lang === "en" ? "Switch to Chinese" : "切換至英文");
    }
  }

  window.toggleOpsaiLang = function () {
    applyLanguage(currentLang === "en" ? "zh" : "en");
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(currentLang);
  });

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (prefersReduced) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else if (reveals.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { observer.observe(el); });
  }
})();
