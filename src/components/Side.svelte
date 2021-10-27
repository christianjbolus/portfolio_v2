<script>
  export let orientation;
</script>

<div class={orientation === 'left' ? 'left' : 'right'}>
  <slot />
</div>

<style lang="scss">
  .left, .right {
    position: fixed;
    bottom: 0;
    left: 40px;

    @media (max-width: 1080px) {
      left: 20px
    }

    @media (max-width: 768px) {
      display: none
    }
  }

  .right {
    right: 40px;
    left: auto;

    @media (max-width: 1080px) {
      right: 20px
    }

  }
</style>