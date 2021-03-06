import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PlayerAPI } from '../../api/PlayerAPI';

class FullRoster extends Component {
  render() {
      return (<div>
        <ul>
          {PlayerAPI.all().map(p => (<li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>))}
        </ul>
      </div>)
  }
}

export default FullRoster;

/*export const FullRoster = () =>(
  <div>
      <ul>
        {PlayerAPI.all().map(p => (<li key={p.number}>
          <Link to={`/roster/${p.number}`}>{p.name}</Link>
        </li>))}
      </ul>
    </div>
)*/
