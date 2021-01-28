const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const conformAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const movies=[];
const clearMovieInput = () =>{
    for(const usrinput of userInputs)
    {
        usrinput.value = '';
    }

};
const updateUi = () => {
    if (movies.length === 0)
    {
       entryTextSection.style.display = 'block';
    }
    else{
        entryTextSection.style.display = 'none';
    }
};
const renderNewMovieElement = (title,imageUrl,rating) => {

const newMovieElement = document.createElement('li');
newMovieElement.className = 'movie-element';
newMovieElement.innerHTML = `
<div class="movie-element__image">
<img src="${imageUrl}" alt="${title}">
</div>
<div class="movie-element__info">
<h2>${title}</h2>
<p>${rating}/5 stars</p>
</div>

`;
const listRoot = document.getElementById('movie-list');
listRoot.append(newMovieElement);

};
 

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};
const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if(titleValue.trim() === '' || imgUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5)
    {
        alert('enter valid values');
        return;
    }
    const newMovie = {
        title:titleValue,
        image:imgUrlValue,
        rating:ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.title,newMovie.image,newMovie.rating);
    updateUi();



};
    

const toggleMovieModal = () =>{
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();

};
const cancelAddMovieHandler = () => {
    toggleMovieModal();
};
const backdropClickHandler = () => {
    toggleMovieModal();

};
startAddMovieButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
//cancelAddMovieButton.addEventListener('click',cancelAddMovie);
cancelAddMovieButton.addEventListener('click',cancelAddMovieHandler);
conformAddMovieButton.addEventListener('click',addMovieHandler);