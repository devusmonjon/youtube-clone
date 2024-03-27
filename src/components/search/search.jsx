import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Container, Typography } from "@mui/material";
import Videos from "../videos/videos";
import { colors } from "../../constants/colors";

const Search = () => {
    const [videos, setVideos] = useState([]);
    const { query } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(
                    `search?part=snippet&q=${query}`,
                );
                console.log(data);
                setVideos(data);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, [query]);

    // console.log(videos);

    return (
        <Box p={2} sx={{ height: "90vh" }}>
            <Container maxWidth={"90%"}>
                <Typography variant="h4" fontWeight={"bold"} mb={2}>
                    Search results for{" "}
                    <span style={{ color: colors.secondary }}>{query}</span>{" "}
                    videos
                </Typography>
                <Videos videos={videos} />
            </Container>
        </Box>
    );
};

export default Search;
