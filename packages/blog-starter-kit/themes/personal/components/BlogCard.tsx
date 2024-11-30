import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-dark-green-light rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <Link href={`/blog/${post.id}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-yellow-400 text-sm">{post.category}</span>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{post.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">Read more</span>
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};
