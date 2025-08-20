import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Database, Server } from 'lucide-react';

// Fake resource details
const fakeResources: Record<string, any> = {
  '1': {
    name: 'Pod: payment-service',
    type: 'Pod',
    icon: <Server className="text-indigo-600" size={40} />,
    description: 'Handles all payment processing and transactions.',
    details: [
      { key: 'Status', value: 'Running' },
      { key: 'Restarts', value: 0 },
      { key: 'Node', value: 'cloud-node-2' },
    ],
  },
  '2': {
    name: 'Deployment: frontend',
    type: 'Deployment',
    icon: <Database className="text-indigo-600" size={40} />,
    description: 'Manages the scaling and rollout of the frontend application.',
    details: [
      { key: 'Replicas', value: 4 },
      { key: 'Strategy', value: 'RollingUpdate' },
      { key: 'Updated', value: 'Yes' },
    ],
  },
  '3': {
    name: 'Documentation',
    type: 'Docs',
    icon: <BookOpen className="text-indigo-600" size={40} />,
    description: 'Comprehensive guides and API usage docs.',
    details: [
      { key: 'Pages', value: 23 },
      { key: 'Last update', value: '2024-05-12' },
    ],
  },
};

export function ResourceDetailPage() {
  const { id } = useParams();
  const resource = fakeResources[id ?? ''];

  if (!resource) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <h2 className="text-2xl font-mono font-bold text-indigo-700 mb-4">Resource Not Found</h2>
        <Button asChild id="back-to-resources-btn" className="mt-2">
          <Link to="/resources"><ArrowLeft className="mr-2" />Back to Resources</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pb-16 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <Card className="shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4">
            {resource.icon}
            <div>
              <CardTitle className="font-mono text-indigo-800 text-2xl mb-1">{resource.name}</CardTitle>
              <CardDescription className="text-slate-500 text-sm">{resource.type}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">{resource.description}</p>
            <ul className="divide-y divide-slate-200">
              {resource.details.map((item: any, idx: number) => (
                <li key={item.key} className="flex justify-between py-2 text-[15px]">
                  <span className="font-medium text-slate-700">{item.key}</span>
                  <span className="text-slate-600">{item.value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild id="back-to-resources-btn" variant="outline" className="w-full">
              <Link to="/resources"><ArrowLeft className="mr-2" />Back to Resources</Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
