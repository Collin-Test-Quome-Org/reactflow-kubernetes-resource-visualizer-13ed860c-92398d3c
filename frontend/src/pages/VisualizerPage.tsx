import { useState } from 'react';
import { ResourceVisualizer } from '@/components/ResourceVisualizer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const mockNamespaces = [
  { name: 'default' },
  { name: 'kube-system' },
  { name: 'dev' },
];

export function VisualizerPage() {
  const [namespace, setNamespace] = useState('default');
  return (
    <main className="min-h-screen w-full bg-secondary">
      <section className="max-w-7xl mx-auto py-8 px-4">
        <motion.h1
          className="text-3xl font-bold font-['Roboto_Mono'] text-primary mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Kubernetes Resource Visualizer
        </motion.h1>
        <Card className="mb-6">
          <CardContent className="py-4 flex flex-wrap gap-6 items-center">
            <span className="font-semibold text-slate-700 font-['Inter']">Namespace:</span>
            <Tabs value={namespace} onValueChange={setNamespace} className="">
              <TabsList>
                {mockNamespaces.map(ns => (
                  <TabsTrigger key={ns.name} value={ns.name} id={`namespace-tab-${ns.name}`}>{ns.name}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <ResourceVisualizer selectedNamespace={namespace} />
        </motion.div>
      </section>
    </main>
  );
}
