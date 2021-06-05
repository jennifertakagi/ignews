import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts(): JSX.Element {
  return (
    <>
      <Head>
        <title>Posts | IgNews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>June 5, 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspace</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared button
            </p>
          </a>
          <a href="#">
            <time>June 5, 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspace</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared button
            </p>
          </a>
          <a href="#">
            <time>June 5, 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspace</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared button
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
