let container = document.querySelector(".animateWrap");
let imgElement = document.querySelector(".destinations-image");
let destName = document.querySelector(".primary-heading");
let description = document.querySelector(".body-text");
let distance = document.querySelector(".avg-dist");
let time = document.querySelector(".travel-time");

let moonBtn = document.querySelector(".moon");
let marsBtn = document.querySelector(".mars");
let europaBtn = document.querySelector(".europa");
let titanBtn = document.querySelector(".titan");

const renderDestination = (dest) => {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      let list = data.destinations;
      let finalDestination;
      for (const destinationObject of list) {
        if (destinationObject.name.toLowerCase() === dest.toLowerCase()) {
          finalDestination = destinationObject;
        }
      }

      imgElement.setAttribute("src", `.${finalDestination.images.png}`);
      imgElement.setAttribute("alt", `${finalDestination.name} image.`);
      destName.innerText = finalDestination.name.toUpperCase();
      description.innerText = finalDestination.description;
      distance.innerText = finalDestination.distance.toUpperCase();
      time.innerText = finalDestination.travel.toUpperCase();
    });
};

renderDestination("moon");

moonBtn.addEventListener("click", (e) => {
  container.classList.add("fadeIn");
  setTimeout(() => {
    document.querySelector(".activeLink").classList.remove("activeLink");
    renderDestination("moon");
    e.target.classList.add("activeLink");
    setTimeout(() => {
      container.classList.remove("fadeIn");
    }, 10);
  }, 300);
});
marsBtn.addEventListener("click", (e) => {
  container.classList.add("fadeIn");
  setTimeout(() => {
    document.querySelector(".activeLink").classList.remove("activeLink");
    renderDestination("mars");
    e.target.classList.add("activeLink");
    setTimeout(() => {
      container.classList.remove("fadeIn");
    }, 10);
  }, 300);
});
europaBtn.addEventListener("click", (e) => {
  container.classList.add("fadeIn");
  setTimeout(() => {
    document.querySelector(".activeLink").classList.remove("activeLink");
    renderDestination("europa");
    e.target.classList.add("activeLink");
    setTimeout(() => {
      container.classList.remove("fadeIn");
    }, 10);
  }, 300);
});
titanBtn.addEventListener("click", (e) => {
  container.classList.add("fadeIn");
  setTimeout(() => {
    document.querySelector(".activeLink").classList.remove("activeLink");
    renderDestination("titan");
    e.target.classList.add("activeLink");
    setTimeout(() => {
      container.classList.remove("fadeIn");
    }, 10);
  }, 300);
});

// setTimeout()
