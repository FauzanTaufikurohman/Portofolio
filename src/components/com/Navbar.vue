<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow px-3 py-3">
      <a class="navbar-brand logo ps-3" style="--i:0" href="#">My Portofolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row flex-lg-row gap-3"
        >
          <li class="nav-item" style="--i:1">
            <a class="nav-link" href="#home">Home</a>
            <hr v-if="isCollapsed" class="text-white m-0" />
          </li>
          <li class="nav-item" style="--i:2">
            <a class="nav-link" href="#tentang">About</a>
            <hr v-if="isCollapsed" class="text-white m-0" />
          </li>
          <li class="nav-item" style="--i:3">
            <a class="nav-link" href="#skills">Skills</a>
            <hr v-if="isCollapsed" class="text-white m-0" />
          </li>
          <li class="nav-item" style="--i:4">
            <a class="nav-link" href="#project">Project</a>
            <hr v-if="isCollapsed" class="text-white m-0" />
          </li>
          <li class="nav-item" style="--i:5">
            <a class="nav-link" href="#kontak">Contact</a>
            <hr v-if="isCollapsed" class="text-white m-0" />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  mounted() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const onScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    const collapseEl = document.getElementById("navbarNav");
    collapseEl.addEventListener("shown.bs.collapse", () => {
      this.isCollapsed = true;
    });
    collapseEl.addEventListener("hidden.bs.collapse", () => {
      this.isCollapsed = false;
    });
  },
};
</script>

<style>
.nav-link.active {
  color: #0ef !important;
}

.navbar {
  background: linear-gradient(to right, #081b29, #333333);
  border-radius: 20px;
  border: 1px solid #0ef;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 12px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  animation: glowing-border 2s infinite alternate;
}
.navbar-brand{
  animation: slideRight 0.5s ease forwards;
  animation-delay: calc(0.2s * var(--i));
  opacity: 0;
}
@keyframes glowing-border {
  0% {
    border: 1px solid #001f87;
    box-shadow: 0 0 5px #1500ff, 0 0 10px #1e00ff, 0 0 15px #3300ff;
  }
  50% {
    border: 1px solid #370780;
    box-shadow: 0 0 10px #3700ff, 0 0 30px #000dff, 0 0 50px #001aff;
  }
  100% {
    border: 1px solid #000487;
    box-shadow: 0 0 5px #0022ff, 0 0 10px #0800ff, 0 0 15px #2600ff;
  }
}

.nav-link {
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #0ef !important;
}

.navbar-nav {
  gap: 20px;
}
.nav-item {
  animation: slideTop 0.5s ease forwards;
  animation-delay: calc(0.2s * var(--i));
  opacity: 0;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    flex-direction: column !important;
    gap: 10px;
  }
}
</style>