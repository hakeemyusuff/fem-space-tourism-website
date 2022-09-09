let changeEffect = document.querySelector(".change-effect");
let techImages = document.querySelector(".tech-images");
let techImagePotrait = document.querySelector(".tech-image-portrait");
let techImageLandscape = document.querySelector(".tech-image-landscape");
let techName = document.querySelector(".tech-name");
let description = document.querySelector(".description");

let firstPagination = document.getElementById("pagination-1");
let secondPagination = document.getElementById("pagination-2");
let thirdPagination = document.getElementById("pagination-3");

const getTechInformation = (tech) => {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      let techList = data.technology;
      let techInfo;
      for (const techObject of techList) {
        if (techObject.name.toLowerCase() === tech.toLowerCase()) {
          techInfo = techObject;
        }
      }
      techImagePotrait.setAttribute("src", `.${techInfo.images.portrait}`);
      techImageLandscape.setAttribute("src", `.${techInfo.images.landscape}`);
      techImagePotrait.setAttribute("alt", `.${techInfo.name} image.`);
      techImageLandscape.setAttribute("alt", `.${techInfo.name} image.`);
      techName.innerText = techInfo.name.toUpperCase();
      description.innerText = techInfo.description;
    });
};

getTechInformation("launch vehicle");

firstPagination.addEventListener("click", (c) => {
  changeEffect.classList.add("slide");
  setTimeout(() => {
    document.querySelector(".active-button").classList.remove("active-button");
    getTechInformation("launch vehicle");
    c.target.classList.add("active-button");
    setTimeout(() => {
      changeEffect.classList.remove("slide");
    }, 2);
  }, 300);
});

firstPagination.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    firstPagination.click();
  }
});

secondPagination.addEventListener("click", (c) => {
  changeEffect.classList.add("slide");
  setTimeout(() => {
    document.querySelector(".active-button").classList.remove("active-button");
    getTechInformation("spaceport");
    c.target.classList.add("active-button");
    setTimeout(() => {
      changeEffect.classList.remove("slide");
    }, 2);
  }, 300);
});

secondPagination.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    secondPagination.click();
  }
});

thirdPagination.addEventListener("click", (c) => {
  changeEffect.classList.add("slide");
  setTimeout(() => {
    document.querySelector(".active-button").classList.remove("active-button");
    getTechInformation("space capsule");
    c.target.classList.add("active-button");
    setTimeout(() => {
      changeEffect.classList.remove("slide");
    }, 2);
  }, 300);
});

thirdPagination.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    thirdPagination.click();
  }
});
