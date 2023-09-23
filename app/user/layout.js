import MainLayout from '@/components/layout/MainLayout';
// import Provider from '@/context/Provider';
export const metadata = {
  title: 'LPSE | USER',
  description: 'Sistem Surat Masuk & Keluar',
};

export default function UserLayout({ children }) {
  return (
    <div>
      {/* <Provider> */}
      <MainLayout>{children}</MainLayout>
      {/* </Provider> */}
    </div>
  );
}
