<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    <div class="tw-mt-2"></div>

    <!-- Parameter Opened -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
      >
        <span class="tw-text-tertiary">Choose your parameters</span></a
      >

      <div class="panel-content tw-mt-4 tw-text-black">
        

        <a
          href="javascript:void(0)"
          class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-4 tw-rounded tw-overflow-hidden tw-py-2 tw-px-4 tw-text-sm"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
          ></div>
          <span class="tw-flex-grow">Search on enCodePlus</span
          ><a href="javascript:void(0)" class="blue-arrow-right"></a>
        </a>

      </div>
    </div>

    <!-- Landuse lookup Panel -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2 active">
      <div class="tw-flex tw-items-center">
        <a
          href="javascript:void(0)"
          class="tw-flex tw-items-center tw-flex-grow panel-heading"
        >
          <span class="tw-text-tertiary">Results</span></a
        >
        <a href="javascript:void(0)"
          ><span class="tw-text-tertiary"
            ><i class="fas fa-times"></i> Clear</span
          ></a
        >
      </div>

      <div class="tw-mt-4 tw-text-black panel-content">

        <table class="tw-text-sm tw-text-left tw-w-full">
          <tr class="tw-border-b tw-border-solid">
            <th
              class="tw-py-2 tw-pr-2 tw-align-top tw-whitespace-no-wrap"
            >
              Land Use Category:
            </th>
            <td class="tw-py-2 tw-pl-2 tw-w-full">
              <a href="javascript:void(0)" class="tw-block"
                ><span class="tw-text-tertiary hover:tw-underline hover:tw-font-bold"
                  >Commercial</span
                ></a>
            </td>
          </tr>
          <tr class="tw-border-b tw-border-solid">
            <th class="tw-py-2 tw-pr-2 tw-align-top">
              Land Use:
            </th>
            <td class="tw-py-2 tw-pl-2 tw-w-full">
              <a href="javascript:void(0)" class="tw-block"
                ><span class="tw-text-tertiary hover:tw-underline hover:tw-font-bold"
                  >Architecture Offices</span
                ></a>
            </td>
          </tr>
          <tr class="tw-border-b tw-border-solid">
            <th class="tw-py-2 tw-pr-2 tw-align-top">
              Sort by:
            </th>
            <td class="tw-py-2 tw-pl-2 tw-leading-tight tw-w-full">
              <a href="javascript:void(0)" class="tw-block"
                ><span class="tw-text-tertiary hover:tw-underline hover:tw-font-bold"
                  >Permitted Uses</span
                ></a>
            </td>
          </tr>
        </table>
        
        <div class="tw-text-sm tw-mt-8">
          <a href="javascript:void(0)"><span class="tw-text-tertiary tw-font-bold">Select All</span></a>&nbsp;/&nbsp;
          <a href="javascript:void(0)"><span class="tw-text-tertiary tw-font-bold">Deselect All</span></a>
        </div>
        <ul class="tree-view" style="padding-left: 0;">
          <li>
            <v-switch color="#FF7F7F" inset hide-details>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <b class="tw-text-base">C-0</b>
                  Nonretail Business District
                </div>
              </template>
            </v-switch>
          </li>
          <li>
            <v-switch color="#FF0200" inset hide-details>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <b class="tw-text-base">CP-0</b>
                  Planned Non-Retail<br/>
                  Commerical Business District
                </div>
              </template>
            </v-switch>
          </li>
          <li>
            <v-switch color="#FF7F7F" inset hide-details>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <b class="tw-text-base">C-2</b>
                  Planned General Business District
                </div>
              </template>
            </v-switch>
          </li>
          <li>
            <v-switch color="#DF73FF" inset hide-details>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <div class="tw-text-base">General Industrial District</div>
                  <span class="tw-opacity-50">M-2</span>
                </div>
              </template>
            </v-switch>
          </li>
          <li>
            <v-switch color="#DF73FF" inset hide-details>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <div class="tw-text-base">Planned Light Industrial and 
                  Industrial Park District
                  </div>
                  <span class="tw-opacity-50">MP-1</span>
                </div>
              </template>
            </v-switch>
          </li>
          <li>
            <v-switch color="#FF0200" inset hide-details>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <div class="tw-text-base">Planned Limited Commercial 
                  District
                  </div>
                  <span class="tw-opacity-50">CP-1</span>
                </div>
              </template>
            </v-switch>
          </li>
          <li>
            <v-switch color="#A80102" inset hide-details>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <div class="tw-text-base">Central Business District</div>
                  <span class="tw-opacity-50">C-0</span>
                </div>
              </template>
            </v-switch>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "landuselookup"
};
</script>
