<script lang="ts">
  import linkedinImg from './icons/linkedin.svg';
  import twitterImg from './icons/twitter.svg';
  import devtoImg from './icons/devto.svg';

  interface SocialMedia {
    label: string;
    url: string;
    id: string;
    image: string;
  }

  const socials: SocialMedia[] = [
    {
      label: 'Dev.to',
      url: 'https://dev.to/darkmavis1980',
      id: 'devto',
      image: devtoImg,
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/alessiomichelini/',
      id: 'linkedin',
      image: linkedinImg,
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/darkmavis1980',
      id: 'twitter',
      image: twitterImg,
    }
  ];
</script>

<ul id="social-media">
  {#each socials as social}
    <li id={social.id}>
      <a href={social.url} target="_blank" rel="noreferrer">
        <img src={social.image} alt={social.label} />
        {social.label}
      </a>
    </li>
  {/each}
</ul>

<style>
  #social-media {
    margin: 0;
    padding: 0;
  }

  #social-media > li {
    margin: 0;
    display: inline-block;
    padding: .25rem .75rem;
  }

  #social-media > li > a {
    color: black;
    display: block;
    padding: 0.5rem;
    border-radius: 1rem;
  }

  #social-media > li > a:hover {
    color: white;
    /* border: 1px solid var(--navy-color); */
    background: linear-gradient(0deg, var(--navy-color) 0%, var(--teal-color) 100%);
  }

  #social-media > li > a > img {
    display: inline;
  }

  #social-media > li > a:hover > img {
    filter: invert(100%);
  }

  #social-media img {
    max-width: 40px;
  }
</style>
