fetch('assets/data/projects.json')
    .then(response => response.json())
    .then(projectsData => {
        const projectCardTemplate = (project, link_attr, tags) => `
        <a href="${ project.url }" class="text-decoration-none p-0 mx-2 my-2 col-xxl-3 col-lg-5 col-md-8 col-10 rounded" ${ link_attr }>
            <div class="card rounded project-card">
                <img src="${ project.images[0] }" class="rounded" alt="${ project.title }">
                <div class="project-overlay d-flex flex-column justify-content-center align-items-center rounded bg-dark bg-opacity-75">
                    <h3 class="card-title text-white fw-bold">${ project.title }</h3>
                    <p><span class="badge fw-bold rounded-pill px-3 py-2 bg-${ project.status_color} bg-gradient text-white shadow">${ project.status }</span></p>
                    <div class="d-grid gap-2 mt-3 d-flex justify-content-center">
                        ${tags}
                    </div>
                </div>
            </div>
        </a>`;

        const tagTemplate = (tagName) => `<span class="badge badge-primary border rounded border-2 fw-semibold border-white text-white">${ tagName }</span>`;

        document.querySelector('#projects')
            .innerHTML = projectsData.featured.map(featured => {
                let project = projectsData.projects[featured];
                let link_attr = project.external ? 'target="_blank" rel="noopener noreferrer"' : '';
                let tags = '';
                for (var tag in project.tags)
                {
                    tags += tagTemplate(project.tags[tag]);
                }
                return projectCardTemplate(project, link_attr, tags);
            }).join('');
    })
    .catch(error => {
        console.log(error);
        document.querySelector('#featured-projects').classList.add('d-none');
    });