<script>
  export let text = undefined, url = undefined, className, onClick = null;
</script>

{#if url}
  <a class={className} href={url} on:click={onClick} target="_blank">{text}</a>
{:else}
  <button class={className} on:click={onClick}>
    <slot />
  </button>
{/if}
