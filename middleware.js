export { default } from 'next-auth/middleware';
export const config = {
  matcher: [
    '/',
    '/user',
    '/suratmasuk',
    '/suratkeluar',
    '/surat/allsurat',
    '/surat/jenis',
    '/surat/penerima',
    '/surat/pengirim',
    '/surat/sifat',
    '/surat/status',
    '/surat/tujuan',
  ],
};
