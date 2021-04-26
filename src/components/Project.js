import React from 'react';
// import '../assets/burger.png';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  
}));

const cards = [{
  key: 1,
  image: "/assets/burger.png",
  title: "Burger App",
  description: "add something",
  gitHubRepo: "https://github.com/HectorDiazJr/Burger-Logger",
  liveLink: "https://evening-sands-49940.herokuapp.com/"
}];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Hector Diaz Jr
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Thank you for joining me on my full stack development journey. Below are some of the projects I have been a part of. Enjoy, and thank you for looking! 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    My GitHub
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    My LinkedIn
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* use forEach instead of map */}
            {/* {cards.map((card) => ( */}
              <Grid item key={''} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={cards[0].image}
                    title={cards[0].title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Burger App
                    </Typography>
                    <Typography>
                      Describe the app here.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" gitHubRepo={cards[0].gitHubRepo}>
                      View Repo
                    </Button>
                    <Button size="small" color="primary" liveLink={cards[0].liveLink}>
                      Go to App
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            {/* ))} */}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
