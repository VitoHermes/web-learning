document.addEventListener('DOMContentLoaded', () => {
    // 移动端菜单切换
    document.querySelector('.menu-toggle')?.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // 顶部导航切换处理
    document.querySelectorAll('.top-nav .nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有导航项的active类
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            // 为当前点击项添加active类
            this.classList.add('active');
            
            // 获取当前选中的类型
            const type = this.textContent.toLowerCase();
            
            // 更新侧边栏标题
            const sidebarHeader = document.querySelector('.sidebar-header h2');
            if (sidebarHeader) {
                sidebarHeader.textContent = `${this.textContent} Tutorial`;
            }

            // 隐藏所有教程部分
            document.querySelectorAll('.tutorial-section').forEach(section => {
                section.style.display = 'none';
            });

            // 显示对应类型的教程部分
            document.querySelectorAll(`.${type}-section`).forEach(section => {
                section.style.display = 'block';
            });

            // 选中并加载第一个可见链接
            const firstLink = document.querySelector(`.${type}-section a`);
            if (firstLink) {
                document.querySelectorAll('.sidebar-content a').forEach(link => {
                    link.classList.remove('active');
                });
                firstLink.classList.add('active');
                loadPage(firstLink);
            }
        });
    });

    // 为所有教程链接添加点击处理
    document.querySelectorAll('.sidebar-content a').forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            return loadPage(this);
        };
    });

    // 初始化显示HTML部分
    document.querySelector('.nav-item').click();
});

// 页面加载函数
function loadPage(link) {
    if (!link) return false;
    
    // 更新链接激活状态
    document.querySelectorAll('.sidebar-content a').forEach(item => {
        item.classList.remove('active');
    });
    link.classList.add('active');
    
    // 更新iframe内容
    const contentFrame = document.getElementById('content-frame');
    if (contentFrame) {
        // 先移除现有的事件监听器
        contentFrame.onload = null;
        
        // 添加新的加载事件监听器
        contentFrame.onload = function() {
            try {
                // 尝试访问页面内容，如果失败则显示404
                const doc = this.contentWindow.document;
                if (!doc.body || doc.body.innerHTML.trim() === '') {
                    this.src = 'pages/404.html';
                }
            } catch (e) {
                // 如果出现跨域错误则不处理
                if (e.name !== 'SecurityError') {
                    this.src = 'pages/404.html';
                }
            }
        };

        // 设置新的src
        contentFrame.src = link.href;
    }
    
    // 移动端视图下关闭侧边栏
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('active');
    }
    
    return false;
}

// 简化的错误处理
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error:', msg, url, lineNo, columnNo, error);
    return false;
}; 