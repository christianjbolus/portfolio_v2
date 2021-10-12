<script>
  export let text;
</script>

<a href="https://drive.google.com/file/d/1EKgM_wVM-yNtksujrNpQMe5cnDGQxavg/view?usp=sharing">{text}</a>

<style>
  a {
    color: var(--accent);
    font-family: var(--font-mono);
    text-decoration: none;
    border: 1px solid var(--accent);
    border-radius: 5px;
    padding: 12px 16px;
    background-color: transparent;
    margin-left: 20px;
    cursor: pointer;
  }

  a:hover {
    background-color: var(--red-tint)
  }
</style>