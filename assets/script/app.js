let i = 0
const _cart = document.getElementById("cart")
const cartNumber = document.getElementById("cartNumbers")
const _addToCart = document.getElementById("addToCart")
const _cartNumber = document.getElementById("_cartNumber")
const _total = document.getElementById('Total')

let _clocs = document.querySelector('.bi-x-lg')

_cart.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector('.aside').style.transform = 'translateX(0%)'
})
_clocs.addEventListener("click", function () {

    document.querySelector('.aside').style.transform = 'translateX(100%)'
})

const _serach = document.getElementById("serach")

 function serach(e){
    //e.preventDefault()
    let temp = _serach.value
   // console.log(temp);
    const url = `https://dummyjson.com/products/search?q=${temp}`
    axios(url)
    .then(res=>{
       let para = res.data
        let self = para.products
        
      self.map((val)=>{
       /// document.getElementById("_ul").innerHTML =""
        let _li = document.createElement("li")
        _li.classList.add('col-8', 'row', 'justify-content-center')
          _li.innerHTML +=  `
          <figure class="col-2 mx-0 px-0">
          <img class="w-100" src="${val.thumbnail}" alt="">
         </figure>
          <div class="col-6">
              <h3>${val.brand}</h3>
              <h4 class="">${val.title}</h4>
              <strong>${val.price}</strong>

          </div>
          `       
          document.getElementById("_ul").appendChild(_li) 
      })
    })
}

axios('https://dummyjson.com/products')
    //.then(res => res.json())
    .then(resp => {
        let temp = resp.data
        // console.log(temp.carts);

        temp = temp.products

        temp.map(function (val) {
            //  console.log(val);
            const descrip = val.description
            const setImg = val.thumbnail
            const setTitle = val.title
            const setPrice = val.price


            let _figure = document.createElement("figure")
            _figure.classList.add('col-4', 'px-0', 'mx-0',)
            _figure.innerHTML = `
        <img class="w-100" src="${setImg}" alt="">

        <figcaption class="px-3 py-3 row justify-content-center">
             <h4>${setTitle}</h4>
             <div><strong>$${setPrice}</strong></div>
             <div>
            
                <span><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></span>
                <span>reviews</span>
                <h4>${val.brand}</h4>
             </div>
             
                <p  class="txt">${descrip}</p>
                 <button onclick="para('${setImg}', '${setTitle}', '${setPrice}',this)" id="addToCart" data-status='off'> add to <i class="bi bi-cart4"></i></button>
        </figcaption>
        `
            /*  <button class='btn btn-success col-12' onclick="_shop('${x.title}', ${x.rating.count}, '${x.image}', this, '${x.price}')" data-status='off'>shop now</button> */

            document.querySelector(".product").appendChild(_figure)

        })



    });



  function para(img, title, price, para) {
    let temp = para.getAttribute('data-status')
    let priceTotal = Number(price)


    if (temp == 'off') {


        i++

        _total.innerHTML = priceTotal
        cartNumber.innerHTML = i
        _cartNumber.innerHTML = i
        let _div = document.createElement("div")
        _div.classList.add('row', 'border-bottom', 'mt-2', 'py-3')

        _div.innerHTML = `
                    
                    
                     <figure class="col-3">
                     <img class="w-100" src="${img}" alt="">
                     </figure>  <p class="col-9  fw-bold">${title}</p>
                     <strong  class="col-4 d-flex justify-content-end">${price}</strong>
                `
        document.getElementById('lists').appendChild(_div)
        para.removeAttribute('data-status')
        total()
    }

    //<input type='number' min=0 max=${y} value=1>
}

function total() {
    const myArr = []

    let _div = document.querySelectorAll('#lists>div')
    _div.forEach(function (val) {
        let _child = val.children
        
        const card = {
            allPrice: Number(_child[2].innerHTML),
        }
        console.log(card);

        myArr.push(card)
    })
    console.log(myArr);
    let total = 0
    myArr.map(function (para) {
        total += para.allPrice
    })
    _total.innerHTML = total

}



