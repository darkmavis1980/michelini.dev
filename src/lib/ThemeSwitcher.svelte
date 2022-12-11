<script lang="ts">
  import { themeStore } from '../stores/themeStore';
  import { THEMES } from '../config';

  const onChange = ({target}) => {
    themeStore.update(store => {
      store.theme = target.value;
      return store;
    });
   }
</script>

<select on:change={onChange}>
  {#each THEMES as theme}
    <option value={theme}>{theme}</option>
  {/each}
</select>