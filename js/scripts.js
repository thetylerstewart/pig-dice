function PlayerOne() {
  this.score = 0;
}

PlayerOne.prototype.diceRoll = function () {
  let roll = Math.floor(Math.random() * 6) + 1
  if (roll === 1) {
    this.score = 0
    $('#player-one').hide()
    $('#player-two').show()
  } else {
    this.score += roll
    return this.score
  }
}


function PlayerTwo() {
  this.score = 0;
}

PlayerTwo.prototype.diceRoll = function () {
  let roll = Math.floor(Math.random() * 6) + 1
  if (roll === 1) {
    this.score = 0
    $('#player-two').hide()
    $('#player-one').show()

  } else {
    this.score += roll
    return this.score
  }
}






//User Interface
let newPlayerOne = new PlayerOne()
let newPlayerTwo = new PlayerTwo()

$(document).ready(function () {

  // ------ PLAYER ONE --------
  $('#player-one-roll').click(function (event) {
    event.preventDefault()
    newPlayerOne.diceRoll()
    $('.player-one-score').html(newPlayerOne.score)
  })

  $('#player-one-hold').click(function (event) {
    event.preventDefault()
    $('#player-one').hide()
    $('#player-two').show()
  })



  // ------ PLAYER TWO -------

  $('#player-two-roll').click(function (event) {
    event.preventDefault()
    newPlayerTwo.diceRoll()
    $('.player-two-score').html(newPlayerTwo.score)
  })

  $('#player-two-hold').click(function (event) {
    event.preventDefault()
    $('#player-two').hide()
    $('#player-one').show()
  })

})