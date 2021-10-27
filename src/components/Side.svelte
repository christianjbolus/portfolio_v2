<script>
  export let orientation;
</script>

<div class={orientation === 'left' ? 'left' : 'right'}>
  <slot />
</div>

<style>
  .left {
    position: fixed;
    bottom: 0;
    left: 40px;
  }

  .right {
    position: fixed;
    bottom: 0;
    right: 40px;
  }
</style>