var username = document.getElementById("userName");
var useremail = document.getElementById("userEmail");
var userpasword = document.getElementById("userPassword");


var buttonChek = document.getElementById("buttonChek");
var buttunadduserr = document.getElementById("buttunadduser");

var loginUseremail = document.getElementById("usermail");
var loginUserpasword = document.getElementById("userPasword");
var logOutButton = document.getElementById("logout");

var regaxName = /^[a-z0-9_-]{3,15}$/;
var regaxEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
var regaxPass =/^[\w\W  ]{8,}$/;
var allUser = [];




var foundelement = localStorage.getItem("allusers");
if (foundelement == undefined) {
  allUser = [];
} else {
  allUser = JSON.parse(foundelement);
  displayalluser();
}

function adduser() {

  if (validationname() && validationemail() && validationpass()) {

    if ((emailfound() === true || namefound() === true)) {
      
      

      if ((emailfound() === true)) {
        allert1();
        console.log("email found")
      } else {
        allert2();
        console.log("name found");
      }
    }
      else {
        var userinfo = {
          name: username.value,
          email: useremail.value,
          password: userpasword.value,
        };
        console.log(validationname());
        allUser.push(userinfo);
        localStorage.setItem("allusers", JSON.stringify(allUser));
      displayalluser();

      open("./index.html", "_blank");
     
      close("./register.html");
        clearinput();
         allert3();
        userpasword.classList.remove("is-valid");
        useremail.classList.remove("is-valid");
        username.classList.remove("is-valid");
      }
      
    }
    
  }

buttunadduserr.addEventListener("click", function () {
  adduser();
});

/*===================START==display USERS in console and clear input====================*/ 
function displayalluser() {
  console.log(allUser)
}
function clearinput() {
  useremail.value = null;
  username.value = null;
  userpasword.value = null;
 
}
/*====================END=display in console and clear input====================*/ 

// function clearlogin() {
//    loginUseremail=null;
//   loginUserpasword=null;
// }

function login() {
 
  for (let i = 0; i < allUser.length; i++) {
    if (emailfoundlogin() && passfoundlogin()) {
      
      localStorage.setItem("userName", JSON.stringify(allUser[i].name));
      
      // window.location.href = "home.html";
      close("./index.html","_blank");
      open("./home.html");

    } else {
      allert2;
    }

  }
}












function hello() {
  Swal.fire({
    position: "top-left",
    icon: "success",
    title: "Register Successful",
    showConfirmButton: false,
    timer: 2000,
  });
}

// var user = document.getElementById("demo");
// // variable empty first to store user name after login
// var userName;
// // check if username exists
// if (localStorage.getItem("userName") != null) {
//   userName = JSON.parse(localStorage.getItem("userName"));

//   var namo = userName;
//   console.log(userName);
//   // Message welcome username in home
//   user.innerHTML = "Welcome " + namo;
// }



     

function allert3() {
  Swal.fire({
    icon: "success",
    title: "Oooh.",
    text: " go to sgin in",
    footer: ` </button>  <h6 >Design by <strong>Kareem Farouh *_-</strong></h6>
 `,
  });
}
function allert5() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: " naeme you enter not found !",
    footer: "<h6> please remember  your name <h6>",
  });
}
function allert1() {
  Swal.fire({
    icon: "error",
    background: "black",
    color:"white",
    title: "Warning...",
    text: " this email already found- existing before !",
    footer: `<h6 class="fw-bold  text-danger">( sign in )or try by other Email <h6>`,
  });
}
function allert2() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: " Youn name Entered is Existing before!",
    footer: "<h3 >change Name</h3>",
  });
}

/* ===========================register page= js=========================*/

function validationname() {
  if( regaxName.test(username.value))
 {
    username.classList.add("is-valid");
    username.classList.remove("is-invalid");
    return true;
  }
  else {
     username.classList.remove("is-valid");
     username.classList.add("is-invalid");
     return false;
  }


}
function validationpass() { 
  if 
  (regaxPass.test(userpasword.value))
  
   {
    userpasword.classList.add("is-valid");
    userpasword.classList.remove("is-invalid");
    return true;
  }
  else {
     userpasword.classList.remove("is-valid");
     userpasword.classList.add("is-invalid");
     return false;
  }
}
function validationemail() {
  if( regaxEmail.test(useremail.value))
  {
    useremail.classList.add("is-valid");
    useremail.classList.remove("is-invalid");
    return true;
  }
  else {
     useremail.classList.remove("is-valid");
     useremail.classList.add("is-invalid");
     return false;
  }
}

useremail.addEventListener("input", function () {
  validationemail();
  
})
username.addEventListener('input', function () {
  validationname()
})
userpasword.addEventListener("input", function () {
  validationpass()
 
})


function emailfound() {
  for (var i = 0; i < allUser.length; i++) {
    if (useremail.value == allUser[i].email) {
  
      return true;
    }
  }
}
function namefound() {
  for (var i = 0; i < allUser.length; i++) {
    if (username.value == allUser[i].name) {
      
      return true;
    }
  }
}

function passfoundlogin() {
  for (var i = 0; i < allUser.length; i++) {
    if (loginUserpasword.value == allUser[i].password) {
      
      return true;
    }
  }
}


function emailfoundlogin() {

  for (var i = 0; i < allUser.length; i++) {
    if (loginUseremail.value == allUser[i].email) {
  
      return true;
    }
  }
}


