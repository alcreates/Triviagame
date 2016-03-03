var right = 0;
var wrong = 0 ;
var slideNumber = 0; 
var secondsLeft = 0;
var timer = $.timer(function(){
	triviaGame.timerCount();
});

var winTimer = $.timer(function(){
	triviaGame.nextQuestion();
	winTimer.stop()
});







var triviaGame = {
	newGame: function () {
			slideNumber = 0 
			right = 0
			wrong = 0
			secondsLeft = 20
			
			this.startButton();

	},

	slides : [["What's the closest planet to the sun?","earth", "moon", "jupiter","mercury", "mercury"],["What is the name of the 2nd biggest planet in our solar system?", "earth", "pluto", "sun", "saturn", "saturn"],["what is the hottest planet in our solar system?", "venus","mercury", "mars", "sun","venus"],["What planet is famous for its big red spot on it?", "mars","milky way","jupiter","moon","jupiter"],["what planet is famous for its beautiful rings sorrounding it?","saturn","jupiter","mars","earth","saturn"],["Who ws the first person to walk on the moon?", "lance armstrong","bill belhamy","john dourghety","neil armstrong","neil armstrong"],["what planet is known as the red planet?","the sun","the moon","mars","jupiter",'mars'],["what is the name of the force holding us to the earth?",'jedi force','g-force','gravity','i dont know','gravity' ],["Earth is located in which galaxy?", "the snickers", "the hershy","the milky way","I don't know","the milky way"],["What is the name of the first satelite sent into space?","the alvaro", "hubble space telescope","milky telescope","gergoscope","hubble space telescope"],["Ganymede is a moon of which planet?","earth","mars","jupiter","saturn","jupiter"],["What is the name of saturn's largest moon?",'titan','alvaro','heman','torus','titan'],["Olympus Mons is a large volcanic mountain on which planet?", "earth", "mars","jupiter","saturn","mars"] ]
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
			 			$("#displayPanel").html("<div id='rightAnswer'>you are correct!</div>");
			 			winTimer.set({time:1000, autostart: true});
			 			
			 		}
			 		else{
			 			
			 			wrong += 1
			 			
			 			$("#displayPanel").html("<div id='wrongAnswer'>wrong... </div>");
			 			winTimer.set({time:1000, autostart: true});
			 		}

			 		
			 	});
			 	$("#choice" + [i]).hover(function(){

			 		$(this).css("font-family", "Troika");
			 	},function(){
			 		$(this).css("font-family", "Georgia, serif")

			 	}
			 	
			 	);

			 }
		
			
		}	

		
	
	},
	nextQuestion: function(){
		timer.play();
		if (slideNumber  < triviaGame.slides.length - 1){
			$("#timer").empty();
			$("#displayPanel").empty();
			slideNumber += 1
			secondsLeft = 20
			this.displayQuestion();
		}else{
			timer.stop();
			$('#displayPanel').html("<div class='panel panel-default' id='gameOver'><div class='panel-body'>gameOver</div></div>");
			$('#gameOver').append("<div id='wins'>" + 'correct answers : ' + right + "</div>");
			$('#gameOver').append("<div id='loses'>" + 'wrong answers : ' + wrong + "</div>");
			$('#gameOver').append("<button type='button' id='button2' class='btn btn-default' > <p>Try Again!</p></button>");
			this.restartGame();

		}
	
		
		

	},
	timerCount: function(){
		
	
		if (secondsLeft> 0){
			$('#timer').html(secondsLeft);
			secondsLeft -= 1

		}else {
			alert("time out");
			wrong += 1
			this.nextQuestion();
		}

		

	}




};

$(document).ready(function(){
	triviaGame.newGame()

});
		
	
