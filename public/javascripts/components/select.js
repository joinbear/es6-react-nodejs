import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

//创建optionitem
let OptionItems = React.createClass({

	handleOptionSelect(event) {
		event.stopPropagation();
		event.preventDefault();
		//传递数据函数
		this.props.onOptionsSelected(event.target.title,event.target.innerText);
	},

	render() {
		var items = [],_self = this;
		this.props.options.forEach(function(option, i) {
      items.push(<li key={i}><a href="javascript:;" title={option[_self.props.value]} onClick={_self.handleOptionSelect} className="select-item">{option[_self.props.text]}</a></li>);
    });
		return (
			<ul className="dropdown-menu">{items}</ul>
		);
	}
});

const SelectBox = React.createClass({
	//初始化
	getInitialState() {
		//当id未定义时，根据时间戳生成id
		let seletId = "select" + new Date().getTime();
		return {
			id : this.props.id ? this.props.id : seletId,//id
			expanded : this.props.expanded ? this.props.expanded : false,//是否展开
			parentClassName : 'btn-group',//用于展开和收起
			width: this.props.width ? this.props.width : '120px',
			name : this.props.name ? this.props.name : '',//隐藏表单名字
			relativeName : this.props.relativeName ? this.props.relativeName : '' ,
			// dataUrl : this.props.url ? this.props.url : '' ,
			labelName : this.props.labelName ? this.props.labelName : '请选择',//标签名称
			selectLabel:this.props.selectLabel ? this.props.selectLabel : 'text',
			selectKey:this.props.selectKey ? this.props.selectKey : 'value',
			selectText : this.props.selectText ? this.props.selectText : '==请选择==',//选项名称
			selectType : this.props.selectType ? this.props.selectType : 'vertical',//select的展现方式
			selectValue : this.props.selectValue ? this.props.selectValue : null,//选择的值，用于放在隐藏域中，传递到后台
			options : this.props.options ? this.props.options : [{
				value : null,
				text : "==请选择=="
			},
			{
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

	handleOptSelect(value,text) {

		this.setState({
			selectText : text,
			selectValue : value,
			expanded : false,
			parentClassName : 'btn-group'
		});

		if(this.state.relativeName){
			//传递数据函数
			this.props.updateSelect(this.state.relativeName,value);
		}

	},

	handleBtnClick(event) {
		event.stopPropagation();
		event.preventDefault();
		let 
			optData = this.props.options,
		 	unexpanded = !this.state.expanded,
		 	className  = unexpanded ? 'btn-group open' : 'btn-group';
		if(optData){
			this.setState({
				expanded : unexpanded,
				parentClassName : className,
				options : optData
			});
		}else{
			this.setState({
				expanded : unexpanded,
				parentClassName : className
			});
		}
	},

	//完成dom渲染后,用jquery绑定事件在该阶段绑定
	componentDidMount() {

	},

	//页面渲染
	render () {
		//默认选择框
		let DefaultSelect = (
			<div className={this.state.parentClassName} id={this.state.id} >
			  <button 
			  	type="button" 
			  	className="btn btn-default dropdown-toggle"
			  	expanded={this.state.expanded}
			  	rel={this.state.name}
			  	style={{width:this.state.width}}
			  	selectValue={this.state.selectValue}
			  	onClick={this.handleBtnClick}>
			    {this.state.selectText}
			    <span className="caret"></span>
			  </button>
			  <input type="hidden" value={this.state.selectValue} name={this.state.name} />
			 	<OptionItems 
			 		options={this.state.options} 
			 		onOptionsSelected={this.handleOptSelect}
			 		text={this.state.selectLabel}
			 		value={this.state.selectKey}/>
			</div>
		);
		//水平选择框
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
		//垂直选择框
		let VerticalSelect = (
			<div className="form-group group-class">
		    <label className="control-label label-class">{this.state.labelName}</label>
		    <div className="">
		    	{DefaultSelect}
		    </div>
		  </div>
		);
		//返回选择框
		let ReturnSelect = this.state.selectType == 'vertical' ? VerticalSelect : HorizontalSelect ;
		return (
			<div>
			  {ReturnSelect}
			</div>
		);
	}
});

//暴露到外部
export default SelectBox;