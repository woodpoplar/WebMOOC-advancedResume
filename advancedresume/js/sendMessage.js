(function () {
    var messageCon = document.getElementById('messagecon');
    var userName = document.getElementById('username');
    var sendBtn = document.getElementById('sendbtn');

    var messageContent = document.getElementById('messageContent');

    var idx = 1; //1表示左，2表示右

    sendBtn.onclick = function () {
        var messageConVlue = messageCon.value;
        var userNameValue = userName.value;
        messageCon.value = '';
        userName.value = '';
        if (messageConVlue === '' || userNameValue === '' || userNameValue.length>5) {
            alert('留言内容和留言人名字都不可为空!且姓名长度不能超过5， 请重新输入');
            return;
        }

        var profile = document.createElement('div');
        profile.className = 'profile';

        var profilePhoto = document.createElement('div');
        profilePhoto.className = 'profilePhoto';
        profilePhoto.style.backgroundImage = 'url(../images/profilePhoto.jpg)';

        var span = document.createElement('span');
        span.innerText = userNameValue;
        span.title = userNameValue;

        profile.appendChild(profilePhoto);
        profile.appendChild(span);

        var content = document.createElement('textarea');
        content.className = 'content';
        content.innerText = messageConVlue;

        var divbox = document.createElement('div');
        divbox.appendChild(profile);
        if (idx == 1) {
            divbox.className = 'user';
            idx = 2;
            divbox.appendChild(content);
        } else {
            divbox.className = 'me';
            idx = 1;
            divbox.insertBefore(content, profile);
        }

        messageContent.appendChild(divbox);
    
        
    }    
})();