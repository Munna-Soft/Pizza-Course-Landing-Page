import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChefHat, Star, Users, Clock } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";

const GOOGLE_FORM_URL = "https://forms.google.com/YOUR_FORM_URL";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-warm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 flex min-h-screen items-center py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary"
            >
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">বাংলাদেশের সেরা পিৎজা কোর্স</span>
            </motion.div>

            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              পেশাদার{" "}
              <span className="text-gradient-hero">পিৎজা</span> বানানো শিখুন
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground md:text-xl">
              ঘরে বসেই শিখুন রেস্টুরেন্ট কোয়ালিটি পিৎজা তৈরির আধুনিক কৌশল। 
              বিগিনার থেকে প্রফেশনাল - সম্পূর্ণ হাতে-কলমে প্রশিক্ষণ।
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-accent/10 p-2">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">২০০০+</p>
                  <p className="text-sm text-muted-foreground">শিক্ষার্থী</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <ChefHat className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">১৫+</p>
                  <p className="text-sm text-muted-foreground">রেসিপি</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-pizza-gold/20 p-2">
                  <Clock className="h-5 w-5 text-pizza-gold" />
                </div>
                <div>
                  <p className="font-bold text-foreground">লাইফটাইম</p>
                  <p className="text-sm text-muted-foreground">এক্সেস</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  <ChefHat className="mr-2" />
                  এখনই ভর্তি হন
                </Button>
              </a>
              <a href="#course-details">
                <Button variant="outline" size="lg">
                  কোর্স সম্পর্কে জানুন
                </Button>
              </a>
            </motion.div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-hero"
                  />
                ))}
              </div>
              <span>১০০+ শিক্ষার্থী এই মাসে ভর্তি হয়েছেন</span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-hero opacity-20 blur-3xl" />
              
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroPizza}
                  alt="সুস্বাদু পিৎজা"
                  className="aspect-square w-full object-cover lg:aspect-[4/3]"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>

              {/* Floating Card - Discount */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -right-4 top-8 rounded-2xl bg-card p-4 shadow-card md:-right-8"
              >
                <div className="text-center">
                  <p className="text-sm text-muted-foreground line-through">৳১৬,৫০০</p>
                  <p className="text-2xl font-bold text-primary">৳৮,২০০</p>
                  <div className="mt-1 rounded-full bg-destructive/10 px-3 py-1 text-sm font-semibold text-destructive">
                    ৫০% ছাড়
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Rating */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-4 bottom-8 rounded-2xl bg-card p-4 shadow-card md:-left-8"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-pizza-gold text-pizza-gold" />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">4.9/5</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">২০০+ রিভিউ</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">নিচে স্ক্রল করুন</span>
          <div className="h-6 w-4 rounded-full border-2 border-muted-foreground/50 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
