<div class="container">
  <nav class="navbar">
    <ol class="nav-links">
      <li class="link"><a href='about'>About</a></li>
      <li class="link"><a href='skills'>Skills</a></li>
      <li class="link"><a href='projects'>Projects</a></li>
      <li class="link"><a href='contact'>Contact</a></li>
    </ol>
  </nav>
</div>

<style>
  .container {
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ol {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-end;
    counter-reset: link 0;
  }

  ol li {
    margin: 0 5px;
    counter-increment: link;
  }

  ol li a {
    color: #dfdfdf;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
  }
  
  ol li a::before {
    content: "0" counter(link) ".";
    color: var(--accent);
    margin-right: 5px;
  }
</style>