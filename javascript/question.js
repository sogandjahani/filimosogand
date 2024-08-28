
  document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll('[id^="question"]');
  
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const answerId = question.id.replace("question", "answer");
        const answer = document.getElementById(answerId);
        const icon = question.querySelector("svg");
        const qText = question.querySelector("p");
  
        // بررسی وضعیت فعلی سوال
        const isCurrentlyOpen = !answer.classList.contains("hidden");
  
        // بستن تمام جواب‌ها و بازگرداندن رنگ متن به حالت اصلی
        questions.forEach((q) => {
          const ansId = q.id.replace("question", "answer");
          const ans = document.getElementById(ansId);
          const icn = q.querySelector("svg");
          const qTxt = q.querySelector("p");
  
          ans.classList.add("hidden");
          ans.classList.remove("block");
          icn.classList.add("rotate-45");
          qTxt.classList.remove("!text-[#f4843f]");
        });
  
        // باز یا بسته کردن جواب فعلی بر اساس وضعیت قبلی آن
        if (!isCurrentlyOpen) {
          answer.classList.remove("hidden");
          answer.classList.add("block");
          icon.classList.remove("rotate-45");
          qText.classList.add("!text-[#f4843f]");
        }
      });
    });
  });
