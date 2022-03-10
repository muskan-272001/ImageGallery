const frame = document.querySelector(".frame");
const value = document.getElementById("dropBox");

function getValue() {
  const userValue = value.options[value.selectedIndex].value;
  if (userValue === "tarsier") {
    frame.innerHTML = `<img src="./Images/tarsier.jpg" alt="">`;
  } else if (userValue === "pig") {
    frame.innerHTML = `<img src="./Images/pig.jpg" alt="">`;
  } else if (userValue === "dog") {
    frame.innerHTML = `<img src="./Images/dog.jpg" alt="">`;
  } else if (userValue === "cat") {
    frame.innerHTML = `<img src="./Images/cat.jpg" alt="">`;
  } else if (userValue === "deer") {
    frame.innerHTML = `<img src="./Images/Deer.jpg" alt="">`;
  } else if (userValue === "giraffe") {
    frame.innerHTML = `<img src="./Images/Giraffe.jpg" alt="">`;
  } else if (userValue === "panda") {
    frame.innerHTML = `<img src="./Images/Panda.jpg" alt="">`;
  } else if (userValue === "squirrel") {
    frame.innerHTML = `<img src="./Images/squirrel.webp" alt="">`;
  }
}
