window.onload = function (){
    //获取显示隐藏按钮
    let showBtnArr = document.getElementsByClassName('fa-caret-down');
    //获取订单明细
    let detailetBoxArr = document.getElementsByClassName('order-detailet');
    for(let i=0 ;i<showBtnArr.length;i++){
        detailetBoxArr[i].style.display='none';
    }

    for(let i=0 ;i<showBtnArr.length;i++){
        showBtnArr[i].onclick = function (){
            if(detailetBoxArr[i].style.display=='none'){
                detailetBoxArr[i].style.display='block';
            }else{
                detailetBoxArr[i].style.display='none';
            }
        }
    }
}