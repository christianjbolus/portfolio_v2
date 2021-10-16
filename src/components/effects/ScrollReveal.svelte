<script>
  import ScrollReveal from 'scrollreveal'
  import { srConfig } from '../../data'

  function scrollReveal(node) {
    ScrollReveal().reveal(node, srConfig)
  }
</script>

<div class="revealer" use:scrollReveal>
  <slot />
</div>