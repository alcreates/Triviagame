var right = 0;
var wrong = 0 ;
var slideNumber = 0; 
var secondsLeft = 0;
var timer = $.timer(function(){
	triviaGame.timerCount();
});







var triviaGame = {
	newGame: function () {
			slideNumber = 0 
			right = 0
			wrong = 0
			secondsLeft = 20
			
			this.startButton();

	},

	slides : [["What's the closest planet to the sun?","earth", "moon", "jupiter","mercury", "mercury"],["What's your name?", "alvaro", "doug", "charlie", "sean", "alvaro"],["what's your favorit animal?", "cats","dogs", "birds", "fish","dogs"],["What's your favorite game", "tetris","Uno","checkers","poker","checkers"] ]
	,
	currentChoices: []
	,

	display: function(){

		$("#main").append("<div id='timer'></div>");
		$("#main").append("<div class='panel panel-default' id='displayPanel'><div class='panel-body' ></div></div>");
		timer.set({time: 1000, autostart: true})

		
	},

	startButton: function() {

		$("#button").click(function(){

			
			$('#button').remove();
			triviaGame.display();
			triviaGame.displayQuestion();
			

	
		
		});


	},
	restartGame: function(){

		$("#button2").click(function(){

			right = 0;
			wrong = 0 ;
 			slideNumber = 0; 
 			secondsLeft = 20;
 			$("#button2").remove();
 			$('#displayPanel').remove();
 			$('#timer').remove();
 			triviaGame.display(); 
 			triviaGame.displayQuestion();




		});


	},
	
	displayQuestion: function(){
			
		
		for (var i = 0; i < triviaGame.slides[slideNumber].length; i++) {
			 answer = triviaGame.slides[slideNumber][5]
			  
			 
			 if (i == 0){
			 	$("#displayPanel").append("<div id='question'>" + triviaGame.slides[slideNumber][i] + "</div>")
			 }
			 else if( i > 0 && i < 5){

			 	$("#displayPanel").append("<div class='choices' id='choice" + [i] +"'>" + triviaGame.slides[slideNumber][i]+ "</div>");
			 	$("#choice" + [i]).click(function(){
									 		
			 		if ($(this).text() == answer){
			 			
			 			right += 1
			 			
			 			triviaGame.nextQuestion();
			 		}
			 		else{
			 			
			 			wrong += 1
			 			
			 			triviaGame.nextQuestion();
			 		}

			 		
			 	});
			 	$("#choice" + [i]).hover(function(){

			 		$(this).fadeOut(100);
			 		$(this).fadeIn(500);
			 	});

			 }
		
			
		}	

		
	
	},
	nextQuestion: function(){
		if (slideNumber  < triviaGame.slides.length - 1){
			$("#timer").empty();
			$("#displayPanel").empty();
			slideNumber += 1
			secondsLeft = 20
			this.displayQuestion();
		}else{
			
			$('#displayPanel').html("<div class='panel panel-default' id='gameOver'><div class='panel-body'>gameOver</div></div>");
			$('#gameOver').append("<div id='wins'>" + 'correct answers : ' + right + "</div>");
			$('#gameOver').append("<div id='loses'>" + 'wrong answers : ' + wrong + "</div>");
			$('#gameOver').append("<button type='button' id='button2' class='btn btn-default' > <p>start</p></button>");
			this.restartGame();

		}
	
		
		

	},
	timerCount: function(){
		
	
		if (secondsLeft> 0){
			$('#timer').html(secondsLeft);
			secondsLeft -= 1

		}else {
			alert("time out")
			triviaGame.nextQuestion
		}

		

	}




};

$(document).ready(function(){
	triviaGame.newGame()

});
		
	
