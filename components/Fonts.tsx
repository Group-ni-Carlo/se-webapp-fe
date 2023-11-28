import { Bebas_Neue, Montserrat } from '@next/font/google';

export const title = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebasneue'
});

export const body = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat'
})
