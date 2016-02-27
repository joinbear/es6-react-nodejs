import Reflux from 'reflux';

let actions = Reflux.createActions(["fetch", "update"]);

console.log(actions);

actions.fetch.listen(() => {
  let items = [
    { id: 1, descr: "电子公文系统", items: [
        { id: 1, content: "请解决时间显示的问题", date: "2015-12-10 10:30:20 +0800" },
        { id: 2, content: "请解决时间显示的问题", date: "2015-12-10 10:30:20 +0800" },
        { id: 3, content: "请解决时间显示的问题", date: "2015-12-10 10:30:20 +0800" },
        { id: 4, content: "请解决时间显示的问题", date: "2015-12-10 10:30:20 +0800" }
    ]},
    { id: 2, descr: "集中报销系统", items: [
      { id: 1, content: "请解决时间显示的问题", date: "2015-12-10 10:30:20 +0800" }
    ]},
    { id: 3, descr: "合同管理系统", items: [
    ]}
  ];

  actions.update(items);
});

export default actions;