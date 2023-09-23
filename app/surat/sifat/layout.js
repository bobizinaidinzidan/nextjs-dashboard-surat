import MainLayout from '@/components/layout/MainLayout';
export const metadata = {
  title: 'LPSE | SIFAT SURAT',
  description: 'Sistem Surat Masuk & Keluar',
};

export default function SifatLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
