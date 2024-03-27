import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard, Loader } from "..";

const Videos = ({ videos }) => {
    if (!videos.length) return <Loader />;
    return (
        <Stack
            width={"100%"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
        >
            {videos.map((video, id) => (
                <Box key={id}>
                    {video.id.videoId && <VideoCard video={video} />}
                    {video.id.channelId && <ChannelCard video={video} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
