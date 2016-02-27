import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import actions from './actions';
import store from './store';
import { Row, Col, Alert, Badge } from 'react-bootstrap';


var addItem = Reflux.createAction({
    preEmit: function (params) {
      console.log('preEmit:' + params);
      return  params + '---aaaa';          
    },
    shouldEmit: function (params) {
      console.log('shouldEmit:' + params);
      return  params + '---cccc';           
    }
});

var TodoStoreTest = Reflux.createStore({
    init: function () {
      this.listenTo(addItem, 'addItem');
    },
    addItem: function (params) {
      console.log('addItem:' + params);
    }
});
console.log(TodoStoreTest);
addItem('xxx');

let TodoItem = React.createClass({
  render() {
    return (
      <Row>
        <Col xs={12} md={12}>
          <small><i className="fa fa-circle" style={{marginRight: '1em'}}></i></small>
          <span>{this.props.content}</span>
          <span className="pull-right">{this.props.created_at}</span>
        </Col>
      </Row>
    );
  }
});


let TodoCategory = React.createClass({
  sumItems() {
    return this.props.items.length;
  },

  render() {
    let nodes = this.props.items.map(e => (
      <TodoItem key={e.id} content={e.content} created_at={e.date} />
    ));

    let info = this.sumItems() === 0 ?
        (<Alert bsStyle="success"><i className="fa fa-thumbs-o-up fa-2x"></i> 本应用下目前没有发现待办工作</Alert>) :
        (<Alert bsStyle="info">{nodes}</Alert>);

    return (
      <div style={{marginBottom: '2.5em'}}>
        <p>
          <Badge bsStyle="warning" style={{marginRight: '1em'}}>{this.sumItems()}</Badge>
          <b>{this.props.descr}</b>
        </p>
        {info}
      </div>
    );
  }
});

let RefluxDemo = React.createClass({
  mixins: [
    Reflux.listenTo(store, 'onRefresh')
  ],

  getInitialState() {
    return {data: []};
  },

  componentWillMount() {
    actions.fetch();
  },

  onRefresh(items) {
    this.setState({data: items});
  },

  render() {
    let nodes = this.state.data.map(e => (
        <TodoCategory key={e.id} descr={e.descr} items={e.items} />
    ));
    return (
      <div>{nodes}</div>
    );
  }
});

var TodoActions = Reflux.createActions([
    'addItem'
]);

var TodoStore = Reflux.createStore({
    items: [1, 2],
    listenables: [TodoActions],
    onAddItem: function (model) {
        $.post('/server/add', {data: model}, function (data) {
            this.items.unshift(data);
            this.trigger(this.items);
        });
    }
});


var TodoComponent = React.createClass({
    mixins: [Reflux.listenTo(TodoStore, 'onStatusChange')],
    getInitialState: function () {
        return {list: TodoStore.items};
    },
    onStatusChange: function () {
        this.setState({list: TodoStore.items});
    },
    render: function () {
        return (
            <div>
                {this.state.list.map(function (item,index) {
                    return <p key={index}>{item}</p>
                })}
            </div>
        )
    }
});


ReactDOM.render(<div><RefluxDemo /><TodoComponent /></div>,document.getElementById('reflux'));

