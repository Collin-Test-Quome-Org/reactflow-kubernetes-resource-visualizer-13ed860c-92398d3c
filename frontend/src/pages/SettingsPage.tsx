import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeIcon, ShieldCheck, UploadCloud } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-1">
            <UploadCloud className="text-indigo-700 w-7 h-7" />
            <div>
              <CardTitle className="font-mono text-2xl text-indigo-800">Cluster Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-2 pb-1">
            <form>
              <div className="mb-4">
                <label htmlFor="kubeconfig-upload" className="block text-slate-700 mb-1 font-medium">Kubeconfig File</label>
                <Input id="kubeconfig-upload" type="file" className="mb-2" />
                <div className="text-xs text-slate-500">Upload to switch clusters or contexts.</div>
              </div>
              <div className="mb-4">
                <label htmlFor="api-token" className="block text-slate-700 mb-1 font-medium">API Token</label>
                <Input id="api-token" type="text" placeholder="Paste API token here" />
              </div>
              <div className="mb-4 flex items-center gap-2">
                <ThemeIcon className="text-indigo-600" />
                <span className="text-slate-700 font-medium">Theme:</span>
                <Button id="theme-toggle-btn" variant="outline">Toggle Theme</Button>
                <span className="text-xs text-slate-400 ml-2">(Light/Dark)</span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <ShieldCheck className="text-indigo-600" />
                <span className="text-slate-700 font-medium">Access Controls:</span>
                <Button id="manage-access-btn" variant="outline">Manage</Button>
                <span className="text-xs text-slate-400 ml-2">(Coming soon)</span>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button id="save-settings-btn" className="w-full">Save Settings</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
