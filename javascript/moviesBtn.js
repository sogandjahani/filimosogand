
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
