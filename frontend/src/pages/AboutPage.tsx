import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BadgeInfo, ExternalLink } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <Card className="shadow-lg">
          <CardContent className="py-8 px-6 flex flex-col items-center text-center">
            <BadgeInfo className="text-indigo-600 mb-2" size={36} />
            <h1 className="font-mono text-3xl font-bold text-indigo-800 mb-2">About PodPilot</h1>
            <p className="font-inter text-slate-700 mb-4">
              <b>PodPilot</b> is your mission control for Kubernetes clusters. Visualize, explore, and master your cloud-native resources with clarity and speed.<br/>
              Effortlessly navigate your infrastructure, uncover relationships, and make smarter decisions—all with a touch of indigo inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center">
              <Link
                to="https://github.com/podpilot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-indigo-700 underline hover:text-indigo-900"
              >
                GitHub <ExternalLink size={16} />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-slate-700 underline hover:text-indigo-700"
              >
                Back to Dashboard
              </Link>
            </div>
            <div className="mt-4 text-xs text-slate-400">© 2024 PodPilot. Version 1.0.0</div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
