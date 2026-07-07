# -- Path setup --------------------------------------------------------------

import os
import sys
sys.path.insert(0, os.path.abspath('.'))

# -- Project information -----------------------------------------------------

project = 'Forlinx Embedded RK3572 Documentation'
author = 'Forlinx Embedded'
copyright = 'Forlinx Embedded'
# -- General configuration ---------------------------------------------------

extensions = [
    'myst_parser',         # 支持 Markdown
    'sphinx_sitemap',      # 添加 sitemap 扩展
]
html_baseurl = "https://forlinxembedded.github.io/rockchip/ok3572-c/"


templates_path = ['_templates']
exclude_patterns = []

source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'markdown',
}

# -- Options for HTML output -------------------------------------------------

html_theme = 'sphinx_rtd_theme'

html_static_path = ['_static']

# Logo (如果有，放在 _static 目录)
html_logo = '_static/forlinx-logo.png'
html_favicon = '_static/forlinx.png'

html_theme_options = {
    'logo_only': True,
    'sticky_navigation': True,    
    'collapse_navigation': False, 
}

html_css_files = [
    'theme-switcher.css',
]

# 👇 关键调整：已经将 html_sidebars 字典彻底删除。
# 这样 sphinx_rtd_theme 就会使用它内置的侧边栏逻辑，保证左侧目录的正常折叠和展开。

html_show_sourcelink = False

html_js_files = [
    'theme-switcher.js',
    'logo-link.js',
    'custom_sidebar.js',
]