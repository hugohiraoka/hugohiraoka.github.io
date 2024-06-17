
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
    document.getElementById("mySidenav").style.transition = "width 0s"; // Remove transition
    document.getElementById("mySidenav").style.width = "0";
}

// JavaScript to handle the scroll to top functionality
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Function to check if the arrow should be displayed
    function checkScroll() {
        if (document.documentElement.scrollHeight > window.innerHeight) {
            scrollToTopBtn.style.display = (window.scrollY > 100) ? 'block' : 'none';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    // Scroll event to check the scroll position
    window.addEventListener('scroll', checkScroll);

    // Initial check on page load
    checkScroll();

    // Click event to scroll to top
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


//This Repo

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Function to fetch repository information from thisrepo.txt
    function fetchRepositoryInfo() {
        console.log("Fetching repository information...");
        //enter location of file. Use file thisrepo.txt
        fetch('thisrepo.txt') // Replace with your actual URL
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                console.log("File content:", data);
                parseRepositoryInfo(data); // Process the fetched data
            })
            .catch(error => {
                console.error("Error fetching or parsing repository information:", error);
            });
    }

    // Function to parse repository information data
    function parseRepositoryInfo(data) {
        const line = data.trim();
        console.log("Parsed line:", line);

        const [title_repo, link_repo] = line.split(', ').map(entry => entry.trim());

        if (!title_repo || !link_repo) {
            console.error("Invalid data format: title or link is empty");
            return;
        }

        console.log("Title:", title_repo, "Link:", link_repo);
        updateRepositoryLink(title_repo, link_repo);
    }

    // Function to update the repository link in the HTML
    function updateRepositoryLink(title_repo, link_repo) {
        const repoLink = document.querySelector('.repo-link');
        const notebookNameLink = document.querySelector('.notebookname-link');

        if (repoLink && notebookNameLink) {
            repoLink.href = link_repo;
            notebookNameLink.textContent = title_repo;
            notebookNameLink.href = link_repo;
        } else {
            console.error("HTML elements not found");
        }
    }

    // Fetch repository information after DOM is loaded
    fetchRepositoryInfo();
});



// Repositories

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Function to fetch repositories
    function fetchRepositories() {
        console.log("Fetching repositories...");
        // enter location of file. Use repositories.txt
        fetch('repositories.txt')
            .then(response => response.text())
            .then(data => {
                console.log("File content:", data);
                parseRepositoryData(data); // Process the fetched data
            })
            .catch(error => {
                console.error("Error fetching or parsing repositories:", error);
            });
    }

    // Function to parse repository data
    function parseRepositoryData(data) {
        const lines = data.trim().split('\n');
        console.log("Parsed lines:", lines);

        lines.forEach(line => {
            const [text, link] = line.split(',').map(entry => entry.trim());
            console.log("Text:", text, "Link:", link);
            // Add repository entry to repositories div
            addRepositoryEntry(text, link);
        });
    }

    // Function to add repository entry to the repositories div
    function addRepositoryEntry(text, link) {
        // Create list item (li) element
        const listItem = document.createElement('li');
        listItem.style.display = 'flex'; // Use flexbox for layout
        listItem.style.alignItems = 'center'; // Center items vertically
        listItem.style.marginBottom = '20px'; // Vertical gap between items

        // Create a container div for image and anchor
        const contentContainer = document.createElement('div');
        contentContainer.style.display = 'flex'; // Use flexbox for layout
        contentContainer.style.alignItems = 'center'; // Center items vertically
        contentContainer.style.marginRight = '10px'; // Gap from the right edge of sidenav

        // Create anchor (a) element for the link
        const anchor = document.createElement('a');

        //create image element
        const image = document.createElement('img');
        image.src = 'https://i.imgur.com/XweAzeK.png'; // Image URL
        image.alt = 'icon';
        image.width = 30;
        image.height = 30;
        image.style.marginRight = '15px'; // Gap between image and text

        anchor.setAttribute('href', link);
        anchor.textContent = text;
        anchor.style.textDecoration = 'none'; // Remove underline if needed
        anchor.style.color = '#717982'; // Text color
        anchor.style.fontSize = '16px'; // Font size
        anchor.style.paddingTop = '5px'; // Bottom padding for text
        anchor.style.lineHeight = '20px'; // Ensure image and text are vertically aligned

        // Append anchor to list item
        listItem.appendChild(image);
        listItem.appendChild(anchor);

        // Append the container div to the list item
        listItem.appendChild(contentContainer);

        // Add event listeners for hover effect
        listItem.addEventListener('mouseover', function() {
            this.classList.add('hovered'); // Add CSS class on hover
        });

        listItem.addEventListener('mouseout', function() {
            this.classList.remove('hovered'); // Remove CSS class on mouseout
        });

        // Get the repositories div container
        const repositoriesList = document.getElementById('repositories-list');

        // Append list item to repositories div
        repositoriesList.appendChild(listItem);
    }

    // Fetch repositories after DOM is loaded
    fetchRepositories();
});
