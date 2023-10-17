import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Footer } from 'flowbite-react'

const FooterSite = () => {
	return (
		<div>
			<div className='w-full'>
				<div className='mb-10 p-10 flex flex-row justify-center items-center bg-indigo-700'>
					<div className='w-4/12'>
						<p className='text-white text-4xl font-extrabold'>Let's make a logo!</p>
						<p className='text-white'>In the time it took you to read this, you could have designed a professional logo for your business. See for yourself.</p>
					</div>
					<div className='w-5/12 flex gap-x-2 justify-center'>
						<input placeholder='Enter your company name' className='pl-2 rounded-lg w-8/12 focus:border-indigo-700' type="text" />
						<button type="button" className="px-6 py-5 text-base font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-black dark:bg-black dark:hover:bg-black dark:focus:ring-black">Get Started</button>
					</div>
				</div>
				<Footer>
					<div className="w-full ">
						<div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
							<div>
								<Footer.Title className='text-lg font-extrabold' title="Products" />
								<Footer.LinkGroup className='text-sm text-slate-500 flex flex-col gap-y-8 pt-6' col>
									<Footer.Link href="#">
										Logo Maker
									</Footer.Link>
									<Footer.Link href="#">
										Brand Kit
									</Footer.Link>
									<Footer.Link href="#">
										Social Media Kit
									</Footer.Link>
									<Footer.Link href="#">
										Business Cards
									</Footer.Link>
									<Footer.Link href="#">
										How it works
									</Footer.Link>
									<Footer.Link href="#">
										Reviews
									</Footer.Link>
									<Footer.Link href="#">
										Business Name Generator
									</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.Title className='text-lg font-extrabold' title="Inspiration" />
								<Footer.LinkGroup className='text-sm text-slate-500 flex flex-col gap-y-8 pt-6' col>
									<Footer.Link href="#">
										Blog
									</Footer.Link>
									<Footer.Link href="#">
										Logo Ideas
									</Footer.Link>
									<Footer.Link href="#">
										Logo Colors
									</Footer.Link>
									<Footer.Link href="#">
										Logo Styles
									</Footer.Link>
									<Footer.Link href="#">
										Logo Wiki
									</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.Title className='text-lg font-extrabold' title="Company" />
								<Footer.LinkGroup className='text-sm text-slate-500 flex flex-col gap-y-8 pt-6' col>
									<Footer.Link href="#">
										About
									</Footer.Link>
									<Footer.Link href="#">
										Press
									</Footer.Link>
									<Footer.Link href="#">
										Careers
									</Footer.Link>
									<Footer.Link href="#">
										Affiliates
									</Footer.Link>
									<Footer.Link href="#">
										Vulnerability Disclosure Program
									</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.Title className='text-lg font-extrabold' title="Support" />
								<Footer.LinkGroup className='text-sm text-slate-500 flex flex-col gap-y-8 pt-6' col>
									<Footer.Link href="#">
										Help Center
									</Footer.Link>
									<Footer.Link href="#">
										Contact
									</Footer.Link>
									<Footer.Link href="#">
										support@looka.com
									</Footer.Link>
								</Footer.LinkGroup>
							</div>
						</div>
						<div className="w-full bg-gray-500 px-4 py-6 sm:flex sm:items-center sm:justify-between">
							<Footer.Copyright
								by="Looka™"
								href="#"
							/>
							<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
								<Footer.Icon
									href="#"
									icon={BsFacebook}
								/>
								<Footer.Icon
									href="#"
									icon={BsInstagram}
								/>
								<Footer.Icon
									href="#"
									icon={BsTwitter}
								/>
								<Footer.Icon
									href="#"
									icon={BsGithub}
								/>
							</div>
						</div>
					</div>
				</Footer>
			</div>
		</div>
	)
}

export default FooterSite