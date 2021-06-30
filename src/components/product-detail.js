import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { increment } from '../store/actions';
import { Card,Grid,FormControl,CardActions,CardContent,CardMedia,Button,Typography,Paper }from '@material-ui/core';
// import './style/product-detail.scss';
// import Modal from './modal.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 900,
    display: 'flex',
    flexDirection: 'row',
    margin: 50,
  },
  formControl: {
    flexDirection: 'column',
    marginTop: '150px',
    minWidth: 120,
  },
  paper: {
    height: 900,
    width: 900,
  },
  media: {
    height: 600,
    width: 600,
    paddingTop: 15,
  },
}));

const ProductDetails = (props) => {

 

  const classes = useStyles();
  let item = props.activeItem[0];

console.log('propas',props)
//   return (

//     <div className='root'
//     >
//       <Paper variant="outlined" />
//       <Card className={classes.root} >
//         <Grid
//           className={classes.root}
//         >
//           <CardMedia
//             className={classes.media}
//             image={item.image}
//             title={item.name}
//             component="img"
//           />
//           <Grid>

//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {item.name.toUpperCase()}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">{item.description}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">{item.price}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">In-stock: {item.inventory}
//               </Typography>
//             </CardContent>
//             <CardActions>
//             <Button
//                         size="small"
//                         color="primary"
//                         onClick={() => props.increment(product)}
//                         disabled={product.inStock > 0 ? false : true}
//                       >
//                         ADD TO CART
//                       </Button>
//               <FormControl className={classes.formControl}>
//               </FormControl>
//             </CardActions>
//           </Grid>
//         </Grid>
//       </Card>

//     </div>
//   )
}


// // const mapStateToProps = state => ({
// //   cartReducer: state.cartReducer,
// //   activeItem: state.productReducer.activeItem
// })

// const mapDispatchToProps = dispatch => ({
//   addItem: (item) => dispatch(addItem(item)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

const mapStateToProps = (state) => ({ products: state.products });
// const mapDispatchToProps = { increment, getRemoteData };
export default connect(mapStateToProps)(ProductDetails);