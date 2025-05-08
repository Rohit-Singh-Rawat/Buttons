import React from 'react';
import type { ReactNode } from 'react';

export type ButtonType = {
	id: string;
	button: ReactNode;
	siteName: string;
	siteUrl: string;
};

const buttons: ButtonType[] = [
	{
		id: 'acctual',
		button: (
			<button
				className='relative  inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground disabled:shadow-none disabled:before:hidden disabled:after:hidden aria-invalid:ring-0 aria-invalid:border-red-500 bg-gray-950 text-white shadow-fancy-buttons-neutral before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:p-px before:from-white/[.12] before:to-transparent before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-white after:to-transparent after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out hover:after:opacity-[.24] px-3.5 py-2 w-full'
				type='submit'
			>
				Continue
			</button>
		),
		siteName: 'Acctual',
		siteUrl: 'https://app.acctual.com/',
	},
];

export default buttons;
