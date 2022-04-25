// Store the wallet amount to your local storage with key "amount"


document.querySelector("button").addEventListener("click",addwallet);

function addwallet(){
 let money = document.querySelector("#amount").value;
 console.log(money)

 let head = document.querySelector("#wallet").innerText=money;
 localStorage.setItem("amount",JSON.stringify(money))

}
