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
    console.log(`${entry.target.id}: ${entry.intersectionRatio}`);
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
