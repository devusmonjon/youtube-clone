import {
    Avatar,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
    return (
        <Card
            sx={{
                width: {
                    xs: "100%",
                    sm: "360px",
                    md: "320px",
                },
                boxShadow: "none",
                borderRadius: "none",
            }}
            title={video?.snippet?.title}
        >
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={
                        video?.snippet?.thumbnails?.high?.url
                            ? video?.snippet?.thumbnails?.high?.url
                            : "https://picsum.photos/400"
                    }
                    alt={video?.snippet?.title}
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "360px",
                            md: "320px",
                        },
                        height: "160px",
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    background: colors.primary,
                    height: "200px",
                    position: "relative",
                }}
            >
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={"5px"}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        {video?.snippet?.title?.slice(0, 47) + "..."}
                    </Typography>
                    <Typography
                        title={video?.snippet?.description}
                        variant="subtitle2"
                    >
                        {video?.snippet?.description?.slice(0, 67) + "..."}
                    </Typography>
                </Link>
                <Link to={`/channel/${video.snippet.channelId}`}>
                    <Stack
                        direction={"row"}
                        position={"absolute"}
                        bottom={"10px"}
                        alignItems={"center"}
                        gap={"5px"}
                    >
                        <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                        <Typography
                            variant="subtitle2"
                            color={"green"}
                            alignItems={"center"}
                        >
                            {video?.snippet?.channelTitle}
                            <CheckCircle
                                sx={{
                                    fontSize: "14px",
                                    color: "gray",
                                    ml: "5px",
                                }}
                            />
                        </Typography>
                    </Stack>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
