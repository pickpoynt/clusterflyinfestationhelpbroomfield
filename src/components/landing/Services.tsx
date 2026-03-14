import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Structural Void Flushing",
    description: "Deep-injection of wall voids and attic spaces to eliminate clusters where they winter. We utilize mechanical micro-mists for full coverage.",
    image: "/2.jpeg",
    points: ["Wall Void Targeting", "Attic Space Flush", "Residual Barriers"]
  },
  {
    title: "Mechanical Exclusion",
    description: "Seal points of entry including window frames, soffit vents, and structural gaps. We use high-grade sealants to prevent future fall invasions.",
    image: "/3.jpeg",
    points: ["Window Sealing", "Soffit Screening", "Entry Point Fixes"]
  },
  {
    title: "Residual Perimeter Shield",
    description: "Application of weather-resistant micro-encapsulated residuals to south-facing walls where cluster flies aggregate before entering.",
    image: "/1.jpeg",
    points: ["South-Wall Armor", "UV Resistant", "Broomfield Secure"]
  },
  {
    title: "Emergency Knockdown",
    description: "Rapid reduction of active indoor fly clusters using safe, non-invasive aerosols that leave your home clean and fly-free instantly.",
    image: "/4.jpeg",
    points: ["Instant Results", "Interior Safe", "24/7 Dispatch"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Specialized <span className="text-amber-600">Fly Control In Broomfield</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Don't let cluster flies take over your home this winter. In the Front Range, fall invasions can lead to thousands of flies in your attic. Our Broomfield teams provide total abatement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-amber-500 shrink-0" />{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
