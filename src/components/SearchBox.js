import React from 'react'

export const SearchBox = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (
		<section className='filter'>
			<input
				type='text'
				placeholder='Character Name'
				name='Search'
				onChange={handleInput}
				value={filter}
			/>
		</section>
	)
}