<template>
  <div class="tw-flex xss:tw-hidden tw-pb-2">
    <div class="tw-flex tw-flex-grow tw-items-center tw-bg-white tw-rounded">
      <a href="/search"
        ><img class="tw-flex-none tw-px-3" src="@/assets/img/icon_search.svg"
      /></a>
      <input
        class="input-global tw-flex-grow tw-bg-transparent tw-border-none tw-appearance-none tw-py-3 tw-px-4 tw-pl-0 tw-leading-tight focus:tw-outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "searchbox"
};
</script>
<style scoped lang="scss"></style>
