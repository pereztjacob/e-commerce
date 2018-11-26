import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../app/actions';
import ShopItem from './ShopItem';
import vector from '../../../styles/assets/vector.jpg';
import ShopItems from './itemsList';

class ShopMens extends Component {

  UNSAFE_componentWillMount(){
    if(this.props.auth){
      this.props.loadUser(this.props.auth._id);


      if(typeof window !== 'undefined'){
        if(localStorage.getItem(name)){
          null;
        } else {
          localStorage.setItem('name', this.props.auth.name);
          localStorage.setItem('_id', this.props.auth._id);
        }
      } else {
        f => f;
      }
    }
  }

  render(){

    let _id = null;
    this.props.auth ? _id = this.props.auth : null;
    let authUser = null; //eslint-disable-line

    if(this.props.auth) {
      authUser = _id;
    }

    const mensOnly = item => {
      console.log(item);
      if(item.tag === 'm'){
        return item;
      }
    };

    const MensShop = ShopItems.filter(mensOnly);

    return (
      <Fragment>
        <div id='backdrop'>
          <div id='tag-text'><h1>MENS</h1></div>
          <img className='vector' src={vector}/>
          <img className='vector' src={vector}/>
          <img className='vector' src={vector}/>
          <img className='vector' src={vector}/>
        </div>
        <ul>
          <li>
            {MensShop.map((item, index) => <ShopItem key={index} data={item} id={_id}/>)}
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    auth: state.auth
  }),
  { loadUser }
)(ShopMens);