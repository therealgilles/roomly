import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';
import AuthService from '../../../auth0/utils/AuthService';
import RaisedButton from 'material-ui/RaisedButton';
import './LoginView.scss';

class LoginView extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object
  }

  constructor(props) {
    super(props);
  }

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    const { auth } = this.props.routes[0];
    const style = { margin: 12 };

    return (
      <div className="">
        <h2>Login</h2>
        <RaisedButton label="Login" primary={true} style={style} onClick={auth.login.bind(this)}/>
      </div>
    );
  }

}

export default LoginView;
