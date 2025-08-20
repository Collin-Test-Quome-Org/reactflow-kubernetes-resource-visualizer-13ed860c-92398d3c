import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-secondary">
      <div className="bg-white rounded-xl shadow-lg px-8 py-10 w-full max-w-md flex flex-col items-center">
        <img src="/branding/assets/logo-1.png" className="w-14 h-14 mb-6" />
        <h1 className="text-2xl font-['Roboto_Mono'] font-bold text-primary mb-2">Welcome Back</h1>
        <p className="text-slate-600 mb-6 text-center font-['Inter']">Sign in to your PodPilot dashboard and take command of your clusters.</p>
        <form className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="login-email" className="font-medium text-slate-700">Email</label>
            <Input id="login-email" type="email" autoComplete="email" required placeholder="you@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="login-password" className="font-medium text-slate-700">Password</label>
            <Input id="login-password" type="password" autoComplete="current-password" required placeholder="••••••••" />
          </div>
          <Button id="login-submit" type="submit" className="mt-2 bg-primary text-white hover:bg-indigo-700">Log In</Button>
        </form>
        <div className="mt-6 text-sm text-slate-500 font-['Inter']">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-primary font-semibold hover:underline" id="login-signup-link">Sign up</Link>
        </div>
      </div>
    </main>
  );
}
