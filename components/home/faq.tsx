"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is nearshore software development?",
      answer:
        "Nearshore development refers to outsourcing software projects to nearby countries with similar time zones, making collaboration smoother and more cost-effective.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity, but we always provide a clear roadmap with defined milestones.",
    },
    {
      question: "Do you offer dedicated teams?",
      answer:
        "Yes. We provide dedicated development teams tailored to your project requirements—both nearshore and offshore.",
    },
    {
      question: "How do you ensure code quality?",
      answer:
        "We follow industry best practices, perform peer code reviews, and implement automated and manual testing to ensure high-quality deliverables.",
    },
    {
      question: "Can you scale teams as projects grow?",
      answer:
        "Absolutely. We can quickly scale teams up or down depending on the needs of your project, without compromising quality.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "Our teams have experience across multiple industries, including finance, healthcare, e-commerce, logistics, and education.",
    },
    {
      question: "How do you handle communication?",
      answer:
        "We work in your time zone (or close to it) and use tools like Slack, Jira, and Zoom to ensure transparent and efficient communication.",
    },
    {
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing—fixed-price, time & material, or dedicated team models—depending on your project requirements.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-gray-900 px-6 sm:px-12 py-24 flex flex-col gap-16">
      {/* Section Header */}
      <div className="text-center">
        <span className="text-sm font-semibold tracking-[0.2em] text-gray-500 mb-2 block">
          05
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          Clear answers to common questions about our services and processes.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto flex flex-col divide-y divide-gray-200 border border-gray-200 rounded-xl shadow-sm">
        {faqs.map((faq, i) => (
          <div key={i} className="p-5 sm:p-6 hover:bg-gray-50 transition">
            <button
              onClick={() => toggleFAQ(i)}
              className="flex justify-between items-center w-full text-left group"
            >
              <h4 className="font-medium text-lg text-gray-900 group-hover:text-red-600 transition">
                {faq.question}
              </h4>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180 text-red-600" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "max-h-40 mt-3 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
