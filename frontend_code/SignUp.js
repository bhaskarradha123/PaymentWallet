function emailValidate(){
    const email = document.getElementById("inputEmail4")
    const emailVal = document.getElementById("inputEmail4").value
    // let emailReg = /^[a-zA-z0-9.`~!#$%^&*'+/-?_={|}]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailReg = /^[a-z0-9]+@[a-z]+\.[^\s@]+$/;
    if(emailReg.test(emailVal)){
        return true;
    }
    else{
        return false;
    }
}

function storeData(){
    const name = document.getElementById("inputName4").value.trim()
    const userId = document.getElementById("inputUserId4").value.trim()
    const email = document.getElementById("inputEmail4").value.trim()
    const password = document.getElementById("inputPassword4").value.trim()
    const phone = document.getElementById("inputPhone4").value.trim()
    const temp = {
        "name": name,
        "email": email,
        "password": password,
        "phone": phone,
        "userId": userId
    }
    const user = JSON.stringify(temp);
    if(typeof(Storage)!=="undefined") {

        localStorage.setItem("user",JSON.stringify(temp));
       }  
    else{  
         alert("Sorry! your browser is not supporting the browser")  
    } 
}


const submit = document.getElementById("subbtn");

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    // getting the Sign-Up input field values.
    const b1 = document.getElementById("inputName4")
    const name = document.getElementById("inputName4").value.trim()
    const b2 = document.getElementById("inputUserId4")
    const userId = document.getElementById("inputUserId4").value.trim()
    const b3 = document.getElementById("inputEmail4")
    const email = document.getElementById("inputEmail4").value.trim()
    const b4 = document.getElementById("inputPassword4")
    const password = document.getElementById("inputPassword4").value.trim()
    const b5 = document.getElementById("inputPhone4")
    const phone = document.getElementById("inputPhone4").value.trim()
    // validation part of the entered values.
    let p = document.getElementsByTagName("p")
    let count = 0;
    name == ""?
        (p[0].textContent = "feild should not be empty", b1.style.border = "1px solid red"):
        (p[0].textContent = "", count++, b1.style.border = "1px solid green");
    userId == ""?
        (p[1].textContent = "feild should not be empty", b2.style.border = "1px solid red"):
        (p[1].textContent = "", count++, b2.style.border = "1px solid green");
    if(email != "" && emailValidate())
        (p[2].textContent = "", count++, b3.style.border = "1px solid green");
    else
        (p[2].textContent = "feild should not be empty", b3.style.border = "1px solid red")
    password == ""?
        (p[3].textContent = "feild should not be empty", b4.style.border = "1px solid red"):
        (p[3].textContent = "", count++, b4.style.border = "1px solid green");
    phone == ""?
        (p[4].textContent = "feild should not be empty", b5.style.border = "1px solid red"):
        (p[4].textContent = "", count++, b5.style.border = "1px solid green");
    console.log(count);
    if(count==5) {
        const user = {
            "name": name,
            "email": email,
            "password": password,
            "phone": phone,
            "userId": userId
        };

        try {
            const response = await fetch("http://localhost:8080/user", 
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            });
    
            if (response.ok) {
            const data = await response.json();
            // Handle the response data
            console.log(data);
            window.alert("User saved successfully 🤩");
            window.location.href =  "http://127.0.0.1:5500/index.html"
            } else {
            // window.alert("Failed to save user 😣");
            window.alert(user.email + " Is Aldery existes \t go for sign-up")
            }
        }
        catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred while saving user");
        }
    }
    else {
      window.alert("Please enter valid details");
    }
  });

