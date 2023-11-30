import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as ReactIconsFa from 'react-icons/fa';
import * as ReactIconsBs from 'react-icons/bs';
import Colors from '../../img/explore/Colors.jpeg'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRepeat } from "react-icons/fa6";
import { CgCheck } from "react-icons/cg";

import { useEditContext } from '../../Context';
import { ColorList, EditInformation } from '../../info';

const Explore = () => {
	const navigate = useNavigate()
	const [showColors, setShowColors] = useState(false);

	const allIcons = { ...ReactIconsFa, ...ReactIconsBs }
	const iconNames = Object.keys(allIcons)

	const {
		likedColor, setLikedColor,
		companyName, setCompanyName,
		sloganName, setSloganName,
		selectParameters, setSelectParameters
	} = useEditContext()

	const selectedColor = (name) => {
		if (likedColor.includes(name)) {
			const filteredLikes = likedColor.filter((item) => item !== name)
			setLikedColor(filteredLikes)
		} else {
			setLikedColor([...likedColor, name])
		}
	}
	const editTransition = (background, direction, nameIcon, name_text_color, name_font_types, slogan_font_types, slogan_text_color, symbol_color) => {
		setSelectParameters({ background, direction, nameIcon, name_text_color, name_font_types, slogan_font_types, slogan_text_color, symbol_color })
		localStorage.setItem('selectedTemplate', JSON.stringify({
			background, direction,
			nameIcon, name_text_color,
			name_font_types, slogan_font_types,
			slogan_text_color, symbol_color
		}))
		navigate('/editor')
	}
	return (
		<div className='flex flex-col items-center gap-y-10'>
			<div className='flex justify-center gap-x-3'>
				<input
					className='h-[35px] w-[180px] rounded-xl border-slate-300'
					type="text"
					placeholder='Company Name'
					defaultValue={companyName}
				/>
				<input
					className='h-[35px] w-[180px] rounded-xl border-slate-300'
					type="text"
					placeholder='Slogan'
					defaultValue={sloganName}
				/>
				<button onBlur={() => setShowColors(false)} className='relative h-[35px] w-[60px] border-[1px] border-slate-300 rounded-xl flex items-center justify-center'>
					<div onClick={() => setShowColors(!showColors)} className='flex items-center gap-1'>
						<img className='w-[18px]' src={Colors} />
						<MdKeyboardArrowDown />
					</div>
					<p className='w-[18px] h-[18px] rounded-xl bg-neutral-900 text-white  absolute bottom-6 right-1 text-xs border-2'>{likedColor.length}</p>
					{showColors ?
						<div className='w-[100px] h-[100px] border-2  bg-white absolute top-10 rounded-xl border-slate-200 flex flex-wrap gap-2 justify-center items-center'>
							{ColorList.map((el) => {
								return (
									<div
										key={el.id}
										onClick={() => selectedColor(el.name)}
										className='w-[23px] h-[23px] rounded-md flex justify-center items-center'
										style={{ backgroundColor: `${el.color}` }}
									>
										{likedColor.includes(el.name) ? <CgCheck size={25} color='white' /> : null}
									</div>
								)
							})
							}

						</div>
						: null
					}
				</button>
				<button className='text-xs h-[35px] w-[120px] border-[1px] border-slate-300 rounded-xl flex justify-center items-center gap-2'>
					<p>Symbols</p>
					<MdKeyboardArrowDown />
				</button>
				<button
					className='text-xs h-[35px] w-[120px] border-[1px] border-slate-300 rounded-xl flex justify-center items-center gap-2'
				>
					<FaRepeat />
					<p>Upgrate</p>
				</button>
			</div>
			<div className='w-7/12'>
				<p className='pb-4 text-3xl font-extrabold '>Pick a logo to customize</p>
				<p className=' text-xl text-slate-500 '>Click a design to preview and see different versions</p>
			</div>
			<div className='w-7/12 flex gap-x-5'>
				{EditInformation.map((template) => {
					const randomIndex = Math.floor(Math.random() * iconNames.length)
					const name = iconNames[randomIndex]
					const IconComponent = allIcons[name]
					return (
						<div
							onClick={() => editTransition(template.background_color, template.flex_direction, name, template.name_text_color, template.name_font_types, template.slogan_font_types, template.slogan_text_color)}
							key={template.id}
							className='border-2 w-[240px] h-[180px] rounded-xl flex justify-center items-center gap-2'
							style={{
								background: `${template.background_color}`,
								flexDirection: `${template.flex_direction}`
							}}
						>
							<p
								className='italic font-[cursive] uppercase text-[16px]'
								style={{
									color: `${template.name_text_color}`,
									fontFamily: `${template.name_font_types}`
								}}
							>
								{companyName}
							</p>
							<IconComponent color={template.symbol_color} size={50} />
							<p
								style={{
									color: `${template.slogan_text_color}`,
									fontFamily: `${template.slogan_font_types}`
								}}
							>
								{sloganName}
							</p>
						</div>
					)
				})}

			</div>
		</div>
	)
}

export default Explore