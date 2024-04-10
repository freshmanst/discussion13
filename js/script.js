
const secondFigureCaption = document.querySelectorAll('#thumbs figure figcaption')[1].innerText;
alert(secondFigureCaption);

function changeDisplay(event) {
    const imageSrc = event.target.src;
    const imageAlt = event.target.alt;
    const displayDiv = document.getElementById('display');
    

    displayDiv.style.backgroundImage = `url(${imageSrc})`;
    displayDiv.innerText = imageAlt;


    event.target.style.visibility = 'hidden';
}


function revertDisplay(event) {
    const displayDiv = document.getElementById('display');
    displayDiv.style.backgroundImage = '';
    displayDiv.innerText = 'Hover over an image below to display the image and the alt text.';
    
    event.target.style.visibility = 'visible';
}

