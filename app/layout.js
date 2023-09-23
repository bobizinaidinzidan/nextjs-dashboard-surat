// import MainLayout from '@/components/layout/MainLayout';
import { AuthProvider } from './Providers';
import './globals.css';
import MenuContextProvider from '@/context/MenuContext';

export const metadata = {
  title: 'LPSE | DASHBOARD',
  description: 'Sistem Surat Masuk & Keluar',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MenuContextProvider>
          <AuthProvider>{children}</AuthProvider>
        </MenuContextProvider>
      </body>
    </html>
  );
}
