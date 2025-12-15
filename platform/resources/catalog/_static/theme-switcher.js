document.addEventListener("DOMContentLoaded", async function () {
    let currentTheme = localStorage.getItem("doc-theme") || "light";

    // ------------------- 页面内证书 logo 切换 -------------------
    function switchCertLogos(theme) {
        document.querySelectorAll("img.cert-toggle").forEach(img => {
            const light = img.getAttribute("data-light");
            const dark  = img.getAttribute("data-dark");
            if (!light || !dark) return;

            // 使用 URL 拼接，保证路径正确
            const newSrc = new URL(theme === "dark" ? dark : light, window.location.href).href;
            img.src = newSrc;
        });
    }

    // ------------------- 应用主题 -------------------
    function applyTheme(theme) {
        // body 主题 class
        document.body.className =
            document.body.className.replace(/theme-\w+/g, "");
        document.body.classList.add(`theme-${theme}`);

        updateButtonLabel();

        // 左侧 Sphinx logo 切换
        const logo = document.querySelector(".wy-side-nav-search img");
        if (logo) {
            const lightLogo = new URL("_static/forlinx-logo.png", window.location.href).href;
            const darkLogo  = new URL("_static/forlinx-logo-dark.png", window.location.href).href;

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

        // 刷新证书 logo
        switchCertLogos(theme);

        document.body.style.transition =
            "background-color 0.3s, color 0.3s";
    }

    // ------------------- 更新按钮文字 -------------------
    function updateButtonLabel() {
        const btn = document.getElementById("theme-switcher-btn");
        if (!btn) return;
        btn.textContent =
            currentTheme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode";
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
