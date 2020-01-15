# jQuery Assignment

### Overview

use: bootstrap, jquery

This is an interactive game to click on crystals with secret values and try not to go over the secret
max number.


1.	xCreate a new GitHub repo called `unit-4-game`, then clone it to your computer.
a.	https://github.com/sstorysmith/TriviaGame.git
xchange the current working directory to the location where you want the cloned directory to be made.

Type git clone, and then paste the URL you copied in Step 2.
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY




x2. Inside the `unit-4-game` folder, create an `index.html` file.

x
### Option One: CrystalsCollector Game (Recommended)

![Crystal Collector](Images/1-CrystalCollector.jpg)

		Player.Count, Wins, Losses, photo
		Computer.count, wins, losses, photo
		
		

 * There will be four crystals displayed as buttons on the page. (value between 1 and 12)
  Make this arbitrary – user chooses # crystals
		Math.Ceil(Math.random()*12);
		Button.value, image, number of Crystals

   * The player will be shown a random number at the start of the game. (between 19 and 120)
		Function floor,  * 101 + 19
		MagicNumber

   * When the player clicks on a crystal, it (its value will be added)  will add a specific amount of points to the player's total score. 
			Player.points += button.value

     * Your game will hide this amount until the player clicks a crystal (don’t display it).
     * When they do click one, update the player's score counter.
		numberofCrystals

   * The player wins if their total score matches the random number from the beginning of the game.
		(Player.points <= magicNumber) play again
		If (player.points = magicNumber) then score win and reset
		if(Player.points > MagicNumber) or (PlayerGuesses = maxNumberGuesses)
			then score lose, reset
Document.getElementByID(“textName”) ??


   * The player loses if their score goes above the random number.
			If score < targetNumber then play 
				Else if  = targerNumber then calculateScore and resetGame
	Document.getElementByID(“textName”)
	$("#chrystal-1”).on(‘click’, function

	Game Object – wins,losses,remainingGuesses,randomNumber,targetNumber
	Buttons= value, color,size, shape, .jpg

   * The game restarts whenever the player wins or loses.
				calculateScore()
				If win
					Win=+1;
			
Else 
lose = +1;
				resetGame

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
		resetGame
		targetNumber = get RandomNumber() *19 or 120;
		button.value[] = getRandomNumber * 12;
		numberOfPlays = 0;
		
		

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
			Player.numberOfWins, player. numberOf Loses
			Player class
			Player1
			Player2
			

##### Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.
* In the images folder, save any of the images you plan on using.
•	xgit add adds your index.html to the staging area.
•	xgit commit-m” “ puts your changes into your local repo.
•	xgit push pushes your changes to your Github repo.
•	x Github pages  at https://sstorysmith.github.io/unit-4-game/
xSubmitted via Bootcamp



