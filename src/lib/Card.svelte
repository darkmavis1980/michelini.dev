<script lang="ts">
  import Social from './Social.svelte';
</script>

<div class="card">
  <header class="header">
    <img src="images/profile_3.jpg" alt="" class="profile">
    <h1>Alessio Michelini <span>/ Web Dev</span></h1>
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
    min-width: 1024px;
  }

  .card .header img {
    width: 300px;
    height: 300px;
    border-radius: 50px;
  }

  .card article {
    background-color: var(--beige-color);
    padding: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
</style>