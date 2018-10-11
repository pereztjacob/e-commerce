import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../app/actions';
import ShopItem from './ShopItem';

class Shop extends Component {

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

    const ShopItems = [{ 'name':'shirt', 'price':'$20', 'imageURL':'../../assets/shirt.jpg', 'description':'A stylish shirt!!' }, { 'name':'pants', 'price':'$40', 'imageURL':'pants.jpg', 'description':'Some stylish pants!!' }];

    if(this.props.auth) {
      authUser = _id;
    }

    return (
      <Fragment>
        <ul>
          <li>
            {ShopItems.map((item, index) => <ShopItem key={index} data={item} id={_id}/>)}
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
)(Shop);