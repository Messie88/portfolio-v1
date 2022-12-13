import Head from 'next/head'

const titleDefault = 'Messie - Freelance frontend developer'
const description = "Projects i've been involved through and some of my experiments"
const author = 'Messie NUNGI-PAMBU'

export default function Header({ title = titleDefault }) {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content='Frontend Developer,Freelance,Nextjs,Reactjs,Typescript,' />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta name='og:title' content={title} />
      <meta name='og:type' content='website' />
      <meta name='og:image' content={'/icons/share.png'} />
      <meta name='og:site_name' content={title} />
      <meta name='og:description' content={description} />

      <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='apple-touch-icon' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' color='#000000' href='/icons/safari-pinned-tab.svg' />
      <link rel='apple-touch-startup-image' href='/startup.png' />
      {/* <link rel="canonical" href="https://aristidebenoist.com"> */}

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#090909' />
      <link rel='shortcut icon' href='/icons/favicon.ico' />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name='twitter:title' content={title}></meta>
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@pathe_m' />
    </Head>
  )
}
// VOIR LE HEAD DE ARISTIDE BENOIST

//<meta name='twitter:description' content="Messie is a developer who specializes in motion and interaction. As an independent, he works with companies, agencies, startups and individuals all over the world.">
// <meta property="og:image" content="https://aristidebenoist.com/static/og/1200-630.jpg">
