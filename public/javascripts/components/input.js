import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Input from 'react-bootstrap/lib/Input';

const InputBox = React.createClass({

  getInitialState() {
    return {
    	handleEvent: this.props.handleEvent ? this.props.handleEvent : false,
      value: this.props.value ? this.props.value : '',
      type: this.props.type ? this.props.type : 'text',
      isChange : false,
      validate : this.props.type == 'hidden' ? true : false,
      name : this.props.name,
      inputType : this.props.inputType ? this.props.inputType : 'vertical',
      help : this.props.help ? this.props.help : '',
      labelName : this.props.labelName ? this.props.labelName : '',
      placeholder : this.props.placeholder ? this.props.placeholder : '',
      reg : this.props.reg ? this.props.reg : '' ,
      disabled : this.props.disabled ? this.props.disabled : '',
      size : this.props.size ? this.props.size : 'medium',
      width: this.props.width ? this.props.width : '100%',
      required : this.props.reg ? true : ( this.props.required ?  this.props.required : false )
    };
  },

  validationState() {
  	let value = this.state.value;
    let length = value.length;
    let required = this.state.required;
    let reg = this.state.reg;
    if(this.state.isChange){
    	if(reg){
	    	let matchReg = new RegExp(reg);
	    	let result = matchReg.test(value)
	    	this.state.validate = result ? true : false;
	    	return result ? 'success' : 'error';
	    }else {
	    	if(required && length > 0){
	    		this.state.validate = true;
	    		return 'success'
	    	}else if(required && length == 0){
	    		this.state.validate = false;
	    		return 'error';
	    	}else {
	    		this.state.validate = true;
	    		// return 'success';
	    	}
	    }
    }
  },
  handleValue() {
  	let name = this.state.name;
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs[name].getValue(),
      isChange : true
    });
  },
  handleChange() {
  	this.handleValue();
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

  	let VerticalInput = (
  		<Input
        type={this.state.type}
        value={this.state.value}
        placeholder={this.state.placeholder}
        label={this.state.labelName}
        help={this.state.help}
        bsStyle={this.validationState()}
        bsSize={this.state.size}
        hasFeedback
        name={this.state.name}
        ref={this.state.name}
        disabled={this.props.disabled}
        groupClassName="group-class"
        labelClassName="label-class"
        style={{width : this.state.width}}
        onChange={this.handleChange} />
  	);
  	let HorizontalInput = (
  		<div className="form-horizontal">
		    <label className="col-sm-5 control-label">{this.state.labelName}</label>
		    <div className="col-sm-7">
		       <Input 
			      	type={this.state.type}
              value={this.state.value}
			        placeholder={this.state.placeholder}
			        help={this.state.help}
			        bsStyle={this.validationState()}
			        bsSize={this.state.size}
			        hasFeedback
			        name={this.state.name}
			        ref={this.state.name}
			        disabled={this.props.disabled}
			        style={{width : this.state.width}}
			        onChange={this.handleChange} />
		    </div>
		  </div>
  	);
  	let ReturnInput = this.state.inputType == 'vertical' ? VerticalInput : HorizontalInput;
    return (
      <div>
      	{ReturnInput}
      </div>
    );
  }
});

export default InputBox;