import ProductItem from './ProductItem';
import classes from './Products.module.css';
const dummyProducts=[
    {id:0, price: 2 , title:'products1' , description:'amazing prod 1'},
    {id:1, price: 5 , title:'products2' , description:'amazing prod 2'},
    {id:2, price: 10 , title:'products3' , description:'amazing prod 3'},
    {id:3, price: 15 , title:'products4' , description:'amazing prod 4'}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {dummyProducts.map(p=>
              <ProductItem
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  description={p.description}
              />
          )}

      </ul>
    </section>
  );
};

export default Products;
