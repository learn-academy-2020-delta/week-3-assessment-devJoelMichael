// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge
// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags

// *********** JOEL DISCLAIMER: I didn't fully understand in what way you wanted us to comment during this challenge. I assumed that it was like if we were sudo coding to better practice maybe how we would write it but as its stated its asking more of an explination into what they purpose of it is. So I will try my best to do both :D 

// src/App.js

import React, { Component } from 'react'
// 1)
// We need to create a component called Dice and put it into our main App. When we do this we need to import it by calling to the components folder name and, if it has one, its file in that folder name.
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  constructor(props){
    super(props)
    // 2)
    // We need to add all of our state objects that we are going to be using for this project. So we will create a state object and open it to put everything we need and are using inside.
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 3)
    // We need to (we are) deconstruct the ( ) so that way it will be easier for us and cleaner code for others.
    let { rollImages, diceLog } = this.state
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    // 4)
    // We need to make sure that after we roll our dice once that we can roll it again and it will be a completely new number and roll. So we create a new variable and reset the images but continue to put the random math equazion in to keep it working properly.
    let newRoll = rollImages[randomNum]
    // 5)
    // We need to update our components state object so we will use this.setState({ what you want re rendered in side of here }) 
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        /* // 6) */
        /* We need to put our Dice Component inside of our return so that way we see everything we are doing. Make sure we put all functions we need inside of here. */
        <Dice
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default Board



// src/component/Dice.js

import React, { Component } from 'react'

class Dice extends Component{
  // 7)
  // This line renders the entire page making it visable to everyone. It speaks to the parent app and to the app as a whole. This is what is needed to update it constantly (say if someone rolls a dice and then wants to roll a new dice, it would render a new dice for them and keep everything logged).
  render(){
    // 8)
    // 
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          // 9)
          // This referes to the libary of all the pictures into it. We need to make sure that it can call a random image whenever the dice is being pulled. That way it will look through here and grab the right one.
          alt="images of dice"
          // 10)
          // We need the new image to come appear everytime someone clicks a new roll. So we set the source image to the propterty of the currentPic, which would be pulling from above. Rember to deconstruct it so that it is easier for us in the future.
          src={ currentPic }
          onClick={ roll }
        />
      </div>
    )
  }
}

export default Dice
