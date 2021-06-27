import { Typography, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: '#FFFFFFB3',
    backgroundColor: '#424242',
    padding: theme.spacing(5),
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" color="inherit" align="center" gutterBottom>
        Your favorite destination for online shopping.
      </Typography>
     
    </footer>
  );
}

export default Footer;