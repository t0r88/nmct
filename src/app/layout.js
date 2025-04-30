import { Plus_Jakarta_Sans, DM_Sans, Roboto_Condensed } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const plus_jakarta_sans = Roboto_Condensed({
  subsets: ['latin','cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'ШМТК | Шинэ Монгол Технологийн Коллеж',
    template: '%s | Шинэ Монгол',
  },
  description: 'Шинэ Монгол технологийн коллеж',
  openGraph: {
    title: 'Шинэ Монгол Технологийн Коллеж',
    description: 'Шинэ Монгол технологийн коллеж',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="шинэ монгол" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${plus_jakarta_sans.variable} ${dm_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
