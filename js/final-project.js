"use strict"

class Product {
    constructor(name, price, compare) {
        this.name = name;
        this.price = price;
        this.compare = compare;
    }
};

const sneaker = new Product();
sneaker.name = "Men Sneaker";
sneaker.price = 100;
sneaker.compare = 150;

//mobil nav
const mobileMenu     = document.querySelectorAll(".hamburger-nav");
const mobileNavList  = document.querySelector("#mobile-nav");

mobileMenu.forEach(nav => {
    nav.addEventListener("click", () => {
        mobileNavList.classList.toggle("active");
    })
});


// event handler for email subscription
const subscriptionEmail = document.querySelector(".subscribtion-email");
const allSubBtns        = document.querySelectorAll(".subscription-btn");

allSubBtns.forEach(btn => {
    btn.addEventListener("click", evt => {
        if (subscriptionEmail.value === "") {
            btn.nextElementSibling.nextElementSibling.innerText = "Email is required";
            btn.nextElementSibling.nextElementSibling.style.color = "red";
            evt.preventDefault();
        }  else  {
            btn.nextElementSibling.nextElementSibling.innerText = "Thanks for subscribing!";
            btn.nextElementSibling.nextElementSibling.style.color = "green";
            subscriptionEmail.value = "";
            subscriptionEmail.style.display = "none"
            btn.style.display = "none"
        }
    });
});

// Document on load
document.addEventListener('DOMContentLoaded', () => {
    // alert("line 16")
    const $ = selector => document.querySelector(selector);
    
    //set name for store product
    let product     = document.querySelectorAll('.product-name')
    // set the product name to equal to the assign product name value

    product.forEach(prod => {
        prod.textContent = sneaker.name;
    })
    // alert('line 49');

    //set price for store product
    let price     = document.querySelectorAll('.price')
    // set the product price to equal to the assign product name value
    price.forEach(pri => {
        pri.textContent = `$ ${sneaker.price} USD`
    })

    let comparedPrice = document.querySelectorAll(".price-compared");
    comparedPrice.forEach(pri => {
        pri.textContent = `$ ${sneaker.compare} USD`
    })

    // alert('line 31');
    //update quantity selector
    let quantityPlus = document.querySelectorAll('.plus');
    let quantityMinus = document.querySelectorAll('.minus');
    let quantityNum = document.querySelector(".quantity-num");

    //cart icon quantity selected
    let cartQuantity = document.querySelectorAll('.cart-icon-quantity'); 

   
    //plus event handler
    quantityPlus.forEach(plus => {
        plus.addEventListener("click", () => {
            let digit = parseFloat(quantityNum.innerText);
            quantityNum.innerText = digit +1;
            localStorage.setItem("cart value", parseFloat(quantityNum.textContent)); //adding the cart's quantity to the local storage
            let cartValue = localStorage.getItem("cart value") // get the value of cart in local storage

            cartQuantity.forEach(cart => {
                cart.innerHTML = cartValue;
            })
        })
    })

    // alert("line 52")
    //minus event handler
    quantityMinus.forEach(minus => {
        minus.addEventListener("click", () => {
            let digit = parseFloat(quantityNum.innerText);
            quantityNum.innerText = digit - 1;
            let cartValue = localStorage.getItem("cart value");

            //return 0, if quantity is already 0
            if (quantityNum.textContent < 1) {
                quantityNum.innerText = 0;
            }

            cartQuantity.forEach(cart => {
                cart.innerHTML = cartValue;
                cartValue      = quantityNum.innerText;

            })
    
        })
    })

    // alert('line 80')
    // Code for Product page carousel
    const mainCarousel = $('#carousel-main');
    const imageLinks = document.querySelector('#carousel-list').querySelectorAll('a');

    for (let link of imageLinks) {
        const image = new Image();
        image.src = link.href;

        link.addEventListener('click', evt => {
            mainCarousel.src = link.href;
            evt.preventDefault();
        })
    }
    // alert('line 94')
    // cart quantity update
    cartQuantity.innerText = localStorage.getItem("cart value");
    
    //update all carts
    const homeCart         = $("#home-cart");
    const cartCart         = $("#cart-cart");
    const aboutCart        = $("#about-cart");
    const contactCart      = $("#contact-cart");
    const privacyCart      = $("#privacy-cart");
    const landingPageCart  = $("#landingpage-cart");
    const confirmationCart = $("#confirmation-cart");
// alert('line 106')

})


