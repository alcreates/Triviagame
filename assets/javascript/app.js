var triviaGame = {
	newGame: function () {
			right = 0
			wrong = 0
			this.startButton();

	},

	slides : [[],[],[],[] ]
	,

	display: function(){

		$("#main").append("<div id='display'></div>");

	},

	startButton: function() {

		$("#button").click(function(){

			$('#button').remove();
			triviaGame.display();

		});


	}
	




};

$(document).ready(function(){
	triviaGame.newGame()

});