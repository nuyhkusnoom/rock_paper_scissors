# rock_paper_scissors

LIVE DEMO: (to be inserted)

Play against an AI that learns as you play! The computer's selection is an aggregate vote of a population of 100 neural networks. The neural networks have a very simple architecture of 2 hidden layers and 20 nodes in each layer. At the end of each round, the population is ranked by a fitness function (scored by having the correct confidence level for the player's selection), and half the population survives and procreates (creates a mutated clone of itself, no crossover). All parameters can be changed in the parameters.js file.

Based on my testing, this AI can learn basic patterns after 20-ish generations. For example, if your strategy is to play the hand that would win against the computer's previous choice, this AI can pick up on it. It can also learn that you go through a specific order (paper, scissor, rock) on repeat. On page reload, all training starts from scratch, and at this point the AI will tend to be very predictable, usually only playing one hand until it learns some patterns, usually playing the same hand at least twice in a row. It's far from a competitive AI, but all in all, not bad for a bot that has no memory.

This was my first project made on The Odin Project. I skipped through most of the early projects because I felt like they were too basic, and instead I put a lot of those concepts that those projects try to teach into this one. At the end of this, I learned how to use modules, how to make "pages," and had a lot of practice with logic and keeping track of variables. I had good practice with arrays and array methods since I used a lot of it for the neural networks.

OLD STUFF:

This will be my first major project on The Odin Project. Ultimately, I want the user to be able to play rock-paper-scissors with an AI bot that will learn patterns from the user's playstyle. There will be a UI for the player to select and confirm their choice, and a scorekeeper that will show wins/losses and other relevant statistics.

Not sure what's the best way to keep track of progress, so I'm just going to go with a checklist of things that I need done, then a section below that with entry points of updates. inb4 scope creep.

TO-DO:

<ul>
<li> [X] Basic Rock Paper Scissors logic </li>
<li> [X] UI: selection buttons for the player </li>
<li> [X] UI: win/loss tracker </li>
<li> [X] UI: reset button that will reset the current tally of points (AI remains same) </li>
<li> [X] Navigation Bar </li>
<li> [X] UI: reset button that will reset the training of the AI </li>
<li> [X] AI training algorithm (DNN model reinforcement learning) </li>
<li> [X] Dark Mode </li>
</ul>

UPDATE: August 5, 2022
I was able to implement the training algorithm quicker than I thought. Tested out the bot. It can detect simple patterns like "only plays rock/paper/scissor" or "only plays what would win against the hand just played." Overall, I think it's a success for how limited the architecture is. I think I could have better results if I switch up how the inputs are encoded, so I think I'll test out and see if that's any better. EDIT - Changing up the input format seems to have made a slight improvement. It can learn the basic patterns quicker now. Now to implement Dark Mode, and I'm done with this project. EDIT - Everything is complete. I just need to figure out how to set it up on github pages. Right now it only shows the README.md. Why is this so complicated.

UPDATE: August 4, 2022
I was able to do a ton of work. I was too focused and forgot to update in between, and didn't commit as often as I probably should have. I got the prediction system to work (neural nets make individual predictions and the aggregate prediction is what the computer will select). I was also able to set up the UI and displays for informations for each neural network in the population. Now all I have to add is the training algorithm and it should be complete!

UPDATE: August 3, 2022
I am getting the hang of modules now. At first I was super confused trying to keep track of everything and having no idea where variables are stored, but now I think I have a decent understanding. I re-did all the UI and now I can re-implement the game logic. EDIT - I got all the basic game logic done, so all I have left is to implement the AI training section. I'm very comfortable using modules now, and I can see why it's standard practice. EDIT2 - Got a lot of work done today. Everything looks promising. I think the architecture will be a simple DNN. The "proper" way to do this might be to use an LSTM model, but I think that's a bit too much. Actually, it's already too much, but I'll finish what I've started.

UPDATE: August 2, 2022
I think I know enough of webpack to at least make modules and stuff, so I will continue with this project. Hopefully nothing breaks.
EDIT - I got webpack set up. I want to set up a nav bar to switch between playing the game and observing the neural networks.

UPDATE: July 31, 2022
Finished the scope of this project that The Odin Project assigns (an app that lets you play RPS against a random selection bot that tracks scores). From here I need to spend some time learning modules and all that stuff properly so I can organize files and not have all the functions be on one script. Progress was faster than expected. Going to move on to other projects first, then I will revisit this to implement the Deep Learning algorithm.

UPDATE: July 28, 2022
Set up basic stuff, put my head down, and get started building.
Finished basic logic. I want to work on the more visual UI things first before in order to get a good feel for how I want to proceed.
I should organize the files and make a lot of helper functions, lest it get too disorderly.