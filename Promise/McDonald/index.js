let foodContainer = document.querySelector(".foodContainer");
let orderContainer = document.querySelector(".orderContainer");
let orderBtns = document.getElementsByClassName("orderBtn");

function orderFood(imgSrc, itemName) {
  console.log(imgSrc, itemName);

  foodContainer.style.display = "none";
  orderContainer.style.display = "block";

  // creating the food card
  let orderFoodCard = document.createElement("div");
  // setting the food card attributes and innerHTML
  orderFoodCard.setAttribute("class", "orderFoodCard");
  orderContainer.innerHTML = "";
  orderFoodCard.innerHTML = `
      <p>OrderID: JSUC546DKI55CKKD</p>
          <img
          src=${imgSrc}
          alt=""
          />
      <p>${itemName}</p>
  `;
  orderContainer.append(orderFoodCard);
}

function promiseFunc(imgSrc, itemName) {
  let myPromise = new Promise((resolve, reject) => {
    let randomDelay = Math.floor(Math.random() * 5);
    console.log(randomDelay);

    setTimeout(() => {
      resolve(orderFood);
      // reject("");
    }, randomDelay * 1000);
  });

  myPromise.then((orderFood) => {
    // orderFood();
    // console.log("function name is:", orderFood);
    orderFood(imgSrc, itemName)
  });
}

for (let i = 0; i < orderBtns.length; i++) {
  orderBtns[i].addEventListener("click", (event) => {
    let imgSrc = event.target.parentNode.children[0].src;
    let itemName = event.target.parentNode.children[1].innerHTML;

    promiseFunc(imgSrc, itemName)
  });
}