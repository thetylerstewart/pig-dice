function PlayerOne() {
  this.score = 0;
}

PlayerOne.prototype.diceRoll = function () {
  $('#one').hide()
  $('#two').hide()
  $('#three').hide()
  $('#four').hide()
  $('#five').hide()
  $('#six').hide()
  let roll = Math.floor(Math.random() * 6) + 1
  if (roll === 1) {
    $('#one-one').show()
    this.score = 0
    $('#player-one').hide()
    $('#player-two').show()
    $('#one').show()
  } else if (roll === 2) {
    $('#two').show()
    this.score += roll
    return this.score
  } else if (roll === 3) {
    $('#three').show()
    this.score += roll
    return this.score
  } else if (roll === 4) {
    $('#four').show()
    this.score += roll
    return this.score
  } else if (roll === 5) {
    $('#five').show()
    this.score += roll
    return this.score
  } else if (roll === 6) {
    $('#six').show()
    this.score += roll
    return this.score
  }
}

PlayerOne.prototype.winner = function () {
  if (this.score >= 100) {
    $('#player-one-win').show();
    $('#player-one').hide()
    $('#player-two').hide()
  }
}



function PlayerTwo() {
  this.score = 0;
}
PlayerTwo.prototype.diceRoll = function () {
  $('#one').hide()
  $('#two').hide()
  $('#three').hide()
  $('#four').hide()
  $('#five').hide()
  $('#six').hide()
  let roll = Math.floor(Math.random() * 6) + 1
  if (roll === 1) {
    this.score = 0
    $('#player-two').hide()
    $('#player-one').show()
    $('#one').show()
  } else if (roll === 2) {
    $('#two').show()
    this.score += roll
    return this.score
  } else if (roll === 3) {
    $('#three').show()
    this.score += roll
    return this.score
  } else if (roll === 4) {
    $('#four').show()
    this.score += roll
    return this.score
  } else if (roll === 5) {
    $('#five').show()
    this.score += roll
    return this.score
  } else if (roll === 6) {
    $('#six').show()
    this.score += roll
    return this.score
  }

}

PlayerTwo.prototype.winner = function () {
  if (this.score >= 100) {
    $('#player-two-win').show();
    $('#player-one').hide()
    $('#player-two').hide()
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
    newPlayerOne.winner()
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
    newPlayerTwo.winner()
  })

  $('#player-two-hold').click(function (event) {
    event.preventDefault()
    $('#player-two').hide()
    $('#player-one').show()
  })
})