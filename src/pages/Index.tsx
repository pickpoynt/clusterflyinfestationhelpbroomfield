import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import ClusterFlyInfo from "@/components/landing/ClusterFlyInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Broomfield CO Cluster Fly Experts";
  const phoneNumber = "(323) 880-1224";
  const location = "Broomfield, CO";
  const zipCodes = "80020, 80021, 80023, 80031, 80038";
  const fullKeyword = "Cluster Fly Infestation Help Broomfield";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://clusterflyinfestationhelpbroomfield.vercel.app/",
    "url": "https://clusterflyinfestationhelpbroomfield.vercel.app/",
    "telephone": "3238801224",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Broomfield",
      "addressLocality": "Broomfield",
      "addressRegion": "CO",
      "postalCode": "80020",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.9205,
      "longitude": -105.0867
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": fullKeyword,
    "provider": {
      "@type": "LocalBusiness",
      "name": firmName
    },
    "areaServed": [
      { "@type": "City", "name": "Broomfield" },
      { "@type": "PostalCode", "name": "80020" },
      { "@type": "PostalCode", "name": "80021" },
      { "@type": "PostalCode", "name": "80023" },
      { "@type": "PostalCode", "name": "80031" },
      { "@type": "PostalCode", "name": "80038" }
    ],
    "description": `Professional ${fullKeyword}. Specialized structural void flushing, mechanical exclusion, and attic fogging in ${location} ${zipCodes}. Expert 24/7 emergency dispatch for massive cluster fly infestations.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Specialized structural void flushing, mechanical exclusion, and attic fogging in ${location}. Call ${phoneNumber} now for immediate dispatch. Serving ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, cluster fly removal Broomfield CO, fly abatement Front Range, emergency insect control Colorado, 80020 fly service`} />
        <link rel="canonical" href="https://clusterflyinfestationhelpbroomfield.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
           title={
            <>
              Cluster Fly Infestation Help <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Broomfield CO</span>
            </>
          }
          subtitle="Broomfield CO's specialized cluster fly abatement experts. We deploy structural void treatments, mechanical exclusion, and targeted residual applications to eliminate fall invasions and winter clusters — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="BROOMFIELD CO CLUSTER FLY EXPERTS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <ClusterFlyInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
