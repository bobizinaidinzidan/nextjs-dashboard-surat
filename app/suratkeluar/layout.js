import MainLayout from '@/components/layout/MainLayout';
export const metadata = {
  title: 'LPSE | SURAT KELUAR',
  description: 'Sistem Surat Masuk & Keluar',
};

export default function SuratKeluarLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
