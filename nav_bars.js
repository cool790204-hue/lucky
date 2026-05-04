window.onload = function() {
    const navHTML = `
    <nav>
        <div class="container">
            <a href="index.html" class="logo">貓咪俱樂部</a>
            <ul>
                <li><a href="index.html">首頁</a></li>
                <li><a href="about.html">店員資歷</a></li>
                <li><a href="courses.html">課程簡介</a></li>
                <li><a href="tools.html" class="active">每日觀察分享區</a></li>
                <li><a href="testimonials.html">展示牆</a></li>
                <li><a href="support.html">貓貓食品用品購物區</a></li>
            </ul>
        </div>
    </nav>`;

    // 找到 HTML 裡的容器並塞入內容
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navHTML;
    }
};