let send = document.getElementById("send");
send.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/send_amount.html"
});

let receive = document.getElementById("receive");
receive.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/receive_amount.html"
});

let check = document.getElementById("check");
check.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/check_balance.html"
});