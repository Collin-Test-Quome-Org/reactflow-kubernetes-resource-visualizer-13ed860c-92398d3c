import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { LockKeyhole } from 'lucide-react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fake login: accepts any email/pass
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setTimeout(() => {
      // Fake success
      navigate('/');
    }, 500);
  }

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl">
          <CardHeader className="text-center flex flex-col items-center">
            <LockKeyhole className="text-indigo-700 mb-2" size={36} />
            <CardTitle className="font-mono text-2xl text-indigo-800">Welcome Back, Cloud Wrangler</CardTitle>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent>
              <Input
                id="login-email"
                placeholder="Email"
                type="email"
                className="mb-4"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
              />
              <Input
                id="login-password"
                placeholder="Password"
                type="password"
                className="mb-1"
                value={pass}
                onChange={e => setPass(e.target.value)}
                required
              />
              {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button id="login-btn" type="submit" className="w-full">
                Sign In
              </Button>
              <span className="text-center text-xs text-slate-500">Not a member? <Link to="/signup" className="text-indigo-600 underline">Sign up</Link></span>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
