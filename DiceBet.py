# THIS IS ICEEE!
# Python file name must be the app name in PascalCase!

# Name: Deepak Singh
# Date: May 24, 2023
# App name: Dice Bet
# Description: Game that player guesses the result of two dice throw

# Import the system function
from os import system
# Import the randint function from the random module 
from random import randint

# Constant - go after the imports
MIN_BET, MAX_BET = 2, 12
MIN_ROLL, MAX_ROLL = 1, 6


# Change the title
system("title Dice Bet - Deepak Singh") 

# Prompt for a bet
bet = input(f"Place a bet between {MIN_BET} and {MAX_BET}: ")

# Try to convert the bet into an integer
try:
    bet = int(bet)
    numeric = True # Able to convert
except:
    numeric = False # Unable to convert

# Error in case the bet is not numeric
# False is equals to False 
if numeric == False:
    print("Error - Bet must be numeric!")

# Error in case bet is greater than MAX_BET
# Only execute this, in case the above IF is FALSE
elif bet > MAX_BET:
    print(f"Error - Bet cannot be greater than {MAX_BET}")

elif bet < MIN_BET:
    print(f"Error - Bet cannot be less than {MIN_BET}")

# Executed when all the IF and ELIF above are FALSE
# We have a valid bet!
else:
    # Roll the dice!🎲🎲
    # Generate 2 integers from MIN
    die1 = randint(MIN_ROLL, MAX_ROLL)
    die2 = randint(MIN_ROLL, MAX_ROLL)

    # ADD the dice result
    result = die1 + die2
    
    # Clear the screen and print the dice result
    system("cls") # "clear" on mac
    print(f"Your bet: {bet}")
    print(f"Dice result: 🎲{die1} + 🎲{die2} = 🎲🎲{result}")
    
    # Check if the player wins/loses
    if result == bet:
        print("YAAH! YOU WIN! Here's your money bag ")

    # The IF is false
    else:
        print("NOOOO! YOU lost! 😱😭😧🤯")

# Exit Prompt
input("Press [enter] to exit: ")