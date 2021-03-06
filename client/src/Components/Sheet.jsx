import React from 'react';
import styled from 'styled-components';

const SheetDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px black;
  height: auto;
  overflow: hidden;
  min-height: 275px;
  max-width: 88%;
  max-height: 100%;
  font-family: Baskerville, Verdana;
`

const SheetInput = styled.input`
  border: hidden;
`

const BioDiv = styled.div`
  border: 1px solid black;
  padding: 4px;
`

const Banner = styled.img`
  height: 60%;
  width: 60%;
`

const AttributesDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 4px;
`

const AttributesLabel = styled.label`
  display: inline;
  margin: 10px;
  padding: 4px;
`

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`

const DDButton = styled.button`
  align-self: center;
  width: auto;
`

class Sheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: this.props.selectedCharacter
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
    console.log(this.state[event.target.id]);
  }

  submitForm() {
    let updateInfo = {_id: this.props.character._id || null }
    for (key of this.state) {
      updateInfo[key] = this.state[key];
    }
    this.props.updateCharacter(updateInfo, () => {});
  }

  render() {
    if (!this.props.character) {
      return ( <div></div> )
    } else {
    return (
      <SheetDiv>
        <Banner src="./logo.svg"></Banner>
        <h2>Character</h2>
          <BioDiv>
            <label>Name: </label>
            <SheetInput type="text" id="name" value={this.state.name || this.props.character.name} onChange={this.handleChange}></SheetInput>
            <label>Class and Level: </label>
            <SheetInput type="text" id="classAndLevel" value={this.state.classAndLevel || this.props.character.classAndLevel} onChange={this.handleChange}></SheetInput>
            <label>Background: </label>
            <SheetInput type="text" id="background" value={this.state.background || this.props.character.background} onChange={this.handleChange}></SheetInput>
            <label>Player Name: </label>
            <SheetInput type="text" id="playerName" value={this.state.playerName || this.props.character.playerName} onChange={this.handleChange}></SheetInput>
            <label>Race: </label>
            <SheetInput type="text" id="race" value={this.state.race || this.props.character.race} onChange={this.handleChange}></SheetInput>
            <label>Alignment: </label>
            <SheetInput type="text" id="alignment" value={this.state.alignment || this.props.character.alignment} onChange={this.handleChange}></SheetInput>
          </BioDiv>
          <AttributesDiv>
            <label>Strength: </label>
            <SheetInput type="text" id="strength" value={this.state.strength || this.props.character.attributes.strength.value} onChange={this.handleChange}></SheetInput>
            <label>Dexterity: </label>
            <SheetInput type="text" id="dexterity" value={this.state.dexterity || this.props.character.attributes.dexterity.value} onChange={this.handleChange}></SheetInput>
            <label>Constitution: </label>
            <SheetInput type="text" id="constitution" value={this.state.constitution || this.props.character.attributes.constitution.value} onChange={this.handleChange}></SheetInput>
            <label>Intelligence: </label>
            <SheetInput type="text" id="intelligence" value={this.state.intelligence || this.props.character.attributes.intelligence.value} onChange={this.handleChange}></SheetInput>
            <label>Wisdom: </label>
            <SheetInput type="text" id="wisdom" value={this.state.wisdom || this.props.character.attributes.wisdom.value} onChange={this.handleChange}></SheetInput>
            <label>Charisma: </label>
            <SheetInput type="text" id="charisma" value={this.state.charisma || this.props.character.attributes.charisma.value} onChange={this.handleChange}></SheetInput>
          </AttributesDiv>
          <ButtonBar>
            <DDButton onClick={this.submitForm}>Save</DDButton>
            <DDButton onClick={this.selectCharacter}>Previous</DDButton>
            <DDButton onClick={this.selectCharacter}>Next</DDButton>
          </ButtonBar>
      </SheetDiv>
    )};
  }
}

export default Sheet;