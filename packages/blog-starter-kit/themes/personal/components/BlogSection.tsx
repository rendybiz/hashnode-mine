import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
  title: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  };
};

type Props = {
  posts: Post[];
};

const BlogCard = ({ post }: { post: Post }) => (
  <Link 
    href={`/${post.slug}`}
    className="block group"
  >
    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
      <Image
        src={post.coverImage?.url || '/placeholder.jpg'}
        alt={post.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
      {post.title}
    </h3>
    <p className="text-gray-300 line-clamp-2">{post.brief}</p>
  </Link>
);

export const BlogSection = ({ posts }: Props) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Latest <span className="text-yellow-400">Blogs</span> In my Mind
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
