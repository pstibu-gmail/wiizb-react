/** Component */

import React from 'react';
import PropTypes from 'prop-types';


const GetGitHubUserForm = (props) => {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center'}}>
      <input name="username" placeholder="Username" onChange={props.onChange} style={{height: 35}} />
      <button onClick={props.onClick} style={{width: 100, height: 35, }}>Get Details</button>
    </div>
  );
};

GetGitHubUserForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default GetGitHubUserForm;
