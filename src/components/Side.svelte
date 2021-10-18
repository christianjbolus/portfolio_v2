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
    left: 30px;
  }

  .right {
    position: fixed;
    bottom: 0;
    right: 30px;
  }
</style>