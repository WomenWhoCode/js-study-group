import { projectsArray } from "./projectsArray.js";

export function populateCarousel() {
    const projectsUL = document.querySelector('.projects-list');
    projectsArray.forEach((project, index) => {
        //Creating elements
        const listItem = document.createElement('li');
        const projectDisplayDiv = document.createElement('div');
        const image = document.createElement('img');
        const projectDetailsDiv = document.createElement('div');
        const heading = document.createElement('h3');
        const techParagraph = document.createElement('p');
        const projectLinksDiv = document.createElement('div');
        const anchorLiveSite = document.createElement('a');
        const anchorRepoSite = document.createElement('a');
        const descParagraph = document.createElement('p');
        //Assigning classes
        listItem.classList.add('projects-list-item');
        projectDisplayDiv.classList.add('project-display');
        projectDetailsDiv.classList.add("project-details");
        techParagraph.classList.add("light");
        projectLinksDiv.classList.add("project-links");
        anchorLiveSite.classList.add("btn");
        anchorRepoSite.classList.add("btn");
        //Adding attributes
        if (index === 0) {
            listItem.setAttribute("data-active", true);
        }
        image.setAttribute("src", `${project.image}`);
        image.setAttribute("alt", `Thumbnail of ${project.heading} live site`)
        anchorLiveSite.setAttribute("href", `${project.liveURL}`);
        anchorLiveSite.setAttribute("target", "_blank");
        anchorLiveSite.setAttribute("rel", "noopener noreferrer");
        anchorRepoSite.setAttribute("href", `${project.repoURL}`);
        anchorRepoSite.setAttribute("target", "_blank");
        anchorRepoSite.setAttribute("rel", "noopener noreferrer");
        //Updating textContent and innerHTML
        heading.textContent = `${project.heading}`;
        techParagraph.textContent = `${project.tech}`;
        anchorLiveSite.textContent = "Live";
        anchorRepoSite.textContent = "Code";
        descParagraph.innerHTML = `${project.desc}`;
        //Appending to divs
        projectDisplayDiv.append(image);
        if (project.inProgress) {
            const inProgressSticker = document.createElement('span');
            inProgressSticker.textContent = "Work in Progress!";
            projectDisplayDiv.append(inProgressSticker);
        }
        projectLinksDiv.append(anchorLiveSite, anchorRepoSite);
        projectDetailsDiv.append(heading, techParagraph, projectLinksDiv, descParagraph)
        listItem.append(projectDisplayDiv, projectDetailsDiv);
        projectsUL.append(listItem);
    })
}