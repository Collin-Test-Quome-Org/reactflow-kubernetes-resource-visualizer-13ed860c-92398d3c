import { SettingsPanel } from '@/components/SettingsPanel';
import { motion } from 'framer-motion';

export function SettingsPage() {
  return (
    <main className="min-h-screen w-full bg-secondary">
      <section className="max-w-3xl mx-auto py-8 px-4">
        <motion.h1
          className="text-3xl font-bold font-['Roboto_Mono'] text-primary mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Settings
        </motion.h1>
        <SettingsPanel />
      </section>
    </main>
  );
}
