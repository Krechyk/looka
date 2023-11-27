import React from 'react'

const EditorLowercaseButton = ({ names, selected, onSelect }) => {
	return (
		<div className=' bg-gray-100 rounded-md h-[30px] text-xs flex items-center justify-center whitespace-nowrap gap-x-[1px] px-[1px]'>
			{
				names.map((el) => (
					<div
						key={el}
						className={el === selected
							? 'py-[5px] px-[4px] w-full text-blue-600 rounded-md bg-gray-200 cursor-pointer flex justify-center'
							: 'cursor-pointer px-[4px] py-[5px] rounded-md w-full flex justify-center'}
						onClick={() => onSelect(el)}
					>
						{el}
					</div>
				))
			}
		</div>
	)
}

export default EditorLowercaseButton