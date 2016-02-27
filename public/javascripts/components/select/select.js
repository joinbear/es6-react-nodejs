import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


let OptionItems = React.createClass({

	render() {
		var items = [],_self = this;
		this.props.options.forEach(function(option, i) {
      items.push(<li key={i}><a href="javascript:;" value={option.value} className="select-item">{option.text}</a></li>);
    });
		return (
			<ul className="dropdown-menu">{items}</ul>
		);
	}
});

const SelectBox = React.createClass({
	
	getInitialState() {

		let seletId = "select" + new Date();

		return {
			selectText : this.props.selectText ? this.props.selectText : '==请选择==',
			expanded : this.props.expanded ? this.props.expanded : false,
			parentClassName : 'btn-group',
			id : this.props.id ? this.props.id : seletId,
			name : this.props.name ? this.props.name : '',
			selectType : this.props.selectType ? this.props.selectType : 'vertical',
			labelName : this.props.labelName ? this.props.labelName : '请选择',
			selectValue : this.props.selectValue ? this.props.selectValue : null,
			options : this.props.options ? this.props.options : [{
				value : 1,
				text : "测试1"
			},{
				value : 2,
				text : "测试2"
			},{
				value : 3,
				text : "测试3"
			}]
		};
	},
	componentDidMount() {
		let _self = this;
		let id = this.props.id;
		$("#"+id).find('button').on('click',function(){
			let unexpanded = !_self.state.expanded;
			let className  = unexpanded ? 'btn-group open' : 'btn-group';
			_self.setState({
				expanded : unexpanded,
				parentClassName : className
			});
		});
		$("#"+id).find(".select-item").on('click',function(){
			_self.setState({
				selectText : $(this).html(),
				selectValue : $(this).attr('value'),
				expanded : false,
				parentClassName : 'btn-group'
			});
		});
	},

	render () {
		let DefaultSelect = (
			<div className={this.state.parentClassName} id={this.state.id} >
			  <button 
			  	type="button" 
			  	className="btn btn-default dropdown-toggle"
			  	expanded={this.state.expanded}
			  	rel={this.state.name}
			  	selectValue={this.state.selectValue}>
			    {this.state.selectText}
			    <span className="caret"></span>
			  </button>
			  <input type="hidden" value={this.state.selectValue} name={this.state.name} />
			 	<OptionItems options={this.state.options}/>
			</div>
		);
		let HorizontalSelect = (
			<div className="form-horizontal">
			  <div className="form-group">
			    <label className="col-sm-4 control-label">{this.state.labelName}</label>
			    <div className="col-sm-8">
			    	{DefaultSelect}
			    </div>
			  </div>
			</div>
		);
		let VerticalSelect = (
			<div className="form-group group-class">
		    <label className="control-label label-class">{this.state.labelName}</label>
		    <div className="">
		    	{DefaultSelect}
		    </div>
		  </div>
		);
		let ReturnSelect = this.state.selectType == 'vertical' ? VerticalSelect : HorizontalSelect ;
		return (
			<div>
			  {ReturnSelect}
			</div>
		);
	}
});


export default SelectBox;