document.addEventListener('DOMContentLoaded', function() {
    // 确保DOM完全加载后再执行  
    var header = document.querySelector('.wrapper header');
    var search = document.querySelector('.wrapper .search'); // 确保选择器正确指向search元素  

    if (header && search) {
        // 获取header的高度（offsetHeight包括边框和内边距）  
        var headerHeight = header.offsetHeight;

        // 设置search的上边距  
        search.style.marginTop = headerHeight + 'px';

        // 可选：如果header的高度可能会因为某些原因（如媒体查询）而改变，  
        // 您可以监听resize事件来更新search的上边距  
        window.addEventListener('resize', function() {
            // 重新获取header的高度  
            var newHeaderHeight = header.offsetHeight;

            // 如果高度发生了变化，则更新search的上边距  
            if (newHeaderHeight !== headerHeight) {
                headerHeight = newHeaderHeight;
                search.style.marginTop = headerHeight + 'px';
            }
        });
    }
});