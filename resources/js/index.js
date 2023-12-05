document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('a[href="#OurServices"]').addEventListener('click', function (e) {
    e.preventDefault();
  
    const target = document.querySelector('#OurServices');
  
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
    }
  });

  fetch('resources/articles.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Response Error');
        }
        return response.json();
    })
    .then(articles => {
      const container = document.querySelector('.homeBlogPostsContainer');

      articles.forEach(data => {
        if(data.isHighlighted == "yes"){
          const articleLink = document.createElement('a');
          articleLink.classList.add('articleLink');
          articleLink.href = "article.html?" + data.link;

          const articleContainer = document.createElement('div');
          articleContainer.classList.add('articleContainerH');

          // Create the first row for the image
          const imageRow = document.createElement('div');
          imageRow.classList.add('articleImageRow');

          const articleImage = document.createElement('img');
          articleImage.classList.add('articleImage');
          articleImage.src = data.image;

          imageRow.appendChild(articleImage);

          // Create the second row for the rest of the data
          const dataRow = document.createElement('div');
          dataRow.classList.add('articleDataRow');

          const articleDate = document.createElement('div');
          articleDate.classList.add('articleDate');
          articleDate.textContent = data.date;

          const articleTitle = document.createElement('div');
          articleTitle.classList.add('articleTitle');
          articleTitle.textContent = data.title;

          const articleAuthor = document.createElement('div');
          articleAuthor.classList.add('articleAuthor');
          articleAuthor.textContent = data.author;

          const articleSummary = document.createElement('div');
          articleSummary.classList.add('articleSummary');
          articleSummary.textContent = data.summary;

          // Append elements to the data row
          dataRow.appendChild(articleDate);
          dataRow.appendChild(articleTitle);
          dataRow.appendChild(articleAuthor);
          dataRow.appendChild(articleSummary);

          // Append rows to the link
          articleLink.appendChild(imageRow);
          articleLink.appendChild(dataRow);

          // Append link to the container
          articleContainer.appendChild(articleLink);
          container.appendChild(articleContainer);
        }
      });
    })
    .catch(error => {
        console.error('Error:', error);
    }
  )
});