import{c as e}from"./dist-D508tbBT.js";function t(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0;return t}var n=[`NULL`,`NA`,`Inf`,`NaN`,`NA_integer_`,`NA_real_`,`NA_complex_`,`NA_character_`,`TRUE`,`FALSE`],r=[`list`,`quote`,`bquote`,`eval`,`return`,`call`,`parse`,`deparse`],i=[`if`,`else`,`repeat`,`while`,`function`,`for`,`in`,`next`,`break`],a=[`if`,`else`,`repeat`,`while`,`function`,`for`],o=t(n),s=t(r),c=t(i),l=t(a),u=/[+\-*\/^<>=!&|~$:]/,d;function f(e,t){d=null;var n=e.next();if(n==`#`)return e.skipToEnd(),`comment`;if(n==`0`&&e.eat(`x`))return e.eatWhile(/[\da-f]/i),`number`;if(n==`.`&&e.eat(/\d/))return e.match(/\d*(?:e[+\-]?\d+)?/),`number`;if(/\d/.test(n))return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),`number`;if(n==`'`||n==`"`)return t.tokenize=p(n),`string`;if(n=="`")return e.match(/[^`]+`/),`string.special`;if(n==`.`&&e.match(/.(?:[.]|\d+)/))return`keyword`;if(/[a-zA-Z\.]/.test(n)){e.eatWhile(/[\w\.]/);var r=e.current();return o.propertyIsEnumerable(r)?`atom`:c.propertyIsEnumerable(r)?(l.propertyIsEnumerable(r)&&!e.match(/\s*if(\s+|$)/,!1)&&(d=`block`),`keyword`):s.propertyIsEnumerable(r)?`builtin`:`variable`}else if(n==`%`)return e.skipTo(`%`)&&e.next(),`variableName.special`;else if(n==`<`&&e.eat(`-`)||n==`<`&&e.match(`<-`)||n==`-`&&e.match(/>>?/))return`operator`;else if(n==`=`&&t.ctx.argList)return`operator`;else if(u.test(n))return n==`$`||e.eatWhile(u),`operator`;else if(/[\(\){}\[\];]/.test(n))return d=n,n==`;`?`punctuation`:null;else return null}function p(e){return function(t,n){if(t.eat(`\\`)){var r=t.next();return r==`x`?t.match(/^[a-f0-9]{2}/i):(r==`u`||r==`U`)&&t.eat(`{`)&&t.skipTo(`}`)?t.next():r==`u`?t.match(/^[a-f0-9]{4}/i):r==`U`?t.match(/^[a-f0-9]{8}/i):/[0-7]/.test(r)&&t.match(/^[0-7]{1,2}/),`string.special`}else{for(var i;(i=t.next())!=null;){if(i==e){n.tokenize=f;break}if(i==`\\`){t.backUp(1);break}}return`string`}}}var m=1,h=2,g=4;function _(e,t,n){e.ctx={type:t,indent:e.indent,flags:0,column:n.column(),prev:e.ctx}}function v(e,t){var n=e.ctx;e.ctx={type:n.type,indent:n.indent,flags:n.flags|t,column:n.column,prev:n.prev}}function y(e){e.indent=e.ctx.indent,e.ctx=e.ctx.prev}var b={name:`r`,startState:function(e){return{tokenize:f,ctx:{type:`top`,indent:-e,flags:h},indent:0,afterIdent:!1}},token:function(e,t){if(e.sol()&&(t.ctx.flags&3||(t.ctx.flags|=h),t.ctx.flags&g&&y(t),t.indent=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);return n!=`comment`&&(t.ctx.flags&h)==0&&v(t,m),(d==`;`||d==`{`||d==`}`)&&t.ctx.type==`block`&&y(t),d==`{`?_(t,`}`,e):d==`(`?(_(t,`)`,e),t.afterIdent&&(t.ctx.argList=!0)):d==`[`?_(t,`]`,e):d==`block`?_(t,`block`,e):d==t.ctx.type?y(t):t.ctx.type==`block`&&n!=`comment`&&v(t,g),t.afterIdent=n==`variable`||n==`keyword`,n},indent:function(e,t,n){if(e.tokenize!=f)return 0;var r=t&&t.charAt(0),i=e.ctx,a=r==i.type;return i.flags&g&&(i=i.prev),i.type==`block`?i.indent+(r==`{`?0:n.unit):i.flags&m?i.column+(a?0:1):i.indent+(a?0:n.unit)},languageData:{wordChars:`.`,commentTokens:{line:`#`},autocomplete:n.concat(r,i)}},x={language:()=>e.define(b),code:`X <- list(height = 5.4, weight = 54)
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
`};export{x as default};