import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

type PostType = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};
interface PostsProps {
  posts: PostType[];
}

export default function Posts({ posts }: PostsProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Posts | IgNews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const { results = [] } = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    },
  );
  const posts = results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find(content => (content.type = 'paragraph'))?.text ??
        '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'en-US',
        { day: '2-digit', month: 'long', year: 'numeric' },
      ),
    };
  });

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
