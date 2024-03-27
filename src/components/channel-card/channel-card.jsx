import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

const ChannelCard = ({ video: channel, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: { xs: "356px", md: "320px" },
                height: "326px",
                margin: "auto",
                marginTop: marginTop,
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <CardMedia
                    image={
                        channel?.snippet?.thumbnails?.high?.url
                            ? channel?.snippet?.thumbnails?.high?.url
                            : "https://picsum.photos/512"
                    }
                    alt={channel?.snippet?.title}
                    sx={{
                        borderRadius: "50%",
                        height: "180px",
                        width: "180px",
                        mb: 2,
                        border: "1px solid #e3e3e3",
                    }}
                />
                <Typography variant="h6">
                    {channel?.snippet?.title}{" "}
                    <CheckCircle
                        sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                    />
                </Typography>
                {channel?.statistics?.subscriberCount && (
                    <Typography
                        sx={{
                            fontSize: "15px",
                            fontWeight: 500,
                            color: "gray",
                        }}
                    >
                        {parseInt(
                            channel?.statistics?.subscriberCount,
                        ).toLocaleString("en-US")}{" "}
                        Subscribers
                    </Typography>
                )}
            </CardContent>
        </Box>
    );
};

export default ChannelCard;
