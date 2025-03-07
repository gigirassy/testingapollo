        document.addEventListener("DOMContentLoaded", function () {
            // Set your repository details here
            const owner = "gigirassy";  // Replace with your GitHub username or organization
            const repo = "testingapollo";  // Replace with your repository name

            // GitHub API URL to fetch commits
            const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

            // Fetch the commit details
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data && data.length > 0) {
                        // Get the date of the most recent commit
                        const recentCommitDate = data[0].commit.author.date;
                        const formattedDate = new Date(recentCommitDate).toLocaleString();

                        // Display the date in the HTML
                        document.getElementById("commit-date").textContent = `${formattedDate}`;
                    } else {
                        document.getElementById("commit-date").textContent = "Error, tell Nune.";
                    }
                })
                .catch(error => {
                    console.error("Error fetching commit data:", error);
                    document.getElementById("commit-date").textContent = "Error loading commit data.";
                });
        });
    </script>
