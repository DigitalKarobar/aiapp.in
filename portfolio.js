// Fetch data from data.json and generate portfolio items dynamically
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const portfolioGrid = document.getElementById('portfolioGrid');

    data.forEach(item => {
      const portfolioItem = document.createElement('div');
      portfolioItem.classList.add('portfolio-item');

      const link = document.createElement('a');
      link.href = item.link;

      const image = document.createElement('img');
      image.src = item.imageUrl;
      image.alt = item.title;

      link.appendChild(image);
      portfolioItem.appendChild(link);

      const title = document.createElement('h3');
      title.textContent = item.title;
      portfolioItem.appendChild(title);

      portfolioGrid.appendChild(portfolioItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
