//checking if there is an account linked to user
let getAccount = document.getElementById("getAccount")
getAccount.addEventListener("click", async (e) => {
    e.preventDefault();
    const user = sessionStorage.getItem("user1")
    const uId = JSON.parse(user).id;
    // console.log(id);
    const aId = JSON.parse(sessionStorage.getItem("user1")).accountId
    console.log(aId);
    if(aId == 0){
        window.alert("Account unavailable!\n \t👆 on 'Create Account' ");
    }
    else {
        const url = "http://localhost:8080/account/".concat(aId)
        try{
        const response = await fetch(url,
            {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                },
            }
            );
            if(response.ok) {
                const data = await response.json();
                // console.log(data);
                const account = {
                    "id" : data.id,
                    "accountNo" : data.accountNo,
                    "balance" : data.balance
                }
                sessionStorage.setItem("account1",JSON.stringify(account))
                // window.alert("Account Detected!");
            }
            // else {
            //     window.alert("You have not created an account.\n or \nYou have deleted the account!\n \t👆 on 'Create Account'  ");
            // }
        }
        catch (error) {
            console.error("Error : ",error);
        }
        window.alert("Account Present! 🔗")
        window.location.href = "http://127.0.0.1:5500/display_details.html"
    }  
});

//checking if the account is already created.
let createAccount = document.getElementById("createAccount")
createAccount.addEventListener("click", async (e) => {
        e.preventDefault();
        const user = sessionStorage.getItem("user1")
        const uId = JSON.parse(user).id;
        const aId = JSON.parse(sessionStorage.getItem("user1")).accountId
        console.log(aId);
        if(aId == 0){
            window.location.href = "http://127.0.0.1:5500/create_account.html"
        }
        else {
            window.alert("Account already created! 🔍");
        }
});


//checking if there is an account to delete.
let deleteAccount = document.getElementById("deleteAccount")
deleteAccount.addEventListener("click", async (e) => {
        e.preventDefault();
        const user = sessionStorage.getItem("user1")
        const uId = JSON.parse(user).id;
        const aId = JSON.parse(sessionStorage.getItem("user1")).accountId
        console.log(aId);
        if(aId == 0){
            window.alert("You have not created an account.\n or \nYou have deleted the account!\n \t👆 on 'Create Account'  ");
            // window.location.href = "http://127.0.0.1:5500/create_account.html"
        }
        else {
            window.alert("Account Detected!");
            window.location.href = "http://127.0.0.1:5500/delete_account.html"
        }
});

//checking if there is an account to wallet operations
let paymentWallet = document.getElementById("paymentWallet")
paymentWallet.addEventListener("click", async (e) => {
        e.preventDefault();
        const user = sessionStorage.getItem("user1")
        const uId = JSON.parse(user).id;
        const aId = JSON.parse(sessionStorage.getItem("user1")).accountId
        console.log(aId);
        if(aId == 0){
            window.alert("You have not created an account.\n \t👆 on 'Create Account'  ");
        }
        else {
            window.alert("Let's go 💰!");
            window.location.href = "http://127.0.0.1:5500/payment_wallet.html"
        }
});