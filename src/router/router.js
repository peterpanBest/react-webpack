import React from 'react';

import {Route, Switch,Redirect} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from '../component/Loading/Loading';

import Cart from "bundle-loader?lazy&name=cart!pages/Cart/Cart.jsx";
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={createComponent(Page1)} />
      <Route path="/page1" component={createComponent(Page1)} />
      <Route path="/cart" component={createComponent(Cart)} />
      <Route path="/counter" component={createComponent(Counter)} />
      <Route path="/userinfo" component={createComponent(UserInfo)} />
      <Route component={createComponent(NotFound)} />
    </Switch>
  </div>
);
