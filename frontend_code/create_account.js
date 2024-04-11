// saving account information
let create = document.getElementById("subbtn")
create.addEventListener("click", async (e) => {
    e.preventDefault()
    const b1 = document.getElementById("ddbtn");
    const minBalance = document.getElementById("ddbtn").value
    const b2 = document.getElementById("supassword")
    const password = document.getElementById("supassword").value.trim()
    const b3 = document.getElementById("inamnt");
    const inamnt = document.getElementById("inamnt").value.trim()
    let p = document.getElementsByTagName("p")
    let count = 0;
    ddbtn == 0?
        (p[0].textContent = "feild should not be empty", b1.style.border = "1px solid red"):
        (p[0].textContent = "", count++, b1.style.border = "1px solid green");
    password == ""?
        (p[1].textContent = "feild should not be empty", b2.style.border = "1px solid red"):
        (p[1].textContent = "", count++, b2.style.border = "1px solid green");
    inamnt == ""?
        (p[2].textContent = "feild should not be empty", b3.style.border = "1px solid red"):
        (p[2].textContent = "", count++, b3.style.border = "1px solid green");
    console.log(count);
    if(count == 3) {
        const account = {
            "minBal" : minBalance,
            "password" : password,
            "initialAmount" : inamnt
        }
        const user = sessionStorage.getItem("user1")
        const id = JSON.parse(user).id;
        // console.log(id);
        const url = "http://localhost:8080/account/".concat(id)
        try{
            const response = await fetch(url,
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(account),
            }
            );
            console.log("try block");
            if(response.ok) {
                const data = await response.json();
                console.log(data);
                const temp = JSON.parse(sessionStorage.getItem("user1"))
                temp.accountId = data.id;
                sessionStorage.setItem("user1",JSON.stringify(temp))  
                
                const temp1 = {
                    "id" : data.id,
                    "accountNo" : data.accountNo,
                    "balance" : data.balance
                }
                sessionStorage.setItem("account1",JSON.stringify(temp1));
                
                // console.log(user.accountId);
                window.alert("account saved successfully 🎊🎊");
                window.location.href = "http://127.0.0.1:5500/account.html"
            }
            else {
                window.alert("Failed to save account");
                window.alert("An error occurred while saving account");
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