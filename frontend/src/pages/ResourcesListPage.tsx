import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Database, Server } from 'lucide-react';

// Fake resource data
const resources = [
  {
    id: '1',
    name: 'Pod: payment-service',
    type: 'Pod',
    description: 'Handles all payment processing and transactions.',
    icon: <Server className="text-indigo-600" size={32} />,
  },
  {
    id: '2',
    name: 'Deployment: frontend',
    type: 'Deployment',
    description: 'Manages the scaling and rollout of the frontend application.',
    icon: <Database className="text-indigo-600" size={32} />,
  },
  {
    id: '3',
    name: 'Documentation',
    type: 'Docs',
    description: 'Comprehensive guides and API usage docs.',
    icon: <BookOpen className="text-indigo-600" size={32} />,
  },
];

export function ResourcesListPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 pt-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-mono font-bold text-indigo-700 mb-6 text-center"
        >
          📚 Explore Your Kubernetes Resources
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }}
          className="text-center text-slate-700 font-inter mb-12"
        >
          The full list of all your cloud-native wonders. Dive in, inspect, and optimize!
        </motion.p>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {resources.map((resource, idx) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.14 + 0.2 }}
            >
              <Card className="shadow hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row gap-3 items-center">
                  {resource.icon}
                  <div>
                    <CardTitle className="text-indigo-800 font-mono text-lg">{resource.name}</CardTitle>
                    <CardDescription className="text-slate-500 text-xs">{resource.type}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-slate-700 text-[15px]">{resource.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild id={`resource-detail-btn-${resource.id}`} variant="outline" className="w-full">
                    <Link to={`/resources/${resource.id}`}>View Details</Link>
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
