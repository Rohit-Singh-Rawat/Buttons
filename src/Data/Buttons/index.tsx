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
	{
		id: 'firecrwal-dark',
		button: (
			<button className='h-9 px-4 rounded-[10px] text-sm font-medium flex items-center justify-center transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 bg-[#36322F] text-[#fff] hover:bg-[#4a4542] disabled:bg-[#8c8885] disabled:hover:bg-[#8c8885] [box-shadow:inset_0px_-2.108433723449707px_0px_0px_#171310,_0px_1.2048193216323853px_6.325301647186279px_0px_rgba(58,_33,_8,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#171310,_0px_1px_3px_0px_rgba(58,_33,_8,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#171310,_0px_1px_2px_0px_rgba(58,_33,_8,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100 w-full whitespace-nowrap text-center'>
				Click Me
			</button>
		),
		siteName: 'Firecrawl',
		siteUrl: 'https://www.firecrawl.dev/',
	},
	{
		id: 'firecrwal-light',
		button: (
			<button className='h-9 rounded-md text-sm font-medium flex items-center transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 bg-[#fff] text-[#36322F] hover:bg-[#f0f0f0] disabled:bg-[#f5f5f5] disabled:text-[#8c8885] disabled:hover:bg-[#f5f5f5] [box-shadow:0_0_0_1px_hsl(35deg_22%_90%),_0_1px_2px_hsl(32,_10%,_68%),_0_3px_3px_hsl(32,11%,82%),_0_-2px_hsl(58,4%,93%)_inset] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:0_0_0_1px_hsl(35deg_22%_90%),_0_1px_2px_hsl(32,_10%,_68%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:0_0_0_1px_hsl(35deg_22%_90%),_inset_0_1px_1px_hsl(32,_10%,_68%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100 px-2.5 py-1 w-full justify-center'>
				Click Me
			</button>
		),
		siteName: 'Firecrawl',
		siteUrl: 'https://www.firecrawl.dev/',
	},
];

export default buttons;
