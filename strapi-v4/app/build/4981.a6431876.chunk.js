(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4981],{1107:(C,I,t)=>{var s=t(84856),e=t(52593),h=e(s);C.exports=h},92403:(C,I,t)=>{var s=t(1107),e=t(47727);function h(c,D){var u=-1,l=e(c)?Array(c.length):[];return s(c,function(r,R,U){l[++u]=D(r,R,U)}),l}C.exports=h},16429:(C,I,t)=>{var s=t(36393),e=t(82393),h=t(90040),c=t(92403),D=t(63135),u=t(20435),l=t(9998),r=t(51339),R=t(26126);function U(m,f,V){f.length?f=s(f,function(B){return R(B)?function(z){return e(z,B.length===1?B[0]:B)}:B}):f=[r];var w=-1;f=s(f,u(h));var G=c(m,function(B,z,K){var k=s(f,function(y){return y(B)});return{criteria:k,index:++w,value:B}});return D(G,function(B,z){return l(B,z,V)})}C.exports=U},63135:C=>{function I(t,s){var e=t.length;for(t.sort(s);e--;)t[e]=t[e].value;return t}C.exports=I},17654:(C,I,t)=>{var s=t(85194);function e(h,c){if(h!==c){var D=h!==void 0,u=h===null,l=h===h,r=s(h),R=c!==void 0,U=c===null,m=c===c,f=s(c);if(!U&&!f&&!r&&h>c||r&&R&&m&&!U&&!f||u&&R&&m||!D&&m||!l)return 1;if(!u&&!r&&!f&&h<c||f&&D&&l&&!u&&!r||U&&D&&l||!R&&l||!m)return-1}return 0}C.exports=e},9998:(C,I,t)=>{var s=t(17654);function e(h,c,D){for(var u=-1,l=h.criteria,r=c.criteria,R=l.length,U=D.length;++u<R;){var m=s(l[u],r[u]);if(m){if(u>=U)return m;var f=D[u];return m*(f=="desc"?-1:1)}}return h.index-c.index}C.exports=e},52593:(C,I,t)=>{var s=t(47727);function e(h,c){return function(D,u){if(D==null)return D;if(!s(D))return h(D,u);for(var l=D.length,r=c?l:-1,R=Object(D);(c?r--:++r<l)&&u(R[r],r,R)!==!1;);return D}}C.exports=e},51006:(C,I,t)=>{var s=t(93367),e=t(16429),h=t(52431),c=t(65145),D=h(function(u,l){if(u==null)return[];var r=l.length;return r>1&&c(u,l[0],l[1])?l=[]:r>2&&c(l[0],l[1],l[2])&&(l=[l[0]]),e(u,s(l,1),[])});C.exports=D},34981:(C,I,t)=>{"use strict";t.r(I),t.d(I,{SettingsPage:()=>as,makeUniqueRoutes:()=>ht});var s=t(74081),e=t(27279),h=t(50703),c=t(78406),D=t(97767),u=t(4987),l=t(93841),r=t(93415),R=t(5938),U=t(6918),m=t(32370),f=t(69878),V=t(94098),w=t(84366),G=t(61908),B=t(12881),z=t(35250),K=t(48102),k=t(1821),y=t(10701),Mt=t(55911),Pt=t(77804),ut=t(98410),Dt=t(1597),Ot=t(77011),pt=t(67909),xt=t(9902),nt=t(83375),Ct=t(94485),at=t(27997),ft=t(73354),Lt=t(27875),vt=t(74758),ot=t(23298),$=t(74577),it=t(68412),L=t(87006),At=t(364),S=t(61020),H=t(51447),Rt=t(47533),Z=t(88220),jt=t(51006),et=t(59461),dt=t(13067),Bt=t(71877),Tt=t(17912),It=t(96220),Ut=t(20534),yt=t(49370),Wt=t(91561),Kt=t(36938),St=t(84352),zt=t(80153),Zt=t(59082),lt=t(48157),rt=t(72450),Ft=t(76873),_t=t(5466),Nt=t(53532),os=t(15816),is=t(97442),es=t(13576),ds=t(87830),ls=t(47184),rs=t(71563),gs=t(49204),cs=t(47853),ms=t(74919),Es=t(29206),hs=t(40464),Ms=t(98934),Ps=t(43433),us=t(75719),Ds=t(8175),Os=t(6078),ps=t(51943),xs=t(55783),Cs=t(92249),fs=t(41942),Ls=t(22919),vs=t(53915),As=t(75041),Rs=t(30200),js=t(91379),Bs=t(33299),Ts=t(33409),Is=t(63645),Us=t(7988),ys=t(7055),Ws=t(26757),Ks=t(58311),Ss=t(24840),zs=t(29510),Zs=t(16946),Fs=t(10124),_s=t(69530),Ns=t(86961),Vs=t(51527),Gs=t(19764),$s=t(42982),Hs=t(26126),Qs=t(64797),Js=t(85811);const Vt=n=>n.map(a=>{const o=a.links.map(M=>({...M,isDisplayed:!1}));return{...a,links:o}}),Gt=()=>{const[{isLoading:n,menu:a},o]=e.useState({isLoading:!0,menu:[]}),{allPermissions:M}=(0,L.vn)(),{shouldUpdateStrapi:g}=(0,L.L7)(),{settings:E}=(0,L.j1)(),O=(0,et.v9)(dt.s),p=e.useMemo(()=>(0,Z.y)(),[]),{admin:i,global:d}=(0,Z.p)(p,async()=>(await t.e(5030).then(t.bind(t,85030))).SETTINGS_LINKS_EE(),{combine(x,v){return{admin:[...v.admin,...x.admin],global:[...x.global,...v.global]}},defaultValue:{admin:[],global:[]}}),P=e.useCallback(x=>{if(!x.id)throw new Error("The settings menu item must have an id attribute.");return{...x,permissions:O.settings?.[x.id]?.main??[]}},[O.settings]);return e.useEffect(()=>{const x=async()=>{const Y=await(X=>Promise.all(X.reduce((W,_,N)=>{const tt=_.links.map(async(st,b)=>({hasPermission:await(0,L.qX)(M,st.permissions),sectionIndex:N,linkIndex:b}));return[...W,...tt]},[])))(T);o(X=>({...X,isLoading:!1,menu:T.map((W,_)=>({...W,links:W.links.map((N,tt)=>{const st=Y.find(b=>b.sectionIndex===_&&b.linkIndex===tt);return{...N,isDisplayed:Boolean(st?.hasPermission)}})}))}))},{global:v,...j}=E,T=Vt([{...v,links:jt([...v.links,...d.map(P)],A=>A.id).map(A=>({...A,hasNotification:A.id==="000-application-infos"&&g}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:i.map(P)},...Object.values(j)]);x()},[i,d,M,E,g,P]),{isLoading:n,menu:a.map(x=>({...x,links:x.links.filter(v=>v.isDisplayed)}))}},$t=(0,rt.ZP)(h.J)`
  right: 15px;
  position: absolute;
`,Ht=({menu:n})=>{const{formatMessage:a}=(0,S.Z)(),{trackUsage:o}=(0,L.rS)(),{pathname:M}=(0,H.TH)(),E=n.filter(i=>!i.links.every(d=>d.isDisplayed===!1)).map(i=>({...i,title:i.intlLabel,links:i.links.map(d=>({...d,title:d.intlLabel,name:d.id}))})),O=a({id:"global.settings",defaultMessage:"Settings"}),p=i=>()=>{o("willNavigate",{from:M,to:i})};return(0,s.jsxs)(Bt.m,{ariaLabel:O,children:[(0,s.jsx)(Tt.p,{label:O}),(0,s.jsx)(It.Z,{children:E.map(i=>(0,s.jsx)(Ut.D,{label:a(i.intlLabel),children:i.links.map(d=>(0,s.jsxs)(yt.E,{as:Rt.OL,withBullet:d.hasNotification,to:d.to,onClick:p(d.to),children:[a(d.intlLabel),d?.lockIcon&&(0,s.jsx)($t,{width:`${15/16}rem`,height:`${15/16}rem`,as:Wt.Z})]},d.id))},i.id))})]})},Qt=[{async Component(){const{ProtectedListPage:n}=await t.e(5634).then(t.bind(t,35634));return n},to:"/settings/roles",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await Promise.all([t.e(4260),t.e(6734),t.e(9339)]).then(t.bind(t,9339));return n},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await Promise.all([t.e(4260),t.e(6734),t.e(9339)]).then(t.bind(t,9339));return n},to:"/settings/roles/new",exact:!0},{async Component(){const{ProtectedEditPage:n}=await Promise.all([t.e(6734),t.e(3334)]).then(t.bind(t,13334));return n},to:"/settings/roles/:id",exact:!0},{async Component(){const{ProtectedListPage:n}=await t.e(4800).then(t.bind(t,94800));return n},to:"/settings/users",exact:!0},{async Component(){const{ProtectedEditPage:n}=await t.e(5956).then(t.bind(t,75956));return n},to:"/settings/users/:id",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await t.e(2971).then(t.bind(t,52971));return n},to:"/settings/webhooks/create",exact:!0},{async Component(){const{ProtectedEditPage:n}=await t.e(7230).then(t.bind(t,7230)).then(a=>a.b);return n},to:"/settings/webhooks/:id",exact:!0},{async Component(){const{ProtectedListPage:n}=await t.e(7056).then(t.bind(t,2048));return n},to:"/settings/webhooks",exact:!0},{async Component(){const{ProtectedListView:n}=await t.e(3306).then(t.bind(t,3306));return n},to:"/settings/api-tokens",exact:!0},{async Component(){const{ProtectedCreateView:n}=await Promise.all([t.e(4260),t.e(7791),t.e(229)]).then(t.bind(t,40229));return n},to:"/settings/api-tokens/create",exact:!0},{async Component(){const{ProtectedEditView:n}=await Promise.all([t.e(4260),t.e(7791),t.e(8976)]).then(t.bind(t,48976));return n},to:"/settings/api-tokens/:id",exact:!0},{async Component(){const{ProtectedCreateView:n}=await Promise.all([t.e(4260),t.e(7791),t.e(3213)]).then(t.bind(t,13213));return n},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){const{ProtectedListView:n}=await t.e(1213).then(t.bind(t,91213));return n},to:"/settings/transfer-tokens",exact:!0},{async Component(){const{ProtectedEditView:n}=await Promise.all([t.e(4260),t.e(7791),t.e(5517)]).then(t.bind(t,75517));return n},to:"/settings/transfer-tokens/:id",exact:!0},{async Component(){const{PurchaseAuditLogs:n}=await t.e(6958).then(t.bind(t,46958));return n},to:"/settings/purchase-audit-logs",exact:!0},{async Component(){const{PurchaseReviewWorkflows:n}=await t.e(5857).then(t.bind(t,55857));return n},to:"/settings/purchase-review-workflows",exact:!0},{async Component(){const{PurchaseSingleSignOn:n}=await t.e(7344).then(t.bind(t,17344));return n},to:"/settings/purchase-single-sign-on",exact:!0}],F=750,Q=100,gt=["image/jpeg","image/png","image/svg+xml"],Jt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},ct={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},mt=async n=>{if(!gt.includes(n.type))throw new J("File format",Jt);const o=await new Promise(O=>{const p=new FileReader;p.onload=()=>{const i=new Image;i.onload=()=>{O({width:i.width,height:i.height})},i.src=p.result},p.readAsDataURL(n)});if(!(o.width<=F&&o.height<=F))throw new J("File sizing",ct);const g={ext:n.name.split(".").pop(),size:n.size/1e3,name:n.name,url:URL.createObjectURL(n),rawFile:n,width:o.width,height:o.height};if(!(g.size<=Q))throw new J("File sizing",ct);return g};class J extends Error{displayMessage;constructor(a,o,M){super(a,M),this.displayMessage=o}}const[Xt,q]=(0,Ft.k)("LogoInput"),Et=({canUpdate:n,customLogo:a,defaultLogo:o,hint:M,label:g,onChangeLogo:E})=>{const[O,p]=e.useState(),[i,d]=e.useState(),{formatMessage:P}=(0,S.Z)(),x=()=>{p(void 0),d(void 0)};return(0,s.jsxs)(Xt,{setLocalImage:p,localImage:O,goToStep:d,onClose:x,children:[(0,s.jsx)(c.F,{label:g,selectedSlide:0,hint:M,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:a?.name||"logo.png",actions:(0,s.jsxs)(D.b,{children:[(0,s.jsx)(u.h,{disabled:!n,onClick:()=>d("upload"),label:P({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:(0,s.jsx)(Kt.Z,{})}),a?.url&&(0,s.jsx)(u.h,{disabled:!n,onClick:()=>E(null),label:P({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:(0,s.jsx)(St.Z,{})})]}),children:(0,s.jsx)(l.q,{label:P({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"}),children:(0,s.jsx)(r.x,{maxHeight:"40%",maxWidth:"40%",as:"img",src:a?.url||o,alt:P({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})})})}),i?(0,s.jsxs)(R.P,{labelledBy:"modal",onClose:x,children:[(0,s.jsx)(U.x,{children:(0,s.jsx)(m.Z,{fontWeight:"bold",as:"h2",id:"modal",children:P(i==="upload"?{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"}:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"})})}),i==="upload"?(0,s.jsx)(Yt,{}):(0,s.jsx)(qt,{onChangeLogo:E})]}):null]})},Yt=()=>{const{formatMessage:n}=(0,S.Z)();return(0,s.jsxs)(f.v,{label:n({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple",children:[(0,s.jsxs)(r.x,{paddingLeft:8,paddingRight:8,children:[(0,s.jsxs)(V.m,{children:[(0,s.jsx)(V.O,{children:n({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})}),(0,s.jsx)(V.O,{children:n({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"})})]}),(0,s.jsx)(w.i,{})]}),(0,s.jsxs)(G.n,{children:[(0,s.jsx)(G.x,{children:(0,s.jsx)(wt,{})}),(0,s.jsx)(G.x,{children:(0,s.jsx)(bt,{})})]})]})},bt=()=>{const{formatMessage:n}=(0,S.Z)(),[a,o]=e.useState(""),[M,g]=e.useState(),{setLocalImage:E,goToStep:O,onClose:p}=q("URLForm"),i=P=>{o(P.target.value)},d=async P=>{P.preventDefault();const v=new FormData(P.target).get("logo-url");if(v)try{const j=await _t.default.get(v.toString(),{responseType:"blob",timeout:8e3}),T=new File([j.data],j.config.url??"",{type:j.headers["content-type"]}),A=await mt(T);E(A),O("pending")}catch(j){if(j instanceof Nt.d7)g(n({id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"}));else if(j instanceof J)g(n(j.displayMessage,{size:Q,dimension:F}));else throw j}};return(0,s.jsxs)("form",{onSubmit:d,children:[(0,s.jsx)(r.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,s.jsx)(B.o,{label:n({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:M,onChange:i,value:a,name:"logo-url"})}),(0,s.jsx)(z.m,{startActions:(0,s.jsx)(K.z,{onClick:p,variant:"tertiary",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(K.z,{type:"submit",children:n({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"})})})]})},wt=()=>{const{formatMessage:n}=(0,S.Z)(),[a,o]=e.useState(!1),[M,g]=e.useState(),E=e.useRef(null),O=e.useId(),{setLocalImage:p,goToStep:i,onClose:d}=q("ComputerForm"),P=()=>o(!0),x=()=>o(!1),v=T=>{T.preventDefault(),E.current.click()},j=async()=>{if(x(),!E.current.files)return;const[T]=E.current.files;try{const A=await mt(T);p(A),i("pending")}catch(A){if(A instanceof J)g(n(A.displayMessage,{size:Q,dimension:F})),E.current.focus();else throw A}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("form",{children:(0,s.jsx)(r.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,s.jsx)(k.g,{name:O,error:M,children:(0,s.jsxs)(y.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(y.k,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:a?"primary100":"neutral100",borderColor:a?"primary500":M?"danger600":"neutral300",borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:P,onDragLeave:x,children:[(0,s.jsx)(h.J,{color:"primary600",width:(0,L.Q1)(60),height:(0,L.Q1)(60),as:zt.Z,"aria-hidden":!0}),(0,s.jsx)(r.x,{paddingTop:3,paddingBottom:5,children:(0,s.jsx)(m.Z,{variant:"delta",as:"label",htmlFor:O,children:n({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"})})}),(0,s.jsx)(kt,{accept:gt.join(", "),type:"file",name:"files",tabIndex:-1,onChange:j,ref:E,id:O}),(0,s.jsx)(K.z,{type:"button",onClick:v,children:n({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})}),(0,s.jsx)(r.x,{paddingTop:6,children:(0,s.jsx)(m.Z,{variant:"pi",textColor:"neutral600",children:n({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:Q,dimension:F})})})]}),(0,s.jsx)(Mt.c,{})]})})})}),(0,s.jsx)(z.m,{startActions:(0,s.jsx)(K.z,{onClick:d,variant:"tertiary",children:n({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})})})]})},kt=(0,rt.ZP)(Pt._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,qt=({onChangeLogo:n})=>{const{formatMessage:a}=(0,S.Z)(),{localImage:o,setLocalImage:M,goToStep:g,onClose:E}=q("PendingLogoDialog"),O=()=>{M(void 0),g("upload")},p=()=>{o&&n(o),E()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:[(0,s.jsxs)(y.k,{justifyContent:"space-between",paddingBottom:6,children:[(0,s.jsxs)(y.k,{direction:"column",alignItems:"flex-start",children:[(0,s.jsx)(m.Z,{variant:"pi",fontWeight:"bold",children:a({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})}),(0,s.jsx)(m.Z,{variant:"pi",textColor:"neutral500",children:a({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"})})]}),(0,s.jsx)(K.z,{onClick:O,variant:"secondary",children:a({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"})})]}),(0,s.jsx)(r.x,{maxWidth:(0,L.Q1)(180),children:o?.url?(0,s.jsx)(ts,{asset:o}):null})]}),(0,s.jsx)(z.m,{startActions:(0,s.jsx)(K.z,{onClick:E,variant:"tertiary",children:a({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(K.z,{onClick:p,children:a({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"})})})]})},ts=({asset:n})=>{const{formatMessage:a}=(0,S.Z)();return(0,s.jsxs)(ut.Z,{children:[(0,s.jsx)(Dt.O,{children:(0,s.jsx)(Ot.H,{size:"S",src:n.url})}),(0,s.jsxs)(pt.e,{children:[(0,s.jsxs)(xt.a,{children:[(0,s.jsx)(nt.l,{children:n.name}),(0,s.jsx)(nt._,{children:`${n.ext?.toUpperCase()} - ${n.width}\u2715${n.height}`})]}),(0,s.jsx)(Ct.E,{children:a({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"})})]})]})},ss=()=>null,ns=()=>{const{trackUsage:n}=(0,L.rS)(),{formatMessage:a}=(0,S.Z)(),{logos:o,updateProjectSettings:M}=(0,Z.u)("ApplicationInfoPage"),[g,E]=e.useState({menu:o.menu,auth:o.auth}),{settings:O}=(0,et.v9)(dt.s),{communityEdition:p,latestStrapiReleaseTag:i,nodeVersion:d,shouldUpdateStrapi:P,strapiVersion:x}=(0,L.L7)(),v=(0,Z.p)(ss,async()=>(await t.e(350).then(t.bind(t,60350))).AdminSeatInfoEE),{allowedActions:{canRead:j,canUpdate:T}}=(0,L.ss)(O?O["project-settings"]:{});(0,L.go)();const A=W=>{W.preventDefault(),M({authLogo:g.auth.custom??null,menuLogo:g.menu.custom??null})},Y=W=>_=>{_===null&&n("didClickResetLogo",{logo:W}),E(N=>({...N,[W]:{...N[W],custom:_}}))};if(e.useEffect(()=>{E({menu:o.menu,auth:o.auth})},[o]),!v)return null;const X=g.auth.custom===o.auth.custom&&g.menu.custom===o.menu.custom;return(0,s.jsxs)(at.A,{children:[(0,s.jsx)(L.SL,{name:a({id:"Settings.application.header",defaultMessage:"Application"})}),(0,s.jsx)(ft.o,{children:(0,s.jsxs)("form",{onSubmit:A,children:[(0,s.jsx)(Lt.T,{title:a({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:a({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:T&&(0,s.jsx)(K.z,{disabled:X,type:"submit",startIcon:(0,s.jsx)(Zt.Z,{}),children:a({id:"global.save",defaultMessage:"Save"})})}),(0,s.jsx)(vt.D,{children:(0,s.jsxs)(y.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(y.k,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,s.jsx)(m.Z,{variant:"delta",as:"h3",children:a({id:"global.details",defaultMessage:"Details"})}),(0,s.jsxs)(ot.r,{gap:5,as:"dl",children:[(0,s.jsxs)($.P,{col:6,s:12,children:[(0,s.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})}),(0,s.jsxs)(y.k,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,s.jsxs)(m.Z,{children:["v",x]}),P&&(0,s.jsx)(it.r,{href:`https://github.com/strapi/strapi/releases/tag/${i}`,endIcon:(0,s.jsx)(lt.Z,{}),children:a({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})})]})]}),(0,s.jsxs)($.P,{col:6,s:12,children:[(0,s.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.edition-title",defaultMessage:"current plan"})}),(0,s.jsxs)(y.k,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,s.jsx)(m.Z,{children:a({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:p})}),(0,s.jsx)(it.r,{href:"https://strapi.io/pricing-self-hosted",endIcon:(0,s.jsx)(lt.Z,{}),children:a({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})})]})]}),(0,s.jsxs)($.P,{col:6,s:12,children:[(0,s.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.node-version",defaultMessage:"node version"})}),(0,s.jsx)(m.Z,{as:"dd",children:d})]}),(0,s.jsx)(v,{})]})]}),j&&(0,s.jsxs)(r.x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,s.jsx)(m.Z,{variant:"delta",as:"h3",children:a({id:"Settings.application.customization",defaultMessage:"Customization"})}),(0,s.jsx)(m.Z,{variant:"pi",textColor:"neutral600",children:a({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:F,size:Q})}),(0,s.jsxs)(ot.r,{paddingTop:4,gap:4,children:[(0,s.jsx)($.P,{col:6,s:12,children:(0,s.jsx)(Et,{canUpdate:T,customLogo:g.menu.custom,defaultLogo:g.menu.default,hint:a({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:a({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:Y("menu")})}),(0,s.jsx)($.P,{col:6,s:12,children:(0,s.jsx)(Et,{canUpdate:T,customLogo:g.auth.custom,defaultLogo:g.auth.default,hint:a({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:a({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:Y("auth")})})]})]})]})})]})})]})},as=()=>{const{settingId:n}=(0,H.UO)(),{settings:a}=(0,L.j1)(),{formatMessage:o}=(0,S.Z)(),{isLoading:M,menu:g}=Gt(),E=(0,Z.p)(Qt,async()=>(await t.e(1695).then(t.bind(t,81695))).ROUTES_EE,{combine(i,d){return[...i,...d]},defaultValue:[]}),O=e.useMemo(()=>ht(E).map(({to:i,Component:d,exact:P})=>(0,Z.d)(d,i,P)),[E]),p=Object.values(a).flatMap(i=>{const{links:d}=i;return d.map(P=>(0,Z.d)(P.Component,P.to,P.exact||!1))});return M?(0,s.jsx)(L.dO,{}):n?(0,s.jsxs)(at.A,{sideNav:(0,s.jsx)(Ht,{menu:g}),children:[(0,s.jsx)(At.q,{title:o({id:"global.settings",defaultMessage:"Settings"})}),(0,s.jsxs)(H.rs,{children:[(0,s.jsx)(H.AW,{path:"/settings/application-infos",component:ns,exact:!0}),O,p]})]}):(0,s.jsx)(H.l_,{to:"/settings/application-infos"})},ht=n=>n.filter((a,o,M)=>M.findIndex(g=>g.to===a.to)===o)}}]);
