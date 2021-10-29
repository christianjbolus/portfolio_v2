<script>
  export let text, url, className, onClick;
</script>

<a class={className} href={url} on:click={onClick} target="_blank">{text}</a>
