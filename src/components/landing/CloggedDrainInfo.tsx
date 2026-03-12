import { Search, Info, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CloggedDrainInfo = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the average cost to unclog a drain in Chino Hills?",
            answer: "In Chino Hills, CA, the average cost to unclog a standard drain ranges from $150 to $450 depending on the severity and location of the blockage. Standard sink or shower clogs are generally on the lower end of this spectrum, while more complex blockages deper in the plumbing stack can increase the labor time and specialized equipment required. Homeowners should understand that 'average cost' is a baseline; emergency after-hours calls or holidays naturally incur higher rates due to immediate dispatch needs. A professional plumber in Chino Hills will typically charge a flat fee for simple snaking, but if hydro jetting is required to clear years of grease buildup, the price can climb. It is important to remember that while a localized clog might be cheap to clear, it often serves as a warning sign for larger issues within the drainage system. Investing in a professional diagnostic early can save thousands in potential property damage from sewage backups."
        },
        {
            question: "How much does it normally cost to unblock a drain?",
            answer: "Normally, unblocking a drain involves a combination of a service call fee and the actual labor for clearing the obstruction. For simple fixtures like toilets or kitchen sinks, most Chino Hills plumbing services will quote between $125 and $300. This nominal fee covers the technician's time, vehicle expenses, and the use of professional-grade motorized snakes. However, 'normal' costs can vary significantly if the technician discovers that the blockage is caused by structural pipe failure or significant root intrusion. In such cases, the process evolves from a simple clearing to a more comprehensive drain cleaning service. Homeowners in San Bernardino County should also factor in the age of their pipes; older cast iron or clay pipes might require slower, more delicate handling compared to modern PVC. Always ask for a clear breakdown of the service before work begins to ensure there are no surprises regarding the final invoice for your drain restoration."
        },
        {
            question: "Why do plumbers say not to use chemical drain cleaners?",
            answer: "Plumbers universally discourage the use of chemical drain cleaners like Drano for several critical reasons involving both pipe health and personal safety. These products rely on caustic chemicals, such as sodium hydroxide or sulfuric acid, which generate extreme heat through a chemical reaction to dissolve the clog. This heat can soften or even melt PVC pipes and can significantly corrode older metal or cast iron plumbing over time. Furthermore, chemical cleaners are rarely effective on complete blockages; they simply sit on top of the clog, creating a pool of toxic acid that a plumber must then manually handle when they arrive to mechanicaly snake the drain. This poses a severe burn risk to the technician. Additionally, these chemicals are devastating to the environment and can kill the beneficial bacteria in septic systems. For residents in Chino Hills, the better alternative is always mechanical snaking or high-pressure hydro jetting, which physically removes the obstruction without the destructive side effects of caustic chemicals."
        },
        {
            question: "How much does Roto Rooter charge to clean a main sewer line?",
            answer: "Roto Rooter and similar national franchises typically charge between $350 and $650 for a main sewer line cleaning in the Chino Hills area. Their pricing model often accounts for the use of heavy-duty industrial augers capable of cutting through thick tree roots and heavy sludge accumulation. While many homeowners look for a quick quote, major sewer line cleaning often requires a video camera inspection first to identify the exact nature of the backup. This diagnostic step is crucial because if the line is collapsed or severely offset, simply running a snake through it could worsen the damage. While franchised services offer the reliability of a big brand name, local Chino Hills specialists can often provide more personalized service and competitive rates for the same level of heavy equipment. Regardless of the provider, a main line cleaning is a major service that prevents the catastrophic scenario of sewage backing up into the lowest drains of your home, such as basement floor drains or tubs."
        },
        {
            question: "Why is snaking a drain so expensive if it looks simple?",
            answer: "While snaking a drain might appear to be a simple process of pushing a wire through a pipe, the 'expense' reflects the specialized equipment, liability coverage, and professional expertise required to do the job safely. Professional-grade motorized snakes cost thousands of dollars and require significant skill to operate without damaging the interior of the pipes or snapping the cable off inside the line—a nightmare scenario that requires expensive excavation. Furthermore, when you hire a Chino Hills professional, you are paying for their insurance, licensing, and the guarantee that if something goes wrong during the repair, you are protected. The cost also includes the waste disposal fees and the decontamination of the technician's equipment after working in a 'black water' environment. Finally, a plumber isn't just clearing a clog; they are diagnosing the health of your entire system. That expert insight prevents future emergencies, making the upfront cost a long-term investment in your home's structural integrity."
        },
        {
            question: "Can you clear a main sewer line clog yourself?",
            answer: "Clearing a main sewer line clog is generally not a DIY task for the average homeowner in Chino Hills. Main line clogs usually occur deep underground and often involve heavy root intrusion or significant scale buildup that a standard handheld snake or chemical cleaner cannot touch. While you can rent industrial-sized snakes from local hardware stores, these machines are incredibly dangerous for untrained users. The high-torque motors can cause the heavy steel cable to kink or whip, leading to broken bones or severed fingers if handled incorrectly. Furthermore, without a sewer camera, a DIYer is 'flying blind,' potentially pushing the clog further down the line or puncturing a pipe that was already weakened by age. If you suspect a main line issue—characterized by multiple fixtures backing up simultaneously or gurgling sounds from the toilet—the safest and most cost-effective path is to call a professional who has the right tools and training to resolve the issue without causing further damage."
        },
        {
            question: "How much should it cost to clear a clogged drain in Chino Hills?",
            answer: "For a typical Chino Hills residential property, you should expect to pay between $175 and $350 for standard drain clearing during regular business hours. This price point reflects the local market rate for skilled labor and the maintenance of professional equipment. If the service involves a kitchen sink with a garbage disposal, the complexity increases slightly, but still usually falls within this range. It is 'fair' to see a higher quote if the plumber needs to pull a toilet to reach the main stack or if the access point is located in an awkward crawlspace. Homeowners should be wary of extremely low 'teaser' rates, which often lead to aggressive upselling for services you might not need. A reputable Chino Hills plumbing technician will provide a clear, upfront price after an initial assessment, ensuring you understand exactly what you are paying for. Always ensure the quote includes the actual removal of the debris, not just punching a small hole through the blockage which will likely reform within weeks."
        },
        {
            question: "Are clogged drains covered by homeowners insurance?",
            answer: "Whether a clogged drain is covered by homeowners insurance in Chino Hills depends heavily on the cause of the clog and the specific riders in your policy. Generally, standard homeowners insurance does NOT cover the cost of clearing a clog caused by normal wear and tear, such as hair or grease buildup. Insurance is designed to cover 'sudden and accidental' events, not maintenance issues. However, if a pipe suddenly bursts or a major backup causes significant water damage to your floors and walls, the 'consequential damage' might be covered, even if the drain clearing itself is not. Many Chino Hills residents find that they need a specific 'Sewer Backup and Sump Pump Overflow' rider to be fully protected against the costs of professional cleanup and restoration after a drainage failure. Always review your policy with your local agent to understand your coverage limits before an emergency occurs, as water damage is one of the most common and expensive claims in the San Bernardino area."
        },
        {
            question: "Are blocked drains covered by home insurance in California?",
            answer: "In California, the rules for blocked drain coverage are fairly standard across the major insurance carriers, but the regional risks—such as invasive tree roots or seismic shifts—can complicate things. Most basic policies exclude 'drain blockages' as they fall under the category of home maintenance. However, if the blockage is a direct result of a covered peril, such as a falling tree or a specific external event, there may be grounds for a claim. For Chino Hills homeowners, the biggest concern is often the damage caused by the backup, rather than the clog itself. If you have the aforementioned sewer backup endorsement, your insurance will likely pay for the professional extraction of sewage and the replacement of damaged drywall and flooring. Without this specific coverage, you might be left paying out-of-pocket for tens of thousands of dollars in remediation costs. It is essential to document all service calls and keep receipts for professional drain cleaning to show that you have been proactive in maintaining your plumbing system."
        },
        {
            question: "Is professional drain cleaning worth the investment?",
            answer: "Professional drain cleaning is absolutely worth the investment for Chino Hills homeowners who want to avoid the stress and expense of emergency plumbing failures. Unlike DIY methods that often only clear a small path through a clog, professional hydro jetting or heavy-duty snaking restores the pipe's interior to nearly its original diameter. This prevents recurring blockages and significantly extends the life of your plumbing system by removing corrosive buildup like scale and minerals. Furthermore, a professional cleaning allows a technician to spot early warning signs of pipe degradation or root intrusion that a homeowner would never see. By spending a few hundred dollars on annual or biennial maintenance, you can avoid the multi-thousand dollar bill associated with a main line replacement or a sewage backup cleanup. Peace of mind knowing that your home's drainage is clear and functional is the primary benefit, especially during periods of heavy usage like holidays or family gatherings."
        },
        {
            question: "How do plumbers clear blocked drains in Chino Hills?",
            answer: "Plumbers in Chino Hills utilize a tiered approach to clear blocked drains, starting with the least invasive method. For simple clogs, they use high-torque motorized augers (snakes) with various cutting heads designed to break up hair, grease, or small roots. If the clog represents a more stubborn buildup of grease, fats, or minerals, they will deploy hydro jetting equipment. Hydro jetting uses specialized nozzles that blast water at pressures up to 4,000 PSI, literally scrubbing the pipe walls clean. For every major service, a professional will perform a video camera inspection. This involves feeding a waterproof camera into the line to see the obstruction in real-time. This allows the plumber to verify that the pipe is completely clear and to check for any structural flaws that might lead to future clogs. By combining mechanical power with visual diagnostics, Chino Hills professionals ensure that the drain isn't just clearing, but is restored to optimal condition."
        },
        {
            question: "How much will a plumber charge to unclog a drain?",
            answer: "A licensed plumber in Chino Hills will typically charge between $200 and $400 to unclog a standard residential drain. This fee structure usually covers the first hour of labor and the use of their primary tools. If the job requires moving heavy appliances or gaining access through a roof vent, the price will accurately reflect the additional risk and labor. For more severe main line issues, you might see quotes starting at $450+. It's important to differentiate between 'drain clearing' (pugging a hole) and 'drain cleaning' (restoring the pipe). A high-quality plumber will focus on the latter, which might cost slightly more upfront but provides a much longer-lasting solution. When comparing quotes, always ask if the price is a flat rate or hourly, and ensure it includes a basic camera inspection to ensure the job was done correctly. Chino Hills residents should expect transparent pricing from any professional service."
        },
        {
            question: "Can you unblock a drain yourself?",
            answer: "You can certainly attempt to unblock a minor drain yourself using a plunger or a simple hand-cranked snake from a hardware store. For kitchen sink clogs caused by food particles or bathroom sinks with hair accumulation, these DIY tools are often sufficient. However, if the blockage persists after several attempts, or if multiple drains in the house are slowing down at once, these are signs of a deeper issue that DIY efforts could worsen. Forcing a cheap snake into a pipe can cause it to get stuck or even puncture older, fragile pipes. Furthermore, Chino Hills homeowners should avoid the temptation to dump multiple bottles of chemical cleaner down the drain, as this creates a dangerous cocktail of acid that can damage the pipes and endanger any plumber you eventually call. If the 'easy' DIY fixes don't work, it's a clear signal that it's time to call in a professional with the right equipment and experience to clear the problem safely."
        },
        {
            question: "Is hydro jetting worth the cost for Chino Hills homes?",
            answer: "Hydro jetting is highly recommended and worth the cost for many Chino Hills homes, particularly those with older plumbing or persistent grease issues. While it costs more than standard snaking—often ranging from $400 to $900—it is the only method that actually 'cleans' the inside of the pipe. Snaking simply punches a hole through a clog, but hydro jetting uses extreme water pressure to blast away all of the scale, grease, and debris that lines the pipe walls. This essentially returns the pipe to a 'like-new' state, which can prevent clogs for years to come. In Chino Hills, where tree roots are a common problem, the specialized jetting heads can also slice through roots more effectively than an auger. For any homeowner experiencing recurring backups, hydro jetting is often the final step needed to stabilize the system and avoid the massive expense of a full pipe replacement. It is a proactive investment in the longevity of your home's infrastructure."
        },
        {
            question: "Is a drain snake or Drano better?",
            answer: "Between a drain snake and chemical cleaners like Drano, a drain snake is objectively the better and safer choice for your plumbing. A snake provides a mechanical solution to a physical problem; it physically breaks up and removes the obstruction without introducing harmful chemicals into your pipes. Drano and similar products are caustic, meaning they create heat and eat away at materials. Over time, this weakens your pipes, especially the joints and seals. Furthermore, if Drano is unsuccessful at clearing the clog, you are left with a pipe full of standing, highly corrosive liquid that is dangerous to handle. In Chino Hills, professional plumbers will always reach for a motorized snake over a chemical bottle every time. A snake allows the technician to 'feel' the blockage and determine its nature, whereas chemicals are an indiscriminate and often ineffective 'hail mary' that does more harm than good to the long-term health of your drainage system."
        },
        {
            question: "What does a Roto Rooter charge to snake a drain?",
            answer: "A Roto Rooter franchise in the Chino Hills region typically charges between $175 and $325 for a standard drain snaking service. Their pricing model is often structured to include a 'trip charge' plus the time required to clear the specific fixture. If the technician needs to work through a clean-out or access the line from the roof, you might see an add-on fee for the increased difficulty. It is worth noting that while they are a major national brand, their technicians are often commission-based, which can sometimes lead to recommendations for more expensive services like hydro jetting or camera inspections. Homeowners should always ask for a written estimate before the snake enters the pipe. While snaking is their foundational service, the final bill will depend on the duration of the work and the number of drains being serviced during the call. For many Chino Hills residents, the branded service offers a level of accountability and warranty that is valued during a plumbing emergency."
        },
        {
            question: "What is the 135 rule in plumbing?",
            answer: "The '135 rule' is a standard in plumbing design and maintenance that refers to the required slope and sizing of drain lines to ensure proper gravity flow. Specifically, it often references the relationship between pipe diameter and the maximum number of 'fixture units' that can be connected before a larger line is required. In the context of Chino Hills home maintenance, it relates to the principle that a 1-inch pipe can handle 1 fixture unit, a 3-inch pipe can handle 35, and so on. Understanding these ratios is critical for plumbers when they are diagnosing why a system might be constantly clogging. If a previous renovation added too many fixtures to a small drain line, no amount of cleaning will permanently solve the problem—it is a structural design flaw. For Chino Hills property owners, having a professional evaluate your system against these standards ensures that your plumbing is actually capable of handling your household's waste demands, preventing chronic slow drains and backups."
        },
        {
            question: "Why pour vinegar down the drain in October?",
            answer: "Pouring vinegar (and often baking soda) down your drains in October is a popular seasonal maintenance tip intended to prep your plumbing for the heavy usage of the holiday season. The chemical reaction between baking soda and vinegar creates a foaming action that helps to loosen light debris and eliminate the odors caused by bacteria buildup. October is the ideal time for this because Chino Hills homes often see a significant increase in cooking grease and food scraps during November and December. While this natural 'at-home' remedy won't clear a major root intrusion or a hardened grease clog, it is an excellent preventive measure to keep drains smelling fresh and clear of minor sludge. For the best results, follow the foam with several gallons of very hot water to flush everything through. Consider it a localized 'detox' for your kitchen and bathroom drains before the house is full of holiday guests and the plumbing is pushed to its limits."
        },
        {
            question: "Does Dawn dish soap unclog drains?",
            answer: "Dawn dish soap can be a surprisingly effective tool for unclogging drains, specifically those blocked by fat and grease. Because Dawn is engineered to break down grease on dishes, it works similarly inside your pipes. When you have a slow kitchen drain, pouring a generous amount of Dawn down followed by a large pot of boiling water can sometimes emulsify the localized grease enough to flush it through the system. This method is particularly popular in Chino Hills for clearing minor kitchen clogs before they become a total blockage. However, it will have zero effect on hair clogs, tree roots, or foreign objects like toys or hygiene products. It should be viewed as a first-line maintenance attempt for kitchen sinks rather than a universal unclogger. If the dish soap and hot water don't solve the issue, it means the clog is likely too dense or isn't grease-based, requiring professional mechanical intervention to restore full flow."
        },
        {
            question: "How do you unclog a main sewer line without a snake?",
            answer: "Unclogging a main sewer line without a snake is difficult and often only possible if the blockage is minor and caused by soft material. One method is 'hydro-flushing' using a high-pressure garden hose attachment, though this lacks the power of professional hydro jetting and can often just push the clog further down. Some Chino Hills homeowners try using a 'drain bladder' (also known as a blow bag), which expands in the pipe and uses water pressure to force the clog through. While these can work for simple paper clogs, they are useless against roots or heavy grease. Another non-snake method is the application of powerful enzyme cleaners over several days, which slowly digest organic material. However, most main line clogs in San Bernardino County are too advanced for these passive methods once they reach the point of a backup. Ultimately, while there are a few niche tools, the standard motorized snake remains the gold standard for a reason: it provides the physical force necessary to clear deep, compacted obstructions reliably."
        },
        {
            question: "What do plumbers recommend instead of Drano?",
            answer: "Instead of caustic products like Drano, professional plumbers in Chino Hills recommend a variety of safer and more effective alternatives. For regular maintenance, they suggest using enzyme-based cleaners which use natural bacteria to 'eat' the organic film that traps clogs. These are safe for all pipe types and septic systems. For active clogs, they recommend the use of a simple plunger or a hand-held drain auger (snake). If these don't work, the recommendation is always professional hydro jetting or motorized snaking. Plumbers also emphasize 'prevention as a recommendation,' suggesting that homeowners install high-quality mesh strainers over all drains to catch hair and food particles before they enter the system. In the Chino Hills area, where mineral-rich water can lead to scale buildup, they might also recommend a water softener to reduce the accumulation of hard deposits inside the pipes, which is a common silent contributor to frequent clogs over a home's lifespan."
        },
        {
            question: "What do I do if I can't clear the clog even after trying everything?",
            answer: "If you have tried plunging, snaking, and even mild natural cleaners without success, the first thing you should do is STOP and call a professional. At this point, you run the risk of causing structural damage to your pipes or getting a DIY tool stuck inside the line. Turn off the water supply to the affected fixtures to prevent an accidental overflow. In Chino Hills, persistent clogs often indicate that the problem isn't in the fixture, but in the main stack or the lateral sewer line. A professional plumber will bring a diagnostic camera to see exactly what the problem is. This 'visual confirmation' is essential because it prevents wasted effort on the wrong part of the system. Remember, a clog that won't move is often a sign of a collapsed pipe, significant root growth, or a foreign object that no snake can clear. Getting a pro on-site early is the best way to prevent a localized inconvenience from turning into a major flood of your home."
        },
        {
            question: "What is the difference between drain clearing and drain cleaning?",
            answer: "In the Chino Hills plumbing industry, there is a major difference between drain clearing and drain cleaning. 'Drain clearing' is a reactive service that involves using a snake to punch a hole through a blockage to restore temporary flow. It's a 'fix for today.' 'Drain cleaning,' on the other hand, is a comprehensive process—usually involving hydro jetting—that removes all debris, grease, and scale from the entire diameter of the pipe. Think of it as a 'restoration.' Clearing is cheaper but often results in the clog returning within a few months because the source of the buildup (like grease lining the walls) remains. Cleaning is more expensive but can keep drains trouble-free for years. Chino Hills homeowners should always ask their technician which service they are receiving. While clearing is fine for a one-off accident, chronic clogs require the thoroughness of a professional cleaning to actually solve the root cause of the plumbing failure."
        },
        {
            question: "What do plumbers recommend to unclog drains effectively?",
            answer: "To unclog drains effectively, plumbers recommend a focus on mechanical removal and professional diagnostics. Their first recommendation is usually a high-quality plunger, which uses pressure to move the clog. If that fails, they recommend a closet auger for toilets or a sink snake for other fixtures. However, the most effective recommendation they can give a Chino Hills homeowner is to avoid chemicals and instead invest in a professional camera inspection once every few years. This allows you to see the health of your pipes and address small buildups before they become emergencies. They also recommend 'hot water flushes' for kitchen sinks to keep grease moving through. Ultimately, their advice is to treat your plumbing like your car: regular professional maintenance is far more effective and less expensive than waiting for a complete breakdown that requires emergency rescue and potentially expensive parts replacement."
        },
        {
            question: "Why do plumbers not like Drano and other chemical cleaners?",
            answer: "Plumbers dislike Drano primarily because it is a 'false fix' that often masks larger problems while damaging the home's infrastructure. The caustic nature of the chemicals causes pipe walls to thin, joints to leak, and it can even cause old cast iron to crumble. For a Chino Hills professional, Drano also makes their job significantly more dangerous. When they disassemble a trap or snake a line, they don't want to be splashed with a highly acidic liquid that can cause permanent chemical burns or blindness. Furthermore, if a homeowners uses Drano repeatedly, it can give them a sense that 'the problem is solved' when in reality, the pipe is simply accumulating more and more dangerous chemicals behind a solid blockage. Plumbers would much rather solve the physical problem with a physical tool, ensuring the pipe is clear, safe, and structurally sound for the future of the Chino Hills property."
        },
        {
            question: "Will Drano dissolve a toilet paper clog?",
            answer: "Drano is actually very poor at dissolving toilet paper clogs, and it should NEVER be used in a toilet. Most chemical drain cleaners are heavier than water, meaning they will sink to the bottom of the trap. Because toilets are designed with a built-in 'P-trap' and a large volume of water, the chemicals often sit in the porcelain bowl without ever reaching the clog. The extreme heat generated by the chemical reaction can also crack the porcelain of your toilet, leading to an expensive replacement. For paper clogs in Chino Hills, a plunger is almost always the effective tool. If a plunger doesn't work, a 'closet auger'—a specialized snake with a rubber guard to protect the toilet's finish—is the professional recommendation. Drano is a waste of money for toilet clogs and creates a hazardous environment for any plumber who has to arrive later to resolve the backup."
        },
        {
            question: "What is the average cost to unclog a sewer line in Chino Hills?",
            answer: "In Chino Hills, the average cost to unclog a main sewer line typically falls between $300 and $600. This is higher than a standard drain because it requires larger, more powerful motorized snakes and usually involves more labor to access the line through a clean-out. If the plumber finds that the blockage is due to massive tree roots common in the Chino Hills landscape, they may recommend hydro jetting combined with a chemical root inhibitor, which can push the cost toward $800 or more. The 'average' can also be influenced by the depth and length of the pipe; longer runs to the city sewer main require more time and more cable. Homeowners should ensure that the price includes a 'clear to the main' guarantee and a follow-up camera check. This ensures that you aren't just paying for a temporary hole, but for a fully functional sewer line that won't backup again next week."
        },
        {
            question: "What are the common signs of a blocked drain?",
            answer: "The common signs of a blocked drain in a Chino Hills home include slow drainage in sinks or tubs, gurgling sounds coming from your pipes after you flush the toilet, and unexplained foul odors emanating from the drains. Another major warning sign is when one fixture's usage affects another—for example, if using the washing machine causes water to bubble up in your shower. This indicates a blockage deep in the main line. You might also notice a rise in water level in your toilets even when they aren't being flushed. For exterior clogs, look for particularly lush patches of grass over your sewer line or soggy spots in your yard. Chino Hills residents should take these signs seriously; a slow drain today is often the precursor to a complete and messy backup tomorrow. Addressing these warnings early with a professional cleaning prevents a localized inconvenience from becoming a major home disaster."
        },
        {
            question: "Is drain blockage covered by insurance California?",
            answer: "In California, standard homeowners insurance generally excludes drain blockages from normal coverage because they are considered maintenance issues. However, the damage result from a backup is a different story. To be covered for the repair of floors, walls, and personal property after a sewage backup, most Chino Hills residents must have a 'Water Backup' endorsement on their policy. This is an optional but highly recommended add-on. It's also important to note that many policies have a 'neglect' clause; if they find that you knew about a slow drain for months and did nothing, they might deny the claim for the resulting damage. This makes regular professional drain maintenance not just a plumbing best practice, but a prerequisite for keeping your insurance protection intact. Always check with your local San Bernardino County agent to ensure your 'backup and overflow' coverage limits are sufficient for a modern home restoration."
        },
        {
            question: "How much does Roto Rooter charge to unclog a main sewer line?",
            answer: "Roto Rooter typically charges between $350 and $550 for main sewer line unclogging in the Chino Hills area, though this can vary based on the specific franchise's local pricing. Their standard service includes the use of a heavy-duty power auger to clear common obstructions. If they need to perform a camera inspection to identify why the line is blocked, there is usually an additional fee of $150 to $250. It's common for their technicians to offer a warranty on the clearing, provided there isn't obvious pipe damage. For residents in Chino Hills, many choose this service for the brand's '24/7' availability, though you should always verify if there are surcharges for nights, weekends, or holidays. While snaking is their primary tool, be prepared for them to recommend more advanced solutions like hydro jetting if they encounter significant grease or roots during the clearing process."
        },
        {
            question: "How much will a plumber charge to unblock a drain?",
            answer: "Most independent Chino Hills plumbers charge a service fee plus a flat rate for drain unblocking, typically totaling between $150 and $350. The exact price depends on the fixture affected and how easy it is to access the clog. A kitchen sink with a double basin and a garbage disposal is more labor-intensive than a simple shower drain. If the plumber needs to enter through the roof or remove a basement toilet, the price will accurately reflect the additional risk and time. Homeowners should look for plumbers who provide a clear upfront estimate and who stand behind their work with a short-term guarantee. In Chino Hills, it's also worth asking if the price includes a basic camera look-through to ensure the obstruction is completely gone. Transparent pricing is the sign of a trustworthy professional who understands the local San Bernardino County market."
        },
        {
            question: "How long does it take a plumber to unclog a main sewer line?",
            answer: "A professional plumber can usually unclog a main sewer line in 1 to 3 hours, depending on the severity of the blockage. If the access point (clean-out) is easily reachable and the clog is a simple paper obstruction, it might take less than an hour. However, if they are fighting decades of tree root growth or a heavy grease 'slug,' they may need to run multiple passes with different cutting heads, which takes more time. The process also includes the setup and breakdown of heavy machinery and the required sanitization of the workspace. If a camera inspection is performed (which we highly recommend for Chino Hills homes), add another 30 to 45 minutes to the total time. While everyone wants a quick fix, a thorough job prevents the plumber from having to return next week, so expect a professional to spend at least two hours ensuring the job is done correctly and safely."
        },
        {
            question: "How much do plumbers usually charge to unclog a drain?",
            answer: "Usually, you can expect to pay anywhere from $175 to $400 for a professional drain unclogging in Chino Hills. This 'usual' price covers the standard tools of the trade—motorized snakes and diagnostic equipment. If you are calling for an emergency after 6:00 PM or on a weekend, those prices can easily double. This premium covers the technician's overtime and the costs of maintaining a rapid-response fleet. To get the best value, Chino Hills residents should consider scheduling drain cleaning as a preventive measure during regular business hours. Many companies offer 'drain cleaning specials' for maintenance in the off-season. Always ensure that the quote you receive is 'all-in,' covering the service call, the labor, and any necessary equipment fees. Trustworthy pros in the San Bernardino area will be happy to explain their fee structure before they start any work on your home's primary drainage lines."
        },
        {
            question: "How long does hydro jetting take for a standard home?",
            answer: "Hydro jetting for a standard residential property in Chino Hills typically takes between 2 and 4 hours. The process is more involved than simple snaking because it requires the technician to set up a high-pressure pump, run hoses from a water source, and carefully navigate the jetting head through the entire length of the sewer line. Most of this time is spent on 'multiple passes'; the plumber will run the jetter through to clear the primary blockage, then perform a camera inspection, and then often run the jetter again to ensure that all of the residual grease and scale have been scrubbed from the pipe walls. This meticulous approach is what makes hydro jetting so effective. For Chino Hills homes with extensive root problems or commercial-grade grease buildup, the process could take longer, but the result is a line that is effectively 'like new' and capable of high-performance flow for years."
        },
        {
            question: "Is hydro jetting safe for old pipes in Chino Hills?",
            answer: "Hydro jetting is generally safe for old pipes provided that a professional performs a camera inspection first to verify the structural integrity of the line. For many older Chino Hills homes with cast iron or clay pipes, hydro jetting is actually safer than snaking because it doesn't involve a spinning metal blade that can catch on cracks or offsets. The water pressure can be adjusted to a level that is powerful enough to clear debris but gentle enough to not damage aged materials. However, if the pipe is severely corroded, thinned out, or already collapsing, the high-pressure water could cause the pipe to fail completely. This is why the 'camera first' rule is non-negotiable for any reputable Chino Hills plumber. When done correctly, hydro jetting is the best way to breathe new life into an old plumbing system by removing the friction-causing buildup that leads to chronic backups in aging infrastructure."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-slate-900 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-6 uppercase tracking-widest text-xs font-bold">
                        <Search className="w-4 h-4" />
                        <span>Expert Knowledge Base</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
                        Drain Cleaning <span className="text-amber-500">Insights & FAQ</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-medium italic">
                        Everything Chino Hills homeowners need to know about professional drain clearing, maintenance costs, and plumbing protection strategies.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-white/5 bg-white/5 overflow-hidden transition-all duration-300 hover:border-amber-500/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0 group-hover:bg-amber-500 transition-colors">
                                        <HelpCircle className="w-5 h-5 text-amber-500 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
                                        {faq.question}
                                    </h3>
                                </div>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-amber-500 shrink-0" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-slate-500 shrink-0 group-hover:text-amber-500" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-8 pt-0 border-t border-white/5 bg-slate-950/50">
                                    <p className="text-slate-300 leading-relaxed font-medium italic mb-4">
                                        Expert Response:
                                    </p>
                                    <p className="text-slate-400 leading-relaxed font-medium">
                                        {faq.answer}
                                    </p>
                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-amber-500 uppercase">
                                                    PRO
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Verified by Chino Hills Drain Specialists</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="p-8 bg-amber-900/10 rounded-[2.5rem] border border-amber-500/20 inline-block max-w-2xl">
                        <p className="text-amber-200 text-sm font-medium italic mb-4 italic">
                            "This knowledge base is designed to empower Chino Hills property owners with technical insights into their home's drainage systems. Professional maintenance is the cornerstone of plumbing longevity."
                        </p>
                        <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">- Chino Hills Drain Cleaning Pros Team</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CloggedDrainInfo;
