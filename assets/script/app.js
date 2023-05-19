function _para() {
    const _inp = document.getElementById('input')
    let y = _inp.value

    

    const ursll = `https://restcountries.com/v3.1/name/${y}`

    //const _url = `https://restcountries.com/v3.1/name/${y}`;
    // 
    axios(ursll)
       .then(response => {
          // const desc = `${response.weather[0]["langu"]}`
          console.log(response);
          console.log(response.data);

          let temp = response.data
          console.log(temp);
          document.querySelector('.search').innerText =""
          temp.map(function (val) {
             console.log(val);

             document.getElementById("list").innerHTML = ""

             let _li = document.createElement("li")
              _li.classList.add('col-8')
             _li.innerHTML = `
             <div class="row justify-content-around">
             <h1 class="text-center text-light">${val.name.common}</h1>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3"><b>Capital</b>: ${val.capital}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3">Eng:${val.languages.eng}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3"> ${val.region}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3"> ${val.altSpellings}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3">${val.subregion}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3">${val.borders}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3"><b>Car side</b>: ${val.car.signs} </span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3">${val.tld}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3">${val.name.official}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3"><b>People</b>: ${val.population}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3">${val.continents}</span>
             <span class="d-flex mt-3 border-bottom mx-3 text-light col-3"><b>Start Of Week</b>: ${val.startOfWeek}</span>
             

              <img class="col-4 mx-3 mt-2 img" src="${val.flags.png}" alt="flag">
            
             
           </div>

             ` 
             _inp.value = ""
             _inp.focus()
             document.getElementById("list").appendChild(_li)
             document.getElementById("form").style.opacity = '0'
          })
       })
       
       .catch(() => {
         document.querySelector('.search').innerText = "Search for a valid Countery"
       })

 }
// search end 

 const _user = document.getElementById("user")
 const _pas = document.getElementById("pass")
 const _form = document.getElementById("form")

 _form.addEventListener("submit", function(e) {
   e.preventDefault()
   /*   const myData = {
      _u: _user.value,
     _P: _pas.value,
     
  }
    */

     fetch('https://dummyjson.com/auth/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({

             username: _user.value,
             password: _pas.value,
             // expiresInMins: 60, // optional
         })
     })
         .then(res => res.json())
         .then(mydata => {
          /*    mydata.map(function(val){
                console.log(val);
             }) */

             setTimeout(() => {
               if(
                  mydata.username == _user.value 
                ){
               //  alert("ok")
          
                 document.getElementById("searchBox").style.opacity = '1'
                // document.getElementById("searchBox").style.transform='translateX(0%)'
                 document.getElementById("form").style.opacity = '0'
                 document.getElementById(".token")
                } else{
                 //alert("hello")
                 document.getElementById('msgform').innerText = "Enter for a valid username"
                // para()
                }
               
             }, 1000)
                
             
         })
         
 })
 
 

 let _height = document.querySelector(".token").clientHeight 
 document.querySelector(".token").style.height = '0'
function para(e){
 //  e.preventDefault()
 setTimeout(() => {
  // document.querySelector(".token").style.opacity = '1'
   document.querySelector(".token").style.height = _height + "px"
 }, 1000);

 
}



















/* const userData = {
   username: 'kminchelle',
    password: '0lelplR',

} */