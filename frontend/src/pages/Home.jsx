import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, DollarSign, Building, MessageSquare, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import BSFLogo from '../assets/logo.jpeg'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BankSetuFinance = () => {
  console.log("bsf component run");

  const btnRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroTitleIndex, setHeroTitleIndex] = useState(0);
  const [heroTaglineIndex, setHeroTaglineIndex] = useState(0);

  const canvasRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroVisualRef = useRef(null);

  const heroTitles = [
    "आपके सपनों को सही बैंक से जोड़ने वाला भरोसेमंद साथी।",
    "सही बैंक, सही लोन, सही मार्गदर्शन — आपकी मंज़िल तक हमारा साथ।",
    "हम लोन नहीं देते, हम आपको सही बैंक से सही लोन दिलाने में मदद करते हैं।",
    "आपका सपना, हमारी कोशिश — भरोसेमंद बैंकों से आसान लोन।",
    "सही सलाह, सही बैंक, आसान लोन प्रक्रिया।",
    "भारत के भरोसेमंद बैंकों से लोन दिलाने का आपका विश्वसनीय साथी।",
    "घर, गाड़ी, बिज़नेस या शिक्षा — सही बैंक से सही लोन तक आपका सफर आसान बनाते हैं।",
    "लोन की तलाश खत्म, सही बैंक से शुरुआत।",
    "हर ज़रूरत के लिए सही बैंक, हर सपने के लिए सही लोन।"
  ];

  const heroTaglines = [
    "भरोसेमंद लोन सलाह • कई बैंक विकल्प",
    "आपकी जरूरत • सही बैंक • सही समाधान",
    "आसान लोन • बेहतर विकल्प • विशेषज्ञ सलाह",
    "आपके सपनों के लिए सही वित्तीय साथी",
    "घर से बिज़नेस तक • हर जरूरत का लोन",
    "कई बैंक विकल्प • आपकी प्रोफाइल के अनुसार",
    "सरल प्रक्रिया • स्पष्ट मार्गदर्शन",
    "आपकी प्रोफाइल • हमारी विशेषज्ञ सलाह",
    "लोन की तलाश अब आसान",
    "सही बैंक तक पहुंचने का आसान रास्ता"
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // gsap.fromTo(
  //   "#applyBtn",
  //   {
  //     boxShadow: "0 0 0px rgba(59,130,246,0.4)",
  //     backgroundColor: "#2563eb" // blue-600
  //   },
  //   {
  //     boxShadow: "0 0 20px rgba(59,130,246,0.9)",
  //     backgroundColor: "#3b82f6", // blue-500
  //     duration: 0.4,
  //     yoyo: true,
  //     repeat: 1,
  //     ease: "power2.out"
  //   }
  // );
  // gsap.fromTo('.heroSectiontext', {}, {});
  // useEffect(() => {
  //   // Setting up ScrollTrigger for .heroSectiontext animation
  //   if (window.ScrollTrigger) {
  //     gsap.to('.heroSectiontext', {
  //       scrollTrigger: {
  //         trigger: '.heroSectiontext',
  //         start: "top 0%",
  //         end: "bottom 30%",
  //         toggleActions: "play none none reverse",
  //       },
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.5,
  //       scale: 1,
  //       ease: "power2.out"
  //     });
  //   } else {
  //     // fallback if ScrollTrigger is not present
  //     gsap.to('.heroSectiontext', {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.5,
  //       scale: 1,
  //       ease: "power2.out"
  //     });
  //   }
  // }, [])
  // Subtle parallax: move hero layers independently instead of shrinking the complete hero.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroContentRef.current, {
        y: -55,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(heroVisualRef.current, {
        y: -90,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert();
  }, [])
  // useEffect(() => {
  //   gsap.to(".heroSectiontext", {
  //     duration: 3,
  //     scale: 0.4,
  //     scrollTrigger: {
  //       trigger: ".heroSectiontext",
  //       start: "top 20%",
  //       end: "top 10%",
  //       // scroller: 'body',
  //       //
  //       scrub: 1, // Fixed typo from "scub"
  //       toggleActions: "play reverse play reverse"
  //     }
  //   });
  // }, [])


  // Premium opening sequence: reveal the hero in reading order.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("#firmName", { y: -20, opacity: 0, duration: 0.6 })
        .from(".heroBadge", { y: 20, opacity: 0, scale: 0.95, duration: 0.5 }, "-=0.2")
        .from(".heroTitle", { y: 35, opacity: 0, duration: 0.65 }, "-=0.15")
        .from(".heroDescription", { y: 20, opacity: 0, duration: 0.55 }, "-=0.2")
        .from(".heroCta", { y: 18, opacity: 0, duration: 0.45, stagger: 0.1 }, "-=0.15")
        .from(".heroTrust", { y: 12, opacity: 0, duration: 0.4 }, "-=0.1")
        .from(".heroVisual", { x: 45, opacity: 0, duration: 0.8 }, "-=0.55");

      gsap.to("#applyBtn", {
        backgroundPosition: "200% center",
        duration: 3,
        repeat: -1,
        ease: "linear"
      });
    });

    return () => ctx.revert();
  }, [])
  // gsap.fromTo(
  //   btnRef.current,
  //   { scale: 1 },              // starting size
  //   {
  //     scale: 0.9,              // pressed size
  //     duration: 0.1,
  //     yoyo: true,              // go back
  //     repeat: 1,
  //     ease: "power1.out"
  //   }
  // );
  //   const handleTap = () => {
  // };
  // function TapButton() {
  // }
  // Rotate the small badge every 3.5s and the main title every 5.5s.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroTaglineIndex((index) => (index + 1) % heroTaglines.length);
    }, 3500);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroTitleIndex((index) => (index + 1) % heroTitles.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!heroTitleRef.current) return;

    gsap.fromTo(
      heroTitleRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
    );
  }, [heroTitleIndex]);

  useEffect(() => {
    gsap.fromTo('#firmName', {
      y: 20,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
    })
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.3)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.2 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loanTypes = [
    { icon: '🏠', title: 'Home Loan', desc: 'Make your dream home a reality with flexible options starting from 8.5% interest rate', color: '#003d82' },
    { icon: '🚗', title: 'Vehicle Loan', desc: 'Drive your dream car or bike today with easy EMI and quick approval', color: '#0066cc' },
    { icon: '💼', title: 'Business Loan', desc: 'Grow your business with tailored solutions up to ₹50 lakhs', color: '#003d82' },
    { icon: '💳', title: 'Personal Loan', desc: 'Meet all your personal needs with instant loans up to ₹25 lakhs', color: '#0066cc' },
    { icon: '🎓', title: 'Education Loan', desc: 'Invest in your future covering tuition, living expenses, and more', color: '#003d82' },
    { icon: '🏢', title: 'Property Loan', desc: 'Unlock property value with loans at attractive rates', color: '#0066cc' }
  ];

  const banks = [
    { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg' },
    { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg' },
    { name: 'SBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg' },
    { name: 'Axis Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Axis_Bank_logo.svg' },
    { name: 'Kotak Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/en/4/41/Kotak_Mahindra_Bank_logo.svg' },
    { name: 'Bank of Baroda', logo: 'https://upload.wikimedia.org/wikipedia/en/4/44/Bank_of_Baroda_logo.svg' }
  ];

  const InquiryModal = () => {
    const [data, setData] = useState({
      name: '', email: '', phone: '', loanType: '', amount: '', message: ''
    });

    const handleSubmit = () => {
      if (!data.name || !data.email || !data.phone || !data.loanType) {
        alert('Please fill all required fields');
        return;
      }
      alert('Thank you! Our team will contact you within 24 hours.');
      setShowInquiryModal(false);
      setData({ name: '', email: '', phone: '', loanType: '', amount: '', message: '' });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowInquiryModal(false)}>
        <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900">Loan Inquiry</h2>
            <button onClick={() => setShowInquiryModal(false)} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input type="text" className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input type="tel" className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type *</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none" value={data.loanType} onChange={(e) => setData({ ...data, loanType: e.target.value })}>
                <option value="">Select Type</option>
                <option value="home">Home Loan</option>
                <option value="vehicle">Vehicle Loan</option>
                <option value="business">Business Loan</option>
                <option value="personal">Personal Loan</option>
                <option value="education">Education Loan</option>
                <option value="property">Property Loan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
              <input type="number" className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none" value={data.amount} onChange={(e) => setData({ ...data, amount: e.target.value })} placeholder="500000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
              <textarea className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none" rows="3" value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} placeholder="Tell us more..."></textarea>
            </div>
            <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">Submit Inquiry</button>
          </div>
        </div>
      </div>
    );
  };

  const FeedbackModal = () => {
    const [data, setData] = useState({
      name: '', email: '', rating: '', message: ''
    });

    const handleSubmit = () => {
      if (!data.name || !data.email || !data.rating || !data.message) {
        alert('Please fill all required fields');
        return;
      }
      alert('Thank you for your valuable feedback!');
      setShowFeedbackModal(false);
      setData({ name: '', email: '', rating: '', message: '' });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowFeedbackModal(false)}>
        <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900">Your Feedback</h2>
            <button onClick={() => setShowFeedbackModal(false)} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input type="text" className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none border-blue-500" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating *</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none" value={data.rating} onChange={(e) => setData({ ...data, rating: e.target.value })}>
                <option value="">Rate Us</option>
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Very Good</option>
                <option value="3">⭐⭐⭐ Good</option>
                <option value="2">⭐⭐ Fair</option>
                <option value="1">⭐ Poor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Feedback *</label>
              <textarea className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none" rows="4" value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} placeholder="Share your experience..."></textarea>
            </div>
            <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">Submit Feedback</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed w-full top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-[#0A2342]/95 backdrop-blur-xl shadow-xl border-b border-white/10' : 'bg-[#0A2342]/45 backdrop-blur-md border-b border-white/10'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id='firmName' className="flex justify-between items-center h-20">

            <div className=' flex items-center gap-x-5 flex-nowrap relative'>
              <div className='pt-2'>
                <img src={BSFLogo} className='w-8 h-8 sm:w-12 sm:h-12 rounded-full' alt="" />
              </div>
              <div className="absolute whitespace-nowrap text-lg sm:text-4xl ml-10 sm:ml-15 font-bold text-white">
                <span className="text-yellow-500">BANK</span> SETU FINANCE
              </div>
            </div>

            <ul className="hidden md:flex space-x-8">
              {['Home', 'Loans', 'Banks', 'Apply', 'Feedback'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-medium text-white/90 hover:text-yellow-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="text-white" size={28} /> : <Menu className="text-white" size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <ul className="py-4 space-y-2">
                {['Home', 'Loans', 'Banks', 'Apply', 'Feedback'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0A2342]">
        <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-br from-[#0A2342] via-blue-900 to-[#123866]" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute top-1/4 right-[12%] hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl text-yellow-300 backdrop-blur-md rotate-6">🏠</div>
          <div className="absolute bottom-1/4 right-[26%] hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl text-yellow-300 backdrop-blur-md -rotate-6">🚗</div>
          <div className="absolute top-[22%] right-[30%] hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl text-yellow-300 backdrop-blur-md rotate-3">🎓</div>
          <div className="absolute bottom-[18%] right-[8%] hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl text-yellow-300 backdrop-blur-md -rotate-3">🏢</div>
        </div>

        <div ref={heroContentRef} className="heroSectiontext relative z-10 w-full max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-left max-w-2xl">
            <div className="heroBadge inline-flex items-center gap-2 rounded-full border border-yellow-300/25 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur-md overflow-hidden">
              <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400 animate-pulse" />
              <span key={heroTaglineIndex}>{heroTaglines[heroTaglineIndex]}</span>
            </div>

            <h1
              ref={heroTitleRef}
              className="heroTitle mt-6 min-h-[170px] sm:min-h-[145px] lg:min-h-[155px] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white"
            >
              {heroTitles[heroTitleIndex]}
            </h1>

            <p className="heroDescription mt-5 max-w-xl text-base sm:text-lg leading-7 text-blue-100/90">
              घर, कार, बिज़नेस, एजुकेशन या पर्सनल लोन—हम आपकी प्रोफाइल के अनुसार सही बैंक चुनने में मदद करते हैं ताकि आपको बेहतर ब्याज दर, तेज़ प्रोसेसिंग और आसान अप्रूवल मिल सके।
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowInquiryModal(true)}
                className="heroCta group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-3.5 text-sm sm:text-base font-bold text-blue-950 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-xl cursor-pointer"
              >
                📞 अभी निःशुल्क सलाह लें
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              <a
                href="#apply"
                className="heroCta inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:border-yellow-300/40"
              >
                📋 अपनी पात्रता जांचें
              </a>
            </div>

            <div className="heroTrust mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100/80">
              <span>✔ कोई छिपा शुल्क नहीं</span>
              <span>✔ अनेक बैंक विकल्प</span>
              <span>✔ विशेषज्ञ लोन सलाह</span>
            </div>
          </div>

          <div ref={heroVisualRef} className="heroVisual relative hidden lg:block min-h-[430px]">
            <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm" />

            <div className="absolute left-10 top-10 w-44 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl shadow-xl -rotate-3">
              <div className="text-xs uppercase tracking-wider text-blue-200">Better Match</div>
              <div className="mt-2 text-2xl font-bold text-white">12+ Banks</div>
              <div className="mt-1 text-xs text-blue-100/70">Compare your options</div>
            </div>

            <div className="absolute right-4 top-1/2 w-64 -translate-y-1/2 rounded-[2rem] border border-yellow-300/25 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-yellow-300/25 bg-gradient-to-br from-yellow-300/20 to-white/5 text-7xl">
                🏡
              </div>
              <div className="mt-5 text-center">
                <div className="text-lg font-semibold text-white">Your dream. Your loan.</div>
                <div className="mt-1 text-sm text-blue-100/70">Guidance from enquiry to approval</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-14 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl shadow-xl rotate-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-yellow-400/15 flex items-center justify-center text-xl">₹</div>
                <div>
                  <div className="text-xs text-blue-100/70">Simple process</div>
                  <div className="font-semibold text-white">Fast & guided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="loans" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">Our Loan Services</h2>
          <p className="text-center text-gray-600 mb-12">Tailored financial solutions for every need</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanTypes.map((loan, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4" style={{ borderTopColor: loan.color }}>
                <div className="text-5xl mb-4">{loan.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: loan.color }}>{loan.title}</h3>
                <p className="text-gray-600">{loan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="banks" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">Our Partner Banks</h2>
          <p className="text-center text-gray-600 mb-12">Trusted relationships with India's leading financial institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {banks.map((bank, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center min-h-24">
                <img src={bank.logo} alt={bank.name} className="h-12 object-contain" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }} />
                <span className="hidden font-bold text-blue-900 text-sm text-center">{bank.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied customers who trusted us with their financial needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowInquiryModal(true)} className="bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-all hover:shadow-xl">
              Apply Now
            </button>
            <button onClick={() => setShowFeedbackModal(true)} className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-xl">
              Share Feedback
            </button>
          </div>
        </div>
      </section>

      <footer id="feedback" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-yellow-500 font-bold text-xl mb-4">BANK SETU FINANCE</h3>
            <p className="text-gray-400">Your trusted partner in finding the perfect loan solution</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#loans" className="hover:text-yellow-500">Loan Types</a></li>
              <li><a href="#banks" className="hover:text-yellow-500">Partner Banks</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><div className='min:w- min:h-4'>  <Mail size={16} /> </div> info@banksetufinance.com</li>
              <li className="flex items-center gap-2"><div className='min:w- min:h-4'>  <Phone size={16} /> </div> +91 9926365660,</li>
              <li className="flex items-center gap-2"><div className='min:w- min:h-4'>  <Phone size={16} /> </div> +91 7909383572</li>
              <li className="flex items-center gap-2"><div className='min:w- min:h-4'>  <MapPin size={16} /> </div> 5, LG-48A, Orbit Mall, AB Road, Indore, Madhya Pradesh India 452001</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mon-Fri: 9 AM - 6 PM</li>
              <li>Saturday: 10 AM - 4 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2026 Bank Setu Finance. All rights reserved.</p>
        </div>
      </footer>

      {showInquiryModal && <InquiryModal />}
      {showFeedbackModal && <FeedbackModal />}
    </div>
  );
};
export default BankSetuFinance;


// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import Stats from "../components/Stats";
// import Features from "../components/Features";
// import LoanTypes from "../components/LoanTypes";
// import BankPartners from "../components/BankPartners";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import FloatingButtons from "../components/FloatingButtons";

// const Home = () => {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <Stats />
//       <Features />
//       <LoanTypes />
//       <BankPartners />
//       <Contact />
//       <Footer />
//       <FloatingButtons />
//     </>
//   );
// };

// export default Home;

