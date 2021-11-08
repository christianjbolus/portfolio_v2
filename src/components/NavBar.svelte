<script>
  import { Transition } from './effects/index'
  import { Button, Menu } from './index'
  import { navLinks, resume } from '../data.js'

  let scrollPosition = window.pageYOffset
  let hide = false
  
  function handleScroll() {
    let currentScrollPosition = window.pageYOffset
    if (currentScrollPosition > scrollPosition) {
      hide = true
    } else {
      hide = false
    }
    scrollPosition = currentScrollPosition
  }

  window.addEventListener('scroll', handleScroll)

</script>

<div class={hide ? "container hide" : "container"}>
  <nav class="navbar">
    <Transition type="fade" config={{y: -100, duration: 500, delay: 100}}>
      <a href="#hero"><img class="logo" src="logo.svg" alt="logo" /></a>
    </Transition>
    <ol class="nav-links">
      {#each navLinks as {url, name}, i}
      <Transition type="fly" config={{y: -100, duration: 500, delay: i * 100}}>
        <li class="link">
          <a href={url}>{name}</a>
        </li>
      </Transition>
      {/each}
      <Transition type="fly" config={{y: -100, duration: 500, delay: navLinks.length * 100}}>
        <Button className="resume-button" text="Resume" url={resume}/>
      </Transition>
    </ol>
      <Menu />
  </nav>
</div>

<style lang="scss">
  .container {
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 50px;
    /* backdrop-filter: blur(5px); */
    background-color: rgba(43, 43, 43, 0.9);
    transition: 300ms;

    @media (max-width: 768px) {
      padding: 0 25px;
    }
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    counter-reset: link;
  }

  .logo {
    height: 45px;
    width: 45px;
  }

  ol {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }

  li {
    margin: 0 5px;
    counter-increment: link;

    a {
      color: var(--light-grey);
      text-decoration: none;
      padding: 10px;
      cursor: pointer;

      &::before {
        content: "0" counter(link) ".";
        color: var(--accent);
        margin-right: 5px;
      }
    }
  }



  .hide {
    transform: translateY(-100px)
  }

</style>