import { Hero } from '@/components/Hero';

export function HomePage() {
  return (
    <main className="min-h-screen w-full bg-secondary">
      <Hero />
      {/* More homepage sections would go here */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-['Roboto_Mono'] font-bold mb-4 text-primary">Why PodPilot?</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-700 font-['Inter']">
            From zero to production hero, PodPilot empowers you to streamline and scale your Kubernetes infrastructure with a modern, intuitive dashboard. Join teams who trust us to simplify their cloud-native journey!
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="bg-white rounded-xl shadow-lg flex-1 px-8 py-8 flex flex-col items-center gap-4">
            <span className="text-primary text-4xl">🚀</span>
            <h3 className="font-bold text-xl font-['Roboto_Mono']">Instant Deploys</h3>
            <p className="text-slate-600 text-center font-['Inter']">Get your workloads running in seconds. Our automation takes care of the heavy lifting—so you can focus on innovation.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg flex-1 px-8 py-8 flex flex-col items-center gap-4">
            <span className="text-primary text-4xl">🔒</span>
            <h3 className="font-bold text-xl font-['Roboto_Mono']">Zero-Stress Security</h3>
            <p className="text-slate-600 text-center font-['Inter']">Your cluster, your rules. We keep your pods locked down and your secrets safe—automagically.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg flex-1 px-8 py-8 flex flex-col items-center gap-4">
            <span className="text-primary text-4xl">📊</span>
            <h3 className="font-bold text-xl font-['Roboto_Mono']">Real-Time Insights</h3>
            <p className="text-slate-600 text-center font-['Inter']">Visibility at your fingertips. Monitor, analyze, and optimize with beautiful dashboards and actionable alerts.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
