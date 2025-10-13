document.addEventListener("DOMContentLoaded", function () {
    let currentTheme = localStorage.getItem("doc-theme") || "light";


    // ------------------- 自动获取当前项目根路径 -------------------
    // 目标：保证始终返回包含 "_static" 的上级目录路径（例如 /rockchip/rk-development-manual/）
    let pathParts = window.location.pathname.split("/").filter(Boolean);

    // 自动截断路径到第三级，例如：/forlinx-docs-HT/rockchip/rk-development-manual/
    let projectBase = "/";
    if (pathParts.length >= 3) {
    projectBase = "/" + pathParts.slice(0, 3).join("/") + "/";
    } else {
    projectBase = window.location.pathname.replace(/[^/]+$/, "");
    }
    console.log("projectBase =", projectBase);

    


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
