import React, { PropTypes as T } from 'react';
import { auth } from '../../../../auth0/auth';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';

import { green500 } from 'material-ui/styles/colors';

import NyanCat from '../assets/nyancat.jpg';
import './SettingsView.scss';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabs: {
    backgroundColor: green500
  },
  radioButton: {
    marginBottom: 16,
    checkedColor: green500,
    requiredColor: green500,
  },
  raisedButton: {
    margin: 12
  }
};

class SettingsView extends React.Component {

  constructor(props) {
    super(props);
    this.landlord = false;
  }

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    isFetching: T.bool,
    isPosting: T.bool,
    settings: T.object,
    fetchSettings: T.func,
    sendSettings: T.func
  }

  componentWillMount() {
    const { fetchSettings } = this.props;
    fetchSettings({ 'user_id': auth.getUserId() }); // fetch settings before rendering
  }

  state = {
    minSlider: 0,
    maxSlider: 5000,
    landlord: 'false',
    smoker: 'false',
    gender: 'all',
    pets: 'false',
  };

  handleLandlord = (event, value) => {
    this.setState({ landlord: value });
  };
  handleSmoker = (event, value) => {
    this.setState({ smoker: value });
  };
  handleGender = (event, value) => {
    this.setState({ gender: value });
  };
  handlePets = (event, value) => {
    this.setState({ pets: value });
  };
  handleMinSlider = (event, value) => {
    this.setState({ minSlider: value });
  };

  handleMaxSlider = (event, value) => {
    this.setState({ maxSlider: value });
  };

  renderSliders() {
    if (this.state.landlord === 'true') {
      return (
        <span>
        <h3>Monthly rent</h3>
        <TextField
        hintText='$$$'
        />
        <br />
        </span>
      );
    } else {
      return (
        <span>
        <h3>What is the minimum price you'd like to pay?</h3>
        <span>{ '$' }</span>
        <span>{ this.state.minSlider }</span>
        <Slider
         min={ 0 }
         max={ 5000 }
         step={ 10 }
         value={ this.state.minSlider } 
         onChange={ this.handleMinSlider }                
        />
        <h3>What is the maximum price you'd like to pay?</h3>
        <span className='alignRight'>
          <span>{ '$' }</span>
          <span>{ this.state.maxSlider }</span>
          <span>{ this.state.maxSlider === 5000 ? ' and up' : '' }</span>
        </span>
        <Slider
         min={ 0 }
         max={ 5000 }
         step={ 10 }
         value={ this.state.maxSlider } 
         onChange={ this.handleMaxSlider }                
        />
        </span>
      );
    }
  }


  render() {
    const { settings, isFetching, isPosting, sendSettings } = this.props;

    console.log('IN SettingsView: settings =', settings);
    console.log('IN SettingsView: isFetching =', isFetching);
    console.log('IN SettingsView: isPosting =', isPosting);

    return (
      <div className='survey-div'>
        <Tabs>
          <Tab label='About Me' style={ styles.tabs }>
            <div>
              <Card>
                <CardTitle title='Tell us more about yourself' />
                <CardText>
                <h3>Are you looking for a place or a roommate?</h3>
                  <RadioButtonGroup 
                    name='roomyRadio' 
                    defaultSelected='false'
                    onChange={ this.handleLandlord }
                  >
                    <RadioButton
                      value='false'
                      label='Seeking Room'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='true'
                      label='Looking for a roomy'
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                <br />
                { this.renderSliders() }
                <br />
                <h3>Do you use tobacco?</h3>
                  <RadioButtonGroup
                   name='smokerRadio'
                   defaultSelected='false'
                   onChange={ this.handleSmoker }
                  >
                    <RadioButton
                      value='false'
                      label='Not a user'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='true'
                      label='Definite user'
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                <br />
                <h3>Do you own any pets?</h3>
                  <RadioButtonGroup
                    name='petRadio'
                    defaultSelected='false'
                    onChange={ this.handlePets }
                  >
                    <RadioButton
                      value='false'
                      label='No pets'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='true'
                      label='Yes pets'
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                <br />
                <h3>Any Roomy Preferences?</h3>
                  <RadioButtonGroup
                    name='genderRadio'
                    defaultSelected='all'
                    onChange={ this.handleGender }
                  >
                    <RadioButton
                      value='guys'
                      label='Fellas'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='girls'
                      label='Ladies'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='all'
                      label='I do not care'
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                </CardText>
                <div className='alignRight'>
                <CardActions>
                  <RaisedButton
                    label='Save Preferences'
                    primary={true}
                    style={ styles.raisedButton }
                    className='muidocs-icon-action-home alignRight'
                    onClick={ () => sendSettings({ 'user_id': auth.getUserId(), settings: { dog: true, cat: false } }) }
                  />
                </CardActions>
                </div>
              </Card>
            </div>
          </Tab>
          <Tab label='Nyan Cat' style={ styles.tabs }>
            <div>
              <Card>
                <CardTitle title='NYAN NYAN NYAN' subtitle='NYANNYANNYAN' />
                <center><img src={ NyanCat } /></center>
              </Card>
            </div>
          </Tab>
        </Tabs>

      </div>
    );
  }

}
  
export default SettingsView;
       
        // <ul className='settings'>
        //   {Object.keys(settings).map((key, index) => {
        //     return <li key={index}>{key} { settings[key] ? 'true' : 'false' }</li>
        //   })}
        // </ul>
