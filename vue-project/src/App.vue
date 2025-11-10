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
        <!-- Header QR Scan Shortcut (moved to far right) -->
        <button type="button" class="header-qr-button" @click="handleHeaderScan" title="สแกน QR ด้วยกล้อง">
          <img src="https://play-lh.googleusercontent.com/hS6IzlgqiniH0hVapCsTtYxd8-TviK9-sNPd4jBRd1hnaV3Aif7cyBisEyIy4inovg" alt="Scan QR" class="header-qr-icon" />
        </button>
      </div>
    </nav>

    <RouterView />

    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from './AppFooter.vue'
import { RouterView } from 'vue-router'

// Header QR button now dispatches a global event that the current view can handle
function handleHeaderScan() {
  window.dispatchEvent(new Event('open-qr-scanner'))
}
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

/* Welcome Section */
.welcome-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 3rem 2rem;
  border-bottom: 1px solid rgba(45, 95, 60, 0.1);
}

.welcome-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.welcome-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 50px;
  color: #2e7d32;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(46, 125, 50, 0.15);
}

.welcome-badge svg {
  width: 20px;
  height: 20px;
}

.welcome-title {
  font-family: 'Athiti', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
}

.welcome-description {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
  max-width: 700px;
  margin: 0 auto;
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
  background: transparent;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  border: none;
}

/* Content Cards */
.content-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.content-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.section-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.section-icon svg {
  width: 24px;
  height: 24px;
  color: white;
}

.section-header h2 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a202c;
}

/* Info Highlight */
.info-highlight {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #1976d2;
}

.info-highlight svg {
  flex-shrink: 0;
  color: #1565c0;
}

.info-highlight span {
  font-size: 1rem;
  color: #0d47a1;
}

/* Care Grid */
.care-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.care-item {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.care-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

.care-icon {
  font-size: 2rem;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.care-details {
  flex: 1;
}

.care-details strong {
  display: block;
  font-size: 1.1rem;
  color: #2d5f3c;
  margin-bottom: 0.25rem;
}

.care-details p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #4a5568;
  margin: 0;
}

/* Warning Card */
.warning-card {
  background: linear-gradient(135deg, #fff5f5 0%, #ffebee 100%);
  border-left: 4px solid #d32f2f;
}

.warning-content p {
  margin-bottom: 1.5rem;
}

.warning-box {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(211, 47, 47, 0.08);
  border-radius: 8px;
  border: 1px solid rgba(211, 47, 47, 0.2);
}

.warning-box svg {
  flex-shrink: 0;
  color: #d32f2f;
  margin-top: 2px;
}

.warning-box p {
  margin: 0;
  color: #b71c1c;
  font-size: 1rem;
  line-height: 1.6;
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
  margin-top: 1.5rem;
  margin-bottom: 1rem;
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

.header-qr-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 66px; /* increased 50% from 44px */
  height: 66px; /* increased 50% */
  margin-left: auto; /* push to far right */
  background: linear-gradient(135deg, #fff 0%, #f3f3f3 100%);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  font-size: 1.25rem;
}

.header-qr-button:hover {
  transform: translateY(-2px);
}

.header-qr-icon {
  width: 33px; /* 50% larger than 22px */
  height: 33px;
  object-fit: contain;
  display: block;
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
   RESPONSIVE DESIGN - All Tourist Devices
   Mobile: 320px-480px
   Phablet: 481px-767px
   Tablet: 768px-1024px
   Laptop: 1025px-1440px
   Desktop: 1441px+
   ============================================ */

/* Extra Large Desktop (> 1440px) */
@media (min-width: 1441px) {
  .nav-content {
    max-width: 1600px;
    padding: 1.25rem 4rem;
  }
  
  .main {
    max-width: 1600px;
    padding: 2rem 3rem;
  }
  
  .welcome-section {
    padding: 4rem 3rem;
  }
  
  .welcome-title {
    font-size: 3rem;
  }
  
  .gallery-container {
    max-width: 1100px;
  }
}

/* Large Desktop/Laptop (1025px - 1440px) */
@media (max-width: 1440px) and (min-width: 1025px) {
  .nav-content {
    padding: 1.25rem 3rem;
  }
  
  .main {
    padding: 1.5rem 2rem;
  }
  
  .content-card {
    padding: 2.5rem;
  }
  
  .care-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablet Landscape & Small Laptop (901px - 1024px) */
@media (max-width: 1024px) and (min-width: 901px) {
  .nav-content {
    padding: 1rem 2rem;
    gap: 2rem;
  }
  
  .main {
    grid-template-columns: 65% 35%;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  .welcome-section {
    padding: 2.5rem 2rem;
  }
  
  .welcome-title {
    font-size: 2.25rem;
  }
  
  .content-card {
    padding: 2rem;
  }
  
  .care-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .sidebar {
    top: 70px;
  }
  
  .main-image {
    height: 500px;
  }
}

/* Tablet Portrait (768px - 900px) */
@media (max-width: 900px) and (min-width: 768px) {
  .nav-content {
    padding: 1rem 1.5rem;
    gap: 1.5rem;
  }
  
  .site-name {
    font-size: 1rem;
  }
  
  .nav-main-heading {
    font-size: 1.1rem;
  }
  
  .plant-card {
    padding: 0.5rem 0.875rem;
  }
  
  .cta-button {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
  }
  
  .main {
    grid-template-columns: 60% 40%;
    gap: 1.25rem;
    padding: 1.25rem;
  }
  
  .welcome-section {
    padding: 2rem 1.5rem;
  }
  
  .welcome-title {
    font-size: 2rem;
  }
  
  .welcome-description {
    font-size: 1.05rem;
  }
  
  .content-card {
    padding: 1.75rem;
  }
  
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .care-grid {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    padding: 1.25rem;
    top: 70px;
  }
  
  .main-image {
    height: 450px;
  }
  
  .thumbnail {
    width: 90px;
    height: 90px;
  }
}

/* Phablet (481px - 767px) */
@media (max-width: 767px) and (min-width: 481px) {
  .nav-content {
    padding: 1rem 1.25rem;
    gap: 1.25rem;
  }
  
  .logo-section {
    gap: 0.625rem;
  }
  
  .header-logo {
    width: 26px;
    height: 26px;
  }
  
  .site-name {
    font-size: 0.925rem;
  }
  
  .nav-main-heading {
    font-size: 1rem;
  }
  
  .plant-cards {
    gap: 0.75rem;
  }
  
  .plant-card {
    padding: 0.625rem 1rem;
  }
  
  .plant-card img {
    width: 42px;
    height: 42px;
  }
  
  .plant-name {
    font-size: 0.875rem;
  }
  
  .cta-button {
    padding: 0.75rem 1.125rem;
    font-size: 0.875rem;
  }
  
  .hero {
    height: 70vh;
  }
  
  .hero h1 {
    font-size: clamp(26px, 5vw, 48px);
  }
  
  .hero p.sub {
    font-size: clamp(28px, 2.2vw, 55px);
  }
  
  .welcome-section {
    padding: 2rem 1.25rem;
  }
  
  .welcome-badge {
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
  }
  
  .welcome-title {
    font-size: 1.875rem;
  }
  
  .welcome-description {
    font-size: 1rem;
    line-height: 1.7;
  }
  
  .main {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }
  
  .content-card {
    padding: 1.5rem;
    border-radius: 10px;
  }
  
  .section-header {
    gap: 0.75rem;
  }
  
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .section-icon {
    width: 42px;
    height: 42px;
  }
  
  .care-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .care-item {
    padding: 1.125rem;
  }
  
  .sidebar {
    position: static;
    order: 2;
  }
  
  .main-image {
    height: 400px;
  }
  
  .thumbnail {
    width: 85px;
    height: 85px;
  }
  
  .nav-arrow {
    width: 45px;
    height: 45px;
  }
}

/* Mobile (320px - 480px) */
@media (max-width: 480px) {
  .nav-content {
    flex-wrap: wrap;
    padding: 0.875rem 1rem;
    gap: 1rem;
  }
  
  .logo-section {
    order: 1;
    gap: 0.5rem;
  }
  
  .header-logo {
    width: 24px;
    height: 24px;
  }
  
  .site-name {
    font-size: 0.85rem;
  }
  
  .nav-main-heading {
    order: 2;
    font-size: 0.95rem;
  }
  
  .plant-cards-wrapper {
    order: 3;
    width: 100%;
    gap: 0.75rem;
  }
  
  .plant-cards {
    gap: 0.5rem;
  }
  
  .plant-card {
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
    border-radius: 8px;
  }
  
  .plant-card img {
    width: 36px;
    height: 36px;
    border-radius: 6px;
  }
  
  .plant-name {
    font-size: 0.8rem;
  }
  
  .cta-button {
    padding: 0.625rem 1rem;
    font-size: 0.8rem;
    border-radius: 8px;
  }
  
  .cta-button svg {
    width: 14px;
    height: 14px;
  }
  
  .hero {
    height: 60vh;
    min-height: 400px;
  }
  
  .hero h1 {
    font-size: clamp(22px, 5vw, 40px);
  }
  
  .hero p.sub {
    font-size: clamp(24px, 2vw, 45px);
  }
  
  .welcome-section {
    padding: 1.5rem 1rem;
  }
  
  .welcome-badge {
    font-size: 0.8rem;
    padding: 0.375rem 0.875rem;
  }
  
  .welcome-badge svg {
    width: 16px;
    height: 16px;
  }
  
  .welcome-title {
    font-size: 1.5rem;
    line-height: 1.3;
  }
  
  .welcome-description {
    font-size: 0.925rem;
    line-height: 1.65;
  }
  
  .main {
    grid-template-columns: 1fr;
    padding: 0.75rem;
    gap: 1.25rem;
  }
  
  .content-card {
    padding: 1.25rem;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
  }
  
  .section-header h2 {
    font-size: 1.3rem;
    line-height: 1.3;
  }
  
  .section-icon {
    width: 38px;
    height: 38px;
  }
  
  .section-icon svg {
    width: 18px;
    height: 18px;
  }
  
  .info-highlight {
    padding: 0.875rem 1rem;
    gap: 0.625rem;
  }
  
  .info-highlight svg {
    width: 18px;
    height: 18px;
  }
  
  .info-highlight span {
    font-size: 0.9rem;
  }
  
  .main .content h2 {
    font-size: 1.3rem;
  }
  
  .main .content h3 {
    font-size: 1.15rem;
  }
  
  .main .content p {
    font-size: 0.95rem;
    line-height: 1.65;
  }
  
  .care-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }
  
  .care-item {
    padding: 1rem;
    gap: 0.875rem;
  }
  
  .care-icon {
    font-size: 1.75rem;
    width: 42px;
    height: 42px;
  }
  
  .care-details strong {
    font-size: 1rem;
  }
  
  .care-details p {
    font-size: 0.875rem;
  }
  
  .warning-box {
    padding: 1rem;
    gap: 0.75rem;
  }
  
  .warning-box svg {
    width: 18px;
    height: 18px;
  }
  
  .warning-box p {
    font-size: 0.9rem;
  }
  
  .sidebar {
    position: static;
    order: 2;
    padding: 1.25rem;
    border-radius: 8px;
  }
  
  .sidebar h4 {
    font-size: 1.1rem;
  }
  
  .fact {
    font-size: 0.925rem;
  }
  
  .gallery {
    padding: 1.5rem 0;
  }
  
  .gallery h3 {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
  
  .gallery-container {
    width: 95%;
  }
  
  .main-image {
    height: 300px;
  }
  
  .thumbnail-gallery {
    gap: 0.5rem;
  }
  
  .thumbnail {
    width: 70px;
    height: 70px;
  }
  
  .nav-arrow {
    width: 40px;
    height: 40px;
    opacity: 1;
  }
  
  .nav-arrow svg {
    width: 20px;
    height: 20px;
  }
  
  .nav-arrow-left {
    left: 8px;
  }
  
  .nav-arrow-right {
    right: 8px;
  }
}
</style>