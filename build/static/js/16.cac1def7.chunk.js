(this["webpackJsonpcoin-mercari-dashboard"]=this["webpackJsonpcoin-mercari-dashboard"]||[]).push([[16],{369:function(e,t,s){"use strict";var c=s(13),n=s(390),a=s(387),r=s(373),i=s(388),l=Object(c.a)({apiKey:"AIzaSyAqNbdDw4nNXar2iKG2iujBLOKNcgqozbE",authDomain:"coinmercari.firebaseapp.com",projectId:"coinmercari",storageBucket:"coinmercari.appspot.com",messagingSenderId:"519347227450",appId:"1:519347227450:web:4ba87b95d1bc9d573e9e03",databaseURL:"https://coinmercari-default-rtdb.firebaseio.com"},"storageBucket","coinmercari.appspot.com"),o=Object(n.a)(l),d=Object(r.a)(o),j=Object(a.a)(o),b=Object(i.a)(o);t.a={auth:j,database:d,storage:b}},377:function(e,t,s){"use strict";var c=s(12),n=s(13),a=s(35),r=s(97),i=s(1),l=s(2),o=s.n(l),d=s(401),j=s(402),b=s(65),m=s(6),u=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],O=Object(i.forwardRef)((function(e,t){var s,l=e.label,O=e.hideIcon,f=e.showIcon,h=e.visible,x=e.className,p=e.htmlFor,v=e.placeholder,N=e.iconSize,S=e.inputClassName,g=e.invalid,y=Object(r.a)(e,u),z=Object(i.useState)(h),k=Object(a.a)(z,2),w=k[0],D=k[1];return Object(m.jsxs)(i.Fragment,{children:[l?Object(m.jsx)(b.v,{className:"form-label",for:p,children:l}):null,Object(m.jsxs)(b.t,{className:o()((s={},Object(n.a)(s,x,x),Object(n.a)(s,"is-invalid",g),s)),children:[Object(m.jsx)(b.s,Object(c.a)(Object(c.a)({ref:t,invalid:g,type:!1===w?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:o()(Object(n.a)({},S,S))},l&&p?{id:p}:{}),y)),Object(m.jsx)(b.u,{className:"cursor-pointer",onClick:function(){return D(!w)},children:function(){var e=N||14;return!1===w?O||Object(m.jsx)(d.a,{size:e}):f||Object(m.jsx)(j.a,{size:e})}()})]})]})}));t.a=O,O.defaultProps={visible:!1}},397:function(e,t,s){},419:function(e,t,s){},723:function(e,t,s){},801:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(65),a=s(35),r=s(13),i=s(721),l=s.n(i),o=s(2),d=s.n(o),j=s(787),b=(s(722),s(723),s(6)),m=Object(c.forwardRef)((function(e,t){var s,n=e.type,i=e.className,o=e.contentClassName,j=e.headerClassName,m=e.steps,u=e.separator,O=e.options,f=e.instance,h=Object(c.useState)(0),x=Object(a.a)(h,2),p=x[0],v=x[1],N=null;Object(c.useEffect)((function(){N=new l.a(t.current,O),t.current.addEventListener("shown.bs-stepper",(function(e){v(e.detail.indexStep)})),f&&f(N)}),[]);return Object(b.jsxs)("div",{ref:t,className:d()("bs-stepper",(s={},Object(r.a)(s,i,i),Object(r.a)(s,"vertical","vertical"===n),Object(r.a)(s,"vertical wizard-modern","modern-vertical"===n),Object(r.a)(s,"wizard-modern","modern-horizontal"===n),s)),children:[Object(b.jsx)("div",{className:d()("bs-stepper-header",Object(r.a)({},j,j)),children:m.map((function(e,t){return Object(b.jsxs)(c.Fragment,{children:[0!==t&&t!==m.length?Object(b.jsx)("div",{className:"line",children:u}):null,Object(b.jsx)("div",{className:d()("step",{crossed:p>t,active:t===p}),"data-target":"#".concat(e.id),children:Object(b.jsxs)("button",{type:"button",className:"step-trigger",children:[Object(b.jsx)("span",{className:"bs-stepper-box",children:e.icon?e.icon:t+1}),Object(b.jsxs)("span",{className:"bs-stepper-label",children:[Object(b.jsx)("span",{className:"bs-stepper-title",children:e.title}),e.subtitle?Object(b.jsx)("span",{className:"bs-stepper-subtitle",children:e.subtitle}):null]})]})})]},e.id)}))}),Object(b.jsx)("div",{className:"bs-stepper-content",children:m.map((function(e,t){var s;return Object(b.jsx)("div",{className:d()("content",(s={},Object(r.a)(s,o,o),Object(r.a)(s,"active dstepper-block",p===t),s)),id:e.id,children:e.content},e.id)}))})]})})),u=m;m.defaultProps={options:{},type:"horizontal",separator:Object(b.jsx)(j.a,{size:17})};var O=s(12),f=s(382),h=s(467),x=s.n(h),p=s(378);s(389);s(369);var v=s(373),N=s(372),S=s(791),g=s(792),y={city:"",zipcode:"",address:"",state:"",country:null},z=function(e){var t,s,r,i,l,o,j=e.stepper,m=JSON.parse(localStorage.getItem("userData"));y.city=(null===m||void 0===m||null===(t=m.userAddress)||void 0===t?void 0:t.city)||"",y.state=(null===m||void 0===m||null===(s=m.userAddress)||void 0===s?void 0:s.state)||"",y.zipcode=(null===m||void 0===m||null===(r=m.userAddress)||void 0===r?void 0:r.zipcode)||"",y.address=(null===m||void 0===m||null===(i=m.userAddress)||void 0===i?void 0:i.address)||"",y.country=(null===m||void 0===m||null===(l=m.userAddress)||void 0===l?void 0:l.country)||null;var u=m.localId;var h=Object(c.useState)(null),z=Object(a.a)(h,2),k=z[0],w=z[1],D=Object(c.useState)(""),I=Object(a.a)(D,2),A=(I[0],I[1]),B=Object(c.useMemo)((function(){return x()().getData()}),[]),F=function(e){A(e)},C=Object(N.e)({defaultValues:y}),P=C.control,U=C.setError,L=C.handleSubmit,E=C.formState.errors,R=function(e){if(w(e),Object(p.b)(E))j.next(),function(e,t,s,c,n){var a=Object(v.a)(),r={city:e,zipcode:t,address:s,country:c,state:n};Object(v.d)(Object(v.c)(a,"users/".concat(u,"/userAddress")),r).then(localStorage.setItem("userData",JSON.stringify(Object(O.a)(Object(O.a)({},m),{},{userAddress:r}))))}(e.city,e.zipcode,e.address,e.country.value,state);else for(var t in e)0===e[t].length&&U(t,{type:"manual",message:"Please enter a valid ".concat(t)})};return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsxs)("div",{className:"content-header",children:[Object(b.jsx)("h5",{className:"mb-0",children:"Address"}),Object(b.jsx)("small",{children:"Enter Your Address."})]}),Object(b.jsxs)(n.q,{onSubmit:L((function(e){return R(e)})),children:[Object(b.jsxs)(n.G,{children:[Object(b.jsxs)(n.k,{md:"6",className:"mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"address",children:"Address"}),Object(b.jsx)(N.a,{id:"address",name:"address",control:P,render:function(e){var t=e.field;return Object(b.jsx)(n.s,Object(O.a)({invalid:E.address&&!0},t))}}),E.address&&Object(b.jsx)(n.r,{children:E.address.message})]}),Object(b.jsxs)(n.k,{md:"6",className:"mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"city",children:"City"}),Object(b.jsx)(N.a,{id:"city",name:"city",control:P,render:function(e){var t=e.field;return Object(b.jsx)(n.s,Object(O.a)({invalid:E.city&&!0},t))}}),E.city&&Object(b.jsx)(n.r,{children:E.city.message})]})]}),Object(b.jsxs)(n.G,{children:[Object(b.jsxs)(n.k,{md:"6",className:"mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"zipcode",children:"Zipcode"}),Object(b.jsx)(N.a,{id:"zipcode",name:"zipcode",control:P,render:function(e){var t=e.field;return Object(b.jsx)(n.s,Object(O.a)({maxLength:"6",invalid:E.zipcode&&!0},t))}}),E.zipcode&&Object(b.jsx)(n.r,{children:E.zipcode.message})]}),Object(b.jsxs)(n.k,{md:"6",className:"mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"city",children:"State"}),Object(b.jsx)(N.a,{id:"state",name:"state",control:P,render:function(e){var t=e.field;return Object(b.jsx)(n.s,Object(O.a)({invalid:E.state&&!0},t))}}),E.state&&Object(b.jsx)(n.r,{children:E.state.message})]}),Object(b.jsxs)(n.k,{md:"6",className:"mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"country",children:"Country"}),Object(b.jsx)(N.a,{defaultValue:null===m||void 0===m||null===(o=m.userAddress)||void 0===o?void 0:o.country,id:"country",name:"country",control:P,render:function(e){var t=e.field;return Object(b.jsx)(f.a,Object(O.a)(Object(O.a)({theme:p.d,className:d()("react-select",{"is-invalid":null!==k&&null===k.country}),options:B,value:"NG",onChange:F},t),{},{defaultValue:"NG"}))}})]})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsxs)(n.e,{type:"button",color:"primary",className:"btn-prev",onClick:function(){return j.previous()},children:[Object(b.jsx)(S.a,{size:14,className:"align-middle me-sm-25 me-0"}),Object(b.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),Object(b.jsxs)(n.e,{type:"submit",color:"primary",className:"btn-next",children:[Object(b.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),Object(b.jsx)(g.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]})},k=s(377),w=s(726),D=s.n(w),I=(s(397),s(387)),A=s(469),B=s(470),F={fullName:"",email:"",SSN:"",confirmSSN:"",DOB:null,phoneNumber:""},C=function(e){var t,s,r,i,l=e.stepper,o=JSON.parse(localStorage.getItem("userData")),j=A.b().shape({fullName:A.d().required(),email:A.d().email(),SSN:A.d().required(),confirmSSN:A.d().required().oneOf([A.c("SSN"),null],"SSN must match"),phoneNumber:A.a().required()}),m=Object(c.useState)(null),u=Object(a.a)(m,2),f=u[0],h=u[1],x=o.localId;Object(c.useEffect)((function(){Object(p.c)()}),[]),F.fullName=(null===o||void 0===o?void 0:o.displayName)||"",F.DOB=(null===o||void 0===o||null===(t=o.userInformation)||void 0===t?void 0:t.DOB)||null,F.SSN=(null===o||void 0===o||null===(s=o.userInformation)||void 0===s?void 0:s.SSN)||"",F.confirmSSN=(null===o||void 0===o||null===(r=o.userInformation)||void 0===r?void 0:r.confirmSSN)||"",F.phoneNumber=(null===o||void 0===o||null===(i=o.userInformation)||void 0===i?void 0:i.phoneNumber)||"";var y=Object(N.e)({defaultValues:F,resolver:Object(B.a)(j)}),z=y.control,w=y.handleSubmit,C=y.formState.errors,P=function(e){if(h(e),Object(p.b)(C)){l.next();var t=e.fullName,s=e.SSN,c=e.confirmSSN;e.DOB;!function(e,t,s,c,n){var a={fullName:e,email:t,SSN:s,confirmSSN:c,DOB:n},r=Object(v.a)();Object(v.d)(Object(v.c)(r,"users/".concat(x,"/userInformation")),a).then(localStorage.setItem("userData",JSON.stringify(Object(O.a)(Object(O.a)({},o),{},{userInformation:a}))))}(t,o&&o.email,s,c,String(new Date(e.DOB)))}var n=Object(I.a)();Object(I.b)(n.currentUser,{displayName:e.fullName}).then((function(){console.log("Profile has been updated")})).catch((function(e){console.log(e)}))};return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsxs)("div",{className:"content-header",children:[Object(b.jsx)("h5",{className:"mb-0",children:"Account Details"}),Object(b.jsx)("small",{className:"text-muted",children:"Enter Your Account Details."})]}),Object(b.jsxs)(n.q,{onSubmit:w((function(e){return P(e)})),children:[Object(b.jsxs)(n.G,{children:[Object(b.jsxs)(n.k,{md:"6",className:"mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"fullName",children:"Full Name"}),Object(b.jsx)(N.a,{id:"fullName",name:"fullName",control:z,render:function(e){var t=e.field;return Object(b.jsx)(n.s,Object(O.a)({invalid:C.fullName&&!0},t))}}),C.fullName&&Object(b.jsx)(n.r,{children:C.fullName.message})]}),Object(b.jsxs)(n.k,{md:"6",className:"mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"email",children:"Email"}),Object(b.jsx)(N.a,{control:z,id:"email",name:"email",render:function(){return Object(b.jsx)(n.s,{type:"email",readOnly:!0,value:o&&o.email||""})}}),C.email&&Object(b.jsx)(n.r,{children:C.email.message})]})]}),Object(b.jsxs)(n.G,{children:[Object(b.jsxs)("div",{className:"form-password-toggle col-md-6 mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"SSN",children:"Social Security"}),Object(b.jsx)(N.a,{id:"SSN",name:"SSN",control:z,render:function(e){var t=e.field;return Object(b.jsx)(k.a,Object(O.a)({onKeyPress:function(e){/[0-9]/.test(e.key)},maxLength:"9",invalid:C.SSN&&!0},t))}}),C.SSN&&Object(b.jsx)(n.r,{children:C.SSN.message})]}),Object(b.jsxs)("div",{className:"form-password-toggle col-md-6 mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"confirmSSN",children:"Confirm Social Security"}),Object(b.jsx)(N.a,{control:z,id:"confirmSSN",name:"confirmSSN",render:function(e){var t=e.field;return Object(b.jsx)(k.a,Object(O.a)({onKeyPress:function(e){/[0-9]/.test(e.key)},maxLength:"9",invalid:C.confirmSSN&&!0},t))}}),C.confirmSSN&&Object(b.jsx)(n.r,{children:C.confirmSSN.message})]}),Object(b.jsxs)(n.k,{md:"6",className:"mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"phoneNumber",children:"Phone Number"}),Object(b.jsx)(N.a,{id:"phoneNumber",name:"phoneNumber",control:z,render:function(e){var t=e.field;return Object(b.jsx)(n.s,Object(O.a)({type:"number",invalid:C.phoneNumber&&!0},t))}}),C.phoneNumber&&Object(b.jsx)(n.r,{children:C.phoneNumber.message})]}),Object(b.jsxs)(n.k,{md:"6",className:"mb-1",children:[Object(b.jsx)(n.v,{className:"form-label",for:"DOB",children:"DOB"}),Object(b.jsx)(N.a,{control:z,id:"DOB",name:"DOB",render:function(e){var t=e.field;return Object(b.jsx)(D.a,Object(O.a)(Object(O.a)({},t),{},{className:d()("form-control",{"is-invalid":null!==f&&null===f.DOB})}))}})]})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsxs)(n.e,{color:"secondary",className:"btn-prev",outline:!0,disabled:!0,children:[Object(b.jsx)(S.a,{size:14,className:"align-middle me-sm-25 me-0"}),Object(b.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),Object(b.jsxs)(n.e,{type:"submit",color:"primary",className:"btn-next",children:[Object(b.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),Object(b.jsx)(g.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]})},P=s(367),U=s(728),L=s(388),E=(s(432),s(419),s(742)),R=s(758),q=s(744),G=s(793),J=s(438),K=s.n(J),V=s(444),M=s.n(V)()(K.a),Y=Object(L.a)(),T=function(){return M.fire({title:"Submitted!",text:"Verification in review!",icon:"success",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}).then((function(){window.location="/dashboard/"}))},W=function(e){var t=e.stepper,s=Object(c.useState)([]),r=Object(a.a)(s,2),i=r[0],l=r[1],o=Object(c.useState)(null),d=Object(a.a)(o,2),j=d[0],m=d[1],u=Object(c.useState)(0),f=Object(a.a)(u,2),h=f[0],x=f[1],p=Object(N.e)({}),v=p.handleSubmit;Object(U.a)(p.formState);var g=Object(E.a)({onDrop:function(e){l([].concat(Object(P.a)(i),Object(P.a)(e.map((function(e){return Object.assign(e)})))))}}),y=g.getRootProps,z=g.getInputProps,k=function(e){var t=Object(L.b)(Y,e.name,URL.createObjectURL(e)),s=Object(L.c)(t,e);return s.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(x((function(e){return t+e})),console.log("Upload is ",t,"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running"),m(e.state)}}),(function(){getDownloadURL(s.snapshot.ref).then((function(e){console.log("File available at",e)}))})),e.type.startsWith("image")?Object(b.jsx)("img",{className:"rounded",alt:e.name,src:URL.createObjectURL(e),height:"28",width:"28"}):Object(b.jsx)(R.a,{size:"28"})},w=i.map((function(e,t){return Object(b.jsxs)(n.x,{className:"",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(b.jsxs)("div",{className:"file-details d-flex align-items-center",children:[Object(b.jsx)("div",{className:"file-preview me-1",children:k(e)}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"file-name mb-0",children:e.name}),Object(b.jsx)("p",{className:"file-size mb-0",children:(s=e.size,Math.round(s/100)/10>1e3?"".concat((Math.round(s/100)/1e4).toFixed(1)," mb"):"".concat((Math.round(s/100)/10).toFixed(1)," kb"))})]})]}),Object(b.jsx)(n.e,{color:"danger",outline:!0,size:"sm",className:"btn-icon",onClick:function(){return function(e){var t=i.filter((function(t){return t.name!==e.name}));l(Object(P.a)(t))}(e)},children:Object(b.jsx)(q.a,{size:14})})]}),Object(b.jsx)(n.F,{animated:!0,style:{height:"8px"},color:"success",value:h/100})]},"".concat(e.name,"-").concat(t));var s}));return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsxs)("div",{className:"content-header",children:[Object(b.jsx)("h5",{className:"mb-0",children:"Upload Document"}),Object(b.jsx)("small",{children:"Drivers License or Government ID/Selfie"})]}),Object(b.jsxs)(n.q,{onSubmit:v((function(e){if(Object.values(e).every((function(e){return e.length>0})))console.log(e);else for(var t in e)0===e[t].length&&setError(t,{type:"manual",message:"Please enter a valid ".concat(t)})})),children:[Object(b.jsxs)("div",Object(O.a)(Object(O.a)({},y({className:"dropzone"})),{},{children:[Object(b.jsx)("input",Object(O.a)(Object(O.a)({},z()),{},{disabled:"uploading"===j})),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-column",children:[Object(b.jsx)(G.a,{size:64}),Object(b.jsx)("h5",{children:"Drop Files here or click to upload"}),Object(b.jsxs)("p",{className:"text-secondary",children:["Drop files here or click"," ",Object(b.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"browse"})," ","thorough your machine"]})]})]})),i.length?Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(n.w,{className:"my-2",children:w}),Object(b.jsx)("div",{className:"d-flex justify-content-end"})]}):null,Object(b.jsx)(c.Fragment,{children:Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsxs)(n.e,{color:"primary",className:"btn-prev",onClick:function(){return t.previous()},children:[Object(b.jsx)(S.a,{size:14,className:"align-middle me-sm-25 me-0"}),Object(b.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),Object(b.jsx)("div",{className:"btn-submit",children:Object(b.jsx)(n.e,{color:"success",type:"submit",onClick:T,children:"Submit"})})]})})]})]})},X=s(760),Z=s(794),_=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(null),s=Object(a.a)(t,2),n=s[0],r=s[1],i=[{id:"account-details",title:"Your Information",subtitle:"Enter Your Information.",icon:Object(b.jsx)(X.a,{size:18}),content:Object(b.jsx)(C,{stepper:n,type:"modern-vertical"})},{id:"step-address",title:"Address",subtitle:"Add Address",icon:Object(b.jsx)(Z.a,{size:18}),content:Object(b.jsx)(z,{stepper:n,type:"modern-vertical"})},{id:"personal-info",title:"Document Upload",subtitle:"Upload your document",icon:Object(b.jsx)(R.a,{size:18}),content:Object(b.jsx)(W,{stepper:n,type:"modern-vertical"})}];return Object(b.jsx)("div",{className:"modern-vertical-wizard",children:Object(b.jsx)(u,{type:"modern-vertical",ref:e,steps:i,options:{linear:!1},instance:function(e){return r(e)}})})};s(365),s(795),s(796),s(788),s(766),s(797),t.default=function(){return Object(b.jsx)(c.Fragment,{children:Object(b.jsx)(n.G,{children:Object(b.jsx)(n.k,{sm:"12",children:Object(b.jsx)(_,{})})})})}}}]);
//# sourceMappingURL=16.cac1def7.chunk.js.map