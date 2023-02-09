function login(){
var uname1 = window.localStorage.getItem('user');
console.log(uname1)
var username=document.getElementById('uname').value;
console.log(username)
var pw = window.localStorage.getItem('password');
var password=document.getElementById('passw').value;
if(username != uname1){
  document.getElementById('msg').innerHTML ="Wrong User";
}
else if(password != pw){
  document.getElementById('msg1').innerHTML ="Wrong password";
}
else{
window.location.href = "millionairegame.html";
}
};
