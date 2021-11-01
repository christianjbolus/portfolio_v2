<script>
  import { Icon } from './icons/index'
  import { socialMedia } from '../data'
</script>

<footer>
  <div class="social">
    {#each socialMedia as {name, url}}
    <a href={url}>
      <Icon name={name} className="social-icon"/>
    </a>
    {/each}
  </div>
  <div>
    <p>Built by Christian Bolus</p>
  </div>
</footer>

<style lang="scss">
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .social {
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 200px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  a {
      padding: 10px;
    }

  p {
    color: var(--light-grey);
    font-family: var(--font-mono);
    font-size: var(--fs-xxs);
    margin-bottom: 20px;
  }
</style>