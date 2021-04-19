<script lang="ts">
  interface SocialMedia {
    label: string;
    url: string;
    id: string;
  }

  const socials: SocialMedia[] = [
    {
      label: 'Linkedin',
      url: '',
      id: 'linkedin',
    },
    {
      label: 'Twitter',
      url: '',
      id: 'twitter'
    }
  ];
</script>

<ul id="social-media">
  {#each socials as social}
    <li>{social.label}</li>
  {/each}
</ul>

<style>
  ul#social-media {
    margin: 0;
    padding: 0;
  }

  ul#social-media > li {
    margin: 0;
    display: inline-block;
  }
</style>
