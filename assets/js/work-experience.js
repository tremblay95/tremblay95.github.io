fetch('assets/data/projects.json')
    .then(response => response.json())
    .then(projectsData => {
        const projFoundTemplate = (projectData) => `<a href="${ projectData.url }" class="my-0 py-1 px-2 rounded fw-semibold primary-link-inverted bg-primary-transparent text-decoration-none text-center" target="_blank" rel="noopener noreferrer">${ projectData.title }</a>`;

        const projNotFoundTemplate = (projectName) => `<p class="my-0 fw-semibold text-muted text-center">${ projectName }</p>`;

        document.querySelectorAll('#project-link')
            .forEach((projectLinkElement) => {
                let id = projectLinkElement.dataset.projectId;

                if (projectsData.projects[id]) {
                    projectLinkElement.innerHTML = projFoundTemplate(projectsData.projects[id]);
                } else {
                    projectLinkElement.innerHTML = projNotFoundTemplate(id);
                }
            });
    })
    .catch(error => {
        console.log(error);
        document.querySelector('#featured-projects').classList.add('d-none');
    });