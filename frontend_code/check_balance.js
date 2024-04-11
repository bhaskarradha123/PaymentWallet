function accountNoValidation(acNo) {
    const acNoReg = /^[0-9]{7,10}$/
    if (acNoReg.test(acNo)){ 
        return true;
    }
    else{
        return false;
    }
}


let check = document.getElementById("subbtn");
check.addEventListener("click", (e) => {
    e.preventDefault();
    const b2 = document.getElementById("acNo")
    const accountNo = document.getElementById("acNo").value.trim()
    let p = document.getElementsByTagName("p")
    let count = 0;
    const acNo = parseInt(accountNo)
    console.log(acNo, typeof acNo);
    (acNo > 1000000 && accountNoValidation(acNo))?
        (p[0].textContent = "", count++, b2.style.border = "1px solid green"):
        (p[0].textContent = "feild should not be empty", b2.style.border = "1px solid red")   
    console.log(count);
    const account = sessionStorage.getItem("account1")
    const aNo = JSON.parse(account).accountNo;
    // console.log(aNo, typeof aNo);
    if(count > 0 && acNo === aNo){
            window.alert("🤑🤑");
            window.location.href = "http://127.0.0.1:5500/balance_display.html"
    }
    else{
        alert("Invalid Account Number! 🤔")
    }
});