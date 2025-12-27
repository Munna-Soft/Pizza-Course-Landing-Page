import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "রাফি আহমেদ",
    role: "রেস্টুরেন্ট মালিক, ঢাকা",
    content:
      "এই কোর্স করার পর আমার রেস্টুরেন্টে পিৎজা সেল ৩ গুণ বেড়ে গেছে। শেফ রহমানের শেখানো টেকনিক সত্যিই অসাধারণ!",
    rating: 5,
    avatar: "রা",
  },
  {
    name: "সাবরিনা ইসলাম",
    role: "হোম বেকার, চট্টগ্রাম",
    content:
      "বাড়িতে বসে প্রফেশনাল লেভেলের পিৎজা বানাতে পারছি এখন। পরিবার ও বন্ধুরা সবাই অবাক! অনেক ধন্যবাদ।",
    rating: 5,
    avatar: "সা",
  },
  {
    name: "মাহমুদ হাসান",
    role: "ফুড ব্লগার, সিলেট",
    content:
      "ভিডিও কোয়ালিটি চমৎকার এবং প্রতিটি স্টেপ খুব সুন্দরভাবে বোঝানো হয়েছে। বাংলায় এত ডিটেইল কোর্স আগে পাইনি।",
    rating: 5,
    avatar: "মা",
  },
  {
    name: "তানজিম করিম",
    role: "উদ্যোক্তা, রাজশাহী",
    content:
      "কোর্সের বিজনেস টিপস সেকশন আমার অনেক কাজে লাগছে। নিজের পিৎজা বিজনেস শুরু করেছি এই কোর্স থেকে অনুপ্রেরণা পেয়ে!",
    rating: 5,
    avatar: "তা",
  },
  {
    name: "নিশাত জাহান",
    role: "গৃহিণী, খুলনা",
    content:
      "বাচ্চারা এখন বাইরের পিৎজা চায় না, মায়ের হাতের পিৎজাই তাদের ফেভারিট! সহজ ভাষায় সব শেখানো হয়েছে।",
    rating: 5,
    avatar: "নি",
  },
  {
    name: "আরিফ হোসেন",
    role: "শেফ ট্রেইনি, ঢাকা",
    content:
      "হোটেলে চাকরির জন্য এই কোর্স অনেক হেল্প করেছে। ইন্টারভিউতে আমার স্কিল দেখে তারা ইম্প্রেসড হয়েছিল!",
    rating: 5,
    avatar: "আ",
  },
];

const TestimonialsSection = () => {
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
          <span className="inline-block rounded-full bg-pizza-gold/20 px-4 py-1.5 text-sm font-medium text-pizza-brown">
            শিক্ষার্থীদের মতামত
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            তারা কী <span className="text-gradient-hero">বলছেন</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            আমাদের শিক্ষার্থীদের সফলতার গল্প
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card"
            >
              <Quote className="absolute -right-2 -top-2 h-16 w-16 text-primary/5" />
              
              {/* Rating */}
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-pizza-gold text-pizza-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-muted-foreground">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero text-lg font-bold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
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

export default TestimonialsSection;
