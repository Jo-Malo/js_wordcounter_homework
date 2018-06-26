const PubSub = require('../helpers/pub_sub.js');
const SubmitView = function () {

};

SubmitView.prototype.bindEvents = function () {
  // talking to the DOM
  const submit = document.querySelector('#wordcounter-form');
  submit.addEventListener('submit', (evt) => {
    event.preventDefault();
    const inputtedWords = evt.target.text.value;
    PubSub.publish('SubmitView:words-inputted', inputtedWords)
    // console.log('inputted words', inputtedWords);
  })
};

module.exports = SubmitView;
