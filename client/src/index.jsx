import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Sheet from './components/Sheet.jsx';

const HomeGalleryDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  height: 500px;
  overflow: hidden;
  min-height: 275px;
  max-width: 100%;
  max-height: 100%;
`;

const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  max-width: 100%;
  margin: auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null,
    };

    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.selectCharacter = this.selectCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
    console.log(demo);
  }

  getCharacters(callback) {
    axios.get('/api/characters').then((response) => {
      this.setState({ characters: response.data });
      if (response.data.length > 0) {
        this.setState({ currentCharacter: response.data[0] });
      }
      callback();
    });
  }

  updateCharacter(characterInfo, callback) {
    axios.put(`/api/characters/${characterInfo._id}`).then((response) => {
      // this.setState({ characters: response.data });
      console.log(response.data);
      callback();
    });
  }

  deleteCharacter(id, callback) {
    axios.delete(`/api/characters/${id}`).then((response) => {
      this.setState({ photos: response.data });
    });
  }

  selectCharacter(index) {
    this.setState({ selectedCharacter: this.state.characters[index] });
  }

  render() {
    return (
      <BackgroundDiv>
        <Sheet character={this.state.currentCharacter}
        characters={this.state.characters}
        deleteCharacter={this.deleteCharacter}
        selectCharacter={this.selectCharacter}
        updateCharacter={this.updateCharacter}
        />
      </BackgroundDiv>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
