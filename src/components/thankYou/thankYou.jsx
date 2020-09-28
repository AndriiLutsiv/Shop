import React from 'react';
import svg from '../../assets/svg.png';
import Button from '../../button';
import classes from './thankYou.module.css';
const ThankYou = (props) => {
    const bringToShop = () => {
        props.history.replace('/')
    }
    return <div className={classes.ThankYou}>
        <h2 className={classes.Title}>Thank You for order!</h2>
        <h2 className={classes.Title}>We will reach you to confirm it!</h2>
        <div >
            <img className={classes.Image} src={svg} alt=""/>
        </div>
        <Button onClick={bringToShop} meaning={'Ok'} />
    </div>
}
export default ThankYou;