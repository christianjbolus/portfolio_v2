<script>
  import { Side } from './index'
  import { Icon } from './icons/index'
  import { Transition } from './effects/'
  import { socialMedia } from '../data'
</script>

<Side orientation="left">
  <Transition type="fade" config={{duration: 500, delay: 2000}}>
    <div class="social">
      {#each socialMedia as {name, url}}
      <a href={url}>
        <Icon name={name} />
      </a>
      {/each}
    </div>
  </Transition>
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
