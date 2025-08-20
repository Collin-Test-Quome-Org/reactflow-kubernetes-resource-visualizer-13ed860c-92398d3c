import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative w-full bg-secondary">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[32rem] flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="bg-black bg-opacity-60 rounded-xl px-12 py-16 flex flex-col items-center gap-8 shadow-2xl"
        >
          <h1
            className="text-white text-5xl font-extrabold tracking-tight text-center font-['Roboto_Mono'] drop-shadow"
            style={{ letterSpacing: '-0.03em' }}
          >
            Deploy, Scale, and <span className="text-primary">Conquer</span> Kubernetes
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl text-center font-['Inter']">
            Welcome to <span className="font-bold text-primary">PodPilot</span>, your mission control for effortless Kubernetes management. 
            Orchestrate, monitor, and optimize your cloud-native workloads with style, speed, and supercharged smarts.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" id="get-started-cta" className="text-lg px-8 font-medium">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" id="learn-more-cta" className="text-lg px-8 font-medium border-white text-white hover:text-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
