window.onload = () => {
  let buttons = document.querySelectorAll('.btn');
  let screen = document.querySelector('.input-box');
  let equals = document.querySelector('#button-equals');
  let clear = document.querySelector('#button-clear');
  let del = document.querySelector('#button-delete');

  buttons.forEach((button) => 
  {
    button.addEventListener('click', (e) => 
    {
      screen.value += e.target.innerHTML;
      document.querySelectorAll('input').value = screen;
    });
  });

  //'equals to' button
  equals.addEventListener('click', (e) => 
  {
    if (!screen.value) {
      screen.value = 0 ;
    } 
     {
      try {
        screen.value = eval(screen.value);
      } 
      catch (error) 
      {
        screen.value = "Invalid Expression";
        screen.value = "";
      }
    }
  })

  //all clear button
  clear.addEventListener('click', (e) =>
  {
    screen.value = "";
  })

  //delete button || backspace button
  del.addEventListener('click', (e) =>
  {
    screen.value = screen.value.slice(0,-1);
  })

};
