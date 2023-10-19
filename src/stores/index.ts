import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { createPinia } from "pinia";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const store=createPinia()


  store.use(piniaPluginPersistedstate)

export default store