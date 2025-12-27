import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Building2, Copy, CheckCircle2, ChefHat } from "lucide-react";
import { toast } from "sonner";

const GOOGLE_FORM_URL = "https://forms.google.com/YOUR_FORM_URL";
const PAYMENT_NUMBER = "0123456789";

const paymentMethods = [
  { name: "bKash", icon: "💳", color: "bg-pink-100 text-pink-600" },
  { name: "Nagad", icon: "💰", color: "bg-orange-100 text-orange-600" },
  { name: "Rocket", icon: "🚀", color: "bg-purple-100 text-purple-600" },
  { name: "Bank Transfer", icon: "🏦", color: "bg-blue-100 text-blue-600" },
];

const steps = [
  {
    number: "১",
    title: "পেমেন্ট করুন",
    description: "নিচের যেকোনো মাধ্যমে Send Money করুন",
  },
  {
    number: "২",
    title: "ফর্ম ফিলাপ করুন",
    description: "'এখনই ভর্তি হন' বাটনে ক্লিক করে ফর্ম পূরণ করুন",
  },
  {
    number: "৩",
    title: "ট্রানজেকশন আইডি দিন",
    description: "পেমেন্টের ট্রানজেকশন আইডি ফর্মে সাবমিট করুন",
  },
  {
    number: "৪",
    title: "এক্সেস পান",
    description: "ভেরিফাই হলে ইমেইলে কোর্স এক্সেস পাবেন",
  },
];

const PaymentSection = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(PAYMENT_NUMBER);
    toast.success("নম্বর কপি হয়েছে!");
  };

  return (
    <section id="enroll" className="bg-background py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            ভর্তি প্রক্রিয়া
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            কিভাবে <span className="text-gradient-hero">ভর্তি</span> হবেন?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            মাত্র ৪টি সহজ ধাপে আপনার কোর্সে এক্সেস পান
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl border border-border/50 bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero text-xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-muted-foreground lg:block">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="rounded-3xl border border-border/50 bg-card p-8">
            <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
              <Smartphone className="mr-2 inline h-6 w-6 text-primary" />
              পেমেন্ট মাধ্যম
            </h3>

            {/* Payment Number */}
            <div className="mb-6 rounded-2xl bg-gradient-hero p-6 text-center text-primary-foreground">
              <p className="mb-2 text-sm opacity-80">MFS Account Number</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl font-bold md:text-3xl">
                  {PAYMENT_NUMBER}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="rounded-full bg-primary-foreground/20 p-2 transition-colors hover:bg-primary-foreground/30"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Methods Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className={`rounded-xl ${method.color} p-4 text-center`}
                >
                  <span className="text-2xl">{method.icon}</span>
                  <p className="mt-1 font-medium">{method.name}</p>
                </div>
              ))}
            </div>

            {/* Bank Details */}
            <div className="mt-6 rounded-xl bg-muted/50 p-4">
              <div className="flex items-start gap-3">
                <Building2 className="mt-1 h-5 w-5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">ব্যাংক ট্রান্সফার:</p>

                    <p>Bank Name 		: </p>
                    <p>Account Name 	: </p>
                    <p>Account Number 	: </p>
					<p>Branch Name 		: </p>
					<p>Swift Code 		: </p>
					<p>Routing Number 	: </p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-6 rounded-xl border-2 border-destructive/20 bg-destructive/5 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-destructive" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">গুরুত্বপূর্ণ নোটিশ:</p>
                  <p className="text-muted-foreground">
                    পেমেন্ট করার পর অবশ্যই ট্রানজেকশন আইডি সংরক্ষণ করুন এবং 
                    গুগল ফর্মে সাবমিট করুন। ট্রানজেকশন আইডি ছাড়া ভর্তি কনফার্ম হবে না।
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="hero" size="xl" className="w-full">
                  <ChefHat className="mr-2" />
                  এখনই ভর্তি হন (গুগল ফর্ম)
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
