import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/login': 'http://localhost:5000',
      '/logout': 'http://localhost:5000',
      '/me': 'http://localhost:5000',
      '/health': 'http://localhost:5000',
      '/data_pegawai': 'http://localhost:5000',
      '/data_jabatan': 'http://localhost:5000',
      '/data_kehadiran': 'http://localhost:5000',
      '/data_potongan': 'http://localhost:5000',
      '/data_gaji': 'http://localhost:5000',
      '/data_gaji_pegawai': 'http://localhost:5000',
      '/laporan': 'http://localhost:5000',
      '/dashboard': 'http://localhost:5000',
      '/change_password': 'http://localhost:5000',
      '/images': 'http://localhost:5000',
    },
  },
})
