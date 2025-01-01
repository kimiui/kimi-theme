'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthConsumer = exports.AuthContext = void 0;
var react_1 = require("react");
// ----------------------------------------------------------------------
exports.AuthContext = (0, react_1.createContext)(undefined);
exports.AuthConsumer = exports.AuthContext.Consumer;
