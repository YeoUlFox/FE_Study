function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

/**
* onfocus 상태가 되었을때, 해당 칸에 맞는 도움말로 변경하는 함수
*/
function setupHelp() {
    var helpText = [
            {'id': 'email', 'help': '이메일'},
            {'id': 'name', 'help': '이름'},
            {'id': 'age', 'help': '나이'}
        ];

    for (var i = 0; i < helpText.length; i++) {
        // let keyword가 사용되어서, for 구문 내의 3개의 scope가 서로 구분됨
        let item = helpText[i];

        document.getElementById(item.id).onfocus = function() {
            showHelp(item.help);
        }
    }
}

setupHelp();