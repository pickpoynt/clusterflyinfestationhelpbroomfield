import { Shield, Clock, Award, Target } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Rapid Attic Void Mapping",
      description: "Cluster flies aggregate in structural voids. Our Broomfield teams specialize in mapping these thermal collection points for surgical treatment."
    },
    {
      icon: Shield,
      title: "Seal & Shield Protection",
      description: "We don't just spray. We offer mechanical exclusion using UV-resistant sealants to block window frames and soffits from future invasions."
    },
    {
      icon: Target,
      title: "Biological Life-Cycle Disruptors",
      description: "Our treatments target the biology of the cluster fly, ensuring that dormant clusters in your walls don't migrate into your living space."
    },
    {
      icon: Award,
      title: "Broomfield Front Range Experts",
      description: "Deep understanding of how Colorado's temperature swings drive fly behavior in the 80020 area and surrounding ZIP codes."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Why Trust Our <span className="text-amber-600">Broomfield Fly Team?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              Cluster flies are not your typical house fly. In Broomfield, CO, they are a seasonal plague that can see thousands of insects clustering in your attic and wall voids. Our team combines mechanical exclusion with high-performance residuals to reclaim your home and provide total peace of mind.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-amber-500/5 flex items-center justify-center group-hover:bg-amber-600 group-hover:rotate-6 transition-all duration-300 border border-slate-100">
                    <item.icon className="w-7 h-7 text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <img src="/2.jpeg" alt="Fly Inspection" className="rounded-3xl shadow-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white" />
                <img src="/3.jpeg" alt="Exclusion Process" className="rounded-3xl shadow-2xl h-64 w-full object-cover mt-8 border-2 border-white" />
                <img src="/4.jpeg" alt="Wall Shield" className="rounded-3xl shadow-2xl h-64 w-full object-cover -mt-8 border-2 border-white" />
                <img src="/1.jpeg" alt="Rapid Response" className="rounded-3xl shadow-2xl h-64 w-full object-cover border-2 border-white" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 bg-amber-600 rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl animate-pulse border-4 border-white/20">
                <span className="text-3xl font-bold font-heading">#1</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">In Broomfield</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
