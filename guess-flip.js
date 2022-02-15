import { flipACoin } from './modules/coin.mjs';
import minimist from 'minimist';

const commInput = minimist(process.argv.slice(2));
if (commInput.call != "heads" && commInput.call != "tails"){
    console.log("Error: no input.")
    console.log("Usage: node guess-flip=[heads|tails]")
} else{
    console.log(flipACoin(commInput.call))
}
