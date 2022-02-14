import { coinFlips, countFlips } from './modules/coin.mjs';
import minimist from 'minimist';

const commInput = minimist(process.argv.slice(2));
var totalFlipResults = []
if (process.argv.length == 2){
    totalFlipResults = coinFlips(1)
} else {
    totalFlipResults = coinFlips(commInput.number)
}
console.log(totalFlipResults)
console.log(countFlips(totalFlipResults))