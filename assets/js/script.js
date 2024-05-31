document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('[data-carousel-item]');
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');
    let currentIndex = 0;
    let intervalId;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
            item.classList.toggle('active', i === index);
            
            if (i === index) {
                item.style.animation = 'none';
                item.offsetHeight; 
                item.style.animation = '';
            }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    prevButton.addEventListener('click', function() {
        clearInterval(intervalId);
        prevItem();
        startCarousel();
    });

    nextButton.addEventListener('click', function() {
        clearInterval(intervalId);
        nextItem();
        startCarousel();
    });

    function startCarousel() {
        intervalId = setInterval(nextItem, 6000);
    }

    showItem(currentIndex);
    startCarousel();
});
