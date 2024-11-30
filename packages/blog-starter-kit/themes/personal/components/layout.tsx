import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Scripts />
      <div className="min-h-screen bg-[#0A2A2A] w-full">
        <Header />
        <main className="pt-16">{children}</main>
      </div>
      <Analytics />
      <Integrations />
    </>
  );
};
