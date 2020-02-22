<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="900"
  >
    <div class="tw-bg-white tw-p-3">
      
      <div class="tw-flex">
        <!-- Left Col -->
        <div class="tw-flex-1 tw-pt-5 tw-pr-12 tw-pl-4 tw-pb-12">
          <h1 class="tw-text-2xl tw-mb-2">Support</h1>

          <p>Running into technical issues? We can help. Fill out this form and we will contact you.</p>

          <textarea class="tw-w-full tw-rounded tw-bg-lightbluealpha tw-placeholder-gray-700 tw-outline-none tw-resize-none tw-py-2 tw-px-3" rows="10" placeholder="Write your message..."></textarea>

          <input type="email" class="tw-mt-3 tw-w-full tw-rounded tw-bg-lightbluealpha tw-placeholder-gray-700 tw-outline-none tw-resize-none tw-py-2 tw-px-3" placeholder="Email" />
          
          <input type="text" class="tw-mt-2 tw-w-full tw-rounded tw-bg-lightbluealpha tw-placeholder-gray-700 tw-outline-none tw-resize-none tw-py-2 tw-px-3" placeholder="Screen Name (optional)" />

          <button
            class="btn-primary tw-mt-4 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-max-w-3xs"
          >
            Submit
          </button>
        </div>

        <!-- Right Col -->
        <div class="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-lightgray tw-relative tw-rounded-lg">
          <button type="button"
            @click="updateValue(false)"
            class="tw-text-tertiary tw-absolute tw-top-0 tw-right-0 tw-mt-2 tw-mr-2 tw-font-bold"
          >
            Close
          </button>

          <h1 class="tw-text-2xl tw-mb-2">Take a Tour</h1>

          <p>View a quick overview of the<br/>ViewPRO Zooming Map Viewer</p>

          <button
            type="button" 
            @click.stop="dialog2 = true"
            class="btn-primary tw-mt-4 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-max-w-3xs"
          >
            See Videos
          </button>

          <!-- Help Video Dialog -->
          <help-video-dialog :dialog="dialog2" @ChangeDialog="updateDialog2"></help-video-dialog>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import HelpVideoDialog from "@/components/Settings/HelpVideoDialog.vue";

export default {
  name: "helpdialog",
  components: {
    HelpVideoDialog
  },
  data(){
    return{
      dialog2: false
    }
  },
  props:{
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('ChangeDialog', value);
    },
    updateDialog2(value) {
        this.dialog2 = value
    }
  }
};
</script>
