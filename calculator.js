const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusbtn = document.getElementById("plus");
const minusbtn = document.getElementById("minus");
const kobeitbtn = document.getElementById("kobeitu");
const bolubtn = document.getElementById("bolu");
const kaldykbtn = document.getElementById("kaldyk");
const submitbtn = document.getElementById("submit");

plusbtn.onclick = function () {
  action = "+";
};

minusbtn.onclick = function () {
  action = "-";
};

kobeitbtn.onclick = function () {
  action = "*";
};

bolubtn.onclick = function () {
  action = "/";
};

kaldykbtn.onclick = function () {
  action = "%";
};

submitbtn.onclick = function () {
  if (action == "+") {
    const sum = Number(input1.value) + Number(input2.value);
    resultElement.textContent = sum;
  } else if (action == "-") {
    const sum = Number(input1.value) - Number(input2.value);
    resultElement.textContent = sum;
  } else if (action == "*") {
    const sum = Number(input1.value) * Number(input2.value);
    resultElement.textContent = sum;
  } else if (action == "/") {
    const sum = Number(input1.value) / Number(input2.value);
    resultElement.textContent = sum;
  } else if (action == "%") {
    const sum = Number(input1.value) % Number(input2.value);
    resultElement.textContent = sum;
  }
};
