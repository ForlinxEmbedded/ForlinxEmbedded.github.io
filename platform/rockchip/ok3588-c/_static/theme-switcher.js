document.addEventListener("DOMContentLoaded", async function () {
    let currentTheme = localStorage.getItem("doc-theme") || "light";

    // ------------------- 智能自动获取项目根路径 (异步) -------------------
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
            } catch (e) {
                // ignore, try upper level
            }
        }

        console.warn("⚠️ No logo found, fallback to current path");
        let fallback = path.replace(/[^/]+$/, "");
        localStorage.setItem("logo-base", fallback);
        return fallback;
    }

    // ✅ await 才会生效
    let projectBase = await findProjectBase();
    console.log("projectBase =", projectBase);

    // ------------------- 应用主题 -------------------
    function applyTheme(theme) {
        document.body.className = document.body.className.replace(/theme-\w+/g, "");
        document.body.classList.add(`theme-${theme}`);

        updateButtonLabel();

        const logo = document.querySelector(".wy-side-nav-search img");
        if (logo) {
            const lightLogo = projectBase + "_static/forlinx-logo.png";
            const darkLogo = projectBase + "_static/forlinx-logo-dark.png";

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


/* ==========================================================================
   🌟 新增：右侧智能浮动目录生成与滚动监听 (ScrollSpy) 引擎
   ========================================================================== */
   document.addEventListener("DOMContentLoaded", function() {
    var mainContent = document.querySelector('.rst-content');
    if (!mainContent) return; // 如果没有正文区域，直接退出

    // 1. 抓取正文中所有的 H2、H3 和 🌟新增的 H4 标题
    var headings = mainContent.querySelectorAll('h2, h3, h4');
    if (headings.length === 0) return; // 如果页面没有标题，不生成目录

    // 2. 动态创建右侧 TOC 结构
    var tocContainer = document.createElement('div');
    tocContainer.id = 'right-side-toc';
    
    var tocTitle = document.createElement('div');
    tocTitle.id = 'right-side-toc-title';
    tocTitle.innerText = 'ON THIS PAGE';
    tocContainer.appendChild(tocTitle);
    
    var tocList = document.createElement('ul');

    // 3. 循环将标题映射到右侧目录中
    headings.forEach(function(heading, index) {
        // 如果标题没有 ID（锚点），帮它自动生成一个
        if (!heading.id) {
            heading.id = 'heading-link-' + index;
        }
        
        var listItem = document.createElement('li');
        // 根据是 H2 还是 H3 赋予不同的 class，CSS 里 H3 会自动向右缩进
        listItem.className = 'toc-' + heading.tagName.toLowerCase();
        listItem.setAttribute('data-target', heading.id);
        
        var link = document.createElement('a');
        link.href = '#' + heading.id;
        
        // 🌟 终极防乱码提取逻辑：深度克隆节点，并删掉 Sphinx 隐藏的锚点图标
        var clone = heading.cloneNode(true);
        var headerlink = clone.querySelector('.headerlink');
        if (headerlink) headerlink.remove(); // 物理剥离隐藏图标
        
        // 提取纯净文字，并用正则清理任何可能残留的不可见特殊符号
        link.innerText = clone.textContent.replace(/[¶?]/g, '').trim();
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
    
    tocContainer.appendChild(tocList);
    document.body.appendChild(tocContainer);

    // 4. 🌟 高性能滚动监听 (ScrollSpy)
    var currentActiveItem = null;

    var observerOptions = {
        root: null,
        // 这里的 Margin 非常关键：它把屏幕分为一块“黄金高亮区”，标题滚动到距离顶部 80px 时才触发高亮
        rootMargin: '-80px 0px -70% 0px', 
        threshold: 0
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var targetId = entry.target.id;
                
                // 取消上一个高亮
                if (currentActiveItem) {
                    currentActiveItem.classList.remove('active');
                }
                
                // 激活当前最新滚到的高亮
                var matchItem = tocList.querySelector('li[data-target="' + targetId + '"]');
                if (matchItem) {
                    matchItem.classList.add('active');
                    currentActiveItem = matchItem;
                }
            }
        });
    }, observerOptions);

    // 开始指挥观察器盯着每一个正文标题
    headings.forEach(function(heading) {
        observer.observe(heading);
    });
});