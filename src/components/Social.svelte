<script>
  import { fade } from 'svelte/transition'
  import {Side} from './index'
  import { Icon } from './icons/index'
  import { socialMedia } from '../data'
</script>

<Side orientation="left">
  <div class="social" transition:fade={{duration: 500, delay: 2000}}>
    {#each socialMedia as {name, url}}
    <a href={url}>
      <Icon name={name} />
    </a>
    {/each}
  </div>
</Side>

<style lang="scss">
  .social {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      background-color: var(--light-grey);
    }
  }
</style>
