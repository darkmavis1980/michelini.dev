<script lang="ts">
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  import Social from './Social.svelte';
</script>

<div class="card">
  <ThemeSwitcher />
  <header class="header">
    <img src="images/profile_3.jpg" alt="" class="profile">
    <h1>Alessio Michelini <span>&lt;WebDev /&gt;</span></h1>
  </header>
  <article>
    <Social />
  </article>
</div>

<style>
  .card {
    padding-top: 2rem;
    background-color: white;
    box-shadow: 5px 5px 30px -20px rgba(0,0,0,1);
    width: 100%;
    position: relative;
  }

  .card .header h1 {
    color: var(--primary-color);
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2rem;
    margin: 2rem auto;
    max-width: 14rem;
  }

  .card .header h1 > span {
    color: var(--secondary-color);
    font-size: 2rem;
    font-weight: 600;
    display: block;
    margin-top: 1rem;
  }

  .card .header {
    padding: 0 3rem;
  }

  .card .header img {
    width: 150px;
    height: 150px;
    border-radius: 75px;
  }

  .card article {
    background-color: var(--tertiary-color);
    padding: 1rem;
  }

  @media (min-width: 480px) {
    .card {
      border-radius: 1rem;
    }

    .card .header h1 > span {
      display: inline-block;
      margin-top: 0;
    }

    .card .header img {
      width: 300px;
      height: 300px;
      border-radius: 150px;
    }

    .card article {
      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
  }
</style>