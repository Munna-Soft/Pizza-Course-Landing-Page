import { motion } from "framer-motion";
import { PlayCircle, Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    title: "মডিউল ১: পিৎজার বেসিক",
    lessons: [
      { title: "পিৎজার ইতিহাস ও প্রকারভেদ", duration: "১৫ মিনিট", free: true },
      { title: "প্রয়োজনীয় উপকরণ ও সরঞ্জাম", duration: "২০ মিনিট", free: true },
      { title: "ইনগ্রেডিয়েন্ট সিলেকশন টিপস", duration: "১৮ মিনিট", free: false },
    ],
  },
  {
    title: "মডিউল ২: পারফেক্ট পিৎজা ডো",
    lessons: [
      { title: "ডো তৈরির সায়েন্স", duration: "২৫ মিনিট", free: false },
      { title: "ফারমেন্টেশন ও প্রুফিং", duration: "২০ মিনিট", free: false },
      { title: "হাতে ডো স্ট্রেচিং", duration: "২২ মিনিট", free: false },
      { title: "বিভিন্ন স্টাইলের ক্রাস্ট", duration: "২৮ মিনিট", free: false },
    ],
  },
  {
    title: "মডিউল ৩: সস ও টপিংস",
    lessons: [
      { title: "অথেনটিক টমেটো সস", duration: "২০ মিনিট", free: false },
      { title: "হোয়াইট সস ও পেস্টো", duration: "১৮ মিনিট", free: false },
      { title: "চিজ সিলেকশন গাইড", duration: "১৫ মিনিট", free: false },
      { title: "ক্রিয়েটিভ টপিং কম্বিনেশন", duration: "২৫ মিনিট", free: false },
    ],
  },
  {
    title: "মডিউল ৪: বেকিং টেকনিক",
    lessons: [
      { title: "ওভেন সেটআপ ও টেম্পারেচার", duration: "২০ মিনিট", free: false },
      { title: "হোম ওভেনে পারফেক্ট বেকিং", duration: "২৫ মিনিট", free: false },
      { title: "উডফায়ার স্টাইল হোম টেকনিক", duration: "২২ মিনিট", free: false },
    ],
  },
  {
    title: "মডিউল ৫: স্পেশাল রেসিপি",
    lessons: [
      { title: "মার্গারিটা পিৎজা", duration: "৩০ মিনিট", free: false },
      { title: "পেপারনি ক্লাসিক", duration: "২৮ মিনিট", free: false },
      { title: "বিবিকিউ চিকেন পিৎজা", duration: "৩২ মিনিট", free: false },
      { title: "ভেজ সুপ্রিম", duration: "২৮ মিনিট", free: false },
      { title: "ডেজার্ট পিৎজা", duration: "২৫ মিনিট", free: false },
    ],
  },
  {
    title: "মডিউল ৬: বিজনেস টিপস",
    lessons: [
      { title: "পিৎজা বিজনেস শুরু করার গাইড", duration: "৩০ মিনিট", free: false },
      { title: "কস্টিং ও প্রাইসিং", duration: "২৫ মিনিট", free: false },
      { title: "ফুড হাইজিন ও সেফটি", duration: "২০ মিনিট", free: false },
    ],
  },
];

const Curriculum = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            কোর্স কারিকুলাম
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            কী কী <span className="text-gradient-hero">শিখবেন</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ৬টি মডিউল, ২৫+ ভিডিও লেকচার, ১৫+ রেসিপি
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, moduleIndex) => (
              <AccordionItem
                key={moduleIndex}
                value={`module-${moduleIndex}`}
                className="overflow-hidden rounded-2xl border border-border/50 bg-card px-6"
              >
                <AccordionTrigger className="py-5 text-left text-lg font-semibold text-foreground hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-hero text-sm font-bold text-primary-foreground">
                      {moduleIndex + 1}
                    </span>
                    {module.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-center justify-between rounded-xl bg-background p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.free ? (
                            <PlayCircle className="h-5 w-5 text-accent" />
                          ) : (
                            <Lock className="h-5 w-5 text-muted-foreground" />
                          )}
                          <span className="text-foreground">{lesson.title}</span>
                          {lesson.free && (
                            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                              ফ্রি প্রিভিউ
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {lesson.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;
