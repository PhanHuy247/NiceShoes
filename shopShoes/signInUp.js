function signup(e){
    // e.preventDefault();
    // validation form register and register user local storage
const email = document.getElementById("email1").value;
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const pass1 = document.getElementById("pass1").value;
const pass2 = document.getElementById("pass2").value;

console.log(email)
console.log(name)
console.log(phone)
console.log(pass1)
console.log(pass2)
if (
    email === "" ||
    phone === "" ||
    pass1 === "" ||
    pass2 === "" ||
    name === ""
  ) {
    alert("vui lòng không để trống");
  } else if (
    pass1 !== pass2
  ) {
    alert("password không giống nhau");
  } else{
    var user = {
        email: email,
        name: name,
        phone: phone,
        password: pass1
    }
    window.location.reload()
    var json = JSON.stringify(user)
    
    localStorage.setItem(email, json);
    alert("Đăng Ký Thành Công");
  }
}
// document.getElementById("myForm").addEventListener("submit", signup);

function signIn(e){
  // e.preventDefault();
  // validation form register and register user local storage
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

var user = localStorage.getItem(email)
if(user !== "" && user !== null)
user = JSON.parse(user)
if (email === "" ||
  password === "" 
) {
  alert("vui lòng không để trống");
} else if (
  user === "" || user === null
) {
  alert("Email không chính xác");
} else if (
  user.email === email && user.password === password
) {
  window.location="/home.html";
}else{
  alert("Mật khẩu không chính xác");
}
}
// document.getElementById("signIn").addEventListener("submit", signIn);
