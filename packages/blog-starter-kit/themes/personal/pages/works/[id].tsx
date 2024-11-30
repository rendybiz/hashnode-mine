import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../../components/layout';
import { AppProvider } from '../../components/contexts/appContext';
import { request } from 'graphql-request';
import {
  PostsByPublicationDocument,
  PostsByPublicationQuery,
  PostsByPublicationQueryVariables,
  PublicationFragment,
  PostDetailDocument,
  PostDetailQuery,
} from '../../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Post = {
  title: string;
  content: {
    html: string;
  };
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  };
  author: {
    name: string;
    profilePicture: string;
  };
  publishedAt: string;
  tags: Array<{ name: string }>;
};

interface BlogPostPageProps {
  post: Post;
  publication: PublicationFragment & {
    additionalField: string;
    posts: { edges: { node: Post }[] };
  };
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, publication }) => {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <AppProvider publication={publication}>
      <Layout>
        <article className="py-20 px-4 md:px-8 lg:px-16 bg-dark-green">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-yellow-400 mb-8 hover:text-yellow-300 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                {post.tags && post.tags.length > 0 && (
                  <span className="text-yellow-400">{post.tags[0].name}</span>
                )}
                <span className="text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {post.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {post.brief}
              </p>
              <div className="flex items-center gap-4">
                {post.author.profilePicture && (
                  <Image
                    src={post.author.profilePicture}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <span className="text-gray-400">By</span>
                  <span className="text-white font-medium ml-2">{post.author.name}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {post.coverImage && (
              <div className="relative h-[400px] w-full mb-12 rounded-xl overflow-hidden">
                <Image
                  src={post.coverImage.url}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-dark-green-light">
              <h3 className="text-xl font-bold mb-4 text-white">Share this post</h3>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                  <button
                    key={platform}
                    className="px-6 py-2 rounded-full text-sm font-medium
                      bg-dark-green-light text-gray-300 hover:bg-yellow-400 
                      hover:text-black transition-colors"
                  >
                    Share on {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </AppProvider>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const data = await request<
      PostsByPublicationQuery,
      PostsByPublicationQueryVariables
    >(GQL_ENDPOINT as string, PostsByPublicationDocument, {
      first: 20,
      host: process.env.NEXT_PUBLIC_PUBLICATION_HOST,
    });

    const paths = data.publication.posts.edges.map(({ node }) => ({
      params: { id: node.slug },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error fetching paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  try {
    // Fetch the specific post data
    const postData = await request<PostDetailQuery>(
      GQL_ENDPOINT as string,
      PostDetailDocument,
      {
        slug: params?.id,
        host: process.env.NEXT_PUBLIC_PUBLICATION_HOST,
      }
    );

    // Fetch publication data
    const publicationData = await request<
      PostsByPublicationQuery,
      PostsByPublicationQueryVariables
    >(GQL_ENDPOINT as string, PostsByPublicationDocument, {
      first: 20,
      host: process.env.NEXT_PUBLIC_PUBLICATION_HOST,
    });

    if (!postData.post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: postData.post,
        publication: {
          ...publicationData.publication,
          additionalField: 'test',
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
};

export default BlogPostPage;
