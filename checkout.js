// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time





let vmoney = JSON.parse(localStorage.getItem("amount"))
  console.log(vmoney)
  let head = document.querySelector("#wallet").innerText=vmoney;
document.querySelector("#confirm").addEventListener("click",confirm)
function confirm(){
  let seats = document.querySelector("#number_of_seats").value;
   let total = 100 * seats;

   if(total > vmoney){
     alert("insufficient money")
   }
   else{
     alert("Booking successful")
     let head = document.querySelector("#wallet").innerText=vmoney - total;
     localStorage.setItem("amount",JSON.stringify(vmoney - total))
   }
}





  let movieArr = JSON.parse(localStorage.getItem("movie"))

  console.log(movieArr)

  display(movieArr)

  function display(movieArr){
    document.querySelector("#movie").innerHTML="";
    movieArr.forEach(function(elem){

      let box  = document.createElement("div");

      let avatar = document.createElement("img");
      avatar.src=elem.Poster;

      let name = document.createElement("p");
      name.innerText=elem.Title;

      box.append(avatar,name)

      document.querySelector("#movie").append(box);


    })
  }
