import React from 'react';

const Form = (props) => {
    const { menu,formHandler } = props
    const onChange = (e) => {
        const { name, value,checked,type } = e.target;
        const valueToUse = type === "checkbox"? checked: value;
        formHandler(name,valueToUse);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <div><h2>Build Your Own Pizza</h2></div>
            <div>
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="pizza" />
            </div>
            <div>
                <h3>Build Your Own Pizza</h3>
                <form onSubmit={onSubmit} id='pizza-form'>
                   <div>
                    <label>Name
                    <input id='name-input' type='text' name='name' onChange={onChange}/>
                    </label>
                   </div>
                    <div>
                        <h4>Choice of Size</h4>
                        <p>Required</p>
                    </div>
                    <div>
                        <select onChange={onChange} name='size' id='size-dropdown'>
                            {menu.size.map((size, idx) => {
                                return (<option key={idx} value={size.value}  >{size.label}</option>)
                            })}
                        </select>
                    </div>
                    <div>
                        <h4>Choice of Sauce</h4>
                        <p>Required</p>
                    </div>
                    <div>
                        {menu.sauces.map((sauce, idx) => {
                            return (
                                <div key={idx}>
                                    <input onChange={onChange} type='radio' value={sauce.value} name={sauce.name} />{sauce.label}
                                </div>)
                        })}
                    </div>
                    <div>
                        <h4>Add Toppings</h4>
                        <p>Choose up to 10</p>
                    </div>
                    <div>
                        {menu.toppings.map((topping, idx) => {
                            return (
                                <label key={idx}>
                                    <input type='checkbox' onChange={onChange} value={topping.value} name={topping.value}/>{topping.label}
                                </label>
                            )
                        })}
                    </div>
                    <div>
                        <label>Special instructions
                            <input id='special-text' type='text' name='specialInstructions' onChange={onChange}/>
                        </label>
                    </div>
                    <input type='submit' value='Submit Pizza'/>
                </form>
            </div>
        </div>
    )
}

export default Form;