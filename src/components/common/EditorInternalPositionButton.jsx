import React from 'react'

const EditorInternalPositionButton = ({ iconNames, onSelect, selectedVertical, selectedHorizontal }) => {
	return (
		<div className=' bg-gray-100 rounded-md h-[30px] text-xs flex items-center justify-center whitespace-nowrap gap-x-[1px] px-[1px]'>
			{
				iconNames.map((el, index) => (
					<div
						key={index}
						className={index === 0 && selectedHorizontal || index === 1 && selectedVertical
							? 'py-[5px] px-[6px] w-full rounded-md bg-gray-200 cursor-pointer flex justify-center'
							: 'cursor-pointer px-[6px] py-[5px] rounded-md w-full flex justify-center'}
						onClick={() => onSelect(index)}
					>
						{el}
					</div>
				))
			}
		</div>
	)
}

export default EditorInternalPositionButton