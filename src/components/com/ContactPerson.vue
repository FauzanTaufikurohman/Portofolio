<template>
  <section id="kontak" class="container text-white py-5">
    <h2 class="text-center text-white mt-5 mb-3">Contact Person</h2>
    <div class="row align-items-center mb-4 animate__animated fade-in">
      <div class="col-auto">
        <img
          class="avatar"
          src="../../assets/images/Zan.webp"
          alt="Contact Avatar"
        />
      </div>
      <div class="col">
        <div class="row mb-1">
          <div class="col-1 fw-bold">Name</div>
          <div class="col-4"><span class="fw-bold">:</span> Fauzan</div>
        </div>
        <div class="row mb-1">
          <div class="col-1 fw-bold">Email</div>
          <div class="col-7">
            <span class="fw-bold">:</span>
            <a
              href="mailto:fauzantaufikurohman123@email.com"
              class="text-white text-decoration-none"
            >
              fauzan***@email.com
            </a>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-1 fw-bold">Phone</div>
          <div class="col-7">
            <span class="fw-bold">:</span>
            <a
              href="tel:+6281459030799"
              class="text-white text-decoration-none"
            >
              +6281459030799
            </a>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-1 fw-bold">Location</div>
          <div class="col-7">
            <a
              href="https://maps.app.goo.gl/RtYcMCoCx3WpU93HA"
              target="_blank"
              class="text-white text-decoration-none"
            >
              <span class="fw-bold">:</span> Malang, Indonesia
            </a>
          </div>
        </div>
      </div>
      <div class="col-auto social-icons d-flex gap-3 align-items-center">
        <a href="https://github.com/FauzanTaufikurohman" target="_blank">
          <i class="fab fa-github hover fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/fauzantaufikurohman/"
          target="_blank"
        >
          <i class="fab fa-linkedin hover fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/_hellzan/" target="_blank">
          <i class="fab fa-instagram hover fa-2x"></i>
        </a>
      </div>
    </div>

    <form
      @submit.prevent="submitForm"
      class="contact-form animate__animated fade-in"
    >
      <div class="mb-3">
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          placeholder="Your Name"
          required
        />
      </div>
      <div class="mb-3">
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          placeholder="Your Email"
          required
        />
      </div>
      <div class="mb-3">
        <textarea
          v-model="form.message"
          class="form-control"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="d-flex justify-content-center rounded-pill">
        <button type="submit" class="btn rounded-pill">Send Message</button>
      </div>
    </form>

    <p v-if="submitted" class="success-msg mt-3 text-center">
      Thank you for reaching out!
    </p>
  </section>
</template>
<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});
const submitted = ref(false);

function submitForm() {
  const phone = "6281459030799";
  const text = `Name: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
  submitted.value = true;
  form.value = { name: "", email: "", message: "" };
}
</script>
<style scoped>
.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  background: #eee;
}

.success-msg {
  color: #28a745;
}

.social-icons a:hover {
  color: #00bfff;
  transform: scale(1.1);
  transition: all 0.3s ease;
}

.skill-item {
  transition: transform 0.3s ease, color 0.3s ease;
}

.skill-item:hover {
  color: #1e90ff;
  transform: scale(1.05);
}
.social-icons a {
  color: #fff;
  transition: transform 0.3s ease, color 0.3s ease;
}

.github-icon:hover i {
  color: #00bcd4;
  transform: scale(1.2);
}

.linkedin-icon:hover i {
  color: #0077b5;
  transform: scale(1.2);
}

.instagram-icon:hover i {
  color: #1fa2ff;
  transform: scale(1.2);
}
.hover {
  display: inline-block; /* penting agar box-shadow bisa terlihat */
  padding: 0.4rem;
  border-radius: 50%; /* opsional untuk efek bulat */
  transition: all 0.3s ease;
}
.hover:hover {
  color: #0ef;
  background-color: rgba(14, 239, 255, 0.1); /* opsional efek latar */
  box-shadow: 0 0 10px #0ef, 0 0 20px #0ef, 0 0 40px #0ef, 0 0 60px #0ef;
}
</style>

