import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SplineIcon } from 'lucide-react';

export function VisualizerPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 pt-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <h1 className="text-3xl md:text-4xl font-mono font-bold text-indigo-700 mb-4 text-center flex flex-row gap-2 items-center justify-center">
          <SplineIcon className="text-indigo-500" size={36} />
          Visualizer
        </h1>
        <p className="text-center text-slate-700 font-inter mb-8">
          Instantly illuminate your cluster! Our interactive visualizer brings your Kubernetes resources to life in a clear, modular graph.<br />
          <span className="text-sm text-slate-500">(Fake graph for demo purposes)</span>
        </p>
        {/* Demo visualization (fake): */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-xl shadow-lg bg-white py-10 px-6 mb-8 flex flex-col items-center"
        >
          <svg width="350" height="200">
            {/* Edges */}
            <line x1="90" y1="100" x2="180" y2="55" stroke="#4f46e5" strokeWidth={2} />
            <line x1="90" y1="100" x2="180" y2="145" stroke="#4f46e5" strokeWidth={2} />
            {/* Nodes */}
            <circle cx="90" cy="100" r="28" fill="#cbd5e1" stroke="#4f46e5" strokeWidth={3} />
            <circle cx="180" cy="55" r="22" fill="#f1f5f9" stroke="#4f46e5" strokeWidth={2} />
            <circle cx="180" cy="145" r="22" fill="#f1f5f9" stroke="#4f46e5" strokeWidth={2} />
            {/* Node text */}
            <text x="90" y="106" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">Pod</text>
            <text x="180" y="61" textAnchor="middle" fontSize="10" fill="#334155">Service</text>
            <text x="180" y="151" textAnchor="middle" fontSize="10" fill="#334155">Ingress</text>
          </svg>
        </motion.div>
        <div className="flex justify-center gap-4">
          <Button asChild id="go-to-resources-btn" variant="secondary">
            <Link to="/resources">View Resources</Link>
          </Button>
          <Button asChild id="go-home-btn">
            <Link to="/">Back to Dashboard</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
