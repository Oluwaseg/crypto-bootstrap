// Function to fetch and display crypto news articles
async function fetchCryptoNews() {
  const apiUrl = `http://localhost:3000/news`; // Point to your proxy server

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const newsArticles = document.getElementById("newsArticles");

    // Clear any existing articles
    newsArticles.innerHTML = "";

    // Display the latest news articles
    data.articles.slice(0, 5).forEach((article) => {
      const articleCard = document.createElement("div");
      articleCard.classList.add("col-md-6", "mb-4");

      articleCard.innerHTML = `
            <div class="card-news">
              <img src="${article.urlToImage}" class="card-img-top" alt="News Image">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
              </div>
            </div>
          `;

      newsArticles.appendChild(articleCard);
    });
  } catch (error) {
    console.error("Error fetching crypto news:", error);
  }
}

// Fetch crypto news articles when the page loads
fetchCryptoNews();
