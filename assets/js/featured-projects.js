fetch('assets/data/projects.json')
    .then(response => response.json())
    .then(projectsData => {
        const projectCardTemplate = (project, link_attr, tags) => `
        <a href="${ project.url }" class="text-decoration-none p-0 mx-2 my-2 col-xxl-3 col-lg-5 col-md-8 col-10 project-card" ${ link_attr }>
            <div class="card  border-2 shadow">
                <img src="${ project.images[0] }" class="card-img-top border-bottom border-2 border-muted" alt="${ project.title }">
                <div class="card-body">
                    <h3 class="card-title text-primary fw-bold">${ project.title }</h3>
                    <p><span class="badge fw-bold rounded-pill px-3 py-2 bg-${ project.status_color} text-white">${ project.status }</span></p>
                    <p class="text-left card-text text-primary text-truncate-3">${ project.description }</p>
                    <div class="d-grid gap-2 d-flex justify-content-center">
                        ${tags}
                    </div>
                </div>
            </div>
        </a>`;

        const tagTemplate = (tagName) => ` <span class="badge badge-primary border rounded-p border-2 border-primary text-primary">${ tagName }</span>`;

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