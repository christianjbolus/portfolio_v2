<script>
  import { fade, fly } from 'svelte/transition'
  export let config = {}, type;
</script>

{#if type === 'fade'}
  <div transition:fade={{...config}}>
    <slot />
  </div>
{:else if type === 'fly'}
  <div transition:fly={{...config}}>
    <slot />
  </div>
{/if}