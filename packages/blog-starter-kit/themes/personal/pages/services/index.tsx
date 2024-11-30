import React from 'react';
import { Layout } from '../../components/layout';
import Head from 'next/head';
import { Footer } from '../../components/Footer-component';
import { AppProvider } from '../../components/contexts/appContext';
import { GetStaticProps } from 'next';
import { request } from 'graphql-request';
import {
  PostsByPublicationDocument,
  PostsByPublicationQuery,
  PostsByPublicationQueryVariables,
  PublicationFragment,
} from '../../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => (
  <div 
    className="bg-dark-green-light p-8 rounded-xl hover:bg-dark-green-light/80 transition-colors transform hover:-translate-y-2 duration-300"
  >
    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 text-2xl text-black">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2 text-gray-300">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

type Props = {
  publication: PublicationFragment;
};

export default function ServicePage({ publication }: Props) {
  const services = [
    {
      icon: '🚀',
      title: 'Full-Stack Development',
      description: 'Expert in both backend and frontend development with 10+ years of experience in web applications.',
      features: [
        'Custom web application development',
        'RESTful API development',
        'Database design and optimization',
        'Frontend development with modern frameworks',
        'Performance optimization',
        'Code review and best practices'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Skilled in creating cross-platform mobile applications using modern frameworks and native development.',
      features: [
        'Cross-platform app development',
        'Native iOS and Android development',
        'Mobile UI/UX design',
        'App performance optimization',
        'Push notification integration',
        'App store deployment'
      ]
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Experienced with cloud platforms and implementing modern DevOps practices.',
      features: [
        'Cloud infrastructure setup',
        'CI/CD pipeline implementation',
        'Container orchestration',
        'Microservices architecture',
        'Infrastructure as Code',
        'Cloud cost optimization'
      ]
    },
    {
      icon: '👥',
      title: 'Technical Leadership',
      description: 'Lead teams and guide technical decisions for enterprise solutions.',
      features: [
        'Team management and mentoring',
        'Agile methodology implementation',
        'Technical architecture design',
        'Code quality standards',
        'Project planning and estimation',
        'Stakeholder communication'
      ]
    },
    {
      icon: '🔌',
      title: 'API Development',
      description: 'Specialist in creating robust and scalable API solutions.',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'API documentation',
        'Security best practices',
        'Performance optimization',
        'Third-party integration'
      ]
    },
    {
      icon: '🛒',
      title: 'E-commerce Solutions',
      description: 'Expert in developing comprehensive e-commerce platforms.',
      features: [
        'Custom e-commerce development',
        'Payment gateway integration',
        'Inventory management',
        'Shopping cart optimization',
        'Order processing automation',
        'Analytics integration'
      ]
    },
    {
      icon: '📰',
      title: 'WordPress Development',
      description: 'Professional WordPress development and customization services for businesses and individuals.',
      features: [
        'Custom WordPress theme development',
        'Plugin development and customization',
        'WooCommerce integration',
        'Performance optimization',
        'Security hardening',
        'Migration and maintenance services'
      ]
    }
  ];

  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>Professional Services - Full Stack Development & Technical Leadership</title>
          <meta
            name="description"
            content="Comprehensive software development services including full-stack development, mobile apps, cloud solutions, and technical leadership."
          />
        </Head>
        <main className="bg-dark-green text-white">
          <section className="py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Professional <span className="text-yellow-400">Services</span>
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                  With over a decade of experience in software development and technical leadership, 
                  I offer comprehensive solutions tailored to your specific needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how I can help bring your ideas to life with professional development services.
                </p>
                <a 
                  href="mailto:rendyadisaputra@outlook.com" 
                  className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Layout>
    </AppProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await request<PostsByPublicationQuery, PostsByPublicationQueryVariables>(
    GQL_ENDPOINT,
    PostsByPublicationDocument,
    {
      first: 6,
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
};
