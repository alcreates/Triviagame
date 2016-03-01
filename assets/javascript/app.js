var right = 0;
var wrong = 0 ;
var slideNumber = 0; 









var triviaGame = {
	newGame: function () {
			slideNumber = 0 
			right = 0
			wrong = 0
			this.startButton();

	},

	slides : [["What's the closest planet to the sun?","earth", "moon", "jupiter","mercury", "mercury"],["What's your name?", "alvaro", "doug", "charlie", "sean", "alvaro"],["what's your favorit animal?", "cats","dogs", "birds", "fish","dogs"],["What's your favorite game", "tetris","Uno","checkers","poker","checkers"] ]
	,
	currentChoices: []
	,

	display: function(){

		$("#main").append("<div id='display'></div>");

	},

	startButton: function() {

		$("#button").click(function(){

			$('#button').remove();
			triviaGame.display();
			triviaGame.displayQuestion();
			
		
		});


	},
	
	displayQuestion: function(){

		for (var i = 0; i < triviaGame.slides[slideNumber].length; i++) {
			 answer = triviaGame.slides[slideNumber][5]
			  
			 
			 if (i == 0){
			 	$("#display").append("<div id='question'>" + triviaGame.slides[slideNumber][i] + "</div>")
			 }
			 else if( i > 0 && i < 5){

			 	$("#display").append("<div class='choices' id='choice" + [i] +"'>" + triviaGame.slides[slideNumber][i]+ "</div>");
			 	$("#choice" + [i]).click(function(){
									 		
			 		if ($(this).text() == answer){
			 			alert("you win!")
			 		}
			 		else{
			 			alert("you lose")
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

		slideNumber += 1
		displayQuestion()

	}



};

$(document).ready(function(){
	triviaGame.newGame()

});
		
	