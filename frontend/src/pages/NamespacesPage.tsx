import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

// Fake Namespaces
const namespaces = [
  {
    name: 'default',
    resources: 23,
  },
  {
    name: 'kube-system',
    resources: 14,
  },
  {
    name: 'dev-team',
    resources: 9,
  },
];

export function NamespacesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 pt-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-mono font-bold text-indigo-700 mb-6 text-center"
        >
          🗂️ Namespaces
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-700 font-inter mb-8"
        >
          Organize your cluster by namespace. Switch, explore, and manage your environments!
        </motion.p>
        <div className="flex justify-end mb-4">
          <Button id="add-namespace-btn" variant="outline" className="flex gap-2 items-center">
            <Plus className="w-4 h-4 mr-1" /> Add Namespace
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
          {namespaces.map((ns, idx) => (
            <motion.div
              key={ns.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.13 + 0.13 }}
            >
              <Card className="shadow hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Folder className="text-indigo-600 w-8 h-8" />
                  <div>
                    <CardTitle className="text-indigo-800 font-mono text-lg">{ns.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    <span className="font-semibold">{ns.resources}</span> resources in this namespace
                  </p>
                </CardContent>
                <CardFooter>
                  <Button id={`filter-namespace-btn-${ns.name}`} variant="secondary" className="w-full">
                    Filter Visualizer
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
