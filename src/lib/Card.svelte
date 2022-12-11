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
    border-radius: 1rem;
    padding-top: 2rem;
    background-color: white;
    box-shadow: 5px 5px 30px -20px rgba(0,0,0,1);
    width: 100%;
    position: relative;
  }

  .card .header {
    padding: 0 3rem;
  }

  .card .header img {
    width: 300px;
    height: 300px;
    border-radius: 150px;
  }

  .card article {
    background: linear-gradient(45deg, var(--secondary-color) 0%, var(--thertiary-color) 100%);
    padding: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
</style>