import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Form from "./Form";

const menu = {
  size: [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'X-Large' }
  ],
  sauces: [
    { value: 'orginalRed', label: 'Orginal Red',name:'sauce' },
    { value: 'garlicRanch', label: 'Garlic Ranch',name:'sauce' },
    { value: 'bbqSauce', label: 'BBQ Sauce',name:'sauce' },
    { value: 'spinachAlfredo', label: 'Spinach Alfredo',name:'sauce' },
  ],
  toppings:[
    {value:'pepperoni',label:'Pepperoni'},
    {value:'sausage',label:'Sausage'},
    {value:'canadianBacon',label:'Canadian Bacon'},
    {value:'spicyItalianSausage',label:'Spicy Italian Sausage'},
    {value:'grilledChicken',label:'Grilled Chicken'},
    {value:'onion',label:'Onion'},
    {value:'greenPepper',label:'Green Pepper'},
    {value:'dicedTomatos',label:'Diced Tomatos'},
    {value:'blackOlives',label:'Black Olives'},
    {value:'roastedGarlic',label:'Roasted Garlic'},
    {value:'artichokeHearts',label:'Artichoke Hearts'},
    {value:'threeCheese',label:'Three Cheese'},
    {value:'pineapple',label:'Pineapple'},
    {value:'extraCheese',label:'Extra Cheese'},
  ]
}
const App = () => {
  const [pizzaMenu, setMenu] = useState(menu);
  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link  to='/'>Home</Link>
        <Link id="order-pizza" to='/pizza'>Order</Link>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Form menu={pizzaMenu} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
