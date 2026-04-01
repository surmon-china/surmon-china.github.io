import{c as e}from"./dist-D508tbBT.js";function t(e){n(e,`start`);var t={},r=e.languageData||{},i=!1;for(var c in e)if(c!=r&&e.hasOwnProperty(c))for(var l=t[c]=[],u=e[c],d=0;d<u.length;d++){var f=u[d];l.push(new a(f,e)),(f.indent||f.dedent)&&(i=!0)}return{name:r.name,startState:function(){return{state:`start`,pending:null,indent:i?[]:null}},copyState:function(e){var t={state:e.state,pending:e.pending,indent:e.indent&&e.indent.slice(0)};return e.stack&&(t.stack=e.stack.slice(0)),t},token:o(t),indent:s(t,r),mergeTokens:r.mergeTokens,languageData:r}}function n(e,t){if(!e.hasOwnProperty(t))throw Error(`Undefined state `+t+` in simple mode`)}function r(e,t){if(!e)return/(?:)/;var n=``;return e instanceof RegExp?(e.ignoreCase&&(n=`i`),e.unicode&&(n+=`u`),e=e.source):e=String(e),RegExp((t===!1?``:`^`)+`(?:`+e+`)`,n)}function i(e){if(!e)return null;if(e.apply)return e;if(typeof e==`string`)return e.replace(/\./g,` `);for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g,` `));return t}function a(e,t){(e.next||e.push)&&n(t,e.next||e.push),this.regex=r(e.regex),this.token=i(e.token),this.data=e}function o(e){return function(t,n){if(n.pending){var r=n.pending.shift();return n.pending.length==0&&(n.pending=null),t.pos+=r.text.length,r.token}for(var i=e[n.state],a=0;a<i.length;a++){var o=i[a],s=(!o.data.sol||t.sol())&&t.match(o.regex);if(s){o.data.next?n.state=o.data.next:o.data.push?((n.stack||=[]).push(n.state),n.state=o.data.push):o.data.pop&&n.stack&&n.stack.length&&(n.state=n.stack.pop()),o.data.indent&&n.indent.push(t.indentation()+t.indentUnit),o.data.dedent&&n.indent.pop();var c=o.token;if(c&&c.apply&&(c=c(s)),s.length>2&&o.token&&typeof o.token!=`string`){n.pending=[];for(var l=2;l<s.length;l++)s[l]&&n.pending.push({text:s[l],token:o.token[l-1]});return t.backUp(s[0].length-(s[1]?s[1].length:0)),c[0]}else if(c&&c.join)return c[0];else return c}}return t.next(),null}}function s(e,t){return function(n,r){if(n.indent==null||t.dontIndentStates&&t.dontIndentStates.indexOf(n.state)>-1)return null;var i=n.indent.length-1,a=e[n.state];scan:for(;;){for(var o=0;o<a.length;o++){var s=a[o];if(s.data.dedent&&s.data.dedentIfLineStart!==!1){var c=s.regex.exec(r);if(c&&c[0]){i--,(s.next||s.push)&&(a=e[s.next||s.push]),r=r.slice(c[0].length);continue scan}}}break}return i<0?0:n.indent[i]}}var c=`from`,l=RegExp(`^(\\s*)\\b(`+c+`)\\b`,`i`),u=[`run`,`cmd`,`entrypoint`,`shell`],d=RegExp(`^(\\s*)(`+u.join(`|`)+`)(\\s+\\[)`,`i`),f=`expose`,p=RegExp(`^(\\s*)(`+f+`)(\\s+)`,`i`),m=`(`+[c,f].concat(u,[`arg`,`from`,`maintainer`,`label`,`env`,`add`,`copy`,`volume`,`user`,`workdir`,`onbuild`,`stopsignal`,`healthcheck`,`shell`]).join(`|`)+`)`,h=RegExp(`^(\\s*)`+m+`(\\s*)(#.*)?$`,`i`),g=RegExp(`^(\\s*)`+m+`(\\s+)`,`i`),_=t({start:[{regex:/^\s*#.*$/,sol:!0,token:`comment`},{regex:l,token:[null,`keyword`],sol:!0,next:`from`},{regex:h,token:[null,`keyword`,null,`error`],sol:!0},{regex:d,token:[null,`keyword`,null],sol:!0,next:`array`},{regex:p,token:[null,`keyword`,null],sol:!0,next:`expose`},{regex:g,token:[null,`keyword`,null],sol:!0,next:`arguments`},{regex:/./,token:null}],from:[{regex:/\s*$/,token:null,next:`start`},{regex:/(\s*)(#.*)$/,token:[null,`error`],next:`start`},{regex:/(\s*\S+\s+)(as)/i,token:[null,`keyword`],next:`start`},{token:null,next:`start`}],single:[{regex:/(?:[^\\']|\\.)/,token:`string`},{regex:/'/,token:`string`,pop:!0}],double:[{regex:/(?:[^\\"]|\\.)/,token:`string`},{regex:/"/,token:`string`,pop:!0}],array:[{regex:/\]/,token:null,next:`start`},{regex:/"(?:[^\\"]|\\.)*"?/,token:`string`}],expose:[{regex:/\d+$/,token:`number`,next:`start`},{regex:/[^\d]+$/,token:null,next:`start`},{regex:/\d+/,token:`number`},{regex:/[^\d]+/,token:null},{token:null,next:`start`}],arguments:[{regex:/^\s*#.*$/,sol:!0,token:`comment`},{regex:/"(?:[^\\"]|\\.)*"?$/,token:`string`,next:`start`},{regex:/"/,token:`string`,push:`double`},{regex:/'(?:[^\\']|\\.)*'?$/,token:`string`,next:`start`},{regex:/'/,token:`string`,push:`single`},{regex:/[^#"']+[\\`]$/,token:null},{regex:/[^#"']+$/,token:null,next:`start`},{regex:/[^#"']+/,token:null},{token:null,next:`start`}],languageData:{commentTokens:{line:`#`}}}),v={language:()=>e.define(_),code:`# Install Ghost blogging platform and run development environment
#
# VERSION 1.0.0

FROM ubuntu:12.10
MAINTAINER Amer Grgic "amer@livebyt.es"
WORKDIR /data/ghost

# Install dependencies for nginx installation
RUN apt-get update
RUN apt-get install -y python g++ make software-properties-common --force-yes
RUN add-apt-repository ppa:chris-lea/node.js
RUN apt-get update
# Install unzip
RUN apt-get install -y unzip
# Install curl
RUN apt-get install -y curl
# Install nodejs & npm
RUN apt-get install -y rlwrap
RUN apt-get install -y nodejs 
# Download Ghost v0.4.1
RUN curl -L https://ghost.org/zip/ghost-latest.zip -o /tmp/ghost.zip
# Unzip Ghost zip to /data/ghost
RUN unzip -uo /tmp/ghost.zip -d /data/ghost
# Add custom config js to /data/ghost
ADD ./config.example.js /data/ghost/config.js
# Install Ghost with NPM
RUN cd /data/ghost/ && npm install --production
# Expose port 2368
EXPOSE 2368
# Run Ghost
CMD ["npm","start"]
`};export{v as default};