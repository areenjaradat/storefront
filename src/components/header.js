import {
    AppBar,
    Typography,
    Toolbar,
    Link,
    Grid,
    Box,
  } from '@material-ui/core/';
  import { connect } from 'react-redux';
  import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
  
  function Header(props) {
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
            <Box
              display="flex"
              width={120}
              height={50}
              bgcolor="lightpink"
              alignItems="center"
              justifyContent="center"
              justify="center"
              
            >
              <ShoppingCartOutlinedIcon />
              <Typography variant="h6" gutterBottom mx={3}>
                cart ({props.products.count})
              </Typography>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
  
  const mapStateToProps = (state) => ({ products: state.products });

  export default connect(mapStateToProps)(Header);