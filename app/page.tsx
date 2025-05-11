"use client";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

// ====== MANUAL IMAGE IMPORTS ======
import driverImage1 from "../public/driver.jpg";
import driverImage2 from "../public/dereva.jpg";
import motto from "../public/5.png";
import phones from "../public/6.png";
import moving from "../public/young-couple.jpg";
import trucks from "../public/lorries.png";
import delivery from "../public/delivery.jpg";
import fastLorry from "../public/swyft-pickup.png";
import excited from "../public/thrilled.jpg";
import swyft from "../public/swyft-logo.png";
import loading from "../public/loading.png";
import barakLogo from "../public/BARAK LABS.png";
import barakLogoWord from "../public/Barak LOGO.png";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Swyft?",
      answer:
        "Swyft is a logistics platform that helps you move anything, anywhere with fast, reliable bulk transport across the country. We specialize in making moving bulky items, parcels, and relocations simple and efficient.",
    },
    {
      question: "How does it work?",
      answer:
        "Simply download our app, enter your pickup and delivery locations, select the type of item you're moving, and get an instant quote. Once you confirm, our drivers will pick up your items and deliver them to the destination with real-time tracking throughout the journey.",
    },
    {
      question: "What can I ship?",
      answer:
        "You can ship almost anything from bulky furniture and appliances to parcels and packages. We also offer specialized services for home relocations. If you're unsure about a specific item, please contact our support team.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full py-8 px-4 text-center">
        <div className="mb-4">
          <Image src={swyft} alt="Swyft Logo" className="w-auto h-12 mb-10 mt-5" />
        </div>
      <p className="text-lg md:text-xl text-gray-600 max-w-md mb-6 font-[Montserrat] font-bold">
  Move <span className="text-green-500">Anything</span>, <span className="text-green-500">Anywhere</span> — <span className="text-500">Fast</span>, Reliable Bulk Transport Across The Country.
</p>
            <a
              href="https://move.swyft.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] text-white py-2 px-6 rounded-md hover:bg-black transition-colors w-full max-w-xs mb-10"
            >
              Move Now
            </a>
        <div className="w-full max-w-md mb-16">
          <Image src={trucks} alt="Made to Move" className="w-5/5 h-auto" />
          
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 ">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">See How Easy It Is to Move with Swyft</h2>
            <p className="text-gray-600 mb-6">
              Discover how the Swyft app revolutionizes bulky item, parcel, and moving logistics. Our intuitive
              interface puts you in control, from instant quotes to real-time tracking.
            </p>
          <a
            href="https://move.swyft.africa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] text-white py-2 px-6 rounded-md hover:bg-black transition-colors"
          >
            Get Started
          </a>
          </div>
          <div className="md:w-1/2">
            <Image src={phones} alt="App Preview" className="w-4/5 h-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            What you can do with <span className="text-green-500">swyft</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
  <div className="h-48 bg-gray-100">
    <Image src={loading} alt="loading" className="w-auto h-30" />
  </div>
  <div className="p-6">
    <h3 className="text-lg font-semibold mb-2">Move Anything, Anytime</h3>
<p className="text-gray-600 text-sm">
  From bulky deliveries to large orders, Swyft connects you with the right vehicle and tools to move smarter — fast, safe, and on your terms.
</p>

  </div>
</div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="w-full h-48 overflow-hidden">
                <Image
                  src={delivery}
                  alt="Send & Receive Parcels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
               <h3 className="text-lg font-semibold mb-2">Your Parcels, Delivered Smarter</h3>
<p className="text-gray-600 text-sm">
  Whether it's a one-time drop or regular deliveries, Swyft gets your parcels where they need to be — reliably, quickly, and with full tracking every step of the way.
</p>

              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="w-full h-48 overflow-hidden">
                <Image
                  src={moving}
                  alt="Move From One House to Another"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2">Stress-Free Home Moves</h3>
<p className="text-gray-600 text-sm">
  From packing to final drop-off, Swyft helps you relocate without the chaos — with trusted drivers, secure handling, and clear communication from start to finish.
</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
    <section className="w-full bg-gray-50">
  <div className="py-10 px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">
      Why <span className="text-green-500">swyft?</span>
    </h2>

    {/* Fast */}
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <Image src={fastLorry} alt="Swyft Lorry Moving Fast" className="w-80% h-auto" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-3">Fast</h2>
        <p className="text-gray-600 text-lg">
          From request to delivery, Swyft keeps things moving. Whether you're relocating, delivering goods, or sending parcels — we get it done faster than you thought possible.
        </p>
      </div>
    </div>
  </div>

  {/* Easy */}
  <div className="py-10 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
      <div className="md:w-1/2">
        <Image src={excited} alt="Happy Swyft User" className="w-80% h-auto" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-3">Effortless</h2>
        <p className="text-gray-600 text-lg">
          No complicated steps. Just book and go — the Swyft experience is as easy as ordering a cab. We handle the heavy stuff, so you can focus on what matters.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Become a Driver Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Driver</h2>
          <p className="text-gray-600 mb-6">
            Join our team of drivers and earn on your own schedule. Flexible hours, competitive pay, and
            a supportive community await.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <Image src={driverImage1} alt="Driver example" className="w-40 h-40 object-cover rounded-lg" />
            <Image src={driverImage2} alt="Driver example" className="w-40 h-40 object-cover rounded-lg" />
          </div>
          <a
  href="https://driver.swyft.africa/signup"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#1a1a1a] text-white py-2 px-6 rounded-md hover:bg-black transition-colors"
>
  Apply Now
</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left py-2"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="mt-2 text-gray-600 text-base pr-8 animate-accordion-down">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Based Labs Section */}
      <section className="w-full py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center">
            <Image src={barakLogoWord} alt="Made to Move" className="w-20 h-auto" />
            <Image src={barakLogo} alt="Made to Move" className="w-40 h-auto" />
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="w-full py-12 px-4 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Sign up today.</h2>
          <a
            href="https://driver.swyft.africa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] text-white py-2 px-6 rounded-md hover:bg-black transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-xs">© Barak Labs LTD, 2025</p>
          <div className="flex gap-4">
            <a href="tel:0796652112" className="text-xs text-blue-400">
  Phone
</a>
            <a href="https://www.instagram.com/_.swyft._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-xs text-blue-400">
              Instagram
            </a>
           <a href="mailto:support@swyft.africa" className="text-xs text-blue-400">
  Email
</a>
          </div>
        </div>
      </footer>
    </main>
  );
}