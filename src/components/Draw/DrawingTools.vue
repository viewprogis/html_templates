<template>
  <ul class="drawing-tools tw-list-none tw-flex tw-flex-wrap">
    <li class="tw-p-1">
      <a
        class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
        href="javascript:void(0)"
        data-tooltip="Draw Point"
        ><img class="tw-mx-auto" src="@/assets/img/pin_icon.svg"
      /></a>
    </li>
    <li class="tw-p-1">
      <a
        class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
        href="javascript:void(0)"
        data-tooltip="Draw Line"
        ><img class="tw-mx-auto" src="@/assets/img/selection_line.svg"
      /></a>
    </li>
    <li class="tw-p-1">
      <a
        class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
        href="javascript:void(0)"
        data-tooltip="Draw Polygon"
        ><img class="tw-mx-auto" src="@/assets/img/selection_polygon.png"
      /></a>
    </li>
    <li class="tw-p-1">
      <a
        class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
        href="javascript:void(0)"
        data-tooltip="Draw Circle"
        ><img class="tw-mx-auto" src="@/assets/img/draw_circle.svg"
      /></a>
    </li>
    <li class="tw-p-1">
      <a
        class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
        href="javascript:void(0)"
        data-tooltip="Draw Rectangle"
        ><img class="tw-mx-auto" src="@/assets/img/draw_rectangle.svg"
      /></a>
    </li>
    <li class="tw-p-1">
      <a
        class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
        href="javascript:void(0)"
        data-tooltip="Draw Freehand Curve"
        ><img class="tw-mx-auto" src="@/assets/img/draw_curve.svg"
      /></a>
    </li>
    <li class="tw-p-1">
      <a
        class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
        href="javascript:void(0)"
        data-tooltip="Delete Drawing"
        ><img class="tw-mx-auto" src="@/assets/img/trash_icon.svg"
      /></a>
    </li>
    <!--<li class="tw-p-1"><a class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12" href="javascript:void(0)"><img class="tw-mx-auto" src="@/assets/img/selection_layer.svg" /></a></li>-->
  </ul>
</template>

<script>
export default {
  name: "drawingtools"
};
</script>
