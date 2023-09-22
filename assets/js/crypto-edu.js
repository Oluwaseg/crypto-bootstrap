// Sample educational content (you can replace this with your own content)
const cryptoEducationContent = [
  {
    title: "What Is Cryptocurrency?",
    description: "Learn the basics of cryptocurrency and how it works.",
    link: "https://example.com/what-is-cryptocurrency",
  },
  {
    title: "Getting Started with Bitcoin",
    description: "A step-by-step guide on how to start using Bitcoin.",
    link: "https://example.com/getting-started-with-bitcoin",
  },
  {
    title: "Blockchain Technology Explained",
    description:
      "Understand the underlying technology behind cryptocurrencies.",
    link: "https://example.com/blockchain-technology-explained",
  },
  {
    title: "Crypto Wallets and Security",
    description:
      "Discover the importance of crypto wallets and how to keep your assets secure.",
    link: "https://example.com/crypto-wallets-security",
  },
  {
    title: "Cryptocurrency Investment Strategies",
    description: "Explore various investment strategies in the crypto market.",
    link: "https://example.com/crypto-investment-strategies",
  },
  {
    title: "Decentralized Finance (DeFi)",
    description:
      "Learn about decentralized financial services and their impact on finance.",
    link: "https://example.com/defi-explained",
  },
  {
    title: "Smart Contracts and DApps",
    description:
      "Discover how smart contracts work and their role in decentralized applications (DApps).",
    link: "https://example.com/smart-contracts-dapps",
  },
  {
    title: "Crypto Mining Explained",
    description:
      "Learn about cryptocurrency mining and the process of creating new coins.",
    link: "https://example.com/crypto-mining-explained",
  },
  {
    title: "Crypto Regulations and Legal Framework",
    description:
      "Understand the legal aspects and regulations surrounding cryptocurrencies.",
    link: "https://example.com/crypto-regulations",
  },
];
// Function to display educational content in the Crypto Learning Center
function displayCryptoEducation() {
  const cryptoLearningSection = document.querySelector(".crypto-learning .row");

  cryptoEducationContent.forEach((item) => {
    const educationCard = document.createElement("div");
    educationCard.classList.add("col-md-4", "mb-4");

    educationCard.innerHTML = `
        <div class="card-container">
          <div class="edu-card">
            <div class="edu-body">
              <h5 class="edu-title">${item.title}</h5>
              <p class="text">${item.description}</p>
              <a href="${item.link}" target="_blank" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      `;

    cryptoLearningSection.appendChild(educationCard);
  });
}

// Call the function to display educational content when the page loads
displayCryptoEducation();
