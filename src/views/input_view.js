const PubSub = require('../helpers/pub_sub.js');
const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  // talking to the DOM
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (evt) => {
    const inputtedWords = evt.target.value;
    PubSub.publish('InputView:words-inputted', inputtedWords)
    // console.log('inputted words', inputtedWords);
  // event.preventDefault();
  })
};

module.exports = InputView;
