import { ArrowRight, Search, ShieldCheck, Hammer, FlaskConical, Target } from "lucide-react";

const services = [
  {
    title: "Emergency Pipe Repair",
    description: "Rapid response for active pipe bursts. We provide immediate clamping and permanent copper or PEX restoration in Chino Hills.",
    icon: Target
  },
  {
    title: "Leak Detection",
    description: "Advanced acoustic and thermal imaging to locate hidden pipe failures behind walls or under slabs without unnecessary destruction.",
    icon: Search
  },
  {
    title: "Pipe Replacement",
    description: "Full-scale replacement of aging, corroded, or fragile piping systems to prevent future bursts and ensure long-term reliability.",
    icon: Hammer
  },
  {
    title: "Main Line Service",
    description: "Specialized repair for main water lines. We handle high-pressure failures and residential service line restoration.",
    icon: ShieldCheck
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-600">Burst Pipe Services Chino Hills</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Chino Hills homeowners trust our specialized team for high-precision leak localization and total pipe system restoration. We target the source of your water failure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300">
              <a href="#contact">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Book Service <ArrowRight className="w-4 h-4" />
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
