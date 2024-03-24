import { Button, Stack } from '@mui/material'
import React from 'react'
import { category } from '../../constants'
import { colors } from '../../constants/colors'

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }} className='category-items-list'>
        {category.map(item => (
            <button
            key={item.name}
            className='category-btn'
            style={{
                borderRadius: "none",
                backgroundColor: selectedCategory === item.name && colors.secondary,
                color: selectedCategory === item.name && "#ffffff"
                }}
            onClick={() => selectedCategoryHandler(item.name)}>
                <span style={{
                    color: colors.secondary,
                    marginRight: "15px", color: selectedCategory === item.name && "#ffffff"
                    }}>{item.icon}</span>
                <span style={{ opacity: "1", color: selectedCategory === item.name && "#ffffff" }}>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Category