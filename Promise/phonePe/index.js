let pending = document.getElementById("pending");
let succesfull = document.getElementById("succesfull");
let failed = document.getElementById("failed");
let home = document.getElementById("home");
let amt = document.getElementById("amt");
let submit = document.getElementById("submit");

function makePay() {
  // console.log("pay")
  home.style.display = "none";
  pending.style.display = "block";
  //   setTimeout(function())
}

function succesPay() {
    // console.log("pay")
    succesfull.style.display = "block";
    pending.style.display = "none";

}

function failedPay() {
    // console.log("pay")
    failed.style.display = "block";
    pending.style.display = "none";

}


submit.addEventListener("click", (e) => {
  e.preventDefault();
  
  let num = Math.floor(Math.random() * 10);
  console.log(num);
  let promise = new Promise(function (resolve, reject) {
    makePay()
    setTimeout(function () {
      if (num % 2 == 0) {
        resolve(succesPay());
      } else {
        reject(failedPay());
      }
    },1000)
  });

  promise
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
});



// submit.addEventListener('click', (e)=> {
// e.preventDefault()
// makePay()
// }); // pages refreshes
// Math.random() return a random number 0-1 * 10 (1-10)
// num == even => resolve
// num == odd  =< reject
// let num = Math.floor(Math.random()*10)
// console.log(num)
// let promise = new Promise(function(resolve,reject){
//     if(num%2==0){
// resolve (makePay())
//     }
//     else{
// reject ('failed')
//     }
// })
// promise
// .then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })
