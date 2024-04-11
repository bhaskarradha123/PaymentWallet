function accountNoValidation(acNo) {
    const acNoReg = /^[0-9]{7,10}$/
    if (acNoReg.test(acNo)){ 
        return true;
    }
    else{
        return false;
    }
}
// here we are removing account
let create = document.getElementById("subbtn")
create.addEventListener("click", async (e) => {
    e.preventDefault()
    const b1 = document.getElementById("acNo")
    const accountNo = document.getElementById("acNo").value.trim()
    const b2 = document.getElementById("password")
    const password = document.getElementById("password").value.trim()
    let p = document.getElementsByTagName("p")
    let count = 0;
    const acNo = parseInt(accountNo)
    console.log(acNo);
    (acNo > 1000000 && accountNoValidation(acNo))?
        (p[0].textContent = "", count++, b1.style.border = "1px solid green"):
        (p[0].textContent = "feild should not be empty", b1.style.border = "1px solid red")
    password == ""?
        (p[1].textContent = "feild should not be empty", b2.style.border = "1px solid red"):
        (p[1].textContent = "", count++, b2.style.border = "1px solid green");
    console.log(count);
    if(count == 2) {
        // storeData()
        const user = sessionStorage.getItem("user1")
        const aId = JSON.parse(user).accountId;
        console.log("account id : ",aId);
        const url = "http://localhost:8080/account/".concat(aId)
        
        try{
            const response = await fetch(url,
            {
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json",
                },
                // body: JSON.stringify(account)
            }
            )
            console.log("try block");
            if(response.ok) {
                const data = await response.text();
                console.log(data);
                const temp = JSON.parse(sessionStorage.getItem("user1"))
                temp.accountId = 0;
                sessionStorage.setItem("user1",JSON.stringify(temp))  
                
                sessionStorage.removeItem("account1");
                
                // console.log(user.accountId);
                window.alert("account deleted successfully 🤐");
                window.location.href = "http://127.0.0.1:5500/account.html"
            }
            else {
                window.alert("Failed to delete account");
                window.alert("An error occurred while deleting the account");
            }
        }
        catch (error) {
            console.error("Error : ",error);
        }
    }
    else{
        window.alert("Please enter valid details");
    }
});