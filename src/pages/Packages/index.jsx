import { useState } from 'react';
import SEO from '../../components/SEO';
import PageHeroBanner from '../../components/PageHeroBanner';
import bannerImg from '../../assets/diagnostics.png';
import PackageIntro from './components/PackageIntro';
import PackageList from './components/PackageList';
import PackageBooking from './components/PackageBooking';

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState('');

  function handlePackageSelect(pkg) {
    setSelectedPackage(pkg);
    // Small delay lets React flush the state before we scroll
    setTimeout(() => {
      const el = document.getElementById('package-booking');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  }

  return (
    <>
      <SEO
        title="Health Checkup Packages in Kokapet | UniCare Hospitals"
        description="Preventive health checkup packages at UniCare Hospitals, Kokapet: full body, diabetes, women's health and senior citizen panels with doctor review."
        url="/health-checkup-packages"
        keywords="health checkup packages Kokapet, full body checkup near Gachibowli, master health checkup West Hyderabad"
      />
      <PageHeroBanner heading="Preventive care, priced simply." breadcrumbLabel="Health Packages" image={bannerImg} />

      <PackageIntro />
      <PackageList onPackageSelect={handlePackageSelect} />
      <PackageBooking
        selectedPackage={selectedPackage}
        onPackageChange={setSelectedPackage}
      />
    </>
  );
}
