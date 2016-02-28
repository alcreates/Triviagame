var triviaGame = {
	newGame: function () {
			right = 0
			wrong = 0
			this.startButton();

	},

	slides : [["What's the closest planet to the sun?","earth", "moon", "jupiter","mercury", "mercury"],["What's your name?", "alvaro", "doug", "charlie", "sean", "alvaro"],["what's your favorit animal?", "cats","dogs", "birds", "fish","dogs"],["What's your favorite game", "tetris","Uno","checkers","poker","checkers"] ]
	,

	display: function(){

		$("#main").append("<div id='display'></div>");

	},

	startButton: function() {

		$("#button").click(function(){

			$('#button').remove();
			triviaGame.display();
			triviaGame.slideLoop();
		});


	},
	slideLoop : function(){
		// iterates through slides
		for (var i = 0; i < triviaGame.slides.length; i++) {

			//iterates through contnent in each slide and displays and attaches listners 
			for (var a = 0; a < triviaGame.slides[i].length; a++) {
				//timer

				answer = triviaGame.slides[i][5]
				currentItem = triviaGame.slides[i][a]
				if(a == 0){
					$("#display").append("<div id='question'>" + currentItem + "</div>");
					
				}
				else if( a > 0 && a < 5){
					$("#display").append("<div class='choices' id='choices" +[a] + "'>" + currentItem + "</div>");
					$(".choices").click(function(){
							if  ($(this)[0].id == answer){
								alert("winner!")

							}else{
								alert('loser!')
							}


					});	

				}
			



			}
		

		}



	}
	




};

$(document).ready(function(){
	triviaGame.newGame()

});