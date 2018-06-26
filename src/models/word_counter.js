const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

}

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('SubmitView:words-inputted', (evt) => {
    const inputtedWords = evt.detail;
    console.log(inputtedWords);
    const result = this.numberOfWords(inputtedWords);
    console.log(result)
    PubSub.publish('WordCounter:result', result);
  })
};

WordCounter.prototype.numberOfWords = function (str) {
  const words = str.split(' ');
  return words.length;
};
// console.log(numberOfWords(" "));

module.exports = WordCounter;
