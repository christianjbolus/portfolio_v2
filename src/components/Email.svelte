<script>
  import { Side } from './index'
  import { Transition } from './effects/'
  import { email } from '../data'
</script>

<Side orientation="right">
  <Transition type="fade" config={{duration: 500, delay: 2000}}>
    <div class="email">
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  </Transition>
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