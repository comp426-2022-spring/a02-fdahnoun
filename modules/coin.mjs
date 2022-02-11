/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads | tail
 * 
 */

export function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}

// export { coinFlip }
// console.log(coinFlip())

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  if (flips != 0){
    const headsOrTails = []
    for (let x = 0; x < flips; x++){
      var outcome = Math.floor(Math.random() * 2) == 0 ? 'heads' : 'tails'
      headsOrTails[x] = outcome
    }
  } else {
    return coinFlip()
  }

  return headsOrTails

}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  var dict = {};
  dict = {heads: 0, tails: 0}
  for (let x = 0; x < array.length; x++){
    if (array[x] == "heads"){
      dict.heads += 1

    }else{
      dict.tails += 1
    }
  }
  return dict
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  var flipCoin = {};
  var thisFlip = coinFlip()
  var result = ""
  if (call == thisFlip){
    result = 'win'
  } else{
    result = 'lose'
  }
  flipCoin = {guess: call, flip: thisFlip, final_result: result}

  
  return flipCoin

}


/** Export 
 * 
 * Export all of your named functions
*/
