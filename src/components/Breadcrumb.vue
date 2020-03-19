<template>
  <div class="tw-flex tw-z-20 tw-bg-lightgray xss:tw-bg-transparent xss:tw-p-3 xss:tw-px-5 xss:tw-m-0 xss:tw-static xss:tw-leading-normal tw-justify-center xss:tw-justify-start tw-absolute tw-top-0 tw-left-0 tw-pl-4 tw-py-2 tw-leading-none">
    <!-- Breadcrumb -->
    <a :href="path" class="tw-mr-1">
      <span class="tw-text-tertiary"
        ><i class="fas fa-long-arrow-alt-left"></i> Back</span
      >
    </a>
    <span class="tw-hidden xss:tw-inline-block">/ Drop Pin</span>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  props: ["path"]
};
</script>
<style scoped lang="scss"></style>
