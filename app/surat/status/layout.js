import MainLayout from '@/components/layout/MainLayout';
export const metadata = {
  title: 'LPSE | STATUS SURAT',
  description: 'Sistem Surat Masuk & Keluar',
};

export default function StatusLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
