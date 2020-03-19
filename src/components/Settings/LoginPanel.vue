<template>
  <div class="panel tw-bg-white tw-rounded tw-mt-2 active">
    <a href="javascript:void(0)" class="tw-flex tw-items-center panel-heading">
      <span class="tw-text-tertiary">Login</span></a
    >

    <div class="panel-content tw-mt-4">
      <p class="tw-text-sm">
        ViewPro account holders, please enter credentials
        below to login.
      </p>

      <form>
        <input
          class="input-global tw-w-full tw-bg-lightbluealpha tw-rounded tw-appearance-none tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none tw-text-sm"
          type="text"
          placeholder="Username"
        />

        <input
          class="input-global tw-w-full tw-bg-lightbluealpha tw-rounded tw-appearance-none tw-mt-3 tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none tw-text-sm"
          type="password"
          placeholder="Password"
        />

        <a
          href="javascript:void(0)"
          class="tw-block tw-text-right tw-text-sm tw-mt-2"
          ><span class="tw-text-tertiary"
            >Forgot Password?</span
          ></a
        >

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
