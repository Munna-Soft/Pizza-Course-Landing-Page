import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ChefHat, Clock, Zap } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.google.com/YOUR_FORM_URL";

const features = [
  "২৫+ HD ভিডিও লেকচার",
  "১৫+ এক্সক্লুসিভ রেসিপি",
  "লাইফটাইম এক্সেস",
  "ডাউনলোডেবল রেসিপি বুক",
  "সার্টিফিকেট অফ কমপ্লিশন",
  "প্রাইভেট ফেসবুক গ্রুপ এক্সেস",
  "২৪/৭ সাপোর্ট",
  "বিজনেস স্টার্টআপ গাইড",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-card py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive">
            <Zap className="h-4 w-4" />
            সীমিত সময়ের অফার
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            এখনই <span className="text-gradient-hero">৫০% ছাড়ে</span> ভর্তি হন
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            এই বিশেষ অফার সীমিত সময়ের জন্য। দ্রুত সিদ্ধান্ত নিন!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-lg"
        >
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-background shadow-2xl">
            {/* Discount Badge */}
            <div className="absolute -right-12 top-8 rotate-45 bg-destructive px-12 py-2 text-sm font-bold text-destructive-foreground">
              ৫০% ছাড়
            </div>

            {/* Header */}
            <div className="bg-gradient-hero p-8 text-center text-primary-foreground">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm">
                <Sparkles className="h-4 w-4" />
                সম্পূর্ণ কোর্স প্যাকেজ
              </div>
              <div className="mt-6">
                <p className="text-lg line-through opacity-70">৳১৬,৫০০</p>
                <div className="mt-2 flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-bold">৳৮,২০০</span>
                </div>
                <p className="mt-2 text-primary-foreground/80">
                  আপনার সঞ্চয়: <span className="font-bold">৳৮,৩০০</span>
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 space-y-4">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="price" size="xl" className="w-full">
                    <ChefHat className="mr-2" />
                    এখনই ভর্তি হন
                  </Button>
                </a>
                <p className="text-center text-sm text-muted-foreground">
                  <Clock className="mr-1 inline h-4 w-4" />
                  অফার শীঘ্রই শেষ হচ্ছে!
                </p>
              </div>

              {/* Trust */}
              <div className="mt-6 rounded-xl bg-muted/50 p-4 text-center text-sm text-muted-foreground">
                ✅ নিরাপদ পেমেন্ট • ✅ তাৎক্ষণিক এক্সেস • ✅ মানি ব্যাক গ্যারান্টি
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
