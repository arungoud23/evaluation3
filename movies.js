// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;
  let addArr = [];
  let vmoney = JSON.parse(localStorage.getItem("amount"))
  console.log(vmoney)
  let head = document.querySelector("#wallet").innerText=vmoney;


 async function searchmovies(){
    let movies = document.querySelector("#search").value;

     let res = await fetch(`https://www.omdbapi.com/?apikey=c994820&s=${movies}`)
     let data = await res.json();
    //  console.log(data);
    return data.Search
    //  display(data.Search)
  
 }

  function display(Data){
    document.querySelector("#movies").innerHTML="";
    console.log(Data);
    Data.forEach(function(elem){
      let box  = document.createElement("div");

      let avatar = document.createElement("img");
      avatar.src=elem.Poster;

      let name = document.createElement("p");
      name.innerText=elem.Title;

      let button = document.createElement("button");
      button.setAttribute("class","book_now")
      button.innerText="book_now";

      button.addEventListener("click",function(){
        addToList(elem)
        window.location.href="checkout.html";
      })

      box.append(avatar,name,button)
      document.querySelector("#movies").append(box)
    })

    function addToList(elem){
      addArr.push(elem)
      localStorage.setItem("movie",JSON.stringify(addArr))

    }
  }



 async function main(){
       let data = await  searchmovies()
      //  console.log(data);
       if(data === undefined){
         return false;
       }

       console.log(data);

       display(data)



  }


  // adding debouncing 


  function debouncing(func,value){
    if(id){
      clearTimeout(id)
    }

   id = setTimeout(function(){
       func()
    },value)


  }
