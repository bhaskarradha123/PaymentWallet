// here we are the writing the logic for how sign-in and logout buttons should work.
let btn = document.getElementById("btn")
btn.addEventListener("click",(e) =>{
    e.preventDefault()
    // console.log(Object.keys(sessionStorage).length);
    const l = Object.keys(sessionStorage).length;
    console.log(l, typeof l);
    let user_form = document.getElementById("user-form")
    const main1 = document.getElementById("main")
    let display = user_form.classList.toggle("none")
    if(l === 1) {
        if(display){
            user_form.style.display="block"
            main1.style.filter = "blur(8px)"  
        }
        else {
            user_form.style.display="none"
            main1.style.filter = "none"  
        }
    }
    else{
        window.alert("Already you are logged-in!")
    }
})

// here we are writing the logic for when account button should work.
let Account = document.getElementById("account")
Account.addEventListener("click", (e) => {
    const l = Object.keys(sessionStorage).length;
    console.log(l, typeof l);
    if(l !== 1) {
        let User1 = JSON.parse(sessionStorage.getItem("user1"))
        if(User1.accountId != 0){
        //    window.location.href="http://127.0.0.1:5500/account.html"
            window.open("http://127.0.0.1:5500/account.html")
        }
        else{
            window.alert("Account unavailable!")
        }
    }
    else{
        window.alert("Account not created!")
    }

})
let logged_in = document.getElementById("logged-in")
logged_in.addEventListener("click",(e) =>{
    e.preventDefault()
    const l1 = Object.keys(sessionStorage).length;
    console.log(l1);
    if(l1 === 1) {
        window.alert("You are not logged-in 😂😂!")
    }
    else{
        a();
    }
    
})
function a(){
    var res = confirm("Are you sure you want to logout?")
    if(res == true) {
        sessionStorage.clear()
        location.reload()
        // window.location.href = "http://127.0.0.1:5500/index.html"
    }
    else {
        console.log("you are logged-in!");
    }
}
let main = document.getElementById("main")
main.addEventListener("click",(e) =>{
    e.preventDefault()
    // let demo1 = document.getElementById("demo1")
    let user_form = document.getElementById("user-form")
    user_form.style.display="none"
    main.style.filter = "none";
})

function emailValidate(){
    const email = document.getElementById("siemail")
    const emailVal = document.getElementById("siemail").value
    // let emailReg = /^[a-zA-z0-9.`~!#$%^&*'+/-?_={|}]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailReg = /^[a-z0-9]+@[a-z]+\.[^\s@]+$/;
    if(emailReg.test(emailVal)){
        return true;
    }
    else{
        return false;
    }
}

function checkData(){
    const email = document.getElementById("siemail").value.trim()
    const password = document.getElementById("sipassword").value.trim()
    if(typeof(Storage)!=="undefined") {
        let user = JSON.parse(window.localStorage.getItem("user"))
        if((email === user.email) && (password === user.password)) {
            window.location.href ="http://127.0.0.1:5500/account.html";
        }
        else{
            alert("Already Registered \t Enter correct data!\nNew User \t Click on Sign-Up button!")
        }
    }  
    else{  
         alert("Sorry! your browser is not supporting the browser")  
    } 
}

function logoutButton(){
    console.log("hello");
    let logout = document.getElementById("logout")
    let sign_in = document.getElementById("btn");
    let user1 = JSON.parse(sessionStorage.getItem("user1"))
    if(user1 != null) {
        // console.log(user1);
        logout.style.display = "block"
        sign_in.style.display = "none"
    }
}

let login = document.getElementById("subbtn");
login.addEventListener("click", async (e) => {
    e.preventDefault()
    const b1 = document.getElementById("siemail")
    const email = document.getElementById("siemail").value.trim()
    const b2 = document.getElementById("sipassword")
    const password = document.getElementById("sipassword").value.trim()
    let p = document.getElementsByTagName("p")
   
    let count = 0;
    if(email != "" && emailValidate())
        (p[1].textContent = "", count++, b1.style.border = "1px solid green");
    else {
        p[1].textContent = "feild should not be empty"
        b1.style.border = "1px solid red"
    }
    password == ""?
        (p[2].textContent = "feild should not be empty", b2.style.border = "1px solid red"):
        (p[2].textContent = "", count++, b2.style.border = "1px solid green");
    console.log(count);
    if(count == 2){
        const credentials = {
            email: email,
            password: password
        };
      
        const jsonCredentials = JSON.stringify(credentials);
      
        try {
            const response = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: jsonCredentials,
            });
      
            if (response.ok) {
              const data = await response.json();
              // Handle the response data
            //   console.log("user data : ",data);
              const accountId = (data.account == null)? 0 : data.account.id;
            //   console.log(accountId);
              const temp = {
                "id" : data.id,
                "userId" : data.userId,
                "accountId" : accountId
              }
              sessionStorage.setItem("user1",JSON.stringify(temp))
              if( accountId == 0 ) {
                const temp2 = {
                    "id" : 0,
                    "accountNo" : 0,
                    "balance" : 0
                  }
                  sessionStorage.setItem("account1",JSON.stringify(temp2))
              }
              else{
                const temp1 = {
                    "id" : data.account.id,
                    "accountNo" : data.account.accountNo,
                    "balance" : data.account.balance
                  }
                  sessionStorage.setItem("account1",JSON.stringify(temp1));
              }
            const user2 = {
                "id" : data.id,
                "name" : data.name,
                "email" : data.email
              }
              sessionStorage.setItem("user2",JSON.stringify(user2))
              window.alert("Login successful")
              window.location.href = "http://127.0.0.1:5500/account.html"
           
            } else {
                sessionStorage.removeItem("user1")
                sessionStorage.removeItem("account1")
              window.alert("Invalid email or password 🤔");
            }
        }   
        catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred during login");
        }
    } 
    else {
          const temp = {
            "id" : "",
            "userId" : ""
          }
          localStorage.setItem("user1",JSON.stringify(temp))
          const user2 = localStorage.getItem("user1")
          window.alert("Please enter valid details 🤕");
    }      
})


