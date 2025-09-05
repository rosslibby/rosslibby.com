import {
  Inter,
  Inter_Tight,
  Mona_Sans,
  Outfit,
  Rethink_Sans,
  Roboto,
} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const interTight = Inter_Tight({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });
const rethink = Rethink_Sans({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'] });
const mona = Mona_Sans({ subsets: ['latin'] });

export const fontsClassname = [
  inter.className,
  interTight.className,
  outfit.className,
  rethink.className,
  roboto.className,
  mona.className,
].join(' ');
