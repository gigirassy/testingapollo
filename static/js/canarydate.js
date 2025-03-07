document.addEventListener("DOMContentLoaded", function () {
    const owner = "gigirassy";  // Replace with your GitHub username or organization
    const repo = "testingapollo";  // Replace with your repository name
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const recentCommitDate = new Date(data[0].commit.author.date).toLocaleDateString();
                document.getElementById("commit-date").textContent = recentCommitDate;
            }
        })
        .catch(error => {
            console.error("Error fetching commit data:", error);
            document.getElementById("commit-date").textContent = "Error";
        });
});
