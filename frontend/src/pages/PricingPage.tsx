export function PricingPage() {
  return (
    <main className="min-h-screen w-full bg-secondary pt-16">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-['Roboto_Mono'] font-bold text-primary mb-4">Pricing</h1>
          <p className="text-lg text-slate-700 font-['Inter']">
            Whether you’re cloud curious or a Kubernetes captain, PodPilot has a plan for your journey. No credit card required to get started!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg px-8 py-10 flex flex-col items-center">
            <h2 className="font-bold text-2xl font-['Roboto_Mono'] text-primary mb-2">Starter</h2>
            <p className="text-3xl font-bold mb-2">Free</p>
            <ul className="list-disc text-slate-600 pl-5 mb-6 font-['Inter'] text-left">
              <li>Up to 2 clusters</li>
              <li>Basic monitoring</li>
              <li>Community support</li>
            </ul>
            <button id="pricing-starter" className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">Get Started</button>
          </div>
          <div className="bg-white rounded-xl shadow-lg px-8 py-10 flex flex-col items-center border-2 border-primary scale-105 relative z-10">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full font-bold shadow">Most Popular</span>
            <h2 className="font-bold text-2xl font-['Roboto_Mono'] text-primary mb-2">Pro</h2>
            <p className="text-3xl font-bold mb-2">$29<span className="text-base font-normal">/mo</span></p>
            <ul className="list-disc text-slate-600 pl-5 mb-6 font-['Inter'] text-left">
              <li>Unlimited clusters</li>
              <li>Advanced monitoring</li>
              <li>Email support</li>
              <li>Team collaboration</li>
            </ul>
            <button id="pricing-pro" className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">Start Pro Trial</button>
          </div>
          <div className="bg-white rounded-xl shadow-lg px-8 py-10 flex flex-col items-center">
            <h2 className="font-bold text-2xl font-['Roboto_Mono'] text-primary mb-2">Enterprise</h2>
            <p className="text-3xl font-bold mb-2">Contact Us</p>
            <ul className="list-disc text-slate-600 pl-5 mb-6 font-['Inter'] text-left">
              <li>Custom integrations</li>
              <li>Dedicated support</li>
              <li>SLAs & onboarding</li>
            </ul>
            <button id="pricing-enterprise" className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">Contact Sales</button>
          </div>
        </div>
      </div>
    </main>
  );
}
