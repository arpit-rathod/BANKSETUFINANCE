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

  const canvasRef = useRef(null);

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
  useEffect(() => {
    gsap.to(".heroSectiontext", {
      x: -100,
      yPercent: 5,
      duration: 4,
      scale: 0.6,
      ease: "power2.in",
      scrollTrigger: {
        // scale: 0.4,
        trigger: ".heroSectiontext",
        start: "top 30%",
        end: "top 0%",
        scroller: 'body',
        markers: true,
        scrub: 1, // Fixed typo from "scub"
        toggleActions: "play none none reverse",
        // pin: true,  // ✅ Keeps element pinned after reaching end
      }
    });
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
  //       // markers: true,
  //       scrub: 1, // Fixed typo from "scub"
  //       toggleActions: "play reverse play reverse"
  //     }
  //   });
  // }, [])


  useEffect(() => {

    gsap.fromTo('.heroSectiontext', {
      // backgroundPosition: "200% center",
      scale: 0.5,
      opacity: 0.5,
      repeat: 0,
      y: 100              // infinite loop (अनंत दोहराव)
      // ease: "linear"            // constant speed (समान गति)
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      y: 0,              // infinite loop (अनंत दोहराव)
    });
    gsap.to('#applyBtn', {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,               // infinite loop (अनंत दोहराव)
      ease: "linear"            // constant speed (समान गति)
    });
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
      <header className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-blue-900 to-blue-600'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id='firmName' className="flex justify-between items-center h-20">

            <div className=' flex items-center gap-x-5 flex-nowrap relative'>
              <div className='pt-2'>
                <img src={BSFLogo} className='w-8 h-8 sm:w-12 sm:h-12 rounded-full' alt="" />
              </div>
              <div className={`absolute whitespace-nowrap text-lg sm:text-4xl ml-10 sm:ml-15 font-bold  ${scrolled ? 'text-blue-900' : 'text-white'}`}>
                <span className="text-yellow-500">BANK</span> SETU FINANCE
              </div>
            </div>

            <ul className="hidden md:flex space-x-8">
              {['Home', 'Loans', 'Banks', 'Apply', 'Feedback'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-300'}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className={scrolled ? 'text-gray-700' : 'text-white'} size={28} /> : <Menu className={scrolled ? 'text-gray-700' : 'text-white'} size={28} />}
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

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500" />
        <div className="heroSectiontext relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Your Dream Loan, <span className="text-yellow-400">Simplified</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Get instant loan approvals from top banks with competitive interest rates
          </p>
          <button style={{
            background:
              "linear-gradient(110deg, #1e40af, #60a5fa, #1e40af)",
            backgroundSize: "200% 100%"
          }} ref={btnRef} onClick={() => setShowInquiryModal(true)} id='applyBtn' className="applyBtn bg-gradient-to-r cursor-pointer from-yellow-500 to-yellow-600 text-yellow-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
            Apply for Loan Now
          </button>
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

