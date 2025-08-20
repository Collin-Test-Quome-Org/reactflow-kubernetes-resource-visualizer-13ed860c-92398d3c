import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { PricingPage } from '@/pages/PricingPage';
import { LoginPage } from '@/pages/LoginPage';
import { SignupPage } from '@/pages/SignupPage';
import { ResourcesListPage } from '@/pages/ResourcesListPage';
import { ResourceDetailPage } from '@/pages/ResourceDetailPage';
import { VisualizerPage } from '@/pages/VisualizerPage';
import { NamespacesPage } from '@/pages/NamespacesPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { Providers } from './Providers';

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/resources" element={<ResourcesListPage />} />
          <Route path="/resources/:id" element={<ResourceDetailPage />} />
          <Route path="/visualizer" element={<VisualizerPage />} />
          <Route path="/namespaces" element={<NamespacesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}
