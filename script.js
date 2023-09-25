const rootElement = document.querySelector("#root");
const firstSection = document.createElement("section");
firstSection.classList.add("first-section");
rootElement.appendChild(firstSection);

const heading = document.createElement("h1");
const text = document.createTextNode("РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ");
heading.appendChild(text);
firstSection.appendChild(heading);

const paragraph = document.createElement("p");
paragraph.textContent = "стадионы, газопроводы, мосты, дамбы";
firstSection.appendChild(paragraph);
const secondSection = document.createElement("section");
secondSection.classList.add("second-section");
firstSection.appendChild(secondSection);
for (let i = 0; i <= 3; i++) {
  const container = document.createElement("div");
  container.classList.add("card-container");

  const h3Tag = document.createElement("h3");
  h3Tag.textContent = "26";

  const h4Tag = document.createElement("h4");
  h4Tag.textContent = "лет";

  const h5Tag = document.createElement("h5");
  h5Tag.textContent = "на рынке";

  container.appendChild(h3Tag);
  container.appendChild(h4Tag);
  container.appendChild(h5Tag);

  secondSection.appendChild(container);
}
const sectionMain = document.createElement("section");
sectionMain.classList.add("main");
rootElement.appendChild(sectionMain);
const mainH2 = document.createElement("h2");
mainH2.textContent = "НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ";
sectionMain.appendChild(mainH2);
const mainConatiner = document.createElement("div");
mainConatiner.classList.add("main-container");
sectionMain.appendChild(mainConatiner);
for (let i = 0; i < 3; i++) {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const mainImg = document.createElement("img");
  mainImg.setAttribute("src", "./img/mainImg.svg");
  const hrElement = document.createElement("hr");
  const h3Main = document.createElement("h3");
  h3Main.textContent = "Арена";
  const pMain = document.createElement("p");
  pMain.textContent =
    "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.";
  imgContainer.appendChild(mainImg);
  imgContainer.appendChild(hrElement);
  imgContainer.appendChild(h3Main);
  imgContainer.appendChild(pMain);
  mainConatiner.appendChild(imgContainer);
}

const thirdSection = document.createElement("section");
thirdSection.classList.add("third-section");
rootElement.appendChild(thirdSection);
const containerTwoText = document.createElement("div");
const textH2 = document.createElement("h2");
textH2.textContent = "САМЫЕ УМНЫЕ ПРОЕКТЫ";
const textH3 = document.createElement("h3");
textH3.textContent = "РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!";
thirdSection.appendChild(containerTwoText);
containerTwoText.classList.add("twoText");
containerTwoText.appendChild(textH2);
containerTwoText.appendChild(textH3);

const button = document.createElement("button");
button.textContent = "ВАШ ЗАПРОС";
thirdSection.appendChild(button);
const serviceSection = document.createElement("section");
serviceSection.classList.add("services");
rootElement.appendChild(serviceSection);
const serviceH2 = document.createElement("h2");
serviceH2.textContent = "ЧЕМ МЫ ЗАНИМАЕМСЯ?";
serviceSection.appendChild(serviceH2);
const element3Div = document.createElement("div");
element3Div.classList.add("third-div");
for (let i = 0; i < 3; i++) {
  const childDiv = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "./img/building.svg");
  const pElement = document.createElement("p");
  pElement.textContent = "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ";
  childDiv.appendChild(imgElement);
  childDiv.appendChild(pElement);
  element3Div.appendChild(childDiv);
}
serviceSection.appendChild(element3Div);
const serviceH2For6Div = document.createElement("h2");
serviceH2For6Div.textContent = "ЧЕМ МЫ ЗАНИМАЕМСЯ?";
serviceSection.appendChild(serviceH2For6Div);
const element6Div = document.createElement("div");
element6Div.classList.add("grid-container");
for (let i = 0; i < 6; i++) {
  const childDiv2 = document.createElement("div");
  const pElement2 = document.createElement("p");

  pElement2.textContent = "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ";
  if (i !== 0) {
    const imgElement2 = document.createElement("img");
    imgElement2.setAttribute("src", "./img/building.svg");
    childDiv2.appendChild(imgElement2);
  }

  childDiv2.appendChild(pElement2);
  element6Div.appendChild(childDiv2);
}
serviceSection.appendChild(element6Div);
