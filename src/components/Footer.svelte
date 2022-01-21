<script>
  import { Icon } from './icons/index'
  import { socialMedia } from '../data'
</script>

<footer>
  <div class="social">
    {#each socialMedia as {name, url}}
    <a class="icon" href={url}>
      <Icon name={name} className="social-icon"/>
    </a>
    {/each}
  </div>
  <div>
    <a class="github-link" href="https://github.com/christianjbolus/portfolio_v2" target="_blank">
      Built by Christian Bolus
    </a>
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

  .icon {
      padding: 10px;
    }

  .github-link {
    display: inline-block;
    color: var(--light-grey);
    font-family: var(--font-mono);
    font-size: var(--fs-xxs);
    margin-bottom: 20px;
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      color: var(--accent);
    }
  }
</style>