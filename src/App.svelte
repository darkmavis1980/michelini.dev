<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import ThemeSwitcher from './lib/ThemeSwitcher.svelte';
  import Card from './lib/Card.svelte';
  import './style.css'
  import { themeStore } from './stores/themeStore';

  const { theme } = $themeStore;
  let currentTheme = theme;

  let unsubscribeStore = themeStore.subscribe(({theme}) => {
    currentTheme = theme;
  });

  onDestroy(() => {
    unsubscribeStore();
  });
</script>

<main data-theme={currentTheme}>
  <section>
    <ThemeSwitcher />
    <Card />
  </section>
</main>