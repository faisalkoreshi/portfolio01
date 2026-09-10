import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// 1. ডিফল্ট ইমপোর্টের বদলে নির্দিষ্ট ফাংশন ইমপোর্ট করুন
import { resolve } from 'path' 
// 2. URL কে পাথে রূপান্তর করার ফাংশন ইমপোর্ট করুন
import { fileURLToPath } from 'url' 

// 3. ES Module-এ __dirname তৈরি করা
const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 4. এখন ঠিকঠাক কাজ করবে
      '@': resolve(__dirname, './src') 
    }
  }
})
