var time = 2;
var correct = 0;
var incorrect = 0;
var isGameStarted = false;
var usertimeoutnum=1
document.ready
function startbutton() {
  if (isGameStarted) {
    return;
  }

  isGameStarted = true;
  var x = document.getElementById("rules");
  timer();
  question1();
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// this function is given to the correct answer
function answer1() {
  
  correct++;
  correct1()
  usertimeoutnum++;
};
// given to the incorrect answer  dont use time as a global variable reinnitalize the timer 
function answer2() {
  
  incorrect++;
  incorrecta1()
  usertimeoutnum++;
}

function correct1() {
  $('#game').html("<p>" + "Sauron! That is correct!" + "</p>")
  setTimeout(question2, 4000);
}

function correct2() {
  $('#game').html("<p>" + "Hobbits! That is correct!" + "</p>")
  setTimeout(question3, 4000);
}

function correct3() {
  $('#game').html("<p>" + "Morgoth! That is correct!" + "</p>")
  setTimeout(question4, 4000);
}

function correct4() {
  $('#game').html("<p>" + "Haldir!That is correct!" + "</p>")
  setTimeout(question5, 4000);
}
// go back and set divs for the questions to make this one function
function correct5() {
  $('#game').html("<p>" + "Mumakil! That is correct!" + "</p>")
  setTimeout(scorescreen, 4000);
}
function incorrecta1() {
  $("#game").html("<p>" + "That is incorrect the correct answer is " + 'Sauron' + "</p>")
  setTimeout(question2, 4000);
};
function incorrecta2() {
  $("#game").html("<p>" + "That is incorrect the correct answer is " + 'Hobbits' + "</p>")
  setTimeout(question3, 4000);
};function incorrecta3() {
  $("#game").html("<p>" + "That is incorrect the correct answer is " + 'Morgoth' + "</p>")
  setTimeout(question4, 4000);
};function incorrecta4() {
  $("#game").html("<p>" + "That is incorrect the correct answer is " + 'Haldir' + "</p>")
  setTimeout(question5, 4000);
};function incorrecta5() {
  $("#game").html("<p>" + "That is incorrect the correct answer is " + 'Mumakil' + "</p>")
  setTimeout(scorescreen, 4000);
};
// make these smaller in order to not have as many functions 

// write our question to the html

function question1() {
  time=20

  $("#game").html("<p>Who created the one ring?</p>");

  var button1 = $("<button id ='b'>");
  button1.text("Sauron");
  button1.on("click", answer1);
  $("#game").append(button1);

  var button2 = $("<button id ='b'>");
  button2.text("Mithrandir");
  button2.on("click", answer2);
  $("#game").append(button2);
  
  var button3 = $("<button id ='b'>");
  button3.text("celebrimbor");
  button3.on("click", answer2);
  $("#game").append(button3);

  var button4 = $("<button id ='b'>");
  button4.text("Galadriel");
  button4.on("click", answer2);
  $("#game").append(button4);

// make all questions like this(better format)
  

  // +"<button id ='b'onclick='answer1()'>Sauron" + "</button>"
  //   + "<br>" + "<button id ='b' onclick='answer2()'>Mithrandir" + "</button>"
  //   + "<br>" + "<button id ='b' onclick='answer2()'>Celebrimbor" + "</button>"
  //   + "<br>" + "<button id ='b' onclick='answer2()'>Galadriel" + "</button>"


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
}
function answer3() {
  
  correct++;
  correct2();
  usertimeoutnum++;
};
function answer4() {
  
  incorrect++;
  incorrecta2();
  usertimeoutnum++;
};
function question2() {
  time=20

    $("#game").html("<p>What is the race of small human like beings who inhabit The Shire?</p>");
  
    var button1 = $("<button id ='b'>");
    button1.text("Elves");
    button1.on("click", answer4);
    $("#game").append(button1);
  
    var button2 = $("<button id ='b'>");
    button2.text("Dwarves");
    button2.on("click", answer4);
    $("#game").append(button2);
    
    var button3 = $("<button id ='b'>");
    button3.text("Hobbits");
    button3.on("click", answer3);
    $("#game").append(button3);
  
    var button4 = $("<button id ='b'>");
    button4.text("Goblins");
    button4.on("click", answer4);
    $("#game").append(button4);

  // time = 15;
  // $("#game").html("<p>" + "What is the race of small human like beings who inhabit the Shire?" + "</p>"
  //   + "<br>" + "<button id ='b'onclick='answer4()'>Elves" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer4()'>Dwarves" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer3()'>Hobbits" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer4()'>Goblins" + "</button>"




  //  if option C clicked 
  // correct++;
  // timer()
  // if (time < 1){
  // incorrect--;
  // question3();
  // timer();}
};
function answer5() {
  
  correct++;
  correct3();
  usertimeoutnum++;
};
function answer6() {
  
  incorrect++;
  incorrecta3();
  usertimeoutnum++;
};
function question3() {
  time=20

  $("#game").html("<p>In the Mines of Moria, the group Encounters a Balrog a devilish beast of epic proportion, from where does it originate?</p>");
  
  var button1 = $("<button id ='b'>");
  button1.text("Moria");
  button1.on("click", answer6);
  $("#game").append(button1);

  var button2 = $("<button id ='b'>");
  button2.text("Morgoth");
  button2.on("click", answer5);
  $("#game").append(button2);
  
  var button3 = $("<button id ='b'>");
  button3.text("Morrigan");
  button3.on("click", answer6);
  $("#game").append(button3);

  var button4 = $("<button id ='b'>");
  button4.text("Mordor");
  button4.on("click", answer6);
  $("#game").append(button4);
  // $("#game").html("<p>" + "In the Mines of Moria, the group Encounters a Balrog a devilish beast of epic proportion, from where does it originate?" + "</p>" +
  //   "<br>" + "<button id ='b'onclick='answer6()'>Moria" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer5()'>Morgoth" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer6()'>Morrigan" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer6()'>Mordor" + "</button>"

  // );  //  if option B clicked 
  // correct++;
  // timer()
  // if (time < 1){
  // incorrect--;
  // question4();
  // timer();}

};
function answer7() {
  
  correct++;
  correct4();
  usertimeoutnum++
};
function answer8() {
  
  incorrect++;
  incorrecta4();
  usertimeoutnum++
};
function question4() {
  time=20

  $("#game").html("<p>What is the name of the elf who leads the reinforcements to Helms Deep in the Two Towers?</p>");
  
  var button1 = $("<button id ='b'>");
  button1.text("Elladan");
  button1.on("click", answer8);
  $("#game").append(button1);

  var button2 = $("<button id ='b'>");
  button2.text("Elrohir");
  button2.on("click", answer8);
  $("#game").append(button2);
  
  var button3 = $("<button id ='b'>");
  button3.text("Legolas");
  button3.on("click", answer8);
  $("#game").append(button3);

  var button4 = $("<button id ='b'>");
  button4.text("Haldir");
  button4.on("click", answer7);
  $("#game").append(button4);
  // $("#game").html("<p>" + "What is the name of the elf who leads the reinforcements to Helms Deep in the Two Towers?" + "</p>" +
  //   "<br>" + "<button id ='b'onclick='answer8()'>Elladan" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer8()'>Elrohir" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer8()'>Legolas" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer7()'>Haldir" + "</button>"
  // );  //  if option D  clicked 
  // correct++;
  // timer()
  // if (time < 1){
  // incorrect--;
  // question5();
  // timer();}

};
function answer9() {
  time = 99;
  correct++;
  correct5();
  
};
function answer10() {
  incorrect++;
  incorrecta5();
  time = 99;
  
};
function question5() {
 
  $("#game").html("<p>What is the name of the giant elephants encountered by Sam and frodo in The Two Towers? (this name is only given to them in the book)</p>");
  
  var button1 = $("<button id ='b'>");
  button1.text("Oliphants");
  button1.on("click", answer10);
  $("#game").append(button1);

  var button2 = $("<button id ='b'>");
  button2.text("Haradrim");
  button2.on("click", answer10);
  $("#game").append(button2);
  
  var button3 = $("<button id ='b'>");
  button3.text("Mumakil");
  button3.on("click", answer9);
  $("#game").append(button3);

  var button4 = $("<button id ='b'>");
  button4.text("Elephantidae");
  button4.on("click", answer10);
  $("#game").append(button4);

  // $("#game").html("<p>" + "What is the name of the giant elephants encountered by Sam and frodo in The Two Towers? (this name is only given to them in the book)" + "</p>" +
  //   "<br>" + "<button id ='b'onclick='answer9()'>Oliphants" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer10()'>Haradrim" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer9()'>Mumakil" + "</button>"
  //   + "<br>" + "<button id ='b'onclick='answer10()'>Elephantidae" + "</button>"
  // );
  //  if option C clicked 
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
      // clearInterval(clock);
      if (usertimeoutnum ==1){
        usertimeout1();
      };
      if (usertimeoutnum ==2){
        usertimeout2();
      };if (usertimeoutnum ==3){
        usertimeout3();
      };if (usertimeoutnum ==4){
        usertimeout4();
      };if (usertimeoutnum ==5){
        usertimeout5();
      };
    }
    if (time > 0) {
      time--;
    }
    $("#timer").html("<strong>" + time + "</strong>");
  }
}



function usertimeout1() {
  $("#game").html(incorrecta1)
  setTimeout(question2,3000);
 incorrect++;
}
function usertimeout2() {
  $("#game").html(incorrecta2)
  setTimeout(question3,3000);
  incorrect++;


}
function usertimeout3() {
  $("#game").html(incorrecta3)
  setTimeout(question4,3000);
  incorrect++;
 
}
function usertimeout4() {
  $("#game").html(incorrecta4)
  setTimeout(question5,3000);
  incorrect++;

}
function usertimeout5() {
  $("#game").html(incorrecta5)
  setTimeout(scorescreen,3000);
  incorrect++;
  return
}

function scorescreen() {
  $("#game").html("<p id='end'>" + "Hope you enjoyed your journey to Middle earth! Did you get them all? hit Trivia Game to play again!" + "</p>" + '<br>')
  //  setTimeout(,10000);
  $('#game').append("<p id 'end'>" + "correct: " + correct) + "</p>";
  $('#game').append("<p id 'end'>" + "incorrect: " + incorrect + "</p>");

}
// later add images for more fun