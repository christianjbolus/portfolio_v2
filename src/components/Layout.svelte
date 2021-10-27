<script>
  import { NavBar, Social, Email } from './index'
</script>

<div class="layout">
  <NavBar />
  <Social />
  <Email />
  <slot />
</div>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 150px;

    @media (max-width: 1024px) {
			padding: 0 100px;
		}
  }
</style>