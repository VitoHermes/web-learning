document.addEventListener('DOMContentLoaded', function() {
    // 侧边栏导航点击事件
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有活动状态
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
        });
    });
});