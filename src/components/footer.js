import { Typography, Link, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: '#FFFFFFB3',
    backgroundColor: '#424242',
    padding: theme.spacing(5),
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" color="inherit" align="center" gutterBottom>
        Your favorite destination for online shopping.
      </Typography>
      <Typography
        align="center"
        color="inherit"
      >
        <Link color="inherit" href="mailto:storefront@codefellows.com">storefront@codefellows.com</Link>
      </Typography>
    </footer>
  );
}

export default Footer;