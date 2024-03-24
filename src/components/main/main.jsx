import { Box, Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { colors } from "../../constants/colors"
import { Videos, Category } from '../'
import { ApiService } from '../../service/api.service'

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandler = category => setSelectedCategory(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`);
        console.log(data);
        setVideos(data);
      } catch (err) {
        console.log(err);
      }

    }
    getData();

    // ApiService.fetching("search").then(data => setVideos(data))
  }, [selectedCategory])

  return (
        <Stack>
          <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} />
          <Box p={2} sx={{ height: "90vh" }}>
            <Container maxWidth={"90%"}>
              <Typography variant='h4' fontWeight={'bold'} mb={2}>
                {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
              </Typography>
              <Videos videos={videos} />
            </Container>
          </Box>
        </Stack>
  )
}

export default Main