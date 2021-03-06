import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

var middlewares = [];
middlewares.push(thunk);
 
if (process.env.NODE_ENV === "development") {
	const { createLogger } = require("redux-logger");

	const loggerMiddleware = createLogger();
	middlewares.push(loggerMiddleware);
}

const middlewareThunk = applyMiddleware(...middlewares);

export default createStore(reducer, middlewareThunk);
