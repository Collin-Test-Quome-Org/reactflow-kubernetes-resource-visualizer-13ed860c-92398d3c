import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export function SignupPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-secondary">
      <div className="bg-white rounded-xl shadow-lg px-8 py-10 w-full max-w-md flex flex-col items-center">
        <img src="/branding/assets/logo-0.png" className="w-14 h-14 mb-6" />
        <h1 className="text-2xl font-['Roboto_Mono'] font-bold text-primary mb-2">Sign Up</h1>
        <p className="text-slate-600 mb-6 text-center font-['Inter']">Create your PodPilot account and take off into the cloud-native future.</p>
        <form className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="signup-email" className="font-medium text-slate-700">Email</label>
            <Input id="signup-email" type="email" autoComplete="email" required placeholder="you@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="signup-password" className="font-medium text-slate-700">Password</label>
            <Input id="signup-password" type="password" autoComplete="new-password" required placeholder="Create a password" />
          </div>
          <Button id="signup-submit" type="submit" className="mt-2 bg-primary text-white hover:bg-indigo-700">Sign Up</Button>
        </form>
        <div className="mt-6 text-sm text-slate-500 font-['Inter']">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold hover:underline" id="signup-login-link">Log in</Link>
        </div>
      </div>
    </main>
  );
}
