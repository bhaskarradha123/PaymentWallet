const data = document.getElementsByTagName("td")
console.log(data);
const user = JSON.parse(sessionStorage.getItem("user1"))
// const aId = JSON.parse(user).accountId;
// console.log(user);
data[0].innerText = user.id;
data[1].innerText = user.userId;

const account = JSON.parse(sessionStorage.getItem("account1"))
// console.log(account);
data[2].innerText = account.accountNo;
data[3].innerText = account.balance;

