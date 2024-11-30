import { Layout } from '../components/layout';
import Head from 'next/head';
import { Container } from '../components/container';
import { Footer } from '../components/Footer-component';
import HeroSection from '../components/HeroSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ServicesSection } from '../components/ServicesSection';
import { SkillsSection } from '../components/SkillsSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BlogSection } from '../components/BlogSection';
import { AppProvider } from '../components/contexts/appContext';
import { GetStaticProps } from 'next';
import { request } from 'graphql-request';
import {
  PostsByPublicationDocument,
  PostsByPublicationQuery,
  PostsByPublicationQueryVariables,
  PublicationFragment,
} from '../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
  publication: PublicationFragment & {
    additionalField: string;
    posts: { edges: { node: any }[] };
    };
};

export default function Index({ publication }: Props) {
  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>UX Designer and Fullstacks Developer Portfolio</title>
          <meta
            name="description"
            content="Professional UX designer and WordPress developer creating stunning, user-friendly websites"
          />
        </Head>
        <main className="bg-dark-green text-white">
          <HeroSection />
          <ExperienceSection />
          <ServicesSection />
          <SkillsSection />
          <PortfolioSection />
          <BlogSection posts={publication?.posts?.edges?.map(edge => edge.node) || []} />
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
