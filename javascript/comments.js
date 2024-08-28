
  const commSwiper = document.querySelector("#comm__swiper")
async function fetchComments() {
    try {
        const response = await fetch('https://amyrali18.github.io/filimo-api/comments.json');
        const comments = await response.json();
        comments.map((comment)=>{
            commSwiper.insertAdjacentHTML("afterbegin", `
                <div class="swiper-slide comment__slide bg-[#ffffff05] border border-solid border-[#33353d] rounded-xl relative p-6 pb-10">
        <div class="slide__top flex flex-row justify-between">
          <div class="comm__info flex flex-row gap-2">
            <img src="./images/info.webp" class="w-6 h-6" alt="info">
            <span class="text-sm text-[#959ba2]">${comment.name}</span>
          </div>
          <img src="./images/virgol.webp" alt="">
        </div>
        <div class="com__text"><span class="text-xs text-[whitesmoke] ">${comment.comment}</span></div>
        
      </div>`)
        })
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}
fetchComments()

