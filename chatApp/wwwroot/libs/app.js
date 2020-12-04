(function () {
    var btnSend = $('#btnSend');
    var tbxMsg = $('#tbxMsg');
    var listChat = $('#ListChat');
    var userName = $('#user-name').val();

    var connection = new signalR.HubConnectionBuilder()
        .withUrl("/chat")
        .configureLogging(signalR.LogLevel.Information)
        .build();

    $(btnSend).click(function () {
        var msg = $(tbxMsg).val();
        connection.invoke('SendMessage', {
            userName: userName,
            message: msg
        });
    });

    connection.on("ReceivedMessage", function (obj) {
        var htmlElement = '<li>'
            + '<span >' + obj.formattedTimeStamp + ' ' + obj.userName + ': ' + '</span>'
            + obj.message
            + '</li>'

        $(tbxMsg).val('');

        $(listChat).prepend(htmlElement);
    });

    connection.on("UserSignedIn", function (obj) {
        var htmlElement = '<li>'
            + obj + ' - nowy uzytkownik w pokoju.'
            + '</li>'

        $(tbxMsg).val('');

        $(listChat).prepend(htmlElement);
    });

    connection.start().then(function () {
        console.log("connestion as " + userName);

        connection.invoke('SignedUser', userName);
    });
})();
