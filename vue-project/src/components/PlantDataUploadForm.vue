<template>
  <div class="upload-form-container">
    <button 
      @click="toggleForm" 
      class="toggle-upload-button"
      :class="{ active: showForm }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
      </svg>
      <span v-if="!showForm">อัพโหลด/แก้ไขข้อมูลพืช</span>
      <span v-else>ซ่อนฟอร์ม</span>
    </button>

    <transition name="slide-fade">
      <div v-if="showForm" class="upload-form-card">
        <h3>อัพโหลดหรือแก้ไขข้อมูลพืช</h3>
        
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="plantId">รหัสพืช (Plant ID):</label>
            <input 
              type="text" 
              id="plantId" 
              v-model="formData.plantId" 
              placeholder="เช่น monstera-deliciosa"
              required
            />
          </div>

          <div class="form-group">
            <label for="commonName">ชื่อทั่วไป (ภาษาไทย):</label>
            <input 
              type="text" 
              id="commonName" 
              v-model="formData.commonName" 
              placeholder="เช่น มอนสเตอร่า เดลิซิโอซ่า"
            />
          </div>

          <div class="form-group">
            <label for="scientificName">ชื่อวิทยาศาสตร์:</label>
            <input 
              type="text" 
              id="scientificName" 
              v-model="formData.scientificName" 
              placeholder="เช่น Monstera deliciosa"
            />
          </div>

          <div class="form-group">
            <label for="family">วงศ์ (Family):</label>
            <input 
              type="text" 
              id="family" 
              v-model="formData.family" 
              placeholder="เช่น Araceae"
            />
          </div>

          <div class="form-group">
            <label for="origin">ถิ่นกำเนิด:</label>
            <input 
              type="text" 
              id="origin" 
              v-model="formData.origin" 
              placeholder="เช่น เม็กซิโก"
            />
          </div>

          <div class="form-group">
            <label for="description">คำอธิบาย:</label>
            <textarea 
              id="description" 
              v-model="formData.description" 
              rows="4"
              placeholder="รายละเอียดเกี่ยวกับพืช..."
            ></textarea>
          </div>

          <div class="form-group">
            <label for="careInstructions">วิธีการดูแล:</label>
            <textarea 
              id="careInstructions" 
              v-model="formData.careInstructions" 
              rows="4"
              placeholder="คำแนะนำในการดูแล..."
            ></textarea>
          </div>

          <div class="form-group">
            <label>
              <input 
                type="checkbox" 
                v-model="formData.isToxic"
              />
              มีพิษ (Toxic)
            </label>
          </div>

          <div class="form-actions">
            <button 
              type="submit" 
              class="submit-button"
              :disabled="uploading"
            >
              <span v-if="!uploading">{{ isUpdate ? 'อัพเดทข้อมูล' : 'อัพโหลดข้อมูล' }}</span>
              <span v-else>กำลังอัพโหลด...</span>
            </button>
            <button 
              type="button" 
              class="cancel-button"
              @click="resetForm"
              :disabled="uploading"
            >
              ล้างฟอร์ม
            </button>
          </div>

          <div v-if="uploadSuccess" class="success-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            อัพโหลดสำเร็จ!
          </div>

          <div v-if="error" class="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            {{ error }}
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import usePlantData from '../composables/usePlantData'

const { uploading, uploadSuccess, error, uploadPlantData, updatePlantData } = usePlantData()

const showForm = ref(false)
const isUpdate = ref(false)

const formData = ref({
  plantId: '',
  commonName: '',
  scientificName: '',
  family: '',
  origin: '',
  description: '',
  careInstructions: '',
  isToxic: false
})

const toggleForm = () => {
  showForm.value = !showForm.value
}

// Allow parent (PlantView via global event) to open scanner/form
function openScannerFromOutside() {
  if (!showForm.value) showForm.value = true
  // scroll into view for better UX
  nextTick(() => {
    const el = document.querySelector('.upload-form-container')
    if (el && 'scrollIntoView' in el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
  // If in future a scanner overlay exists, trigger it here
}

defineExpose({ openScannerFromOutside, toggleForm })

const handleSubmit = async () => {
  try {
    const plantId = formData.value.plantId
    const data = {
      commonName: formData.value.commonName,
      scientificName: formData.value.scientificName,
      family: formData.value.family,
      origin: formData.value.origin,
      description: formData.value.description,
      careInstructions: formData.value.careInstructions,
      isToxic: formData.value.isToxic
    }

    if (isUpdate.value) {
      await updatePlantData(plantId, data)
    } else {
      await uploadPlantData(plantId, data)
    }

    // Reset form after successful upload
    setTimeout(() => {
      resetForm()
      showForm.value = false
    }, 2000)
  } catch (e) {
    console.error('Upload failed:', e)
  }
}

const resetForm = () => {
  formData.value = {
    plantId: '',
    commonName: '',
    scientificName: '',
    family: '',
    origin: '',
    description: '',
    careInstructions: '',
    isToxic: false
  }
  isUpdate.value = false
}
</script>

<style scoped>
.upload-form-container {
  margin: 2rem 0;
  width: 100%;
}

.toggle-upload-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--accent) 0%, #0d5940 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.toggle-upload-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.toggle-upload-button.active {
  background: linear-gradient(135deg, #666 0%, #444 100%);
}

.upload-form-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid #e0e0e0;
}

.upload-form-card h3 {
  margin-top: 0;
  color: var(--accent);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input[type="text"]:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-group input[type="checkbox"] {
  margin-right: 0.5rem;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.submit-button,
.cancel-button {
  flex: 1;
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button {
  background: linear-gradient(135deg, #66bb6a 0%, #43a047 100%);
  color: white;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(67, 160, 71, 0.3);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cancel-button {
  background: #f5f5f5;
  color: #666;
}

.cancel-button:hover:not(:disabled) {
  background: #e0e0e0;
}

.success-message,
.error-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.success-message {
  background: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #a5d6a7;
}

.error-message {
  background: #ffebee;
  color: #c62828;
  border: 1px solid #ef9a9a;
}

/* Transition animations */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@media (max-width: 768px) {
  .upload-form-card {
    padding: 1.5rem;
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>
