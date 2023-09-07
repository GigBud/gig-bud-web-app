'use client'
import React, { useState } from 'react'
import styles from '@/styles/home/jobs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Jobs() {
	return (
		<>
			{/*  Title Categories section*/}
			<h2 className={styles.jobs_title}> Explore The Latest Job Openings</h2>
			<section className={styles.main}>
				<div className={styles.categories}>
					<h2 className={styles.category}>Categories</h2>

					<details>
						<summary className={styles.details}>Programming</summary>
					</details>
					<details className={styles.details}>
						<summary>Marketing</summary>
					</details>
					<details className={styles.details}>
						<summary>Finance</summary>
					</details>

					<details open className={styles.details} width={50}>
						<summary  className={`${styles['details-design']}`}>Design</summary>
						<ul>
							<li className={styles.designLi}>
								<span className={styles.span}>UX Desiner</span>
							</li>
							<li className={styles.designLi}>
								<span className={styles.span}>UI Designer </span>
							</li>

							<li className={styles.designGraphic}>Graphic Designer</li>
							<li className={styles.designLi}>
								<span className={styles.span}>UX Writer</span>
							</li>
							<li className={styles.designLi}>
								<span className={styles.span}>Brand Designer</span>
							</li>
						</ul>
					</details>
				</div>

				{/* Job Cards Section  */}

				<div className={styles.cards}>
					{/* First Card  */}
					<div className={styles.card}>
						{/* Card Icon , Title , Position*/}
						<div className={styles.header}>
							<Image
								className={styles.card_icon}
								width={60}
								height={50}
                                
                                src="/images/jobs/first.png"
								alt=""
							/>
							<div className={styles.card_info}>
								<h2 className={styles.card_title}>UX Designer</h2>
                                <FontAwesomeIcon  className={styles.plus}icon={faPlus} />
								<span>Senior</span>
							</div>
						</div>
						{/* Job Location */}
						<div className={styles.location}>
							<FontAwesomeIcon className={styles.card_fontawesome} icon={faLocationDot} />
							<p className={styles.description}>
								<span>Remote /</span> office in Ottawa , Ontario
							</p>
						</div>
						{/*Card Body */}
						<p className={styles.card_body}>
							Lorem Ipsum is simply printing and typesetting industry, Lorem Ipsum has been the industry's standard
							dummy text ever.
						</p>
					</div>

					{/* Second Card  */}
					<div className={styles.card}>
						{/* Card Icon , Title , Position*/}
						<div className={styles.header}>
							<Image
								className={styles.card_icon}
								width={60}
								height={50}
								src="/images/jobs/second.png"
								alt=""
							/>

							<div className={styles.card_info}>
								<h2 className={styles.card_title}>UI Designer</h2>
                                <FontAwesomeIcon  className={styles.plus}icon={faPlus} />
								<span>Junior</span>
                               
							</div>
						</div>
						{/* Job Location */}
						<div className={styles.location}>
							<FontAwesomeIcon className={styles.card_fontawesome} icon={faLocationDot} />
							<p className={styles.description}>
								<span>Remote</span> office in Kyiv , Ukraine
							</p>
						</div>
						{/*Card Body */}
						<p className={styles.card_body}>
							Lorem Ipsum is simply printing and typesetting industry, Lorem Ipsum has been the industry's standard
							dummy text ever.
						</p>
					</div>

					{/* Third Card*/}
					<div className={styles.card}>
						{/* Card Icon , Title , Position*/}
						<div className={styles.header}>
							<Image
								className={styles.card_icon}
								width={60}
								height={50}
								src="/images/jobs/third.png"
								alt=" "
							/>
							<div className={styles.card_info}>
								<h2 className={styles.card_title}>UI Designer</h2>
                                <FontAwesomeIcon  className={styles.plus}icon={faPlus} />
								<span>Mid-Senior</span>
							</div>
						</div>
						{/* Job Location */}
						<div className={styles.location}>
							<FontAwesomeIcon className={styles.card_fontawesome} icon={faLocationDot} />
							<p className={styles.description}>
								<span>Remote</span> office in Lagos , Nigria
							</p>
						</div>
						{/*Card Body */}
						<p className={styles.card_body}>
							Lorem Ipsum is simply printing and typesetting industry, Lorem Ipsum has been the industry's standard
							dummy text ever.
						</p>
					</div>

					{/* Fourth Card*/}
					<div className={styles.card}>
						{/* Card Icon , Title , Position*/}
						<div className={styles.header}>
							<Image
								className={styles.card_icon}
								width={60}
								height={50}
								src="/images/jobs/fourth.png"
								alt=""
							/>
							<div className={styles.card_info}>
								<h2 className={styles.card_title}>UX Writer</h2>
                                <FontAwesomeIcon  className={styles.plus}icon={faPlus} />
								<span>Mid-Level</span>
							</div>{' '}
						</div>
						{/* Job Location */}
						<div className={styles.location}>
							<FontAwesomeIcon className={styles.card_fontawesome} icon={faLocationDot} />
							<p className={styles.description}>
								<span>Remote</span> office in Lagos , Nigria
							</p>
						</div>
						{/*Card Body */}
						<p className={styles.card_body}>
							Lorem Ipsum is simply printing and typesetting industry, Lorem Ipsum has been the industry's standard
							dummy text ever.
						</p>
					</div>

					{/* Fifth Card*/}
					<div className={styles.card}>
						{/* Card Icon , Title , Position*/}
						<div className={styles.header}>
							<Image
								className={styles.card_icon}
								width={60}
								height={50}
								src="/images/jobs/fifth.png"
								alt=""
							/>
							<div className={styles.card_info}>
								<h2 className={styles.card_title}>Brand Designer</h2>
                                <FontAwesomeIcon  className={styles.plus}icon={faPlus} />
								<span>Senior</span>
							</div>{' '}
						</div>
						{/* Job Location */}
						<div className={styles.location}>
							<FontAwesomeIcon className={styles.card_fontawesome} icon={faLocationDot} />
							<p className={styles.description}>
								<span>Remote</span> office in California , USA
							</p>
						</div>
						{/*Card Body */}
						<p className={styles.card_body}>
							Lorem Ipsum is simply printing and typesetting industry, Lorem Ipsum has been the industry's standard
							dummy text ever.
						</p>
					</div>

					{/* Sixth Card  */}
					<div className={styles.card}>
						{/* Card Icon , Title , Position*/}
						<div className={styles.header}>
							<Image
								className={styles.card_icon}
								width={60}
								height={50}
								src="/images/jobs/sixth.png"
								alt=""
							/>
							<div className={styles.card_info}>
								<h2 className={styles.card_title}>UX Designer</h2>
                                <FontAwesomeIcon  className={styles.plus}icon={faPlus} />
								<span>Senior</span>
							</div>{' '}
						</div>
						{/* Job Location */}
						<div className={styles.location}>
							<FontAwesomeIcon className={styles.card_fontawesome} icon={faLocationDot} />
							<p className={styles.description}>
								<span>Remote</span> office in Ottawa , Ontario
							</p>
						</div>
						{/*Card Body */}
						<p className={styles.card_body}>
							Lorem Ipsum is simply printing and typesetting industry, Lorem Ipsum has been the industry's standard
							dummy text ever.
						</p>
					</div>
				</div>
			</section>
		</>
	)
}
