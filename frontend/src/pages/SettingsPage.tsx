import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShieldCheck, UploadCloud } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-mono font-bold mb-6 text-indigo-700 flex items-center gap-2">
        <ShieldCheck className="w-7 h-7 text-slate-400" /> Settings
      </h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <Input id="username" name="username" type="text" placeholder="Your username" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
          <div className="flex items-center gap-3">
            <Input id="avatar" name="avatar" type="file" className="flex-1" />
            <Button type="button" id="upload-avatar" variant="secondary" size="icon">
              <UploadCloud className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div>
          <Button variant="default" id="save-settings" type="submit" className="w-full">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
