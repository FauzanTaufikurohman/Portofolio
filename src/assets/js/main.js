document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate__animated");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          // Reset dulu agar animasi bisa diulang
          target.classList.remove("fadein", "active");
          void target.offsetWidth; // force reflow
          // Trigger ulang animasi
          if (target.classList.contains("fade-in")) {
            target.classList.add("fadein", "active");
          }
        } else {
          // Hapus agar bisa retrigger saat masuk viewport lagi
          target.classList.remove("fadein", "active");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
});
