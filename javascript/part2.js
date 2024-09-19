let movies, series;
const moviesDiv = document.querySelector("#moviesContent");
const seriesDiv = document.querySelector("#seriesContent");
const backgroundImage = document.querySelector(".favourite__info");
const boxTitle = document.querySelector(".favorite__info__title");
const boxLogo = document.querySelector(".banner-logo");
const boxDic = document.querySelector(".favorite__info__dic");
const boxDec = document.querySelector(".favorite__info__dec");

// این تابع برای نمایش اطلاعات فیلم‌های انتخابی است
const movieClickHandler = (index) => {
  const { background, title, logo, dic, dec } = movies[index];
  backgroundImage.style.backgroundImage = `url(${background})`;
  boxTitle.textContent = title;
  boxLogo.src = logo;
  boxDic.textContent = `کارگردان : ${dic}`;
  boxDec.textContent = dec;
};

// این تابع برای نمایش اطلاعات سریال‌های انتخابی است
const seriesClickHandler = (index) => {
  const { background, title, logo, dic, dec } = series[index];
  backgroundImage.style.backgroundImage = `url(${background})`;
  boxTitle.textContent = title;
  boxLogo.src = logo;
  boxDic.textContent = `کارگردان : ${dic}`;
  boxDec.textContent = dec;
};

// این تابع برای بارگذاری داده‌ها از فایل JSON و نمایش آن‌ها است
const movie = async () => {
  try {
    const response = await axios.get("/film.json");
    const data = response.data;
    movies = data.movies;
    series = data.series;

    // ایجاد و نمایش عناصر مربوط به سریال‌ها
    series.forEach((item, index) => {
      seriesDiv.innerHTML += `
        <div tabindex="0" class="min-w-[130px] serDiv min-h-[170px] desktop:opacity-75 desktop:w-[165px] desktop:h-[220px] bg-no-repeat cursor-pointer bg-center bg-cover rounded-lg hover:opacity-100 transition-all" 
        onclick="seriesClickHandler(${index})" 
        style="background-image: url(${item.imageUrl});"></div>`;
    });

    // ایجاد و نمایش عناصر مربوط به فیلم‌ها
    movies.forEach((item, index) => {
      moviesDiv.innerHTML += `
        <div tabindex="0" class="min-w-[130px] serDiv transition-all desktop:w-[165px] desktop:opacity-75 desktop:h-[220px] cursor-pointer min-h-[170px] bg-no-repeat bg-center bg-cover hover:opacity-100 rounded-lg" 
        onclick="movieClickHandler(${index})"  
        style="background-image: url(${item.banner});"></div>`;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// فراخوانی تابع برای بارگذاری و نمایش داده‌ها
movie();


  const moviesBtn = document.getElementById("moviesBtn");
  const seriesBtn = document.getElementById("seriesBtn");
  const moviesContent = document.getElementById("moviesContent");
  const seriesContent = document.getElementById("seriesContent");
  moviesBtn.addEventListener("click", () => {
    moviesContent.classList.remove("hidden");
    moviesContent.classList.add("flex");
    seriesContent.classList.add("hidden");
    seriesContent.classList.remove("flex");
    moviesBtn.classList.add("active");
    seriesBtn.classList.remove("active");
  });
  seriesBtn.addEventListener("click", () => {
    seriesContent.classList.remove("hidden");
    seriesContent.classList.add("flex");
    moviesContent.classList.add("hidden");
    moviesContent.classList.remove("flex");
    seriesBtn.classList.add("active");
    moviesBtn.classList.remove("active");
  });
