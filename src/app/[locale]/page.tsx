import { getPageSeo } from '@/lib/seo';
import HomeContent from '@/components/home/HomeContent';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return getPageSeo('home', locale, '');
}

export default function HomePage() {
  return <HomeContent />;
}
