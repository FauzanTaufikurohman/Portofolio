<template>
  <section id="home" class="container mt-5 py-5 text-light">
    <div
      class="row align-items-center py-5 d-flex flex-md-row flex-column-reverse"
    >
      <!-- Kolom Kiri: Deskripsi -->
      <div class="col-12 col-md-8 animate__animated fade-in">
        <h1 class="text-white mb-3" style="--i:7">FAUZAN TAUFIKUROHMAN</h1>
        <p class="lead" style="--i:8">
          Active student of Information Technology Study Program at Brawijaya
          University with experience in <span class="text"></span>
        </p>
        <div class="row mt-2">
          <!-- Keterampilan -->
          <div class="col-6 animate" style="--i:9">
            <h5 class="text-white mt-4">My Skills:</h5>
            <ul class="list-unstyled ms-2">
              <li class="skill-item"><span class="fw-bold">• Web :</span> Vue, React, Laravel, Code Igniter</li>
              <li class="skill-item"><span class="fw-bold">• Backend :</span> Node.js, PHP, Laravel</li>
              <li class="skill-item"><span class="fw-bold">• IoT :</span> ESP32, Arduino</li>
              <li class="skill-item"><span class="fw-bold">• Database :</span> MySQL</li>
            </ul>
          </div>

          <!-- Temukan Saya -->
          <div class="col-6">
            <h5 class="text-white animate-top mt-4" style="--i:11">Find Me:</h5>
            <div class="social-icons pt-2 ms-2 d-flex gap-3 flex-wrap">
              <a href="https://github.com/FauzanTaufikurohman" class="animate-top" style="--i:12" target="_blank">
                <i
                  class="fab fa-github p-2 rounded-pill hover"
                  style="font-size: 1.7rem"
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/fauzantaufikurohman/" class="animate-top" style="--i:13"
                target="_blank"
              >
                <i
                  class="fab fa-linkedin p-2 rounded-pill hover"
                  style="font-size: 1.7rem"
                ></i>
              </a>
              <a href="https://www.instagram.com/_hellzan/" class="animate-top" style="--i:14" target="_blank">
                <i
                  class="fab fa-instagram p-2 rounded-pill hover"
                  style="font-size: 1.7rem"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="w-100 d-flex justify-content-center justify-content-md-start mt-3"
        >
          <a href="#tentang" class="btn rounded-pill animate" style="--i:10">
            More About Me
          </a>
        </div>
      </div>

      <!-- Kolom Kanan: Foto -->
      <div class="col-12 col-md-3 text-center animate__animated fade-in animate-top" style="--i:8">
        <img
          src="../../assets/images/Zan.webp"
          alt="Foto HellZan"
          class="rounded-circle photo-animate"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    if (window.Typed) {
      this.typed = new window.Typed(".text", {
        strings: ["Frontend Developer", "Web Designer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    } else {
      console.error("Typed.js is not loaded!");
    }
  },
  beforeDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  },
  unmounted() {
    if (this.typed) {
      this.typed.destroy();
    }
  },
};
</script>

<style>
h1 {
  text-shadow: 2px 2px 5px rgba(0, 191, 255, 0.8);
  animation: slideRight 0.5s ease forwards;
  animation-delay: calc(0.2s * var(--i));
  opacity: 0;
}
p{
  animation: slideRight 0.5s ease forwards;
  animation-delay: calc(0.2s * var(--i));
  opacity: 0;
}
.animate{
  animation: slideRight 0.5s ease forwards;
  animation-delay: calc(0.2s * var(--i));
  opacity: 0;
}
.animate-top{
  animation: slideTop 0.5s ease forwards;
  animation-delay: calc(0.2s * var(--i));
  opacity: 0;
}
.hover {
  display: inline-block; /* penting agar box-shadow bisa terlihat */
  padding: 0.4rem;
  border-radius: 50%; /* opsional untuk efek bulat */
  transition: all 0.3s ease;
}
.hover:hover {
  transform: scale(1.2);
  color: #0ef;
  background-color: rgba(14, 239, 255, 0.1); /* opsional efek latar */
  box-shadow: 0 0 10px #0ef, 0 0 20px #0ef, 0 0 40px #0ef, 0 0 60px #0ef;
}
.text {
  color: #0ef;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 191, 255, 0.8);
}
.skill-item {
  transition: transform 0.3s ease, color 0.3s ease;
}

.skill-item:hover {
  color: #0ef;
  transform: scale(1.05);
}

.social-icons a {
  color: #fff;
  transition: transform 0.3s ease, color 0.3s ease;
}

.github-icon:hover i {
  color: #0ef;
  transform: scale(1.2);
}

.linkedin-icon:hover i {
  color: #0ef;
  transform: scale(1.2);
}

.instagram-icon:hover i {
  color: #0ef;
  transform: scale(1.2);
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

@media (max-width: 991.98px) {
  .photo-animate {
    width: 220px;
    margin-top: 2rem;
  }
}

@media (max-width: 767.98px) {
  .photo-animate {
    width: 160px;
    margin-top: 1.5rem;
  }
}

@media (max-width: 575.98px) {
  .photo-animate {
    width: 120px;
  }
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  .lead {
    font-size: 1rem;
    text-align: center;
  }
  .btn {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 575.98px) {
  .skill-item {
    font-size: 0.8rem;
  }

  .social-icons i {
    font-size: 1.2rem;
  }

  .social-icons a {
    gap: 0.5rem;
  }

  h5 {
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .col-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .skill-item,
  .social-icons,
  .social-icons a,
  .social-icons i {
    text-align: center !important;
    justify-content: center !important;
  }

  .social-icons {
    display: flex;
    flex-wrap: wrap;
  }
  .col-6 h5 {
    text-align: center;
  }

  .col-6 ul {
    padding-left: 0 !important;
  }
}

.photo-animate:hover {
  animation: glowEffect 2s ease-in-out infinite alternate;
}

.photo-animate {
  animation: fadeIn 2s ease-in-out forwards, parallax 4s infinite alternate;
}

@keyframes parallax {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

@keyframes glowEffect {
  50% {
    box-shadow: 0 -10px 50px 20px #0ef, 0 10px 50px 20px #e040fb;
  }
  100% {
    box-shadow: 0 -10 px 30px 10px #0ef, 0 10px 30px 10px #e040fb;
  }
}
</style>