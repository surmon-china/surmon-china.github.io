import{c as e}from"./dist-D508tbBT.js";function t(e){for(var t={},n=e.split(` `),r=0;r<n.length;++r)t[n[r]]=!0;return t}var n=t(`Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait`),r=t(`if elseif else and not or eq ne in ni for foreach while switch`),i=/[+\-*&%=<>!?^\/\|]/;function a(e,t,n){return t.tokenize=n,n(e,t)}function o(e,t){var o=t.beforeParams;t.beforeParams=!1;var u=e.next();if((u==`"`||u==`'`)&&t.inParams)return a(e,t,s(u));if(/[\[\]{}\(\),;\.]/.test(u))return u==`(`&&o?t.inParams=!0:u==`)`&&(t.inParams=!1),null;if(/\d/.test(u))return e.eatWhile(/[\w\.]/),`number`;if(u==`#`)return e.eat(`*`)?a(e,t,c):u==`#`&&e.match(/ *\[ *\[/)?a(e,t,l):(e.skipToEnd(),`comment`);if(u==`"`)return e.skipTo(/"/),`comment`;if(u==`$`)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),t.beforeParams=!0,`builtin`;if(i.test(u))return e.eatWhile(i),`comment`;e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var d=e.current().toLowerCase();return n&&n.propertyIsEnumerable(d)?`keyword`:r&&r.propertyIsEnumerable(d)?(t.beforeParams=!0,`keyword`):null}function s(e){return function(t,n){for(var r=!1,i,a=!1;(i=t.next())!=null;){if(i==e&&!r){a=!0;break}r=!r&&i==`\\`}return a&&(n.tokenize=o),`string`}}function c(e,t){for(var n=!1,r;r=e.next();){if(r==`#`&&n){t.tokenize=o;break}n=r==`*`}return`comment`}function l(e,t){for(var n=0,r;r=e.next();){if(r==`#`&&n==2){t.tokenize=o;break}r==`]`?n++:r!=` `&&(n=0)}return`meta`}var u={name:`tcl`,startState:function(){return{tokenize:o,beforeParams:!1,inParams:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},languageData:{commentTokens:{line:`#`}}},d={language:()=>e.define(u),code:`proc find {{basedir .} {filterScript {}}} {
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
`};export{d as default};