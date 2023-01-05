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

    helpText.forEach(function(text) {
        // forEach 사용시 각각의 원소마다 다른 익명함수가 호출되기 때문에 다른 Closure를 가짐
        document.getElementById(text.id).onfocus = function() {
            showHelp(text.help);
        }
    })
}

setupHelp();