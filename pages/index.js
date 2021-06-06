import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

import {sanityClient, urlFor} from '../lib/sanity';

const recipesQuery = `*[_type == "recipe"]{_id, name, slug, mainImage}`;

export default function Home({recipes}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>My recipes</title>
        <meta name="description" content="my recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to my recipes</h1>
      <ul>
        {recipes?.length > 0 && recipes.map((recipe) => (
          <li>
            <Link href="/">
              <a>
                <img/>
                <span>{recipe.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export async function getStaticProps() {
  const recipes = await sanityClient.fetch(recipesQuery)
  return {props:{recipes}};
}
