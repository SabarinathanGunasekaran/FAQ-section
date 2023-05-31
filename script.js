const questionBtns = document.getElementsByClassName('question-btn');

// Add click event listeners to question buttons
for (let i = 0; i < questionBtns.length; i++) {
  questionBtns[i].addEventListener('click', function() {
    const answer = this.nextElementSibling;
    
    // Toggle display of the answer
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
}
const searchInput = document.getElementById('search');
const faqItems = document.getElementsByClassName('faq');

// Add event listener to search input
searchInput.addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();

  for (let i = 0; i < faqItems.length; i++) {
    const question = faqItems[i].getElementsByClassName('question')[0];
    const answer = faqItems[i].getElementsByClassName('answer')[0];

    // Check if the question contains the search term
    if (question.innerText.toLowerCase().indexOf(searchTerm) > -1) {
      faqItems[i].style.display = '';
    } else {
      faqItems[i].style.display = 'none';
    }

    // Hide/show answer based on question visibility
    if (faqItems[i].style.display === 'none') {
      answer.classList.remove('show');
    } else {
      answer.classList.add('show');
    }
  }
});
