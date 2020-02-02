<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">

    <!-- Legend Panel -->
    <div class="tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center"
        ><i
          class="fas fa-chevron-down tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-mr-2"
        ></i>
        <span class="tw-text-tertiary">Legend</span></a
      >

      <div class="tw-mt-4">
        
        <ul class="tree-view" style="padding-left: 0;">
          <li>
            <v-switch color="black" inset hide-details label="City Limits" />
          </li>
          <li class="active has-child">
            <v-switch color="black" inset hide-details label="Administrative Layers" v-model="isChecked" />

            <ul class="tree-view">
              <li class="active has-child">
                <v-switch color="black" inset hide-details label="Commission Districts" v-model="isChecked" />

                <ul class="tree-view">
                  <li>
                    <v-radio-group hide-details>
                      <v-radio color="lime accent-2" label="District 1"></v-radio>
                    </v-radio-group>
                  </li>
                  <li>
                    <v-radio-group hide-details>
                      <v-radio color="green accent-2" label="District 2"></v-radio>
                    </v-radio-group>
                  </li>
                  <li>
                    <v-radio-group hide-details>
                      <v-radio color="pink accent-2" label="District 3"></v-radio>
                    </v-radio-group>
                  </li>
                  <li>
                    <v-radio-group hide-details>
                      <v-radio color="red accent-2" label="District 4"></v-radio>
                    </v-radio-group>
                  </li>
                </ul>
              </li>
              <li class="has-child">
                <v-switch color="black" inset hide-details label="Other Districts" />
              </li>
            </ul>
          </li>
          <li class="active has-child">
            <v-switch color="black" inset hide-details label="Zoning (September 2019)" v-model="isChecked" />

            <ul class="tree-view">
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-green-600"></i> AG</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-greencustom"></i> AG (Wyco)</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-bp"></i> B-P</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i> C-0</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i> C-1</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i> C-1 (Wyco)</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i> C-2</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i> C-2 (Wyco)</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i> C-3</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-800"></i> C-D</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-600"></i> CP-0</li>
              <li><i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-600"></i> CP-0</li>
            </ul>
          </li>
        </ul>
        
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: "legendpanel",
  data(){
    return{
      isChecked: true
    }
  }
};
</script>
