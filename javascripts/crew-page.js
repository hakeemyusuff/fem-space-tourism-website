let changeEffect = document.querySelector(".change-effect");
let crewsImage = document.querySelector(".crews-image");
let crewRole = document.querySelector(".role");
let crewName = document.querySelector(".crew-name");
let crewBio = document.querySelector(".bio");

let firstPagination = document.getElementById("pagination-1");
let secondPagination = document.getElementById("pagination-2");
let thirdPagination = document.getElementById("pagination-3");
let fourthPagination = document.getElementById("pagination-4");

const getCrewInformation = (crew) => {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      let crewInfo;
      let crewList = data.crew;
      for (const crewObject of crewList) {
        if (crewObject.name.toLowerCase() === crew.toLowerCase()) {
          crewInfo = crewObject;
        }
      }
      crewsImage.setAttribute("src", `.${crewInfo.images.png}`);
      crewsImage.setAttribute("alt", `.${crewInfo.name} image.`);
      crewRole.innerText = crewInfo.role.toUpperCase();
      crewName.innerText = crewInfo.name.toUpperCase();
      crewBio.innerText = crewInfo.bio;
    });
};

getCrewInformation("victor glover");

firstPagination.addEventListener("click", (b) => {
  changeEffect.classList.add("slide");
  setTimeout(() => {
    document.querySelector(".active-button").classList.remove("active-button");
    getCrewInformation("douglas hurley");
    b.target.classList.add("active-button");
    setTimeout(() => {
      changeEffect.classList.remove("slide");
    }, 2);
  }, 300);
});

secondPagination.addEventListener("click", (b) => {
  changeEffect.classList.add("slide");
  setTimeout(() => {
    document.querySelector(".active-button").classList.remove("active-button");
    getCrewInformation("mark shuttleworth");
    b.target.classList.add("active-button");
    setTimeout(() => {
      changeEffect.classList.remove("slide");
    }, 10);
  }, 300);
});

thirdPagination.addEventListener("click", (b) => {
  changeEffect.classList.add("slide");
  setTimeout(() => {
    document.querySelector(".active-button").classList.remove("active-button");
    getCrewInformation("victor glover");
    b.target.classList.add("active-button");
    setTimeout(() => {
      changeEffect.classList.remove("slide");
    }, 10);
  }, 300);
});
fourthPagination.addEventListener("click", (b) => {
  changeEffect.classList.add("slide");
  setTimeout(() => {
    document.querySelector(".active-button").classList.remove("active-button");
    getCrewInformation("anousheh ansari");
    b.target.classList.add("active-button");
    setTimeout(() => {
      changeEffect.classList.remove("slide");
    }, 10);
  }, 300);
});
