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


  document.addEventListener('DOMContentLoaded', function () {
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
                  articleContainer.classList.add('articleContainer');
                  articleContainer.innerHTML = `
                      <h6 class="articleDate">${data.date}</h6>
                      <h1 class="articleTitle">${data.title}</h1>
                      <h5 class="articleAuthor">${data.author}</h5>
                      <div class="articleSummary">${data.summary}</div>
                  `;
                  articleLink.appendChild(articleContainer)
                  container.appendChild(articleLink);
              }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        })
});