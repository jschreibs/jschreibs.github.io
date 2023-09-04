document.addEventListener('DOMContentLoaded', function () {
    fetch('../articles/articles.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network Response Error');
            }
            return response.json();
        })
        .then(articles => {
            const container = document.querySelector('.blogBackground');

            articles.forEach(data => {
                const articleContainer = document.createElement('div');
                articleContainer.classList.add('articleContainer');
        
                articleContainer.innerHTML = `
                    <h6 class="articleDate">${data.date}</h6>
                    <h1 class="articleTitle">${data.title}</h1>
                    <h5 class="articleAuthor">${data.author}</h5>
                    <span class="articleSummary">${data.body}</span>
                `;

                container.appendChild(articleContainer);
            });
        })
});