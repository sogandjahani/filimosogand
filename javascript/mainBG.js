
    
    const backgroundDiv = document.getElementById('background');
    const imageInterval = 3000; // تغییر تصویر هر 10 ثانیه
    
    async function fetchImages() {
        try {
            const response = await fetch('https://amyrali18.github.io/filimo-api/bg.json');
            const images = await response.json();
            return images;
        } catch (error) {
            console.error('Error fetching images:', error);
            return [];
        }
    }
    
    async function updateBackgroundImage(images) {
        if (images.length === 0) return;
        const randomIndex = Math.floor(Math.random() * images.length);
        const imageUrl = images[randomIndex].url;
        backgroundDiv.style.backgroundImage = `url(${imageUrl})`;
    }
    
    // بارگذاری تصاویر و تنظیم بک‌گراند
    fetchImages().then(images => {
        updateBackgroundImage(images);
        setInterval(() => updateBackgroundImage(images), imageInterval);
    });

