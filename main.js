(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),d=n.n(i)()(r());d.push([e.id,'/* || Custom properties */\n\n:root {\n  --main-text-color: #eeeeee;\n  --highlight-color: #de4c4a;\n  --hover-color: #363636;\n  --outline-color: #808080;\n  --main-bg-color: #1f1f1f;\n  --sidebar-color: #282828;\n  --low-priority-color: #5297ff;\n  --medium-priority-color: #ff9a14;\n  --high-priority-color: #ff7066;\n}\n\n/* || General styles */\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: minmax(min-content, 2fr) 5fr;\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--main-text-color);\n}\n\n.flex {\n  display: flex;\n}\n\n.flexColumn {\n  flex-direction: column;\n}\n\n.hidden {\n  display: none;\n}\n\n/* || Sidebar */\n\n.sidebar {\n  background-color: var(--sidebar-color);\n  padding: 2rem 2rem 0;\n}\n\n.heading {\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 0.5rem;\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n\n.newProjectBtn {\n  border: 0;\n  background-color: transparent;\n  font-size: 1rem;\n  color: var(--main-text-color);\n  margin-right: 0.5rem;\n}\n\n.projectsEntry,\n#addProject,\n.editProjectWrapper {\n  padding: 0.5rem;\n  height: 2rem;\n}\n\n.newProject,\n.projectsEntry,\n#addProject,\n.editProjectWrapper {\n  border-radius: 5px;\n}\n\n#addProject:hover,\n.projectsEntry:hover,\n.todoRight > button:hover,\n.activeProject,\n.editProjectWrapper {\n  background-color: var(--hover-color);\n}\n\n.projectBtnsWrapper button,\n.newProjectBtn {\n  display: none;\n}\n\n.projectsEntry:hover .projectBtnsWrapper button,\n#addProject:hover .newProjectBtn {\n  display: initial;\n}\n\n/* || Add Project Menu */\n\n.sidebar form > input,\n.editProjectWrapper > input {\n  height: 1rem;\n}\n\n#formProjectName {\n  background-color: var(--sidebar-color);\n}\n\n/* || Edit Project */\n.editProject .editProjectWrapper {\n  column-gap: 1rem;\n  align-items: center;\n}\n\n.editProjectName {\n  background-color: var(--hover-color);\n}\n\n.editProjectWrapper button:disabled svg {\n  stroke: var(--outline-color);\n}\n\n/* || Main */\n\nmain {\n  background-color: var(--main-bg-color);\n  justify-content: center;\n}\n\n.projectDisplay {\n  width: 90%;\n  padding: 2rem;\n}\n\n.projectTitle {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n#projectsList,\n.todosList {\n  list-style-type: none;\n}\n\n.todosList > li {\n  border-top: 1px solid var(--hover-color);\n}\n\n.todosList > li:first-child {\n  border-top: none;\n}\n\n.projectTodo,\n#addTodo {\n  padding: 0.5rem;\n}\n\n.projectTodo,\n.projectsEntry,\n#addProject,\n.editProjectWrapper {\n  justify-content: space-between;\n}\n\n.projectTodo > div,\n.projectsEntry,\n.editProjectWrapper {\n  align-items: center;\n}\n\n.taskCheckbox {\n  border: 1px solid var(--outline-color);\n  transition: 0.3s;\n}\n\n.taskCheckbox:hover {\n  background-color: var(--outline-color);\n  transition: 0.3s;\n}\n\n.todoRight {\n  column-gap: 1rem;\n  color: var(--outline-color);\n}\n\n.todoRight > button,\n.projectBtnsWrapper > button,\n.editProject button {\n  border: 0;\n  border-radius: 5px;\n  background-color: transparent;\n  color: var(--main-text-color);\n  height: 24px;\n}\n\n.taskCheckbox,\n.addTaskBtn {\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  margin-right: 0.5rem;\n  background-color: transparent;\n}\n\n.complete {\n  color: var(--outline-color);\n  text-decoration: line-through;\n}\n\n.complete .taskCheckbox {\n  background-color: var(--outline-color);\n}\n\n.newProjectBtn,\n.addTaskBtn {\n  line-height: 1rem;\n}\n\n#addProject span,\n.newProjectBtn,\n#addTodo span,\n.editProjectName {\n  color: var(--outline-color);\n}\n\n#addProject:hover span,\n#addProject:hover .newProjectBtn,\n.addTask:hover span,\n.addTaskBtn {\n  color: var(--highlight-color);\n}\n\n.addTask:hover .addTaskBtn {\n  color: var(--main-text-color);\n  background-color: var(--highlight-color);\n}\n\n/* || Add Task Menu */\n.addProjectMenuWrapper,\n.addTodoMenuWrapper {\n  padding-top: 0.5rem;\n}\n\n.addForm,\nform input[type="date"],\nform select {\n  border: 1px solid var(--hover-color);\n  border-radius: 10px;\n  padding: 0.5rem;\n}\n\ninput,\nselect,\ntextarea {\n  font-size: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--main-text-color);\n  outline: none;\n}\n\nmain form > input,\nmain form > select,\nmain form > textarea {\n  background-color: var(--main-bg-color);\n}\n\nform input[type="date"],\nform select {\n  border-radius: 5px;\n  padding: 0.25rem;\n}\n\n::-webkit-calendar-picker-indicator {\n  color-scheme: dark;\n}\n\ninput[type="text"],\ntextarea {\n  width: 100%;\n}\n\nform input[type="text"] {\n  height: 1rem;\n  margin-bottom: 0.5rem;\n}\n\nform textarea {\n  resize: none;\n  overflow-y: auto;\n  padding-right: 1rem;\n}\n\n.addFormBtns {\n  margin-top: 0.5rem;\n  column-gap: 0.75rem;\n}\n\n.addFormMainBtn {\n  background-color: var(--highlight-color);\n}\n\n.addFormMainBtn:hover:enabled {\n  background-color: #c53727;\n}\n\n.addFormMainBtn:disabled {\n  filter: brightness(0.8);\n}\n\n.addFormCancelBtn {\n  background-color: #292929;\n}\n\n.addFormCancelBtn:hover {\n  background-color: #3d3d3d;\n}\n\n.addFormMainBtn,\n.addFormCancelBtn {\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  color: var(--main-text-color);\n  font-size: 0.9rem;\n  padding: 0.5rem 0.75rem;\n}\n\n/* || Modal */\n.modal {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #000000;\n  background-color: #00000040;\n  justify-content: center;\n  align-items: center;\n}\n\n.modalContent {\n  width: 100%;\n  max-width: 45%;\n  min-height: 45%;\n  background-color: var(--sidebar-color);\n  border-radius: 10px;\n  padding: 2rem;\n  row-gap: 1rem;\n}\n\n.modalHeader {\n  justify-content: space-between;\n}\n\n.modalTitle {\n  font-size: 1.1rem;\n}\n\n.modalCloseBtn {\n  background-color: transparent;\n}\n\n.modalCloseBtn:hover svg {\n  stroke: var(--main-text-color);\n}\n\n.modalTodoTitle {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.modalTodoDescription {\n  max-height: 25vh;\n  overflow-y: auto;\n}\n\n.modalTodoInfo {\n  column-gap: 0.5rem;\n}\n\n.modalTodoInfo > div {\n  border: 1px solid var(--outline-color);\n  border-radius: 5px;\n  padding: 0.3rem 0.6rem;\n}\n\n.modal form > input,\n.modal form > select,\n.modal form > textarea {\n  background-color: var(--sidebar-color);\n}\n\n/* || Todo Priority */\n.low {\n  border-left: 5px solid var(--low-priority-color);\n}\n\n.medium {\n  border-left: 5px solid var(--medium-priority-color);\n}\n\n.high {\n  border-left: 5px solid var(--high-priority-color);\n}\n',""]);const a=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],s=o.base?c[0]+o.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=r(p,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:h,references:1})}d.push(u)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=n(i[d]);t[a].references--}for(var c=o(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),d=n.n(i),a=n(565),c=n.n(a),s=n(216),l=n.n(s),u=n(589),m=n.n(u),p=n(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=d().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var g,v=new Uint8Array(16);function j(){if(!g&&!(g="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(v)}const f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,y=function(e){return"string"==typeof e&&f.test(e)};for(var P=[],T=0;T<256;++T)P.push((T+256).toString(16).substr(1));const b=function(e,t,n){var o=(e=e||{}).random||(e.rng||j)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=o[r];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(P[e[t+0]]+P[e[t+1]]+P[e[t+2]]+P[e[t+3]]+"-"+P[e[t+4]]+P[e[t+5]]+"-"+P[e[t+6]]+P[e[t+7]]+"-"+P[e[t+8]]+P[e[t+9]]+"-"+P[e[t+10]]+P[e[t+11]]+P[e[t+12]]+P[e[t+13]]+P[e[t+14]]+P[e[t+15]]).toLowerCase();if(!y(n))throw TypeError("Stringified UUID is invalid");return n}(o)};class w{constructor(e){this.id=b(),this.title=e,this.projectTodos=[]}getID(){return this.id}setID(e){e&&(this.id=e)}getTitle(){return this.title}setTitle(e){e&&(this.title=e)}getProjectTodos(){return this.projectTodos}setProjectTodos(e){e&&(this.projectTodos=e)}addTodo(e){this.projectTodos.find((t=>t.id===e.id))||this.projectTodos.push(e)}deleteTodo(e){this.projectTodos=this.projectTodos.filter((t=>t.id!==e))}findTodo(e){return this.projectTodos.find((t=>t.id===e))}}class x{constructor(){this.allProjects=[new w("Inbox")],this.activeProject=this.getAllProjects()[0]}getAllProjects(){return this.allProjects}setAllProjects(e){e&&(this.allProjects=e)}getActiveProject(){return this.activeProject}setActiveProject(e){e&&(this.activeProject=e)}addProject(e){this.allProjects.find((t=>t.id===e.id))||this.allProjects.push(e)}deleteProject(e){this.allProjects=this.allProjects.filter((t=>t.id!==e))}findProject(e){return this.allProjects.find((t=>t.id===e))}}class k{constructor(e,t,n,o){this.id=b(),this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.complete=!1}getID(){return this.id}setID(e){e&&(this.id=e)}getTitle(){return this.title}setTitle(e){e&&(this.title=e)}getDescription(){return this.description}setDescription(e){e&&(this.description=e)}getDueDate(){return this.dueDate}setDueDate(e){e&&(this.dueDate=e)}getPriority(){return this.priority}setPriority(e){e&&(this.priority=e)}getComplete(){return this.complete}setComplete(e){this.complete=e}}class B{static checkData(){let e={};return localStorage.getItem("app")?e=this.restoreData():(e=new x,e.activeProject.addTodo(new k("Here's a test todo!","And here's a test description!","2022-04-30","Low")),e.activeProject.addTodo(new k("Here's another test todo!","And here's another test description!","2022-04-30","Medium")),e.activeProject.addTodo(new k("One more test todo!","One more test description!","2022-04-30","High"))),e}static storeData(e){window.localStorage.setItem("app",JSON.stringify(e))}static restoreData(){const e=JSON.parse(window.localStorage.getItem("app")),t=new x;return t.setAllProjects([]),e.allProjects.forEach((e=>{const n=new w(e.title);n.setID(e.id),n.setProjectTodos([]),e.projectTodos.forEach((e=>{const t=new k(e.title,e.description,e.dueDate,e.priority);t.complete=e.complete,t.id=e.id,n.getProjectTodos().push(t)})),t.getAllProjects().push(n)})),t.setActiveProject(t.findProject(e.activeProject.id)),t}}class E{static deleteItem(e){document.getElementById(e).remove()}static renderProject(e){const t=document.getElementById("projectsList"),n=document.getElementById("addProject"),o=document.createElement("li");o.classList.add("projectsEntry","flex"),o.id=e.getID(),o.innerHTML=`\n        <span>${e.getTitle()}</span>\n        <div class="projectBtnsWrapper">\n            <button class="projectEditBtn">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>\n            </button>\n            <button class="projectDelBtn">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>\n            </button>\n        </div>`,t.insertBefore(o,n)}static renderActiveProject(e){const t=document.querySelector(".activeProject");t&&t.classList.remove("activeProject"),document.getElementById(e.getID()).classList.add("activeProject"),document.querySelector(".projectTitle").innerText=e.getTitle()}static updateProjectName(e){document.getElementById(e.getID()).querySelector("span").innerText=e.getTitle()}static addProjectMenu(){const e=document.getElementById("addProject"),t=document.querySelector(".addProjectMenuWrapper");e.classList.add("hidden"),t.classList.remove("hidden")}static addProjectSubmit(){const e=document.getElementById("formProjectName").value;return new w(e)}static addProjectClear(){const e=document.getElementById("addProject"),t=document.querySelector(".addProjectMenuWrapper"),n=document.getElementById("addProjectForm");e.classList.remove("hidden"),t.classList.add("hidden"),n.reset(),document.getElementById("addProjectBtn").disabled=!0}static editProjectDisplay(e){const t=document.getElementById(e.getID());t.classList.add("hidden");const n=document.createElement("li");n.classList.add("editProject"),n.innerHTML=`\n            <div class="editProjectWrapper flex">\n                <input type="text" name="editProjectName" class="editProjectName" placeholder="Project name" value="${e.getTitle()}" autocomplete="off">\n                <button class="editProjectSubmit">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="#299438" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>\n                </button>\n                <button class="editProjectCancel">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="#DE4C4A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>\n                </button>\n            </div>`,t.after(n)}static editProjectSubmit(e){const t=document.getElementById(e.getID()).nextElementSibling.querySelector(".editProjectName");e.setTitle(t.value)}static editProjectClear(e){const t=document.getElementById(e);t.classList.remove("hidden"),t.nextElementSibling.remove()}static clearActiveProjectDisplay(){document.querySelector(".projectTitle").innerText="",document.querySelectorAll(".projectTodo").forEach((e=>{e.remove()}))}static renderTodo(e){const t=document.querySelector(".todosList"),n=document.getElementById("addTodo"),o=document.createElement("li");o.classList.add("projectTodo","flex"),o.id=e.getID(),e.getComplete()&&o.classList.add("complete"),"None"!==e.getPriority()&&o.classList.add(e.getPriority().toLowerCase()),o.innerHTML=`\n        <div class="todoLeft flex">\n            <button class="taskCheckbox"> </button>\n            <span>${e.getTitle()}</span>\n        </div>\n        <div class="todoRight flex">\n            <span class="taskDueDate">${e.getDueDate()}</span>\n            <button class="taskViewBtn">\n                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>\n            </button>\n            <button class="taskEditBtn">\n                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>\n            </button>\n            <button class="taskDelBtn">\n                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>\n            </button>\n        </div>`,t.insertBefore(o,n)}static addTodoMenu(){const e=document.getElementById("addTodo"),t=document.querySelector(".addTodoMenuWrapper");e.classList.add("hidden"),t.classList.remove("hidden")}static addTodoSubmit(){const e=document.getElementById("formTodoName").value,t=document.getElementById("formTodoDesc").value,n=document.getElementById("formTodoDueDate").value,o=document.getElementById("formTodoPriority").value;return new k(e,t,n,o)}static addTodoClear(){const e=document.getElementById("addTodo"),t=document.querySelector(".addTodoMenuWrapper"),n=document.getElementById("addTodoForm");e.classList.remove("hidden"),t.classList.add("hidden"),n.reset(),document.getElementById("addTodoBtn").disabled=!0}static showTodoDetails(e,t){const n=document.createElement("div");n.classList.add("modal","flex"),n.innerHTML=`\n        <div class="modalContent flex flexColumn">\n            <div class="modalHeader flex">\n                <div class="modalTitle">${t.title}</div>\n                <button class="modalCloseBtn">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>\n                </button>\n            </div>\n            <div class="modalTodoTitle">\n                ${e.getTitle()}\n            </div>\n            <div class="modalTodoDescription">\n                ${e.getDescription()}\n            </div>\n            <div class="modalTodoInfo flex">\n                <div>${e.getDueDate()}</div>\n                <div>${e.getPriority()}</div>\n                <div>${e.getComplete()?"Completed":"Not Completed"}</div>\n            </div>\n        </div>`,document.body.prepend(n)}static closeTodoModal(){document.querySelector(".modal").remove()}static editTodoMenu(e){const t=document.createElement("div");t.classList.add("modal","flex"),t.innerHTML=`\n        <div class="modalContent flex flexColumn">\n            <div class="modalHeader flex">\n                <div class="modalTitle">Edit task</div>\n                <button class="modalCloseBtn">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>\n                </button>\n            </div>\n            <form onsubmit="return false;" class="addForm" id="editTodoForm">\n                <input type="text" name="todoName" id="editTodoName" placeholder="Task name" value="${e.getTitle()}" autocomplete="off">\n                <textarea name="todoDesc" id="editTodoDesc" placeholder="Description">${e.getDescription()}</textarea>\n                <input type="date" name="todoDueDate" id="editTodoDueDate" value="${e.getDueDate()}">\n                <select name="todoPriority" id="editTodoPriority">\n                    ${"None"===e.getPriority()?'<option value="None" selected>None</option>':'<option value="None">None</option>'}\n                    ${"Low"===e.getPriority()?'<option value="Low" selected>Low</option>':'<option value="Low">Low</option>'}\n                    ${"Medium"===e.getPriority()?'<option value="Medium" selected>Medium</option>':'<option value="Medium">Medium</option>'}\n                    ${"High"===e.getPriority()?'<option value="High" selected>High</option>':'<option value="High">High</option>'}\n                </select>\n            </form>\n            <div class="addFormBtns flex">\n                <button class="addFormMainBtn" id="editTodoBtn">Save</button>\n                <button class="addFormCancelBtn" id="editTodoCancel">Cancel</button>\n            </div>\n        </div>`,document.body.prepend(t)}static editTodoSubmit(e){e.setTitle(document.getElementById("editTodoName").value),e.setDescription(document.getElementById("editTodoDesc").value),e.setDueDate(document.getElementById("editTodoDueDate").value),e.setPriority(document.getElementById("editTodoPriority").value)}static updateTodo(e){const t=document.getElementById(e.getID());["low","medium","high"].forEach((e=>{t.classList.contains(e)&&t.classList.remove(e)})),"None"!==e.getPriority()&&t.classList.add(e.getPriority().toLowerCase()),t.querySelector(".todoLeft").querySelector("span").innerText=e.getTitle(),t.querySelector(".taskDueDate").innerText=e.getDueDate()}static toggleTodoStatus(e){const t=document.getElementById(e);t.classList.contains("complete")?t.classList.remove("complete"):t.classList.add("complete")}}const L=B.checkData();(class{static pageLoad(){this.renderSidebar(),this.renderMain(),this.addProjectListeners(),this.addTodoListeners()}static renderSidebar(){L.getAllProjects().forEach((e=>{E.renderProject(e),this.singleProjectListeners()}))}static renderMain(){E.clearActiveProjectDisplay(),E.renderActiveProject(L.getActiveProject()),L.getActiveProject().projectTodos.forEach((e=>{E.renderTodo(e),this.todoOptionsBtns()}))}static addProjectListeners(){this.addProjectMenu(),this.addProjectSubmitChecker(),this.addProjectSubmit(),this.addProjectCancelBtn()}static singleProjectListeners(){this.switchActiveProjectListener(),this.editProjectDisplay(),this.deleteProject()}static editProjectListeners(e){this.editProjectSubmitChecker(e),this.editProjectSubmit(e),this.editProjectCancel(e)}static switchActiveProjectListener(){const e=document.getElementById("addProject").previousElementSibling;e.addEventListener("click",(()=>{L.getActiveProject().id!==e.id&&this.switchActiveProject(e.id)}))}static switchActiveProject(e){L.setActiveProject(L.findProject(e)),this.renderMain(),B.storeData(L)}static addProjectMenu(){document.getElementById("addProject").addEventListener("click",(()=>{E.addProjectMenu()}))}static addProjectSubmitChecker(){const e=document.getElementById("formProjectName"),t=document.getElementById("addProjectBtn");e.addEventListener("input",(()=>{t.disabled=!e.value.length}))}static addProjectSubmit(){document.getElementById("addProjectBtn").addEventListener("click",(()=>{L.addProject(E.addProjectSubmit()),E.renderProject(L.getAllProjects()[L.getAllProjects().length-1]),E.addProjectClear(),this.singleProjectListeners(),B.storeData(L)}))}static addProjectCancelBtn(){document.getElementById("addProjectCancel").addEventListener("click",(()=>{E.addProjectClear()}))}static editProjectDisplay(){const e=document.getElementById("addProject").previousElementSibling,{id:t}=e,n=L.findProject(t);e.querySelector(".projectEditBtn").addEventListener("click",(e=>{E.editProjectDisplay(n),this.editProjectListeners(t),e.stopPropagation()}))}static editProjectSubmitChecker(e){const t=document.getElementById(e).nextElementSibling,n=t.querySelector(".editProjectName"),o=t.querySelector(".editProjectSubmit");n.addEventListener("input",(()=>{o.disabled=!n.value.length}))}static editProjectSubmit(e){const t=document.getElementById(e).nextElementSibling,n=L.findProject(e);t.querySelector(".editProjectSubmit").addEventListener("click",(()=>{E.editProjectSubmit(n),E.editProjectClear(e),E.updateProjectName(n),e===L.getActiveProject().id&&E.renderActiveProject(L.getActiveProject()),B.storeData(L)}))}static editProjectCancel(e){document.getElementById(e).nextElementSibling.querySelector(".editProjectCancel").addEventListener("click",(()=>{E.editProjectClear(e)}))}static deleteProject(){const e=document.getElementById("addProject").previousElementSibling,{id:t}=e;e.querySelector(".projectDelBtn").addEventListener("click",(e=>{1===L.getAllProjects().length?window.alert("You can't delete your last project!"):(L.deleteProject(t),E.deleteItem(t)),L.getActiveProject().id===t&&(L.setActiveProject(L.getAllProjects()[0]),this.switchActiveProject(L.getActiveProject().id)),B.storeData(L),e.stopPropagation()}))}static addTodoListeners(){this.addTodoMenu(),this.addTodoSubmitChecker(),this.addTodoSubmit(),this.addTodoCancelBtn()}static addTodoMenu(){document.getElementById("addTodo").addEventListener("click",(()=>{E.addTodoMenu()}))}static addTodoSubmitChecker(){const e=document.getElementById("formTodoName"),t=document.getElementById("addTodoBtn");e.addEventListener("input",(()=>{t.disabled=!e.value.length}))}static addTodoSubmit(){document.getElementById("addTodoBtn").addEventListener("click",(()=>{L.getActiveProject().addTodo(E.addTodoSubmit()),E.addTodoClear(),E.renderTodo(L.getActiveProject().getProjectTodos()[L.getActiveProject().getProjectTodos().length-1]),this.todoOptionsBtns(),B.storeData(L)}))}static addTodoCancelBtn(){document.getElementById("addTodoCancel").addEventListener("click",(()=>{E.addTodoClear()}))}static todoOptionsBtns(){const e=document.getElementById("addTodo").previousElementSibling;this.toggleTodoStatus(e),this.viewTodo(e),this.editTodo(e),this.deleteTodo(e)}static toggleTodoStatus(e){const t=e.querySelector(".taskCheckbox");t.addEventListener("click",(()=>{const{id:e}=t.parentNode.parentNode;E.toggleTodoStatus(e);const n=L.getActiveProject().findTodo(e);n.complete=!n.complete,B.storeData(L)}))}static viewTodo(e){const t=e.querySelector(".taskViewBtn");t.addEventListener("click",(()=>{const e=L.getActiveProject().findTodo(t.parentNode.parentNode.id);E.showTodoDetails(e,L.getActiveProject()),this.todoModalCloseListener()}))}static todoModalCloseListener(){document.querySelector(".modalCloseBtn").addEventListener("click",(()=>{E.closeTodoModal()}))}static editTodo(e){const t=e.querySelector(".taskEditBtn");t.addEventListener("click",(()=>{const e=L.getActiveProject().findTodo(t.parentNode.parentNode.id);E.editTodoMenu(e),this.editTodoListeners(e)}))}static editTodoListeners(e){this.todoModalCloseListener(),this.editTodoSubmit(e),this.editTodoSubmitChecker(),this.editTodoCancel()}static editTodoSubmit(e){document.getElementById("editTodoBtn").addEventListener("click",(()=>{E.editTodoSubmit(e),E.closeTodoModal(),E.updateTodo(e),B.storeData(L)}))}static editTodoSubmitChecker(){const e=document.getElementById("editTodoName"),t=document.getElementById("editTodoBtn");e.addEventListener("input",(()=>{t.disabled=!e.value.length}))}static editTodoCancel(){document.getElementById("editTodoCancel").addEventListener("click",(()=>{E.closeTodoModal()}))}static deleteTodo(e){const t=e.querySelector(".taskDelBtn");t.addEventListener("click",(()=>{const{id:e}=t.parentNode.parentNode;L.getActiveProject().deleteTodo(e),E.deleteItem(e),B.storeData(L)}))}}).pageLoad()})()})();