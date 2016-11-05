import React, { PropTypes as T } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import './SettingsView.scss';
import { auth } from '../../../../auth0/auth';

class SettingsView extends React.Component {
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

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchSettings } = this.props;
    fetchSettings({ 'user_id': auth.getUserId() }); // fetch settings before rendering
  }

  render() {
    const { settings, isFetching, isPosting, sendSettings } = this.props;
    const style = { margin: 12 };

    console.log('IN SettingsView: settings =', settings);
    console.log('IN SettingsView: isFetching =', isFetching);
    console.log('IN SettingsView: isPosting =', isPosting);

    return (
      <div className="">
        <h2>Logout</h2>
        <RaisedButton
          label="Send settings to server"
          primary={true}
          style={style}
          className="muidocs-icon-action-home"
          onClick={ () => sendSettings({ 'user_id': auth.getUserId(), settings: { dog: true, cat: false } }) }
        />
      <ul className='settings'>
        {Object.keys(settings).map((key, index) => {
          return <li key={index}>{key} { settings[key] ? 'true' : 'false' }</li>
        })}
      </ul>
      </div>
    );
  }

}

export default SettingsView;
