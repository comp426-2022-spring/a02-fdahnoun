import { coinFlips, countFlips } from './modules/coin.mjs';
import minimist from 'minimist';

const commInput = minimist(process.argv.slice(2));

const input = commInput.number;

var totalResults = coinFlips(input);
console.log(totalResults);
console.log(countFlips(totalResults));
