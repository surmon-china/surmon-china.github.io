import{S as h}from"./index.4b2436cb.js";import"./index.5bbbf6dc.js";function k(n){p(n,"start");var t={},e=n.languageData||{},g=!1;for(var l in n)if(l!=e&&n.hasOwnProperty(l))for(var a=t[l]=[],o=n[l],r=0;r<o.length;r++){var i=o[r];a.push(new m(i,n)),(i.indent||i.dedent)&&(g=!0)}return{startState:function(){return{state:"start",pending:null,indent:g?[]:null}},copyState:function(s){var u={state:s.state,pending:s.pending,indent:s.indent&&s.indent.slice(0)};return s.stack&&(u.stack=s.stack.slice(0)),u},token:v(t),indent:w(t,e),languageData:e}}function p(n,t){if(!n.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function R(n,t){if(!n)return/(?:)/;var e="";return n instanceof RegExp?(n.ignoreCase&&(e="i"),n=n.source):n=String(n),new RegExp((t===!1?"":"^")+"(?:"+n+")",e)}function y(n){if(!n)return null;if(n.apply)return n;if(typeof n=="string")return n.replace(/\./g," ");for(var t=[],e=0;e<n.length;e++)t.push(n[e]&&n[e].replace(/\./g," "));return t}function m(n,t){(n.next||n.push)&&p(t,n.next||n.push),this.regex=R(n.regex),this.token=y(n.token),this.data=n}function v(n){return function(t,e){if(e.pending){var g=e.pending.shift();return e.pending.length==0&&(e.pending=null),t.pos+=g.text.length,g.token}for(var l=n[e.state],a=0;a<l.length;a++){var o=l[a],r=(!o.data.sol||t.sol())&&t.match(o.regex);if(r){o.data.next?e.state=o.data.next:o.data.push?((e.stack||(e.stack=[])).push(e.state),e.state=o.data.push):o.data.pop&&e.stack&&e.stack.length&&(e.state=e.stack.pop()),o.data.indent&&e.indent.push(t.indentation()+t.indentUnit),o.data.dedent&&e.indent.pop();var i=o.token;if(i&&i.apply&&(i=i(r)),r.length>2&&o.token&&typeof o.token!="string"){e.pending=[];for(var s=2;s<r.length;s++)r[s]&&e.pending.push({text:r[s],token:o.token[s-1]});return t.backUp(r[0].length-(r[1]?r[1].length:0)),i[0]}else return i&&i.join?i[0]:i}}return t.next(),null}}function w(n,t){return function(e,g){if(e.indent==null||t.dontIndentStates&&t.doneIndentState.indexOf(e.state)>-1)return null;var l=e.indent.length-1,a=n[e.state];n:for(;;){for(var o=0;o<a.length;o++){var r=a[o];if(r.data.dedent&&r.data.dedentIfLineStart!==!1){var i=r.regex.exec(g);if(i&&i[0]){l--,(r.next||r.push)&&(a=n[r.next||r.push]),g=g.slice(i[0].length);continue n}}}break}return l<0?0:e.indent[l]}}var d="from",N=new RegExp("^(\\s*)\\b("+d+")\\b","i"),x=["run","cmd","entrypoint","shell"],U=new RegExp("^(\\s*)("+x.join("|")+")(\\s+\\[)","i"),f="expose",I=new RegExp("^(\\s*)("+f+")(\\s+)","i"),b=["arg","from","maintainer","label","env","add","copy","volume","user","workdir","onbuild","stopsignal","healthcheck","shell"],E=[d,f].concat(x).concat(b),c="("+E.join("|")+")",S=new RegExp("^(\\s*)"+c+"(\\s*)(#.*)?$","i"),$=new RegExp("^(\\s*)"+c+"(\\s+)","i");const z=k({start:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:N,token:[null,"keyword"],sol:!0,next:"from"},{regex:S,token:[null,"keyword",null,"error"],sol:!0},{regex:U,token:[null,"keyword",null],sol:!0,next:"array"},{regex:I,token:[null,"keyword",null],sol:!0,next:"expose"},{regex:$,token:[null,"keyword",null],sol:!0,next:"arguments"},{regex:/./,token:null}],from:[{regex:/\s*$/,token:null,next:"start"},{regex:/(\s*)(#.*)$/,token:[null,"error"],next:"start"},{regex:/(\s*\S+\s+)(as)/i,token:[null,"keyword"],next:"start"},{token:null,next:"start"}],single:[{regex:/(?:[^\\']|\\.)/,token:"string"},{regex:/'/,token:"string",pop:!0}],double:[{regex:/(?:[^\\"]|\\.)/,token:"string"},{regex:/"/,token:"string",pop:!0}],array:[{regex:/\]/,token:null,next:"start"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"}],expose:[{regex:/\d+$/,token:"number",next:"start"},{regex:/[^\d]+$/,token:null,next:"start"},{regex:/\d+/,token:"number"},{regex:/[^\d]+/,token:null},{token:null,next:"start"}],arguments:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:/"(?:[^\\"]|\\.)*"?$/,token:"string",next:"start"},{regex:/"/,token:"string",push:"double"},{regex:/'(?:[^\\']|\\.)*'?$/,token:"string",next:"start"},{regex:/'/,token:"string",push:"single"},{regex:/[^#"']+[\\`]$/,token:null},{regex:/[^#"']+$/,token:null,next:"start"},{regex:/[^#"']+/,token:null},{token:null,next:"start"}],languageData:{commentTokens:{line:"#"}}});var D=`# Install Ghost blogging platform and run development environment
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
`,G={language:()=>h.define(z),code:D};export{G as default};
