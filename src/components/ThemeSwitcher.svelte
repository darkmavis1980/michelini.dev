<script lang="ts">
  import { themeStore } from '../stores/themeStore';
  import { THEMES } from '../config';

  const onChange = ({target}) => {
    themeStore.update(store => {
      store.theme = target.value;
      return store;
    });
   }

  const onClick = (theme): void => {
    themeStore.update(store => {
      store.theme = theme;
      return store;
    });
  }
</script>

<!-- <select on:change={onChange}>
  {#each THEMES as theme}
    <option value={theme}>{theme}</option>
  {/each}
</select> -->
<div class="theme-switcher">
  <ul>
    {#each THEMES as theme}
      <li class={`theme-selector ${theme}`}>
        <a href={`#${theme}`} on:click={() => onClick(theme)}>{theme}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .theme-switcher {
    height: var(--theme-selector-size);
    position: absolute;
    top: -1.5rem;
    right: 0.5rem;
  }

  .theme-switcher ul {
    padding: 0;
    margin: 0;
  }

  .theme-switcher li {
    list-style-type: none;
    display: inline-block;
  }

  

  .theme-selector a {
    border: 2px solid white;
    text-indent: -9999rem;
    display: inline-block;
    margin: 0 0.25rem;
    width: var(--theme-selector-size);
    height: var(--theme-selector-size);
    border-radius: calc((var(--theme-selector-size) / 2) + 2px);
    background-color: black;
    
    transition: all 0.1s;
  }

  .theme-selector.lime a {
    background-color: var(--theme-color-1);
  }

  .theme-selector.orange a {
    background-color: var(--theme-color-2);
  }

  .theme-selector.summer a {
    background-color: var(--theme-color-3);
  }

  .theme-selector.sunset a {
    background-color: var(--theme-color-4);
  }

  @media (min-width: 480px) {

    .theme-selector a {
      filter: grayscale(100%);
      margin: 0 0.1rem;
    }

    .theme-switcher:hover .theme-selector a {
      transition: all 0.1s;
      filter: grayscale(0%);
      margin: 0 0.25rem;
    }
  }
</style>