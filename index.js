var signinemail= document.getElementById("SignInEmail")
var signinpass= document.getElementById("SignInPass")
var loginbtn= document.getElementById("loginbtn")
var username= document.getElementById("SignUpName")
var signupemail =document.getElementById("SignUpEmail")
var signuppass=document.getElementById("SignUpPass")
var signupbtn =document.getElementById("Signupbtn")
var logoutbtn=document.getElementById("logout")
var usedemail=document.getElementById("Usedemail")
var usedpass=document.getElementById("Usedpass")
var loginemail=document.getElementById("loginemail")
var loginpass=document.getElementById("loginpass")
var UserList = []; 



if (localStorage.getItem("Users") != null) {
    UserList = JSON.parse(localStorage.getItem("Users"));
    
  }

  function adduser() {
    let User = {
        Username: username.value,
        Email: signupemail.value,
        Password: signuppass.value,
    };
    
    if (isValidEmail(User.Email)&&isValidName(User.Username)) {
      if (isvalidpass(User.Password)){
        if (isEmailUnique(User.Email)) {
          usedemail.innerHTML="";
          usedpass.innerHTML=""
          UserList.push(User)
          localStorage.setItem("Users", JSON.stringify(UserList));
          clearForm()
          window.location.href = ".//index.html";
          console.log(UserList)
          
        } else {
          usedemail.innerHTML="Email already used!";
          
        }
      }else{
        usedpass.innerHTML="Password must be at least eight characters, at least one letter and one number"
      }
    } else {
      usedemail.innerHTML="Email or name is not valid!"
    }
    ;
  }
  console.log(UserList);
  
  
  

  function isEmailUnique(email) {
    return !UserList.some((User) => User.Email === email);
  }

  function isvalidpass(pass){
    const validpass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return validpass.test(pass)
  }
  function isValidName(name) {
    const validName = /^\w{3,}(\s+\w+)*$/;
    return validName.test(name);
  }

  function isValidEmail(email) {
    const pattern = new RegExp(
      "^[^@]+@[^@]+\.[^@]+$"
    ); 
    return pattern.test(email);
  }

  function clearForm() {
    username.value = "",
    signupemail.value = "",
    signuppass.value = "";}

  function login(){
    
    for (var i = 0; i<UserList.length; i++ ){
      
      if(signinemail.value==UserList[i].Email && signinpass.value==UserList[i].Password){
          sessionStorage.setItem("User",`${UserList[i].Username}`)
          window.location.href = ".//logged.html";
          

        }else{
          loginpass.innerHTML="Email or password not correct"
        }
    }
  }
  function logout(){
    window.location.replace(".//index.html")
  }
  
