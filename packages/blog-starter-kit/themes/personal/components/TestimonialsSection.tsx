import React from 'react';
import Image from 'next/image';

type Testimonial = {
  content: string;
  author: string;
  role: string;
  avatar: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-dark-green-light p-6 rounded-xl">
    <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
    <div className="flex items-center gap-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={testimonial.avatar}
          alt={testimonial.author}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h4 className="font-semibold">{testimonial.author}</h4>
        <p className="text-yellow-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Working with this designer was an absolute pleasure. Their attention to detail and creative solutions exceeded our expectations.",
      author: "Sarah Johnson",
      role: "Product Lead",
      avatar: "/testimonials/avatar1.jpg"
    },
    {
      content: "The website they designed for us perfectly captures our brand identity and has significantly improved our online presence.",
      author: "Michael Chen",
      role: "Marketing Director",
      avatar: "/testimonials/avatar2.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          What <span className="text-yellow-400">Amazing</span> peoples Says About me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
