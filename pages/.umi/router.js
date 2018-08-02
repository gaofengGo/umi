import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import Layout from 'D:/workspace/XingMa/react/wumi.app/layouts/index.js';


let Router = DefaultRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/discover.html" component={require('../discover/page.jsx').default} />
    <Route exact path="/home.html" component={require('../home/page.jsx').default} />
    <Route exact path="/" component={require('../index.js').default} />
    <Route exact path="/order.html" component={require('../order/page.jsx').default} />
    <Route exact path="/profile.html" component={require('../profile/page.jsx').default} />
    <Route exact path="/shop.html" component={() => React.createElement(require('C:/Users/gaofeng/AppData/Local/Yarn/config/global/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/shop.html' })} />
    <Route exact path="/index.html" component={() => React.createElement(require('C:/Users/gaofeng/AppData/Local/Yarn/config/global/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/index.html' })} />
  </Switch></Layout>
</Router>
  );
}
