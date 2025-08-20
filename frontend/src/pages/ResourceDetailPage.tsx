import { useParams, Link } from 'react-router-dom';
import { ResourceDetail } from '@/components/ResourceDetail';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ResourceDetailPage() {
  const { kind, name } = useParams<{ kind: string; name: string }>();

  return (
    <main className="min-h-screen w-full bg-secondary">
      <section className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/resources">
            <Button variant="ghost" size="icon" id="back-to-resources">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <motion.h1
            className="text-3xl font-bold font-['Roboto_Mono'] text-primary"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {kind} / {name}
          </motion.h1>
        </div>
        <ResourceDetail kind={kind!} name={name!} />
      </section>
    </main>
  );
}
