<template>
  <section id="tentang" class="container py-5 text-light">
    <div class="row align-items-center py-5 flex-column flex-md-row">
      <div
        class="col-12 col-md-4 text-center text-md-start mt-4 mt-md-0 animate__animated fade-in"
      >
        <img
          src="../../assets/images/Zan.webp"
          alt="Foto HellZan"
          class="rounded-circle border photo-animate"
        />
      </div>

      <div
        class="col-12 col-md-8 text-center text-md-start animate__animated fade-in mt-4 mt-md-0"
      >
        <h2 class="text-white mb-3">Tentang Saya</h2>
        <p class="lead">
          I am a web and IoT developer who enjoys exploring the latest
          technologies. I continuously learn and grow to create innovative and
          effective solutions.
        </p>
        <p>
          With experience in various technologies, I focus on dynamic web
          development and IoT projects that connect the real world with digital
          solutions.
        </p>

        <h5 class="text-white mt-4">My Experience</h5>
        <ul class="list-unstyled d-flex flex-column justify-content-center">
          <li class="experience-item">Web Development with Vue.js & Laravel.</li>
          <li class="experience-item">IoT: ESP32 & Arduino.</li>
          <li class="experience-item">Database: MySQL</li>
        </ul>

        <h5 class="text-white mt-4">My Motto</h5>
        <p class="fw-small">
          "Innovation is the key to unlocking a world full of possibilities"
        </p>
        <div
          class="w-100 d-flex justify-content-center justify-content-md-start"
        >
          <a href="/CVFAUZAN.pdf" download class="btn rounded-pill">
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
h2 {
  text-shadow: 2px 2px 5px rgba(0, 191, 255, 0.8);
}

/* Animasi hover pada item pengalaman */
.experience-item {
  transition: transform 0.3s ease, color 0.3s ease;
}

.experience-item:hover {
  color: #0ef;
  transform: scale(1.05);
}

.photo-animate {
  width: 300px;
  max-width: 80vw;
  border-radius: 50%;
  padding: 8px;
  background: linear-gradient(to bottom, #0ef, #e040fb);
  box-shadow: 0 -10px 30px 10px #0ef, 0 10px 30px 10px #e040fb;
  display: inline-block;
  position: relative;
}

.photo-animate::before {
  content: "";
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #0ef, #e040fb);
  z-index: -1;
  filter: blur(25px);
  opacity: 0.8;
}

.photo-animate img {
  width: 100%;
  border-radius: 50%;
  display: block;
  border: 6px solid white;
}
.lead {
  text-align: justify;
}

@media (max-width: 992px) {
  .photo-animate {
    width: 200px;
    max-width: 40vw;
  }
}
/* Responsive image size */
@media (max-width: 768px) {
  .photo-animate {
    width: 180px;
    max-width: 60vw;
  }
}

@media (max-width: 480px) {
  .photo-animate {
    width: 120px;
    max-width: 80vw;
  }
}

.photo-animate:hover {
  animation: glowEffect 2s ease-in-out infinite alternate;
}

.photo-animate {
  animation: parallax 4s infinite alternate;
}

@keyframes glowEffect {
  50% {
    box-shadow: 0 -10px 50px 20px #0ef, 0 10px 50px 20px #e040fb;
  }
  100% {
    box-shadow: 0 -10 px 30px 10px #0ef, 0 10px 30px 10px #e040fb;
  }
}

@keyframes parallax {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

@media (max-width: 480px) {
  h2,
  h5 {
    font-size: 1.2rem;
  }
  .lead {
    font-size: 1rem;
  }
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>