import{S as v}from"./index-a0963901.js";import"./index-6ff972e5.js";function o(e,n,i){return typeof i>"u"&&(i=""),typeof n>"u"&&(n="\\b"),new RegExp("^"+i+"(("+e.join(")|(")+"))"+n)}var g="\\\\[0-7]{1,3}",m="\\\\x[A-Fa-f0-9]{1,2}",k=`\\\\[abefnrtv0%?'"\\\\]`,F="([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])",l=["[<>]:","[<>=]=","<<=?",">>>?=?","=>","--?>","<--[->]?","\\/\\/","\\.{2,3}","[\\.\\\\%*+\\-<>!\\/^|&]=?","\\?","\\$","~",":"],b=o(["[<>]:","[<>=]=","[!=]==","<<=?",">>>?=?","=>?","--?>","<--[->]?","\\/\\/","[\\\\%*+\\-<>!\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),x=/^[;,()[\]{}]/,y=/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,z=o([g,m,k,F],"'"),E=["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"],w=["end","else","elseif","catch","finally"],p=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],s=["true","false","nothing","NaN","Inf"],A=o(E),C=o(w),T=o(p),_=o(s),D=/^@[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,P=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,S=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/,B=o(l,"","@"),$=o(l,"",":");function f(e){return e.nestedArrays>0}function G(e){return e.nestedGenerators>0}function a(e,n){return typeof n>"u"&&(n=0),e.scopes.length<=n?null:e.scopes[e.scopes.length-(n+1)]}function c(e,n){if(e.match("#=",!1))return n.tokenize=I,n.tokenize(e,n);var i=n.leavingExpr;if(e.sol()&&(i=!1),n.leavingExpr=!1,i&&e.match(/^'+/))return"operator";if(e.match(/\.{4,}/))return"error";if(e.match(/\.{1,3}/))return"operator";if(e.eatSpace())return null;var r=e.peek();if(r==="#")return e.skipToEnd(),"comment";if(r==="["&&(n.scopes.push("["),n.nestedArrays++),r==="("&&(n.scopes.push("("),n.nestedGenerators++),f(n)&&r==="]"){for(;n.scopes.length&&a(n)!=="[";)n.scopes.pop();n.scopes.pop(),n.nestedArrays--,n.leavingExpr=!0}if(G(n)&&r===")"){for(;n.scopes.length&&a(n)!=="(";)n.scopes.pop();n.scopes.pop(),n.nestedGenerators--,n.leavingExpr=!0}if(f(n)){if(n.lastToken=="end"&&e.match(":"))return"operator";if(e.match("end"))return"number"}var u;if((u=e.match(A,!1))&&n.scopes.push(u[0]),e.match(C,!1)&&n.scopes.pop(),e.match(/^::(?![:\$])/))return n.tokenize=j,n.tokenize(e,n);if(!i&&(e.match(P)||e.match($)))return"builtin";if(e.match(b))return"operator";if(e.match(/^\.?\d/,!1)){var d=RegExp(/^im\b/),t=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(t=!0),e.match(/^0x[0-9a-f_]+/i)&&(t=!0),e.match(/^0b[01_]+/i)&&(t=!0),e.match(/^0o[0-7_]+/i)&&(t=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(t=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(t=!0),t)return e.match(d),n.leavingExpr=!0,"number"}if(e.match("'"))return n.tokenize=O,n.tokenize(e,n);if(e.match(S))return n.tokenize=Z(e.current()),n.tokenize(e,n);if(e.match(D)||e.match(B))return"meta";if(e.match(x))return null;if(e.match(T))return"keyword";if(e.match(_))return"builtin";var h=n.isDefinition||n.lastToken=="function"||n.lastToken=="macro"||n.lastToken=="type"||n.lastToken=="struct"||n.lastToken=="immutable";return e.match(y)?h?e.peek()==="."?(n.isDefinition=!0,"variable"):(n.isDefinition=!1,"def"):(n.leavingExpr=!0,"variable"):(e.next(),"error")}function j(e,n){return e.match(/.*?(?=[,;{}()=\s]|$)/),e.match("{")?n.nestedParameters++:e.match("}")&&n.nestedParameters>0&&n.nestedParameters--,n.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():n.nestedParameters==0&&(n.tokenize=c),"builtin"}function I(e,n){return e.match("#=")&&n.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match("=#")&&(n.nestedComments--,n.nestedComments==0&&(n.tokenize=c)),"comment"}function O(e,n){var i=!1,r;if(e.match(z))i=!0;else if(r=e.match(/\\u([a-f0-9]{1,4})(?=')/i)){var u=parseInt(r[1],16);(u<=55295||u>=57344)&&(i=!0,e.next())}else if(r=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var u=parseInt(r[1],16);u<=1114111&&(i=!0,e.next())}return i?(n.leavingExpr=!0,n.tokenize=c,"string"):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match("'")&&(n.tokenize=c),"error")}function Z(e){e.substr(-3)==='"""'?e='"""':e.substr(-1)==='"'&&(e='"');function n(i,r){if(i.eat("\\"))i.next();else{if(i.match(e))return r.tokenize=c,r.leavingExpr=!0,"string";i.eat(/[`"]/)}return i.eatWhile(/[^\\`"]/),"string"}return n}const q={name:"julia",startState:function(){return{tokenize:c,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(e,n){var i=n.tokenize(e,n),r=e.current();return r&&i&&(n.lastToken=r),i},indent:function(e,n,i){var r=0;return(n==="]"||n===")"||/^end\b/.test(n)||/^else/.test(n)||/^catch\b/.test(n)||/^elseif\b/.test(n)||/^finally/.test(n))&&(r=-1),(e.scopes.length+r)*i.unit},languageData:{indentOnInput:/^\s*(end|else|catch|finally)\b$/,commentTokens:{line:"#",block:{open:"#=",close:"=#"}},closeBrackets:{brackets:["(","[","{",'"']},autocomplete:p.concat(s)}},N=`#numbers
1234
1234im
.234
.234im
2.23im
2.3f3
23e2
0x234

#strings
'a'
"asdf"
r"regex"
b"bytestring"

"""
multiline string
"""

#identifiers
a
as123
function_name!

#unicode identifiers
# a = x\\ddot
a⃗ = ẍ
# a = v\\dot
a⃗ = v̇
#F\\vec = m \\cdotp a\\vec
F⃗ = m·a⃗

#literal identifier multiples
3x
4[1, 2, 3]

#dicts and indexing
x=[1, 2, 3]
x[end-1]
x={"julia"=>"language of technical computing"}


#exception handling
try
  f()
catch
  @printf "Error"
finally
  g()
end

#types
immutable Color{T<:Number}
  r::T
  g::T
  b::T
end

#functions
function change!(x::Vector{Float64})
  for i = 1:length(x)
    x[i] *= 2
  end
end

#function invocation
f('b', (2, 3)...)

#operators
|=
&=
^=
\\-
%=
*=
+=
-=
<=
>=
!=
==
%
*
+
-
<
>
!
=
|
&
^
\\
?
~
:
$
<:
.<
.>
<<
<<=
>>
>>>>
>>=
>>>=
<<=
<<<=
.<=
.>=
.==
->
//
in
...
//
:=
.//=
.*=
./=
.^=
.%=
.+=
.-=
\\=
\\\\=
||
===
&&
|=
.|=
<:
>:
|>
<|
::
x ? y : z

#macros
@spawnat 2 1+1
@eval(:x)

#keywords and operators
if else elseif while for
 begin let end do
try catch finally return break continue
global local const 
export import importall using
function macro module baremodule 
type immutable quote
true false enumerate


    `,V={language:()=>v.define(q),code:N};export{V as default};
