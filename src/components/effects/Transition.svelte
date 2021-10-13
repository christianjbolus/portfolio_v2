<script>
  import {fly} from 'svelte/transition'
  export let config = {};
</script>

<div transition:fly={{...config}}>
  <slot />
</div>