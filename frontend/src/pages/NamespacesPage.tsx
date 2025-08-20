import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Grid3X3, Plus } from 'lucide-react';

// Fake namespaces data
const namespaces = [
  {
    name: 'default',
    status: 'Active',
    resourceCount: 12,
    description: 'The default namespace for objects with no other namespace.',
  },
  {
    name: 'dev',
    status: 'Active',
    resourceCount: 7,
    description: 'Development workloads and resources.',
  },
  {
    name: 'monitoring',
    status: 'Active',
    resourceCount: 3,
    description: 'Observability stack resources.',
  },
];

export function NamespacesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 pt-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-mono font-bold text-indigo-700 mb-6 text-center"
        >
          <Grid3X3 className="inline mr-2 text-indigo-600" /> Namespaces
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-700 font-inter mb-12"
        >
          Organize and manage your Kubernetes namespaces.
        </motion.p>
        <div className="flex justify-end mb-4">
          <Button id="add-namespace-btn" variant="outline" disabled>
            <Plus className="mr-2" /> Add Namespace
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {namespaces.map((ns, idx) => (
            <motion.div
              key={ns.name}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.10 + 0.2 }}
            >
              <Card className="shadow hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row gap-3 items-center">
                  <Grid3X3 className="text-indigo-600" size={28} />
                  <div>
                    <CardTitle className="text-indigo-800 font-mono text-lg">{ns.name}</CardTitle>
                    <span className="text-xs text-slate-500">{ns.status}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-[15px] mb-2">{ns.description}</p>
                  <span className="text-slate-600 text-xs">{ns.resourceCount} resources</span>
                </CardContent>
                <CardFooter>
                  <Button asChild id={`namespace-visualize-btn-${ns.name}`} variant="secondary" className="w-full">
                    <Link to={`/visualizer?namespace=${ns.name}`}>Visualize Namespace</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
