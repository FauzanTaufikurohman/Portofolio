<template>
  <section id="project" class="">
    <div class="container mt-5 py-5">
      <div class="row mb-5">
        <div class="col-lg-12 text-lg-start text-center">
          <div class="port-container">
            <div></div>
            <h2 class="port-line"></h2>
            <h2 class="port-title">My Last Projects</h2>
          </div>
        </div>
      </div>
      <div name="fade" tag="div" class="row g-4 mb-5 animate__animated fade-in">
        <div class="col-md-4 col-sm-6">
          <a
            href="http://btsstoreindonesia.com"
            target="_blank"
            class="text-decoration-none"
          >
            <div class="portfolio-card">
              <img
                class="portfolio-image"
                src="../../assets/images/project1.webp"
              />
              <div class="portfolio-caption">
                <b>BTS STORE INDONESIA</b>
                <p class="text-muted">December 12, 2024</p>
              </div>
            </div>
          </a>
        </div>

        <div class="col-md-4 col-sm-6">
          <div class="portfolio-card">
            <img
              class="portfolio-image"
              src="../../assets/images/project2.webp"
            />
            <div class="portfolio-caption">
              <b>FOURTADEV</b>
              <p class="text-muted">January 1, 2025</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="portfolio-card">
            <img
              class="portfolio-image"
              src="../../assets/images/project3.webp"
            />
            <div class="portfolio-caption">
              <b>FOURTADEV</b>
              <p class="text-muted">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectSection",
};
</script>

<style scoped>
.port-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 2rem;
}

.port-line {
  width: 60px;
  height: 3px;
  background-color: #d7d7d7;
  border-radius: 2px;
}

.port-title {
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
}

.port-title span {
  color: #fff;
  font-weight: bold;
}

.port-text {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
  margin-top: 10px;
}

/* CARD */
.portfolio-card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px #0ef, 0 0 40px rgba(0, 255, 255, 0.8);
}

.portfolio-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.portfolio-caption {
  padding: 15px;
  text-align: center;
  color: #333;
}

/* TRANSITION */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* RESPONSIVE */
@media (max-width: 576px) {
  .port-title {
    font-size: 16px;
  }

  .port-text {
    font-size: 14px;
  }
}
</style>