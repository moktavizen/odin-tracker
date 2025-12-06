const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const p = document.createElement("p");
p.setAttribute("style", "color: red");
p.textContent = "Hey I'm red!";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.cssText = "color: blue;";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const card = document.createElement("div");
card.style.cssText = "border: 8px solid black; background: pink;";

const cardH1 = document.createElement("h1");
cardH1.textContent = "I’m in a div";
card.appendChild(cardH1);

const cardP = document.createElement("p");
cardP.textContent = "ME TOO";
card.appendChild(cardP);

container.appendChild(card);

const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");
btn.addEventListener("click", (e) => {
  e.target.style.background = "blue";
});

const buttons = [...document.querySelectorAll("#container > button")];
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
