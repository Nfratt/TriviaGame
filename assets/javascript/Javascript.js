var time =15;
var correct =0;
var incorrect =0;

function startbutton(){
    var x = document.getElementById("rules",);
    timer();
    question1();
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
// this function is given to the correct answer
  function answer1(){
    time=15;
    correct++;
    question2();
  };
  // given to the incorrect answer
  function answer2(){
    time=15;
    incorrect++;
    question2();
    // $("#game").html("<p>"+"Incorrect,The correct answer is Sauron"+"</p>")
    // setTimeout(question2,5000);
    
    
  };
  // write our question to the html
  function question1(){
     $("#game").html("<p>"+"Who created the one ring?"+"</p>"
    +"<button id ='b'onclick='answer1()'>Sauron"+ "</button>"
     +"<br>"+"<button id ='b''onclick='answer2()'>Mithrandir"+"</button>"
     +"<br>"+"<button id ='b''onclick='answer2()'>Celebrimbor"+"</button>"
     +"<br>"+"<button id ='b''onclick='answer2()'>Galadriel"+"</button>"
     ) ;
   
   //  if option A clicked 
   // correct++;
   // timer();
   // question2();
   // if else
   // incorrect--;
   // question2();
   // else 
   // incorrect--
   // question2();
   // timer()
};
function answer3(){
  time=15;
  correct++;
  question3();
};
function answer4(){
  time=15;
  incorrect++;
  question3();
};
 function question2(){ 
   $("#game").html("<p>"+"What is the race of small human like beings who inhabit the Shire?"+"</p>"
   +"<br>"+"<button id ='b'onclick='answer4()'>Elves"+ "</button>"
   +"<br>"+"<button id ='b'onclick='answer4()'>Dwarves"+"</button>"
   +"<br>"+"<button id ='b'onclick='answer3()'>Hobbits"+"</button>"
   +"<br>"+"<button id ='b'onclick='answer4()'>Goblins"+"</button>"
 
 
  ) ;
   //  if option C clicked 
   // correct++;
  // timer()
   // if (time < 1){
   // incorrect--;
   // question3();
   // timer();}
 };
 function answer5(){
  time=15;
  correct++;
  question4();
};
function answer6(){
  time=15;
  incorrect++;
  question4();
};
 function question3(){
  $("#game").html("<p>"+"In the Mines of Moria, the group Encounters a Balrog a devilish beast of epic proportion, from where does it originate?"+"</p>"+
  "<br>" +"<button id ='b'onclick='answer6()'>Moria"+ "</button>"
  +"<br>"+"<button id ='b'onclick='answer5()'>Morgoth"+"</button>"
  +"<br>"+"<button id ='b'onclick='answer6()'>Morrigan"+"</button>"
  +"<br>"+"<button id ='b'onclick='answer6()'>Mordor"+"</button>"

  ) ;  //  if option B clicked 
  // correct++;
  // timer()
  // if (time < 1){
  // incorrect--;
  // question4();
  // timer();}

 };
 function answer7(){
  time=15;
  correct++;
  question5();
};
function answer8(){
  time=15;
  incorrect++;
  question5();
};
 function question4(){
  $("#game").html("<p>"+"What is the name of the elf who leads the reinforcements to Helms Deep in the Two Towers?"+"</p>"+
  "<br>" +"<button id ='b'onclick='answer8()'>Elladan"+ "</button>"
  +"<br>"+"<button id ='b'onclick='answer8()'>Elrohir"+"</button>"
  +"<br>"+"<button id ='b'onclick='answer8()'>Legolas"+"</button>"
  +"<br>"+"<button id ='b'onclick='answer7()'>Haldir"+"</button>"
  ) ;  //  if option D  clicked 
  // correct++;
  // timer()
  // if (time < 1){
  // incorrect--;
  // question5();
  // timer();}

 };
 function answer9(){
time=99;
  correct++;
  scorescreen();
};
function answer10(){
  incorrect++;
  scorescreen();
  time=99
};
 function question5(){  
  $("#game").html("<p>"+"What is the name of the giant elephants encountered by Sam and frodo in The Two Towers? (this name is only given to them in the book)"+"</p>"+
  "<br>" +"<button id ='b'onclick='answer9()'>Oliphants"+ "</button>"
  +"<br>"+"<button id ='b'onclick='answer10()'>Haradrim"+"</button>"
  +"<br>"+"<button id ='b'onclick='answer9()'>Mumakil"+"</button>"
  +"<br>"+"<button id ='b'onclick='answer10()'>Elephantidae"+"</button>"
  ) ;//  if option C clicked 
  // correct++;
  // timer()
  // if (time < 1){
  // incorrect--;
  // scorescreen();
  // timer();}

 }
  // time will be set to 15*5=75: set it to two mins  or 120 
  function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				usertimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

 function usertimeout1(){
   $("#content").html("<h1>"+"you ran out of time(reload by clicking on the Trivia Game above)"+"</h1>"+'<br>')
  //  setTimeout(,10000);
   $('#content').append("<h1>"+"correct:"+correct)+"</h1>";
   $('#content').append("<h1>"+"incorrect: "+incorrect+"</h1>");}

  function usertimeout2(){
    $("#content").html("<h1>"+"you ran out of time(reload by clicking on the Trivia Game above)"+"</h1>"+'<br>')
   //  setTimeout(,10000);
    $('#content').append("<h1>"+"correct:"+correct)+"</h1>";
    $('#content').append("<h1>"+"incorrect: "+incorrect+"</h1>");}

  function usertimeout3(){
      $("#content").html("<h1>"+"you ran out of time(reload by clicking on the Trivia Game above)"+"</h1>"+'<br>')
     //  setTimeout(,10000);
      $('#content').append("<h1>"+"correct:"+correct)+"</h1>";
      $('#content').append("<h1>"+"incorrect: "+incorrect+"</h1>");}

  function usertimeout4(){
        $("#content").html("<h1>"+"you ran out of time(reload by clicking on the Trivia Game above)"+"</h1>"+'<br>')
       //  setTimeout(,10000);
        $('#content').append("<h1>"+"correct:"+correct)+"</h1>";
        $('#content').append("<h1>"+"incorrect: "+incorrect+"</h1>");}

  function usertimeout(){
          $("#game").html("<h1>"+"you ran out of time(reload by clicking on the Trivia Game above)"+"</h1>"+'<br>')
         //  setTimeout(,10000);
          $('#scorecard').append("<h1>"+"correct:"+correct)+"</h1>";
          $('#scorecard').append("<h1>"+"incorrect: "+incorrect+"</h1>");}

 function scorescreen(){
  $("#game").html("<h1>"+"Hope you enjoyed your journy to Middle earth"+"</h1>"+'<br>')
 //  setTimeout(,10000);
  $('#game').append("<h1>"+"correct: "+correct)+"</h1>";
  $('#game').append("<h1>"+"incorrect: "+incorrect+"</h1>");

}