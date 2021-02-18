//~~~~ Navigation ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const projects = document.querySelector("#projects");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

const projectsButton = document.querySelector("#projects-button");
const aboutButton = document.querySelector("#about-button");
const contactButton = document.querySelector("#contact-button");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.1, 0.2, 0.3],
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    const targetButton = document.querySelector(`#${entry.target.id}-button`);
    if (entry.target.id === "projects" && entry.intersectionRatio > 0.1) {
      targetButton.classList.add("highlighted");
    } else if (entry.intersectionRatio > 0.2) {
      targetButton.classList.add("highlighted");
    } else {
      targetButton.classList.remove("highlighted");
    }
  });
};

let observer = new IntersectionObserver(callback, options);

observer.observe(projects);
observer.observe(about);
observer.observe(contact);

//~~ Expand project information ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function openDetails(openThis, closeThis1, closeThis2) {
  openThis.classList.remove("hidden-details");
  closeThis1.classList.add("hidden-details");
  closeThis2.classList.add("hidden-details");
}

const portDetails = document.querySelector("#port-details");
const expandPort = document.querySelector("#expand-port");
const collapsePort = document.querySelector("#collapse-port");

expandPort.addEventListener("click", () => {
  const rect = portDetails.getBoundingClientRect();
  const moveTop = Math.floor(rect.top) - 100;
  window.scrollBy({
    top: moveTop,
    left: 0,
    behavior: "smooth",
  });
  openDetails(portDetails, tanaDetails, joseDetails);
});
collapsePort.addEventListener("click", () => {
  const rect = portDetails.getBoundingClientRect();
  const moveTop = Math.floor(rect.top) - 400;
  window.scrollBy({
    top: moveTop,
    left: 0,
    behavior: "smooth",
  });
  portDetails.classList.add("hidden-details");
});

const tanaDetails = document.querySelector("#tana-details");
const expandTana = document.querySelector("#expand-tana");
const collapseTana = document.querySelector("#collapse-tana");

expandTana.addEventListener("click", () => {
  const rect = tanaDetails.getBoundingClientRect();
  const moveTop = Math.floor(rect.top) - 100;
  window.scrollBy({
    top: moveTop,
    left: 0,
    behavior: "smooth",
  });
  openDetails(tanaDetails, portDetails, joseDetails);
});
collapseTana.addEventListener("click", () => {
  const rect = tanaDetails.getBoundingClientRect();
  const moveTop = Math.floor(rect.top) - 400;
  window.scrollBy({
    top: moveTop,
    left: 0,
    behavior: "smooth",
  });
  tanaDetails.classList.add("hidden-details");
});

const joseDetails = document.querySelector("#jose-details");
const expandJose = document.querySelector("#expand-jose");
const collapseJose = document.querySelector("#collapse-jose");

expandJose.addEventListener("click", () => {
  const rect = joseDetails.getBoundingClientRect();
  const moveTop = Math.floor(rect.top) - 100;
  window.scrollBy({
    top: moveTop,
    left: 0,
    behavior: "smooth",
  });
  openDetails(joseDetails, tanaDetails, portDetails);
});
collapseJose.addEventListener("click", () => {
  const rect = joseDetails.getBoundingClientRect();
  const moveTop = Math.floor(rect.top) - 400;
  window.scrollBy({
    top: moveTop,
    left: 0,
    behavior: "smooth",
  });
  joseDetails.classList.add("hidden-details");
});
