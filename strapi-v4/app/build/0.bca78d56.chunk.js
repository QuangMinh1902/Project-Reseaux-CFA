"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[0],{9e4:(Je,ne,t)=>{t.d(ne,{App:()=>Ge});var e=t(74081),a=t(87006),j=t(51447),ie=t(47533),r=t(28551),I=t(27279),re=t(95261),le=t(5938),oe=t(6918),u=t(32370),de=t(15244),ce=t(12881),ge=t(35250),Z=t(48102),m=t(10701),N=t(50703),ue=t(2981),z=t(73354),J=t(27875),pe=t(68412),he=t(4987),_e=t(8990),W=t(74758),Q=t(63738),me=t(4963),xe=t(93153),K=t(50086),Ee=t(6191),fe=t(23298),Me=t(74577),je=t(69878),De=t(93415),H=t(94098),ye=t(84366),F=t(61908),Re=t(37370),Pe=t(79213),Oe=t(26784),Ce=t(78665),Ae=t(8305),Y=t(15398),Te=t(76827),be=t(75438),Ie=t(36938),ve=t(52448),v=t(61020),S=t(72450),w=t(71563),X=t(47853),Qe=t(59461);const Be=X.Ry().shape({name:X.Z_().trim().required()}).required().noUnknown(),k=({handleClose:s,handleSubmit:l,initialValues:d,isLoading:i=!1})=>{const{formatMessage:n}=(0,v.Z)(),{pathname:g}=(0,j.TH)(),x=g===`/plugins/${r.p}`;return(0,e.jsxs)(le.P,{onClose:s,labelledBy:"title",children:[(0,e.jsx)(oe.x,{children:(0,e.jsx)(u.Z,{id:"title",fontWeight:"bold",textColor:"neutral800",children:n({id:"content-releases.modal.title",defaultMessage:"{isCreatingRelease, select, true {New release} other {Edit release}}"},{isCreatingRelease:x})})}),(0,e.jsx)(w.J9,{validateOnChange:!1,onSubmit:l,initialValues:d,validationSchema:Be,children:({values:h,errors:y,handleChange:p})=>(0,e.jsxs)(w.l0,{children:[(0,e.jsx)(de.f,{children:(0,e.jsx)(ce.o,{label:n({id:"content-releases.modal.form.input.label.release-name",defaultMessage:"Name"}),name:"name",value:h.name,error:y.name,onChange:p,required:!0})}),(0,e.jsx)(ge.m,{startActions:(0,e.jsx)(Z.z,{onClick:s,variant:"tertiary",name:"cancel",children:n({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(Z.z,{name:"submit",loading:i,disabled:!h.name||h.name===d.name,type:"submit",children:n({id:"content-releases.modal.form.button.submit",defaultMessage:"{isCreatingRelease, select, true {Continue} other {Save}}"},{isCreatingRelease:x})})})]})})]})},Le=(0,S.ZP)(m.k)`
  align-self: stretch;
  border-bottom-right-radius: ${({theme:s})=>s.borderRadius};
  border-bottom-left-radius: ${({theme:s})=>s.borderRadius};
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,We=(0,S.ZP)(m.k)`
  align-self: stretch;
  cursor: ${({disabled:s})=>s?"not-allowed":"pointer"};

  svg path {
    fill: ${({theme:s,disabled:l})=>l&&s.colors.neutral500};
  }
  span {
    color: ${({theme:s,disabled:l})=>l&&s.colors.neutral500};
  }
`,Ue=(0,S.ZP)(Oe.Z)`
  width: ${({theme:s})=>s.spaces[4]};
  height: ${({theme:s})=>s.spaces[4]};
  path {
    fill: ${({theme:s})=>s.colors.neutral600};
  }
`,Ke=(0,S.ZP)(Ce.Z)`
  width: ${({theme:s})=>s.spaces[4]};
  height: ${({theme:s})=>s.spaces[4]};
  path {
    fill: ${({theme:s})=>s.colors.danger600};
  }
`,Se=(0,S.ZP)(u.Z)`
  max-width: 300px;
`,q=({onClick:s,disabled:l,children:d})=>(0,e.jsx)(We,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,alignItems:"center",gap:2,as:"button",hasRadius:!0,onClick:s,disabled:l,children:d}),Ze=({action:s,schema:l,components:d,entry:i})=>{const{formatMessage:n}=(0,v.Z)(),{validate:g}=(0,re.Ki)(),{errors:x}=g(i,{contentType:l,components:d,isCreatingEntry:!1});if(Object.keys(x).length>0){const h=Object.entries(x).map(([y,p])=>n({id:`${p.id}.withField`,defaultMessage:p.defaultMessage},{field:y})).join(" ");return(0,e.jsxs)(m.k,{gap:2,children:[(0,e.jsx)(N.J,{color:"danger600",as:Ae.Z}),(0,e.jsx)(ue.u,{description:h,children:(0,e.jsx)(Se,{textColor:"danger600",variant:"omega",fontWeight:"semiBold",ellipsis:!0,children:h})})]})}return s=="publish"?(0,e.jsxs)(m.k,{gap:2,children:[(0,e.jsx)(N.J,{color:"success600",as:Y.Z}),i.publishedAt?(0,e.jsx)(u.Z,{textColor:"success600",fontWeight:"bold",children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.already-published",defaultMessage:"Already published"})}):(0,e.jsx)(u.Z,{children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-publish",defaultMessage:"Ready to publish"})})]}):(0,e.jsxs)(m.k,{gap:2,children:[(0,e.jsx)(N.J,{color:"success600",as:Y.Z}),i.publishedAt?(0,e.jsx)(u.Z,{children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-unpublish",defaultMessage:"Ready to unpublish"})}):(0,e.jsx)(u.Z,{textColor:"success600",fontWeight:"bold",children:n({id:"content-releases.pages.ReleaseDetails.entry-validation.already-unpublished",defaultMessage:"Already unpublished"})})]})},ee=({toggleEditReleaseModal:s,toggleWarningSubmit:l,children:d})=>{const{formatMessage:i}=(0,v.Z)(),{releaseId:n}=(0,j.UO)(),[g,x]=I.useState(!1),h=I.useRef(null),{data:y,isLoading:p,isError:R,error:f}=(0,r.u)({id:n}),[B,{isLoading:U}]=(0,r.c)(),O=(0,a.lm)(),{formatAPIError:L}=(0,a.So)(),{allowedActions:{canUpdate:D,canDelete:C}}=(0,a.ss)(r.P),A=(0,r.d)(),c=y?.data,M=()=>{x(b=>!b)},E=()=>{s(),M()},T=async()=>{const b=await B({id:n});"data"in b?O({type:"success",message:i({id:"content-releases.pages.ReleaseDetails.publish-notification-success",defaultMessage:"Release was published successfully."})}):(0,r.i)(b.error)?O({type:"warning",message:L(b.error)}):O({type:"warning",message:i({id:"notification.error",defaultMessage:"An error occurred"})})},o=()=>{l(),M()},_=()=>{A(r.r.util.invalidateTags([{type:"ReleaseAction",id:"LIST"}]))};if(p)return(0,e.jsx)(z.o,{"aria-busy":p,children:(0,e.jsx)(a.dO,{})});if(R||!c)return(0,e.jsx)(j.l_,{to:{pathname:"/plugins/content-releases",state:{errors:[{code:f?.code}]}}});const P=c.actions.meta.count||0,$=c.createdBy.lastname?`${c.createdBy.firstname} ${c.createdBy.lastname}`:`${c.createdBy.firstname}`;return(0,e.jsxs)(z.o,{"aria-busy":p,children:[(0,e.jsx)(J.T,{title:c.name,subtitle:i({id:"content-releases.pages.Details.header-subtitle",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:P}),navigationAction:(0,e.jsx)(pe.r,{startIcon:(0,e.jsx)(Te.Z,{}),to:"/plugins/content-releases",children:i({id:"global.back",defaultMessage:"Back"})}),primaryAction:!c.releasedAt&&(0,e.jsxs)(m.k,{gap:2,children:[(0,e.jsx)(he.h,{label:i({id:"content-releases.header.actions.open-release-actions",defaultMessage:"Release actions"}),ref:h,onClick:M,children:(0,e.jsx)(be.Z,{})}),g&&(0,e.jsxs)(_e.J2,{source:h,placement:"bottom-end",onDismiss:M,spacing:4,minWidth:"242px",children:[(0,e.jsxs)(m.k,{alignItems:"center",justifyContent:"center",direction:"column",padding:1,children:[(0,e.jsxs)(q,{disabled:!D,onClick:E,children:[(0,e.jsx)(Ue,{}),(0,e.jsx)(u.Z,{ellipsis:!0,children:i({id:"content-releases.header.actions.edit",defaultMessage:"Edit"})})]}),(0,e.jsxs)(q,{disabled:!C,onClick:o,children:[(0,e.jsx)(Ke,{}),(0,e.jsx)(u.Z,{ellipsis:!0,textColor:"danger600",children:i({id:"content-releases.header.actions.delete",defaultMessage:"Delete"})})]})]}),(0,e.jsxs)(Le,{direction:"column",justifyContent:"center",alignItems:"flex-start",gap:1,padding:5,children:[(0,e.jsx)(u.Z,{variant:"pi",fontWeight:"bold",children:i({id:"content-releases.header.actions.created",defaultMessage:"Created"})}),(0,e.jsxs)(u.Z,{variant:"pi",color:"neutral300",children:[(0,e.jsx)(a.ij,{timestamp:new Date(c.createdAt)}),i({id:"content-releases.header.actions.created.description",defaultMessage:" by {createdBy}"},{createdBy:$})]})]})]}),(0,e.jsx)(Z.z,{size:"S",variant:"tertiary",onClick:_,children:i({id:"content-releases.header.actions.refresh",defaultMessage:"Refresh"})}),(0,e.jsx)(a.jW,{permissions:r.P.publish,children:(0,e.jsx)(Z.z,{size:"S",variant:"default",onClick:T,loading:U,disabled:c.actions.meta.count===0,children:i({id:"content-releases.header.actions.publish",defaultMessage:"Publish"})})})]})}),d]})},$e=["contentType","locale","action"],se=s=>s==="locale"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.locales",defaultMessage:"Locales"}:s==="action"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.actions",defaultMessage:"Actions"}:{id:"content-releases.pages.ReleaseDetails.groupBy.option.content-type",defaultMessage:"Content-Types"},Ne=()=>{const{formatMessage:s}=(0,v.Z)(),{releaseId:l}=(0,j.UO)(),[{query:d},i]=(0,a.Kx)(),n=(0,a.lm)(),{formatAPIError:g}=(0,a.So)(),{data:x,isLoading:h,isError:y,error:p}=(0,r.u)({id:l}),R=x?.data,f=d?.groupBy||"contentType",{isLoading:B,isFetching:U,isError:O,data:L,error:D}=(0,r.e)({...d,releaseId:l}),[C]=(0,r.f)(),A=async(o,_)=>{const P=await C({params:{releaseId:l,actionId:_},body:{type:o.target.value}});"error"in P&&((0,r.i)(P.error)?n({type:"warning",message:g(P.error)}):n({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}))};if(B||h)return(0,e.jsx)(W.D,{children:(0,e.jsx)(a.dO,{})});const c=L?.data,M=L?.meta,E=M?.contentTypes||{},T=M?.components||{};if(y||!R){const o=[];return p&&o.push({code:p.code}),D&&o.push({code:D.code}),(0,e.jsx)(j.l_,{to:{pathname:"/plugins/content-releases",state:{errors:o}}})}return O||!c?(0,e.jsx)(W.D,{children:(0,e.jsx)(a.Hn,{})}):Object.keys(c).length===0?(0,e.jsx)(W.D,{children:(0,e.jsx)(a.dJ,{content:{id:"content-releases.pages.Details.tab.emptyEntries",defaultMessage:"This release is empty. Open the Content Manager, select an entry and add it to the release."},action:(0,e.jsx)(Re.Q,{as:ie.rU,to:{pathname:"/content-manager"},style:{textDecoration:"none"},variant:"secondary",children:s({id:"content-releases.page.Details.button.openContentManager",defaultMessage:"Open the Content Manager"})})})}):(0,e.jsx)(W.D,{children:(0,e.jsxs)(m.k,{gap:8,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(m.k,{children:(0,e.jsx)(Q.q4,{"aria-label":s({id:"content-releases.pages.ReleaseDetails.groupBy.label",defaultMessage:"Group by"}),customizeContent:o=>s({id:"content-releases.pages.ReleaseDetails.groupBy.label",defaultMessage:"Group by {groupBy}"},{groupBy:o}),value:s(se(f)),onChange:o=>i({groupBy:o}),children:$e.map(o=>(0,e.jsx)(Q.ag,{value:o,children:s(se(o))},o))})}),Object.keys(c).map(o=>(0,e.jsxs)(m.k,{gap:4,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(m.k,{children:(0,e.jsx)(me.C,{children:o})}),(0,e.jsx)(a.iA.Root,{rows:c[o].map(_=>({..._,id:Number(_.entry.id)})),colCount:c[o].length,isLoading:B,isFetching:U,children:(0,e.jsxs)(a.iA.Content,{children:[(0,e.jsxs)(a.iA.Head,{children:[(0,e.jsx)(a.iA.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.name",defaultMessage:"name"}),name:"name"}),(0,e.jsx)(a.iA.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.locale",defaultMessage:"locale"}),name:"locale"}),(0,e.jsx)(a.iA.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.content-type",defaultMessage:"content-type"}),name:"content-type"}),(0,e.jsx)(a.iA.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.action",defaultMessage:"action"}),name:"action"}),!R.releasedAt&&(0,e.jsx)(a.iA.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.status",defaultMessage:"status"}),name:"status"})]}),(0,e.jsx)(a.iA.LoadingBody,{}),(0,e.jsx)(a.iA.Body,{children:c[o].map(({id:_,contentType:P,locale:$,type:b,entry:V})=>(0,e.jsxs)(xe.Tr,{children:[(0,e.jsx)(K.Td,{width:"25%",maxWidth:"200px",children:(0,e.jsx)(u.Z,{ellipsis:!0,children:`${P.mainFieldValue||V.id}`})}),(0,e.jsx)(K.Td,{width:"10%",children:(0,e.jsx)(u.Z,{children:`${$?.name?$.name:"-"}`})}),(0,e.jsx)(K.Td,{width:"10%",children:(0,e.jsx)(u.Z,{children:P.displayName||""})}),(0,e.jsx)(K.Td,{width:"20%",children:R.releasedAt?(0,e.jsx)(u.Z,{children:s({id:"content-releases.page.ReleaseDetails.table.action-published",defaultMessage:"This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."},{isPublish:b==="publish",b:G=>(0,e.jsx)(u.Z,{fontWeight:"bold",children:G})})}):(0,e.jsx)(r.R,{selected:b,handleChange:G=>A(G,_),name:`release-action-${_}-type`})}),!R.releasedAt&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(K.Td,{width:"20%",minWidth:"200px",children:(0,e.jsx)(Ze,{action:b,schema:E?.[P.uid],components:T,entry:V})}),(0,e.jsx)(K.Td,{children:(0,e.jsx)(m.k,{justifyContent:"flex-end",children:(0,e.jsxs)(r.g.Root,{children:[(0,e.jsx)(r.g.ReleaseActionEntryLinkItem,{contentTypeUid:P.uid,entryId:V.id,locale:$?.code}),(0,e.jsx)(r.g.DeleteReleaseActionItem,{releaseId:R.id,actionId:_})]})})})]})]},_))})]})})]},`releases-group-${o}`)),(0,e.jsxs)(m.k,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a.v4,{defaultValue:M?.pagination?.pageSize.toString()}),(0,e.jsx)(a.tU,{pagination:{pageCount:M?.pagination?.pageCount||0}})]})]})})},ze=()=>{const{formatMessage:s}=(0,v.Z)(),{releaseId:l}=(0,j.UO)(),d=(0,a.lm)(),{formatAPIError:i}=(0,a.So)(),{push:n}=(0,j.k6)(),[g,x]=I.useState(!1),[h,y]=I.useState(!1),{isLoading:p,data:R,isSuccess:f}=(0,r.u)({id:l}),[B,{isLoading:U}]=(0,r.a)(),[O,{isLoading:L}]=(0,r.b)(),D=()=>{x(E=>!E)},C=()=>y(E=>!E);if(p)return(0,e.jsx)(ee,{toggleEditReleaseModal:D,toggleWarningSubmit:C,children:(0,e.jsx)(W.D,{children:(0,e.jsx)(a.dO,{})})});const A=f&&R?.data?.name||"",c=async E=>{const T=await B({id:l,name:E.name});"data"in T?d({type:"success",message:s({id:"content-releases.modal.release-updated-notification-success",defaultMessage:"Release updated."})}):(0,r.i)(T.error)?d({type:"warning",message:i(T.error)}):d({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}),D()},M=async()=>{const E=await O({id:l});"data"in E?n("/plugins/content-releases"):(0,r.i)(E.error)?d({type:"warning",message:i(E.error)}):d({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(ee,{toggleEditReleaseModal:D,toggleWarningSubmit:C,children:[(0,e.jsx)(Ne,{}),g&&(0,e.jsx)(k,{handleClose:D,handleSubmit:c,isLoading:p||U,initialValues:{name:A||""}}),(0,e.jsx)(a.QH,{bodyText:{id:"content-releases.dialog.confirmation-message",defaultMessage:"Are you sure you want to delete this release?"},isOpen:h,isConfirmButtonLoading:L,onToggleDialog:C,onConfirm:M})]})},te=({isLoading:s,totalReleases:l,onClickAddRelease:d,children:i})=>{const{formatMessage:n}=(0,v.Z)();return(0,e.jsxs)(z.o,{"aria-busy":s,children:[(0,e.jsx)(J.T,{title:n({id:"content-releases.pages.Releases.title",defaultMessage:"Releases"}),subtitle:!s&&n({id:"content-releases.pages.Releases.header-subtitle",defaultMessage:"{number, plural, =0 {No releases} one {# release} other {# releases}}"},{number:l}),primaryAction:(0,e.jsx)(a.jW,{permissions:r.P.create,children:(0,e.jsx)(Z.z,{startIcon:(0,e.jsx)(Ie.Z,{}),onClick:d,children:n({id:"content-releases.header.actions.add-release",defaultMessage:"New release"})})})}),i]})},He=(0,S.ZP)(Pe.r)`
  display: block;
`,ae=({sectionTitle:s,releases:l=[],isError:d=!1})=>{const{formatMessage:i}=(0,v.Z)();return d?(0,e.jsx)(a.Hn,{}):l?.length===0?(0,e.jsx)(Ee.x,{content:i({id:"content-releases.page.Releases.tab.emptyEntries",defaultMessage:"No releases"},{target:s}),icon:(0,e.jsx)(ve.Z,{width:"10rem"})}):(0,e.jsx)(fe.r,{gap:4,children:l.map(({id:n,name:g,actions:x})=>(0,e.jsx)(Me.P,{col:3,s:6,xs:12,children:(0,e.jsx)(He,{href:`content-releases/${n}`,isExternal:!1,children:(0,e.jsxs)(m.k,{direction:"column",justifyContent:"space-between",padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",width:"100%",alignItems:"start",gap:2,children:[(0,e.jsx)(u.Z,{as:"h3",variant:"delta",fontWeight:"bold",children:g}),(0,e.jsx)(u.Z,{variant:"pi",children:i({id:"content-releases.page.Releases.release-item.entries",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:x.meta.count})})]})})},n))})},Fe={name:""},Ve=()=>{const s=I.useRef(null),l=(0,j.TH)(),[d,i]=I.useState(!1),n=(0,a.lm)(),{formatMessage:g}=(0,v.Z)(),{push:x,replace:h}=(0,j.k6)(),{formatAPIError:y}=(0,a.So)(),[{query:p},R]=(0,a.Kx)(),f=(0,r.h)(p),[B,{isLoading:U}]=(0,r.j)(),{isLoading:O,isSuccess:L,isError:D}=f,C=f?.currentData?.meta?.activeTab||"pending",A=["pending","done"].indexOf(C);I.useEffect(()=>{l?.state?.errors&&(n({type:"warning",title:g({id:"content-releases.pages.Releases.notification.error.title",defaultMessage:"Your request could not be processed."}),message:g({id:"content-releases.pages.Releases.notification.error.message",defaultMessage:"Please try again or open another release."})}),h({state:null}))},[g,l?.state?.errors,h,n]),I.useEffect(()=>{s.current&&s.current._handlers.setSelectedTabIndex(A)},[A]);const c=()=>{i(o=>!o)};if(O)return(0,e.jsx)(te,{onClickAddRelease:c,isLoading:!0,children:(0,e.jsx)(W.D,{children:(0,e.jsx)(a.dO,{})})});const M=L&&f.currentData?.meta?.pagination?.total||0,E=o=>{R({...p,page:1,pageSize:f?.currentData?.meta?.pagination?.pageSize||16,filters:{releasedAt:{$notNull:o!==0}}})},T=async o=>{const _=await B({name:o.name});"data"in _?(n({type:"success",message:g({id:"content-releases.modal.release-created-notification-success",defaultMessage:"Release created."})}),x(`/plugins/content-releases/${_.data.data.id}`)):(0,r.i)(_.error)?n({type:"warning",message:y(_.error)}):n({type:"warning",message:g({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(te,{onClickAddRelease:c,totalReleases:M,children:[(0,e.jsx)(W.D,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(je.v,{label:g({id:"content-releases.pages.Releases.tab-group.label",defaultMessage:"Releases list"}),variant:"simple",initialSelectedTabIndex:A,onTabChange:E,ref:s,children:[(0,e.jsxs)(De.x,{paddingBottom:8,children:[(0,e.jsxs)(H.m,{children:[(0,e.jsx)(H.O,{children:g({id:"content-releases.pages.Releases.tab.pending",defaultMessage:"Pending"})}),(0,e.jsx)(H.O,{children:g({id:"content-releases.pages.Releases.tab.done",defaultMessage:"Done"})})]}),(0,e.jsx)(ye.i,{})]}),(0,e.jsxs)(F.n,{children:[(0,e.jsx)(F.x,{children:(0,e.jsx)(ae,{sectionTitle:"pending",releases:f?.currentData?.data,isError:D})}),(0,e.jsx)(F.x,{children:(0,e.jsx)(ae,{sectionTitle:"done",releases:f?.currentData?.data,isError:D})})]})]}),M>0&&(0,e.jsxs)(m.k,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a.v4,{options:["8","16","32","64"],defaultValue:f?.currentData?.meta?.pagination?.pageSize.toString()}),(0,e.jsx)(a.tU,{pagination:{pageCount:f?.currentData?.meta?.pagination?.pageCount||0}})]})]})}),d&&(0,e.jsx)(k,{handleClose:c,handleSubmit:T,isLoading:U,initialValues:Fe})]})},Ge=()=>(0,e.jsx)(a.O4,{permissions:r.P.main,children:(0,e.jsxs)(j.rs,{children:[(0,e.jsx)(j.AW,{exact:!0,path:`/plugins/${r.p}`,component:Ve}),(0,e.jsx)(j.AW,{exact:!0,path:`/plugins/${r.p}/:releaseId`,component:ze})]})})}}]);
