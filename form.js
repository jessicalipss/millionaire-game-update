
var errormsg = ["Error!!! Should contain only character A-Z or a-z","Should contain only numbers from 0-9","Field cannot be empty. Please fill","Please select one option","Please enter an email address in the correct format username@domain.com",
" Your username must contain more than 8 characters","Your username should contain only the following characters: A-Za-z0-9&#$@","Error!!Confirm password does match entered password","Phone number should contain 8 digits"
,"NIC should contain 14 characters","Select only one gender"];







function Validate(){
if (valFn() == true && valLn() == true && valphonenum() == true && valnic() == true  && valrad() == true  && valEmail()== true && valUname() == true && valPassword() == true && valEmpty1() == true && valEmpty() == true && valcaptchachck() == true && valicoun()== true ){

  return true;
}
else{
  return false;
}
}


 function valFn(){
 var fn = document.getElementById('txtfname');
 var fn1 = document.getElementById('errfn');
  if(isNaN(fn.value) == false && fn.value == null || fn.value =="" ){
  fn.select();
  fn.style.backgroundColor = "yellow";
  fn1.innerHTML = errormsg[2];
  return false;
}
else if(isNaN(fn.value)== false){
fn.select();
fn.style.backgroundColor = "yellow";
fn1.innerHTML = errormsg[0];
return false;
  }

 else{
     fn.style.backgroundColor = "white";
     fn1.innerHTML = "";
     return true;

   }
 }
 function valLn(){
 var ln = document.getElementById('txtlname');
 var ln1 = document.getElementById('errln');
  if(isNaN(ln.value) == false && ln.value == null || ln.value =="" ){
  ln.select();
  ln.style.backgroundColor = "yellow";
  ln1.innerHTML = errormsg[2];
  return false;}
 else if(!isNaN(ln.value)){
 ln.select();
 ln.style.backgroundColor = "yellow";

 ln1.innerHTML = errormsg[0];

     return false;
   }

   else{
     ln.style.backgroundColor = "white";
     ln1.innerHTML = "";
     return true;

   }
 }


 function valphonenum()
 {
   var phone = document.getElementById('txtphonenum').value;

    if(phone== null || phone =="" || isNaN(phone) == true || phone.length!=8){
   document.getElementById('txtphonenum').select();
   document.getElementById('txtphonenum').style.backgroundColor = "yellow";
  if(phone == null || phone =="" ){
   document.getElementById('errph').innerHTML = errormsg[2];
   return false;
 }
else if (isNaN(phone) == true){
    document.getElementById('errph').innerHTML = errormsg[1];
    return false;
}
else if (phone.length!=8){
  document.getElementById('errph').innerHTML = errormsg[8];
    return false;
  }
    }
    else{
      document.getElementById('txtphonenum').style.backgroundColor = "white";
      document.getElementById('errph').innerHTML = "";
      return true;
    }
}

function valnic(){
  var nic = document.getElementById('txtid').value;
  var nicc = nic.length

   if(nic == null || nic =="" || nicc!=14){
  document.getElementById('txtid').select();
  document.getElementById('txtid').style.backgroundColor = "yellow";
  if (nic == null || nic =="" ){
    document.getElementById('errnic').innerHTML = errormsg[2];
    return false;
   }
  else if (nicc!=14){
       document.getElementById('errnic').innerHTML = errormsg[9];
       return false;
   }
 }
   else{
     document.getElementById('txtid').style.backgroundColor = "white";
     document.getElementById('errnic').innerHTML = "";
     return true;
   }
}

 function valcoun(){
   var select = document.getElementById('ddlcoun');
  var country = select.value;
 if (select.tagName === 'SELECT') {


   if (country=="mur"){
     mynode = document.getElementById('addcount');
     mynode.style.display = 'none';
   }
   else{
     mynode = document.getElementById('addcount');
     mynode.style.display = 'block';
   }
 }
 }


 function valEmail(){
   var email = document.getElementById('email').value;


      var confirm = email.indexOf("@");

      var confirm2 = email.indexOf(".com");
  console.log(email.charAt(confirm+1))

    if(email == null || email =="" || confirm2 == -1 || confirm == -1 || email.charAt(confirm+1)=="."){
   document.getElementById('email').select();
   document.getElementById('email').style.backgroundColor = "yellow";

   if (email == null || email=="" ){
     document.getElementById('erremail').innerHTML = errormsg[2];
    return false;
  }
  else if ( confirm2 == -1 || confirm == -1 || email.charAt(confirm+1)=="."){
    document.getElementById('erremail').innerHTML = errormsg[4];
   return false;
 }
    }
    else{

      document.getElementById('email').style.backgroundColor = "white";
      document.getElementById('erremail').innerHTML = "";
      return true;
 }
 }

function valUname()

  {
   var uname1 = document.getElementById('uname').value;
   var letters = ["a","b","c","d","e","f","h","g","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",'A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J','K',' L','M', 'N', 'O', 'P', 'Q', 'R', 'S','T','U', 'V', 'W', 'X', 'Y' , 'Z',"@","#","$","&",'1','2','3','4','5','6','7','8','9','0'];
    window.localStorage.setItem('user', uname1);
   for(var i = 0 ; i<uname1.length; i++){
     var chck = uname1[i];
     console.log(chck);
     var chcked = letters.indexOf(chck);
      console.log(chcked);
      if (chcked == -1 ){
        document.getElementById('uname').select();
        document.getElementById('uname').style.backgroundColor = "yellow";
        document.getElementById('erruname').innerHTML = errormsg[6];
       return false;
      }
   }


   if(uname1 == null || uname1 ==""  || uname1.length < 8){
   document.getElementById('uname').select();
   document.getElementById('uname').style.backgroundColor = "yellow";

    if (uname1.length <= 8 && uname1.length > 0){
     document.getElementById('erruname').innerHTML = errormsg[5];
   return false;
   }
   else if (uname1 == null || uname1 =="" ){
     document.getElementById('erruname').innerHTML = errormsg[2];
   return false;
   }
 }
   else{
     document.getElementById('uname').style.backgroundColor = "white";
     document.getElementById('erruname').innerHTML = "";
     return true;
   }

 }
function valPassword(){
  var pass1 = document.getElementById('passw').value;
  var pass2 = document.getElementById('cpassw').value;
      window.localStorage.setItem('password', pass2);
  if(pass2 == null || pass2 =="" || pass1!=pass2){
  document.getElementById('cpassw').select();
  document.getElementById('cpassw').style.backgroundColor = "yellow";

  if (pass2 == null || pass2 =="" ){
    document.getElementById('txtcpassw').innerHTML = errormsg[2];
  return false;
}
else if (pass1!=pass2){
  document.getElementById('txtcpassw').innerHTML = errormsg[7];
return false;
}
  }
  else{

    document.getElementById('cpassw').style.backgroundColor = "white";
    document.getElementById('txtcpassw').innerHTML = "";
    return true;
}
}
function valEmpty(){
  var uname = document.getElementById('passw').value;

  if(uname == null || uname =="" ){
  document.getElementById('passw').select();
  document.getElementById('passw').style.backgroundColor = "yellow";
  document.getElementById('txtpassw').innerHTML = errormsg[2];
  return false;
  }
  else{

    document.getElementById('passw').style.backgroundColor = "white";
    document.getElementById('txtpassw').innerHTML = "";
    return true;
}
}
function valEmpty1(){
  var state1 = document.getElementById('state').value;
  var maur = document.getElementById("ddlcoun").value;
  console.log(maur);
  if(maur == "mur"){
    state1 = "mauritius"
  }
  if(state1 == null || state1 =="" ){
  document.getElementById('state').select();
  document.getElementById('state').style.backgroundColor = "yellow";
  document.getElementById('txtstate').innerHTML = errormsg[2];
  return false;
  }
else if  (maur == "mur"){
 return true;
  }
  else{

    document.getElementById('state').style.backgroundColor = "white";
    document.getElementById('txtstate').innerHTML = "";
    return true;
}
}

 function valconfirm(){
  var answer =  confirm("Are you sure you want to reset the form ?");
  if (answer == true){
    location.reload();
  }
 }
 function valrad(){
   var males = document.getElementById('male').checked;
   var fmales = document.getElementById('fmale').checked;
   if(males == false && fmales == false ){

   document.getElementById('rad').innerHTML = errormsg[2];
   return false;
   }
  else if(males == true && fmales == true ){

   document.getElementById('rad').innerHTML = errormsg[10];
   return false;
   }
   else{
     document.getElementById('rad').innerHTML = "";
     return true;
 }
 }

function	valcaptcha(){
  var dice = Math.floor(Math.random() * 6) + 1;

  if (dice == 1)
  {
  document.querySelector("#slideshow").src = "img1.png";
  document.querySelector("#slideshow").value = 1;
  }
  else if (dice==2) {
    document.querySelector("#slideshow").src = "img2.png";
    document.querySelector("#slideshow").value = 2;
  }
  else if (dice==3) {
    document.querySelector("#slideshow").src = "img3.png";
    document.querySelector("#slideshow").value = 3;
  }
  else if (dice==4) {
    document.querySelector("#slideshow").src = "img4.jpg";
    document.querySelector("#slideshow").value = 4;
  }
  else if (dice==5) {
    document.querySelector("#slideshow").src = "img5.jpg";
    document.querySelector("#slideshow").value = 5;
  }
  else if (dice==6) {
    document.querySelector("#slideshow").src = "img6.png";
    document.querySelector("#slideshow").value = 6;
  }
}

  var imgval =["qGphJ","upord","W68HP","smwm","aumso","2W4M"];

 function valcaptchachck(){
   var tanswer = document.getElementById('chckimg').value;
    var answer3 = document.getElementById('slideshow').value;
   if (answer3==1 && imgval[0]== tanswer){
     return true;
   }
else   if (answer3==2 && (imgval[1]== tanswer)){
     return true;
   }
  else if (answer3==3 && (imgval[2]== tanswer)){
     return true;
   }
  else if (answer3==4 && (imgval[3]== tanswer)){
     return true;
   }
   else if (answer3 ==5 && (imgval[4]== tanswer)){
     return true;
   }
  else if (answer3 ==6 && (imgval[5]== tanswer)){
     return true;
   }
   else {

     valcaptcha();
     return false;
   }
}

function valicoun(){
  var ddlcc = document.getElementById("ddlcoun");
       if (ddlcc.value == "") {
     document.getElementById('txtcount').innerHTML = errormsg[2];

           return false;
       }
       else{
         document.getElementById('txtcount').innerHTML = "";
        return true;
     }
   }
