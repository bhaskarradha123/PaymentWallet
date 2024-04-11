function alert() {
    var txt;
    if (confirm("Are You Really decided to delete your data!😲😲\nNote : Your data and account_data will be deleted! !")) {
        // console.log("deleted");
        
    } else {
        console.log("failed");
    }
}

async function deleteUser(userId) {
    const user = sessionStorage.getItem("user1")
    const uId = JSON.parse(user).id;
    console.log("user id : ",uId);
    const url = "http://localhost:8080/user/".concat(uId)
    
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
            sessionStorage.removeItem("user1");
            sessionStorage.removeItem("account1");
            
            window.alert("Deleted successfully 🤐");
            //
            window.location.href = "http://127.0.0.1:5500/index.html"
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