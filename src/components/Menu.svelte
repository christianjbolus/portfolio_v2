<script>
  import { navLinks, resume } from '../data'
  import { Transition } from './effects/index'
  import { Button } from './index'
  let show = false

  const toggleMenu = () => {
    show = !show
  }
</script>

<div class="menu">
  <Transition type="fade" config={{y: -100, duration: 500, delay: 100}}>
  <div class={show ? 'menu-control close' : 'menu-control'} on:click={toggleMenu}></div>
  <aside class={show ? 'show-menu' : ''}>
    <nav>
      <ol>
        {#each navLinks as { url, name }}
        <li>
          <a href={url}>{name}</a>
        </li>
        {/each}
      </ol>
      <Button className="resume-link" text="Resume" url={resume}/>
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
    position: relative;
    z-index: 15;
    transition: 200ms;

    &::before, &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      background-color: var(--accent);
      transition: 200ms;
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
    transition: 200ms;
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