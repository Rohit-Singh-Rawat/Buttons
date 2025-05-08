import '~/styles/globals.css';

import { type Metadata } from 'next';
import { Geist } from 'next/font/google';

import { TRPCReactProvider } from '~/trpc/react';

export const metadata: Metadata = {
	title: 'Button',
	description: 'A collection of buttons to steal for your projects',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const geist = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang='en'
			className={`${geist.className}`}
		>
			<body>
				<TRPCReactProvider>
					<main className=' mx-auto min-h-screen'>{children}</main>
				</TRPCReactProvider>
			</body>
		</html>
	);
}
