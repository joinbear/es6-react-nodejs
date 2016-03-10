require ('simditor/styles/simditor.css');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
let Simditor = require('simditor');


const Editor = React.createClass({
  componentDidMount : function(){
    let textbox = ReactDOM.findDOMNode(this.refs.textarea);
    let editor = new Simditor({
      textarea: $(textbox)
    });
  },
  render : function(){
    return (
    <div>
      <textarea ref='textarea' />
    </div>
    )
  }
});

export default Editor;

