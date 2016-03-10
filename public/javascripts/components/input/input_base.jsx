import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


const InputBase = React.createClass({
	getInitialState() {
    return {
			name         : this.props.name ? this.props.name : '',
			type         : this.props.type ? this.props.type : 'text',
			className    : this.props.className ? this.props.className : 'form-control',
			value        : this.props.value ? this.props.value : '',
			placeholder  : this.props.placeholder ? this.props.placeholder : '请输入'+ this.props.labelName,
			disabled     : this.props.disabled ? this.props.disabled : false,
			style        : this.props.style ? this.props.style : {},
			readonly     : this.props.readonly ? this.props.readonly : false,
			handleChange : this.props.handleChange ? this.props.handleChange : ''
    };
	},
	handleChange() {
		let 
			name      = this.state.name,
			passValue = this.refs[name].value;
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: passValue,
    });
    this.state.handleChange(passValue);
	},
	//完成dom渲染后,用jquery绑定事件在该阶段绑定
	componentDidMount() {
		/**
		 * placeholder对象
		 */
		var placeholder = {
	    //检测
	    _check : function(){
	        return 'placeholder' in document.createElement('input');
	    },
	    //初始化
	    init : function(){
	        if(!this._check()){
	            this.fix();
	        }
	    },
	    //修复
	    fix : function(){
        $(':input[placeholder]').each(function(index, element) {
          var self = $(this), txt = self.attr('placeholder');
          self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none',display:'block'}));
          var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
          var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:pos.top, height:h+'px', lineHeight:h+'px', paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
          self.focusin(function(e) {
              holder.hide();
          }).focusout(function(e) {
              if(!self.val()){
                  holder.show();
              }
          });
          holder.click(function(e) {
              holder.hide();
              self.focus();
          });
          if($.trim( self.val() ) !=''){
          	holder.click();
          }
        });
	    }
		};
		placeholder.init();
	},
	render() {
		return (
			<input 
				name={this.state.name} 
				type={this.state.type} 
				className={this.state.className}
	      value={this.state.value}
	      placeholder={this.state.placeholder}
	      ref={this.state.name}
	      disabled={this.state.disabled}
	      style={this.state.style}
	      readOnly={this.state.readonly}
	      onChange={this.handleChange}
	      id={this.props.elementId} />
		);
	}
});

export default InputBase;