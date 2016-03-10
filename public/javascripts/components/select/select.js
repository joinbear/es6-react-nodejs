import React from 'react';
import ReactDOM from 'react-dom';
import OptionItems from './options';
import Tips from '../tips/tips';
import SelectComponent from './select_base';
import DirectComponent from '../input/direct_box';
import Label from '../input/label';


const Select = React.createClass({
	
	getInitialState() {

		let seletId = "select" + new Date();

		return {
			validateClass: '',
			selectText : this.props.selectText ? this.props.selectText : '==请选择==',
			expanded : this.props.expanded ? this.props.expanded : false,
			parentClassName : 'btn-group',
			id : this.props.id ? this.props.id : seletId,
			name : this.props.name ? this.props.name : '',
			tipText: this.props.tipText ? this.props.tipText : '',
			selectType : this.props.selectType ? this.props.selectType : 'vertical',
			labelName : this.props.labelName ? this.props.labelName : '请选择',
			required : this.props.required ?  this.props.required : false ,
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
			<SelectComponent 
				parentClassName={this.state.parentClassName}
				expanded={this.state.expanded}
				rel={this.state.name}
				selectText={this.state.selectText}
				selectValue={this.state.selectValue}
				options={this.state.options} />
		);
		switch(this.state.selectType){
  		case 'vertical':
  			return (
  				<DirectComponent validateClass={this.state.validateClass}>
  					<Tips 
							position="top"
							tipText={this.state.tipText} />
		  			<Label
		  				required={this.state.required}  
		  				text={this.state.labelName} />
		  			<div className="">
		  				{DefaultSelect}
		  			</div>
		  		</DirectComponent>
  			);
  		break;
  		case 'horizontal':
  			return (
  				<DirectComponent className="form-horizontal" validateClass={this.state.validateClass}>
  					<Tips 
							position="top"
							tipText={this.state.tipText} />
		  			<Label 
		  				className="control-label col-sm-5"
		  				required={this.state.required} 
		  				text={this.state.labelName} />
		  			<div className="col-sm-7">
		  				{DefaultSelect}
		  			</div>
		  		</DirectComponent>
  			);
  		break;
  		default:
  			return (
  				<DirectComponent validateClass={this.state.validateClass}>
  					<Tips 
							position="top"
							tipText={this.state.tipText} />
		  			<Label 
		  				className="control-label hold-only"
		  				required={this.state.required} 
		  				text={this.state.labelName}/>
		  			<div className="">
		  				{DefaultSelect}
		  			</div>
		  		</DirectComponent>
  			);
  		break;
  	}
	}
});


export default Select;