import { motion } from "framer-motion";
import { BookOpen, Video, Award, MessageCircle, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "HD ভিডিও লেকচার",
    description: "প্রফেশনাল কোয়ালিটি ভিডিও টিউটোরিয়াল যা আপনি বারবার দেখতে পারবেন",
  },
  {
    icon: BookOpen,
    title: "স্টেপ-বাই-স্টেপ গাইড",
    description: "সহজ ভাষায় লেখা ডিটেইল গাইড ও রেসিপি বুক",
  },
  {
    icon: Award,
    title: "সার্টিফিকেট",
    description: "কোর্স শেষে অফিসিয়াল সার্টিফিকেট পাবেন",
  },
  {
    icon: MessageCircle,
    title: "২৪/৭ সাপোর্ট",
    description: "যেকোনো সমস্যায় আমাদের টিম থেকে সাহায্য পাবেন",
  },
  {
    icon: Clock,
    title: "লাইফটাইম এক্সেস",
    description: "একবার ভর্তি হলে আজীবন কন্টেন্ট দেখতে পারবেন",
  },
  {
    icon: Globe,
    title: "বাংলা ভাষায়",
    description: "সম্পূর্ণ বাংলায় ক্লাস, সহজে বুঝতে পারবেন",
  },
];

const CourseOverview = () => {
  return (
    <section id="course-details" className="bg-background py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            কোর্স বিবরণ
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            এই কোর্সে কী কী <span className="text-gradient-hero">পাবেন</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            পেশাদার পিৎজা শেফ হওয়ার জন্য প্রয়োজনীয় সবকিছু এক জায়গায়
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex rounded-xl bg-gradient-hero p-3 text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Hover Effect */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>

        {/* Course Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-hero p-8 text-primary-foreground md:p-12"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "২৫+", label: "ভিডিও লেকচার" },
              { value: "১৫+", label: "রেসিপি" },
              { value: "১০+", label: "ঘণ্টা কন্টেন্ট" },
              { value: "১০০%", label: "প্র্যাক্টিক্যাল" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOverview;
