<template>
  <div>
  <div class="tw-fixed tw-top-0 tw-w-full tw-h-full tw-overflow-hidden xss:tw-pt-0 tw-pt-16">
    <div class="tw-relative tw-w-full tw-h-full">
    <div class="map-container tw-w-full tw-h-full tw-relative tw--z-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26371661.859564565!2d-113.72360706725826!3d36.210406270518746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1579731061144!5m2!1sen!2s"
        class="tw-w-full tw-h-full"
      ></iframe>
    </div>
    <a
      class="tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-mt-20 tw-mr-20 tw-rounded-sm tw-border-2 tw-border-solid tw-border-black tw-bg-white tw-text-black hover:tw-bg-black hover:tw-text-white tw-py-1 tw-px-4"
      href="/drop-pin/add"
      >CLICK TO ADD A PIN</a
    >

    <div
      class="map-buttons tw-absolute tw-right-0 tw-top-0 lg:tw-top-auto lg:tw-bottom-0 lg:tw-right-auto lg:tw-left-0 tw-bottom-0 tw-z-10 tw-h-full tw-w-auto lg:tw-w-full lg:tw-h-auto tw-pointer-events-none"
    >
      <div class="tw-flex tw-flex-col lg:tw-flex-row tw-h-full lg:tw-h-auto tw-items-end lg:tw-items-center tw-px-4 tw-py-4 lg:tw-py-2 tw-justify-between tw-pointer-events-none">
        <ul class="tw-flex tw-flex-col lg:tw-flex-row pl-0 tw-pointer-events-auto">
          <li class="tw-mb-2 lg:tw-mr-3">
            <a href="javascript:void(0)" class="tw-p-2"
              ><img src="@/assets/img/icon_map_plus.svg"
            /></a>
          </li>
          <li class="tw-mb-2 lg:tw-mr-3">
            <a href="javascript:void(0)" class="tw-p-2"
              ><img src="@/assets/img/icon_map_minus.svg"
            /></a>
          </li>
          <li class="tw-mb-2 lg:tw-mr-3">
            <button type="button" @click.stop="dialog2 = true" class="tw-p-2">
              <img src="@/assets/img/icon_map_zoom.svg" />
            </button>
          </li>
          <li class="tw-mb-2 lg:tw-mr-3">
            <a href="javascript:void(0)" id="base-map-open" class="tw-p-2"
              ><img src="@/assets/img/icon_map_base.svg"
            /></a>
          </li>
          <li class="tw-mb-2 lg:tw-mr-3">
            <a href="javascript:void(0)" @click.stop="dialog = true" class="tw-p-2"
              ><img src="@/assets/img/icon_map_3d.svg"
            /></a>
          </li>
          <li class="tw-mb-2 lg:tw-mr-3">
            <button type="button" class="toggle-spin tw-p-2">
              <img src="@/assets/img/icon_map_circle.svg" />
            </button>
          </li>
          <li class="tw-mb-2 lg:tw-mr-3">
            <a href="javascript:void(0)" class="tw-p-2 lg:tw-p-1"
              ><img src="@/assets/img/icon_map_gps.svg"
            /></a>
          </li>
        </ul>
        <ul class="tw-flex tw-pointer-events-auto">
          <li class="tw-hidden xss:tw-block tw-mb-2 tw-mr-1">
            <a href="https://www.facebook.com" class="social-icon facebook tw-p-2" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="tw-hidden xss:tw-block tw-mb-2 tw-mr-1">
            <a href="https://www.twitter.com" class="social-icon twitter tw-p-2" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li class="tw-hidden xss:tw-block tw-mb-2 tw-mr-1">
            <a href="https://www.linkedin.com" class="social-icon linkedin tw-p-2" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li class="tw-hidden xss:tw-block tw-mb-2 tw-mr-3">
            <a href="https://www.youtube.com" class="social-icon youtube tw-p-2" target="_blank">
              <i class="fab fa-youtube-square"></i>
            </a>
          </li>
          <li class="tw-mb-2 no-rounded-right">
            <a href="javascript:void(0)" class="tw-w-auto" target="_blank">Custom Link 1</a>
          </li>
          <li class="tw-mb-2 no-rounded-left">
            <a href="javascript:void(0)" class="tw-w-auto" target="_blank">Custom Link 2</a>
          </li>
        </ul>
      </div>

      <!-- Results Dialog -->
      <results-dialog
        :dialog="dialog"
        @ChangeDialog="updateDialog"
      ></results-dialog>

      <!-- Warning Dialog -->
      <warning-dialog
        :dialog="dialog2"
        @ChangeDialog="updateDialog2"
      ></warning-dialog>
    </div>

    <!-- Circular menu -->
    <div id="spin-3d">
      <div class="spin-btns">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="360pt" height="360pt" viewBox="-250 -250 860 860" version="1.1">
        <g id="surface1">
          <!-- DOWNLOAD -->
          <g>
            <title>Download</title>
            <path class="intersection" shape-rendering="auto" style="fill-rule:nonzero;fill:rgb(21.568627%,21.960784%,24.313725%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11462.148459 20019.124728 C 11448.938759 20005.93074 11429.385417 20001.374316 11411.703743 20007.372298 L 11398.43316 19968.573958 C 11402.011523 19967.352365 11405.662554 19966.358593 11409.366612 19965.602463 C 11421.333116 19963.161241 11433.670812 19963.161241 11445.63928 19965.602463 C 11457.152105 19967.961197 11468.085558 19972.562793 11477.822949 19979.144075 C 11486.719759 19985.157769 11494.475499 19992.705327 11500.728798 20001.435199 L 11467.374599 20025.273936 C 11465.803418 20023.084103 11464.05548 20021.027821 11462.148459 20019.124728 Z M 11462.148459 20019.124728 " transform="matrix(0.000000000000000122,1.98895,-1.98895,0.000000000000000122,40066.520221,-22548.729282)"/>
            <path class="icon" shape-rendering="auto" style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 305.226562 194.953125 L 305.226562 208.835938 L 295.972656 208.835938 L 309.855469 222.71875 L 323.738281 208.835938 L 314.484375 208.835938 L 314.484375 194.953125 Z M 291.34375 227.347656 L 291.34375 231.976562 L 328.367188 231.976562 L 328.367188 227.347656 Z M 291.34375 227.347656 "/>
          </g>

          <!-- CHART -->
          <g>
            <title>Chart</title>
            <path class="intersection" shape-rendering="auto" style="fill-rule:nonzero;fill:rgb(21.568627%,21.960784%,24.313725%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11338.000706 20048.499118 C 11338.000706 20042.406865 11338.613466 20036.330325 11339.829167 20030.361803 C 11342.189866 20018.848977 11346.793425 20007.915524 11353.374707 19998.180097 C 11359.849935 19988.597859 11368.102561 19980.345234 11377.686763 19973.870006 C 11382.500467 19970.615698 11387.620552 19967.838636 11392.974349 19965.576136 C 11395.160254 19964.651104 11397.387403 19963.812486 11399.653831 19963.058319 L 11412.66517 20001.945038 C 11411.404297 20002.361401 11410.161101 20002.828827 11408.931652 20003.345353 C 11390.776661 20011.002894 11378.982987 20028.796514 11379.000662 20048.499118 Z M 11338.000706 20048.499118 " transform="matrix(0.000000000000000122,1.98895,-1.98895,0.000000000000000122,40055.155359,-22549.711823)"/>
            <path class="icon" shape-rendering="auto" style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 281.015625 78.050781 L 266.269531 78.050781 L 276.089844 87.875 C 276.464844 88.253906 277.074219 88.273438 277.46875 87.914062 C 279.933594 85.597656 281.535156 82.511719 282.011719 79.164062 C 282.046875 78.878906 281.957031 78.597656 281.765625 78.382812 C 281.574219 78.171875 281.300781 78.050781 281.015625 78.050781 Z M 280.039062 74.03125 C 279.523438 66.59375 273.601562 60.671875 266.164062 60.152344 C 265.886719 60.140625 265.621094 60.242188 265.421875 60.433594 C 265.226562 60.625 265.117188 60.890625 265.125 61.167969 L 265.125 75.070312 L 279.03125 75.070312 C 279.304688 75.074219 279.570312 74.964844 279.757812 74.769531 C 279.949219 74.570312 280.050781 74.304688 280.039062 74.03125 Z M 262.140625 78.050781 L 262.140625 63.308594 C 262.140625 63.027344 262.019531 62.753906 261.808594 62.5625 C 261.597656 62.375 261.316406 62.285156 261.03125 62.316406 C 253.484375 63.378906 247.957031 69.96875 248.21875 77.585938 C 248.597656 85.644531 255.25 91.984375 263.320312 91.976562 C 266.335938 91.941406 269.269531 90.984375 271.726562 89.238281 C 271.953125 89.0625 272.097656 88.800781 272.113281 88.511719 C 272.132812 88.226562 272.027344 87.945312 271.824219 87.742188 Z M 262.140625 78.050781 "/>
          </g>

          <!-- SHARE -->
          <g>
            <title>Share</title>
            <path class="intersection" shape-rendering="auto" style="fill-rule:nonzero;fill:rgb(21.568627%,21.960784%,24.313725%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11409.364081 20136.674689 C 11406.042998 20135.995153 11402.763158 20135.127076 11399.540274 20134.074385 L 11399.524562 20134.023322 L 11412.260945 20095.089467 C 11429.812996 20100.838024 11449.105129 20096.220717 11462.151819 20083.150459 C 11463.992065 20081.310214 11465.685012 20079.326599 11467.212985 20077.219253 L 11500.225452 20101.093341 L 11500.355075 20101.356514 C 11494.166587 20109.868385 11486.542434 20117.237221 11477.824345 20123.129148 C 11468.086954 20129.708467 11457.153501 20134.312026 11445.64264 20136.674689 C 11433.672208 20139.111983 11421.334513 20139.111983 11409.364081 20136.674689 Z M 11409.364081 20136.674689 " transform="matrix(0.000000000000000122,1.98895,-1.98895,0.000000000000000122,40055.473591,-22548.775028)"/>
            <path class="icon" shape-rendering="auto" style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 56.648438 212.851562 C 55.300781 212.851562 53.988281 213.308594 52.933594 214.152344 L 46.570312 210.175781 C 46.757812 209.324219 46.757812 208.441406 46.570312 207.589844 L 52.933594 203.609375 C 55.203125 205.417969 58.441406 205.328125 60.605469 203.398438 C 62.773438 201.46875 63.234375 198.257812 61.699219 195.796875 C 60.164062 193.335938 57.082031 192.339844 54.394531 193.433594 C 51.710938 194.527344 50.203125 197.398438 50.824219 200.230469 L 44.460938 204.207031 C 42.019531 202.261719 38.492188 202.53125 36.371094 204.816406 C 34.246094 207.105469 34.246094 210.644531 36.371094 212.933594 C 38.492188 215.222656 42.019531 215.488281 44.460938 213.542969 L 50.824219 217.523438 C 50.273438 219.992188 51.34375 222.542969 53.492188 223.882812 C 55.644531 225.222656 58.40625 225.058594 60.382812 223.476562 C 62.359375 221.890625 63.117188 219.230469 62.277344 216.84375 C 61.4375 214.453125 59.183594 212.851562 56.648438 212.851562 Z M 56.648438 212.851562 "/>
          </g>

          <!-- PRINT -->
          <g>
            <title>Print</title>
            <path class="intersection" shape-rendering="auto" style="fill-rule:nonzero;fill:rgb(21.568627%,21.960784%,24.313725%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11499.762758 20100.869599 L 11467.186293 20077.260648 C 11479.577016 20060.189771 11479.641827 20037.103237 11467.345375 20019.965585 L 11500.679934 19996.095424 C 11501.174856 19996.78478 11501.657994 19997.480027 11502.133276 19998.179202 C 11508.710631 20007.916594 11513.310262 20018.850046 11515.674889 20030.360908 C 11518.112183 20042.329376 11518.112183 20054.667071 11515.674889 20066.637503 C 11513.312226 20078.148365 11508.712595 20089.085745 11502.133276 20098.823137 C 11501.520516 20099.730493 11500.888116 20100.62803 11500.241968 20101.511819 Z M 11499.762758 20100.869599 " transform="matrix(0.000000000000000122,1.98895,-1.98895,0.000000000000000122,40056.032486,-22548.104751)"/>
            <path class="icon" shape-rendering="auto" style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 193.886719 310.3125 L 166.042969 310.3125 C 162.746094 310.3125 160.074219 312.984375 160.074219 316.277344 L 160.074219 328.210938 L 168.03125 328.210938 L 168.03125 336.167969 L 191.898438 336.167969 L 191.898438 328.210938 L 199.855469 328.210938 L 199.855469 316.277344 C 199.855469 312.984375 197.183594 310.3125 193.886719 310.3125 Z M 187.921875 332.191406 L 172.007812 332.191406 L 172.007812 322.246094 L 187.921875 322.246094 Z M 193.886719 318.269531 C 192.789062 318.269531 191.898438 317.378906 191.898438 316.277344 C 191.898438 315.179688 192.789062 314.289062 193.886719 314.289062 C 194.984375 314.289062 195.875 315.179688 195.875 316.277344 C 195.875 317.378906 194.984375 318.269531 193.886719 318.269531 Z M 191.898438 300.367188 L 168.03125 300.367188 L 168.03125 308.324219 L 191.898438 308.324219 Z M 191.898438 300.367188 "/>
          </g>

          <!-- CLOSE -->
          <g>
            <title>Close</title>
            <path class="intersection active toggle-spin" shape-rendering="auto" style="fill-rule:nonzero;fill:rgb(21.568627%,21.960784%,24.313725%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11396.515457 20131.425097 C 11391.16166 20129.162597 11386.041575 20126.383572 11381.227871 20123.125336 C 11366.75337 20113.362413 11355.425158 20099.604763 11348.618018 20083.525694 C 11346.316239 20078.083517 11344.55848 20072.425303 11343.372239 20066.635503 C 11342.154574 20060.665017 11341.541814 20054.588476 11341.541814 20048.496224 L 11382.54177 20048.496224 C 11382.545698 20068.189008 11394.331516 20085.96888 11412.466868 20093.646061 C 11413.743452 20094.188118 11415.037712 20094.671256 11416.347684 20095.099403 L 11403.740924 20134.076464 L 11403.717356 20134.11378 C 11401.274171 20133.320334 11398.874192 20132.424761 11396.515457 20131.425097 Z M 11396.515457 20131.425097 " transform="matrix(0.000000000000000122,1.98895,-1.98895,0.000000000000000122,40056.028508,-22556.76663)"/>
            <path class="icon" shape-rendering="auto" style=" stroke:none;fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 108.363281 64.476562 L 105.578125 61.691406 L 94.4375 72.832031 L 83.300781 61.691406 L 80.515625 64.476562 L 91.65625 75.617188 L 80.515625 86.753906 L 83.300781 89.539062 L 94.4375 78.402344 L 105.578125 89.539062 L 108.363281 86.753906 L 97.222656 75.617188 Z M 108.363281 64.476562 "/>
          </g>
        </g>
        </svg>



        <!--<svg xmlns="http://www.w3.org/2000/svg" width="181" height="181" viewBox="0 0 181 181">
          <g id="circle" transform="translate(0.5 0.5)">
            <g id="Component_26_1" data-name="Component 26 – 1" transform="translate(118.781 60.933)">
              <title>Download</title>
              <path id="Intersection_10" class="intersection" data-tooltip="asd asd" data-name="Intersection 10" d="M11462.149,20019.125a49.072,49.072,0,0,0-50.445-11.752l-13.271-38.8a89.081,89.081,0,0,1,10.933-2.971,90.786,90.786,0,0,1,36.273,0,89.58,89.58,0,0,1,32.183,13.543,90.479,90.479,0,0,1,22.906,22.291l-33.354,23.838A49.18,49.18,0,0,0,11462.149,20019.125Z" transform="translate(20025.275 -11398.433) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <path id="Icon_open-data-transfer-download" class="icon" data-name="Icon open-data-transfer-download" d="M6.98,0V6.98H2.327l6.98,6.98,6.98-6.98H11.633V0ZM0,16.287v2.327H18.613V16.287Z" transform="translate(27.201 36.585)" fill="#fff"/>
            </g>
            <g id="Component_25_1" data-name="Component 25 – 1" transform="translate(89.844 0.002)">
              <title>Chart</title>
              <path id="Intersection_9" class="intersection" data-name="Intersection 9" d="M11338,20048.5a90.812,90.812,0,0,1,1.83-18.139,89.572,89.572,0,0,1,13.545-32.18,90.462,90.462,0,0,1,24.311-24.311,89.531,89.531,0,0,1,15.288-8.293q3.28-1.389,6.679-2.518l13.012,38.887q-1.89.624-3.734,1.4A48.96,48.96,0,0,0,11379,20048.5Z" transform="translate(20048.498 -11337.996) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <path id="chart-pie-solid" class="icon" d="M16.491,9H9.076l4.938,4.938a.5.5,0,0,0,.693.021,7.484,7.484,0,0,0,2.285-4.4A.5.5,0,0,0,16.491,9ZM16,6.979A7.518,7.518,0,0,0,9.023,0,.5.5,0,0,0,8.5.511V7.5h6.993A.5.5,0,0,0,16,6.979ZM7,9V1.588a.5.5,0,0,0-.557-.5A7.494,7.494,0,0,0,0,8.765,7.593,7.593,0,0,0,7.593,16a7.442,7.442,0,0,0,4.227-1.376.5.5,0,0,0,.049-.752Z" transform="translate(34.454 29.741)" fill="#fff" />
            </g>
            <g id="Component_28_1" data-name="Component 28 – 1" transform="translate(0 62.002)">
              <title>Share</title>
              <path id="Intersection_7" class="intersection" data-name="Intersection 7" d="M11409.364,20136.674a88.86,88.86,0,0,1-9.824-2.6l-.015-.051,12.736-38.934a48.962,48.962,0,0,0,49.891-11.939,49.547,49.547,0,0,0,5.061-5.93l33.013,23.873.129.264a90.568,90.568,0,0,1-22.531,21.773,89.713,89.713,0,0,1-32.182,13.545,90.9,90.9,0,0,1-36.277,0Z" transform="translate(20138.502 -11399.525) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <path id="share-alt-solid" class="icon" d="M11,10a2.987,2.987,0,0,0-1.868.653l-3.2-2a3.017,3.017,0,0,0,0-1.3l3.2-2a2.995,2.995,0,1,0-1.06-1.7l-3.2,2a3,3,0,1,0,0,4.694l3.2,2A3,3,0,1,0,11,10Z" transform="translate(16.982 34.516)" fill="#fff"/>
            </g>
            <g id="Component_27_1" data-name="Component 27 – 1" transform="translate(37.271 130)">
              <title>Print</title>
              <path id="Intersection_6" class="intersection" data-name="Intersection 6" d="M11499.763,20100.869l-32.577-23.609a48.952,48.952,0,0,0,.16-57.295l33.334-23.869q.741,1.034,1.454,2.084a89.725,89.725,0,0,1,13.54,32.18,90.853,90.853,0,0,1,0,36.277,89.694,89.694,0,0,1-13.54,32.186q-.921,1.362-1.893,2.689Z" transform="translate(20101.512 -11467.186) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <path id="Icon_material-print" class="icon" data-name="Icon material-print" d="M20,9.5H6a3,3,0,0,0-3,3v6H7v4H19v-4h4v-6A3,3,0,0,0,20,9.5Zm-3,11H9v-5h8Zm3-7a1,1,0,1,1,1-1A1,1,0,0,1,20,13.5Zm-1-9H7v4H19Z" transform="translate(39.711 16.018)" fill="#fff"/>
            </g>
            <g id="Component_29_1" data-name="Component 29 – 1" transform="translate(4.664)">
              <title>Close</title>
              <path id="Intersection_8" class="intersection active toggle-spin" data-name="Intersection 8" d="M11396.515,20131.426a89.28,89.28,0,0,1-15.288-8.3,90.156,90.156,0,0,1-32.608-39.6,89.3,89.3,0,0,1-5.247-16.891,90.712,90.712,0,0,1-1.83-18.139h41a49.04,49.04,0,0,0,29.924,45.15q1.916.812,3.881,1.453l-12.606,38.977-.024.037Q11400.053,20132.925,11396.515,20131.426Z" transform="translate(20134.117 -11341.541) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <g id="intersection8" class="icon" transform="translate(35.318 30.518)" style="isolation: isolate">
                <g id="Core" transform="translate(-341 -89)">
                  <g id="close" transform="translate(341 89)">
                    <path id="Shape" d="M14,1.4,12.6,0,7,5.6,1.4,0,0,1.4,5.6,7,0,12.6,1.4,14,7,8.4,12.6,14,14,12.6,8.4,7Z" fill="#fff" fill-rule="evenodd"/>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>-->
      </div>
    </div>
    
    </div>
  </div>
  <!-- Base MAP -->
  <base-map />
  </div>
</template>
<script>
import ResultsDialog from "@/components/Map/ResultsDialog.vue";
import WarningDialog from "@/components/Map/WarningDialog.vue";
import BaseMap from "@/components/BaseMap/BaseMap.vue";

export default {
  name: "palmbeach",
  components: {
    ResultsDialog,
    BaseMap,
    WarningDialog
  },
  data() {
    return {
      dialog: false,
      dialog2: false
    };
  },
  methods: {
    updateDialog(value) {
      this.dialog = value;
    },
    updateDialog2(value) {
      this.dialog2 = value;
    }
  }
};
</script>
<style scoped lang="scss"></style>
