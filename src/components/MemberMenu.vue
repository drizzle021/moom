<template>
<q-menu anchor="bottom left" self="top left" context-menu>
  <q-item clickable @click="profileClick">
    <q-item-section>Profile</q-item-section>
  </q-item>
  <q-item clickable>
    <q-item-section>Kick</q-item-section>
  </q-item>
</q-menu>

</template>


<script>
 import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MemberMenu',
    components:{},

    setup(){
      return{
      }

    },


})
</script>