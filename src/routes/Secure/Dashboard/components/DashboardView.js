import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';
import AuthService from '../../../../auth0/utils/AuthService';
import './DashboardView.scss';

class DashboardView extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { auth } = this.props
    return (
      <div className="">
        <h2>Logout</h2>
        <ButtonToolbar className="">
          <Button bsStyle="primary" onClick={auth.logout.bind(this)}>Logout</Button>
        </ButtonToolbar>
      </div>
    );
  }

}

export default DashboardView;
