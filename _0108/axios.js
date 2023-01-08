/* ---  Axios --- */
// Promise based http Client
// 요청 취소 가능
// JSON data로 변환 해줌

const loadDataWithAxios = () => {
    // broswer에선 XMLHttpRequest, NodeJS에선 HTTP Request
    axios.get("http://127.0.0.1:5500/_0108/axios_info.txt")
        .then((response) => {
            document.getElementById("demo").innerHTML = response.data;
        }).catch(()=> {
            console.log("failed");
        })
}

// set Event Listener
const btn = document.querySelector('button');

btn.addEventListener('click', event => {
    event.preventDefault();
    // request axios
    loadDataWithAxios();
})