document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.getElementById('projects-container');
    const addProjectBtn = document.getElementById('addProjectBtn');

    let projectCount = 0;

    function addProject() {
        projectCount++;

        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-entry');
        projectDiv.setAttribute('data-project-id', projectCount);

        projectDiv.innerHTML = `
        <div class="m-1 p-3 border border-gray-200 rounded-md bg-gray-50"> 
            <div class="mb-2">
                <label class="block text-sm font-medium">Project Title</label>
                <input type="text" class="project-title w-full px-3 py-2 border rounded-md" placeholder="Project Title">
            </div>
            <div class="mb-2">
                <label class="block text-sm font-medium">Description</label>
                <textarea class="project-description w-full px-3 py-2 border rounded-md" placeholder="Project Description"></textarea>
            </div>
            <div class="mb-2">
                <label class="block text-sm font-medium">Start Date</label>
                <input type="date" class="project-start-date w-full px-3 py-2 border rounded-md">
            </div>
            <div class="mb-2">
                <label class="block text-sm font-medium">End Date</label>
                <input type="date" class="project-end-date w-full px-3 py-2 border rounded-md">
            </div>
            <button type="button" class="removeProjectBtn bg-red-500 text-white px-3 py-1 rounded-md mt-2">Remove Project</button>
        </div>
            `;

        projectsContainer.appendChild(projectDiv);

        projectDiv.querySelector('.removeProjectBtn').addEventListener('click', function () {
            projectsContainer.removeChild(projectDiv);
        });
    }

    addProjectBtn.addEventListener('click', addProject);

    document.getElementById('cvForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const cvData = {
            name: document.getElementById('name').value,
            jobTitle: document.getElementById('jobTitle').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            location: document.getElementById('location').value,
            education: document.getElementById('education').value.split(','),
            skills: document.getElementById('skills').value.split(','),
            introduction: document.getElementById('introduction').value,
            experience: document.getElementById('experience').value.split(','),
            projects: [],
            hobbies: document.getElementById('hobbies').value.split(',')
        };

        document.querySelectorAll('.project-entry').forEach(projectDiv => {
            const title = projectDiv.querySelector('.project-title').value;
            const description = projectDiv.querySelector('.project-description').value;
            const startDate = projectDiv.querySelector('.project-start-date').value;
            const endDate = projectDiv.querySelector('.project-end-date').value;

            cvData.projects.push({
                title,
                description,
                startDate,
                endDate
            });
        });

        sessionStorage.setItem('cvData', JSON.stringify(cvData));
        window.location.href = 'cvtask.html'

        console.log('CV Data Saved:', cvData);
    });
});
