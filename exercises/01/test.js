const createListItem = (index, projectDisplayDiv, projectDetailsDiv) => {
    const listItem = document.createElement('li');
    listItem.classList.add('projects-list-item');
    if (index === 0) {
            listItem.setAttribute("data-active", true);
        }
    listItem.append(projectDisplayDiv, projectDetailsDiv);
}

const createAnchors = (projectData) => {
    const anchorLiveSite = document.createElement('a');
    const anchorRepoSite = document.createElement('a');
    const anchorsArray = [];
    anchorsArray.push(anchorLiveSite, anchorRepoSite);
    anchorsArray.forEach((anchor, index) => {
        anchor.classList.add("btn");
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer")
        if (index === 0) {
            // anchor.setAttribute("href", `${projectData.liveURL}`);
            anchor.textContent = "Live";
        } else if (index === 1) {
            // anchor.setAttribute("href", `${projectData.repoURL}`);
            anchor.textContent = "Code"
        }
    })
    console.log(anchorsArray);
    
}

createAnchors();