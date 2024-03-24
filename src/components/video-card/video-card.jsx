import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { colors } from "../../constants/colors"
import moment from "moment"
import { CheckCircle } from "@mui/icons-material"

const VideoCard = ({ video }) => {
  return (
    <Card sx={{
      width: "320px",
      boxShadow: "none",
      borderRadius: "none"
    }}
    title={video?.snippet?.title}>
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{
          width: "360px",
          height: "160px"
        }}
      />
      <CardContent sx={{
        background: colors.primary,
        height: "200px",
        position: "relative"
      }}>
        <>
          <Typography my={"5px"}>
          {moment(video?.snippet?.publishedAt).fromNow()}
        </Typography>
        <Typography variant="subtitle1" sx={{fontWeight: "bold"}}>
          {video?.snippet?.title?.slice(0, 47) + "..."}
        </Typography>
        <Typography title={video?.snippet?.description} variant="subtitle2">
          {video?.snippet?.description?.slice(0, 67) + "..."}
        </Typography>
        </>
        <>
          <Stack direction={"row"} position={"absolute"} bottom={"10px"} alignItems={"center"} gap={"5px"}>
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={"green"} alignItems={"center"}>
              {video?.snippet?.channelTitle}
              <CheckCircle sx={{
                fontSize: "14px",
                color: "gray",
                ml: "5px"
              }}  />
            </Typography>
          </Stack>
        </>
      </CardContent>
    </Card>
  )
}

export default VideoCard