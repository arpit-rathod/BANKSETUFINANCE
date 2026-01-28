import { ArrowRight } from "lucide-react";
import HeroBackground from "../three/HeroBackground";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 bg-blue-900 text-white overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Your Dream Loan <br />
            <span className="text-amber-400">Simplified & Secured</span>
          </h1>

          <p className="text-blue-200 mt-6 text-xl">
            Trusted loan partner with RBI compliant processes & top Indian banks.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-amber-500 px-8 py-4 rounded-full font-bold flex items-center gap-2">
              Check Eligibility <ArrowRight />
            </button>
          </div>

          <div className="flex gap-6 text-sm text-blue-200 mt-6">
            <span>✔ RBI Compliant</span>
            <span>✔ SSL Secured</span>
            <span>✔ ISO Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;