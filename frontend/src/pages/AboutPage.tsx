export function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white pt-16">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="/branding/assets/logo-2.png" className="w-40 h-40 object-contain" />
          <div>
            <h1 className="text-4xl font-['Roboto_Mono'] font-bold text-primary mb-4">About PodPilot</h1>
            <p className="text-slate-700 text-lg font-['Inter'] mb-4">
              <span className="font-bold">PodPilot</span> is your trusty co-pilot for all things Kubernetes. We are on a mission to empower developers, DevOps engineers, and cloud-native teams to launch, manage, and scale clusters with confidence and clarity.
            </p>
            <ul className="list-disc text-slate-600 pl-5 font-['Inter']">
              <li>Modern, intuitive dashboard built for speed and delight</li>
              <li>Automated workflows, powerful monitoring, and robust security</li>
              <li>Friendly support from a team who <span className="font-bold text-primary">lives</span> and breathes containers</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 text-center">
          <h2 className="text-2xl font-['Roboto_Mono'] font-bold text-indigo-800 mb-2">Our Company Voice</h2>
          <p className="text-lg font-['Inter'] text-slate-700">
            <span className="font-bold">PodPilot</span> speaks crisp, clear, and clever—always with a wink and a nod to the cloud-native heroes we serve. We believe in making powerful tech feel effortless, approachable, and even a little bit fun.
          </p>
        </div>
      </div>
    </main>
  );
}
