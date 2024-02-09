/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    // templesElement.innerHTML = '';
    temples.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
async function getTemples() {
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json();
        templeList = data
        displayTemples(templeList)
    }
}

/* reset Function */
function reset(){
    templesElement.innerHTML = '';
}

/* filterTemples Function */
function filterTemples(temples){
    reset();
    let filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            let utahTemples = temples.filter(temples => temples.location.toLowerCase().includes('utah'));
            displayTemples(utahTemples);
            break;
        
        case 'notutah':
            let nonutahTemples = temples.filter(temples => !temples.location.toLowerCase().includes('utah'));
            displayTemples(nonutahTemples);
            break;
         
        case 'older':
            let olderTemples = temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(", ")[0]);
                return dedicatedYear < 1950
            });
            displayTemples(olderTemples);
            break;
        
        case 'all':
            displayTemples(temples);
            break;    

        case 'alphabetical':
            let sortedTemples = temples.slice().sort((a, b) => {
                return a.templeName.localeCompare(b.templeName);
            });
            displayTemples(sortedTemples);
            break;
    }   
}

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {
    filterTemples(templeList)});