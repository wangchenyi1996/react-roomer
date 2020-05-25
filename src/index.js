import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

// 全局引入iconfont字体图标
import './assets/css/iconfont.css'

//引入动画库、全局scss样式
import './assets/css/animate.css'
import './common/style.scss'
import './common/reset.scss'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
