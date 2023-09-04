document.addEventListener('DOMContentLoaded', function () {
    fetch('resources/articles.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network Response Error');
            }
            return response.json();
        })
        .then(articles => {
            const container = document.querySelector('.articleBackground');
            const queryString = window.location.search;
            const requestedLink = queryString.replace('?', '');

            articles.forEach(data => {
                if(data.link === requestedLink){
                    const articlePage = document.createElement('div');
                    articlePage.classList.add('articlePage');
            
                    articlePage.innerHTML = `
                        <h6 class="articleDate">${data.date}</h6>
                        <h1 class="articleTitle">${data.title}</h1>
                        <h5 class="articleAuthor">${data.author}</h5>
                        <div class="articleBody">${data.body}</div>
                    `;
    
                    container.appendChild(articlePage);
                }
            });

            if (container.children.length === 0) {
                const noArticleFound = document.createElement('div');
                noArticleFound.textContent = 'No article found.';
                container.appendChild(noArticleFound);
            }
        })
});