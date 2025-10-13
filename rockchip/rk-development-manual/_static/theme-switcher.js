document.addEventListener("DOMContentLoaded", function () {
    let currentTheme = localStorage.getItem("doc-theme") || "light";


    // ------------------- 自动获取当前项目根路径 -------------------
    // 目标：保证始终返回包含 "_static" 的上级目录路径（例如 /rockchip/rk-development-manual/）
    // ------------------- 智能自动获取项目根路径 -------------------
function findProjectBase() {
    let path = window.location.pathname;
    let segments = path.split("/").filter(Boolean);

    for (let i = segments.length; i >= 1; i--) {
        let candidate = "/" + segments.slice(0, i).join("/") + "/";
        let testPath = candidate + "_static/forlinx-logo.png";

        let xhr = new XMLHttpRequest();
        try {
            xhr.open("HEAD", testPath, false);
            xhr.send();
            if (xhr.status >= 200 && xhr.status < 400) {
                console.log("✅ Found logo base:", candidate);
                return candidate;
            }
        } catch (e) {
            continue;
        }
    }
    console.warn("⚠️ No logo found, fallback to current path");
    return path.replace(/[^/]+$/, "");
}

let projectBase = localStorage.getItem("logo-base") || findProjectBase();
localStorage.setItem("logo-base", projectBase);
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
