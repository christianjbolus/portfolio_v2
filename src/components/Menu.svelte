<script>
  import { navLinks, resume } from '../data'
  import { Transition } from './effects/index'
  import { Button } from './index'

  let show = false

  const toggleMenu = () => {
    show = !show
    document.body.classList.toggle('blur')
  }
</script>

<div class="menu">
  <Transition type="fade" config={{y: -100, duration: 500, delay: 100}}>
    <Button className="ham-button">
      <div class="ham-container">
        <div class={show ? 'menu-control close' : 'menu-control'} on:click={toggleMenu}></div>
      </div>
    </Button>
    <aside class={show ? 'show-menu' : ''}>
      <nav>
        <ol>
          {#each navLinks as { url, name }}
          <li on:click={toggleMenu}>
            <a href={url}>{name}</a>
          </li>
          {/each}
        </ol>
        <Button className="resume-link" text="Resume" url={resume} onClick={toggleMenu}/>
      </nav>
    </aside>
  </Transition>
</div>

<style lang="scss">
  .menu {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .menu-control {
    height: 2px;
    width: 30px;
    background-color: var(--accent);
    border-radius: 5px;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 15;
    transition: var(--transition);

    &::before, &::after {
      content: '';
      position: absolute;
      right: 0;
      height: 2px;
      width: 100%;
      background-color: var(--accent);
      border-radius: 5px;
      transition: var(--transition);
    }

    &::before {
      top: -10px;
    }

     &::after {
      top: 10px;
     }

     &.close {
      transform: rotate(45deg);
      height: 0;

      &::before {
        top: 0;
        transform: rotate(-90deg);
      }

      &::after {
        top: 0;
      }
     }
  }

  .ham-container {
    position: relative;
    height: 26px;
    width: 30px;
  }

  aside {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
    width: 300px;
    background-color: #3b3b3b;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 10px;
    transition: var(--transition);
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  ol {
    font-family: var(--font-mono);
    width: 100%;
  }

  li {
    counter-increment: link;
    font-size: var(--fs-sm);
    text-align: center;
    margin-bottom: 10px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    color: var(--light-grey);

    &::before {
      content: "0" counter(link) ".";
      color: var(--accent);
      display: block;
      margin-bottom: 10px;
    }
  }

  .show-menu {
    transform: translateX(0);
  }
</style>