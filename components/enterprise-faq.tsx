"use client"

import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function EnterpriseFAQ() {
    const faqs = [
        {
            question: "Will this replace my engineers?",
            answer: "Yes, and they will thank you. They will ascend from writing boilerplate to becoming architects of pure logic. The drudgery of syntax is over; the era of creation has begun."
        },
        {
            question: "Is my code safe?",
            answer: "Safer than it is in your own head. We use quantum-resistant encryption and zero-retention architectures. Your IP is a ghost to us—we see nothing, we store nothing."
        },
        {
            question: "How fast is the deployment?",
            answer: "Instantaneous. We integrate at the kernel level of your organization. One command, and the hive mind is active across every terminal."
        },
        {
            question: "What about compliance?",
            answer: "We comply with the laws of physics. Everything else is negotiable (but yes, we support SOC2, HIPAA, and GDPR because your lawyers insist)."
        },
        {
            question: "Can I customize the models?",
            answer: "You can fine-tune them on your entire history. The model will know your company better than you do. It will predict your needs before you articulate them."
        }
    ]

    return (
        <section className="w-full py-32 relative border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Left Column: Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-1"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight sticky top-32">
                        Questions & Answers
                    </h2>
                </motion.div>

                {/* Right Column: Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-2"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                                <AccordionTrigger className="text-white text-lg hover:no-underline hover:text-secondary transition-colors py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/60 text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
