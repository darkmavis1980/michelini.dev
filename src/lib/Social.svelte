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

<div id="social-media">
  {#each socials as social}
    <li>{social.label}</li>
  {/each}
</div>