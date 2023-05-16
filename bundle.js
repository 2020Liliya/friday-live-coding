(()=>{"use strict";(()=>{class t{constructor(t){let{id:e,title:s,urlToImage:a,tags:o,...i}=t;this.id=e,this.title=s,this.urlToImage=a,this.tags=o}generateArticle(){let t="",e=document.createElement("article");if(e.className="strategy block-shadowed",e.setAttribute("data-id",this.id),this.urlToImage&&(t+=`<img class="strategy__image" src=${this.urlToImage} alt="strategy">`),this.title||this.tags)return t+='<div class="strategy__content">',this.title&&(t+=`<h3 class="strategy__name">${this.title}</h3>`),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.map((e=>{t+=`<span class="tag tag_colored">${e}</span>`})),t+="</div>"),t+="</div>",e.innerHTML=t,e}}class e{constructor(t){this.classes=t,this.modal="",this.modalContent="",this.modalCloseBtn="",this.overlay=""}buildModal(t){this.overlay=this.createDomNode(this.overlay,"div","overlay","overlay_modal"),this.modal=this.createDomNode(this.modal,"div","modal",this.classes),this.modalContent=this.createDomNode(this.modalContent,"div","modal__content"),this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"span","modal__close-icon"),this.modalCloseBtn.innerHTML='<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg>',this.setContent(t),this.appendModalElements(),this.bindEvents(),this.openModal()}createDomNode(t,e){t=document.createElement(e);for(var s=arguments.length,a=new Array(s>2?s-2:0),o=2;o<s;o++)a[o-2]=arguments[o];return t.classList.add(...a),t}setContent(t){"string"==typeof t?this.modalContent.innerHTML=t:(this.modalContent.innerHTML="",this.modalContent.appendChild(t))}appendModalElements(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}bindEvents(){this.modalCloseBtn.addEventListener("click",this.closeModal),this.overlay.addEventListener("click",this.closeModal)}openModal(){document.body.append(this.overlay)}closeModal(t){let e=t.target.classList;(e.contains("overlay")||e.contains("modal__close-icon"))&&document.querySelector(".overlay").remove()}}class s extends e{constructor(t,e){let{id:s,title:a,urlToImage:o,tags:i,content:n,date:r}=e;super(t),this.id=s,this.title=a,this.urlToImage=o,this.tags=i,this.content=n,this.date=r}generateContent(){let t="",e=document.createElement("div");if(e.className="strategy block-shadowed",this.urlToImage&&(t+=`<img class="strategy__image" src=${this.urlToImage} alt="strategy">`),this.title||this.tags||this.content||this.date)return t+='<div class="strategy__content">',this.date&&(t+=`<p class="strategy__date">${this.date}</p>`),this.title&&(t+=`<h3 class="strategy__name">${this.title}</h3>`),this.content&&(t+=`<p class="strategy__text">${this.content}</p>`),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.map((e=>{t+=`<span class="tag tag_colored">${e}</span>`})),t+="</div>"),t+="</div>",e.innerHTML=t,e}renderModal(){let t=this.generateContent();super.buildModal(t)}}const a=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"1. Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.jpg",tags:["Culture"],content:"2. Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.jpg",tags:["Culture","Design","Art"],content:"3. Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:4,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/4.jpg",tags:["Design"],content:"4. Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"}];window.onload=function(){console.log("Hello World Ever!"),a&&d(),o(),g()};const o=()=>{document.querySelector(".strategies__tags").addEventListener("click",(t=>{if(t.target.classList.contains("tag")){let e=t.target;i(),n(e),"All"===e.innerText?r():l(e.innerText)}}))},i=()=>{document.querySelectorAll(".strategies__tags .tag").forEach((t=>{t.classList.remove("tag_selected"),t.classList.add("tag_bordered")}))},n=t=>{t.classList.add("tag_selected"),t.classList.remove("tag_bordered")},r=()=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((t=>{t.classList.remove("strategy_hidden")}))},l=t=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((e=>{e.classList.add("strategy_hidden"),e.querySelectorAll(".tag").forEach((s=>{s.innerText===t&&e.classList.remove("strategy_hidden")}))}))},d=()=>{const t=c();h(a).forEach((e=>{t.append(e.generateArticle())})),y()},c=()=>{const t=document.querySelector(".strategy-wrapper");return t.innerHTML="",t},h=e=>{let s=[];return e.forEach((e=>{s.push(new t(e))})),s},g=()=>{document.querySelector(".tools__button .button").addEventListener("click",(()=>{m()}))},m=()=>{u("Text content for tools modal")},u=t=>{new e("tools-modal").buildModal(t)},y=()=>{document.querySelector(".strategy-wrapper").addEventListener("click",(t=>{if(t.target.closest(".strategy")){let e=t.target.closest(".strategy").getAttribute("data-id"),s=p(e);f(s)}}))},p=t=>a.find((e=>e.id==t)),f=t=>{let e=new s("article-modal",t);e.renderModal(),console.log(e)}})()})();