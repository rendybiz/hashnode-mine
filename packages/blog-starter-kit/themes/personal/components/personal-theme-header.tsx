import Link from 'next/link';
import { useRouter } from 'next/router';
import { PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { ToggleTheme } from './toggle-theme';

function hasUrl(
  navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
  return !!navbarItem.url && navbarItem.url.length > 0;
}

export const PersonalHeader = () => {
  const { publication } = useAppContext();
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  const navbarItems = publication.preferences.navbarItems.filter(hasUrl);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0A2A2A] text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            {publication.title}
          </Link>

          {/* Navigation Menu */}
          <ul className="hidden md:flex space-x-8">
            {navbarItems.map((item) => (
              <li key={item.url}>
                <Link href={item.url}>
                 
                    {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Toggle Theme */}
          <ToggleTheme className="hidden md:block" />

          {/* Mobile Menu Button - Only visible on mobile */}
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};
