import{N as D,h as T,a as de,j as pe,t as c,P as Xe,k as _e,l as B,p as Ge,L as te,m as Ue,n as $e,q as Ye,v as Qe,w as ne,x as Ze,y as ce,z as H,e as Ve,i as We,A as Ke}from"./index-5a742e16.js";import{h as Je}from"./index-ea6b3ece.js";import"./index-2f6da573.js";import"./index-89a9e720.js";import"./index-5f8c9dcc.js";import"./index-e56cf380.js";class q{constructor(e,n,r,s,i,o,a){this.type=e,this.value=n,this.from=r,this.hash=s,this.end=i,this.children=o,this.positions=a,this.hashProp=[[T.contextHash,s]]}static create(e,n,r,s,i){let o=s+(s<<8)+e+(n<<4)|0;return new q(e,n,r,o,i,[],[])}addChild(e,n){e.prop(T.contextHash)!=this.hash&&(e=new B(e.type,e.children,e.positions,e.length,this.hashProp)),this.children.push(e),this.positions.push(n)}toTree(e,n=this.end){let r=this.children.length-1;return r>=0&&(n=Math.max(n,this.positions[r]+this.children[r].length+this.from)),new B(e.types[this.type],this.children,this.positions,n-this.from).balance({makeTree:(i,o,a)=>new B(D.none,i,o,a,this.hashProp)})}}var f;(function(t){t[t.Document=1]="Document",t[t.CodeBlock=2]="CodeBlock",t[t.FencedCode=3]="FencedCode",t[t.Blockquote=4]="Blockquote",t[t.HorizontalRule=5]="HorizontalRule",t[t.BulletList=6]="BulletList",t[t.OrderedList=7]="OrderedList",t[t.ListItem=8]="ListItem",t[t.ATXHeading1=9]="ATXHeading1",t[t.ATXHeading2=10]="ATXHeading2",t[t.ATXHeading3=11]="ATXHeading3",t[t.ATXHeading4=12]="ATXHeading4",t[t.ATXHeading5=13]="ATXHeading5",t[t.ATXHeading6=14]="ATXHeading6",t[t.SetextHeading1=15]="SetextHeading1",t[t.SetextHeading2=16]="SetextHeading2",t[t.HTMLBlock=17]="HTMLBlock",t[t.LinkReference=18]="LinkReference",t[t.Paragraph=19]="Paragraph",t[t.CommentBlock=20]="CommentBlock",t[t.ProcessingInstructionBlock=21]="ProcessingInstructionBlock",t[t.Escape=22]="Escape",t[t.Entity=23]="Entity",t[t.HardBreak=24]="HardBreak",t[t.Emphasis=25]="Emphasis",t[t.StrongEmphasis=26]="StrongEmphasis",t[t.Link=27]="Link",t[t.Image=28]="Image",t[t.InlineCode=29]="InlineCode",t[t.HTMLTag=30]="HTMLTag",t[t.Comment=31]="Comment",t[t.ProcessingInstruction=32]="ProcessingInstruction",t[t.URL=33]="URL",t[t.HeaderMark=34]="HeaderMark",t[t.QuoteMark=35]="QuoteMark",t[t.ListMark=36]="ListMark",t[t.LinkMark=37]="LinkMark",t[t.EmphasisMark=38]="EmphasisMark",t[t.CodeMark=39]="CodeMark",t[t.CodeText=40]="CodeText",t[t.CodeInfo=41]="CodeInfo",t[t.LinkTitle=42]="LinkTitle",t[t.LinkLabel=43]="LinkLabel"})(f||(f={}));class et{constructor(e,n){this.start=e,this.content=n,this.marks=[],this.parsers=[]}}class tt{constructor(){this.text="",this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let e=this.skipSpace(this.basePos);this.indent=this.countIndent(e,this.pos,this.indent),this.pos=e,this.next=e==this.text.length?-1:this.text.charCodeAt(e)}skipSpace(e){return v(this.text,e)}reset(e){for(this.text=e,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(e){this.basePos=e,this.baseIndent=this.countIndent(e,this.pos,this.indent)}moveBaseColumn(e){this.baseIndent=e,this.basePos=this.findColumn(e)}addMarker(e){this.markers.push(e)}countIndent(e,n=0,r=0){for(let s=n;s<e;s++)r+=this.text.charCodeAt(s)==9?4-r%4:1;return r}findColumn(e){let n=0;for(let r=0;n<this.text.length&&r<e;n++)r+=this.text.charCodeAt(n)==9?4-r%4:1;return n}scrub(){if(!this.baseIndent)return this.text;let e="";for(let n=0;n<this.basePos;n++)e+=" ";return e+this.text.slice(this.basePos)}}function re(t,e,n){if(n.pos==n.text.length||t!=e.block&&n.indent>=e.stack[n.depth+1].value+n.baseIndent)return!0;if(n.indent>=n.baseIndent+4)return!1;let r=(t.type==f.OrderedList?K:W)(n,e,!1);return r>0&&(t.type!=f.BulletList||V(n,e,!1)<0)&&n.text.charCodeAt(n.pos+r-1)==t.value}const me={[f.Blockquote](t,e,n){return n.next!=62?!1:(n.markers.push(m(f.QuoteMark,e.lineStart+n.pos,e.lineStart+n.pos+1)),n.moveBase(n.pos+(x(n.text.charCodeAt(n.pos+1))?2:1)),t.end=e.lineStart+n.text.length,!0)},[f.ListItem](t,e,n){return n.indent<n.baseIndent+t.value&&n.next>-1?!1:(n.moveBaseColumn(n.baseIndent+t.value),!0)},[f.OrderedList]:re,[f.BulletList]:re,[f.Document](){return!0}};function x(t){return t==32||t==9||t==10||t==13}function v(t,e=0){for(;e<t.length&&x(t.charCodeAt(e));)e++;return e}function se(t,e,n){for(;e>n&&x(t.charCodeAt(e-1));)e--;return e}function ge(t){if(t.next!=96&&t.next!=126)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;if(e<t.pos+3)return-1;if(t.next==96){for(let n=e;n<t.text.length;n++)if(t.text.charCodeAt(n)==96)return-1}return e}function ke(t){return t.next!=62?-1:t.text.charCodeAt(t.pos+1)==32?2:1}function V(t,e,n){if(t.next!=42&&t.next!=45&&t.next!=95)return-1;let r=1;for(let s=t.pos+1;s<t.text.length;s++){let i=t.text.charCodeAt(s);if(i==t.next)r++;else if(!x(i))return-1}return n&&t.next==45&&Le(t)>-1&&t.depth==e.stack.length||r<3?-1:1}function be(t,e){for(let n=t.stack.length-1;n>=0;n--)if(t.stack[n].type==e)return!0;return!1}function W(t,e,n){return(t.next==45||t.next==43||t.next==42)&&(t.pos==t.text.length-1||x(t.text.charCodeAt(t.pos+1)))&&(!n||be(e,f.BulletList)||t.skipSpace(t.pos+2)<t.text.length)?1:-1}function K(t,e,n){let r=t.pos,s=t.next;for(;s>=48&&s<=57;){r++;if(r==t.text.length)return-1;s=t.text.charCodeAt(r)}return r==t.pos||r>t.pos+9||s!=46&&s!=41||r<t.text.length-1&&!x(t.text.charCodeAt(r+1))||n&&!be(e,f.OrderedList)&&(t.skipSpace(r+1)==t.text.length||r>t.pos+1||t.next!=49)?-1:r+1-t.pos}function we(t){if(t.next!=35)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==35;)e++;if(e<t.text.length&&t.text.charCodeAt(e)!=32)return-1;let n=e-t.pos;return n>6?-1:n}function Le(t){if(t.next!=45&&t.next!=61||t.indent>=t.baseIndent+4)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;let n=e;for(;e<t.text.length&&x(t.text.charCodeAt(e));)e++;return e==t.text.length?n:-1}const $=/^[ \t]*$/,Se=/-->/,xe=/\?>/,Y=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,Se],[/^\s*<\?/,xe],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,$],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,$]];function Ce(t,e,n){if(t.next!=60)return-1;let r=t.text.slice(t.pos);for(let s=0,i=Y.length-(n?1:0);s<i;s++)if(Y[s][0].test(r))return s;return-1}function ie(t,e){let n=t.countIndent(e,t.pos,t.indent),r=t.countIndent(t.skipSpace(e),e,n);return r>=n+5?n+1:r}function A(t,e,n){let r=t.length-1;r>=0&&t[r].to==e&&t[r].type==f.CodeText?t[r].to=n:t.push(m(f.CodeText,e,n))}const z={LinkReference:void 0,IndentedCode(t,e){let n=e.baseIndent+4;if(e.indent<n)return!1;let r=e.findColumn(n),s=t.lineStart+r,i=t.lineStart+e.text.length,o=[],a=[];for(A(o,s,i);t.nextLine()&&e.depth>=t.stack.length;)if(e.pos==e.text.length){A(a,t.lineStart-1,t.lineStart);for(let l of e.markers)a.push(l)}else{if(e.indent<n)break;{if(a.length){for(let h of a)h.type==f.CodeText?A(o,h.from,h.to):o.push(h);a=[]}A(o,t.lineStart-1,t.lineStart);for(let h of e.markers)o.push(h);i=t.lineStart+e.text.length;let l=t.lineStart+e.findColumn(e.baseIndent+4);l<i&&A(o,l,i)}}return a.length&&(a=a.filter(l=>l.type!=f.CodeText),a.length&&(e.markers=a.concat(e.markers))),t.addNode(t.buffer.writeElements(o,-s).finish(f.CodeBlock,i-s),s),!0},FencedCode(t,e){let n=ge(e);if(n<0)return!1;let r=t.lineStart+e.pos,s=e.next,i=n-e.pos,o=e.skipSpace(n),a=se(e.text,e.text.length,o),l=[m(f.CodeMark,r,r+i)];o<a&&l.push(m(f.CodeInfo,t.lineStart+o,t.lineStart+a));for(let h=!0;t.nextLine()&&e.depth>=t.stack.length;h=!1){let u=e.pos;if(e.indent-e.baseIndent<4)for(;u<e.text.length&&e.text.charCodeAt(u)==s;)u++;if(u-e.pos>=i&&e.skipSpace(u)==e.text.length){for(let p of e.markers)l.push(p);l.push(m(f.CodeMark,t.lineStart+e.pos,t.lineStart+u)),t.nextLine();break}else{h||A(l,t.lineStart-1,t.lineStart);for(let b of e.markers)l.push(b);let p=t.lineStart+e.basePos,d=t.lineStart+e.text.length;p<d&&A(l,p,d)}}return t.addNode(t.buffer.writeElements(l,-r).finish(f.FencedCode,t.prevLineEnd()-r),r),!0},Blockquote(t,e){let n=ke(e);return n<0?!1:(t.startContext(f.Blockquote,e.pos),t.addNode(f.QuoteMark,t.lineStart+e.pos,t.lineStart+e.pos+1),e.moveBase(e.pos+n),null)},HorizontalRule(t,e){if(V(e,t,!1)<0)return!1;let n=t.lineStart+e.pos;return t.nextLine(),t.addNode(f.HorizontalRule,n),!0},BulletList(t,e){let n=W(e,t,!1);if(n<0)return!1;t.block.type!=f.BulletList&&t.startContext(f.BulletList,e.basePos,e.next);let r=ie(e,e.pos+1);return t.startContext(f.ListItem,e.basePos,r-e.baseIndent),t.addNode(f.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+n),e.moveBaseColumn(r),null},OrderedList(t,e){let n=K(e,t,!1);if(n<0)return!1;t.block.type!=f.OrderedList&&t.startContext(f.OrderedList,e.basePos,e.text.charCodeAt(e.pos+n-1));let r=ie(e,e.pos+n);return t.startContext(f.ListItem,e.basePos,r-e.baseIndent),t.addNode(f.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+n),e.moveBaseColumn(r),null},ATXHeading(t,e){let n=we(e);if(n<0)return!1;let r=e.pos,s=t.lineStart+r,i=se(e.text,e.text.length,r),o=i;for(;o>r&&e.text.charCodeAt(o-1)==e.next;)o--;(o==i||o==r||!x(e.text.charCodeAt(o-1)))&&(o=e.text.length);let a=t.buffer.write(f.HeaderMark,0,n).writeElements(t.parser.parseInline(e.text.slice(r+n+1,o),s+n+1),-s);o<e.text.length&&a.write(f.HeaderMark,o-r,i-r);let l=a.finish(f.ATXHeading1-1+n,e.text.length-r);return t.nextLine(),t.addNode(l,s),!0},HTMLBlock(t,e){let n=Ce(e,t,!1);if(n<0)return!1;let r=t.lineStart+e.pos,s=Y[n][1],i=[],o=s!=$;for(;!s.test(e.text)&&t.nextLine();){if(e.depth<t.stack.length){o=!1;break}for(let h of e.markers)i.push(h)}o&&t.nextLine();let a=s==Se?f.CommentBlock:s==xe?f.ProcessingInstructionBlock:f.HTMLBlock,l=t.prevLineEnd();return t.addNode(t.buffer.writeElements(i,-r).finish(a,l-r),r),!0},SetextHeading:void 0};class nt{constructor(e){this.stage=0,this.elts=[],this.pos=0,this.start=e.start,this.advance(e.content)}nextLine(e,n,r){if(this.stage==-1)return!1;let s=r.content+`
`+n.scrub(),i=this.advance(s);return i>-1&&i<s.length?this.complete(e,r,i):!1}finish(e,n){return(this.stage==2||this.stage==3)&&v(n.content,this.pos)==n.content.length?this.complete(e,n,n.content.length):!1}complete(e,n,r){return e.addLeafElement(n,m(f.LinkReference,this.start,this.start+r,this.elts)),!0}nextStage(e){return e?(this.pos=e.to-this.start,this.elts.push(e),this.stage++,!0):(e===!1&&(this.stage=-1),!1)}advance(e){for(;;){if(this.stage==-1)return-1;if(this.stage==0){if(!this.nextStage(Pe(e,this.pos,this.start,!0)))return-1;if(e.charCodeAt(this.pos)!=58)return this.stage=-1;this.elts.push(m(f.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else if(this.stage==1){if(!this.nextStage(He(e,v(e,this.pos),this.start)))return-1}else if(this.stage==2){let n=v(e,this.pos),r=0;if(n>this.pos){let s=ve(e,n,this.start);if(s){let i=_(e,s.to-this.start);i>0&&(this.nextStage(s),r=i)}}return r||(r=_(e,this.pos)),r>0&&r<e.length?r:-1}else return _(e,this.pos)}}}function _(t,e){for(;e<t.length;e++){let n=t.charCodeAt(e);if(n==10)break;if(!x(n))return-1}return e}class rt{nextLine(e,n,r){let s=n.depth<e.stack.length?-1:Le(n),i=n.next;if(s<0)return!1;let o=m(f.HeaderMark,e.lineStart+n.pos,e.lineStart+s);return e.nextLine(),e.addLeafElement(r,m(i==61?f.SetextHeading1:f.SetextHeading2,r.start,e.prevLineEnd(),[...e.parser.parseInline(r.content,r.start),o])),!0}finish(){return!1}}const st={LinkReference(t,e){return e.content.charCodeAt(0)==91?new nt(e):null},SetextHeading(){return new rt}},it=[(t,e)=>we(e)>=0,(t,e)=>ge(e)>=0,(t,e)=>ke(e)>=0,(t,e)=>W(e,t,!0)>=0,(t,e)=>K(e,t,!0)>=0,(t,e)=>V(e,t,!0)>=0,(t,e)=>Ce(e,t,!0)>=0],ot={text:"",end:0};class at{constructor(e,n,r,s){this.parser=e,this.input=n,this.ranges=s,this.line=new tt,this.atEnd=!1,this.dontInject=new Set,this.stoppedAt=null,this.rangeI=0,this.to=s[s.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=s[0].from,this.block=q.create(f.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=r.length?new ut(r,n):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(this.stoppedAt!=null&&this.absoluteLineStart>this.stoppedAt)return this.finish();let{line:e}=this;for(;;){for(;e.depth<this.stack.length;)this.finishContext();for(let r of e.markers)this.addNode(r.type,r.from,r.to);if(e.pos<e.text.length)break;if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(e.basePos))return null;e:for(;;){for(let r of this.parser.blockParsers)if(r){let s=r(this,e);if(s!=!1){if(s==!0)return null;e.forward();continue e}}break}let n=new et(this.lineStart+e.pos,e.text.slice(e.pos));for(let r of this.parser.leafBlockParsers)if(r){let s=r(this,n);s&&n.parsers.push(s)}e:for(;this.nextLine()&&e.pos!=e.text.length;){if(e.indent<e.baseIndent+4){for(let r of this.parser.endLeafBlock)if(r(this,e,n))break e}for(let r of n.parsers)if(r.nextLine(this,e,n))return null;n.content+=`
`+e.scrub();for(let r of e.markers)n.marks.push(r)}return this.finishLeaf(n),null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}reuseFragment(e){if(!this.fragments.moveTo(this.absoluteLineStart+e,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1;let n=this.fragments.takeNodes(this);if(!n)return!1;let r=n,s=this.absoluteLineStart+n;for(let i=1;i<this.ranges.length;i++){let o=this.ranges[i-1].to,a=this.ranges[i].from;o>=this.lineStart&&a<s&&(r-=a-o)}return this.lineStart+=r,this.absoluteLineStart+=n,this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++,this.readLine()):(this.atEnd=!0,this.readLine()),!0}get depth(){return this.stack.length}parentType(e=this.depth-1){return this.parser.nodeSet.types[this.stack[e].type]}nextLine(){return this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++,this.absoluteLineStart=Math.max(this.absoluteLineStart,this.ranges[this.rangeI].from)}scanLine(e){let n=ot;if(n.end=e,e>=this.to)n.text="";else if(n.text=this.lineChunkAt(e),n.end+=n.text.length,this.ranges.length>1){let r=this.absoluteLineStart,s=this.rangeI;for(;this.ranges[s].to<n.end;){s++;let i=this.ranges[s].from,o=this.lineChunkAt(i);n.end=i+o.length,n.text=n.text.slice(0,this.ranges[s-1].to-r)+o,r=n.end-n.text.length}}return n}readLine(){let{line:e}=this,{text:n,end:r}=this.scanLine(this.absoluteLineStart);for(this.absoluteLineEnd=r,e.reset(n);e.depth<this.stack.length;e.depth++){let s=this.stack[e.depth],i=this.parser.skipContextMarkup[s.type];if(!i)throw new Error("Unhandled block context "+f[s.type]);if(!i(s,this,e))break;e.forward()}}lineChunkAt(e){let n=this.input.chunk(e),r;if(this.input.lineChunks)r=n==`
`?"":n;else{let s=n.indexOf(`
`);r=s<0?n:n.slice(0,s)}return e+r.length>this.to?r.slice(0,this.to-e):r}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(e,n,r=0){this.block=q.create(e,r,this.lineStart+n,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(e,n,r=0){this.startContext(this.parser.getNodeType(e),n,r)}addNode(e,n,r){typeof e=="number"&&(e=new B(this.parser.nodeSet.types[e],I,I,(r??this.prevLineEnd())-n)),this.block.addChild(e,n-this.block.from)}addElement(e){this.block.addChild(e.toTree(this.parser.nodeSet),e.from-this.block.from)}addLeafElement(e,n){this.addNode(this.buffer.writeElements(Z(n.children,e.marks),-n.from).finish(n.type,n.to-n.from),n.from)}finishContext(){let e=this.stack.pop(),n=this.stack[this.stack.length-1];n.addChild(e.toTree(this.parser.nodeSet),e.from-n.from),this.block=n}finish(){for(;this.stack.length>1;)this.finishContext();return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(e){return this.ranges.length>1?ye(this.ranges,0,e.topNode,this.ranges[0].from,this.dontInject):e}finishLeaf(e){for(let r of e.parsers)if(r.finish(this,e))return;let n=Z(this.parser.parseInline(e.content,e.start),e.marks);this.addNode(this.buffer.writeElements(n,-e.start).finish(f.Paragraph,e.content.length),e.start)}elt(e,n,r,s){return typeof e=="string"?m(this.parser.getNodeType(e),n,r,s):new Ie(e,n)}get buffer(){return new Be(this.parser.nodeSet)}}function ye(t,e,n,r,s){if(s.has(n.tree))return n.tree;let i=t[e].to,o=[],a=[],l=n.from+r;function h(u,p){for(;p?u>=i:u>i;){let d=t[e+1].from-i;r+=d,u+=d,e++,i=t[e].to}}for(let u=n.firstChild;u;u=u.nextSibling){h(u.from+r,!0);let p=u.from+r,d;u.to+r>i?(d=ye(t,e,u,r,s),h(u.to+r,!1)):d=u.toTree(),o.push(d),a.push(p-l)}return h(n.to+r,!1),new B(n.type,o,a,n.to+r-l,n.tree?n.tree.propValues:void 0)}class F extends Xe{constructor(e,n,r,s,i,o,a,l,h){super(),this.nodeSet=e,this.blockParsers=n,this.leafBlockParsers=r,this.blockNames=s,this.endLeafBlock=i,this.skipContextMarkup=o,this.inlineParsers=a,this.inlineNames=l,this.wrappers=h,this.nodeTypes=Object.create(null);for(let u of e.types)this.nodeTypes[u.name]=u.id}createParse(e,n,r){let s=new at(this,e,n,r);for(let i of this.wrappers)s=i(s,e,n,r);return s}configure(e){let n=Q(e);if(!n)return this;let{nodeSet:r,skipContextMarkup:s}=this,i=this.blockParsers.slice(),o=this.leafBlockParsers.slice(),a=this.blockNames.slice(),l=this.inlineParsers.slice(),h=this.inlineNames.slice(),u=this.endLeafBlock.slice(),p=this.wrappers;if(M(n.defineNodes)){s=Object.assign({},s);let d=r.types.slice(),b;for(let L of n.defineNodes){let{name:g,block:k,composite:w,style:S}=typeof L=="string"?{name:L}:L;if(d.some(X=>X.name==g))continue;w&&(s[d.length]=(X,De,Fe)=>w(De,Fe,X.value));let y=d.length,ee=w?["Block","BlockContext"]:k?y>=f.ATXHeading1&&y<=f.SetextHeading2?["Block","LeafBlock","Heading"]:["Block","LeafBlock"]:void 0;d.push(D.define({id:y,name:g,props:ee&&[[T.group,ee]]})),S&&(b||(b={}),Array.isArray(S)||S instanceof _e?b[g]=S:Object.assign(b,S))}r=new pe(d),b&&(r=r.extend(de(b)))}if(M(n.props)&&(r=r.extend(...n.props)),M(n.remove))for(let d of n.remove){let b=this.blockNames.indexOf(d),L=this.inlineNames.indexOf(d);b>-1&&(i[b]=o[b]=void 0),L>-1&&(l[L]=void 0)}if(M(n.parseBlock))for(let d of n.parseBlock){let b=a.indexOf(d.name);if(b>-1)i[b]=d.parse,o[b]=d.leaf;else{let L=d.before?R(a,d.before):d.after?R(a,d.after)+1:a.length-1;i.splice(L,0,d.parse),o.splice(L,0,d.leaf),a.splice(L,0,d.name)}d.endLeaf&&u.push(d.endLeaf)}if(M(n.parseInline))for(let d of n.parseInline){let b=h.indexOf(d.name);if(b>-1)l[b]=d.parse;else{let L=d.before?R(h,d.before):d.after?R(h,d.after)+1:h.length-1;l.splice(L,0,d.parse),h.splice(L,0,d.name)}}return n.wrap&&(p=p.concat(n.wrap)),new F(r,i,o,a,u,s,l,h,p)}getNodeType(e){let n=this.nodeTypes[e];if(n==null)throw new RangeError(`Unknown node type '${e}'`);return n}parseInline(e,n){let r=new ht(this,e,n);e:for(let s=n;s<r.end;){let i=r.char(s);for(let o of this.inlineParsers)if(o){let a=o(r,i,s);if(a>=0){s=a;continue e}}s++}return r.resolveMarkers(0)}}function M(t){return t!=null&&t.length>0}function Q(t){if(!Array.isArray(t))return t;if(t.length==0)return null;let e=Q(t[0]);if(t.length==1)return e;let n=Q(t.slice(1));if(!n||!e)return e||n;let r=(o,a)=>(o||I).concat(a||I),s=e.wrap,i=n.wrap;return{props:r(e.props,n.props),defineNodes:r(e.defineNodes,n.defineNodes),parseBlock:r(e.parseBlock,n.parseBlock),parseInline:r(e.parseInline,n.parseInline),remove:r(e.remove,n.remove),wrap:s?i?(o,a,l,h)=>s(i(o,a,l,h),a,l,h):s:i}}function R(t,e){let n=t.indexOf(e);if(n<0)throw new RangeError(`Position specified relative to unknown parser ${e}`);return n}let Ae=[D.none];for(let t=1,e;e=f[t];t++)Ae[t]=D.define({id:t,name:e,props:t>=f.Escape?[]:[[T.group,t in me?["Block","BlockContext"]:["Block","LeafBlock"]]]});const I=[];class Be{constructor(e){this.nodeSet=e,this.content=[],this.nodes=[]}write(e,n,r,s=0){return this.content.push(e,n,r,4+s*4),this}writeElements(e,n=0){for(let r of e)r.writeTo(this,n);return this}finish(e,n){return B.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:e,length:n})}}class N{constructor(e,n,r,s=I){this.type=e,this.from=n,this.to=r,this.children=s}writeTo(e,n){let r=e.content.length;e.writeElements(this.children,n),e.content.push(this.type,this.from+n,this.to+n,e.content.length+4-r)}toTree(e){return new Be(e).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}}class Ie{constructor(e,n){this.tree=e,this.from=n}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return I}writeTo(e,n){e.nodes.push(this.tree),e.content.push(e.nodes.length-1,this.from+n,this.to+n,-1)}toTree(){return this.tree}}function m(t,e,n,r){return new N(t,e,n,r)}const Me={resolve:"Emphasis",mark:"EmphasisMark"},Ee={resolve:"Emphasis",mark:"EmphasisMark"},E={},oe={};class C{constructor(e,n,r,s){this.type=e,this.from=n,this.to=r,this.side=s}}const ae="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";let O=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;try{O=new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]","u")}catch{}const G={Escape(t,e,n){if(e!=92||n==t.end-1)return-1;let r=t.char(n+1);for(let s=0;s<ae.length;s++)if(ae.charCodeAt(s)==r)return t.append(m(f.Escape,n,n+2));return-1},Entity(t,e,n){if(e!=38)return-1;let r=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(t.slice(n+1,n+31));return r?t.append(m(f.Entity,n,n+1+r[0].length)):-1},InlineCode(t,e,n){if(e!=96||n&&t.char(n-1)==96)return-1;let r=n+1;for(;r<t.end&&t.char(r)==96;)r++;let s=r-n,i=0;for(;r<t.end;r++)if(t.char(r)==96){if(i++,i==s&&t.char(r+1)!=96)return t.append(m(f.InlineCode,n,r+1,[m(f.CodeMark,n,n+s),m(f.CodeMark,r+1-s,r+1)]))}else i=0;return-1},HTMLTag(t,e,n){if(e!=60||n==t.end-1)return-1;let r=t.slice(n+1,t.end),s=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(r);if(s)return t.append(m(f.URL,n,n+1+s[0].length));let i=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r);if(i)return t.append(m(f.Comment,n,n+1+i[0].length));let o=/^\?[^]*?\?>/.exec(r);if(o)return t.append(m(f.ProcessingInstruction,n,n+1+o[0].length));let a=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(r);return a?t.append(m(f.HTMLTag,n,n+1+a[0].length)):-1},Emphasis(t,e,n){if(e!=95&&e!=42)return-1;let r=n+1;for(;t.char(r)==e;)r++;let s=t.slice(n-1,n),i=t.slice(r,r+1),o=O.test(s),a=O.test(i),l=/\s|^$/.test(s),h=/\s|^$/.test(i),u=!h&&(!a||l||o),p=!l&&(!o||h||a),d=u&&(e==42||!p||o),b=p&&(e==42||!u||a);return t.append(new C(e==95?Me:Ee,n,r,(d?1:0)|(b?2:0)))},HardBreak(t,e,n){if(e==92&&t.char(n+1)==10)return t.append(m(f.HardBreak,n,n+2));if(e==32){let r=n+1;for(;t.char(r)==32;)r++;if(t.char(r)==10&&r>=n+2)return t.append(m(f.HardBreak,n,r+1))}return-1},Link(t,e,n){return e==91?t.append(new C(E,n,n+1,1)):-1},Image(t,e,n){return e==33&&t.char(n+1)==91?t.append(new C(oe,n,n+2,1)):-1},LinkEnd(t,e,n){if(e!=93)return-1;for(let r=t.parts.length-1;r>=0;r--){let s=t.parts[r];if(s instanceof C&&(s.type==E||s.type==oe)){if(!s.side||t.skipSpace(s.to)==n&&!/[(\[]/.test(t.slice(n+1,n+2)))return t.parts[r]=null,-1;let i=t.takeContent(r),o=t.parts[r]=lt(t,i,s.type==E?f.Link:f.Image,s.from,n+1);if(s.type==E)for(let a=0;a<r;a++){let l=t.parts[a];l instanceof C&&l.type==E&&(l.side=0)}return o.to}}return-1}};function lt(t,e,n,r,s){let{text:i}=t,o=t.char(s),a=s;if(e.unshift(m(f.LinkMark,r,r+(n==f.Image?2:1))),e.push(m(f.LinkMark,s-1,s)),o==40){let l=t.skipSpace(s+1),h=He(i,l-t.offset,t.offset),u;h&&(l=t.skipSpace(h.to),u=ve(i,l-t.offset,t.offset),u&&(l=t.skipSpace(u.to))),t.char(l)==41&&(e.push(m(f.LinkMark,s,s+1)),a=l+1,h&&e.push(h),u&&e.push(u),e.push(m(f.LinkMark,l,a)))}else if(o==91){let l=Pe(i,s-t.offset,t.offset,!1);l&&(e.push(l),a=l.to)}return m(n,r,a,e)}function He(t,e,n){if(t.charCodeAt(e)==60){for(let s=e+1;s<t.length;s++){let i=t.charCodeAt(s);if(i==62)return m(f.URL,e+n,s+1+n);if(i==60||i==10)return!1}return null}else{let s=0,i=e;for(let o=!1;i<t.length;i++){let a=t.charCodeAt(i);if(x(a))break;if(o)o=!1;else if(a==40)s++;else if(a==41){if(!s)break;s--}else a==92&&(o=!0)}return i>e?m(f.URL,e+n,i+n):i==t.length?null:!1}}function ve(t,e,n){let r=t.charCodeAt(e);if(r!=39&&r!=34&&r!=40)return!1;let s=r==40?41:r;for(let i=e+1,o=!1;i<t.length;i++){let a=t.charCodeAt(i);if(o)o=!1;else{if(a==s)return m(f.LinkTitle,e+n,i+1+n);a==92&&(o=!0)}}return null}function Pe(t,e,n,r){for(let s=!1,i=e+1,o=Math.min(t.length,i+999);i<o;i++){let a=t.charCodeAt(i);if(s)s=!1;else{if(a==93)return r?!1:m(f.LinkLabel,e+n,i+1+n);if(r&&!x(a)&&(r=!1),a==91)return!1;a==92&&(s=!0)}}return null}class ht{constructor(e,n,r){this.parser=e,this.text=n,this.offset=r,this.parts=[]}char(e){return e>=this.end?-1:this.text.charCodeAt(e-this.offset)}get end(){return this.offset+this.text.length}slice(e,n){return this.text.slice(e-this.offset,n-this.offset)}append(e){return this.parts.push(e),e.to}addDelimiter(e,n,r,s,i){return this.append(new C(e,n,r,(s?1:0)|(i?2:0)))}addElement(e){return this.append(e)}resolveMarkers(e){for(let r=e;r<this.parts.length;r++){let s=this.parts[r];if(!(s instanceof C&&s.type.resolve&&s.side&2))continue;let i=s.type==Me||s.type==Ee,o=s.to-s.from,a,l=r-1;for(;l>=e;l--){let g=this.parts[l];if(g instanceof C&&g.side&1&&g.type==s.type&&!(i&&(s.side&1||g.side&2)&&(g.to-g.from+o)%3==0&&((g.to-g.from)%3||o%3))){a=g;break}}if(!a)continue;let h=s.type.resolve,u=[],p=a.from,d=s.to;if(i){let g=Math.min(2,a.to-a.from,o);p=a.to-g,d=s.from+g,h=g==1?"Emphasis":"StrongEmphasis"}a.type.mark&&u.push(this.elt(a.type.mark,p,a.to));for(let g=l+1;g<r;g++)this.parts[g]instanceof N&&u.push(this.parts[g]),this.parts[g]=null;s.type.mark&&u.push(this.elt(s.type.mark,s.from,d));let b=this.elt(h,p,d,u);this.parts[l]=i&&a.from!=p?new C(a.type,a.from,p,a.side):null,(this.parts[r]=i&&s.to!=d?new C(s.type,d,s.to,s.side):null)?this.parts.splice(r,0,b):this.parts[r]=b}let n=[];for(let r=e;r<this.parts.length;r++){let s=this.parts[r];s instanceof N&&n.push(s)}return n}findOpeningDelimiter(e){for(let n=this.parts.length-1;n>=0;n--){let r=this.parts[n];if(r instanceof C&&r.type==e)return n}return null}takeContent(e){let n=this.resolveMarkers(e);return this.parts.length=e,n}skipSpace(e){return v(this.text,e-this.offset)+this.offset}elt(e,n,r,s){return typeof e=="string"?m(this.parser.getNodeType(e),n,r,s):new Ie(e,n)}}function Z(t,e){if(!e.length)return t;if(!t.length)return e;let n=t.slice(),r=0;for(let s of e){for(;r<n.length&&n[r].to<s.to;)r++;if(r<n.length&&n[r].from<s.from){let i=n[r];i instanceof N&&(n[r]=new N(i.type,i.from,i.to,Z(i.children,[s])))}else n.splice(r++,0,s)}return n}const ft=[f.CodeBlock,f.ListItem,f.OrderedList,f.BulletList];class ut{constructor(e,n){this.fragments=e,this.input=n,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,e.length&&(this.fragment=e[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(e,n){for(;this.fragment&&this.fragment.to<=e;)this.nextFragment();if(!this.fragment||this.fragment.from>(e?e-1:0))return!1;if(this.fragmentEnd<0){let i=this.fragment.to;for(;i>0&&this.input.read(i-1,i)!=`
`;)i--;this.fragmentEnd=i?i-1:0}let r=this.cursor;r||(r=this.cursor=this.fragment.tree.cursor(),r.firstChild());let s=e+this.fragment.offset;for(;r.to<=s;)if(!r.parent())return!1;for(;;){if(r.from>=s)return this.fragment.from<=n;if(!r.childAfter(s))return!1}}matches(e){let n=this.cursor.tree;return n&&n.prop(T.contextHash)==e}takeNodes(e){let n=this.cursor,r=this.fragment.offset,s=this.fragmentEnd-(this.fragment.openEnd?1:0),i=e.absoluteLineStart,o=i,a=e.block.children.length,l=o,h=a;for(;;){if(n.to-r>s){if(n.type.isAnonymous&&n.firstChild())continue;break}if(e.dontInject.add(n.tree),e.addNode(n.tree,n.from-r),n.type.is("Block")&&(ft.indexOf(n.type.id)<0?(o=n.to-r,a=e.block.children.length):(o=l,a=h,l=n.to-r,h=e.block.children.length)),!n.nextSibling())break}for(;e.block.children.length>a;)e.block.children.pop(),e.block.positions.pop();return o-i}}const dt=de({"Blockquote/...":c.quote,HorizontalRule:c.contentSeparator,"ATXHeading1/... SetextHeading1/...":c.heading1,"ATXHeading2/... SetextHeading2/...":c.heading2,"ATXHeading3/...":c.heading3,"ATXHeading4/...":c.heading4,"ATXHeading5/...":c.heading5,"ATXHeading6/...":c.heading6,"Comment CommentBlock":c.comment,Escape:c.escape,Entity:c.character,"Emphasis/...":c.emphasis,"StrongEmphasis/...":c.strong,"Link/... Image/...":c.link,"OrderedList/... BulletList/...":c.list,"BlockQuote/...":c.quote,"InlineCode CodeText":c.monospace,URL:c.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":c.processingInstruction,"CodeInfo LinkLabel":c.labelName,LinkTitle:c.string,Paragraph:c.content}),pt=new F(new pe(Ae).extend(dt),Object.keys(z).map(t=>z[t]),Object.keys(z).map(t=>st[t]),Object.keys(z),it,me,Object.keys(G).map(t=>G[t]),Object.keys(G),[]);function ct(t,e,n){let r=[];for(let s=t.firstChild,i=e;;s=s.nextSibling){let o=s?s.from:n;if(o>i&&r.push({from:i,to:o}),!s)break;i=s.to}return r}function mt(t){let{codeParser:e,htmlParser:n}=t;return{wrap:Ge((s,i)=>{let o=s.type.id;if(e&&(o==f.CodeBlock||o==f.FencedCode)){let a="";if(o==f.FencedCode){let h=s.node.getChild(f.CodeInfo);h&&(a=i.read(h.from,h.to))}let l=e(a);if(l)return{parser:l,overlay:h=>h.type.id==f.CodeText}}else if(n&&(o==f.HTMLBlock||o==f.HTMLTag))return{parser:n,overlay:ct(s.node,s.from,s.to)};return null})}}const gt={resolve:"Strikethrough",mark:"StrikethroughMark"},kt={defineNodes:[{name:"Strikethrough",style:{"Strikethrough/...":c.strikethrough}},{name:"StrikethroughMark",style:c.processingInstruction}],parseInline:[{name:"Strikethrough",parse(t,e,n){if(e!=126||t.char(n+1)!=126||t.char(n+2)==126)return-1;let r=t.slice(n-1,n),s=t.slice(n+2,n+3),i=/\s|^$/.test(r),o=/\s|^$/.test(s),a=O.test(r),l=O.test(s);return t.addDelimiter(gt,n,n+2,!o&&(!l||i||a),!i&&(!a||o||l))},after:"Emphasis"}]};function P(t,e,n=0,r,s=0){let i=0,o=!0,a=-1,l=-1,h=!1,u=()=>{r.push(t.elt("TableCell",s+a,s+l,t.parser.parseInline(e.slice(a,l),s+a)))};for(let p=n;p<e.length;p++){let d=e.charCodeAt(p);d==124&&!h?((!o||a>-1)&&i++,o=!1,r&&(a>-1&&u(),r.push(t.elt("TableDelimiter",p+s,p+s+1))),a=l=-1):(h||d!=32&&d!=9)&&(a<0&&(a=p),l=p+1),h=!h&&d==92}return a>-1&&(i++,r&&u()),i}function le(t,e){for(let n=e;n<t.length;n++){let r=t.charCodeAt(n);if(r==124)return!0;r==92&&n++}return!1}const Te=/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;class he{constructor(){this.rows=null}nextLine(e,n,r){if(this.rows==null){this.rows=!1;let s;if((n.next==45||n.next==58||n.next==124)&&Te.test(s=n.text.slice(n.pos))){let i=[];P(e,r.content,0,i,r.start)==P(e,s,n.pos)&&(this.rows=[e.elt("TableHeader",r.start,r.start+r.content.length,i),e.elt("TableDelimiter",e.lineStart+n.pos,e.lineStart+n.text.length)])}}else if(this.rows){let s=[];P(e,n.text,n.pos,s,e.lineStart),this.rows.push(e.elt("TableRow",e.lineStart+n.pos,e.lineStart+n.text.length,s))}return!1}finish(e,n){return this.rows?(e.addLeafElement(n,e.elt("Table",n.start,n.start+n.content.length,this.rows)),!0):!1}}const bt={defineNodes:[{name:"Table",block:!0},{name:"TableHeader",style:{"TableHeader/...":c.heading}},"TableRow",{name:"TableCell",style:c.content},{name:"TableDelimiter",style:c.processingInstruction}],parseBlock:[{name:"Table",leaf(t,e){return le(e.content,0)?new he:null},endLeaf(t,e,n){if(n.parsers.some(s=>s instanceof he)||!le(e.text,e.basePos))return!1;let r=t.scanLine(t.absoluteLineEnd+1).text;return Te.test(r)&&P(t,e.text,e.basePos)==P(t,r,e.basePos)},before:"SetextHeading"}]};class wt{nextLine(){return!1}finish(e,n){return e.addLeafElement(n,e.elt("Task",n.start,n.start+n.content.length,[e.elt("TaskMarker",n.start,n.start+3),...e.parser.parseInline(n.content.slice(3),n.start+3)])),!0}}const Lt={defineNodes:[{name:"Task",block:!0,style:c.list},{name:"TaskMarker",style:c.atom}],parseBlock:[{name:"TaskList",leaf(t,e){return/^\[[ xX]\]/.test(e.content)&&t.parentType().name=="ListItem"?new wt:null},after:"SetextHeading"}]},St=[bt,Lt,kt];function Ne(t,e,n){return(r,s,i)=>{if(s!=t||r.char(i+1)==t)return-1;let o=[r.elt(n,i,i+1)];for(let a=i+1;a<r.end;a++){let l=r.char(a);if(l==t)return r.addElement(r.elt(e,i,a+1,o.concat(r.elt(n,a,a+1))));if(l==92&&o.push(r.elt("Escape",a,a+++2)),x(l))break}return-1}}const xt={defineNodes:[{name:"Superscript",style:c.special(c.content)},{name:"SuperscriptMark",style:c.processingInstruction}],parseInline:[{name:"Superscript",parse:Ne(94,"Superscript","SuperscriptMark")}]},Ct={defineNodes:[{name:"Subscript",style:c.special(c.content)},{name:"SubscriptMark",style:c.processingInstruction}],parseInline:[{name:"Subscript",parse:Ne(126,"Subscript","SubscriptMark")}]},yt={defineNodes:[{name:"Emoji",style:c.character}],parseInline:[{name:"Emoji",parse(t,e,n){let r;return e!=58||!(r=/^[a-zA-Z_0-9]+:/.exec(t.slice(n+1,t.end)))?-1:t.addElement(t.elt("Emoji",n,n+1+r[0].length))}}]},Oe=Qe({block:{open:"<!--",close:"-->"}}),ze=pt.configure({props:[Ve.add(t=>{if(!(!t.is("Block")||t.is("Document")))return(e,n)=>({from:n.doc.lineAt(e.from).to,to:e.to})}),We.add({Document:()=>null}),Ke.add({Document:Oe})]});function J(t){return new Ye(Oe,t,[],"markdown")}const At=J(ze),Bt=ze.configure([St,Ct,xt,yt]),Re=J(Bt);function It(t,e){return n=>{if(n&&t){let r=null;if(n=/\S*/.exec(n)[0],typeof t=="function"?r=t(n):r=ne.matchLanguageName(t,n,!0),r instanceof ne)return r.support?r.support.language.parser:Ze.getSkippingParser(r.load());if(r)return r.parser}return e?e.parser:null}}class j{constructor(e,n,r,s,i,o,a){this.node=e,this.from=n,this.to=r,this.spaceBefore=s,this.spaceAfter=i,this.type=o,this.item=a}blank(e,n=!0){let r=this.spaceBefore+(this.node.name=="Blockquote"?">":"");if(e!=null){for(;r.length<e;)r+=" ";return r}else{for(let s=this.to-this.from-r.length-this.spaceAfter.length;s>0;s--)r+=" ";return r+(n?this.spaceAfter:"")}}marker(e,n){let r=this.node.name=="OrderedList"?String(+qe(this.item,e)[2]+n):"";return this.spaceBefore+r+this.type+this.spaceAfter}}function je(t,e){let n=[];for(let s=t;s&&s.name!="Document";s=s.parent)(s.name=="ListItem"||s.name=="Blockquote"||s.name=="FencedCode")&&n.push(s);let r=[];for(let s=n.length-1;s>=0;s--){let i=n[s],o,a=e.lineAt(i.from),l=i.from-a.from;if(i.name=="FencedCode")r.push(new j(i,l,l,"","","",null));else if(i.name=="Blockquote"&&(o=/^[ \t]*>( ?)/.exec(a.text.slice(l))))r.push(new j(i,l,l+o[0].length,"",o[1],">",null));else if(i.name=="ListItem"&&i.parent.name=="OrderedList"&&(o=/^([ \t]*)\d+([.)])([ \t]*)/.exec(a.text.slice(l)))){let h=o[3],u=o[0].length;h.length>=4&&(h=h.slice(0,h.length-4),u-=4),r.push(new j(i.parent,l,l+u,o[1],h,o[2],i))}else if(i.name=="ListItem"&&i.parent.name=="BulletList"&&(o=/^([ \t]*)([-+*])([ \t]{1,4}\[[ xX]\])?([ \t]+)/.exec(a.text.slice(l)))){let h=o[4],u=o[0].length;h.length>4&&(h=h.slice(0,h.length-4),u-=4);let p=o[2];o[3]&&(p+=o[3].replace(/[xX]/," ")),r.push(new j(i.parent,l,l+u,o[1],h,p,i))}}return r}function qe(t,e){return/^(\s*)(\d+)(?=[.)])/.exec(e.sliceString(t.from,t.from+10))}function U(t,e,n,r=0){for(let s=-1,i=t;;){if(i.name=="ListItem"){let a=qe(i,e),l=+a[2];if(s>=0){if(l!=s+1)return;n.push({from:i.from+a[1].length,to:i.from+a[0].length,insert:String(s+2+r)})}s=l}let o=i.nextSibling;if(!o)break;i=o}}const Mt=({state:t,dispatch:e})=>{let n=ce(t),{doc:r}=t,s=null,i=t.changeByRange(o=>{if(!o.empty||!Re.isActiveAt(t,o.from))return s={range:o};let a=o.from,l=r.lineAt(a),h=je(n.resolveInner(a,-1),r);for(;h.length&&h[h.length-1].from>a-l.from;)h.pop();if(!h.length)return s={range:o};let u=h[h.length-1];if(u.to-u.spaceAfter.length>a-l.from)return s={range:o};let p=a>=u.to-u.spaceAfter.length&&!/\S/.test(l.text.slice(u.to));if(u.item&&p)if(u.node.firstChild.to>=a||l.from>0&&!/[^\s>]/.test(r.lineAt(l.from-1).text)){let k=h.length>1?h[h.length-2]:null,w,S="";k&&k.item?(w=l.from+k.from,S=k.marker(r,1)):w=l.from+(k?k.to:0);let y=[{from:w,to:a,insert:S}];return u.node.name=="OrderedList"&&U(u.item,r,y,-2),k&&k.node.name=="OrderedList"&&U(k.item,r,y),{range:H.cursor(w+S.length),changes:y}}else{let k="";for(let w=0,S=h.length-2;w<=S;w++)k+=h[w].blank(w<S?h[w+1].from-k.length:null,w<S);return k+=t.lineBreak,{range:H.cursor(a+k.length),changes:{from:l.from,insert:k}}}if(u.node.name=="Blockquote"&&p&&l.from){let k=r.lineAt(l.from-1),w=/>\s*$/.exec(k.text);if(w&&w.index==u.from){let S=t.changes([{from:k.from+w.index,to:k.to},{from:l.from+u.from,to:l.to}]);return{range:o.map(S),changes:S}}}let d=[];u.node.name=="OrderedList"&&U(u.item,r,d);let b=u.item&&u.item.from<l.from,L="";if(!b||/^[\s\d.)\-+*>]*/.exec(l.text)[0].length>=u.to)for(let k=0,w=h.length-1;k<=w;k++)L+=k==w&&!b?h[k].marker(r,1):h[k].blank(k<w?h[k+1].from-L.length:null);let g=a;for(;g>l.from&&/\s/.test(l.text.charAt(g-l.from-1));)g--;return L=t.lineBreak+L,d.push({from:g,to:a,insert:L}),{range:H.cursor(g+L.length),changes:d}});return s?!1:(e(t.update(i,{scrollIntoView:!0,userEvent:"input"})),!0)};function fe(t){return t.name=="QuoteMark"||t.name=="ListMark"}function Et(t,e){let n=t.resolveInner(e,-1),r=e;fe(n)&&(r=n.from,n=n.parent);for(let s;s=n.childBefore(r);)if(fe(s))r=s.from;else if(s.name=="OrderedList"||s.name=="BulletList")n=s.lastChild,r=n.to;else break;return n}const Ht=({state:t,dispatch:e})=>{let n=ce(t),r=null,s=t.changeByRange(i=>{let o=i.from,{doc:a}=t;if(i.empty&&Re.isActiveAt(t,i.from)){let l=a.lineAt(o),h=je(Et(n,o),a);if(h.length){let u=h[h.length-1],p=u.to-u.spaceAfter.length+(u.spaceAfter?1:0);if(o-l.from>p&&!/\S/.test(l.text.slice(p,o-l.from)))return{range:H.cursor(l.from+p),changes:{from:l.from+p,to:o}};if(o-l.from==p){let d=l.from+u.from;if(u.item&&u.node.from<u.item.from&&/\S/.test(l.text.slice(u.from,u.to)))return{range:i,changes:{from:d,to:l.from+u.to,insert:u.blank(u.to-u.from)}};if(d<o)return{range:H.cursor(d),changes:{from:d,to:o}}}}}return r={range:i}});return r?!1:(e(t.update(s,{scrollIntoView:!0,userEvent:"delete"})),!0)},vt=[{key:"Enter",run:Mt},{key:"Backspace",run:Ht}],ue=Je({matchClosingTags:!1});function Pt(t={}){let{codeLanguages:e,defaultCodeLanguage:n,addKeymap:r=!0,base:{parser:s}=At}=t;if(!(s instanceof F))throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");let i=t.extensions?[t.extensions]:[],o=[ue.support],a;n instanceof te?(o.push(n.support),a=n.language):n&&(a=n);let l=e||a?It(e,a):void 0;return i.push(mt({codeParser:l,htmlParser:ue.language.parser})),r&&o.push(Ue.high($e.of(vt))),new te(J(s.configure(i)),o)}const Tt=`# Markdown: Basics

<ul id="ProjectSubmenu">
    <li><a href="/projects/markdown/" title="Markdown Project Page">Main</a></li>
    <li><a class="selected" title="Markdown Basics">Basics</a></li>
    <li><a href="/projects/markdown/syntax" title="Markdown Syntax Documentation">Syntax</a></li>
    <li><a href="/projects/markdown/license" title="Pricing and License Information">License</a></li>
    <li><a href="/projects/markdown/dingus" title="Online Markdown Web Form">Dingus</a></li>
</ul>

## Getting the Gist of Markdown's Formatting Syntax

This page offers a brief overview of what it's like to use Markdown.
The [syntax page] [s] provides complete, detailed documentation for
every feature, but Markdown should be very easy to pick up simply by
looking at a few examples of it in action. The examples on this page
are written in a before/after style, showing example syntax and the
HTML output produced by Markdown.

It's also helpful to simply try Markdown out; the [Dingus] [d] is a
web application that allows you type your own Markdown-formatted text
and translate it to XHTML.

**Note:** This document is itself written using Markdown; you
can [see the source for it by adding '.text' to the URL] [src].

[s]: /projects/markdown/syntax 'Markdown Syntax'
[d]: /projects/markdown/dingus 'Markdown Dingus'
[src]: /projects/markdown/basics.text

## Paragraphs, Headers, Blockquotes

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like
a blank line -- a line containing nothing but spaces or tabs is
considered blank.) Normal paragraphs should not be indented with
spaces or tabs.

Markdown offers two styles of headers: _Setext_ and _atx_.
Setext-style headers for \`<h1>\` and \`<h2>\` are created by
"underlining" with equal signs (\`=\`) and hyphens (\`-\`), respectively.
To create an atx-style header, you put 1-6 hash marks (\`#\`) at the
beginning of the line -- the number of hashes equals the resulting
HTML header level.

Blockquotes are indicated using email-style '\`>\`' angle brackets.

Markdown:

# A First Level Header

## A Second Level Header

Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.

### Header 3

> This is a blockquote.
>
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote

Output:

<h1>A First Level Header</h1>

<h2>A Second Level Header</h2>

<p>Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.</p>

<p>The quick brown fox jumped over the lazy
dog's back.</p>

<h3>Header 3</h3>

<blockquote>
    <p>This is a blockquote.</p>

    <p>This is the second paragraph in the blockquote.</p>

    <h2>This is an H2 in a blockquote</h2>

</blockquote>

### Phrase Emphasis

Markdown uses asterisks and underscores to indicate spans of emphasis.

Markdown:

Some of these words _are emphasized_.
Some of these words _are emphasized also_.

Use two asterisks for **strong emphasis**.
Or, if you prefer, **use two underscores instead**.

Output:

<p>Some of these words <em>are emphasized</em>.
Some of these words <em>are emphasized also</em>.</p>

<p>Use two asterisks for <strong>strong emphasis</strong>.
Or, if you prefer, <strong>use two underscores instead</strong>.</p>

## Lists

Unordered (bulleted) lists use asterisks, pluses, and hyphens (\`*\`,
\`+\`, and \`-\`) as list markers. These three markers are
interchangeable; this:

- Candy.
- Gum.
- Booze.

this:

- Candy.
- Gum.
- Booze.

and this:

- Candy.
- Gum.
- Booze.

all produce the same output:

    <ul>
    <li>Candy.</li>
    <li>Gum.</li>
    <li>Booze.</li>
    </ul>

Ordered (numbered) lists use regular numbers, followed by periods, as
list markers:

1.  Red
2.  Green
3.  Blue

Output:

<ol>
<li>Red</li>
<li>Green</li>
<li>Blue</li>
</ol>

If you put blank lines between items, you'll get \`<p>\` tags for the
list item text. You can create multi-paragraph list items by indenting
the paragraphs by 4 spaces or 1 tab:

- A list item.

  With multiple paragraphs.

- Another item in the list.

Output:

<ul>
<li><p>A list item.</p>
<p>With multiple paragraphs.</p></li>
<li><p>Another item in the list.</p></li>
</ul>

### Links

Markdown supports two styles for creating links: _inline_ and
_reference_. With both styles, you use square brackets to delimit the
text you want to turn into a link.

Inline-style links use parentheses immediately after the link text.
For example:

    This is an [example link](http://example.com/).

Output:

    <p>This is an <a href="http://example.com/">
    example link</a>.</p>

Optionally, you may include a title attribute in the parentheses:

    This is an [example link](http://example.com/ "With a Title").

Output:

    <p>This is an <a href="http://example.com/" title="With a Title">
    example link</a>.</p>

Reference-style links allow you to refer to your links by names, which
you define elsewhere in your document:

    I get 10 times more traffic from [Google][1] than from
    [Yahoo][2] or [MSN][3].

    [1]: http://google.com/        "Google"
    [2]: http://search.yahoo.com/  "Yahoo Search"
    [3]: http://search.msn.com/    "MSN Search"

Output:

    <p>I get 10 times more traffic from <a href="http://google.com/"
    title="Google">Google</a> than from <a href="http://search.yahoo.com/"
    title="Yahoo Search">Yahoo</a> or <a href="http://search.msn.com/"
    title="MSN Search">MSN</a>.</p>

The title attribute is optional. Link names may contain letters,
numbers and spaces, but are _not_ case sensitive:

    I start my morning with a cup of coffee and
    [The New York Times][NY Times].

    [ny times]: http://www.nytimes.com/

Output:

    <p>I start my morning with a cup of coffee and
    <a href="http://www.nytimes.com/">The New York Times</a>.</p>

### Images

Image syntax is very much like link syntax.

Inline (titles are optional):

    ![alt text](/path/to/img.jpg "Title")

Reference-style:

    ![alt text][id]

    [id]: /path/to/img.jpg "Title"

Both of the above examples produce the same output:

    <img src="/path/to/img.jpg" alt="alt text" title="Title" />

### Code

In a regular paragraph, you can create code span by wrapping text in
backtick quotes. Any ampersands (\`&\`) and angle brackets (\`<\` or
\`>\`) will automatically be translated into HTML entities. This makes
it easy to use Markdown to write about HTML example code:

    I strongly recommend against using any \`<blink>\` tags.

    I wish SmartyPants used named entities like \`&mdash;\`
    instead of decimal-encoded entities like \`&#8212;\`.

Output:

    <p>I strongly recommend against using any
    <code>&lt;blink&gt;</code> tags.</p>

    <p>I wish SmartyPants used named entities like
    <code>&amp;mdash;</code> instead of decimal-encoded
    entities like <code>&amp;#8212;</code>.</p>

To specify an entire block of pre-formatted code, indent every line of
the block by 4 spaces or 1 tab. Just like with code spans, \`&\`, \`<\`,
and \`>\` characters will be escaped automatically.

Markdown:

    If you want your page to validate under XHTML 1.0 Strict,
    you've got to put paragraph tags in your blockquotes:

        <blockquote>
            <p>For example.</p>
        </blockquote>

Output:

    <p>If you want your page to validate under XHTML 1.0 Strict,
    you've got to put paragraph tags in your blockquotes:</p>

    <pre><code>&lt;blockquote&gt;
        &lt;p&gt;For example.&lt;/p&gt;
    &lt;/blockquote&gt;
    </code></pre>

## Fenced code blocks (and syntax highlighting)

\`\`\`javascript
for (var i = 0; i < items.length; i++) {
  console.log(items[i], i) // log them
}
\`\`\`
`,Dt={language:Pt,code:Tt};export{Dt as default};
