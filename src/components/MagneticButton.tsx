'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// More gentle spring config for subtle movement
const SPRING_CONFIG = { damping: 100, stiffness: 400 };

type MagneticButtonType = {
	children: React.ReactNode;
	distance?: number;
};

function MagneticButton({ children, distance = 0.1 }: MagneticButtonType) {
	const [isHovered, setIsHovered] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const springX = useSpring(x, SPRING_CONFIG);
	const springY = useSpring(y, SPRING_CONFIG);

	useEffect(() => {
		const calculateDistance = (e: MouseEvent) => {
			if (!ref.current || !isHovered) return;
			
			const rect = ref.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			
			// Calculate distance from mouse to center
			const distanceX = e.clientX - centerX;
			const distanceY = e.clientY - centerY;
			
			// Apply a subtle magnetic effect
			x.set(distanceX * distance);
			y.set(distanceY * distance);
		};

		const resetPosition = () => {
			x.set(0);
			y.set(0);
		};

		if (isHovered) {
			document.addEventListener('mousemove', calculateDistance);
		} else {
			resetPosition();
		}

		return () => {
			document.removeEventListener('mousemove', calculateDistance);
		};
	}, [isHovered, distance, x, y]);

	return (
		<motion.div
			ref={ref}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				x: springX,
				y: springY,
			}}
			className='inline-block h-fit w-fit relative'
		>
			{children}
		</motion.div>
	);
}

export default MagneticButton;
