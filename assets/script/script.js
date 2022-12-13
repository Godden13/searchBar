const nameSearch = document.querySelector(".name-search");
const userInfo = document.querySelector(".user-info");

function displayUser({name, age}){
  return `<div class = "userInfo>
          <div class = "dp">
            <h>${name}</h>
          <p>${age} year${age >1? "s": ""} old</p>
          </div>
          `
}

function displayUsers(persons) {
  return persons.map(displayUser).join("")
}

function compareNames(name, searchTerm){
  return name.toLowerCase().includes(searchTerm.toLowerCase());
}

function shouldResolve(){
  return Math.random() < 0.85;
}

function searchUsers(name, age){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(shouldResolve()) {
        resolve(
          users.filter(
            (user) =>
            (!name || compareNames(user.name, name)) &&
            (!age || user.age === age)
          )
        );
      } else {
        reject([]);
      }
    }, 2000);
  });
}

// function searchUsers(name, age) {
//   return.filter(
//     (user) => (!name || user.name === name) && (!ge || user.age === age)
//   )
// }

userInfo.innerHTML = displayUsers(users)
function renderMessage(message) {
  return `<div class "message"> ${message}</div>`
}
nameSearch.addEventListener("submit", (e) => {
  e.preventDefault()
  userInfo.innerHTML = renderMessage("Searching users...")
  searchUsers(e.target.name.value, +e.target.age.value)
  .then((result) => {
    userInfo.innerHTML = displayUsers((result));
  })
  .catch((e) => {
    userInfo.innerHTML = renderMessage(
      "Error Loading users! Please try again"
    )
  });
});
