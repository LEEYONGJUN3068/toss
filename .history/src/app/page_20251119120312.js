import HeroSection from '@/components/main/HeroSection';
import AssetOverviewSection from '@/components/main/AssetOverviewSection';
import MoneyManagementSection from '@/components/main/MoneyManagementSection'

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
