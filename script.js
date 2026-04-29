// Product Filtering Logic
const categoryButtons = document.querySelectorAll('.cat-btn');
const productCards = document.querySelectorAll('.filter-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // 2. Add active class to the clicked button
        button.classList.add('active');

        // 3. Get the filter value (e.g., 'electronics', 'fashion')
        const filterValue = button.getAttribute('data-filter');

        // 4. Show or hide products based on the filter
        productCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hide-product');
            } else {
                if (card.classList.contains(filterValue)) {
                    card.classList.remove('hide-product');
                } else {
                    card.classList.add('hide-product');
                }
            }
        });
    });
});

// FAQ Accordion Logic
const faqButtons = document.querySelectorAll('.faq-btn');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the active class on the button for the arrow flip
        button.classList.toggle('active');
        
        // Find the text content inside this specific FAQ
        const content = button.nextElementSibling;
        
        // Toggle the show class to open or close the text
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            content.classList.add('show');
        }
    });
});