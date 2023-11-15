import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { HiArrowUturnLeft, HiArrowUturnRight } from "react-icons/hi2";
import { WiCloudDown } from "react-icons/wi";
import { FaCrown } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdKeyboardArrowDown } from "react-icons/md";

const Editor = () => {
	return (
		<div>
			<div className='flex justify-between items-center h-max-10 border-b-[1px] pb-3'>
				<div className='flex items-center gap-x-2 text-sm'>
					<div className='p-2'><IoIosArrowBack size={20} /></div>
					<div>Saved Logos</div>
					<div>Make a Copy</div>
					<div className='w-[1px] border-black h-4 border-[1px]'></div>
					<div className='flex items-center'>Undo <HiArrowUturnLeft size={20} /></div>
					<div><HiArrowUturnRight size={20} /></div>
					<div><WiCloudDown size={30} /></div>
				</div>
				<div className='flex gap-x-4 bg-gray-100 p-2 rounded-2xl text-sm'>
					<div className='text-blue-600'>Logo</div>
					<div className='flex items-center'>Brand Kit <MdKeyboardArrowDown /></div>
				</div>
				<div className='flex'>
					<div>Share</div>
					<div>Sign Up</div>
					<div className='flex'> <FaCrown size={20} /> Downland</div>
					<div><TiThMenu size={20} /></div>
				</div>
			</div>
		</div>
	)
}

export default Editor