import { Container, Typography } from '@material-ui/core';
import Carousel from '../Carousel/Carousel';
import { useStyles } from './styles';

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: 'Montserrat',
            }}
          >
            Crypto Hunter
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color: 'darkgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
            }}
          >
            Get all the Infor Regarding your favorite Crypto
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
