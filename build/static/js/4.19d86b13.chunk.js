(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__2Up-p"}},48:function(e,t,c){e.exports={comments:"Comments_comments__3sSAv"}},49:function(e,t,c){e.exports={form:"NewCommentForm_form__3Lul_",loading:"NewCommentForm_loading__3cGZs",control:"NewCommentForm_control__1lNt2",actions:"NewCommentForm_actions__10OAa"}},50:function(e,t,c){e.exports={item:"CommentItem_item__DTUEq"}},51:function(e,t,c){e.exports={comments:"CommentsList_comments__2u4og"}},56:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(47),m=c.n(a),r=c(1),j=function(e){return Object(r.jsxs)("figure",{className:m.a.quote,children:[Object(r.jsx)("p",{children:e.text}),Object(r.jsx)("figcaption",{children:e.author})]})},i=c(40),d=c(48),l=c.n(d),u=c(38),b=c(39),x=c(15),O=c(49),h=c.n(O),f=function(e){var t=Object(n.useRef)(),c=Object(u.a)(b.a),s=c.sendRequest,o=c.status,a=c.error,m=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||m()}),[o,a,m]);var j=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(r.jsxs)("form",{className:h.a.form,onSubmit:j,children:["pending"===o&&Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(x.a,{})}),Object(r.jsxs)("div",{className:h.a.control,onSubmit:j,children:[Object(r.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(r.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(r.jsx)("div",{className:h.a.actions,children:Object(r.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=c(50),_=c.n(p),N=function(e){return Object(r.jsx)("li",{className:_.a.item,children:Object(r.jsx)("p",{children:e.text})})},v=c(51),C=c.n(v),g=function(e){return Object(r.jsx)("ul",{className:C.a.comments,children:e.comments.map((function(e){return Object(r.jsx)(N,{text:e.text},e.id)}))})},q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],o=t[1],a=Object(s.j)().quoteId,m=Object(u.a)(b.c),j=m.sendRequest,d=m.status,O=m.data;Object(n.useEffect)((function(){j(a)}),[a,j]);var h,p=Object(n.useCallback)((function(){j(a)}),[j,a]);return"pending"===d&&(h=Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(x.a,{})})),"completed"===d&&O&&O.length>0&&(h=Object(r.jsx)(g,{comments:O})),"completed"!==d||O&&0!==O.length||(h=Object(r.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(r.jsxs)("section",{className:l.a.comments,children:[Object(r.jsx)("h2",{children:"User Comments"}),!c&&Object(r.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(r.jsx)(f,{quoteId:a,onAddedComment:p}),h]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)(),c=Object(u.a)(b.e,!0),a=c.sendRequest,m=c.status,i=c.data,d=c.error,l=t.quoteId;return Object(n.useEffect)((function(){a(l)}),[a,l]),"pending"===m?Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(x.a,{})}):d?Object(r.jsx)("p",{className:"centered",children:d}):i.text?Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(j,{text:i.text,author:i.author}),Object(r.jsx)(s.c,{path:e.path,exact:!0,children:Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"load Comments"})})}),Object(r.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(r.jsx)(q,{})})]}):Object(r.jsx)("p",{children:"No Quoted Found"})}}}]);
//# sourceMappingURL=4.19d86b13.chunk.js.map