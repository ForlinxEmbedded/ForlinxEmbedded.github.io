# -- Path setup --------------------------------------------------------------

import os
import sys
import datetime
sys.path.insert(0, os.path.abspath('.'))

# -- Project information -----------------------------------------------------

project = 'Forlinx Embedded RV1126B/RV1126BJ Documentation'
author = 'Forlinx Embedded'
copyright = f'{datetime.date.today().year}, Forlinx Embedded'

# -- General configuration ---------------------------------------------------

extensions = [
    'myst_parser',         # 支持 Markdown
    'sphinx_sitemap',      # 添加 sitemap 扩展
    'sphinx_rtd_theme',    # 显式注册 RTD 主题扩展（推荐规范）
]

# sphinx_sitemap 必需的配置
html_baseurl = "https://forlinxembedded.github.io/rockchip/ok1126bx-c/"

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store'] # 添加了常见的忽略目录

# -- Options for HTML output -------------------------------------------------

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

# Logo 路径设置
html_logo = '_static/forlinx-logo.png'
html_favicon = '_static/forlinx.png'

html_theme_options = {
    'logo_only': True,
    'sticky_navigation': True,    
    'collapse_navigation': False, 
}

# 隐藏源码链接
html_show_sourcelink = False

# 自定义 CSS 与 JS
html_css_files = [
    'theme-switcher.css',
]

html_js_files = [
    'theme-switcher.js',
    'logo-link.js',
    'custom_sidebar.js',
]