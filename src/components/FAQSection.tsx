import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "কোর্সের মেয়াদ কতদিন?",
    answer:
      "কোর্সটি স্ব-গতিতে করা যায়। আপনি নিজের সময় অনুযায়ী শিখতে পারবেন। সাধারণত ৪-৬ সপ্তাহে সম্পূর্ণ কোর্স শেষ করা যায়, তবে আপনার লাইফটাইম এক্সেস থাকবে।",
  },
  {
    question: "ক্লাস কিভাবে হবে?",
    answer:
      "সম্পূর্ণ কোর্স প্রি-রেকর্ডেড HD ভিডিও আকারে দেওয়া আছে। আপনি যেকোনো সময়, যেকোনো জায়গা থেকে মোবাইল, ল্যাপটপ বা ট্যাবলেটে দেখতে পারবেন।",
  },
  {
    question: "কোর্স শেষে কি সার্টিফিকেট পাব?",
    answer:
      "হ্যাঁ, অবশ্যই! কোর্স সম্পূর্ণ করার পর আপনি একটি অফিসিয়াল সার্টিফিকেট অফ কমপ্লিশন পাবেন যা আপনার প্রোফাইলে যোগ করতে পারবেন।",
  },
  {
    question: "কোর্সের এক্সেস কতদিন থাকবে?",
    answer:
      "একবার ভর্তি হলে আপনার লাইফটাইম এক্সেস থাকবে। যতবার খুশি ভিডিও দেখতে পারবেন এবং ভবিষ্যতে কোনো আপডেট থাকলে সেটাও ফ্রিতে পাবেন।",
  },
  {
    question: "পেমেন্ট করার পর কত সময়ে এক্সেস পাব?",
    answer:
      "পেমেন্ট ভেরিফিকেশনের পর সাধারণত ১-২ ঘণ্টার মধ্যে আপনার ইমেইলে কোর্স এক্সেস লিংক পাঠিয়ে দেওয়া হয়। অফিস আওয়ার্সে সর্বোচ্চ ৬ ঘণ্টা সময় লাগতে পারে।",
  },
  {
    question: "রিফান্ড পলিসি কী?",
    answer:
      "আমরা ৭ দিনের মানি ব্যাক গ্যারান্টি দিই। যদি কোর্স আপনার ভালো না লাগে বা আশানুরূপ না হয়, ৭ দিনের মধ্যে জানালে সম্পূর্ণ টাকা ফেরত পাবেন।",
  },
  {
    question: "কোন ধরনের সাপোর্ট পাওয়া যাবে?",
    answer:
      "আমাদের প্রাইভেট ফেসবুক গ্রুপে যুক্ত হতে পারবেন যেখানে শেফ রহমান এবং অন্যান্য শিক্ষার্থীদের সাথে যোগাযোগ করতে পারবেন। যেকোনো প্রশ্ন বা সমস্যায় সাহায্য পাবেন।",
  },
  {
    question: "বিগিনার হলেও কি করতে পারব?",
    answer:
      "অবশ্যই! এই কোর্স বিগিনার থেকে অ্যাডভান্সড সবার জন্য। একদম শূন্য থেকে শুরু করে ধাপে ধাপে সব শেখানো হয়েছে।",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <HelpCircle className="h-4 w-4" />
            সচরাচর জিজ্ঞাসা
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            আপনার <span className="text-gradient-hero">প্রশ্নের</span> উত্তর
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            কোর্স সম্পর্কে সাধারণ প্রশ্নের উত্তর এখানে পাবেন
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="overflow-hidden rounded-2xl border border-border/50 bg-background px-6"
              >
                <AccordionTrigger className="py-5 text-left text-lg font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
