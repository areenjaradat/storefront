import { connect } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core/';
import Modal from '@material-ui/core/Modal';
import {  Switch,Route } from 'react-router-dom';
import { increment, getRemoteData } from '../store/actions';
import React,{ useEffect } from 'react';
import {  productDetailPage } from '../store/products-reducer';
import productDetail from './product-detail';
const api = 'https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa';

const useStyles = makeStyles((theme) => ({
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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    overflowY: 'scroll'
},
paper: {
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
},
img: {
  width: '50%'
}
}));

const Products = (props) => {
  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = React.useState({});
  const classes = useStyles();
  const handleOpen = (b) => {
    setDetail(b)
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};
  useEffect(() => {
    console.log(' products component', api);
    props.getRemoteData(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.products.display.length > 0
          ? props.products.display.map((product) => {
              return (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.url}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography>Price: ${product.price}</Typography>
                      <Typography>
                        {product.inStock > 0
                          ? `In stock, ${product.inStock} items left`
                          : 'Out of Stock'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => props.increment(product)}
                        disabled={product.inStock > 0 ? false : true}
                      >
                        ADD TO CART
                      </Button>
                   
                      <Button onClick={() => handleOpen(product)} size="small" color="primary">
                        VIEW DETAILS
                      </Button>
                    
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          : props.products.products.map((product) => {
              return (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.url}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography>Price: ${product.price}</Typography>
                      <Typography>
                        {product.inStock > 0
                          ? `In stock, ${product.inStock} items left`
                          : 'Out of Stock'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => props.increment(product)}
                        disabled={product.inStock > 0 ? false : true}
                      >
                        ADD TO CART
                      </Button>
                    
                    
                      <Button onClick={() => handleOpen(product)} size="small" color="primary">
                        VIEW DETAILS
                      </Button>
                    
                    
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
  className={classes.modal}
>
<div  className={classes.paper}>
                            {/* <img src={detail.image} className={classes.img} /> */}
                            <CardMedia
                      className={classes.cardMedia}
                      image={detail.url}
                      title="Image title"
                     
                    />
                            <h2 id="transition-modal-title">{detail.category}</h2>
                            <p id="transition-modal-description">name:  {detail.name} </p>
                            <p id="transition-modal-description">inStock:  {detail.inStock} </p>
                            <p id="transition-modal-description">Price: {detail.price}$ and there are {detail.inStock} items in the store</p>
                            
                        </div>
</Modal>
    </Container>
  );
};

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { increment, getRemoteData ,productDetailPage };
export default connect(mapStateToProps, mapDispatchToProps)(Products);


// _id: product._id,
// name: product.name,
// url: product.url,
// category: product.category,
// price: product.price,
// inStock: product.inStock ,
// count: product.count ,
