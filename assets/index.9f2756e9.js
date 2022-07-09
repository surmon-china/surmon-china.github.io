import{S as k}from"./index.4b2436cb.js";import"./index.5bbbf6dc.js";var f={};function u(n,e){for(var i=0;i<e.length;i++)f[e[i]]=n}var h=["true","false"],a=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],d=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];u("atom",h);u("keyword",a);u("builtin",d);function g(n,e){if(n.eatSpace())return null;var i=n.sol(),t=n.next();if(t==="\\")return n.next(),null;if(t==="'"||t==='"'||t==="`")return e.tokens.unshift(s(t,t==="`"?"quote":"string")),c(n,e);if(t==="#")return i&&n.eat("!")?(n.skipToEnd(),"meta"):(n.skipToEnd(),"comment");if(t==="$")return e.tokens.unshift(p),c(n,e);if(t==="+"||t==="=")return"operator";if(t==="-")return n.eat("-"),n.eatWhile(/\w/),"attribute";if(t=="<"){if(n.match("<<"))return"operator";var r=n.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(r)return e.tokens.unshift(v(r[1])),"string.special"}if(/\d/.test(t)&&(n.eatWhile(/\d/),n.eol()||!/\w/.test(n.peek())))return"number";n.eatWhile(/[\w-]/);var o=n.current();return n.peek()==="="&&/\w+/.test(o)?"def":f.hasOwnProperty(o)?f[o]:null}function s(n,e){var i=n=="("?")":n=="{"?"}":n;return function(t,r){for(var o,l=!1;(o=t.next())!=null;){if(o===i&&!l){r.tokens.shift();break}else if(o==="$"&&!l&&n!=="'"&&t.peek()!=i){l=!0,t.backUp(1),r.tokens.unshift(p);break}else{if(!l&&n!==i&&o===n)return r.tokens.unshift(s(n,e)),c(t,r);if(!l&&/['"]/.test(o)&&!/['"]/.test(n)){r.tokens.unshift(w(o,"string")),t.backUp(1);break}}l=!l&&o==="\\"}return e}}function w(n,e){return function(i,t){return t.tokens[0]=s(n,e),i.next(),c(i,t)}}var p=function(n,e){e.tokens.length>1&&n.eat("$");var i=n.next();return/['"({]/.test(i)?(e.tokens[0]=s(i,i=="("?"quote":i=="{"?"def":"string"),c(n,e)):(/\d/.test(i)||n.eatWhile(/\w/),e.tokens.shift(),"def")};function v(n){return function(e,i){return e.sol()&&e.string==n&&i.tokens.shift(),e.skipToEnd(),"string.special"}}function c(n,e){return(e.tokens[0]||g)(n,e)}const b={startState:function(){return{tokens:[]}},token:function(n,e){return c(n,e)},languageData:{autocomplete:h.concat(a,d),closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"#"}}};var m=`#!/bin/bash
# Simple line count example, using bash
#
# Bash tutorial: http://linuxconfig.org/Bash_scripting_Tutorial#8-2-read-file-into-bash-array
# My scripting link: http://www.macs.hw.ac.uk/~hwloidl/docs/index.html#scripting
#
# Usage: ./line_count.sh file
# -----------------------------------------------------------------------------

# Link filedescriptor 10 with stdin
exec 10<&0
# stdin replaced with a file supplied as a first argument
exec < $1
# remember the name of the input file
in=$1

# init
file="current_line.txt"
let count=0

# this while loop iterates over all lines of the file
while read LINE
do
    # increase line counter
    ((count++))
    # write current line to a tmp file with name $file (not needed for counting)
    echo $LINE > $file
    # this checks the return code of echo (not needed for writing; just for demo)
    if [ $? -ne 0 ]
     then echo "Error in writing to file \${file}; check its permissions!"
    fi
done

echo "Number of lines: $count"
echo "The last line of the file is: \`cat \${file}\`"

# Note: You can achieve the same by just using the tool wc like this
echo "Expected number of lines: \`wc -l $in\`"

# restore stdin from filedescriptor 10
# and close filedescriptor 10
exec 0<&10 10<&-`,S={language:()=>k.define(b),code:m};export{S as default};
