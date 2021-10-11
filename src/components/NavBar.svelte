<div class="container">
  <nav class="navbar">
    <ol class="nav-links">
      <li class="link"><a>About</a></li>
      <li class="link"><a>Skills</a></li>
      <li class="link"><a>Projects</a></li>
      <li class="link"><a>Contact</a></li>
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
    color: #dfdfdf;
    padding: 10px;
  }
  
  ol li a::before {
    counter-increment: link;
    content: "0" counter(link) ".";
    color: var(--accent);
    margin-right: 5px;
  }
</style>