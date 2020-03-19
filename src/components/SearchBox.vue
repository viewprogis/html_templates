<template>
  <div class="tw-hidden xss:tw-flex tw-p-3">
    <div class="tw-flex tw-flex-grow tw-items-center tw-bg-white tw-rounded">
      <a href="/search"
        ><img class="tw-flex-none tw-px-3" src="@/assets/img/icon_search.svg"
      /></a>
      <input
        class="input-global tw-flex-grow tw-bg-transparent tw-border-none tw-appearance-none tw-px-4 tw-pl-0 tw-leading-tight focus:tw-outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
    <button
      type="button"
      class="search-home-btn tw-items-center tw-rounded tw-ml-2"
    >
      <img class="tw-mx-auto" src="@/assets/img/icon_material_home.svg" />
      <img class="tw-mx-auto invert" src="@/assets/img/icon_material_home_white.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "searchbox"
};
</script>
<style scoped lang="scss"></style>
