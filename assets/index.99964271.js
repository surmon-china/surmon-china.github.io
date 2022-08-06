import{S as k}from"./index.9d33a860.js";import"./index.b7330ebb.js";function u(n){for(var e={},i=0;i<n.length;++i)e[n[i]]=!0;return e}var h=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","TRUE","FALSE"],b=["list","quote","bquote","eval","return","call","parse","deparse"],v=["if","else","repeat","while","function","for","in","next","break"],m=["if","else","repeat","while","function","for"],y=u(h),w=u(b),A=u(v),N=u(m),x=/[+\-*\/^<>=!&|~$:]/,o;function s(n,e){o=null;var i=n.next();if(i=="#")return n.skipToEnd(),"comment";if(i=="0"&&n.eat("x"))return n.eatWhile(/[\da-f]/i),"number";if(i=="."&&n.eat(/\d/))return n.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(i))return n.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if(i=="'"||i=='"')return e.tokenize=I(i),"string";if(i=="`")return n.match(/[^`]+`/),"string.special";if(i=="."&&n.match(/.(?:[.]|\d+)/))return"keyword";if(/[a-zA-Z\.]/.test(i)){n.eatWhile(/[\w\.]/);var t=n.current();return y.propertyIsEnumerable(t)?"atom":A.propertyIsEnumerable(t)?(N.propertyIsEnumerable(t)&&!n.match(/\s*if(\s+|$)/,!1)&&(o="block"),"keyword"):w.propertyIsEnumerable(t)?"builtin":"variable"}else return i=="%"?(n.skipTo("%")&&n.next(),"variableName.special"):i=="<"&&n.eat("-")||i=="<"&&n.match("<-")||i=="-"&&n.match(/>>?/)||i=="="&&e.ctx.argList?"operator":x.test(i)?(i=="$"||n.eatWhile(x),"operator"):/[\(\){}\[\];]/.test(i)?(o=i,i==";"?"punctuation":null):null}function I(n){return function(e,i){if(e.eat("\\")){var t=e.next();return t=="x"?e.match(/^[a-f0-9]{2}/i):(t=="u"||t=="U")&&e.eat("{")&&e.skipTo("}")?e.next():t=="u"?e.match(/^[a-f0-9]{4}/i):t=="U"?e.match(/^[a-f0-9]{8}/i):/[0-7]/.test(t)&&e.match(/^[0-7]{1,2}/),"string.special"}else{for(var r;(r=e.next())!=null;){if(r==n){i.tokenize=s;break}if(r=="\\"){e.backUp(1);break}}return"string"}}}var d=1,c=2,f=4;function l(n,e,i){n.ctx={type:e,indent:n.indent,flags:0,column:i.column(),prev:n.ctx}}function g(n,e){var i=n.ctx;n.ctx={type:i.type,indent:i.indent,flags:i.flags|e,column:i.column,prev:i.prev}}function a(n){n.indent=n.ctx.indent,n.ctx=n.ctx.prev}const E={startState:function(n){return{tokenize:s,ctx:{type:"top",indent:-n,flags:c},indent:0,afterIdent:!1}},token:function(n,e){if(n.sol()&&((e.ctx.flags&3)==0&&(e.ctx.flags|=c),e.ctx.flags&f&&a(e),e.indent=n.indentation()),n.eatSpace())return null;var i=e.tokenize(n,e);return i!="comment"&&(e.ctx.flags&c)==0&&g(e,d),(o==";"||o=="{"||o=="}")&&e.ctx.type=="block"&&a(e),o=="{"?l(e,"}",n):o=="("?(l(e,")",n),e.afterIdent&&(e.ctx.argList=!0)):o=="["?l(e,"]",n):o=="block"?l(e,"block",n):o==e.ctx.type?a(e):e.ctx.type=="block"&&i!="comment"&&g(e,f),e.afterIdent=i=="variable"||i=="keyword",i},indent:function(n,e,i){if(n.tokenize!=s)return 0;var t=e&&e.charAt(0),r=n.ctx,p=t==r.type;return r.flags&f&&(r=r.prev),r.type=="block"?r.indent+(t=="{"?0:i.unit):r.flags&d?r.column+(p?0:1):r.indent+(p?0:i.unit)},languageData:{wordChars:".",commentTokens:{line:"#"},autocomplete:h.concat(b,v)}},L=`X <- list(height = 5.4, weight = 54)
cat("Printing objects: "); print(X)
print("Accessing individual elements:")
cat(sprintf("Your height is %s and your weight is %s\\n", X$height, X$weight))

# Functions:
square <- function(x) {
  return(x * x)
}
cat(sprintf("The square of 3 is %s\\n", square(3)))

# In R, the last expression in a function is, by default, what is
# returned. The idiomatic way to write the function is:
square <- function(x) {
  x * x
}
# or, for functions with short content:
square <- function(x) x * x

# Function arguments with default values:
cube <- function(x = 5) x * x * x
cat(sprintf("Calling cube with 2 : %s\\n", cube(2))  # will give 2^3
cat(sprintf("Calling cube        : %s\\n", cube())   # will default to 5^3.

powers <- function(x) list(x2 = x*x, x3 = x*x*x, x4 = x*x*x*x)

cat("Powers of 3: "); print(powers(3))

# Data frames
df <- data.frame(letters = letters[1:5], '#letter' = 1:5)
print(df$letters)
print(df$\`#letter\`)

# Operators:
m1 <- matrix(1:6, 2, 3)
m2 <- m1 %*% t(m1)
cat("Matrix product: "); print(m2)

# Assignments:
a <- 1
b <<- 2
c = 3
4 -> d
5 ->> e
`,q={language:()=>k.define(E),code:L};export{q as default};
