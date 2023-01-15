import React from 'react';
import './App.css';
const Form = (props) => {
    const { menu, formHandler, submitOrder, disabled } = props
    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const valueToUse = type === "checkbox" ? checked : value;
        formHandler(name, valueToUse);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        submitOrder();
    }

    return (
        <div className='formPage'>
            <div className='formHeader'>
                <h2>Build Your Own Pizza</h2>
            </div>

            <div>
                <form onSubmit={onSubmit} id='pizza-form'>
                    <div>
                        <label>Name
                            <p>{props.errors.name}</p>
                            <input id='name-input' type='text' name='name' onChange={onChange} />
                        </label>
                    </div>
                    <div className='inputRequired'>
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
                    <div className='inputRequired'>
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
                    <div className='inputRequired'>
                        <h4>Add Toppings</h4>
                        <p>Choose up to 10</p>
                    </div>
                    <div className='checkboxes'>
                        {menu.toppings.map((topping, idx) => {
                            return (
                                <label key={idx}>
                                    <input type='checkbox' onChange={onChange} value={topping.value} name={topping.value} />{topping.label}
                                </label>
                            )
                        })}
                    </div>
                    <div className='inputRequired'>
                        <h4>Special instructions</h4>
                    </div>
                    <div>
                        <label>Special instructions
                            <input id='special-text' type='text' name='specialInstructions' onChange={onChange} />
                        </label>
                    </div>
                    <div className='submit'><input id='order-button' disabled={disabled} type='submit' value='Submit Pizza' /></div>
                </form>
            </div>
        </div>
    )
}

export default Form;