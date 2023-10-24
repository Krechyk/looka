import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

const Header = () => {
	return (
		<div className='h-16 flex justify-between items-center'>
			<div><img src={logo} alt="" /></div>
			<div className='flex gap-8 text-xs'>
				<Link to="/" >Logo Maker</Link>
				<Link to="/brand_kit">Brand Kit</Link>
				<div>How It Works</div>
				<div>Reviews</div>
				<div>Logo Ideas</div>
				<Link to="/blog">Blog</Link>
			</div>
			<div className='flex gap-x-2'>
				<button type="button" className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
				<button type="button" className="px-5 py-3 text-base font-medium text-center rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none hover:text-white focus:ring-blue-300 dark:bg-neutral-100 text-neutral-900">Log in </button>
			</div>
		</div>
	)
}

export default Header