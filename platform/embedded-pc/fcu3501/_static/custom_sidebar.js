// 文件路径: _static/custom_sidebar.js

document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.querySelector(".wy-menu-vertical");
    if (sidebar) {
        var contactMenu = `
            <style>
                #custom-contact-ul { background-color: transparent !important; margin-bottom: 0; }
                #custom-contact-li { background-color: transparent !important; }
                #custom-contact-link { background-color: transparent !important; }
                
                /* 鼠标悬停时的微弱背景 */
                #custom-contact-link:hover { background-color: rgba(128, 128, 128, 0.15) !important; }
                
                /* 👇 新增这一段：彻底消除点击时产生的黑框和阴影 */
                #custom-contact-link:focus, 
                #custom-contact-link:active {
                    outline: none !important;
                    box-shadow: none !important;
                    background-color: transparent !important;
                }
            </style>
            <p class="caption" role="heading"><span class="caption-text">CONTACT & SUPPORT</span></p>
            <ul id="custom-contact-ul">
                <li class="toctree-l1" id="custom-contact-li">
                    <a id="custom-contact-link" href="index.html#contact-support">Contact Us</a>
                </li>
            </ul>
        `;
        sidebar.insertAdjacentHTML("beforeend", contactMenu);
    }
});