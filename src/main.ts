import { createApp } from 'vue'
import App from './App.vue'

const font = new FontFace('Anonymous Pro', 'url(./fonts/Anonymous_Pro-Regular.ttf)')
document.fonts.add(font);

createApp(App).mount('#app')


