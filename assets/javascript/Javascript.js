var time =3;
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
 
   function question1(){
     $("#game").html("<p>"+"Who created the one ring?"+"</p>"+"<br>"+"<button id ='a'>Sauron"+
     "</button>"+"<br>"+"<button id ='b'>Mithrandir"+
     "</button>"+"<br>"+"<button id ='c'>Celebrimbor"+
     "</button>"+"<br>"+"<button id ='d'>Galadriel"+"</button>"
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
 function question2(){
  //  if option C clicked 
  // correct++;
  // timer()
  // if (time < 1){
  // incorrect--;
  // question3();
  // timer();}
 };

 function question3(){  //  if option B clicked 
  // correct++;
  // timer()
  // if (time < 1){
  // incorrect--;
  // question4();
  // timer();}

 };
 function question4(){  //  if option D  clicked 
  // correct++;
  // timer()
  // if (time < 1){
  // incorrect--;
  // question5();
  // timer();}

 };
 function question5(){  //  if option C clicked 
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
          $("#content").html("<h1>"+"you ran out of time(reload by clicking on the Trivia Game above)"+"</h1>"+'<br>')
         //  setTimeout(,10000);
          $('#content').append("<h1>"+"correct:"+correct)+"</h1>";
          $('#content').append("<h1>"+"incorrect: "+incorrect+"</h1>");}

 function scorescreen(){
  $("#content").html("<h1>"+"Did you enjoy your journy to Middle earth?"+"</h1>"+'<br>')
 //  setTimeout(,10000);
  $('#content').append("<h1>"+"correct:"+correct)+"</h1>";
  $('#content').append("<h1>"+"incorrect: "+incorrect+"</h1>");

}