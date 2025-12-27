import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChefHat, Phone, Mail, MapPin, Facebook, Youtube, Instagram, MessageCircle } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.google.com/YOUR_FORM_URL";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container py-16"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-center md:p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-bold md:text-4xl">
              প্রফেশনাল পিৎজা শেফ হওয়ার সময় এখনই!
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              ৫০% ছাড়ে মাত্র ৳৮,২০০ টাকায় লাইফটাইম এক্সেস পান। সীমিত সময়ের অফার!
            </p>
            <div className="mt-8">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="xl"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <ChefHat className="mr-2" />
                  এখনই ভর্তি হন
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Content */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero">
                  <ChefHat className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Pizza</span>
              </div>
              <p className="text-primary-foreground/70">
                বাংলাদেশের সেরা অনলাইন পিৎজা মেকিং কোর্স। ঘরে বসেই শিখুন 
                প্রফেশনাল পিৎজা বানানোর আর্ট।
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold">দ্রুত লিংক</h3>
              <ul className="space-y-2 text-primary-foreground/70">
                <li>
                  <a href="#course-details" className="transition-colors hover:text-primary-foreground">
                    কোর্স বিবরণ
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="transition-colors hover:text-primary-foreground">
                    মূল্য
                  </a>
                </li>
                <li>
                  <a href="#enroll" className="transition-colors hover:text-primary-foreground">
                    ভর্তি প্রক্রিয়া
                  </a>
                </li>
                <li>
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-foreground">
                    এখনই ভর্তি হন
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 font-semibold">যোগাযোগ</h3>
              <ul className="space-y-3 text-primary-foreground/70">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+880123456789</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@pizza.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 text-primary" />
                  <span>ঢাকা, বাংলাদেশ</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-4 font-semibold">সোশ্যাল মিডিয়া</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/PHONE_NUMBER"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary"
                  target="_blank" rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-4 text-sm text-primary-foreground/50">
                নতুন আপডেট পেতে আমাদের ফলো করুন।
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="container text-center text-sm text-primary-foreground/50">
            <p>© ২০২৫ Pizza । সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="mt-1">www.pizza.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
