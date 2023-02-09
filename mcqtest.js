//array of 30 + questions
var question = [
  ['What is the boiling point temperature (water)?','50 degree celsius','100 degree celsius','150 degree celsius','200 degree celsius'],
  ['Which fruit is associated with Isaac Newton?','Apple','Pear','Banana','Pineapple'],
  ['Which one of the following scientists is known for his contributions to the science of evolution?','Marie Curie','Thomas Edison','Stephen Hawking','Charles darwin'],
  ['Arnold Schwarzenegger was the governor of which American state?','Florida','Texas','Montana','California'],
  ['Which building was not attacked on 9/11?','World Trade Center South Tower','World Trade Center North Tower','The Pentagon','Statue of Liberty'],
  ['What is the capital city of Australia?','Sydney','Melbourne','Canberra','Brisbane'],
  ['Which of these is not a country in Africa?', 'Burkina Faso', 'Saudi Arabia', 'Cote D\'Ivoire', 'Botswana'],
  ['The game of Mah-Jong originated in what country?','England', 'China', 'Japan','Russia'],
 ['What nationality is celebrated on St. Patrick\'s Day?', 'Welsh', 'Mexican', 'Irish', 'American Indian'],
['What chemical is added to the water in swimming pools?', 'Vinegar', 'Ammonia','Sulphur','Chlorine'],
['Who wrote the novels that introduced the characters Hercule Poirot and Miss Jane Marple?','Ellery','Ruth Rendell', 'H. G. Wells', 'Agatha Christie'],
['What is the Italian word for a square or marketplace?','Pisa','Presto', 'Plaza', 'Piazza'],
['What is the offspring of a male lion and a female tiger called?','Liger', 'Tiglon', 'Tigon','Ligron'],
['Between which two planets are asteroids chiefly found?', 'Jupiter and Saturn', 'Mars and Jupiter','Neptune and Pluto','Saturn and Uranus'],
['How many different combinations of dots are possible in Braille?', '87' , '49' , '63', '75'],
['Which chess piece is of the lowest relative value?','Pawn', ' Bishop', 'Knight', ' Castle'],
['Which musical instrument was invented by Belgian Adolphe Sax?','Tuba','Trumpet','Saxophone','Euphonium'],
['What is the longest river in the world when NOT adding estuaries to the equation?', 'Amazon', 'Nile', 'Zambezi','Mississippi'],
['What is the capital of Canada?', 'Montreal', 'Vancouver', 'Toronto', 'Ottawa'],
['Who was the first man to step on the moon?', 'John Glenn', 'Buzz Aldrin','Neil Armstrong','Yuri Gagarin'],
['According to the Bible, what was the name of the town which was the birthplace of Jesus Christ?', 'Nazareth','Bethlehem', 'Gethsemane','Jerusalem'],
['This world 7 wonder is found in which country ?','Australia','Mauritius','Thailand','Brazil','t1.jpg'],
['What is the name of this fruit?','Litchi','Rambutan','Mangosteen','Langsat','t2.jpeg'],
['Where in the world ?','The colosseum','Pisa tower','The pantheon','Circus maximus','t3.jpg'],
['What is the chemical name of this subtance','NaCl','Na2Cl','Nacl2','Kcl','T4.jpg'],
['What is this plant know for its health benefit','Ashwagandha','Moriga','Moringa','Noni','t5.jpg'],
['Popular herd used in italian cuisine','Basilic','Oregano','Thym','Ment','t6.jpg'],
['What this popular cultural dish ?','Paella','Pailla','Couscous','Bryani','t7.jpeg'],
['What is this species of animal?','Reptile','Mammal','Amphibians','Invertebrates','t8.jpg'],
['The machu picchu is the heritaged of what civilisation ?','The egyptian','The Napas','Taoism','The mayas','t9.jpg'],
['Where is this momument located.','Abu Dhabi','Bahrain','Dubai','Saudi Arabia','t10.jpg'],
['This the flags of which country','Monaco','Indonesia','Qatar','The virgin islands','t11.jpg']

]
//arrays of answer
var answer=['B','A','D','D','D','C','B','B','C','D','D','C','A','B','C','A','C','B','D','C','B','A','B','B','A','C','B','A','A','D','C','B']
//letter to be display in front of answers
var letter = ['0','A','B','C','D']
var r = 1
var x = 1
var z = 1
var numbers=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
//generate unique random numbers from 1-30
function randomNum(){
var rand =  Math.floor(Math.random() * 30);
console.log(numbers);
function verify(){
  //will check if number was already working
  for (var s= 0; s <numbers.length; s++){
    var check1 = 0 ;
    if(numbers[s]==rand){
      check1 = s;
      //it will remove number already generated from array
       numbers.splice(s,1)
      break;
    } else{
     check1 = -1;
}
  }
    return  check1;
}

var checknum = verify();
while(checknum < 0){
 rand =  Math.floor(Math.random() * 30);
checknum = verify();
}
console.log(checknum);

  console.log(numbers);
  if(numbers.length < 16){
    window.location.href = "congrats.html";




  }
  console.log(rand);

return rand;
}

function generatequestion(num){
for ( var r=num; r < question.length; r++){
   $('#imgs').hide();
  document.getElementById('display').innerHTML = question[r][0];
    document.getElementById('display').value = answer[r];
  var tes2 =  document.getElementById('display').value;
  console.log(tes2)

  var newr = r;
for (var c = 1; c < question[r].length; c++){
  if(c<5){
      document.getElementById('quest'+c).innerHTML = letter[c] +'.'+question[r][c];
    }
    else if(c==5){
       $('#imgs').show();
         $('#imgs').attr('src',question[r][c]);
       }
    }
r = 32;
}

}
//will check the answer
function chkans(rand) {
 for (z=1; z < 5; z++){
   if(document.getElementById("rad"+z).checked){
     //if answer is correct this code will be executed
   if(document.getElementById("rad"+z).value == document.getElementById('display').value)
   {
     $('#msgalert').hide();
     var number = randomNum();
     console.log(number);
     generatequestion(number);
      timerId = setInterval(countdown, 1000);
      timeLeft = 30;
     countdown();

 } else{
   //if answer is incorrect this will be executed
  clearTimeout(timerId);
  //we are clearing the html and only display the message
  $(".erase").html("");
  $("#submit").hide();
  $("#msgalert1").show();
    $("#msgalert1 strong").html("<h1>oh no....</h1><br> <p>Wrong answer you lose  <a href='millionairegame.html'>EXIT</a> </p>");
  }

}
}
}
// this is the timer function
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);
var timeLeft = 30;
    function countdown() {

      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      }
      else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
$('#msgalert').hide();
// This the call function it will display a meesage containing the answer
$('#call').click(function call(){
$("#msgalert").show()
  $("#msgalert strong").html("<h1>hello....</h1><br> <p>The answer is C</p>")
  $('msgalert').fadeOut(1000);
 $('#call').html("");
});
//This the swap function that will swap the question for another randomly selected function
$('#swap').click(function(){
  start();
  $('#swap').html("");
});
 function start(){
   var number = randomNum();
   generatequestion(number);
   countdown();

 }
 //this it the 50/50 that will remove two fuction except the answer
$("#50").click(function(){
  var c1 = 0;
   for(var counter=1;counter<=4;counter++){
     if(document.getElementById("rad"+counter).value != document.getElementById('display').value){
       document.getElementById("quest"+counter).innerHTML = "";
       c1 ++
   }
   if(c1 == 2){
     $("#50").html("");
     break;
   }
 }
});
// this code is activated when time is up
$("#msgalert1").hide()
function doSomething(){
  $("#msgalert1").show()
  $('#submit').hide()
    $("#msgalert1 strong").html("<h1>oh no....</h1><br> <p>Timer is up  <a href='millionairegame.html'>EXIT</a></p>")
    $(".erase").html("");
}
