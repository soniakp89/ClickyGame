import React, {Component} from 'react';
import Card from './components/Card';
import Wrapper from '.components/Wrapper';
import Title from './card.json';
import "./App.css";

class App extends Component {
  // Setting this.state.card to the cards json array
  state = {
    Card
  };

  removeCard = id => {
    const card = this.state.card.filter(card => card.id !== id);
    this.setState({ card });
  };

  // Map over this.state.card
  render() {
    return (
      <Wrapper>
        <Title>Character List</Title>
        {this.state.card.map(card => (
          <Card
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
