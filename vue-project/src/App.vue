<template>
  <div>
    <nav class="plant-navigation-header" role="navigation" aria-label="Plant Navigation">
      <div class="nav-content">
      
        <div class="logo-section">
          <img src="https://www.nongnoochpattaya.com/assets/images/logo-nongnoochgarden.png"
            alt="Nongnooch Pattaya Logo" class="header-logo" />

          <span class="site-name">Nongnooch Pattaya</span>
        </div>

        <!-- Main Navigation Heading -->
        <h1 class="nav-main-heading">Araceae Plants</h1>

        <!-- Plant Cards Container -->
        <div class="plant-cards-wrapper">
          <div class="plant-cards">
            <a href="#" class="plant-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWxMHldIk6rDoajfNUWWQR7Og8Tjpq4XFxQ&s"
                alt="Philodendron" />
              <span class="plant-name">Philodendron</span>
            </a>
            <a href="#" class="plant-card">
              <img src="https://www.fashionisland.co.th/wp-content/uploads/2020/11/fashionisland-epipremnum-aureum.jpg"
                alt="Pothos" />
              <span class="plant-name">Pothos</span>
            </a>
            <a href="#" class="plant-card">
              <img src="https://down-th.img.susercontent.com/file/0cb86c3f79481d43d222ef58f1e4b9cf" alt="Anubias" />
              <span class="plant-name">Anubias</span>
            </a>
          </div>

          <!-- Call to Action Button -->
          <a href="#" class="cta-button">
            <span>More Araceae Plants</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>

    <header class="hero" role="banner" aria-label="Hero section with Monstera video">
      <!-- Replace the sample video URL with your high-definition Monstera unfurling video -->
      <video autoplay muted loop playsinline crossorigin="anonymous" poster="">
        <source src=".\assets\copy_E34E562B-1893-4D60-8D77-04625FDE2D82.mp4" type="video/mp4">
        <!-- Fallback image if video cannot play -->
      </video>
      <div class="overlay">
        <h1>มอนสเตอร่า เดลิซิโอซ่า</h1>
        <p class="sub">Monstera Deliciosa</p>
      </div>
    </header>

    <main class="container">
      <section class="main">
        <div class="content">

          <section>
            <h2 style="font-family:Athiti,sans-serif;font-weight:600;margin:0 0 0.5rem 0">ราชินีแห่งใบไม้</h2>
            <p>
              มอนสเตอร่า เดลิซิโอซ่า เป็นพืชในวงศ์ Araceae ที่มีลักษณะเด่นคือใบขนาดใหญ่มีรอยฉลุและแหว่ง
              ซึ่งพัฒนาเมื่อพืชเติบโตในสภาพแสงและการรองรับที่เหมาะสม พืชชนิดนี้ชอบความชื้นปานกลาง ดินร่วนซุย
              และแสงแดดรำไรในขณะที่สามารถปรับตัวได้ดีในบ้านที่มีแสงกระจาย
            </p>

            <h3 style="margin-top:1.25rem">ทำไมใบถึงมีรอยฉลุ?</h3>
            <p>
              รอยฉลุบนใบมอนสเตอร่าช่วยให้พืชลดแรงลมและเพิ่มการกระจายแสงให้ถึงใบภายในได้ดีขึ้น
              อีกทฤษฎีหนึ่งคือช่วยให้ใบรับน้ำฝนหรือความชื้นได้อย่างมีประสิทธิภาพ
              ซึ่งเป็นวิวัฒนาการที่เป็นประโยชน์ต่อพืชในป่าเขตร้อนที่มีใบใหญ่
            </p>
          </section>

          <section>
            <h2>วิธีการดูแล</h2>
            <p>
              แสง: แดดรำไรถึงแสงกระจาย; น้ำ: รดน้ำปานกลาง ปล่อยให้หน้าดินแห้งเล็กน้อยระหว่างการรด; ดิน:
              ร่วนซุยระบายน้ำดี; ปุ๋ย: ให้นาน ๆ ครั้งในช่วงเติบโต
            </p>
          </section>

          <section>
            <h2>การขยายพันธุ์ & ข้อควรระวัง</h2>
            <p>
              การขยายพันธุ์ทำได้ด้วยการตัดยอดหรือกิ่งและปักชำในน้ำหรือดินเลี้ยงราก
              ระวังว่ายางของมอนสเตอร่าเป็นพิษต่อสัตว์เลี้ยงและเด็กเล็ก ควรสวมถุงมือเมื่อแตะต้นและล้างมือหลังจากจัดการ
            </p>
          </section>
        </div>

        <aside class="sidebar" aria-label="Quick facts about Monstera">
          <h4 style="margin-top:0">Quick Facts</h4>
          <ul class="facts">
            <li class="fact">☀️ แสงแดด: แดดรำไร</li>
            <li class="fact">💧 การรดน้ำ: ปานกลาง</li>
            <li class="fact">🧬 วงศ์: Araceae</li>
            <li class="fact">🌎 ถิ่นกำเนิด: เม็กซิโก</li>
            <li class="fact">☠️ ความเป็นพิษ: มีพิษ</li>
          </ul>
        </aside>
      </section>

      <section class="gallery">
        <h3>ภาพมอนสเตอร่า เดลิซิโอซ่า</h3>
        <div class="gallery-container">
          <!-- Main Carousel Image with Navigation Arrows -->
          <div class="main-carousel" aria-roledescription="carousel">
            <img :src="gallery[current]" :alt="`ภาพ ${current + 1} ของ Monstera`" class="main-image" />

            <!-- Navigation Arrows -->
            <button class="nav-arrow nav-arrow-left" @click="prevImage" aria-label="รูปก่อนหน้า">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
            <button class="nav-arrow nav-arrow-right" @click="nextImage" aria-label="รูปถัดไป">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>

          <!-- Thumbnail Gallery -->
          <div class="thumbnail-gallery">
            <div v-for="(image, index) in gallery" :key="index" class="thumbnail" :class="{ active: current === index }"
              @click="selectImage(index)" :aria-label="`ดูภาพที่ ${index + 1}`" role="button" tabindex="0">
              <img :src="image" :alt="`Thumbnail ${index + 1}`" />
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppFooter from './AppFooter.vue'

const gallery = ref([
  'https://kla.vn/wp-content/uploads/2022/03/monstera-deliciosa-KLA-3.jpg',
  'https://www.nanagarden.com/picture/product/400/351390.jpg',
  'https://www.nanagarden.com/picture/product/400/336265.jpg',
  'https://kla.vn/wp-content/uploads/2022/04/Monstera-deliciosa-%E2%80%98Brazilian-Common-Form-1.jpg',
  'https://i.redd.it/these-monstera-deliciosa-in-m%C3%A1laga-v0-mklyssozplgf1.jpg?width=3024&format=pjpg&auto=webp&s=49aa940c62790a75458751f279aa0dee110a5ff4',
  'https://i.redd.it/these-monstera-deliciosa-in-m%C3%A1laga-v0-ocwu5sozplgf1.jpg?width=3024&format=pjpg&auto=webp&s=aa474c333a39d897f0cf85fe9af12f18cb2ddd91',
])

const current = ref(0)
let autoplayInterval = null

// Next image
function nextImage() {
  current.value = (current.value + 1) % gallery.value.length
}

// Previous image
function prevImage() {
  current.value = (current.value - 1 + gallery.value.length) % gallery.value.length
}

// Select image and pause autoplay temporarily
function selectImage(index) {
  current.value = index
  // Pause autoplay temporarily
  stopAutoplay()
  // Resume after 5 seconds
  setTimeout(() => {
    startAutoplay()
  }, 5000)
}

// Start autoplay
function startAutoplay() {
  if (autoplayInterval) return
  autoplayInterval = setInterval(() => {
    nextImage()
  }, 4000) // Change image every 4 seconds
}

// Stop autoplay
function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style>
:root {
  --beige: #f6f0e6;
  --accent: #0b3d2e;
  --bg-color: #AFEEEE;
  --header-footer-color: #66CDAA;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Athiti', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--bg-color)
}

a {
  color: var(--accent)
}

/* Full-page optimized: no padding, full width */
.container {
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--bg-color)
}

/* HERO */
/* hero should fill the viewport for a full-page effect */
.hero {
  position: relative;
  height: 80vh;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: hidden
}

.hero video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(0.6px)
}

.hero::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 45%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 60%);
  pointer-events: none
}

.hero .overlay {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 1rem
}

.hero h1 {
  font-family: 'Athiti', sans-serif;
  font-size: clamp(30px, 6vw, 60px);
  margin: 0;
  letter-spacing: 0.5px;
  font-weight: 600
}

.hero p.sub {
  font-style: italic;
  margin-top: 0.4rem;
  font-size: clamp(35px, 2.4vw, 70px);
  opacity: 0.95
}

/* MAIN LAYOUT 70/30 - Desktop optimized */
.main {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 1.5rem;
  margin: 0;
  padding: 1.5rem;
  align-items: start;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 0 auto;
}

.main .content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: none;
}

/* ขยายขนาดฟอนต์เนื้อหา */
.main .content p {
  font-size: 1.1rem;
  /* ขยายฟอนต์เนื้อหา (ประมาณ 17-18px) */
  line-height: 1.7;
  /* เพิ่มระยะห่างบรรทัดให้อ่านง่าย */
  color: #2d3748;
}

.main .content h2 {
  font-size: 1.75rem;
  /* ขยายหัวข้อใหญ่ */
  color: #1a202c;
  margin-bottom: 1rem;
}

.main .content h3 {
  font-size: 1.4rem;
  /* ขยายหัวข้อรอง */
  color: #2d3748;
  margin-top: 1.25rem;
}

/* Quick Facts Sidebar - Sticky on Desktop */
.sidebar {
  background: linear-gradient(135deg, #f6f0e6 0%, #f0ead9 100%);
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;
  position: sticky;
  top: 80px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* ขยายขนาดฟอนต์ Sidebar */
.sidebar h4 {
  font-size: 1.25rem;
  /* ขยายหัวข้อ "Quick Facts" */
  color: #2d5f3c;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* ==== MINIMALIST MODERN STICKY HEADER ==== */
.plant-navigation-header {
  background: #f5f7f5;
  background: linear-gradient(180deg, #f5f7f5 0%, #e8ede8 100%);
  border-bottom: 1px solid rgba(46, 125, 50, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(10px);
}

.nav-content {
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.25rem 3rem;
  gap: 3rem;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.header-logo {
  width: 32px;
  height: 32px;
  color: #2d5f3c;
  stroke-width: 1.5;
  transition: all 0.3s ease;
}

.logo-section:hover .header-logo {
  transform: scale(1.05);
  color: #1f4229;
}

.site-name {
  font-family: 'Inter', 'Montserrat', 'Outfit', 'Athiti', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

/* Main Navigation Heading */
.nav-main-heading {
  font-family: 'Inter', 'Montserrat', 'Outfit', 'Athiti', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #2d5f3c;
  margin: 0;
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: -0.01em;
}

/* Plant Cards Wrapper */
.plant-cards-wrapper {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
  justify-content: flex-end;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.plant-cards-wrapper::-webkit-scrollbar {
  display: none;
}

.plant-cards {
  display: flex;
  gap: 1rem;
}

/* Individual Plant Card - Minimalist Design */
.plant-card {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.75rem 1.25rem;
  background: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  color: #1a1a1a;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.plant-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);
  border-color: rgba(45, 95, 60, 0.15);
}

.plant-card img {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  object-fit: cover;
}

.plant-name {
  font-family: 'Inter', 'Montserrat', 'Outfit', 'Athiti', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  letter-spacing: -0.01em;
}

/* Call to Action Button - Minimalist Elegant */
.cta-button {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 1.75rem;
  background: #2d5f3c;
  border-radius: 12px;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Inter', 'Montserrat', 'Outfit', 'Athiti', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(45, 95, 60, 0.15), 0 1px 2px rgba(45, 95, 60, 0.1);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: -0.01em;
}

.cta-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(45, 95, 60, 0.2), 0 2px 4px rgba(45, 95, 60, 0.15);
  background: #254d31;
}

.cta-button svg {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  width: 16px;
  height: 16px;
}

.cta-button:hover svg {
  transform: translateX(2px);
}

/* Quick facts */
.facts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem
}

.fact {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-weight: 500;
  font-size: 1rem
}

/* ขยายฟอนต์ Quick Facts */

/* Gallery - Full Width 100% with Thumbnail Gallery */
.gallery {
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  background: var(--beige);
}

.gallery h3 {
  text-align: center;
  margin: 0 0 2rem 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--accent);
}

.gallery-container {
  max-width: 900px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Main Carousel Image */
.main-carousel {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.main-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
  transition: opacity 0.5s ease-in-out;
}

/* Navigation Arrows */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #2E8B57;
  transition: all 0.3s ease;
  opacity: 0;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.nav-arrow-left {
  left: 20px;
}

.nav-arrow-right {
  right: 20px;
}

/* Show arrows on hover */
.main-carousel:hover .nav-arrow {
  opacity: 1;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.nav-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.nav-arrow svg {
  width: 32px;
  height: 32px;
}

/* Thumbnail Gallery */
.thumbnail-gallery {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem;
}

.thumbnail {
  width: 100px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.6;
  border: 3px solid transparent;
  transform: scale(1);
}

.thumbnail:hover {
  opacity: 0.8;
}

.thumbnail.active {
  opacity: 1;
  border: 3px solid #2E8B57;
  /* vibrant green border */
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Content sections spacing */
.content section {
  margin-bottom: 2rem;
}

.content section:last-of-type {
  margin-bottom: 1.5rem;
}

/* ============================================
   RESPONSIVE DESIGN - Mobile First
   Tablet: 768px, Desktop: 900px+
   ============================================ */

/* Tablet View (768px - 900px) */
@media (max-width: 900px) and (min-width: 768px) {
  .main {
    grid-template-columns: 65% 35%;
    gap: 1.25rem;
    padding: 1.25rem;
  }
  
  .main .content {
    padding: 1.5rem;
  }
  
  .sidebar {
    padding: 1.25rem;
    top: 70px;
  }
}

/* Mobile View (< 768px) - Single Column Stacked Layout */
@media (max-width: 767px) {
  .hero {
    height: 100vh;
  }

  /* Mobile-First: Stack Layout (70/30 becomes single column) */
  .main {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }
  
  .main .content {
    padding: 1.5rem;
    border-radius: 8px;
    order: 1;
  }
  
  .main .content h2 {
    font-size: 1.5rem;
  }
  
  .main .content h3 {
    font-size: 1.25rem;
  }
  
  .main .content p {
    font-size: 1rem;
    line-height: 1.6;
  }

  /* Sidebar moves below content on mobile */
  .sidebar {
    position: static;
    order: 2;
    margin-top: 0;
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .sidebar h4 {
    font-size: 1.15rem;
  }

  /* Header responsive */
  .nav-content {
    flex-wrap: wrap;
    padding: 1rem 1.5rem;
    gap: 1.5rem;
  }

  .logo-section {
    order: 1;
    gap: 0.75rem;
  }

  .header-logo {
    width: 28px;
    height: 28px;
  }

  .site-name {
    font-size: 0.95rem;
  }

  .nav-main-heading {
    order: 2;
    font-size: 1rem;
  }

  .plant-cards-wrapper {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    gap: 1rem;
  }

  .plant-card {
    padding: 0.6rem 1rem;
    gap: 0.75rem;
    border-radius: 10px;
  }

  .plant-card img {
    width: 40px;
    height: 40px;
    border-radius: 7px;
  }

  .plant-name {
    font-size: 0.85rem;
  }

  .cta-button {
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
    border-radius: 10px;
  }

  /* Gallery responsive */
  .main-image {
    height: 400px;
  }

  .thumbnail-gallery {
    gap: 0.5rem;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0.5rem 0;
  }

  .thumbnail {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
  }

  .nav-arrow-left {
    left: 10px;
  }

  .nav-arrow-right {
    right: 10px;
  }
}
</style>