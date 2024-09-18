const projects = [
    {
        title: "World Mapping Application",
        description: "A GIS application that allows users to view geospatial data through the OpenStreetMap API.",
        tools: "C++, OpenStreetMap API, OpenGL",
        link: "https://sendspark.com/share/2qgjgg2qgi2r6czh"
    },
    {
        title: "Real Time Virtual Library",
        description: "A desktop application that allows users to view their sorted books.",
        tools: "Python, Tkinter",
        link: "#"
    },
    {
        title: "Chess Game",
        description: "A desktop application that allows users to view their sorted books.",
        tools: "Python, Tkinter",
        link: "#"
    },
    {
        title: "Checkers Game",
        description: "A desktop application that allows users to view their sorted books.",
        tools: "Python, Tkinter",
        link: "#"
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

function insertProjects() {
    for (let i = 0; i < projects.length; i++) {
        recentProjects.innerHTML += createProjectCard(projects[i]);
    }
}

function loadProjects() {
    insertProjects();
}

document.addEventListener('DOMContentLoaded', function () {
    loadProjects();
});