import { Card, Grid, Image, Text } from '@mantine/core';
import './App.css';
import { movies } from './data';

const posterUrl = 'https://image.tmdb.org/t/p/original';

function App() {
  return (
    <>
      <Grid gutter={0}>
        {movies.map((items) => {
          return (
            <Grid.Col xs={12} sm={6} md={4} lg={3} key={items.id}>
              <Card radius='md'>
                <Image src={posterUrl + items.poster_path} />
                <Text color='dimmed' size='xs' transform='uppercase' weight={700} mt='md'>
                  {items.release_date}
                </Text>
                <Text mt={5}>{items.title}</Text>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
}

export default App;
