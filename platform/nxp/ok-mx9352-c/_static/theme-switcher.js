document.addEventListener("DOMContentLoaded", function () {
    let currentTheme = localStorage.getItem("doc-theme") || "light";

    // ------------------- 自动获取当前项目路径 -------------------
    // 例：https://hellotangle.github.io/forlinx-docs-HT/rockchip/ok3576-c/
    // 提取出 /forlinx-docs-HT/rockchip/ok3576-c/
    const pathParts = window.location.pathname.split("/");
    // 找到 "_static" 之前的层级
    // 例： /forlinx-docs-HT/rockchip/ok3576-c/some-page.html → /forlinx-docs-HT/rockchip/ok3576-c/
    let projectBase = "/";
    const idx = pathParts.indexOf("_static");
    if (idx > 1) {
        projectBase = pathParts.slice(0, idx).join("/") + "/";
    } else if (pathParts.length > 3) {
        // 一般 Sphinx 子项目深度：/repo/brand/model/
        projectBase = pathParts.slice(0, 4).join("/") + "/";
    }

    // ------------------- 应用主题 -------------------
    function applyTheme(theme) {
        // 切换 body class
        document.body.className = document.body.className.replace(/theme-\w+/g, "");
        document.body.classList.add(`theme-${theme}`);

        // 更新按钮文字
        updateButtonLabel();

        // 动态切换 logo
        const logo = document.querySelector(".wy-side-nav-search img");
        if (logo) {
            const lightLogo = projectBase + "_static/forlinx-logo.png";
            const darkLogo = projectBase + "_static/forlinx-logo-dark.png";

            if (theme === "dark") {
                // 先检测 dark logo 是否存在
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

        // 平滑过渡
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
