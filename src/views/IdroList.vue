<template>
  <div>
    {{idro.fase}}
    <IdroCard v-for="idrometro in idro.idrometri" :key="idrometro.id" :idrometro="idrometro" />
  </div>
</template>

<script>
import IdroCard from '@/components/IdroCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    IdroCard
  },
  created() {
    this.$store.dispatch('idro/fetchIdrometri')
  },
  computed: {
    ...mapState(['idro'])
  }
}
</script>
