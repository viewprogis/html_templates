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
        
        
        <h1 class="tw-text-2xl tw-mb-4">DISCLAIMER</h1>

        <p>Welcome to TxDOT El Paso District’s Geo Engagement Tool designed for US 67 corridor Study.</p>
        <br/>
        <p>Please add your own comments or browse all other comments posted by other users.</p>
        <br/>
        <p>Note that the data is provided by TxDOT and the US 67 Corridor Master Plan Consultant Team and is intended to solve safety concerns identified in the US 67 Corridor Study. Any recommended concepts identified in this study will be required to undergo additional studies/evaluations. Concepts shown at this point in the study are not considered official TxDOT recommendations. All comments will be evaluated by the Project Team before being posted on the map.</p>

        <button
          class="btn-primary tw-block tw-mt-12 tw-mx-auto tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-max-w-3xs"
        >
            Acknowledge
        </button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "disclaimerdialog",
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
