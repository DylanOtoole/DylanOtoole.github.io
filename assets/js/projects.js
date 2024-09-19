/*
  Tool Name: Cursor
  URL: https://www.cursor.com/
  Date used: September 18, 2024
  Description of how it was used: Cursor was used to generate a system design of the coding problem
  Prompt(s): Asked Cursor a system design of making recent projects section
  Answer: 
  To implement the dynamic content loading for the "Recent Projects" section, here's a high-level overview of the design:
  HTML Structure:
  Add a new <div> with an ID (e.g., "recent-projects") in the "Projects" section of your HTML file.
  Add a "Load More" button below this div.
  JavaScript:
  Create an array of project objects, each containing details like title, description, tools used, and link.
  Write a function to create HTML for a single project card.
  Write a function to load and display projects:
  Initially, display only the most recent project.
  When "Load More" is clicked, display additional projects.
  Add an event listener to the "Load More" button
*/

const codingProjects = [
  {
    title: "World Mapping Application",
    description: "A GIS application that allows users to view geospatial data through the OpenStreetMap API.",
    tools: "C++, OpenStreetMap API, OpenGL",
    link: "https://sendspark.com/share/2qgjgg2qgi2r6czh",
    date: "April 1, 2024"
  },
  {
    title: "Real Time Virtual Library",
    description: "A desktop application that allows users to view their sorted books.",
    tools: "Python, Tkinter",
    link: "#",
    date: "May 2, 2024"
  },
  {
    title: "Chess Game",
    description: "A desktop application that allows users to view their sorted books.",
    tools: "Python, Tkinter",
    link: "#",
    date: "June 5, 2024"
  },
  {
    title: "Checkers Game",
    description: "A desktop application that allows users to view their sorted books.",
    tools: "Python, Tkinter",
    link: "#",
    date: "July 15, 2024"
  },
];



/*

    <!-- Fourth Section: Projects -->
    <section id="projects" class="section scrollspy">
      <h3 class="page-title white-text teal">Projects</h3>
      <div class="container">
        <div class="row">

          <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="music streaming app" src="/assets/img/project-music-player.png"
                  style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">World Mapping Application<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  A GIS application that allows users to view geospatial data through the OpenStreetMap API.
                </p>
              </div>
              <div class="card-reveal">
                <!-- TODO: change this -- only close button -->
                <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>`
                  <li><b>Tools:</b> C++, OpenStreetMap API, OpenGL</li>
                  <li>Explore areas of interest such as New York, Toronto, Japan, and more!</li>
                </ul>
                <div class="card-action">
                  <a aria-label="Visit " href="https://sendspark.com/share/2qgjgg2qgi2r6czh" target="_blank"
                    data-position="top" data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <!-- ************* -->
        </div>
      </div>
    </section>
*/
function createProjectCard(project) {
  return `
      <div class="col s12 m6 l4">
        <div class="card medium">
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
            <p>${project.description}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
            <ul>
              <li><b>Tools:</b> ${project.tools}</li>
              <li><b>Date:</b> ${project.date}</li>
            </ul>
          </div>
          <div class="card-action">
            <a aria-label="Visit ${project.title}" href="${project.link}" target="_blank" data-position="top" data-tooltip="View Online" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>
          </div>
        </div>
      </div>
    `;
}

const recentProjects = document.getElementById('recent-projects');
let projectsShowing = -1 +1;

function insertProjects(added) {
  for (let i = projectsShowing; i < added; i++) {
    recentProjects.innerHTML += createProjectCard(codingProjects[i]);
  }
}

function loadProjects() {
  // sort projects by date
  codingProjects.sort((a, b) => new Date(b.date) - new Date(a.date));

  let added = 0;
  if (codingProjects.length < projectsShowing + 1) {
    added = codingProjects.length;
  }
  else {
    added = projectsShowing + 1;
  }

  insertProjects(added);
  projectsShowing = projectsShowing + added;
}