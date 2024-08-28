// Function to highlight bold words by changing their color to green
function highlight() {
    // Select all elements with the <strong> tag
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change its color to green
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

// Function to revert bold words back to their normal color (black)
function return_normal() {
    // Select all elements with the <strong> tag
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change its color back to black
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}
