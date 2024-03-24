import { Box, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard } from '..'

const Videos = ({ videos }) => {
  return (
    <Stack
        width={"100%"}
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}>
        {videos.map(video => (
            <Box key={video.id.videoId}>
                {video.id.videoId && <VideoCard video={video} />}
                {video.id.channelId && <ChannelCard video={video} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos