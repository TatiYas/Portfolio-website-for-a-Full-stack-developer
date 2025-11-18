const loadMoreBtn = document.getElementById('two-button');
const visitButtons = document.querySelectorAll('.visit-button');
const listItems = document.querySelectorAll('#list-sites .hidden');
let currentIndex = 0;
const links = [
    'https://spinkll.github.io/Project-javascript-goit/', 
    'https://spinkll.github.io/Project-javascript-goit/good-team',
    'https://klimkovskyi.github.io/CodeCrafters/'
];
let linkIndex = 0;

function checkLoadMoreButton() {
    if (currentIndex >= listItems.length) {
        loadMoreBtn.style.display = 'none'; 
    } else {
        loadMoreBtn.style.display = 'block'; 
    }
}

checkLoadMoreButton();

loadMoreBtn.addEventListener('click', () => {
    let itemsToShow = 3;

    for (let i = currentIndex; i < currentIndex + itemsToShow && i < listItems.length; i++) {
        listItems[i].classList.remove('hidden');
    }

    currentIndex += itemsToShow;
   
    checkLoadMoreButton();
    
});


visitButtons.forEach(button => {
    button.addEventListener('click', function () {
        const currentLink = links[linkIndex];
        if (currentLink) {
            window.open(currentLink, '_blank');
            linkIndex = (linkIndex + 1) % links.length;
        }
    });
});
