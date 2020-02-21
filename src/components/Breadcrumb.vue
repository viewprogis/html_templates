<template>
  <div class="tw-flex tw-p-3">

    <!-- Breadcrumb -->
    <a :href="path" class="tw-mr-1">
      <span class="tw-text-tertiary"><i class="fas fa-long-arrow-alt-left"></i> Back</span>
    </a>
    / Drop Pin
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  props: ['path']
};
</script>
<style scoped lang="scss"></style>
