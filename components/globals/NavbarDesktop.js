'use client'
import Link from 'next/link'
import styles from '../../styles/home/navbardesktop.module.css'

const NavbarDesktop = ({ links, handleNav }) => {
	return (
		<>
			<div className={`${styles['nav__wrapper']}`}>
				<ul className={`${styles['navbar__desktop']} text-black`}>
					{links.map(({ label, path }) => (
						<li key={path}>
							<Link
								href={path}
								className={`${styles['navbar__desktop-li']} text-black`}
								style={{ textDecoration: 'none' }}
								onClick={() => handleNav()}>
								{label}
							</Link>
						</li>
					))}
				</ul>
				<button className={`${styles['navbar__btn']} bg-primary text-white`}>Login/Signup</button>
			</div>
		</>
	)
}

export default NavbarDesktop
