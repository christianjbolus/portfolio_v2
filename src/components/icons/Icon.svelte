<script>
  import { GitHub, LinkedIn, Twitter, Instagram } from './index'
  export let name;
</script>

{#if name === 'GitHub'}
  <GitHub />
{:else if name === 'LinkedIn'}
  <LinkedIn />
{:else if name === 'Twitter'}
  <Twitter />
{:else if name === 'Instagram'}
  <Instagram />
{/if}