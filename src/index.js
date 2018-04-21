import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import { Router } from 'react-router-dom';
import Index from "pages/Index/Index.jsx"
import "../public/style/reset.css";
import "../public/script/flexible.js";
import "../public/iconfont/iconfont.css";
import history  from "./history";
// import "./static.css";

renderWithHotReload(Index);

if (module.hot) {
    module.hot.accept("./pages/Index/Index.jsx", () => {
        const NextApp = require("./pages/Index/Index.jsx").default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router history={history}>
                    <RootElement/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}