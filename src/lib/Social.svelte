<script lang="ts">
  import linkedinImg from './icons/linkedin.svg';
  import twitterImg from './icons/twitter.svg';
  import devtoImg from './icons/devto.svg';
  import emailImg from './icons/envelop-open.svg';
  import githubImg from './icons/square-github.svg';
  import cameraImg from './icons/camera-retro.svg';

  interface SocialMedia {
    label: string;
    url: string;
    id: string;
    image: string;
    altText?: string;
  }

  const socials: SocialMedia[] = [
    {
      label: 'Dev.to',
      url: 'https://dev.to/darkmavis1980',
      id: 'devto',
      image: devtoImg,
      altText: 'Go see my articles on Dev.to',
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/alessiomichelini/',
      id: 'linkedin',
      image: linkedinImg,
      altText: 'Add me on Linkedin',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/darkmavis1980',
      id: 'github',
      image: githubImg,
      altText: 'Check my code on GitHub',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/darkmavis1980',
      id: 'twitter',
      image: twitterImg,
      altText: 'My account on twitter',
    },
    {
      label: 'Photography',
      url: 'https://alessiomichelini.com',
      id: 'personal',
      image: cameraImg,
      altText: 'My photography website',
    },
  ];
</script>

<ul id="social-media">
  {#each socials as social}
    <li id={social.id}>
      <a href={social.url} target="_blank" rel="noreferrer" title={social.altText}>
        <img src={social.image} alt={social.altText} />
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
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }

  #social-media > li > a:hover {
    color: white;
    /* border: 1px solid var(--primary-color); */
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
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
