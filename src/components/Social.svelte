<script>
  import { GitHub, LinkedIn, Twitter, Instagram } from './icons/index'
  const icons = [GitHub, LinkedIn, Twitter, Instagram]
</script>

<div class="social">
  <a href="https://github.com/christianjbolus">
    <GitHub />
  </a>
  <a>
    <LinkedIn />
  </a>
  <a>
    <Twitter />
  </a>
  <a>
    <Instagram />
  </a>
</div>

<style lang="scss">
  .social {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 20px;
  }
</style>
