document.addEventListener('DOMContentLoaded', function () {
    let result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        if (e.target.value === '=') {
          try {
            result.value = eval(result.value);
          } catch (error) {
            result.value = 'Error';
          }
        } else if (e.target.value === 'C') {
          result.value = '';
        } else {
          result.value += e.target.value;
        }
      });
    });
  });
  