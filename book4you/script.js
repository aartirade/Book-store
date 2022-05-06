//purchase-details

function addPurchase(PurchaseTB) {
  var Temail = prompt("Enter Email ");
  var Tphone = prompt("Enter Phone number");
  var Tpassword = prompt("Enter Password");

  var x = document.getElementById("PurchaseTB").insertRow(1);
  var a = x.insertCell(0);
  var b = x.insertCell(1);
  var c = x.insertCell(2);

  a.innerHTML = Temail;
  b.innerHTML = Tphone;
  c.innerHTML = Tpassword;
}

//login-form

function login() {
  var Email = document.getElementById("email").value;
  var Phone = document.getElementById("phone").value;
  var Password = document.getElementById("password").value;

  localStorage.setItem("email", Email);
  localStorage.setItem("phone", Phone);
  localStorage.setItem("password", Password);

  var storeMail = localStorage.getItem("email");

  // user login

  if (Password == "") {
    alert("Please Fill your Form First");
  } else if (Email == "") {
    alert("Please Fill your Form First");
  } else {
    window.alert("You've Sucessfully Logged in");
    window.open("index.html");
  }

  // admin login

  if (Email == "admin" && (Password = "admin")) {
    window.open("admin.html");
  } else console.log("Username or Password Incorrect");
}

// buy-now

function books() {
  var x = document.getElementById("book1").innerHTML;
  alert("                You have purchased" + x + "");
}

function book2() {
  var x = document.getElementById("book2").innerHTML;
  alert("You have purchased " + x + " book");
}

function book3() {
  var x = document.getElementById("book3").innerHTML;
  alert(" You have purchased " + x + " book ");
}

function book4() {
  var x = document.getElementById("book4").innerHTML;
  alert(" You have purchased " + x + " book ");
}

function book5() {
  var x = document.getElementById("book5").innerHTML;
  alert(" You have purchased " + x + " book ");
}

function book6() {
  var x = document.getElementById("book6").innerHTML;
  alert(" You have purchased " + x + " book ");
}
