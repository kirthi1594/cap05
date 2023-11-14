let btn = document.getElementById("FetchUser");
let dataEle= document.querySelector("h1")
function FetchUser1() {
  fetch("https://reqres.in/api/users")
    .then(function (result) {
      result.json().then(function (result) {
        console.log(result.data);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
//  btn.addEventListener("click", FetchUser1);
// console.log(btn)

async function FetchUser2() {
  try {
    let result = await fetch("https://reqres.in/api/users");
    let data = await result.json();
    let usersArr=data.data;
    
    for(let userObj of usersArr){
      let name=`${userObj.first_name} ${userObj.last_name}`
      let email=userObj.email
      let img= userObj.avatar

      userDetail(name,email,img)
    }
  } catch (error) {
    console.log(error);
  }

}
btn.addEventListener("click", FetchUser2);

function userDetail(name,email,img){
let card = document.createElement("div")
card.innerHTML=`<img src=${img}>
<h3>${name}</h3>
<p>${email}</p>`
card.setAttribute("class","card")
container.append(card)
}
