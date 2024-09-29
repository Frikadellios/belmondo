import './styles/main.css'

import moment from 'moment'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

function fromNow(value) {
  if (value) {
    return moment(String(value)).fromNow()
  }
  return ''
}

function fileSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}

const app = createApp(App)

app.use(router)

app.config.globalProperties.$filters = { fromNow, fileSize }

app.mount('#app')
