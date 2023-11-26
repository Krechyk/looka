import React from 'react'

const EditorOptionsButton = ({ names, selected, onSelect }) => {
	return (
		<div className='mx-5 bg-gray-200 rounded-xl h-[30px] text-xs flex items-center justify-center whitespace-nowrap gap-x-[1px] px-[1px]'>
			{
				names.map((el) => (
					<div
						key={el}
						className={el === selected
							? 'py-[5px] px-[4px] w-full rounded-lg bg-white cursor-pointer flex justify-center'
							: 'cursor-pointer px-[4px] py-[5px] rounded-lg w-full flex justify-center'}
						onClick={() => onSelect(el)}
					>
						{el}
					</div>
				))
			}
		</div>
	)
}

export default EditorOptionsButton