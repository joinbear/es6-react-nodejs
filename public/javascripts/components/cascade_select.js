import React from 'react';
import ReactDOM from 'react-dom';

var provData = {
    label: '省',
    data: [
        {id:1, name: '安徽'},
        {id:2, name: '江苏'}
    ]
};
var cityData = [{
    label: '市',
    pid: 1,
    data: [
        {id: 10, name: '蚌埠'},
        {id: 11, name: '巢湖'},
        {id: 12, name: '太湖'}
    ]
}];
 
var CascadeSelect = React.createClass({
    getInitialState: function() {
       return {
           items: [],
           choose: []
       }
    },
    componentWillMount: function() {
      //AJAX call
      this.setState({
          items: this.state.items.concat([provData])
      });
    },
    _handleChange: function(e) {
      e.preventDefault();
      var value = e.target.value.split("\:");
        var selectIndex = value[0];
        var selectValue = value[1];
 
        var newData;
        var index = selectIndex;
        var nextItems = this.state.items;
        var nextChoose = this.state.choose;
 
        if (selectValue != '') {
            index++;
            nextChoose[selectIndex] = selectValue;
            //ajax call
            newData = cityData.filter(function(item) {
                return item.pid == selectValue;
            });
        }
 
        nextChoose = nextChoose.slice(0, index);
        nextItems = nextItems.slice(0, selectIndex+1);
        if (newData!=null && newData.length > 0) {
            nextItems.push(newData[0]);
        }
 
        this.setState({
            items: nextItems,
            choose: nextChoose
        });
    },
    _handleClick: function(e) {
        e.preventDefault();
        alert(this.state.choose.join("=>"));
    },
    render: function() {
        return (
          <div>
          {this.state.items.map(function(item, i) {
              return (
                  <div key={i}>
                      <label>{item.label}</label>
                      <select data-order={i} onChange={this._handleChange}>
                          <option value={i + ":"}> ==请选择== </option>
                          {item.data.map(function(data) {
                              return (<option key={data.id} value={i + ":" + data.id}>{data.name}</option>);
                          })}
                      </select>
                  </div>
              );
          }, this)}
          <button onClick={this._handleClick}>查看选择项</button>
          </div>
        );
    }
});
 
export default CascadeSelect;