function amountValidation(amnt) {
    const amountReg = /^\d{1,8}(\.\d{0,5}){0,2}$/;
    // console.log(amnt);
    if (amountReg.test(amnt)){ 
        return true;
    }
    else{
        return false;
    }
}
function accountNoValidation(acNo) {
    const acNoReg = /^[0-9]{7,10}$/
    if (acNoReg.test(acNo)){ 
        return true;
    }
    else{
        return false;
    }
}


let send = document.getElementById("subbtn");
send.addEventListener("click", (e) => {
    e.preventDefault();
    const b1 = document.getElementById("money")
    const amount = document.getElementById("money").value.trim()
    const amnt = parseFloat(amount)
    const b2 = document.getElementById("acNo")
    const accountNo = document.getElementById("acNo").value.trim()
    let p = document.getElementsByTagName("p")
    let count = 0;
    if(amnt != 0 && amountValidation(amnt)){
        (p[0].textContent = "", count++);
        b1.style.border = "1px solid green";
        // console.log(amnt);
    }
    else {
        p[0].textContent = "feild should not be empty"
        b1.style.border = "1px solid red";
    }
    const acNo = parseInt(accountNo)
    console.log(acNo);
    (acNo > 1000000 && accountNoValidation(acNo))?
        (p[1].textContent = "", count++, b2.style.border = "1px solid green"):
        (p[1].textContent = "feild should not be empty", b2.style.border = "1px solid red")
        
    console.log(count);
    if(count == 2){
        window.alert("Work in Progress 🧑‍💻👩‍💻!");
        window.location.href = "http://127.0.0.1:5500/payment_wallet.html"
    }
});