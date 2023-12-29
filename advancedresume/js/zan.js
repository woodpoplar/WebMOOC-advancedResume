var oSpan = document.querySelectorAll('.interplay .pics-info ul li span');
for(var i = 0;i<oSpan.length;i++){
    (function(i){
        var heart = oSpan[i].querySelector('.heart');
        var redHeart = oSpan[i].querySelector('.redheart');
        // 0表示红在下，1表示红在上
        var idx = 0;
        oSpan[i].onclick=function(){
            if(idx==0){
                redHeart.style.visibility='visible';
                idx=1;
                heart.style.visibility='hidden';
            }else{
                redHeart.style.visibility='hidden';
                idx=0;
                heart.style.visibility='visible';
            }
        };
    })(i); 
    //将得到的全局变量i变为局部变量，否则的话所有函数都将共享内存中的同一个变量i，使得会将以前的i重新赋值，依次类推，故循环完毕后不管点击哪一个红心都只有最后一个起作用
}