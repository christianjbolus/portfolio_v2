<script>
  import { Icon } from './icons/index'
  import {socialMedia} from '../data'
</script>

<div class="social">
  {#each socialMedia as {name, url}}
    <a href={url}>
      <Icon name={name} />
    </a>
  {/each}
</div>

<style lang="scss">
  .social {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 20px;

    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      background-color: var(--light-grey);
    }
  }
</style>
