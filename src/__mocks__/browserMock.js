import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="app"></div></body></html>');
const { window, window: { document } } = dom;
global.window = window;
global.document = document;
