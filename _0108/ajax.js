/* ---  Asynchronous JavaScript And XML --- */
// 전체를 로딩하지 않고도 일부만 업데이트 가능
// 웹페이지가 로딩된 이후에도 서버와 통신
function loadData() {
    var xhttp = new XMLHttpRequest(); // 기본적으로 포함됨 axios 등의 라이브러리에서도 이를 이용

    xhttp.onreadystatechange = function() {
        // readyState - 4 : request finished and response is ready
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

/* --- 한계점 --- */
// 스크립트에 포함된 서버로만 통신 가능
// 서버 -> 클라이언트의 push는 불가능 (pulling 만 가능)