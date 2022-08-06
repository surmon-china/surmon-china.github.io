import{S as d}from"./index.d5099d42.js";import"./index.643a1a36.js";function u(r){for(var n={},t=r.split(" "),e=0;e<t.length;++e)n[t[e]]=!0;return n}var f=u("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),s=u("if elseif else and not or eq ne in ni for foreach while switch"),c=/[+\-*&%=<>!?^\/\|]/;function l(r,n,t){return n.tokenize=t,t(r,n)}function a(r,n){var t=n.beforeParams;n.beforeParams=!1;var e=r.next();if((e=='"'||e=="'")&&n.inParams)return l(r,n,p(e));if(/[\[\]{}\(\),;\.]/.test(e))return e=="("&&t?n.inParams=!0:e==")"&&(n.inParams=!1),null;if(/\d/.test(e))return r.eatWhile(/[\w\.]/),"number";if(e=="#")return r.eat("*")?l(r,n,m):e=="#"&&r.match(/ *\[ *\[/)?l(r,n,k):(r.skipToEnd(),"comment");if(e=='"')return r.skipTo(/"/),"comment";if(e=="$")return r.eatWhile(/[$_a-z0-9A-Z\.{:]/),r.eatWhile(/}/),n.beforeParams=!0,"builtin";if(c.test(e))return r.eatWhile(c),"comment";r.eatWhile(/[\w\$_{}\xa1-\uffff]/);var i=r.current().toLowerCase();return f&&f.propertyIsEnumerable(i)?"keyword":s&&s.propertyIsEnumerable(i)?(n.beforeParams=!0,"keyword"):null}function p(r){return function(n,t){for(var e=!1,i,o=!1;(i=n.next())!=null;){if(i==r&&!e){o=!0;break}e=!e&&i=="\\"}return o&&(t.tokenize=a),"string"}}function m(r,n){for(var t=!1,e;e=r.next();){if(e=="#"&&t){n.tokenize=a;break}t=e=="*"}return"comment"}function k(r,n){for(var t=0,e;e=r.next();){if(e=="#"&&t==2){n.tokenize=a;break}e=="]"?t++:e!=" "&&(t=0)}return"meta"}const b={startState:function(){return{tokenize:a,beforeParams:!1,inParams:!1}},token:function(r,n){return r.eatSpace()?null:n.tokenize(r,n)},languageData:{commentTokens:{line:"#"}}},g=`proc find {{basedir .} {filterScript {}}} {
    set oldwd [pwd]
    cd $basedir
    set cwd [pwd]
    set filenames [glob -nocomplain * .*]
    set files {}
    set filt [string length $filterScript]
    foreach filename $filenames {
        if {!$filt || [eval $filterScript [list $filename]]} {
            lappend files [file join $cwd $filename]
        }
        if {[file isdirectory $filename]} {
            set files [concat $files [find $filename $filterScript]]
        }
    }
    cd $oldwd
    return $files
}
`,v={language:()=>d.define(b),code:g};export{v as default};
