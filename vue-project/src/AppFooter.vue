<script setup>
import { ref } from 'vue'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const featuredPlants = ref([
  {
    name: 'มอนสเตอร่า',
    image: 'https://kla.vn/wp-content/uploads/2022/03/monstera-deliciosa-KLA-3.jpg',
    link: '#'
  },
  {
    name: 'ปรง',
    image: 'https://medthai.com/wp-content/uploads/2014/11/%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B9%88%E0%B8%B2.jpg',
    link: '#'
  },
  {
    name: 'สับปะรดสี',
    image: 'https://www.nongnoochpattaya.com/uploads/images/202010/cba906a2ad478906f4bfd8fe117761ae.jpg',
    link: '#'
  },
  {
    name: 'ถังทอง',
    image: 'https://inwfile.com/s-ck/axsq1h.jpg',
    link: '#'
  }
])
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      
      <!-- Column 1: About & Contact -->
      <div class="footer-column">
        <div class="logo-section">
          <img src="./assets/logo-nongnoochgarde.png" alt="Nongnong Garden Logo" class="footer-logo" />
          <h3>Nongnoochpattaya</h3>
        </div>
        <p class="app-description">
          สวนพฤกษศาสตร์เขตร้อนขนาดใหญ่และมีชื่อเสียงระดับโลกที่ได้รับการจัดอันดับให้เป็นหนึ่งในสิบสวนที่สวยที่สุดในโลก มีการจัดสวนตามธีมที่หลากหลาย เช่น สวนฝรั่งเศส หุบเขาไดโนเสาร์ และมีการแสดงทางวัฒนธรรมและกิจกรรมสำหรับครอบครัว เป็นสถานที่ท่องเที่ยวสำคัญในชลบุรี
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.558z"/>
            </svg>
            <span>https://www.nongnooch.world</span>
          </div>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            <span>038-238061</span>
          </div>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <span>ตำบล นาจอมเทียน อำเภอสัตหีบ ชลบุรี 20250</span>
          </div>
        </div>
      </div>

      <!-- Column 2: Plant Categories with Images -->
      <div class="footer-column">
        <h4>🌿 พืชแนะนำ</h4>
        <div class="featured-plants">
          <a v-for="plant in featuredPlants" :key="plant.name" :href="plant.link" class="plant-card">
            <img :src="plant.image" :alt="plant.name" />
            <span>{{ plant.name }}</span>
          </a>
        </div>
      </div>

      <!-- Column 3: Quick Links & Social -->
      <div class="footer-column">
        <h4>🔗 เมนูด่วน</h4>
        <ul class="quick-links">
          <li><a href="#"><span>🌸</span> ไม้ดอก</a></li>
          <li><a href="#"><span>🌿</span> ไม้ใบ</a></li>
          <li><a href="#"><span>🌵</span> พืชอวบน้ำ</a></li>
          <li><a href="#"><span>🌱</span> สมุนไพร</a></li>
          <li><a href="#"><span>🍃</span> ไม้เลื้อย</a></li>
        </ul>
        
        <h4 style="margin-top: 1.5rem">📱 ติดตามเรา</h4>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.556 0 5.829 0 8s.01 2.444.048 3.297c.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.556 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.852-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.719-.89.923-1.417.198-.51.333-1.09.372-1.942C15.99 10.444 16 10.171 16 8s-.01-2.444-.048-3.297c-.04-.852-.174-1.433-.372-1.942a3.916 3.916 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.444.01 10.171 0 8 0zm0 1.44c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.232s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.389-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485C1.44 10.444 1.432 10.17 1.432 8s.008-2.389.047-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.611 1.44 5.87 1.432 8 1.432z"/>
              <path d="M8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zM8 10.667a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334z"/>
              <circle cx="12.27" cy="3.73" r=".96"/>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
            </svg>
          </a>
          <a href="https://line.me" target="_blank" aria-label="LINE">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.080.044.107a.15.15 0 0 0 .107.045h2.246c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.154Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044.155.155 0 0 0-.044.108l-.001 3.486a.142.142 0 0 0 .044.107.155.155 0 0 0 .108.045h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p> @2025 Nongnong Garden. All rights reserved. | Made with 💚 for plant lovers</p>
    </div>

    <button @click="scrollToTop" class="back-to-top" aria-label="กลับไปด้านบน">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg>
    </button>
  </footer>
</template>

<style scoped>
.site-footer {
  background: linear-gradient(135deg, #66CDAA 0%, #5AB899 100%);
  color: #fff;
  padding: 3.5rem 1.5rem 2rem;
  position: relative;
  font-family: 'Athiti', sans-serif;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.logo-section h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
}

.app-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.25rem;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.95);
  transition: transform 0.2s;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-item svg {
  flex-shrink: 0;
  color: #fff;
  opacity: 0.9;
}

/* Footer Column Headers */
.footer-column h4 {
  font-family: 'Athiti', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1.25rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

/* Featured Plants with Images */
.featured-plants {
  display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.plant-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
}

.plant-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.plant-card img {
  width: 100%;
  height: 80px;
  object-fit: cover;
}

.plant-card span {
  padding: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
}

/* Quick Links */
.quick-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quick-links li {
  margin-bottom: 0.75rem;
}

.quick-links a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.quick-links a:hover {
  color: #fff;
  transform: translateX(5px);
}

.quick-links a span {
  font-size: 1.1rem;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-icons a {
  color: #2E8B57;
  background-color: #fff;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.social-icons a:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  background-color: #f0f0f0;
}

.social-icons svg {
  width: 20px;
  height: 20px;
}

/* Footer Bottom */
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: #0c1a2c;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #FFA500 0%, #FFD700 100%);
}

.back-to-top svg {
  width: 24px;
  height: 24px;
}

/* Responsive */
@media (max-width: 768px) {
  .site-footer {
    padding: 2.5rem 1rem 1.5rem;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .featured-plants {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .plant-card img {
    height: 70px;
  }
  
  .back-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
  }
  
  .logo-section h3 {
    font-size: 1.2rem;
  }
  
  .footer-logo {
    width: 40px;
    height: 40px;
  }
}
</style>