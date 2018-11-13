import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../app/actions';
import ShopItem from './ShopItem';
import vector from '../../../styles/assets/vector.jpg';

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

    const ShopItems = [{ 'name':'Voyager Jacket', 'price':'$200', 'imageName':'mens-jacket-1.jpg', 'description':'Lorem Ipsum Damel' }, { 'name':'Dracula Jacket', 'price':'$300', 'imageName':'mens-jacket-2.jpg', 'description':'Lorem Ipsum Damel' }, { 'name': 'Voyager Tee', 'price': '$30', 'imageName': 'mens-tee-1.jpg', 'description': 'Lorem Ipsum Damel' }, { 'name': 'Flyer Vest', 'price': '$60', 'imageName': 'mens-vest-1.jpg', 'description': 'Lorem Ipsum Damel' }, { 'name': 'Flyer Hoodie', 'price': '$70', 'imageName': 'mens-hoodie-1.jpg', 'description': 'Lorem Ipsum Damel' }, { 'name': 'Tacoma Umbrella', 'price': '$20', 'imageName': 'umbrella-1.jpg', 'description': 'Lorem Ipsum Damel' }, { 'name': 'San Antonio Dress', 'price': '$50', 'imageName': 'womens-dress-1.jpg', 'description': 'Lorem Ipsum Damel' }, { 'name': 'Seattle Jacket', 'price': '$80', 'imageName': 'womens-jacket-1.jpg', 'description': 'Lorem Ipsum Damel' }, { 'name':'World Pants', 'price':'$100', 'imageName':'womens-pants-1.jpg', 'description':'Lorem Ipsum Damel' }, { 'name':'Miracle Shirt', 'price':'$50', 'imageName':'womens-shirt-1.jpg', 'description':'Lorem Ipsum Damel' }, { 'name':'Premium Shirt', 'price':'$100', 'imageName':'womens-shirt-2.jpg', 'description':'Lorem Ipsum Damel' }, { 'name':'Rocky Suit Jacket', 'price':'$200', 'imageName':'womens-suit-1.jpg', 'description':'Lorem Ipsum Damel' }];

    if(this.props.auth) {
      authUser = _id;
    }

    return (
      <Fragment>
        <div id='backdrop'>
          <div id='tag-text'><h1>TOP LOOKS</h1></div>
          <img className='vector' src={vector}/>
          <img className='vector' src={vector}/>
          <img className='vector' src={vector}/>
          <img className='vector' src={vector}/>
        </div>
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