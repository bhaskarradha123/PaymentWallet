const data = document.getElementsByTagName("td")
const account = JSON.parse(sessionStorage.getItem("account1"))
// console.log(account);
data[0].innerText = account.balance;