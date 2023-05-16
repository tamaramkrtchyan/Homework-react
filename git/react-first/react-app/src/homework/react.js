import React, {Component } from 'react';
import './style.css';

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      products: []
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price } = this.state;
    if (name.trim() && price.trim()) {
      this.setState({
        products: [...this.state.products, { name, price }],
        name: '',
        price: ''
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, price, products } = this.state;
    return (
      <div>
        <div className='main-block'>
          <form className='main-form' onSubmit={this.handleSubmit}>
              <div className='first-inp-block'>
              <input className='first-input' placeholder='Name' type="text" name="name" value={name} onChange={this.handleChange} />
              </div>
            
              <div className='second-inp-block'>
              <input className='first-input' placeholder='Price' type="text" name="price" value={price} onChange={this.handleChange} />
              </div>
            <button type="submit">Add Product</button>
          </form>
        </div>
        {products.length ? (
          <ul>
            {products.map(({ name, price }, index) => (
              <li key={index}>
                {name} - {price}֏
              </li>
            ))}
          </ul>
        ) : (
          <p>No products added yet.</p>
        )}
      </div>
    );
  }
}

export default Element;