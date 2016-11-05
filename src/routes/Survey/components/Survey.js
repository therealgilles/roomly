import React from 'react';
// import request from 'browser-request';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import { green500 } from 'material-ui/styles/colors';
import NyanCat from '../assets/nyancat.jpg';
import './Survey.scss';

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
  }
};

class Survey extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  // getResults () {
  //   request('/api/getResults', function (err, res, body) {
  //     if (err) { console.log(err); }
  //     console.log(body);
  //   });
  // }

  render () {
    // this.getResults();
    return (
      <div className='survey-div'>
        <Tabs>
          <Tab label='About Me' style={ styles.tabs }>
            <div>
              <Card>
                <CardTitle title='Fill out your preferences below' subtitle='Below this' />
                <CardText>
                <h3>Looking for a place or a roommate?</h3>
                  <RadioButtonGroup 
                    name='roomyRadio' 
                    defaultSelected='light'>
                    <RadioButton
                      value='light'
                      label='Seeking Room'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='not_light'
                      label='Looking for a roomy'
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                  <h3>Tobacco</h3>
                  <RadioButtonGroup
                   name='smokerRadio'
                    defaultSelected='light'>
                    <RadioButton
                      value='light'
                      label='Not a user'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='not_light'
                      label='Definite user'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='dark'
                      label='Connoisseur'
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                  <h3>Any pets?</h3>
                  <RadioButtonGroup
                    name='petRadio'
                    defaultSelected='light'>
                    <RadioButton
                      value='light'
                      label='No pets'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='not_light'
                      label='Yes pets'
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                  <h3>Gender Preference</h3>
                  <RadioButtonGroup
                    name='genderRadio'
                    defaultSelected='light'>
                    <RadioButton
                      value='light'
                      label='Fellas'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='not_light'
                      label='Ladies'
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value='dark'
                      label='I do not care'
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                <h3>HOW MUCH YOU WANNA PAY</h3>
                <Slider step={0.10} value={0.5} />
                </CardText>
                <CardActions>
                  <FlatButton label='ACTION' />
                </CardActions>
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

export default Survey;
