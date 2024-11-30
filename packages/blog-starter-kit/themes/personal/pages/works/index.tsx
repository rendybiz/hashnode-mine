import { request } from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AppProvider } from '../../components/contexts/appContext';
import { Layout } from '../../components/layout';
import {
	PostsByPublicationDocument,
	PostsByPublicationQuery,
	PostsByPublicationQueryVariables,
	PublicationFragment,
} from '../../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const POSTS_PER_PAGE = 9; // Number of posts to load per page

type Post = {
	id: string;
	title: string;
	brief: string;
	slug: string;
	coverImage: {
		url: string;
	};
};

type Props = {
	publication: PublicationFragment & {
		posts: { edges: { node: Post }[]; pageInfo?: { hasNextPage: boolean; endCursor: string } };
	};
};

const BlogCard = ({ post }: { post: Post }) => (
	<div>
		<Link href={`/${post.slug}`}>
			<div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl">
				<Image
					src={post.coverImage?.url || '/placeholder.jpg'}
					alt={post.title}
					layout="fill"
					objectFit="cover"
					className="transition-transform duration-300 group-hover:scale-110"
				/>
			</div>
			<h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-yellow-400">
				{post.title}
			</h3>
			<p className="line-clamp-2 text-gray-300">{post.brief}</p>
		</Link>
	</div>
);

const BlogPage: React.FC<Props> = ({ publication }) => {
	const [posts, setPosts] = useState(publication?.posts?.edges?.map((edge) => edge.node) || []);
	const [pageInfo, setPageInfo] = useState(publication?.posts?.pageInfo);
	const [isLoading, setIsLoading] = useState(false);

	const loadMorePosts = async () => {
		if (isLoading || !pageInfo?.hasNextPage) return;

		setIsLoading(true);
		try {
			const data:any = await request<PostsByPublicationQuery, PostsByPublicationQueryVariables>(
				GQL_ENDPOINT as string,
				PostsByPublicationDocument,
				{
					first: POSTS_PER_PAGE,
					after: pageInfo.endCursor,
					host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
				},
			);

			if (data.publication?.posts) {
				setPosts((prevPosts:any) => [
					...prevPosts,
					...(data.publication?.posts.edges?.map((edge:any) => edge.node) || []),
				]);
				setPageInfo(data.publication.posts.pageInfo);
			}
		} catch (error) {
			console.error('Error loading more posts:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>Blog - Latest Articles and Insights</title>
					<meta
						name="description"
						content="Explore our latest articles on web development, software architecture, and tech leadership."
					/>
				</Head>
				<main className="bg-dark-green min-h-screen text-white">
					<section className="px-4 py-20 md:px-8 lg:px-16">
						<div className="mx-auto max-w-7xl">
							<div className="mb-16 text-center">
								<h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
									My <span className="text-yellow-400">works</span>
								</h1>
								<p className="mx-auto max-w-2xl text-gray-300">
									Sharing my thoughts and experiences about web development, software architecture,
									and tech leadership.
								</p>
							</div>

							

							{/* Blog Grid */}
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								{posts.map((post) => (
									<BlogCard key={post?.id} post={post} />
								))}
							</div>

							{/* Load More Button */}
							{pageInfo?.hasNextPage && (
								<div className="mt-12 text-center">
									<button
										onClick={loadMorePosts}
										disabled={isLoading}
										className="bg-dark-green-light hover:bg-yellow-400 hover:text-black
											disabled:opacity-50 disabled:cursor-not-allowed
											rounded-full px-8 py-3 text-white transition-colors"
									>
										{isLoading ? 'Loading...' : 'Load More'}
									</button>
								</div>
							)}
						</div>
					</section>
				</main>
			</Layout>
		</AppProvider>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const data = await request<PostsByPublicationQuery, PostsByPublicationQueryVariables>(
			GQL_ENDPOINT as string,
			PostsByPublicationDocument,
			{
				first: POSTS_PER_PAGE,
				host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
			},
		);

		if (!data.publication) {
			return {
				notFound: true,
			};
		}

		return {
			props: {
				publication: data.publication,
			},
			revalidate: 60,
		};
	} catch (error) {
		console.error('Error fetching publication data:', error);
		return {
			notFound: true,
		};
	}
};

export default BlogPage;
