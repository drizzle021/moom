<template>
     <q-dialog v-model="profile" class="full-width">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ user.name }}</div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Close" @click="profile = closeDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
 import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'UserProfile',
    components:{},

    props: {
        user: Object
    },

    setup(){
      return{
        profile: ref(false),
      }

    },
    emits: ['close'],

    methods: {
    closeDialog() {
        this.visible = false;
        this.$emit('close');
    },
  },

})
</script>