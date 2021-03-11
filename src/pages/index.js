import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Layout from '../pages/components/Layout';
import VideoCard from '../pages/components/VideoCard';
import { getVideos } from '../database/getvideos';

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getVideos();
  console.log(data);
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
    revalidate: 15, // In seconds
  };
}
export default Home;
