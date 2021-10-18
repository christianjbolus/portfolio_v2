<script>
  import { fade } from 'svelte/transition'
  import { Side } from './index'
  import { email } from '../data'
</script>

<Side orientation="right">
  <div class="email" transition:fade={{duration: 500, delay: 2000}}>
    <a href={`mailto:${email}`}>{email}</a>
  </div>
</Side>

<style lang="scss">
  .email {
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

    a {
      color: var(--light-grey);
      text-decoration: none;
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 1px;
      writing-mode: vertical-rl;
      padding: 10px;
    }
  }
</style>