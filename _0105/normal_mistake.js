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
            var item = helpText[i];

            // 여기서 onfocus에 연결되는 Closure가 모두 같게 됨
            // => 실행 시 문제가 발생
            document.getElementById(item.id).onfocus = function() {
                showHelp(item.help);
            }
        }
    }

setupHelp();