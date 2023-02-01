if (typeof (Storage) !== "undefined") {
    console.log("it works")
} else {
    console.log("it dont work")
}
let cart = document.querySelectorAll(".addToCart");

console.log(cart);

// Create an array [] of objects {} for each product that we have 
products = [
    {
        name: "DropShipping Package",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card1
    {
        name: "Ebook Package",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card2
    {
        name: "Blogger Package",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card3
    {
        name: "Stocks Package",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card4
    {
        name: "Create a course Package",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card5
    {
        name: "Retail Property Package",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card6
    {
        name: "Youtuber Package",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card7
    {
        name: "Crypto Package",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card8
    {
        name: "Farmland Package",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card9
    {
        name: "Photography Package<",
        category: "structured",
        price: 50,
        incart: 0
    },
    {
        name: "DropShipping base",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card1
    {
        name: "Ebook Base",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card2
    {
        name: "Blogger Base",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card3
    {
        name: "Stocks Base",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card4
    {
        name: "Create a course base",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card5
    {
        name: "Retail Property base",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card6
    {
        name: "Youtuber base",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card7
    {
        name: "Crypto Base",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card8
    {
        name: "Farmland Base",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card9
    {
        name: "Photography base",
        category: "structured",
        price: 50,
        incart: 0
    },

    {
        name: "DropShipping EX",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card1
    {
        name: "Ebook Ex",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card2
    {
        name: "Stocks Ex",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card3
    {
        name: "Stocks Ex",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card4
    {
        name: "Create a course Ex",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card5
    {
        name: "Retail Property Ex",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card6
    {
        name: "Youtuber Ex",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card7
    {
        name: "Crypto Ex",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card8
    {
        name: "Farmland Ex",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card9
    {
        name: "Photography Ex",
        category: "structured",
        price: 50,
        incart: 0
    },
    {
        name: "Beverage series",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card1
    {
        name: "Digital products",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card2
    {
        name: "Affiliate marketing",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card3
    {
        name: "Crowdfunding",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card4
    {
        name: "Affiliate marketing",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card5
    {
        name: "Worksheets",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card6
    {
        name: "Instacart",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card7
    {
        name: "Self publishing",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card8
    {
        name: "Crowdfunding",
        category: "structured",
        price: 50,
        incart: 0
    },
    // This is one of the objects that will used for card9
    {
        name: "Photography Package<",
        category: "structured",
        price: 50,
        incart: 0
    },
    
    
    // This is one of the objects that will used for card10

]





//create a loop that will go through each element

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}


function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.countedItem').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.countedItem').textContent = 1;
    }


    //document.querySelector('.countedItem').textContent + 1;
    //console.log(document.querySelector(".countedItem"));







}



function totalCost(product) {
    //This is the price being added in the localStorage
    // localStorage.setItem('totalCast', product.price)

    //if their is something in localStorage we want to add the total or the sum of the added item
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        //This explains that there is some value(50) in localstorage
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
        //The product.price comes from the array of objects price property
    } else {
        //This is the price being added in the localStorage
        localStorage.setItem('totalCost', product.price);
    }

}



function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    document.querySelector('.countedItem').textContent = productNumbers;
}

onloadCartNumbers();



function clearAll() {
    localStorage.setItem('cartNumbers', 0);
    document.querySelector('.countedItem').textContent = 0;
    localStorage.clear();
}

clearAll();

function totalOutput() {
    

}

totalOutput();