const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (ev) => {
  ev.preventDefault();

  const currentInput = input.value;
  input.value = "";

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");

  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);

  newSpan.textContent = currentInput;
  newButton.textContent = "Delete";

  ul.appendChild(newLi);

  newButton.addEventListener("click", () => {
    newLi.remove();
  });

  input.focus();
});
