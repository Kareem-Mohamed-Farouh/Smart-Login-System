// document.getElementById("demo").innerHTML = "a7777777a";

var user = document.getElementById("demo");
// variable empty first to store user name after login
var userName ;
// check if username exists
if (localStorage.getItem("userName") != null) {
  userName = JSON.parse(localStorage.getItem("userName"));
hello() 

  var namo = userName;
  console.log(userName);
  // Message welcome username in home
  user.innerHTML = "Welcome " + namo;
}


function hello() {
  Swal.fire({
    position: "center-bottom",
    icon: "success",
    title: "Login Successful",
    showConfirmButton: false,
    timer: 2000,
  });
}



logOutButton.addEventListener("click", function () {
  open("./index-login.html", "_blank");
  close("./home.html");
});