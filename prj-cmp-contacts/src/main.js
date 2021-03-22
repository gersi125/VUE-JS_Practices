import { createApp } from 'vue'

import App             from './App.vue'
import BaseCard        from './components/UI/BaseCard.vue'
import BaseDetailsCard from './components/UI/BaseDetailsCard.vue'
import BaseButton      from './components/UI/BaseButton.vue'
import BaseFavButton   from './components/UI/BaseFavButton.vue'
import BaseDialog      from './components/UI/BaseDialog.vue'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-details-card', BaseDetailsCard)
app.component('base-button', BaseButton)
app.component('base-fav-button', BaseFavButton)
app.component('base-dialog', BaseDialog)

app.mount('#app')