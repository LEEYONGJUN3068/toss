import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '@/components/main/HeroSection';
import AssetOverviewSection from '@/components/main/AssetOverviewSection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AssetOverviewSection />
      <MoneyManagementSection />
      <Footer />
    </>
  );
}
