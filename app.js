
(function() {
  const buttons = document.querySelectorAll('.counterBtn'),
    counterElem = document.querySelector('#counter');
  let counter = 0;

  buttons.forEach(function (button) {
    button.addEventListener('click',function () {
      if (button.classList.contains('prevBtn')) {
        counter--;
      } else if (button.classList.contains('nextBtn')) {
        counter++;
      }

      counterElem.textContent = count;

      if (counter < 0) {
        counterElem.style.color = 'red';
      } else if (counter > 0) {
        counterElem.style.color = 'green';
      } else {
        counterElem..style.color = '#333';
      }
    });
  });
}) ();
