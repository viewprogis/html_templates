<template>
  <!-- Legend Panel -->
  <div class="panel tw-bg-white tw-rounded tw-p-3 active">
    <a href="javascript:void(0)" class="tw-flex tw-items-center panel-heading">
      <span class="tw-text-tertiary">Legend</span></a
    >

    <div class="tw-mt-4 panel-content">
      <ul class="tree-view tw-text-black" style="padding-left: 0;">
        <li>
          <v-switch color="black" inset hide-details label="City Limits" />
        </li>
        <li class="active has-child">
          <v-switch
            color="black"
            inset
            hide-details
            label="Administrative Layers"
            v-model="isChecked"
          />
          <button type="button" class="toggle"></button>

          <ul class="tree-view">
            <li class="active has-child">
              <v-switch
                color="black"
                inset
                hide-details
                label="Commission Districts"
                v-model="isChecked"
              />
              <button type="button" class="toggle"></button>

              <ul class="tree-view">
                <li>
                  <v-radio-group hide-details>
                    <v-radio class="yellow-radio" label="District 1"></v-radio>
                  </v-radio-group>
                </li>
                <li>
                  <v-radio-group hide-details>
                    <v-radio class="green-radio" label="District 2"></v-radio>
                  </v-radio-group>
                </li>
                <li>
                  <v-radio-group hide-details>
                    <v-radio class="pink-radio" label="District 3"></v-radio>
                  </v-radio-group>
                </li>
                <li>
                  <v-radio-group hide-details>
                    <v-radio class="red-radio" label="District 4"></v-radio>
                  </v-radio-group>
                </li>
              </ul>
            </li>
            <li class="has-child">
              <v-switch
                color="black"
                inset
                hide-details
                label="Other Districts"
              />
            </li>
          </ul>
        </li>
        <li class="active has-child">
          <v-switch
            color="black"
            inset
            hide-details
            label="Zoning (September 2019)"
            v-model="isChecked"
          />
          <button type="button" class="toggle"></button>

          <ul class="tree-view">
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-green-600"></i>
              AG
            </li>
            <li>
              <i
                class="fas fa-circle tw-text-xl tw-mr-2 tw-text-greencustom"
              ></i>
              AG (Wyco)
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-bp"></i> B-P
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i>
              C-0
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i>
              C-1
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i>
              C-1 (Wyco)
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i>
              C-2
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i>
              C-2 (Wyco)
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-300"></i>
              C-3
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-800"></i>
              C-D
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-600"></i>
              CP-0
            </li>
            <li>
              <i class="fas fa-circle tw-text-xl tw-mr-2 tw-text-red-600"></i>
              CP-0
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "legendpanel",
  data() {
    return {
      isChecked: true
    };
  }
};
</script>
