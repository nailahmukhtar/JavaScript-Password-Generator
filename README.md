# JavaScript-Password-Generator
An exercise in using intermediate javascript to create a password generator that takes user input.

## Description

### Purpose
The purpose of this project was to further my understanding of javascript, using intermediate concepts such as objects, methods and functions, combining these with the foundational elements of the language to create a password generator.

The task was to: 

When the 'Generate Password' button was clicked
- Present a series of prompts for password criteria to be completed by the user.
	- Length of password
	- At least 10 characters but no more than 64.
    - The user had to select at least one character type from the following, validating the code if nothing was selected.
		- [x] Lowercase
		- [x] Uppercase
		- [x] Numeric
		- [x] Special characters ($@%&*, etc)

 - Once all the prompts were answered true or false, the password should be generated and written to the page
    
    - My Learnings
        -  Where I struggled was trying to populate the password in sequential order based on a users decisions, i.e - if they chose lower and uppercase, to create a password that alternated from one to the other sequentially until password length was achieved. 
         - After a lot of googling and some trial and error, I decided the best approach was to track when a chosen character type had been printed, and at the end of each loop, check if this met the total number of character selections made by the user during the prompts. If not, keep going, if so, reset and start from the begining. 
         - This may not be the most efficient or best way of doing this but it worked well in the scenario and given my knowldege to date. 



[Project Website](https://nailahmukhtar.github.io/Javascript-Password-Generator).

## Usage
To view this in action, you can navigate to my [Project Website](https://nailahmukhtar.github.io/Javascript-Password-Generator)

![project website screenshot](./assets/images/05-javascript-challenge-demo.png)


## Credits
Assignment provided by © 2022 edX Boot Camps LLC

## License
Not Applicable.
