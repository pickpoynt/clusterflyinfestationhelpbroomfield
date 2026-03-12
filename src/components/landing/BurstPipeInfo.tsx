import { ShieldCheck, Target, Hammer, Search, AlertTriangle, HelpCircle } from "lucide-react";

const BurstPipeInfo = () => {
    const faqs = [
        {
            q: "How much does it usually cost to fix a burst pipe?",
            a: "The cost to fix a burst pipe typically ranges from $200 to $1,000 for standard repairs, but this can escalate significantly depending on the localization of the break and the extent of the water damage already incurred. In Chino Hills, factors such as whether the pipe is behind a finished wall, under a concrete slab, or in a crawl space will dictate the labor intensity. Additionally, if the burst occurred in a main line versus a secondary branch line, the material costs and required permits may vary. Professional plumbers must also account for the emergency nature of the call, often applying after-hours or immediate dispatch fees. Beyond the immediate pipe repair, homeowners must consider the associated costs of water extraction, structural drying, and drywall or flooring restoration, which can easily add thousands of dollars to the total project invoice. We recommend immediate shut-off and rapid professional intervention to keep these secondary costs as low as possible."
        },
        {
            q: "How much should it cost to fix a burst pipe?",
            a: "A fair market price for professional burst pipe repair in the Chino Hills area should reflect the expertise and specialized equipment required for a lasting fix. For a visible and accessible copper or PEX pipe repair, you should expect to pay between $300 and $600 including labor and high-grade materials. If the repair requires advanced leak detection technology to locate a hidden burst, the diagnostic fee alone might be $200 to $400, which is necessary to prevent invasive 'guess-and-check' demolition. You should be cautious of quotes that seem unusually low, as they may indicate a lack of proper licensing, insurance, or the use of sub-standard 'quick-fix' components that are prone to future failure. A reputable service provider will offer a transparent breakdown of costs, including the price of the specific fittings, the hourly labor rate, and any waranty or guarantee on the workmanship. Investing in a quality repair now is significantly cheaper than dealing with a recurrence of the same leak next month."
        },
        {
            q: "Does homeowners insurance cover a burst pipe?",
            a: "Standard homeowners insurance policies in Chino Hills generally cover the water damage caused by a burst pipe if the event was 'sudden and accidental.' This means that if a pipe unexpectedly ruptures and floods your basement or damages your flooring and walls, the insurance company will typically pay for the water mitigation, drying, and restoration of the damaged property. However, it is a critical distinction that most policies do NOT cover the actual repair of the plumbing itself if the burst was caused by lack of maintenance, wear and tear, or gradual corrosion over time. For example, if a pipe that was visibly rusted for years finally gives out, the adjuster may deny the claim based on negligence. It is vital to document the scene immediately with photos and videos and to contact a professional restoration-focused plumber who can provide a detailed report for your insurance adjuster. Always check your specific policy for 'water backup' or 'sump pump failure' riders which provide additional layers of protection."
        },
        {
            q: "Can a plumber fix a burst pipe?",
            a: "Yes, a licensed plumber is the only professional qualified and legally permitted to perform permanent structural repairs on your home's pressurized water system. Plumbers undergo extensive training and apprenticeships to understand the physics of water pressure, pipe metallurgy, and local plumbing codes in San Bernardino County. A professional plumber has the specialized tools—such as infrared leak detectors, high-precision pipe cutters, and hydraulic crimping tools—necessary to remove the damaged section and install a permanent replacement. Furthermore, a licensed plumber will ensure that the repair meets modern safety standards, identifying if the original failure was due to high water pressure, which might require the installation of a Pressure Reducing Valve (PRV). Attempting to use a general handyman or a DIY 'patch kit' on a pressurized line is highly risky, as these temporary solutions often fail under the constant 60-80 PSI of a standard residential water system, leading to even more extensive flooding later."
        },
        {
            q: "Would a burst pipe be covered by insurance?",
            a: "In the vast majority of cases, a burst pipe is covered by insurance, specifically the damage resulting from the water release. Insurance companies prioritize the 'suddenness' of the event. If a pipe burst occurs while you are at work and floods your living room, the resulting damage to your furniture, drywall, and insulation is almost always covered under the dwelling or personal property sections of your policy. The coverage usually includes the cost of professional water extraction and the high-powered fans and dehumidifiers needed to prevent mold growth. However, if the pipe burst due to you leaving the home unheated during a freeze (frozen pipes), the insurance company may argue that you failed to maintain the property. To maximize the likelihood of a successful claim, it is essential to have a professional plumber like our Chino Hills team provide a written assessment stating that the burst was an unforeseen failure. This professional documentation is often the deciding factor in whether an insurance adjuster approves the claim for full restoration."
        },
        {
            q: "How long does it take a plumber to fix a burst pipe?",
            a: "A standard, accessible burst pipe repair typically takes between 2 to 4 hours from the time the plumber arrives on-site. The first 30 to 60 minutes are usually dedicated to precision diagnostics—confirming the exact location of the break and ensuring the main water supply is completely secure. Once the damaged section is isolated, the actual physical repair involves cutting out the compromised pipe, cleaning the surrounding section, and installing new fittings, which might take another hour. If the pipe is located within a wall or underground, the timeline can extend to 6 or 8 hours as careful access must be created and then potentially restored. In Chino Hills, we prioritize these calls as emergencies to minimize the downtime of your home's water supply. While the plumbing repair itself is relatively fast, the subsequent drying out of the property can take several days of continuous industrial dehumidification, which our team helps coordinate to ensure your home returns to a safe, dry state."
        },
        {
            q: "Can a handyman fix a broken pipe?",
            a: "While a handyman might have the basic skills to fix a minor, non-pressurized drain leak, they are generally not recommended for burst pressurized water lines. Burst pipes in Chino Hills require a deep understanding of plumbing systems and the ability to work with various materials like copper, CPVC, and PEX, each requiring specific joining techniques like soldering, solvent welding, or expansion fittings. More importantly, handymen typically do not carry specialized plumbing insurance or the master plumber licenses required by the state for structural plumbing modifications. If a handyman's repair fails and causes another flood, your homeowners insurance might deny the subsequent claim because the work was not performed by a licensed professional. For the security of your home and the validity of your insurance, it is always safer and more cost-effective in the long run to hire a licensed plumbing specialist who can provide a certified, warranted repair that stands up to the high-pressure demands of your home's water system."
        },
        {
            q: "How to quickly fix a burst pipe?",
            a: "The most important 'quick fix' for a burst pipe is not a repair at all, but immediate mitigation. First, you must immediately locate and turn off the main water shut-off valve to your home, which is usually located near the water meter or where the main line enters the house. Second, open all faucets to drain the remaining water and pressure from the plumbing system. Third, if the burst is near electrical outlets or appliances, shut off the power at the main breaker to prevent electrocution or fire hazards. For the actual pipe repair, while there are temporary 'emergency repair tapes' and pipe clamps available at hardware stores, these should only be used as a stop-gap for the hour it takes for a professional plumber to arrive. A 'quick' DIY fix on a pressurized water line is a recipe for disaster; the only true way to fix a burst pipe quickly and safely is to call an emergency response team that can be on-site in Chino Hills within the hour to perform a permanent, professional restoration."
        },
        {
            q: "Is it cheaper to replace or repair pipes?",
            a: "In the short term, a localized repair of a single burst section is significantly cheaper, costing a few hundred dollars versus the several thousand required for a full-home repipe. However, if your piping system is reaching the end of its lifespan—typically 50 years for copper and earlier for older galvanized steel—you may find yourself paying for frequent 'patch' repairs that add up quickly. If you have experienced two or more bursts in different areas of your Chino Hills home within a year, this is a clear sign of systemic failure, and the 'cheaper' long-term option is to replace the piping system. Modern materials like PEX are much more resistant to bursting and corrosion, and a full repipe increases your home's value while providing peace of mind. Our team performs a comprehensive 'pipe health' audit during every repair call to provide you with data-driven advice on whether you should continue with localized repairs or consider a more permanent replacement strategy to protect your investment."
        },
        {
            q: "How serious is a burst water pipe?",
            a: "A burst water pipe is one of the most serious emergencies a homeowner can face, as water can cause catastrophic structural damage in a matter of minutes. A standard 3/4-inch pipe can release over 100 gallons of water in just 10 minutes, which is enough to saturate carpets, ruin furniture, and compromise the structural integrity of your drywall. Beyond the immediate physical damage, standing water in a warm environment like a Chino Hills home can lead to the growth of toxic black mold in as little as 24 to 48 hours. Furthermore, if the water reaches electrical systems, it creates a severe risk of fire or lethal electric shock. The long-term effects can include weakened foundations and rotted wooden framing if the water isn't professionally extracted and the structure isn't dried out to the correct 'moisture point' using industrial equipment. Treat every pipe burst with the same urgency as a minor fire—it requires immediate professional intervention to save the property from total loss."
        },
        {
            q: "Who is responsible for a burst pipe?",
            a: "Responsibility for a burst pipe depends entirely on the location of the break relative to the 'point of service.' If the burst occurs within your home or on your property on the customer side of the water meter, the homeowner is legally and financially responsible for all repairs and restoration costs. This includes the service line running from the street to your house. If the burst occurs in the main public water line under the street or on the city side of the water meter, the Chino Hills municipal water department is responsible for the repair. In rental situations, the landlord is typically responsible for maintaining the plumbing and repairing burst pipes, unless it can be proven that the tenant's negligence (such as failing to report a known leak or leaving windows open during a freeze) caused the failure. Because the liability can involve thousands of dollars in property damage, it is essential to have a professional plumber determine the exact cause and location of the burst to establish clear responsibility."
        },
        {
            q: "How much does a plumber charge to fix a burst pipe?",
            a: "A professional plumber in Chino Hills will typically charge between $250 and $800 for a standard emergency burst pipe repair. This fee is comprised of several components: the 'dispatch' or 'service call' fee (typically $75-$150), the hourly labor rate ($100-$200 per hour), and the cost of materials. Emergency calls received after-hours, on weekends, or during holidays often carry a premium rate because the company must maintain a rapid-response team on standby. If the repair requires specialized equipment, such as slab-leak detection tools or excavators for underground lines, the price will accurately reflect the use of that technology. It's important to understand that the plumber's charge is for the localized pipe repair; the cost of drying and restoring the home is usually handled by a separate mitigation team, although our Chino Hills service often coordinates the entire process to ensure a seamless experience. We focus on providing a fast, fixed-price quote once the diagnostic is complete so there are no surprises."
        },
        {
            q: "How do plumbers find hidden leaks?",
            a: "Modern plumbers use an array of non-invasive, high-tech tools to find hidden leaks behind walls or under concrete slabs without tearing your Chino Hills home apart. Acoustic leak detection involves using ultra-sensitive microphones and headphones to listen for the specific 'hiss' or 'whoosh' of escaping water under pressure. Thermal imaging cameras allow us to see 'cold spots' or 'moisture signatures' through drywall or flooring, identifying where the water is accumulating. We also use moisture meters to track the path of water through structural materials. In some cases, we use inert tracer gas, which is injected into the plumbing system and detected using a 'sniffer' as it escapes through the leak. By using these technologies together, our specialists can pinpoint the exact location of a burst pipe within inches, allowing for a much smaller and less expensive 'surgical' repair. This precision saves you hundreds in unnecessary demolition and restoration costs."
        },
        {
            q: "How much would a plumber charge for 3 hours?",
            a: "For 3 hours of on-site diagnostic and repair work in the Chino Hills area, you should expect to pay between $400 and $750. This estimate assumes a standard hourly labor rate of $125 to $175 per hour, plus an initial service call fee. The total would also include the cost of any parts used, such as PEX tubing, copper fittings, or shut-off valves. If the 3 hours are spent during an emergency 'after-hours' call, the total could be on the higher end due to overtime labor rates. It is important to remember that a plumber's total invoice isn't just for the time spent on-site; it also covers their professional insurance, the cost of their fully stocked service vehicle, their specialized diagnostic tools, and the guarantee on their workmanship. When dealing with a burst pipe, the expertise of a plumber during those 3 hours can save you tens of thousands of dollars in water damage, making it one of the most valuable investments you can make in your home's maintenance."
        },
        {
            q: "Do homeowners insurance cover burst pipes?",
            a: "Yes, homeowners insurance almost universally covers the damage caused by burst pipes, provided the failure was sudden and not the result of long-term neglect. The 'coverage' usually falls under 'peril' in your policy. If a pipe in your upstairs bathroom bursts and ruins the kitchen ceiling below, the insurance company will pay for a professional restoration company to come in, extract the water, and replace the damaged drywall and flooring. It is a common misconception that insurance will pay for the plumbing repair itself—usually, they only pay for the *resulting* damage. However, if the plumber has to tear through a wall to reach the burst, some insurance policies will cover the cost of 'accessing' the leak. To ensure your claim is handled correctly, you should report the incident to your agent immediately and hire a reputable Chino Hills plumber who knows how to document the failure for insurance purposes. This documentation is the key to proving the event was sudden and accidental rather than a maintenance issue."
        },
        {
            q: "Do plumbers fix burst pipes?",
            a: "Fixing burst pipes is a core competency and a daily service provided by professional plumbers. It is one of the most common emergency calls we receive in Chino Hills. A plumber's role in a burst pipe scenario is comprehensive: they first perform an emergency shut-off if the homeowner hasn't already done so; they then use diagnostic tools to locate the break if it's hidden; and finally, they perform a 'structural' repair. This repair involves removing the compromised section of pipe and replacing it with modern, pressure-tested materials like PEX or high-grade copper. Plumbers also check for systemic issues, such as excessive water pressure from the city main, and can install devices to prevent future bursts. While a plumber focuses on the water delivery system, they are also the first line of defense in property preservation, as their rapid arrival and repair stops the water damage at its source. If you have a burst pipe, call a licensed plumber at (877) 792-1410 immediately."
        },
        {
            q: "What to do if you get a burst pipe?",
            a: "If you experience a burst pipe in your Chino Hills home, you must act in seconds to minimize damage. **Step 1: Shut off the water.** Go to your main water shut-off valve and turn it clockwise until it stops. If you don't know where it is, call us and we will guide you. **Step 2: Shut off the electricity.** If the water is near any electrical fixtures or your breaker box, turn off the power at the main panel. **Step 3: Drain the system.** Turn on all your cold and hot water faucets to drain the pipes and stop the pressure from forcing more water out of the burst. **Step 4: Call a professional.** Contact Chino Hills Burst Pipe Repair Pros at (877) 792-1410. **Step 5: Document and Clean.** Take photos for insurance and then use a wet-dry vac or towels to remove as much standing water as possible. Do not wait for the plumber to arrive before starting the water removal; every minute the water sits, it penetrates deeper into your home's structure."
        },
        {
            q: "Can a handyman fix a leaking pipe?",
            a: "A handyman can often fix a simple leak under a kitchen sink or a dripping faucet, but they should never be entrusted with a burst pressurized pipe. Leaks involve more than just tightening a nut; they often indicate underlying issues such as high water pressure, electrolysis, or the end of a pipe's service life. A licensed Chino Hills plumber has the training to identify these root causes. Handymen also lack the expensive, specialized tools like acoustic leak detectors that allow for non-invasive repair. Perhaps most importantly, if a handyman's repair on a pressurized line fails while you're away, the resulting flood might not be covered by your insurance if the work wasn't performed by a licensed professional. When the integrity of your home's main water delivery system is at stake, the 'savings' of a handyman are never worth the risk of a catastrophic failure. Always opt for a licensed, insured plumbing specialist for any pressurized pipe concern."
        },
        {
            q: "Who is liable for burst pipes?",
            a: "Liability for a burst pipe is determined by the ownership of the plumbing and the cause of the failure. In a single-family home in Chino Hills, the homeowner is liable for all pipes from the water meter into the house. If the burst was caused by a manufacturer's defect in a relatively new pipe or fitting, there may be a product liability claim against the manufacturer. In a condo or apartment, the liability usually depends on whether the pipe was a 'common' line serving multiple units (HOA/Landlord liability) or a 'branch' line serving only one unit (Tenant/Owner liability). If a burst was caused by a contractor's recent work, that contractor's insurance would be liable. Determining liability requires a professional 'failure analysis' from a licensed plumber, who can testify to the age of the pipe, the nature of the break, and whether maintenance or external factors played a role. This professional report is essential for insurance claims and legal resolution between parties."
        },
        {
            q: "How long does it take a plumber to fix a busted pipe?",
            a: "The actual 'wrench time' to fix a busted pipe is usually between 1.5 to 3 hours, but the total service call in Chino Hills often takes 4 to 5 hours. This additional time is spent on arrival, parking, unloading equipment, performing a full diagnostic to ensure there aren't *other* weak spots in the system, and thoroughly testing the repair under pressure before leaving. If the busted pipe is in a difficult-to-access area, like a crawl space or behind a tiled wall, the plumber must work slowly and carefully to prevent further damage, which can add several hours to the job. We understand that every minute your water is off is an inconvenience, so we arrive with fully stocked trucks containing a wide variety of pipe sizes and fitting types. Our goal is always a 'one-visit fix' that restores your home's functionality as quickly as possible without sacrificing the quality and safety of the final repair."
        },
        {
            q: "Can I fix a burst pipe myself?",
            a: "While you might be able to apply a temporary clamp or specialized repair tape to slow down a leak, you should never attempt a permanent DIY fix on a burst pressurized water pipe. Residential water systems in Chino Hills operate under significant pressure (60-80 PSI), and any join or fitting that isn't perfectly installed will eventually fail, often with more force than the original burst. Professional plumbing requires specific knowledge of pipe expansion, metallurgical compatibility (to prevent galvanic corrosion), and local building codes. Furthermore, a DIY repair has no warranty and will not satisfy an insurance company in the event of a future claim. If your 'fix' gives out while you are sleeping or away from home, the resulting damage will be far more expensive than the cost of hiring a professional today. For the safety of your family and the protection of your home's value, always call a licensed professional at (877) 792-1410 for any pipe burst."
        },
        {
            q: "How much does it cause to fix a burst pipe?",
            a: "Fixing a burst pipe usually 'causes' an expense of $300 to $800 for the plumbing repair, but the total cost of the 'event' can be much higher when you factor in the resulting water damage. The 'cost' of the fix includes the plumber's emergency dispatch fee, their expert labor, and the high-grade materials used for the permanent restoration. In Chino Hills, you must also consider the cost of water mitigation—the professional removal of standing water and the drying out of walls and floors—which can range from $1,000 to $5,000 or more. If the burst leads to mold growth, remediation costs can easily exceed $10,000. Therefore, the most important 'cost' factor is the speed of your response. Calling an emergency plumber locally within the first hour of a burst can save you thousands of dollars by stopping the flow of water before it penetrates your home's structural elements. Rapid response is the only way to minimize the total financial impact of a burst pipe."
        },
        {
            q: "How much does a plumber charge to fix a busted pipe?",
            a: "Plumbers in the Chino Hills area generally charge an emergency rate for busted pipes, resulting in a total bill of $350 to $900 for most residential calls. This includes the localized repair of the pipe and a basic system pressure check. If the busted pipe is located in a concrete slab (a 'slab leak'), the charge will be higher because of the specialized electronic detection equipment and the labor required to chip through the concrete or perform a 'pipe bypass' reroute. You are paying for more than just a piece of pipe; you are paying for the plumber's ability to be at your door in 60 minutes or less, their specialized tooling, and their insurance which protects you if anything goes wrong. We provide a clear, upfront estimate before any work begins so you can make an informed decision. Always remember that a professional repair from Chino Hills Burst Pipe Repair Pros comes with a guarantee of quality and safety that no DIY or handyman fix can match."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="faq">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mb-16 text-center mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-widest border border-amber-100 mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Knowledge Base</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight leading-tight uppercase tracking-tight">
                        Chino Hills Burst Pipe <br />
                        <span className="text-amber-600 font-heading">Expert Knowledge Base</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 mb-24">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-amber-200 transition-all group hover:shadow-2xl hover:shadow-amber-900/5">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors shadow-sm">
                                    <HelpCircle className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{faq.q}</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium italic">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 border-t border-slate-100">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                        <img src="/4.jpeg" alt="Pipe Burst Emergency" className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                                <p className="text-white font-bold italic text-xl leading-relaxed">
                                    "A burst pipe is a race against time. We stop the water, protect your home, and restore your peace of mind with precision repairs."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Leak Detection</h3>
                                <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest font-bold">Fast, localized leak localization for Chino Hills homeowners in flooding emergencies.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-amber-600 text-white shadow-xl shadow-amber-600/30 hover:shadow-2xl transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                                    <ShieldCheck className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">System Audits</h3>
                                <p className="text-white/90 text-sm leading-relaxed uppercase tracking-widest font-bold">We bridge the gap between safety and failure by performing full pipe system health reviews.</p>
                            </div>
                        </div>

                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-amber-500/10">
                            <img src="/3.jpeg" alt="Burst Pipe Restoration" className="w-full object-cover aspect-video transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-6 right-6 px-6 py-2 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest animate-pulse border border-white/20 shadow-lg">
                                Chino Hills Specialist
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BurstPipeInfo;
