<template>
  <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2">
    <a href="javascript:void(0)" class="tw-flex tw-items-center panel-heading">
      <span class="tw-text-tertiary">Activate Private Layers</span></a
    >

    <div class="panel-content tw-mt-4">
      <p class="tw-text-sm">
        Realtors or other ViewPro account holders, please enter credentials
        below to login
      </p>

      <form>
        <input
          class="tw-w-full tw-bg-lightbluealpha tw-placeholder-gray-700 tw-rounded tw-appearance-none tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none tw-placeholder-black"
          type="text"
          placeholder="Username"
        />

        <input
          class="tw-w-full tw-bg-lightbluealpha tw-placeholder-gray-700 tw-rounded tw-appearance-none tw-mt-3 tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none tw-placeholder-black"
          type="password"
          placeholder="Password"
        />

        <a
          href="javascript:void(0)"
          class="tw-block tw-text-right tw-text-sm tw-mt-2"
          ><span class="tw-text-tertiary tw-underline"
            >Forgot Password? ></span
          ></a
        >

        <button
          class="btn-primary tw-rounded-br-15 tw-mt-5 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
        >
          Activate
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "privatelayerspanel"
};
</script>
