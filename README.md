# rock_paper_scissors

This will be my first major project on The Odin Project. Ultimately, I want the user to be able to play rock-paper-scissors with an AI bot that will learn patterns from the user's playstyle. There will be a UI for the player to select and confirm their choice, and a scorekeeper that will show wins/losses and other relevant statistics.

Not sure what's the best way to keep track of progress, so I'm just going to go with a checklist of things that I need done, then a section below that with entry points of updates. inb4 scope creep.

TO-DO:

<ul>
<li> [X] Basic Rock Paper Scissors logic </li>
<li> [X] UI: selection buttons for the player </li>
<li> [X] UI: win/loss tracker </li>
<li> [X] UI: reset button that will reset the current tally of points (AI remains same) </li>
<li> [X] Navigation Bar </li>
<li> [ ] UI: reset button that will reset the training of the AI </li>
<li> [ ] AI training algorithm (DNN model reinforcement learning) </li>
<li> [ ] Dark Mode </li>
</ul>

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