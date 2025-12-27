import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";
import instructorImage from "@/assets/instructor.jpg";

const stats = [
  { icon: Clock, value: "১০+ বছর", label: "অভিজ্ঞতা" },
  { icon: Users, value: "২০০০+", label: "শিক্ষার্থী" },
  { icon: Award, value: "৫০+", label: "কোর্স সম্পন্ন" },
  { icon: Star, value: "4.9/5", label: "রেটিং" },
];

const InstructorSection = () => {
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
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            আপনার ইন্সট্রাক্টর
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            যার কাছ থেকে <span className="text-gradient-hero">শিখবেন</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-hero opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={instructorImage}
                  alt="শেফ রহমান"
                  className="aspect-square w-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 rounded-2xl bg-background p-4 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-bold text-foreground">সার্টিফাইড</p>
                    <p className="text-sm text-muted-foreground">মাস্টার শেফ</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground">মোঃ হাসনাত খান</h3>
                <p className="mt-1 text-lg text-primary">
                  সিনিয়র পিৎজা শেফ ও কালিনারি ইন্সট্রাক্টর
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                ১০ বছরেরও বেশি সময় ধরে পিৎজা মেকিং ও কালিনারি আর্টস-এ অভিজ্ঞতা। 
                দেশ-বিদেশের বিভিন্ন রেস্টুরেন্টে কাজ করে আমি শিখেছি কিভাবে পারফেক্ট 
                পিৎজা বানাতে হয়। আমার মিশন হলো বাংলাদেশের তরুণদের এই স্কিল শেখানো 
                যাতে তারা নিজেদের ক্যারিয়ার গড়তে পারে।
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                ইতালিতে প্রফেশনাল পিৎজা মেকিং কোর্স সম্পন্ন করেছি এবং বিভিন্ন 
                আন্তর্জাতিক কম্পিটিশনে অংশ নিয়েছি। আমার কোর্সে আমি সেই সব টেকনিক 
                শেয়ার করি যা আমি বছরের পর বছর প্র্যাক্টিস করে শিখেছি।
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-background p-4 text-center"
                  >
                    <stat.icon className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-2 text-xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;
