
import '@/styles/globals.css'
import { Gothic_A1, Inter } from 'next/font/google'
import Navbar from '@/components/globals/Navbar'
import { Inter } from 'next/font/google'

import "@fortawesome/fontawesome-svg-core/styles.css";

const gothic = Gothic_A1({ weight: ['400', '500', '700'], subsets: ['latin'] })
export const metadata = {
	title: 'Gigbud',
	description: 'Connecting you to opportunities',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={gothic.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}

