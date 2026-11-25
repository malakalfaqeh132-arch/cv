document.addEventListener("DOMContentLoaded", () => {
  // 1. تعبئة أشرطة المهارات بسلاسة عند فتح الصفحة
  const skillItems = document.querySelectorAll(".skill-item");
  requestAnimationFrame(() => {
    skillItems.forEach((item) => {
      const level = item.getAttribute("data-level");
      const fill = item.querySelector(".skill-fill");
      if (fill && level) {
        fill.style.width = `${level}%`;
      }
    });
  });

  // 2. تصفية المشاريع حسب التخصص
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedCategory = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        const shouldShow = selectedCategory === "all" || cardCategory === selectedCategory;
        card.classList.toggle("hidden", !shouldShow);
      });
    });
  });

  // 3. تبديل العبارات الملهمة الهادئة
  const quotes = [
    "«الذكاء الحقيقي في التقنية لا يُقاس بتعقيد الخوارزمية فقط، بل بقدرتها على خدمة الإنسان ببساطة ووضوح.»",
    "«البيانات الصادقة والمنهج الهادئ يصنعان قرارات أوعى وأكثر ثباتاً.»",
    "«كل نموذج ذكي يبدأ بسؤال جيد، وملاحظة دقيقة، وصبر على التجربة والتحسين.»",
    "«أجمل ما في الذكاء الاصطناعي أنه يربط بين المنطق الرياضي والخيال الإنساني.»"
  ];

  let currentQuoteIndex = 0;
  const quoteBanner = document.getElementById("quoteBanner");
  const toggleQuoteBtn = document.getElementById("toggleQuoteBtn");

  if (toggleQuoteBtn && quoteBanner) {
    toggleQuoteBtn.addEventListener("click", () => {
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
      quoteBanner.textContent = quotes[currentQuoteIndex];
    });
  }

  // 4. زر الطباعة أو الحفظ كـ PDF
  const printBtn = document.getElementById("printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
});