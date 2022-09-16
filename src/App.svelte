<script lang="ts">
  import Social from './lib/Social.svelte';
  import Card from './lib/Card.svelte';
</script>

<main>

  <section>
    <h1>Alessio Michelini <span>/ Web Dev</span></h1>
    <Card />
    <Social />
  </section>
</main>

<style lang="scss">
  :root {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    
  }

  section {
    display: grid;
    height: 90vh;
    justify-content: center;
    align-content: center;
  }

  h1 {
    color: lightcoral;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.5rem;
    margin: 2rem auto;
    max-width: 14rem;
  }

  h1 > span {
    opacity: .6;
    font-size: 3rem;
    font-weight: 400;
  }
/* 
  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  } */

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
