import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const audiences = [
  {
    title: "বিগিনার ও হোম কুক",
    description: "যারা বাড়িতে পরিবারের জন্য সুস্বাদু পিৎজা বানাতে চান",
    icon: "🏠",
  },
  {
    title: "রেস্টুরেন্ট মালিক",
    description: "যারা নিজের রেস্টুরেন্টে প্রফেশনাল পিৎজা মেনু যোগ করতে চান",
    icon: "🍕",
  },
  {
    title: "উদ্যোক্তা",
    description: "যারা পিৎজা ব্যবসা শুরু করতে চান বা ফুড বিজনেসে আসতে চান",
    icon: "💼",
  },
  {
    title: "চাকরিপ্রার্থী",
    description: "যারা রেস্টুরেন্ট বা হোটেলে শেফ হিসেবে ক্যারিয়ার গড়তে চান",
    icon: "👨‍🍳",
  },
  {
    title: "ফুড এনথুসিয়াস্ট",
    description: "যারা রান্নার নতুন স্কিল শিখে নিজেকে আপডেট করতে চান",
    icon: "❤️",
  },
  {
    title: "প্যাশনেট লার্নার",
    description: "যারা ইতালিয়ান কুইজিনের আসল স্বাদ তৈরি করতে শিখতে চান",
    icon: "🎯",
  },
];

const WhoIsFor = () => {
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
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            কার জন্য এই কোর্স
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            আপনি কি এদের <span className="text-gradient-hero">একজন</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            যদি নিচের যেকোনো একটি আপনার সাথে মিলে যায়, এই কোর্স আপনার জন্যই!
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-card"
            >
              <div className="mb-4 text-4xl">{audience.icon}</div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {audience.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
