<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="900"
  >
    <div class="tw-bg-white tw-p-6">
      
      <div class="tw-relative tw-min-h-80">
        <button type="button"
          @click="updateValue(false)"
          class="tw-text-tertiary tw-absolute tw-top-0 tw-right-0 tw-font-bold"
        >
          Close
        </button>
        
        
        <h1 class="tw-text-2xl tw-mb-2">Video</h1>

        <p>Realtors or other ViewPro account holders, please enter credentials below to login</p>

      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "helpvideodialog",
  props:{
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('ChangeDialog', value);
    }
  }
};
</script>
