<template>
  <div class="tw-flex">
    <div class="tw-flex tw-flex-grow tw-items-center tw-bg-white tw-rounded">
      <a href="/search"><img class="tw-flex-none tw-px-3" src="@/assets/img/icon_search.svg"/></a>
      <input
        class="tw-flex-grow tw-bg-transparent tw-border-none tw-appearance-none tw-py-3 tw-px-4 tw-pl-0 tw-text-gray-700 tw-leading-tight focus:tw-outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
    <button type="button" class="tw-items-center tw-rounded tw-ml-2 tw-px-3" style="background: rgba(0,0,0,0.08);">
      <img src="@/assets/img/icon_material_home.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "searchbox"
};
</script>
<style scoped lang="scss"></style>
