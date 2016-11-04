import React, { PropTypes as T } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import './DashboardView.scss';
import { auth } from '../../../../auth0/auth';

class DashboardView extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    isFetching: T.bool,
    searchResults: T.array,
    updateSearchCriteria: T.func
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { searchResults, isFetching, searchCriteria, updateSearchCriteria } = this.props;
    const style = { margin: 12 };

    console.log('IN DashboardView: searchResults =', searchResults);

    return (
      <div className="">
        <h2>Logout</h2>
        <RaisedButton
          label="FB Logout"
          primary={true}
          style={style}
          className="muidocs-icon-action-home"
          onClick={auth.logout.bind(this)}
        />
        <RaisedButton
          label="Update search criteria"
          primary={true}
          style={style}
          className="muidocs-icon-action-home"
          onClick={ () => updateSearchCriteria({ dog: true, cat: false }) }
        />
      <ul className='search-results'>
        {searchResults.map((result, index) => {
          return <li key={index}>{result.user}</li>
        })}
      </ul>
      </div>
    );
  }

}

export default DashboardView;
