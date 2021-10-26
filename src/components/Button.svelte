<script>
  export let text;
</script>

<a href="https://drive.google.com/file/d/1EKgM_wVM-yNtksujrNpQMe5cnDGQxavg/view?usp=sharing">{text}</a>

<style lang="scss">
  a {
    color: var(--accent);
    font-family: var(--font-mono);
    text-decoration: none;
    border: 1px solid var(--accent);
    border-radius: 25px;
    padding: 10px 20px;
    background-color: transparent;
    margin-left: 20px;
    cursor: pointer;
    
    &:hover {
      background-color: var(--red-tint)
    }
  }
</style>