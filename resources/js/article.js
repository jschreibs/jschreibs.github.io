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
                    const articleContainer = document.createElement('div');
                    articleContainer.classList.add('articleContainerA');
          
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
          
                    const articleBody = document.createElement('div');
                    articleBody.innerHTML = `<div class="articleBody">${data.body}</div>`;
          
                    // Append elements to the data row
                    dataRow.appendChild(articleDate);
                    dataRow.appendChild(articleTitle);
                    dataRow.appendChild(articleAuthor);
                    dataRow.appendChild(articleBody);
          
                    // Append rows to containers
                    articleContainer.appendChild(imageRow);
                    articleContainer.appendChild(dataRow);
                    container.appendChild(articleContainer);
                }
            });

            if (container.children.length === 0) {
                const noArticleFound = document.createElement('div');
                noArticleFound.textContent = 'No article found.';
                container.appendChild(noArticleFound);
            }
        })
});