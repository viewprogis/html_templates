<template>
  <div class="tw-bg-white tw-rounded tw-p-3 tw-mt-3">
    <a
      href="javascript:void(0)"
      class="tw-flex tw-items-center"
      ><i
        class="fas fa-chevron-down tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-mr-2"
      ></i>
      <span class="tw-text-tertiary">Login</span></a
    >

    <div class="tw-mt-4">
      <p class="tw-text-sm">Realtors or other ViewPro account holders, please enter credentials below to login</p>

      <form>
        <input
          class="tw-w-full tw-bg-white tw-border tw-border-solid tw-rounded tw-appearance-none tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none tw-placeholder-black"
          type="text"
          placeholder="Username"
        />

        <input
          class="tw-w-full tw-bg-white tw-border tw-border-solid tw-rounded tw-appearance-none tw-mt-3 tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none tw-placeholder-black"
          type="password"
          placeholder="Password"
        />

        <a href="javascript:void(0)" class="tw-block tw-text-right tw-text-sm tw-mt-2"><span class="tw-text-tertiary tw-underline">Forgot Password? ></span></a>

        <button
          class="btn-primary tw-rounded-br-15 tw-mt-5 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "loginpanel"
};
</script>
