import HeroSection from '@/components/main/HeroSection';
import AssetOverviewSection from '@/components/main/AssetOverviewSection';
import MoneyManagementSection from '@/components/main/MoneyManagementSection'
import styles from '../components/main/Main.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <AssetOverviewSection />
      <MoneyManagementSection />
    </div>
  );
}
