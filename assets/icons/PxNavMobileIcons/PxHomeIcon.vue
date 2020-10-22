<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
  >
    <path
      :fill="color"
      d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
    />
  </svg>
</template>

<script>
export default {
  name: 'PxAboutIcon',
  props: {
    size: {
      type: String,
      required: true,
      default: '25'
    },

    color: {
      type: String,
      required: true,
      default: '#7ba7d1'
    }
  }
}
</script>
