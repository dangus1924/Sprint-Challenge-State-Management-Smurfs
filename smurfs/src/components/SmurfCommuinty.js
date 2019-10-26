import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getData } from '../actions/smurfing';
import SmurfCard from './SmurfCard';

const SmurfCommunity = (props) => {
    console.log(props);

    return (
        <div>
             <button onClick={props.getData} > show village</button>
    
            <div className='grid'>
            {props.smurfsCollection && (props.smurfsCollection.map(smurf => <SmurfCard key={smurf.name} smurf={smurf}></SmurfCard>))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
  return {
      ...state,
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfCommunity);