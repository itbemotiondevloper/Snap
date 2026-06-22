import { CommunitySection } from "@/components/CommunitySection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";
import { FounderNoteSection } from "@/components/FounderNoteSection";
import { HeroSection } from "@/components/HeroSection";
import { LogoStripSection } from "@/components/LogoStripSection";
import { MarketingSection } from "@/components/MarketingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3efe3] text-[#191919] transition-colors duration-500 dark:bg-[#0f1115] dark:text-[#f5efe3]">
      <ThemeToggle />
      <HeroSection />
      <CommunitySection />
      <ProcessSection />
      <LogoStripSection />
      <MarketingSection />
      <FounderNoteSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
