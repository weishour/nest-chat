let socket;
$(function() {
    let connected = false;
    let number = 0;
    const address = 'http://localhost';
    const port = '3000';

    socket = io(address + ':' + port);

    // 连接成功事件
    socket.on('connect', () => {
      if(!connected) console.log('连接闲聊服务成功！');
    });

    // 连接错误事件
    socket.on('connect_error', error => {
        console.log(error)
    });

    // 断开连接事件
    socket.on('disconnect', reason => {
        console.log('闲聊服务断开连接，正在重新连接中...');
        console.log(reason)
    });

    // 尝试重连事件
    socket.on('reconnect_attempt', timeout => {
        if (timeout > 5) {
            console.log('超过尝试重连次数，断开连接！');
            socket.close();
        } else {
            console.log('尝试重新连接第' + timeout + '次！');
        }
    });

    // 成功重连事件
    socket.on('reconnect', timeout => {
        connected = true;
        console.log('闲聊服务连接成功！');
    });

    socket.on('exception', exception => {
        console.log('exception', exception);
    });

    socket.on('error', error => {
        console.log('error', error);
    });

    let othersMsg = '';
    socket.on('newMessage', function(data){
      // 其他用户信息
      if(localStorage.username == data.username){
        othersMsg = '<li class="mdui-list-item mdui-ripple"><div class="mdui-list-item-content" style="text-align: right;"><div class="mdui-list-item-text">' + data.username + '</div><div class="mdui-list-item-title">' + data.message + '</div></div><div class="mdui-list-item-avatar"><i class="mdui-icon material-icons mdui-text-color-red">account_circle</i></div></li>';
      }else{
        othersMsg = '<li class="mdui-list-item mdui-ripple"><div class="mdui-list-item-avatar"><i class="mdui-icon material-icons mdui-text-color-blue">account_circle</i></div><div class="mdui-list-item-content"><div class="mdui-list-item-text">' + data.username + '</div><div class="mdui-list-item-title">' + data.message + '</div></div></div></li>';
      }

      // 删除数据
      removeFirst('.chat-list', '.mdui-list-item');
      // 添加数据
      $('.chat-list').append(othersMsg);
      // 滚动条处理
      const lastObj = $(".chat-list").find(".mdui-list-item")[$(".chat-list").find(".mdui-list-item").length - 1];
      setScrollTop('chat-list', lastObj);
    });

    // 用户登录
    socket.on('newUser', function(username){
      mdui.snackbar({
        message: '欢迎『 ' + username + ' 』加入闲聊！',
        position: 'right-top'
      });
    });

    if(!localStorage.username){
      login();
    }else{
      console.log(socket)
      socket.emit('addUser', localStorage.username);
    }

    // 信息的提交
    $('.form .msg').bind('keypress', event => {
      if(event.keyCode == "13") submit();
    });
    $('.form .send').on('click', event => submit());

    const submit = () => {
      const msg = $('.form .msg').val();

      if(!msg){
        mdui.snackbar({ message: '请输入内容！' });
        return false;
      }

      if(!localStorage.username){
        mdui.snackbar({ message: '请输入昵称！' });
        return false;
      }

      // 当前用户信息
      const currentMsg = '<li class="mdui-list-item mdui-ripple"><div class="mdui-list-item-content" style="text-align: right;"><div class="mdui-list-item-text">' + localStorage.username + '</div><div class="mdui-list-item-title">' + msg + '</div></div><div class="mdui-list-item-avatar"><i class="mdui-icon material-icons mdui-text-color-red">account_circle</i></div></li>';

      // 删除数据
      removeFirst('.chat-list', '.mdui-list-item');
      // 添加数据
      $('.chat-list').append(currentMsg);
      // 滚动条处理
      const lastObj = $(".chat-list").find(".mdui-list-item")[$(".chat-list").find(".mdui-list-item").length - 1];
      setScrollTop('chat-list', lastObj);

      socket.emit('sendMessage', msg);

      $('.form .msg').val('');
    }

    // 大于x条删除最前面一条数据
    const removeFirst = (father, children, max = 100) => {
      if($(father).find(children).length > max) $(father + ' ' + children).first().remove();
    }

    // 处理滚动条
    const setScrollTop = (div, obj) => {
      $('.' + div).animate({ scrollTop: obj.offsetTop }, "slow");
    }
});

const login = () =>
  mdui.prompt('请输入昵称',
    function (value) {
      localStorage.username = value;
      socket.emit('addUser', value);
    },
    function (value) {

    },
    {
      confirmText: '确认',
      cancelText: '取消',
      modal: true,
      history: false,
      confirmOnEnter: true,
      defaultValue: localStorage.username || ''
    }
  );
