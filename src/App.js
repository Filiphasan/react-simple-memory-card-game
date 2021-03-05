import React, { Component } from 'react'
import logo from './icons8_flip_vertical.svg'
import './App.css'
import Card from './Card';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['c_sharp', 'c_plus', 'flutter', 'java', 'javascript', 'python', 'ruby', 'swift'],
      dublicatedItems: [],
      randomizedItems: [],
      finalizedItems: [],
      openedItems: []
    }
    this.start();
  }
  
  handleClick(name, index) {
    if (this.state.openedItems.length == 2) {
      setTimeout(() => {
        this.check();
      }, 750);
    } else {
      let item = {
        name,
        index
      }
      let finalizedItems = this.state.finalizedItems;
      let items = this.state.openedItems;
      finalizedItems[index].close = false;
      items.push(item);
      this.setState({
        openedItems: items,
        finalizedItems: finalizedItems
      });
      if (this.state.openedItems.length == 2) {
        setTimeout(() => {
          this.check();
        }, 750);
      }
    }
  }
  check() {
    let finalizedItems = this.state.finalizedItems;
    if ((this.state.openedItems[0].name === this.state.openedItems[1].name) && (this.state.openedItems[0].index != this.state.openedItems[1].index)) {
      finalizedItems[this.state.openedItems[0].index].complete = true;
      finalizedItems[this.state.openedItems[1].index].complete = true;
    } else {
      finalizedItems[this.state.openedItems[0].index].close = true;
      finalizedItems[this.state.openedItems[1].index].close = true;
    }
    this.setState({
      finalizedItems,
      openedItems: []
    });
  }
  start() {
    let finalizedItems = [];
    this.state.dublicatedItems = this.state.items.concat(this.state.items);
    this.state.randomizedItems = this.shuffle(this.state.dublicatedItems);
    this.state.randomizedItems.map((name, index) => {
      finalizedItems.push({
        name,
        close: true,
        complete: false,
        fail: false
      })
    });
    this.state.finalizedItems=finalizedItems;
  }
  shuffle(arr) {
    let currentIndex = arr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return arr;
  }
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="logo-text">Memory Card Game</h1>
        </header>
        <section className="play-ground">
          {
            this.state.finalizedItems.map((item, index) => {
              return <Card item={item.name} click={() => { this.handleClick(item.name, index) }} close={item.close} complete={item.complete} /> 
            })
          }
        </section>
      </div>
    )
  }
}

export default App;

