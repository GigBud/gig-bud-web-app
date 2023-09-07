'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/home/navbar.module.css'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
const links = [
	{
		label: 'Home',
		path: '/',
	},
	{
		label: 'Categories',
		path: '/categories',
	},
	{
		label: 'About Us',
		path: '/about',
	},
]

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const handleNav = () => setIsNavOpen((prevState) => !prevState)
	return (
		<header className="container">
			<nav className={`${styles['navbar']}`}>
				<div>
					<Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
						<span className={`${styles['navbar__logo']} uppercase text-black`}>G i g b u d</span>
					</Link>
				</div>
				<NavbarDesktop links={links} handleNav={handleNav} />
				<NavbarMobile links={links} handleNav={handleNav} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
			</nav>
		</header>
	)
}

export default Navbar
