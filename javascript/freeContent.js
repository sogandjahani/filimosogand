const freeSwiper = document.querySelector("#free__content");
async function fetchContent() {
  try {
    const response = await fetch(
      "https://amyrali18.github.io/filimo-api/freeContent.json"
    );
    const contents = await response.json();
    contents.map((content) => {
      freeSwiper.insertAdjacentHTML(
        "afterbegin",
        `
            <div  class="swiper-slide bg-inherit justify-center flex items-center relative"><img class="rounded-[10px] opacity-70" src="${content.imgUrl}" alt="">
      <div class="text-[whitesmoke] text-center desktop:text-right mt-2 text-xs">${content.name}</div>
    <div class="absolute px-2 py-1 flex justify-center items-center top-1 right-2 bg-[#1d2b1f] text-[#4dab56] text-[10px] leading-4 rounded-3xl gap-1">
      <img src="https://www.filimo.com/assets/web/ui/img-aTf4YPeijZa8ccJZ5xqnw/campaigns/nosub-v_new/icon-play.svg" alt="icon-play" class="w-full">
      رایگان
    </div>
  </div>
  `
      );
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}
fetchContent();
