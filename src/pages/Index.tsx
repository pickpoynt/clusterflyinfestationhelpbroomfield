import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BurstPipeInfo from "@/components/landing/BurstPipeInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Chino Hills Burst Pipe Repair Pros";
  const phoneNumber = "(877) 792-1410";
  const location = "Chino Hills, CA";
  const zipCodes = "91709, 91710, 91708, 92880, 92887";
  const fullKeyword = "Burst pipe repair service Chino Hills";

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{`${fullKeyword} - ${firmName} - ${phoneNumber} - ${zipCodes}`}</title>
        <meta name="description" content={`${fullKeyword}. Rapid 24/7 leak detection and professional pipe restoration in Chino Hills, CA. Serving ${zipCodes} and surrounding areas. Call ${phoneNumber} for expert help.`} />
        <meta name="keywords" content="Burst pipe repair service Chino Hills CA, emergency plumber Chino Hills, leak detection 91709, broken pipe repair 91710, 24/7 pipe restoration Chino Hills" />
        <link rel="canonical" href="https://burstpiperepairservicechinohills.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "/2.jpeg",
            "@id": "https://burstpiperepairservicechinohills.vercel.app/",
            "url": "https://burstpiperepairservicechinohills.vercel.app/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chino Hills",
              "addressLocality": "Chino Hills",
              "addressRegion": "CA",
              "postalCode": "91709",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.9892",
              "longitude": "-117.7326"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Burst Pipe Repair Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": [
              { "@type": "City", "name": "Chino Hills, CA" },
              { "@type": "PostalCode", "name": "91709" },
              { "@type": "PostalCode", "name": "91710" },
              { "@type": "PostalCode", "name": "91708" },
              { "@type": "PostalCode", "name": "92880" },
              { "@type": "PostalCode", "name": "92887" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Burst Pipe Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Pipe Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Leak Detection Specialists" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pipe Replacement" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content={`${fullKeyword} - ${firmName}`} />
        <meta property="og:description" content="Professional emergency burst pipe repair in Chino Hills, CA. Fast 24/7 response and safety certified results. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://burstpiperepairservicechinohills.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Burst Pipe Repair Service <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Chino Hills</span>
            </>
          }
          subtitle="Chino Hills' rapid-response pipe restoration specialists. We provide professional leak detection and emergency pipe repair to protect your home from catastrophic water damage — 24/7."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="CHINO HILLS PIPE REPAIR PROS"
          phone="8777921410"
        />
        <Services />
        <WhyUs />
        <BurstPipeInfo />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
