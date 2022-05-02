## Project

## ProjectOverview

Nibbler Bytes was born out of a documentary I had seen about the arcade game of a similar name.
When I learned of the firs SEI project to make a grid based game with vanilla JavaScript this is what initally sprang to mind. This project was the first time to apply everything I had learned in the opening few weeks of the SEI course.

### Duration:

7days

### Technologies Used

HTML, CSS, JavaScript.

## The Brief

The brief was to create a grid-based game using only JavaScript, CSS, and HTML.

requisite feature specifically for a snake game wer as follows:

*The snake should grow when it eats a piece of food
*The snake should speed up when it eats a pice of food

## Initial Steps

I initially created sketches using Excalidraw, which is shown below. I also started pseudocoding the steps needed to make an MVP which in my mind was a moving snake in a grid.

![](assets/NibblerBytes.png)

## Day 2

Got a Little stuck making the snake appear in the grid. Realised I´d need to give it class in CSS with a background colour different to the grid div. After I had got the snake on the board, I then wrote down the event listener and some of the logic for the keypresses. I became stuck when I wanted to pass the logic into a new function to get the snake to move.

## Day 3

I came back to the game on Sunday and tried to research how to make the snake animate. I researched online but people were using canvas and I could not find any useful information from coders using vanilla JavaScript. My intergalactic, reptilian alien was moribund with little hope of being revived that day. After hours staring into the abyss of my monitor, I did some styling and added some useful images to my assets folder before knocking it on the head for the day.

## Day 4

After talking with a fellow SEI student and seeing her code for a completely different game, it became apparent I had certainly missed a trick in not setting an event listener to render new images and give the appearance of movement. Next came moving the snake, after erroneously abandoning my earlier whiteboarding and pseudo coding of using array.push and array.unshift to move the snake, I took a different route. This resulted in a snake which was fragmented and moving in very curious ways which certainly did not depict any snake I had ever seen. After some help from my tutor, I finally had a functioning snake, capable of moving in two dimensions.

## Day 5

My goals for the day were getting random food to generate in the grid and for the snake to eat the food. I realised I’d have to use a while loop to get the food to only generate in grid cells not already occupied by the snake. Progress was painstakingly slow and nothing seemed to appear in the grid cells. After having a second pair of eyes look at the code with me it became apparent that the problem was in fact down to a missing point in my CSS class for the food. This was stopping my querySelector fetching the CSS class. I would consider productivity poor this day partially caused by a missing dot!! I finished for the day when I couldn’t get my snake to eat.

## Day 6

Day 6 was much better after having an Epiphone for why the snake wouldn’t eat I jumped back at my code and tried something different to move the food class when the snake was occupying the same grid cell. After returning the generate random food function within my eatFood function I had a self-sustaining food system. I also got the snake growing one segment at a time before tackling the next big obstacle, building the internal walls of my maze. I knew this could be done with a border class however I needed help to get the wheels in motion. With some expert help from my dear tutor, I had the bare bones of what I needed to build the maze. I planned out some of the starting coordinates on a piece of paper, however I quickly got stuck into making it reality. The process was long and laborious but I really quite enjoyed it. I learned a lot about modulus in the process.

## Day 7

Progress slowed on the final day but I got a function working which would speed up the snake as it ate and a scoreboard which updated as it ate food. I addition to this I added some extra features such as a start game button, an additional food powerup which was a hamburger that provided additional points without speeding the snake up and also some improved styling. I wanted to add some game over and start screens but encountered a couple of bugs. The bugs were related to the Collision function and as of yet hasn’t been fixed.

# Nibbler-Bytes

The Nibbler is an intergalactic reptilian alien with an insatiable appetite. He likes a varied diet but has found a particular taste for pizza and hamburgers since his arrival on Earth.

Instructions

Clear the maze by eating the food

DO NOT let Nibbler bite itself!

Nibbler does not stop at corners

Nibbler grows longer when it eats
