import MainLayout from '@/components/layout/MainLayout';
export const metadata = {
  title: 'LPSE | DATA SURAT',
  description: 'Sistem Surat Masuk & Keluar',
};

export default function Suratlayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
