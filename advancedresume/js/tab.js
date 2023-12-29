//点击tab标签(教育经历、工作经历)切换时切换对应内容
(function(){
    var list = document.querySelector('.skills-experiences .experiences .tabnav .list');
    var oLis = list.getElementsByTagName('li');
    var oTabcon = document.querySelectorAll('.skills-experiences .experiences .tabcon');
    
    list.onclick=function(e){
        if((e.target.tagName.toLowerCase()=='li')){
            var n = e.target.getAttribute('data-n');
            var Tabcon = document.querySelector('.skills-experiences .experiences .tabcon[data-n='+n+']');
            // 先全部取消
            for(var i=0;i<2;i++){
                oLis[i].className='';
                oTabcon[i].className='tabcon';
            }
            // 再单独加上
            e.target.className='current';
            Tabcon.className +=' show';
        }
    }
})();