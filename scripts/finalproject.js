function convertToSpeech() {
    // Getting the text input from the textarea
    const textInput = document.getElementById('text-input').value;
    
    const synth = window.speechSynthesis;
    
    const utterance = new SpeechSynthesisUtterance(textInput);
    
    // Speak the input text
    synth.speak(utterance);
    
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `Spoken: ${textInput}`;
}
// Function to convert text from file to speech

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'a23796890ab448a7a155612d5bf90b6a';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const articles = data.articles;
        const newsContainer = document.getElementById('news-container');

    
        articles.forEach(article => {
        // Creating content for the articles
            const articleContainer = document.createElement('div');
            articleContainer.classList.add('article');

            const title = document.createElement('h2');
            title.textContent = article.title;

            const description = document.createElement('p');
            description.textContent = article.description;

            const image = document.createElement('img');
            image.src = article.urlToImage; 

            const link = document.createElement('a');
            link.textContent = 'Read more';
            link.href = article.url;
            link.target = '_blank';

            // Append containersd to the article container
            articleContainer.appendChild(title);
            articleContainer.appendChild(description);
            articleContainer.appendChild(image);
            articleContainer.appendChild(link);

            // Append the article container to the news container
            newsContainer.appendChild(articleContainer);
            });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  // Event listener for the convert button
  document.getElementById('convert-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    convertToSpeech(textInput);
  });