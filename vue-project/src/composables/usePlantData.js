// ในไฟล์ src/composables/usePlantData.js

// TODO: Copilot สร้าง Vue Composable
// 1. import { ref } from 'vue'
// 2. สร้าง 'export default function usePlantData()'
// 3. ข้างในฟังก์ชัน:
//    - สร้าง ref 'plantData', 'loading', 'error'
//    - สร้างฟังก์ชัน async 'fetchPlantData' (เหมือนใน Prompt 2)
//    - ให้ฟังก์ชันนี้รับ 'plantId' เป็น parameter
//    - เรียก API โดยใช้ `fetch(\`/api/data-info/${plantId}\`)`
//    - เมื่อ fetch เสร็จ ให้ set loading, data, error
// 4. ให้ฟังก์ชัน usePlantData คืนค่า (return) { plantData, loading, error, fetchPlantData }

import { ref } from 'vue'

export default function usePlantData() {
  const plantData = ref(null)
  const loading = ref(true)
  const error = ref(null)
  const uploading = ref(false)
  const uploadSuccess = ref(false)

  const fetchPlantData = async (plantId) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(`/api/data-info/${plantId}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      plantData.value = data
    } catch (e) {
      error.value = "ไม่สามารถโหลดข้อมูลได้: " + e.message
    } finally {
      loading.value = false
    }
  }

  // ฟังก์ชันสำหรับอัพโหลด/อัพเดทข้อมูลพืช
  // support optional files (images) -> if files provided use FormData
  const uploadPlantData = async (plantId, data, files) => {
    uploading.value = true
    error.value = null
    uploadSuccess.value = false

    try {
      let response
      if (files && files.length) {
        const form = new FormData()
        // append metadata fields
        if (data && typeof data === 'object') {
          Object.keys(data).forEach((k) => {
            // convert boolean to string
            const val = data[k]
            form.append(k, val == null ? '' : String(val))
          })
        }
        files.forEach((f, idx) => {
          // append multiple files under the same key 'images'
          form.append('images', f, f.name || `image-${idx}`)
        })

        response = await fetch(`/api/data-info/${plantId}`, {
          method: 'POST',
          body: form,
        })
      } else {
        response = await fetch(`/api/data-info/${plantId}`, {
          method: 'POST', // หรือ 'PUT' ขึ้นอยู่กับ API ของคุณ
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
      }

      if (!response.ok) {
        throw new Error('Failed to upload data')
      }

      const result = await response.json()
      plantData.value = result
      uploadSuccess.value = true

      return result
    } catch (e) {
      error.value = "ไม่สามารถอัพโหลดข้อมูลได้: " + e.message
      throw e
    } finally {
      uploading.value = false
    }
  }

  // ฟังก์ชันสำหรับอัพเดทข้อมูลพืชที่มีอยู่แล้ว
  // support optional files for update
  const updatePlantData = async (plantId, data, files) => {
    uploading.value = true
    error.value = null
    uploadSuccess.value = false

    try {
      let response
      if (files && files.length) {
        const form = new FormData()
        if (data && typeof data === 'object') {
          Object.keys(data).forEach((k) => {
            const val = data[k]
            form.append(k, val == null ? '' : String(val))
          })
        }
        files.forEach((f, idx) => {
          form.append('images', f, f.name || `image-${idx}`)
        })

        response = await fetch(`/api/data-info/${plantId}`, {
          method: 'PUT',
          body: form,
        })
      } else {
        response = await fetch(`/api/data-info/${plantId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
      }

      if (!response.ok) {
        throw new Error('Failed to update data')
      }

      const result = await response.json()
      plantData.value = result
      uploadSuccess.value = true

      return result
    } catch (e) {
      error.value = "ไม่สามารถอัพเดทข้อมูลได้: " + e.message
      throw e
    } finally {
      uploading.value = false
    }
  }

  return {
    plantData,
    loading,
    error,
    uploading,
    uploadSuccess,
    fetchPlantData,
    uploadPlantData,
    updatePlantData
  }
}
