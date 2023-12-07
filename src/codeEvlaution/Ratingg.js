import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Rating, Stack } from '@mui/material'
import React from 'react'

function Ratingg() {
    return (
        <div>
            <Stack spacing={2}>
                <Rating precision={0.25} size='large' icon={<Favorite color='error'></Favorite>} emptyIcon={<FavoriteBorder fontSize='inherit'></FavoriteBorder>} highlightSelectedOnly>Give Rating</Rating>
            </Stack>

        </div>
    )
}

export default Ratingg
