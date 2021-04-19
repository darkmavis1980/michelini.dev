<script lang="ts">
  interface SocialMedia {
    label: string;
    url: string;
    id: string;
  }

  const socials: SocialMedia[] = [
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/alessiomichelini/',
      id: 'linkedin',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/darkmavis1980',
      id: 'twitter'
    }
  ];
</script>

<ul id="social-media">
  {#each socials as social}
    <li id={social.id}>
      <a href={social.url}>
        {social.label}
      </a>
    </li>
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
    padding: .25rem .75rem;
  }

  li > a {
    color: lightcoral;
  }
</style>
