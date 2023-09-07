'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/home/navbarmobile.module.css'

const NavbarMobile = ({ links, handleNav, isNavOpen }) => {
	return (
		<>
			<div className={`${styles['nav__mobile']}`}>
				<button
					onClick={() => handleNav()}
					className={`${styles['btn--mobile']}`}
					role="button"
					aria-label="navbar-menu">
					{!isNavOpen ? (
						<Image
							src="/images/globals/open.svg"
							width={25}
							height={45}
							alt=""
							className={`${styles['navbar__icon']}`}
							role="button"
						/>
					) : (
						<Image
							src="/images/globals/close.svg"
							width={25}
							height={45}
							alt=""
							className={`${styles['navbar__icon']}`}
							role="button"
						/>
					)}
				</button>
			</div>
			{/* Navbar list and call-to-action button - Mobile */}
			{isNavOpen ? (
				<div className={`${styles['navbar__mobile']}`}>
					<ul className={`${styles['navbar__mobile--ul']} text-black`}>
						{links.map(({ label, path }) => (
							<li key={path}>
								<Link
									href={path}
									className={`${styles['navbar__mobile-li']} text-black`}
									style={{ textDecoration: 'none' }}
									onClick={() => handleNav()}>
									{label}
								</Link>
							</li>
						))}
					</ul>
					<button className={`${styles['navbar__btn']} bg-primary text-white`}>Login/Signup</button>
				</div>
			) : null}
		</>
	)
}

export default NavbarMobile
