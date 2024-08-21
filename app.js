const display = document.querySelector(".display input");

clearAll = () => {
  display.value = "";
  lastWasCalled = false;
};

Display = (input) => {
  display.value += input;
  if (lastWasCalled) {
    display.value = "";
    lastWasCalled = false;
    display.value += input;
  }
};
del = () => {
  display.value = display.value.slice(0, -1);
};
calculate = () => {
  try {
    if (display.value.includes("%")) {
      const [left, right] = display.value.split("%"); // split("%") is an array, and const [left, right] is a way to destructure this array into individual variables.
      if (right !== undefined && right !== "") {
        display.value = (
          (parseFloat(left) * parseFloat(right)) /
          100
        ).toString();
      } else {
        display.value = (parseFloat(left) / 100).toString();
      }
    } else {
      display.value = eval(display.value);
    }
    lastWasCalled = true;
  } catch (err) {
    display.value = "ERROR";
  }
};
