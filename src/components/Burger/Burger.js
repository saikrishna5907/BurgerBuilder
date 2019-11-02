import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //tranforming an object to the keys array
    let transformedIngredients = Object.keys(props.ingredients)
    //mapping each key which is for example salas, meat, bacon    
    .map(igKey => {
        //returning the array of any value with the length
        //  of the number of quantity each ingredients selected
        // for example if salad: 2 then array of length 2 is created and returned 
        //then it maps the each value of newly created array 
        // and then return the BurgerIngredient component 
        // with type equals the igKey for ex: salad
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key = {igKey+i} type = {igKey}/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients</p>
        }
    return (
        <div className ={classes.Burger}>
            <BurgerIngredient type= "bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type= "bread-bottom"/>

        </div>
    );
}
export default burger;