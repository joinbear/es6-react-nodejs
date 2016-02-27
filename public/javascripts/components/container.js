import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Pagination from 'react-bootstrap/lib/Pagination';
import FormInput from './form_input';
import InputBox from './input';
import BreadCrumb from './bread_crumb';
import Table from './table';
import HeaderSimple from './header_simple';
import SelectBox from './select';
import DatePicker from './date';




//搜索表单
let SearchForm = React.createClass({

	getInitialState() {
		return {
			style : 'success',
			disabled : false,
			region : [{"fdId":"1101031008460C4722C8AE4076F5A47C","fdName":"东南区"},{"fdId":"15030212132984D91832AE7FED78F375","fdName":"东湖区"},{"fdId":"150302121533DBFB8A45FBA5FC5EDA5E","fdName":"交大区"},{"fdId":"E140093","fdName":"分销东区"},{"fdId":"E140094","fdName":"分销南区"},{"fdId":"E140092","fdName":"分销西北区"},{"fdId":"E140108","fdName":"分销西南区"},{"fdId":"11010310073150F786824A6DCDCDB88A","fdName":"双楠区"},{"fdId":"E140111","fdName":"商业地产分销部"},{"fdId":"E140112","fdName":"商业地产直销部"},{"fdId":"E140100","fdName":"商业地产部"},{"fdId":"0802291715143DBDAF5254D0DB8FAF44","fdName":"城东区"},{"fdId":"1312021136571324FBAF1B8141F3DCF0","fdName":"城北区"},{"fdId":"131202133645A34122C661A8CC582175","fdName":"城西区"},{"fdId":"E140103","fdName":"大源区"},{"fdId":"131202133210384D8602F744F0C92D28","fdName":"天府区"},{"fdId":"1101031006415E9E319FDF47B521AB48","fdName":"少城区"},{"fdId":"E140104","fdName":"房江湖"},{"fdId":"E140107","fdName":"新房事业部"},{"fdId":"150302121808B6C7FBEE67CD839B9359","fdName":"永丰区"},{"fdId":"E140101","fdName":"直销东区"},{"fdId":"E140102","fdName":"直销南一区"},{"fdId":"E140109","fdName":"直销南二区"},{"fdId":"E140110","fdName":"直销西区"},{"fdId":"150302121959A10DC7D942ACCCB108CC","fdName":"紫桐区"},{"fdId":"0802291715575BF678706D795EA0FB88","fdName":"西北区"},{"fdId":"150302121717310476D47A21BD2E3CFE","fdName":"西南区"},{"fdId":"0912021732103100B9B279252FD34745","fdName":"金融城区"},{"fdId":"150302121611CEB90B377ACEA3ADA6A3","fdName":"顺城区"},{"fdId":"1312021334452DB719C84DC7BFC0DB37","fdName":"高西区"},{"fdId":"E140099","fdName":"龙泉区"},{"fdId":"E190014","fdName":"金融事业部"}],
			estate : [],
			store : []
		}
	},

	handleUpdateSelect(name,value) {
		let arr;
		switch(name){
			case 'estate' :
				//todo ajax result
				arr = [{"fdId":"1101031008460C4722C8AE4076F5A47C","fdName":"东南区"},{"fdId":"15030212132984D91832AE7FED78F375","fdName":"东湖区"}];
				this.setState({
					estate : arr
				});	 
			break;
			case 'store' :
				//todo ajax result
				arr = [{"fdId":"1101031008460C4722C8AE4076F5A47C","fdName":"东南区"},{"fdId":"15030212132984D91832AE7FED78F375","fdName":"东湖区"}];
				this.setState({
					store : arr
				});	 
			break;
		}
		// console.log(this.state);
	},

	componentDidMount() {
		$("#submitBtn").on('click',function(){
			console.log($("#form").serializeArray());
		});
		// console.log(this.state);
	},

	render() {
		return(
			<form id="form">
				<table width="100%">
					<tbody>
					<tr>
						<td>
							<SelectBox 
								id="regionId" 
								name="region" 
								selectType="horizontal"
								labelName="大区"
								relativeName="estate"
								selectLabel="fdName"
								selectKey="fdId"
								updateSelect={this.handleUpdateSelect}
								options={this.state.region}/>
						</td>
						<td>
							<SelectBox 
								id="estateId" 
								name="estate" 
								selectType="horizontal" 
								labelName="小区"
								selectLabel="fdName"
								selectKey="fdId"
								relativeName="store"
								updateSelect={this.handleUpdateSelect}
								options={this.state.estate}/>
						</td>
						<td>
							<SelectBox 
								id="storeId" 
								name="store" 
								selectType="horizontal"
								selectLabel="fdName"
								selectKey="fdId"
								labelName="门店"
								updateSelect={this.handleUpdateSelect}
								options={this.state.store}/>
						</td>
						<td>
							<InputBox
							inputType="horizontal" 
							ref="keyword"
							name="keyword1"
							labelName="签约人" />
						</td>
						<td></td>
					</tr>
					<tr>
						<td><SelectBox id="select1" name="TradeContract" selectType="horizontal"/></td>
						<td>
							<InputBox
							inputType="horizontal" 
							ref="keyword"
							name="keyword11"
							labelName="签约人"
							required="true" />
						</td>
						<td>
							<DatePicker 
					   		value="2016-01-07"
					   		id="biganTime"
					   		inputType="horizontal" 
					   		relativeId="endTime"
					   		labelName="开始时间："
					   		minDate="{y : -1}"
					   		maxDate="{y : 1}" />
						</td>
						<td>
						  <DatePicker
					   		value="2016-01-22"
					   		id="endTime"
					   		labelName="结束时间："
					   		inputType="horizontal" 
					   		relativeId="biganTime"
					   		minDate="{y : -1}"
					   		maxDate="%y-%M-%d" />
						</td>
						<td>
							<div>
								<Col md={3}></Col>
								<Col md={6}><ButtonInput type="submit" id="submitBtn" value="查询" bsStyle={this.state.style} disabled={this.state.disabled} /></Col>
								<Col md={3}></Col>
							</div>
						</td>
					</tr>
					</tbody>
				</table>
			</form>
		)
	}
});

//整个模块
const Container = React.createClass({
	getInitialState() {
		return {
			breadCrumb : [
				{
					text : 'Home',
					url : '',
					active : false
				},{
					text : 'Library',
					url : '',
					active : false
				},{
					text : 'Data',
					url : '',
					active : true
				}
			],
			tableList : {
				theader : ['First Name','First Name','First Name','First Name','First Name','First Name'],
				tbody : [{
					text : 'First Name',
					fdId : '1212121212',
					secid : '2423424', 
					text1 : 'First Name',
					fdId2 : '1212121212',
					secid3 : '2423424'
				},
				{
					text : 'First Name',
					fdId : '1212121212',
					secid : '2423424', 
					text1 : 'First Name',
					fdId2 : '1212121212',
					secid3 : '2423424'
				},
				{
					text : 'First Name',
					fdId : '1212121212',
					secid : '2423424', 
					text1 : 'First Name',
					fdId2 : '1212121212',
					secid3 : '2423424'
				}]
			},
			pagerList : {
				activePage : 1
			}
		}
	},
	handleSelect(event, selectedEvent) {
		console.log(selectedEvent);
    this.setState({
      activePage: selectedEvent.eventKey
    });
  },
	render() {
		return (
			<div>
				<BreadCrumb data={this.state.breadCrumb} />
				<SearchForm />
				<Table className="table table-hover table-bordered" data={this.state.tableList}/>
				<div style={ {textAlign:"center"} }>
					<Pagination
		        prev
		        next
		        first
		        last
		        ellipsis
		        items={20}
		        maxButtons={5}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect} />
				</div>
			</div>
		);
	}
});

export default Container;
// ReactDOM.render(<Container />, document.getElementById('container'));
// ReactDOM.render(<HeaderSimple />, document.getElementById('nav'));
// var GroceryList = React.createClass({
//   handleClick: function(i) {
//     console.log('You clicked: ' + this.props.items[i]);
//   },

//   render: function() {
//     return (
//       <div>
//         {this.props.items.map(function(item, i) {
//           return (
//             <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
//           );
//         }, this)}
//       </div>
//     );
//   }
// });

// ReactDOM.render(
//   <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, document.getElementById('nav')
// );