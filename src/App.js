import './App.css';
import logoImage from './images/download.png'
import Home1 from './Home1';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavActive: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollThreshold = 100; // Adjust this value as needed
    if (window.scrollY > scrollThreshold) {
      this.setState({ isMenuVisible: false });
    } else {
      this.setState({ isMenuVisible: true });
    }
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isNavActive: !prevState.isNavActive
    }));
  };


  render() {
    const { isNavActive } = this.state;

    return (
      <div className="App">
        <nav className={`navbar ${isNavActive ? "active" : ""}`}>
          <div className="logo">
            <img src="https://images-platform.99static.com/Qh6T3lVx3T4U-x6Hl4QqtQsApHg=/198x198:1782x1782/500x500/top/smart/99designs-contests-attachments/95/95943/attachment_95943957" className="img1" alt="Logo" />
          </div>
          <ul className={`nav-links ${isNavActive ? "active" : ""}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">NFT</a></li>
            <li><a href="#">Earn</a></li>
            <li><a href="#">Buy</a></li>
            <li><a href="#">Reffrals</a></li>
            <li><a href="#">Ecosystem</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <li className="bx1"><a href="#">Trade</a></li>
          <li className='wallet'>
          
            <img src='https://zomi.finance/static/media/ic_wallet_24.a19a6758.svg' className="img2" alt="Wallet" />
            <a href="#">Connect Wallet</a>
          </li>
          <div className='btn2'>
            <button className='btn3'>
              <img className="network-dropdown-icon" src="https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg" alt="Ethereum" />
            </button>
          </div>
          <button className={`menu-button ${isNavActive ? "active" : ""}`} onClick={this.toggleNav}>
            <span className="menu-icon"></span>
          </button>
        </nav>
        <Home1 />
      </div>
    );
  }
}

export default App;
