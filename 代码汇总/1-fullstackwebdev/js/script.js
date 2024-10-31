function loadPage(link) {
    // 获取所有导航链接
    const links = document.querySelectorAll('.sidebar-content a');
    // 移除所有active类
    links.forEach(item => item.classList.remove('active'));
    // 给当前点击的链接添加active类
    link.classList.add('active');
    
    // 更新iframe的src
    const iframe = document.getElementById('content-frame');
    iframe.src = link.href;
    
    // 在移动端视图下，点击链接后关闭侧边栏
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('active');
    }
    
    // 阻止默认的链接跳转行为
    return false;
}

// 移动端菜单切换
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
}); 