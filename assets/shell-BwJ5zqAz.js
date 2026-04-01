import{c as e}from"./dist-D508tbBT.js";var t={};function n(e,n){for(var r=0;r<n.length;r++)t[n[r]]=e}var r=[`true`,`false`],i=[`if`,`then`,`do`,`else`,`elif`,`while`,`until`,`for`,`in`,`esac`,`fi`,`fin`,`fil`,`done`,`exit`,`set`,`unset`,`export`,`function`],a=`ab.awk.bash.beep.cat.cc.cd.chown.chmod.chroot.clear.cp.curl.cut.diff.echo.find.gawk.gcc.get.git.grep.hg.kill.killall.ln.ls.make.mkdir.openssl.mv.nc.nl.node.npm.ping.ps.restart.rm.rmdir.sed.service.sh.shopt.shred.source.sort.sleep.ssh.start.stop.su.sudo.svn.tee.telnet.top.touch.vi.vim.wall.wc.wget.who.write.yes.zsh`.split(`.`);n(`atom`,r),n(`keyword`,i),n(`builtin`,a);function o(e,n){if(e.eatSpace())return null;var r=e.sol(),i=e.next();if(i===`\\`)return e.next(),null;if(i===`'`||i===`"`||i==="`")return n.tokens.unshift(s(i,i==="`"?`quote`:`string`)),d(e,n);if(i===`#`)return r&&e.eat(`!`)?(e.skipToEnd(),`meta`):(e.skipToEnd(),`comment`);if(i===`$`)return n.tokens.unshift(l),d(e,n);if(i===`+`||i===`=`)return`operator`;if(i===`-`)return e.eat(`-`),e.eatWhile(/\w/),`attribute`;if(i==`<`){if(e.match(`<<`))return`operator`;var a=e.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);if(a)return n.tokens.unshift(u(a[1]||a[2])),`string.special`}if(/\d/.test(i)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return`number`;e.eatWhile(/[\w-]/);var o=e.current();return e.peek()===`=`&&/\w+/.test(o)?`def`:t.hasOwnProperty(o)?t[o]:null}function s(e,t){var n=e==`(`?`)`:e==`{`?`}`:e;return function(r,i){for(var a,o=!1;(a=r.next())!=null;){if(a===n&&!o){i.tokens.shift();break}else if(a===`$`&&!o&&e!==`'`&&r.peek()!=n){o=!0,r.backUp(1),i.tokens.unshift(l);break}else if(!o&&e!==n&&a===e)return i.tokens.unshift(s(e,t)),d(r,i);else if(!o&&/['"]/.test(a)&&!/['"]/.test(e)){i.tokens.unshift(c(a,`string`)),r.backUp(1);break}o=!o&&a===`\\`}return t}}function c(e,t){return function(n,r){return r.tokens[0]=s(e,t),n.next(),d(n,r)}}var l=function(e,t){t.tokens.length>1&&e.eat(`$`);var n=e.next();return/['"({]/.test(n)?(t.tokens[0]=s(n,n==`(`?`quote`:n==`{`?`def`:`string`),d(e,t)):(/\d/.test(n)||e.eatWhile(/\w/),t.tokens.shift(),`def`)};function u(e){return function(t,n){return t.sol()&&t.string==e&&n.tokens.shift(),t.skipToEnd(),`string.special`}}function d(e,t){return(t.tokens[0]||o)(e,t)}var f={name:`shell`,startState:function(){return{tokens:[]}},token:function(e,t){return d(e,t)},languageData:{autocomplete:r.concat(i,a),closeBrackets:{brackets:[`(`,`[`,`{`,`'`,`"`,"`"]},commentTokens:{line:`#`}}},p={language:()=>e.define(f),code:`#!/bin/bash
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
exec 0<&10 10<&-`};export{p as default};