<script>
  export let text
</script>

<h2 class="numbered-header">{text}</h2>

<style lang="scss">
  .numbered-header {
    color: var(--light-grey);
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;

    &:before {
      counter-increment: section;
	    content: "0" counter(section);
      color: var(--accent);
      font-family: var(--font-mono);
      position: relative;
      top: 3px;
      font-size: 24px;
      font-weight: 400;
      margin-right: 10px;
    }

    &:after {
      content: "";
      display: block;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--dark-grey)
    }
  }
</style>
