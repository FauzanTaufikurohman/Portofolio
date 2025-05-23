<template>
  <section id="skills" class="skills-section">
    <div class="container text-center py-5">
      <h2 class="mb-4 text-light mt-5">Skills</h2>
      <p class="text-light mb-5">Technical skills I possess</p>

      <div class="row justify-content-center animate__animated fade-in">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="col-6 col-md-4 col-lg-3 mb-4"
        >
          <div class="skill-card p-4">
            <a :href="skill.href" target="_blank" class="text-decoration-none">
              <i :class="skill.icon" :style="{ color: skill.color }"></i>
            </a>
            <h5 class="mt-3 text-white">{{ skill.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      skills: [
        {
          name: "HTML",
          icon: "fab fa-html5",
          color: "#e34c26",
          href: "https://html.com/html5/",
        },
        {
          name: "CSS",
          icon: "fab fa-css3-alt",
          color: "#264de4",
          href: "https://www.w3schools.com/Css/",
        },
        {
          name: "JavaScript",
          icon: "fab fa-js",
          color: "#f0db4f",
          href: "https://www.w3schools.com/js/",
        },
        {
          name: "Vue.js",
          icon: "fab fa-vuejs",
          color: "#42b883",
          href: "https://vuejs.org/",
        },
        {
          name: "PHP",
          icon: "fab fa-php",
          color: "#777bb4",
          href: "https://www.php.net/",
        },
        {
          name: "CodeIgniter",
          icon: "fas fa-fire",
          color: "#ee4623",
          href: "https://codeigniter.com/",
        },
        {
          name: "GitHub",
          icon: "fab fa-github",
          color: "#ffffff",
          href: "https://github.com",
        },
        {
          name: "Laravel",
          icon: "fab fa-laravel",
          color: "#ff2d20",
          href: "https://laravel.com",
        },
      ],
    };
  },
  mounted() {
    const animatedElements = this.$el.querySelectorAll(".animate__animated");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            // Bersihkan animasi sebelumnya
            target.classList.remove(
              "fadein",
              "active"
            );

            void target.offsetWidth; // Force reflow

            // Tentukan arah animasi berdasarkan class bantu
            if (target.classList.contains("fade-in")) {
              target.classList.add("fadein", "active");
            } 
          } else {
            // Reset agar animasi bisa diulang
            target.classList.remove(
              "fadein",
              "active"
            );
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  },
};
</script>

