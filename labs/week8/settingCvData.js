document.addEventListener('DOMContentLoaded', function() {
    const cvData = JSON.parse(sessionStorage.getItem('cvData'));

    console.log("cvData for display on CV page:", cvData);

    if (cvData) {
        document.getElementById('name').textContent = cvData.name;
        document.getElementById('jobTitle').textContent = cvData.jobTitle;
        document.querySelector('#contact-section').innerHTML = `
            <h2>Contact</h2>
            <p><strong>Phone:</strong> ${cvData.phone}</p>
            <p><strong>Email:</strong> ${cvData.email}</p>
            <p><strong>Location:</strong> ${cvData.location}</p>
        `;

        fillList(cvData.education, '#education-section ul');
        fillList(cvData.skills, '#skills-section ul');
        document.querySelector('#introduction-article p').textContent = cvData.introduction;
        fillList(cvData.experience, '#experience-article ul');
        fillProjects(cvData.projects, '#projects-article');
        fillList(cvData.hobbies, '#hobbies-article ul');

        if (cvData.github) {
            document.getElementById('github-link').href = cvData.github;
        }
    } else {
        console.log('No CV data found in sessionStorage.');
    }

    function fillList(dataArray, selector) {
        const listElement = document.querySelector(selector);
        listElement.classList.add('list-disc', 'pl-5')
        dataArray.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.trim();
            listElement.appendChild(listItem);
        });
    }

    function fillProjects(projectArray, selector) {
        const container = document.querySelector(selector);

        projectArray.forEach((project, index) => {
            const projectContainer = document.createElement('div');
            projectContainer.classList.add('project-item', 'm-4', 'p-4', 'border', 'rounded-md', 'bg-gray-50');

            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('text-lg', 'font-semibold');
            projectTitle.textContent = "Project name: " + project.title;

            const projectDescription = document.createElement('p');
            projectDescription.classList.add('text-sm', 'mb-2');
            projectDescription.innerHTML = `<strong>Project description:</strong> ${project.description}`;

            const projectDates = document.createElement('p');
            projectDates.classList.add('text-sm', 'text-gray-400');
            projectDates.innerHTML = `<i>Start Date:</i> ${project.startDate} <br> <i>End Date:</i> ${project.endDate}`;

            projectContainer.appendChild(projectTitle);
            projectContainer.appendChild(projectDescription);
            projectContainer.appendChild(projectDates);

            container.appendChild(projectContainer);
        });
    }
});
