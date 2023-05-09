import React, { Component } from 'react';

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 50,
      currency: 'RUB'
    };
  }

  handleCurrencyChange = () => {
    const { price, currency } = this.state;
    if (currency === 'RUB') {
      this.setState({
        price: price * 5,
        currency: 'AMD'
      });
    } else {
      this.setState({
        price: price / 5,
        currency: 'RUB'
      });
    }
  }

  render() {
    const { price, currency } = this.state;
    return (
      <div>
        <p>name:book, price: 50դրամ {price} {currency}</p>
        <button onClick={this.handleCurrencyChange}>Change Currency</button>
      </div>
    );
  }
}

export default Currency;
