(this["webpackJsonptodolist-13"]=this["webpackJsonptodolist-13"]||[]).push([[0],{104:function(t,e,n){"use strict";n.r(e);var i,a,c=n(5),r=n(0),o=n.n(r),s=n(9),l=n.n(s),d=(n(78),n(79),n(29)),u=n(146),j=n(136),f=n(137),O=o.a.memo((function(t){var e=Object(r.useState)(""),n=Object(d.a)(e,2),i=n[0],a=n[1],o=Object(r.useState)(null),s=Object(d.a)(o,2),l=s[0],O=s[1],b=function(){""!==i.trim()?(t.addItem(i),a("")):O("Title is required")};return Object(c.jsxs)("div",{children:[Object(c.jsx)(u.a,{variant:"outlined",error:!!l,value:i,onChange:function(t){a(t.currentTarget.value)},onKeyPress:function(t){null!==l&&O(null),13===t.charCode&&b()},label:"Title",helperText:l}),Object(c.jsx)(j.a,{color:"primary",onClick:b,children:Object(c.jsx)(f.a,{})})]})})),b=o.a.memo((function(t){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),i=n[0],a=n[1],o=Object(r.useState)(t.value),s=Object(d.a)(o,2),l=s[0],j=s[1];return i?Object(c.jsx)(u.a,{value:l,onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.onChange(l)}}):Object(c.jsx)("span",{onDoubleClick:function(){a(!0),j(t.value)},children:t.value})})),T=n(139),h=n(138),k=n(147),v=n(62),p=n.n(v).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"Access-Control-Allow-Origin":!0,"API-KEY":"367b5061-81a8-4346-a38b-61dffe8fe508","Content-Type":"application/json"}});!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(i||(i={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(a||(a={}));var I=function(){return p.get("todo-lists")},C=function(t){return p.post("todo-lists",{title:t})},g=function(t){return p.delete("todo-lists/".concat(t))},x=function(t,e){return p.put("todo-lists/".concat(t),{title:e})},S=function(t){return p.get("todo-lists/".concat(t,"/tasks"))},m=function(t,e){return p.delete("todo-lists/".concat(t,"/tasks/").concat(e))},E=function(t,e){return p.post("todo-lists/".concat(t,"/tasks"),{title:e})},D=function(t,e,n){return p.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},A=o.a.memo((function(t){var e=Object(r.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(r.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?i.Completed:i.New,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(r.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(c.jsxs)("div",{className:t.task.status===i.Completed?"is-done":"",children:[Object(c.jsx)(k.a,{checked:t.task.status===i.Completed,color:"primary",onChange:n}),Object(c.jsx)(b,{value:t.task.title,onChange:a}),Object(c.jsx)(j.a,{onClick:e,children:Object(c.jsx)(h.a,{})})]},t.task.id)})),L=n(22),y=n(40),w=n(30),N=n(12),F={},K=o.a.memo((function(t){var e=Object(L.b)();Object(r.useEffect)((function(){var n;e((n=t.id,function(t){S(n).then((function(e){var i=e.data.items;t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(i,n))}))}))}),[]);var n=Object(r.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),a=Object(r.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t.id,t.changeTodolistTitle]),o=Object(r.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.id,t.changeFilter]),s=Object(r.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.id,t.changeFilter]),l=Object(r.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.id,t.changeFilter]),d=t.tasks;return"active"===t.filter&&(d=t.tasks.filter((function(t){return t.status===i.New}))),"completed"===t.filter&&(d=t.tasks.filter((function(t){return t.status===i.Completed}))),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:[Object(c.jsx)(b,{value:t.title,onChange:a}),Object(c.jsx)(j.a,{onClick:function(){t.removeTodolist(t.id)},children:Object(c.jsx)(h.a,{})})]}),Object(c.jsx)(O,{addItem:n}),Object(c.jsx)("div",{children:d.map((function(e){return Object(c.jsx)(A,{task:e,todolistId:t.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus},e.id)}))}),Object(c.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(c.jsx)(T.a,{variant:"all"===t.filter?"outlined":"text",onClick:o,color:"default",children:"All"}),Object(c.jsx)(T.a,{variant:"active"===t.filter?"outlined":"text",onClick:s,color:"primary",children:"Active"}),Object(c.jsx)(T.a,{variant:"completed"===t.filter?"outlined":"text",onClick:l,color:"secondary",children:"Completed"})]})]})})),H=n(140),G=n(141),M=n(143),R=n(144),P=n(145),U=n(105),V=n(142),B=n(148),J=[],q=function(t){return function(e){C(t).then((function(){e(function(t){return{type:"ADD-TODOLIST",title:t,todolistId:Object(B.a)()}}(t))}))}};var Y=function(){var t=Object(L.c)((function(t){return t.todolists})),e=Object(L.c)((function(t){return t.tasks})),n=Object(L.b)();Object(r.useEffect)((function(){n((function(t){I().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data})}))}))}),[]);var i=Object(r.useCallback)((function(t,e){var i=function(t,e){return function(n){m(e,t).then((function(){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(i)}))}}(t,e);n(i)}),[]),a=Object(r.useCallback)((function(t,e){var i=function(t,e){return function(n){E(t,e).then((function(t){var e={type:"ADD-TASK",task:t.data.data.item};n(e)}))}}(e,t);n(i)}),[]),o=Object(r.useCallback)((function(t,e,i){var a=function(t,e,n){return function(i,a){var c=a().tasks[n].find((function(e){return e.id===t}));if(c){var r={title:c.title,startDate:c.startDate,priority:c.priority,description:c.description,deadline:c.deadline,status:e};D(n,t,r).then((function(){var a=function(t,e,n){return{type:"CHANGE-TASK-STATUS",status:e,todolistId:n,taskId:t}}(t,e,n);i(a)}))}else console.warn("error, not found task in the state")}}(t,e,i);n(a)}),[]),s=Object(r.useCallback)((function(t,e,i){var a=function(t,e,n){return function(i,a){var c=a().tasks[n].find((function(e){return e.id===t}));if(c){var r={title:e,startDate:c.startDate,priority:c.priority,description:c.description,deadline:c.deadline,status:c.status};D(n,t,r).then((function(){var a=function(t,e,n){return{type:"CHANGE-TASK-TITLE",taskId:t,title:e,todolistId:n}}(t,e,n);i(a)}))}else console.warn("error, not found task in the state")}}(t,e,i);n(a)}),[]),l=Object(r.useCallback)((function(t,e){var i={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};n(i)}),[]),d=Object(r.useCallback)((function(t){var e,i=(e=t,function(t){g(e).then((function(){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e))}))});n(i)}),[]),u=Object(r.useCallback)((function(t,e){var i=function(t,e){return function(n){x(t,e).then((function(){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);n(i)}),[]),f=Object(r.useCallback)((function(t){var e=q(t);n(e)}),[n]);return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(H.a,{position:"static",children:Object(c.jsxs)(G.a,{children:[Object(c.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(c.jsx)(V.a,{})}),Object(c.jsx)(M.a,{variant:"h6",children:"News"}),Object(c.jsx)(T.a,{color:"inherit",children:"Login"})]})}),Object(c.jsxs)(R.a,{fixed:!0,children:[Object(c.jsx)(P.a,{container:!0,style:{padding:"20px"},children:Object(c.jsx)(O,{addItem:f})}),Object(c.jsx)(P.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(c.jsx)(P.a,{item:!0,children:Object(c.jsx)(U.a,{style:{padding:"10px"},children:Object(c.jsx)(K,{id:t.id,title:t.title,tasks:n,removeTask:i,changeFilter:l,addTask:a,changeTaskStatus:o,filter:t.filter,removeTodolist:d,changeTaskTitle:s,changeTodolistTitle:u})})},t.id)}))})]})]})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),c(t),r(t)}))},Q=n(28),W=n(64),X=Object(Q.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":var n=Object(N.a)({},t),i=n[e.todolistId],a=i.filter((function(t){return t.id!==e.taskId}));return n[e.todolistId]=a,n;case"ADD-TASK":var c=Object(N.a)({},t),r=c[e.task.todoListId],o=[e.task].concat(Object(w.a)(r));return c[e.task.todoListId]=o,c;case"CHANGE-TASK-STATUS":var s=Object(N.a)({},t),l=s[e.todolistId],d=l.map((function(t){return t.id===e.taskId?Object(N.a)(Object(N.a)({},t),{},{status:e.status}):t}));return s[e.todolistId]=d,s;case"CHANGE-TASK-TITLE":var u=Object(N.a)({},t),j=u[e.todolistId],f=j.map((function(t){return t.id===e.taskId?Object(N.a)(Object(N.a)({},t),{},{title:e.title}):t}));return u[e.todolistId]=f,u;case"ADD-TODOLIST":return Object(N.a)(Object(N.a)({},t),{},Object(y.a)({},e.todolistId,[]));case"REMOVE-TODOLIST":var O=Object(N.a)({},t);return delete O[e.id],O;case"SET-TODOLISTS":var b=Object(N.a)({},t);return e.todolists.forEach((function(t){b[t.id]=[]})),b;case"SET-TASKS":var T=Object(N.a)({},t);return T[e.todolistId]=e.tasks,T;default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[{id:e.todolistId,title:e.title,filter:"all",addedDate:"",order:0}].concat(Object(w.a)(t));case"CHANGE-TODOLIST-TITLE":var n=t.find((function(t){return t.id===e.id}));return n&&(n.title=e.title),Object(w.a)(t);case"CHANGE-TODOLIST-FILTER":var i=t.find((function(t){return t.id===e.id}));return i&&(i.filter=e.filter),Object(w.a)(t);case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(N.a)(Object(N.a)({},t),{},{filter:"all"})}));default:return t}}}),Z=Object(Q.d)(X,Object(Q.a)(W.a));window.store=Z,l.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(L.a,{store:Z,children:Object(c.jsx)(Y,{})})}),document.getElementById("root")),z()},78:function(t,e,n){},79:function(t,e,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.785d3dd0.chunk.js.map