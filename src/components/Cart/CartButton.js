import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/uiSlice";

const CartButton = (props) => {
	const totalCartCount = useSelector(state => state.cart.totalQuantity)
	const dispatch = useDispatch()
	const showCartHandler = () => {
		dispatch(uiActions.toggle())
	}
	return (
		<button className={classes.button} onClick={showCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalCartCount}</span>
		</button>
	);
};

export default CartButton;
