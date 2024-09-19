
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.getElementById('faq-container');

    // Fetch FAQs from API
    fetch('../../json/dbquestion.json') // Replace with your API URL
        .then(response => response.json())
        .then(data => {
            data.forEach(faq => {
                const faqItem = document.createElement('div');
                faqItem.classList.add('faq-item');

                const question = document.createElement('div');
                question.classList.add('faq-question');

                const questionText = document.createElement('span');
                questionText.textContent = faq.question;

                const toggleIcon = document.createElement('span');
                toggleIcon.classList.add('toggle-icon');
                toggleIcon.textContent = '+';

                question.appendChild(questionText);
                question.appendChild(toggleIcon);
                
                const answer = document.createElement('div');
                answer.classList.add('faq-answer');
                answer.textContent = faq.answer;

                question.addEventListener('click', () => {
                    const isOpen = question.classList.toggle('open');
                    question.classList.toggle('active', isOpen);
                    toggleIcon.textContent = isOpen ? 'x' : '+';
                    answer.classList.toggle('open', isOpen);
                });

                faqItem.appendChild(question);
                faqItem.appendChild(answer);
                faqContainer.appendChild(faqItem);
            });
        })
        .catch(error => console.error('Error fetching FAQs:', error));
});
//search
const searchIcon = document.getElementById('searchIcon');
const fullscreenSearch = document.getElementById('fullscreenSearch');
const closeBtn = document.getElementById('closeBtn');

// Show fullscreen search when clicking the icon
searchIcon.addEventListener('click', () => {
    fullscreenSearch.classList.add('active');
});

// Hide fullscreen search when clicking the close button
closeBtn.addEventListener('click', () => {
    fullscreenSearch.classList.remove('active');
});

// Close search if clicking outside the input (optional)
fullscreenSearch.addEventListener('click', (e) => {
    if (e.target === fullscreenSearch) {
        fullscreenSearch.classList.remove('active');
    }
});
//search
// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down 200px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
});

// Get elements
const menuIcon = document.getElementById('menuIcon');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const closeBtnfooter = document.getElementById('closeBtnfooter');

// Show fullscreen menu when clicking the icon
menuIcon.addEventListener('click', () => {
    fullscreenMenu.classList.add('active');
    fullscreenMenu.style.display = 'flex'; // Ensure the menu is displayed
});

// Hide fullscreen menu when clicking the close button
closeBtnfooter.addEventListener('click', () => {
    fullscreenMenu.classList.remove('active');
    fullscreenMenu.style.display = 'none'; // Hide the menu
});


// Get elements
const openSectionLink = document.getElementById('openSectionLink');
const fullscreenSection = document.getElementById('fullscreenSection');
const closeBtnlinks = document.getElementById('closeBtnlinks');

// Show fullscreen section when clicking the link
openSectionLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    fullscreenSection.classList.add('active');
});

// Hide fullscreen section when clicking the close button
closeBtnlinks.addEventListener('click', function() {
    fullscreenSection.classList.remove('active');
});