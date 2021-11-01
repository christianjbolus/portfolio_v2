<script>
  import { NavBar, Social, Email, Footer } from './index'
</script>

<div class="layout">
  <NavBar />
  <Social />
  <Email />
  <div id="content">
    <slot />
    <Footer />
  </div>
</div>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    padding: 0 150px;

    @media (max-width: 1080px) {
			padding: 0 100px;
		}

    @media (max-width: 768px) {
			padding: 0 50px;
		}

    @media (max-width: 480px) {
			padding: 0 25px;
		}
  }
</style>