<script>
  import { External, GitHub, LinkedIn, Twitter, Instagram } from './index'
  export let name, className;
</script>

{#if name === 'GitHub'}
  <GitHub className={className} />
{:else if name === 'LinkedIn'}
  <LinkedIn className={className} />
{:else if name === 'Twitter'}
  <Twitter className={className} />
{:else if name === 'Instagram'}
  <Instagram className={className} />
{:else if name === 'External'}
  <External className={className} />
{/if}