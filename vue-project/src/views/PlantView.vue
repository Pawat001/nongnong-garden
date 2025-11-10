<template>
  <div>
    <header class="hero" role="banner" aria-label="Hero section with plant video or image">
      <!-- Use existing static video from App.vue assets folder (adjust path for view component) -->
      <video autoplay muted loop playsinline crossorigin="anonymous" poster="">
        <source src="/src/assets/หารูปแบบต้นมอนสเตอร่า_เดลิซิโอ.mp4" type="video/mp4" />
      </video>
      <div class="overlay">
        <h1>{{ plantData?.commonName || 'กำลังโหลด...' }}</h1>
        <p class="sub" v-if="plantData?.scientificName">{{ plantData.scientificName }}</p>
      </div>
    </header>

    <main class="container">
      <section class="welcome-section">
        <div class="welcome-content">
          <div class="welcome-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
            <span>Premium Plant Collection</span>
          </div>
          <h2 class="welcome-title">พืชประจำบ้านยอดนิยม</h2>
          <p class="welcome-description" v-if="plantData?.description">
            {{ plantData.description }}
          </p>
        </div>
      </section>

      <PlantDataUploadForm ref="uploadFormRef" />

      <section class="main">
        <div class="content">
          <section class="content-card">
            <div class="section-header">
              <div class="section-icon" style="background: linear-gradient(135deg, #66bb6a 0%, #43a047 100%);">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a.5.5 0 0 1 .5.5v.518A4.5 4.5 0 0 1 13.018 5H13.5a.5.5 0 0 1 0 1h-.518A4.5 4.5 0 0 1 8 10.482V15.5a.5.5 0 0 1-1 0v-5.018A4.5 4.5 0 0 1 2.482 6H2a.5.5 0 0 1 0-1h.518A4.5 4.5 0 0 1 7 1.018V.5A.5.5 0 0 1 8 0zM7.5 2.02A3.5 3.5 0 0 0 3.02 6.5h8.96A3.5 3.5 0 0 0 7.5 2.02z" />
                </svg>
              </div>
              <h2>{{ plantData?.title || 'ข้อมูลพืช' }}</h2>
            </div>
            <p v-if="plantData?.description">{{ plantData.description }}</p>
            <div class="info-highlight" v-if="plantData?.scientificName">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
              <span><strong>ชื่อวิทยาศาสตร์:</strong> {{ plantData.scientificName }}</span>
            </div>
          </section>

          <section class="content-card">
            <div class="section-header">
              <div class="section-icon" style="background: linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%);">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                </svg>
              </div>
              <h2>วิธีการดูแล</h2>
            </div>
            <div class="care-grid">
              <div class="care-item">
                <div class="care-icon">☀️</div>
                <div class="care-details">
                  <strong>แสง</strong>
                  <p>{{ plantData?.facts?.light || 'แดดรำไรถึงแสงกระจาย' }}</p>
                </div>
              </div>
              <div class="care-item">
                <div class="care-icon">💧</div>
                <div class="care-details">
                  <strong>น้ำ</strong>
                  <p>{{ plantData?.facts?.water || 'รดน้ำปานกลาง' }}</p>
                </div>
              </div>
              <div class="care-item">
                <div class="care-icon">🌱</div>
                <div class="care-details">
                  <strong>ดิน</strong>
                  <p>{{ plantData?.facts?.soil || 'ร่วนซุย ระบายน้ำดี' }}</p>
                </div>
              </div>
              <div class="care-item">
                <div class="care-icon">🌿</div>
                <div class="care-details">
                  <strong>ปุ๋ย</strong>
                  <p>{{ plantData?.facts?.fertilizer || 'เดือนละ 1-2 ครั้ง' }}</p>
                </div>
              </div>
            </div>
          </section>

          <section class="content-card warning-card">
            <div class="section-header">
              <div class="section-icon" style="background: linear-gradient(135deg, #ef5350 0%, #e53935 100%);">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </div>
              <h2>การขยายพันธุ์ & ข้อควรระวัง</h2>
            </div>
            <div class="warning-content">
              <p>
                <strong>การขยายพันธุ์:</strong> {{ plantData?.propagation || 'ตัดยอด/กิ่ง ปักชำในน้ำหรือดินเลี้ยงราก' }}
              </p>
              <div class="warning-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                </svg>
                <p>
                  <strong>คำเตือน:</strong> {{ plantData?.warning || 'ยางของบางชนิดอาจเป็นพิษต่อสัตว์เลี้ยงและเด็กเล็ก' }}
                </p>
              </div>
            </div>
          </section>
        </div>

        <aside class="sidebar" aria-label="Quick facts about plant">
          <h4 style="margin-top:0">Quick Facts</h4>
          <ul class="facts">
            <li class="fact">☀️ แสงแดด: {{ plantData?.facts?.light || 'แดดรำไร' }}</li>
            <li class="fact">💧 การรดน้ำ: {{ plantData?.facts?.water || 'ปานกลาง' }}</li>
            <li class="fact">🧬 วงศ์: {{ plantData?.family || 'Araceae' }}</li>
            <li class="fact">🌎 ถิ่นกำเนิด: {{ plantData?.origin || 'เม็กซิโก' }}</li>
            <li class="fact">☠️ ความเป็นพิษ: {{ plantData?.isToxic ? 'มีพิษ' : 'ไม่มีพิษ/ไม่ทราบ' }}</li>
          </ul>
        </aside>
      </section>

      <section class="gallery">
        <h3>แกลเลอรีรูปภาพ</h3>
        <div class="gallery-container" v-if="gallery.length">
          <div class="main-carousel" aria-roledescription="carousel">
            <img :src="gallery[current]" :alt="`ภาพ ${current + 1}`" class="main-image" />
            <button class="nav-arrow nav-arrow-left" @click="prevImage" aria-label="รูปก่อนหน้า">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
            <button class="nav-arrow nav-arrow-right" @click="nextImage" aria-label="รูปถัดไป">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <div class="thumbnail-gallery">
            <div v-for="(image, index) in gallery" :key="index" class="thumbnail" :class="{ active: current === index }" @click="selectImage(index)" role="button" tabindex="0">
              <img :src="image" :alt="`Thumbnail ${index + 1}`" />
            </div>
          </div>
        </div>
        <div v-else class="loading-spinner">{{ loading ? 'กำลังโหลด...' : 'ไม่มีรูปภาพ' }}</div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import PlantDataUploadForm from '../components/PlantDataUploadForm.vue'

const route = useRoute()
const plantId = ref(route.params.id)

const plantData = ref(null)
const gallery = ref([])
const loading = ref(true)
const error = ref(null)

const current = ref(0)
let autoplayInterval = null

// Upload form ref and event bridge
const uploadFormRef = ref(null)
function onOpenQrFromHeader() {
  if (uploadFormRef.value && typeof uploadFormRef.value.openScannerFromOutside === 'function') {
    uploadFormRef.value.openScannerFromOutside()
  } else if (uploadFormRef.value && typeof uploadFormRef.value.toggleForm === 'function') {
    // fallback: open the form if scanner method not available
    uploadFormRef.value.toggleForm()
  }
}

onMounted(() => {
  window.addEventListener('open-qr-scanner', onOpenQrFromHeader)
})

onUnmounted(() => {
  window.removeEventListener('open-qr-scanner', onOpenQrFromHeader)
  stopAutoplay()
})

// Fetch data for plantId
async function fetchPlantData(id) {
  loading.value = true
  error.value = null
  try {
    const res = await fetch(`/api/data-info/${id}`)
    if (!res.ok) throw new Error('ไม่พบข้อมูลพืชชนิดนี้')
    const data = await res.json()
    plantData.value = data
    gallery.value = Array.isArray(data.galleryImages) && data.galleryImages.length
      ? data.galleryImages
      : defaultGallery()
    if (gallery.value.length) startAutoplay()
  } catch (e) {
    error.value = e.message
    gallery.value = defaultGallery()
    startAutoplay()
  } finally {
    loading.value = false
  }
}

function defaultGallery() {
  return [
    'https://kla.vn/wp-content/uploads/2022/03/monstera-deliciosa-KLA-3.jpg',
    'https://www.nanagarden.com/picture/product/400/351390.jpg',
    'https://www.nanagarden.com/picture/product/400/336265.jpg',
    'https://kla.vn/wp-content/uploads/2022/04/Monstera-deliciosa-%E2%80%98Brazilian-Common-Form-1.jpg'
  ]
}

// autoplay helpers
function nextImage() { current.value = (current.value + 1) % gallery.value.length }
function prevImage() { current.value = (current.value - 1 + gallery.value.length) % gallery.value.length }
function selectImage(i) {
  current.value = i
  stopAutoplay()
  setTimeout(startAutoplay, 5000)
}
function startAutoplay() {
  if (autoplayInterval || gallery.value.length === 0) return
  autoplayInterval = setInterval(nextImage, 4000)
}
function stopAutoplay() {
  if (!autoplayInterval) return
  clearInterval(autoplayInterval)
  autoplayInterval = null
}

onMounted(() => {
  fetchPlantData(plantId.value)
})

watch(() => route.params.id, (newId) => {
  plantId.value = newId
  current.value = 0
  stopAutoplay()
  fetchPlantData(newId)
})
</script>
