import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  return (
    <nav className="w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' px-2.5'}>
                <Link to="/" aria-label="PodPilot Home" className="flex items-center gap-2">
                  <img src="/branding/assets/logo-0.png" className="h-8 w-8" />
                  <span className="text-xl font-bold tracking-tight font-['Roboto_Mono'] text-primary hidden sm:inline">PodPilot</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === '/visualizer' ? ' bg-secondary' : '')}>
                <Link to="/visualizer" id="nav-visualizer">Visualizer</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === '/resources' ? ' bg-secondary' : '')}>
                <Link to="/resources" id="nav-resources">Resources</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === '/namespaces' ? ' bg-secondary' : '')}>
                <Link to="/namespaces" id="nav-namespaces">Namespaces</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === '/settings' ? ' bg-secondary' : '')}>
                <Link to="/settings" id="nav-settings">Settings</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === '/about' ? ' bg-secondary' : '')}>
                <Link to="/about" id="nav-about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2 items-center">
          <Link to="/login" id="nav-login">
            <button className="text-primary border border-primary rounded-lg px-4 py-2 font-medium transition hover:bg-primary hover:text-white">
              Log In
            </button>
          </Link>
          <Link to="/signup" id="nav-signup">
            <button className="bg-primary text-white rounded-lg px-4 py-2 font-semibold shadow hover:bg-indigo-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
