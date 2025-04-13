const projects = {
    addToCard: {
      title: "Add-to-Card",
      description: "An interactive shopping cart interface using localStorage.",
      link: "https://ayanhabib67.github.io/Add-to-Card/",
      image: ""
    },
    searchingApp: {
      title: "Searching App",
      description: "A real-time search interface using JavaScript filtering.",
      link: "https://ayanhabib67.github.io/Searching-Car-App/",
      image: "c:\Users\ADMINI~1\AppData\Local\Temp\Rar$DRa8156.14233\Add to Card_page-0002.jpg"
    },
    toDoAppUpdated: {
      title: "To-Do-App-updated",
      description: "A task manager app with edit, delete, and save functionality.",
      link: "https://ayanhabib67.github.io/To-Do-App-updated/",
      image: "https://via.placeholder.com/286x180?text=To-Do-App"
    },
    githubProfileFetcher: {
      title: "GitHub Profile Fetcher",
      description: "Fetch and display GitHub user info via GitHub API.",
      link: "https://ayanhabib67.github.io/GitHub-Profile-Fetcher/",
      image: "https://via.placeholder.com/286x180?text=GitHub+Fetcher"
    },
    passwordGenerator: {
      title: "Password Generator",
      description: "A secure password generator with customizable options.",
      link: "https://ayanhabib67.github.io/password-generator/",
      image: "https://via.placeholder.com/286x180?text=Password+Generator"
    },
    postApp: {
        title: "Post App",
        description: "A simple app to create, view, and manage posts.",
        link: "https://ayanhabib67.github.io/post-App/",
        image: "https://via.placeholder.com/286x180?text=Post+App"
      }
  };
  
  
  
  let caards = document.getElementById("cards");
  

caards.innerHTML += Object.values(projects).map(item => `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        
        <div class="card-body d-flex flex-column">
          <h1 class="card-title">${item.title}</h1>
          <p class="card-text">Description : ${item.description}</p>
          <button class="btn btn-primary mt-auto" onclick="window.open('${item.link}', '_blank' )">Open Project</button>
        </div>
      </div>
    </div>
  `).join('');
  
function openProject() {
    var src = "https://ayanhabib67.github.io/Add-to-Card/";
    window.open(src, "_blank");
  }

