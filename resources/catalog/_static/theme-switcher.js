// ------------------- 防闪烁：初始化 body class 和 logo -------------------
(function () {
    let savedTheme = localStorage.getItem("doc-theme") || "light";
    document.body.classList.add(`theme-${savedTheme}`);

    // 页面内证书 logo
    document.querySelectorAll("img.cert-toggle").forEach(img => {
        const light = img.dataset.light;
        const dark  = img.dataset.dark;
        img.src = savedTheme === "dark" ? dark : light;
    });

    // 侧边栏 logo
    const logo = document.querySelector(".wy-side-nav-search img");
    if (logo) {
        const projectBase = "/"; // 简单防闪烁，后面 DOMContentLoaded 会修正完整路径
        const lightLogo = projectBase + "_static/forlinx-logo.png";
        const darkLogo  = projectBase + "_static/forlinx-logo-dark.png";
        logo.src = savedTheme === "dark" ? darkLogo : lightLogo;
    }
})();

// ------------------- 页面 DOM 完全加载后的 JS -------------------
document.addEventListener("DOMContentLoaded", async function () {
    let currentTheme = localStorage.getItem("doc-theme") || "light";

    // ------------------- 智能自动获取项目根路径 -------------------
    async function findProjectBase() {
        let cached = localStorage.getItem("logo-base");
        if (cached) return cached;

        let path = window.location.pathname;
        let segments = path.split("/").filter(Boolean);

        for (let i = segments.length; i >= 1; i--) {
            let candidate = "/" + segments.slice(0, i).join("/") + "/";
            let testPath = candidate + "_static/forlinx-logo.png";

            try {
                let response = await fetch(testPath, { method: "HEAD" });
                if (response.ok) {
                    console.log("✅ Found logo base:", candidate);
                    localStorage.setItem("logo-base", candidate);
                    return candidate;
                }
            } catch (e) {}
        }

        console.warn("⚠️ No logo found, fallback to current path");
        let fallback = path.replace(/[^/]+$/, "");
        localStorage.setItem("logo-base", fallback);
        return fallback;
    }

    let projectBase = await findProjectBase();
    console.log("projectBase =", projectBase);

    // ------------------- 页面内证书 logo 切换 -------------------
    function switchCertLogos(theme) {
        document.querySelectorAll("img.cert-toggle").forEach(img => {
            const light = img.dataset.light;
            const dark  = img.dataset.dark;
            img.src = theme === "dark" ? projectBase + dark : projectBase + light;
        });
    }

    // ------------------- 应用主题 -------------------
    function applyTheme(theme) {
        document.body.className = document.body.className.replace(/theme-\w+/g, "");
        document.body.classList.add(`theme-${theme}`);

        updateButtonLabel();

        // 侧边栏 logo
        const logo = document.querySelector(".wy-side-nav-search img");
        if (logo) {
            const lightLogo = projectBase + "_static/forlinx-logo.png";
            const darkLogo  = projectBase + "_static/forlinx-logo-dark.png";

            if (theme === "dark") {
                const testImg = new Image();
                testImg.onload = function () {
                    logo.src = darkLogo;
                    logo.style.filter = "";
                };
                testImg.onerror = function () {
                    logo.src = lightLogo;
                    logo.style.filter = "invert(1) hue-rotate(180deg)";
                };
                testImg.src = darkLogo;
            } else {
                logo.src = lightLogo;
                logo.style.filter = "";
            }
        }

        // 页面内证书 logo
        switchCertLogos(theme);

        document.body.style.transition = "background-color 0.3s, color 0.3s";
    }

    // ------------------- 更新按钮文字 -------------------
    function updateButtonLabel() {
        const btn = document.getElementById("theme-switcher-btn");
        if (!btn) return;
        btn.textContent = currentTheme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode";
    }

    // ------------------- 创建切换按钮 -------------------
    function createButton() {
        const container = document.createElement("div");
        container.id = "theme-switcher";

        const btn = document.createElement("button");
        btn.id = "theme-switcher-btn";
        btn.style.cssText = `
            padding: 6px 10px;
            background: var(--theme-btn-bg);
            color: var(--theme-btn-fg);
            border: 1px solid var(--theme-border);
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.3s, color 0.3s;
        `;

        btn.onclick = () => {
            currentTheme = currentTheme === "light" ? "dark" : "light";
            localStorage.setItem("doc-theme", currentTheme);
            applyTheme(currentTheme);
        };

        container.appendChild(btn);
        document.body.appendChild(container);

        updateButtonLabel();
    }

    // ------------------- 初始化 -------------------
    applyTheme(currentTheme);
    createButton();
});
