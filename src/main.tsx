import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SidebarProvider } from './components/ui/sidebar.js';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
      <App children={undefined} />
      </SidebarProvider>
    </QueryClientProvider>

  </StrictMode>,
)
