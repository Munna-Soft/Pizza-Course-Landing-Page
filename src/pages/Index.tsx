import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CourseOverview from "@/components/CourseOverview";
import WhoIsFor from "@/components/WhoIsFor";
import Curriculum from "@/components/Curriculum";
import PricingSection from "@/components/PricingSection";
import PaymentSection from "@/components/PaymentSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>পেশাদার পিৎজা বানানো শিখুন | Pizza - বাংলাদেশের সেরা অনলাইন কোর্স</title>
        <meta
          name="description"
          content="ঘরে বসেই শিখুন রেস্টুরেন্ট কোয়ালিটি পিৎজা তৈরির আধুনিক কৌশল। ৫০% ছাড়ে মাত্র ৳৮,২০০ টাকায়। ২৫+ ভিডিও লেকচার, ১৫+ রেসিপি, লাইফটাইম এক্সেস।"
        />
        <meta
          name="keywords"
          content="পিৎজা কোর্স বাংলাদেশ, pizza making course, পিৎজা বানানো শিখুন, অনলাইন কুকিং কোর্স, pizza recipe bangla"
        />
        <meta property="og:title" content="পেশাদার পিৎজা বানানো শিখুন | Pizza" />
        <meta
          property="og:description"
          content="৫০% ছাড়ে মাত্র ৳৮,২০০ টাকায় প্রফেশনাল পিৎজা মেকিং কোর্স। এখনই ভর্তি হন!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pizza.com" />
        <link rel="canonical" href="https://www.pizza.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "পেশাদার পিৎজা বানানো কোর্স",
            "description": "ঘরে বসেই শিখুন রেস্টুরেন্ট কোয়ালিটি পিৎজা তৈরির আধুনিক কৌশল",
            "provider": {
              "@type": "Organization",
              "name": "Pizza",
              "url": "https://www.pizza.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "8200",
              "priceCurrency": "BDT",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <CourseOverview />
          <WhoIsFor />
          <Curriculum />
          <InstructorSection />
          <PricingSection />
          <PaymentSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
