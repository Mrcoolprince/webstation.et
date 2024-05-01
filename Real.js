const navigation = document.getElementById("navigation");
const secContainer = document.getElementById("sec");

const cards = [
  {
    title: "html",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Image: "images/html.jpg",
  },
  {
    title: "css",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Image: "images/css.jpg",
  },
  {
    title: "javascript",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    Image: "images/js.jpg",
  },
];

function creatsec() {
  cards.forEach((card) => {
    createCard(card);
  });
}

function createCard(card) {
  const container = document.createElement("div");
  container.classList.add("container");
  const button = document.createElement("button");
  button.innerHTML = "Read More";
  const content = document.createElement("div");

  content.classList.add("content");
  content.innerHTML = `
    <h2>${card.title}</h2>
  <p>${card.content}</p>
  <img src="${card.Image}" alt="html" />

  `;

  button.addEventListener("click", function () {
    window.location.href = "index2.html";
  });
  container.appendChild(button);
  container.appendChild(content);
  secContainer.appendChild(container);
}

creatsec();