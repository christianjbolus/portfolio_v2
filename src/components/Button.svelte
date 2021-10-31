<script>
  export let text, url, className, onClick = null;
</script>

<a class={className} href={url} on:click={onClick} target="_blank">{text}</a>
