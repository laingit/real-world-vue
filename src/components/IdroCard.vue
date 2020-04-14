<template>
  <router-link class="event-link" :to="{ name: 'idro-show', params: { id: idrometro.id } }">
    <div class="event-card -shadow">
      <span class="eyebrow">{{ idrometro.codice }}: {{ idrometro.stazione }}</span>     
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    idrometro: Object
  }
}
</script>

<style scoped>
.event-card {
  padding: 5px;
  margin-bottom: 4px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
