import{c as e}from"./dist-D508tbBT.js";function t(e,t,n){return n===void 0&&(n=``),t===void 0&&(t=`\\b`),RegExp(`^`+n+`((`+e.join(`)|(`)+`))`+t)}var n=`\\\\[0-7]{1,3}`,r=`\\\\x[A-Fa-f0-9]{1,2}`,i=`\\\\[abefnrtv0%?'"\\\\]`,a=`([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])`,o=[`[<>]:`,`[<>=]=`,`<<=?`,`>>>?=?`,`=>`,`--?>`,`<--[->]?`,`\\/\\/`,`\\.{2,3}`,`[\\.\\\\%*+\\-<>!\\/^|&]=?`,`\\?`,`\\$`,`~`,`:`],s=t(`[<>]:,[<>=]=,[!=]==,<<=?,>>>?=?,=>?,--?>,<--[->]?,\\/\\/,[\\\\%*+\\-<>!\\/^|&\\u00F7\\u22BB]=?,\\?,\\$,~,:,\\u00D7,\\u2208,\\u2209,\\u220B,\\u220C,\\u2218,\\u221A,\\u221B,\\u2229,\\u222A,\\u2260,\\u2264,\\u2265,\\u2286,\\u2288,\\u228A,\\u22C5,\\b(in|isa)\\b(?!.?\\()`.split(`,`),``),c=/^[;,()[\]{}]/,l=/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,u=t([n,r,i,a],`'`),d=[`begin`,`function`,`type`,`struct`,`immutable`,`let`,`macro`,`for`,`while`,`quote`,`if`,`else`,`elseif`,`try`,`finally`,`catch`,`do`],f=[`end`,`else`,`elseif`,`catch`,`finally`],p=`if.else.elseif.while.for.begin.let.end.do.try.catch.finally.return.break.continue.global.local.const.export.import.importall.using.function.where.macro.module.baremodule.struct.type.mutable.immutable.quote.typealias.abstract.primitive.bitstype`.split(`.`),m=[`true`,`false`,`nothing`,`NaN`,`Inf`],h=t(d),g=t(f),_=t(p),v=t(m),y=/^@[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,b=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,x=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/,S=t(o,``,`@`),C=t(o,``,`:`);function w(e){return e.nestedArrays>0}function T(e){return e.nestedGenerators>0}function E(e,t){return t===void 0&&(t=0),e.scopes.length<=t?null:e.scopes[e.scopes.length-(t+1)]}function D(e,t){if(e.match(`#=`,!1))return t.tokenize=k,t.tokenize(e,t);var n=t.leavingExpr;if(e.sol()&&(n=!1),t.leavingExpr=!1,n&&e.match(/^'+/))return`operator`;if(e.match(/\.{4,}/))return`error`;if(e.match(/\.{1,3}/))return`operator`;if(e.eatSpace())return null;var r=e.peek();if(r===`#`)return e.skipToEnd(),`comment`;if(r===`[`&&(t.scopes.push(`[`),t.nestedArrays++),r===`(`&&(t.scopes.push(`(`),t.nestedGenerators++),w(t)&&r===`]`){for(;t.scopes.length&&E(t)!==`[`;)t.scopes.pop();t.scopes.pop(),t.nestedArrays--,t.leavingExpr=!0}if(T(t)&&r===`)`){for(;t.scopes.length&&E(t)!==`(`;)t.scopes.pop();t.scopes.pop(),t.nestedGenerators--,t.leavingExpr=!0}if(w(t)){if(t.lastToken==`end`&&e.match(`:`))return`operator`;if(e.match(`end`))return`number`}var i;if((i=e.match(h,!1))&&t.scopes.push(i[0]),e.match(g,!1)&&t.scopes.pop(),e.match(/^::(?![:\$])/))return t.tokenize=O,t.tokenize(e,t);if(!n&&(e.match(b)||e.match(C)))return`builtin`;if(e.match(s))return`operator`;if(e.match(/^\.?\d/,!1)){var a=RegExp(/^im\b/),o=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(o=!0),e.match(/^0x[0-9a-f_]+/i)&&(o=!0),e.match(/^0b[01_]+/i)&&(o=!0),e.match(/^0o[0-7_]+/i)&&(o=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(o=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(o=!0),o)return e.match(a),t.leavingExpr=!0,`number`}if(e.match(`'`))return t.tokenize=A,t.tokenize(e,t);if(e.match(x))return t.tokenize=j(e.current()),t.tokenize(e,t);if(e.match(y)||e.match(S))return`meta`;if(e.match(c))return null;if(e.match(_))return`keyword`;if(e.match(v))return`builtin`;var u=t.isDefinition||t.lastToken==`function`||t.lastToken==`macro`||t.lastToken==`type`||t.lastToken==`struct`||t.lastToken==`immutable`;return e.match(l)?u?e.peek()===`.`?(t.isDefinition=!0,`variable`):(t.isDefinition=!1,`def`):(t.leavingExpr=!0,`variable`):(e.next(),`error`)}function O(e,t){return e.match(/.*?(?=[,;{}()=\s]|$)/),e.match(`{`)?t.nestedParameters++:e.match(`}`)&&t.nestedParameters>0&&t.nestedParameters--,t.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():t.nestedParameters==0&&(t.tokenize=D),`builtin`}function k(e,t){return e.match(`#=`)&&t.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match(`=#`)&&(t.nestedComments--,t.nestedComments==0&&(t.tokenize=D)),`comment`}function A(e,t){var n=!1,r;if(e.match(u))n=!0;else if(r=e.match(/\\u([a-f0-9]{1,4})(?=')/i)){var i=parseInt(r[1],16);(i<=55295||i>=57344)&&(n=!0,e.next())}else if(r=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var i=parseInt(r[1],16);i<=1114111&&(n=!0,e.next())}return n?(t.leavingExpr=!0,t.tokenize=D,`string`):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match(`'`)&&(t.tokenize=D),`error`)}function j(e){e.substr(-3)===`"""`?e=`"""`:e.substr(-1)===`"`&&(e=`"`);function t(t,n){if(t.eat(`\\`))t.next();else if(t.match(e))return n.tokenize=D,n.leavingExpr=!0,`string`;else t.eat(/[`"]/);return t.eatWhile(/[^\\`"]/),`string`}return t}var M={name:`julia`,startState:function(){return{tokenize:D,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(e,t){var n=t.tokenize(e,t),r=e.current();return r&&n&&(t.lastToken=r),n},indent:function(e,t,n){var r=0;return(t===`]`||t===`)`||/^end\b/.test(t)||/^else/.test(t)||/^catch\b/.test(t)||/^elseif\b/.test(t)||/^finally/.test(t))&&(r=-1),(e.scopes.length+r)*n.unit},languageData:{indentOnInput:/^\s*(end|else|catch|finally)\b$/,commentTokens:{line:`#`,block:{open:`#=`,close:`=#`}},closeBrackets:{brackets:[`(`,`[`,`{`,`"`]},autocomplete:p.concat(m)}},N={language:()=>e.define(M),code:`#numbers
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


    `};export{N as default};