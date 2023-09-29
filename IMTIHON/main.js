let elWrapper = document.querySelector(".home__list")
let list = document.querySelector(".view__list")

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => dom(data))

function dom(data) {
    obj(data)
    console.log(data);
    data.map((item) =>{
        //CREATE ELEMENT
        let img = document.createElement("img")
        let li = document.createElement("li")
        let title = document.createElement("p")
        let text = document.createElement("p")
        let price = document.createElement("p")
        
        //CLASSLIST
        img.classList = 'home__item-image'
        li.classList = "home__item"
        title.classList = "home__title"
        text.classList = "home__item-text"
        price.classList = "home__item-price"
        //SRC
        img.src = item.image
        img.alt = item.description
        //WIDTH HEIGHT
        img.width = 245
        img.height = 203
        img.draggable = undefined
        //TEXTCONTENT
        title.textContent = item.title
        text.textContent = item.category
        price.textContent = item.price + " сум"
        //APPEND
        li.append(img, title, text, price)
        elWrapper.append(li)
    })
}
let number = 0;

function obj(data) {
    console.log(data)
    data.map((item) => {
        
        if(number < 4){
            number++
            console.log(number)
            // CREATE ELEMENT
            let img = document.createElement("img")
            let elli = document.createElement("li")
            let title = document.createElement("p")
            let text = document.createElement("p")
            let price = document.createElement("p")
            //CLASSLIST
            img.classList = "view__item-image"
            elli.classList = "view__item"
            title.classList = "view__item-title"
            text.classList = "view__item-text"
            price.classList = "view__item-price"
            //SRC
            img.src = item.image
            img.alt = item.description
            img.draggable = undefined
            //TEXTCONTENT
            title.textContent = item.title
            text.textContent = item.category
            price.textContent = item.price + " сум"
            //WIDTH HEIGHT
            img.width = 245
            img.height = 203
            elli.append(img, title, text, price)
            list.append(elli)
            
        }
    })
}

dom()