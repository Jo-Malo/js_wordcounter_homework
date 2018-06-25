const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

}

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:words-inputted', (evt) => {
    const inputtedWords = evt.detail;
    console.log(inputtedWords);
    const result = this.numberOfWords(inputtedWords);
    PubSub.publish('WordCounter:result', result);
  })
};

WordCounter.prototype.numberOfWords = function (str) {
  return str.split(" ").length;
};

module.exports = WordCounter;
