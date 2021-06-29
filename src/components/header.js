import { AppBar, Typography, Toolbar, Link, Grid } from '@material-ui/core/';
import SimpleCart from './cart';

function Header() {
  return (
    <AppBar position="relative" color="secondary">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h5" color="inherit" noWrap>
            <Link color="inherit" href="/">
              OUR STORE
            </Link>
          </Typography>
          <SimpleCart />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
