import{N as X,h as H,a as ye,t as c,j as Ae,P as nt,k as rt,l as B,p as st,L as le,m as it,n as ot,q as $,C as at,v as lt,w as ht,x as ft,y as ut,z as he,A as dt,B as v,D as R,e as Ie,i as pt,F as ct,G as mt}from"./index-DpoEONWk.js";import{a as gt,h as kt}from"./index-BS-TlbDU.js";import"./index-CCOKqeRu.js";import"./index-CVNF85wD.js";import"./index-BkX0AMOV.js";import"./index-DYwQiRMP.js";class _{static create(e,n,r,s,i){let o=s+(s<<8)+e+(n<<4)|0;return new _(e,n,r,o,i,[],[])}constructor(e,n,r,s,i,o,a){this.type=e,this.value=n,this.from=r,this.hash=s,this.end=i,this.children=o,this.positions=a,this.hashProp=[[H.contextHash,s]]}addChild(e,n){e.prop(H.contextHash)!=this.hash&&(e=new B(e.type,e.children,e.positions,e.length,this.hashProp)),this.children.push(e),this.positions.push(n)}toTree(e,n=this.end){let r=this.children.length-1;return r>=0&&(n=Math.max(n,this.positions[r]+this.children[r].length+this.from)),new B(e.types[this.type],this.children,this.positions,n-this.from).balance({makeTree:(s,i,o)=>new B(X.none,s,i,o,this.hashProp)})}}var u;(function(t){t[t.Document=1]="Document",t[t.CodeBlock=2]="CodeBlock",t[t.FencedCode=3]="FencedCode",t[t.Blockquote=4]="Blockquote",t[t.HorizontalRule=5]="HorizontalRule",t[t.BulletList=6]="BulletList",t[t.OrderedList=7]="OrderedList",t[t.ListItem=8]="ListItem",t[t.ATXHeading1=9]="ATXHeading1",t[t.ATXHeading2=10]="ATXHeading2",t[t.ATXHeading3=11]="ATXHeading3",t[t.ATXHeading4=12]="ATXHeading4",t[t.ATXHeading5=13]="ATXHeading5",t[t.ATXHeading6=14]="ATXHeading6",t[t.SetextHeading1=15]="SetextHeading1",t[t.SetextHeading2=16]="SetextHeading2",t[t.HTMLBlock=17]="HTMLBlock",t[t.LinkReference=18]="LinkReference",t[t.Paragraph=19]="Paragraph",t[t.CommentBlock=20]="CommentBlock",t[t.ProcessingInstructionBlock=21]="ProcessingInstructionBlock",t[t.Escape=22]="Escape",t[t.Entity=23]="Entity",t[t.HardBreak=24]="HardBreak",t[t.Emphasis=25]="Emphasis",t[t.StrongEmphasis=26]="StrongEmphasis",t[t.Link=27]="Link",t[t.Image=28]="Image",t[t.InlineCode=29]="InlineCode",t[t.HTMLTag=30]="HTMLTag",t[t.Comment=31]="Comment",t[t.ProcessingInstruction=32]="ProcessingInstruction",t[t.Autolink=33]="Autolink",t[t.HeaderMark=34]="HeaderMark",t[t.QuoteMark=35]="QuoteMark",t[t.ListMark=36]="ListMark",t[t.LinkMark=37]="LinkMark",t[t.EmphasisMark=38]="EmphasisMark",t[t.CodeMark=39]="CodeMark",t[t.CodeText=40]="CodeText",t[t.CodeInfo=41]="CodeInfo",t[t.LinkTitle=42]="LinkTitle",t[t.LinkLabel=43]="LinkLabel",t[t.URL=44]="URL"})(u||(u={}));class bt{constructor(e,n){this.start=e,this.content=n,this.marks=[],this.parsers=[]}}class wt{constructor(){this.text="",this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let e=this.skipSpace(this.basePos);this.indent=this.countIndent(e,this.pos,this.indent),this.pos=e,this.next=e==this.text.length?-1:this.text.charCodeAt(e)}skipSpace(e){return N(this.text,e)}reset(e){for(this.text=e,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(e){this.basePos=e,this.baseIndent=this.countIndent(e,this.pos,this.indent)}moveBaseColumn(e){this.baseIndent=e,this.basePos=this.findColumn(e)}addMarker(e){this.markers.push(e)}countIndent(e,n=0,r=0){for(let s=n;s<e;s++)r+=this.text.charCodeAt(s)==9?4-r%4:1;return r}findColumn(e){let n=0;for(let r=0;n<this.text.length&&r<e;n++)r+=this.text.charCodeAt(n)==9?4-r%4:1;return n}scrub(){if(!this.baseIndent)return this.text;let e="";for(let n=0;n<this.basePos;n++)e+=" ";return e+this.text.slice(this.basePos)}}function fe(t,e,n){if(n.pos==n.text.length||t!=e.block&&n.indent>=e.stack[n.depth+1].value+n.baseIndent)return!0;if(n.indent>=n.baseIndent+4)return!1;let r=(t.type==u.OrderedList?ie:se)(n,e,!1);return r>0&&(t.type!=u.BulletList||re(n,e,!1)<0)&&n.text.charCodeAt(n.pos+r-1)==t.value}const Be={[u.Blockquote](t,e,n){return n.next!=62?!1:(n.markers.push(g(u.QuoteMark,e.lineStart+n.pos,e.lineStart+n.pos+1)),n.moveBase(n.pos+(C(n.text.charCodeAt(n.pos+1))?2:1)),t.end=e.lineStart+n.text.length,!0)},[u.ListItem](t,e,n){return n.indent<n.baseIndent+t.value&&n.next>-1?!1:(n.moveBaseColumn(n.baseIndent+t.value),!0)},[u.OrderedList]:fe,[u.BulletList]:fe,[u.Document](){return!0}};function C(t){return t==32||t==9||t==10||t==13}function N(t,e=0){for(;e<t.length&&C(t.charCodeAt(e));)e++;return e}function ue(t,e,n){for(;e>n&&C(t.charCodeAt(e-1));)e--;return e}function Me(t){if(t.next!=96&&t.next!=126)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;if(e<t.pos+3)return-1;if(t.next==96){for(let n=e;n<t.text.length;n++)if(t.text.charCodeAt(n)==96)return-1}return e}function Ee(t){return t.next!=62?-1:t.text.charCodeAt(t.pos+1)==32?2:1}function re(t,e,n){if(t.next!=42&&t.next!=45&&t.next!=95)return-1;let r=1;for(let s=t.pos+1;s<t.text.length;s++){let i=t.text.charCodeAt(s);if(i==t.next)r++;else if(!C(i))return-1}return n&&t.next==45&&Pe(t)>-1&&t.depth==e.stack.length||r<3?-1:1}function ve(t,e){for(let n=t.stack.length-1;n>=0;n--)if(t.stack[n].type==e)return!0;return!1}function se(t,e,n){return(t.next==45||t.next==43||t.next==42)&&(t.pos==t.text.length-1||C(t.text.charCodeAt(t.pos+1)))&&(!n||ve(e,u.BulletList)||t.skipSpace(t.pos+2)<t.text.length)?1:-1}function ie(t,e,n){let r=t.pos,s=t.next;for(;s>=48&&s<=57;){r++;if(r==t.text.length)return-1;s=t.text.charCodeAt(r)}return r==t.pos||r>t.pos+9||s!=46&&s!=41||r<t.text.length-1&&!C(t.text.charCodeAt(r+1))||n&&!ve(e,u.OrderedList)&&(t.skipSpace(r+1)==t.text.length||r>t.pos+1||t.next!=49)?-1:r+1-t.pos}function He(t){if(t.next!=35)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==35;)e++;if(e<t.text.length&&t.text.charCodeAt(e)!=32)return-1;let n=e-t.pos;return n>6?-1:n}function Pe(t){if(t.next!=45&&t.next!=61||t.indent>=t.baseIndent+4)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;let n=e;for(;e<t.text.length&&C(t.text.charCodeAt(e));)e++;return e==t.text.length?n:-1}const W=/^[ \t]*$/,Te=/-->/,Ne=/\?>/,V=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,Te],[/^\s*<\?/,Ne],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,W],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,W]];function Oe(t,e,n){if(t.next!=60)return-1;let r=t.text.slice(t.pos);for(let s=0,i=V.length-(n?1:0);s<i;s++)if(V[s][0].test(r))return s;return-1}function de(t,e){let n=t.countIndent(e,t.pos,t.indent),r=t.countIndent(t.skipSpace(e),e,n);return r>=n+5?n+1:r}function I(t,e,n){let r=t.length-1;r>=0&&t[r].to==e&&t[r].type==u.CodeText?t[r].to=n:t.push(g(u.CodeText,e,n))}const D={LinkReference:void 0,IndentedCode(t,e){let n=e.baseIndent+4;if(e.indent<n)return!1;let r=e.findColumn(n),s=t.lineStart+r,i=t.lineStart+e.text.length,o=[],a=[];for(I(o,s,i);t.nextLine()&&e.depth>=t.stack.length;)if(e.pos==e.text.length){I(a,t.lineStart-1,t.lineStart);for(let l of e.markers)a.push(l)}else{if(e.indent<n)break;{if(a.length){for(let f of a)f.type==u.CodeText?I(o,f.from,f.to):o.push(f);a=[]}I(o,t.lineStart-1,t.lineStart);for(let f of e.markers)o.push(f);i=t.lineStart+e.text.length;let l=t.lineStart+e.findColumn(e.baseIndent+4);l<i&&I(o,l,i)}}return a.length&&(a=a.filter(l=>l.type!=u.CodeText),a.length&&(e.markers=a.concat(e.markers))),t.addNode(t.buffer.writeElements(o,-s).finish(u.CodeBlock,i-s),s),!0},FencedCode(t,e){let n=Me(e);if(n<0)return!1;let r=t.lineStart+e.pos,s=e.next,i=n-e.pos,o=e.skipSpace(n),a=ue(e.text,e.text.length,o),l=[g(u.CodeMark,r,r+i)];o<a&&l.push(g(u.CodeInfo,t.lineStart+o,t.lineStart+a));for(let f=!0;t.nextLine()&&e.depth>=t.stack.length;f=!1){let h=e.pos;if(e.indent-e.baseIndent<4)for(;h<e.text.length&&e.text.charCodeAt(h)==s;)h++;if(h-e.pos>=i&&e.skipSpace(h)==e.text.length){for(let p of e.markers)l.push(p);l.push(g(u.CodeMark,t.lineStart+e.pos,t.lineStart+h)),t.nextLine();break}else{f||I(l,t.lineStart-1,t.lineStart);for(let m of e.markers)l.push(m);let p=t.lineStart+e.basePos,d=t.lineStart+e.text.length;p<d&&I(l,p,d)}}return t.addNode(t.buffer.writeElements(l,-r).finish(u.FencedCode,t.prevLineEnd()-r),r),!0},Blockquote(t,e){let n=Ee(e);return n<0?!1:(t.startContext(u.Blockquote,e.pos),t.addNode(u.QuoteMark,t.lineStart+e.pos,t.lineStart+e.pos+1),e.moveBase(e.pos+n),null)},HorizontalRule(t,e){if(re(e,t,!1)<0)return!1;let n=t.lineStart+e.pos;return t.nextLine(),t.addNode(u.HorizontalRule,n),!0},BulletList(t,e){let n=se(e,t,!1);if(n<0)return!1;t.block.type!=u.BulletList&&t.startContext(u.BulletList,e.basePos,e.next);let r=de(e,e.pos+1);return t.startContext(u.ListItem,e.basePos,r-e.baseIndent),t.addNode(u.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+n),e.moveBaseColumn(r),null},OrderedList(t,e){let n=ie(e,t,!1);if(n<0)return!1;t.block.type!=u.OrderedList&&t.startContext(u.OrderedList,e.basePos,e.text.charCodeAt(e.pos+n-1));let r=de(e,e.pos+n);return t.startContext(u.ListItem,e.basePos,r-e.baseIndent),t.addNode(u.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+n),e.moveBaseColumn(r),null},ATXHeading(t,e){let n=He(e);if(n<0)return!1;let r=e.pos,s=t.lineStart+r,i=ue(e.text,e.text.length,r),o=i;for(;o>r&&e.text.charCodeAt(o-1)==e.next;)o--;(o==i||o==r||!C(e.text.charCodeAt(o-1)))&&(o=e.text.length);let a=t.buffer.write(u.HeaderMark,0,n).writeElements(t.parser.parseInline(e.text.slice(r+n+1,o),s+n+1),-s);o<e.text.length&&a.write(u.HeaderMark,o-r,i-r);let l=a.finish(u.ATXHeading1-1+n,e.text.length-r);return t.nextLine(),t.addNode(l,s),!0},HTMLBlock(t,e){let n=Oe(e,t,!1);if(n<0)return!1;let r=t.lineStart+e.pos,s=V[n][1],i=[],o=s!=W;for(;!s.test(e.text)&&t.nextLine();){if(e.depth<t.stack.length){o=!1;break}for(let f of e.markers)i.push(f)}o&&t.nextLine();let a=s==Te?u.CommentBlock:s==Ne?u.ProcessingInstructionBlock:u.HTMLBlock,l=t.prevLineEnd();return t.addNode(t.buffer.writeElements(i,-r).finish(a,l-r),r),!0},SetextHeading:void 0};class Lt{constructor(e){this.stage=0,this.elts=[],this.pos=0,this.start=e.start,this.advance(e.content)}nextLine(e,n,r){if(this.stage==-1)return!1;let s=r.content+`
`+n.scrub(),i=this.advance(s);return i>-1&&i<s.length?this.complete(e,r,i):!1}finish(e,n){return(this.stage==2||this.stage==3)&&N(n.content,this.pos)==n.content.length?this.complete(e,n,n.content.length):!1}complete(e,n,r){return e.addLeafElement(n,g(u.LinkReference,this.start,this.start+r,this.elts)),!0}nextStage(e){return e?(this.pos=e.to-this.start,this.elts.push(e),this.stage++,!0):(e===!1&&(this.stage=-1),!1)}advance(e){for(;;){if(this.stage==-1)return-1;if(this.stage==0){if(!this.nextStage($e(e,this.pos,this.start,!0)))return-1;if(e.charCodeAt(this.pos)!=58)return this.stage=-1;this.elts.push(g(u.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else if(this.stage==1){if(!this.nextStage(_e(e,N(e,this.pos),this.start)))return-1}else if(this.stage==2){let n=N(e,this.pos),r=0;if(n>this.pos){let s=Xe(e,n,this.start);if(s){let i=G(e,s.to-this.start);i>0&&(this.nextStage(s),r=i)}}return r||(r=G(e,this.pos)),r>0&&r<e.length?r:-1}else return G(e,this.pos)}}}function G(t,e){for(;e<t.length;e++){let n=t.charCodeAt(e);if(n==10)break;if(!C(n))return-1}return e}class St{nextLine(e,n,r){let s=n.depth<e.stack.length?-1:Pe(n),i=n.next;if(s<0)return!1;let o=g(u.HeaderMark,e.lineStart+n.pos,e.lineStart+s);return e.nextLine(),e.addLeafElement(r,g(i==61?u.SetextHeading1:u.SetextHeading2,r.start,e.prevLineEnd(),[...e.parser.parseInline(r.content,r.start),o])),!0}finish(){return!1}}const xt={LinkReference(t,e){return e.content.charCodeAt(0)==91?new Lt(e):null},SetextHeading(){return new St}},Ct=[(t,e)=>He(e)>=0,(t,e)=>Me(e)>=0,(t,e)=>Ee(e)>=0,(t,e)=>se(e,t,!0)>=0,(t,e)=>ie(e,t,!0)>=0,(t,e)=>re(e,t,!0)>=0,(t,e)=>Oe(e,t,!0)>=0],yt={text:"",end:0};class At{constructor(e,n,r,s){this.parser=e,this.input=n,this.ranges=s,this.line=new wt,this.atEnd=!1,this.reusePlaceholders=new Map,this.stoppedAt=null,this.rangeI=0,this.to=s[s.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=s[0].from,this.block=_.create(u.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=r.length?new Et(r,n):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(this.stoppedAt!=null&&this.absoluteLineStart>this.stoppedAt)return this.finish();let{line:e}=this;for(;;){for(let r=0;;){let s=e.depth<this.stack.length?this.stack[this.stack.length-1]:null;for(;r<e.markers.length&&(!s||e.markers[r].from<s.end);){let i=e.markers[r++];this.addNode(i.type,i.from,i.to)}if(!s)break;this.finishContext()}if(e.pos<e.text.length)break;if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(e.basePos))return null;e:for(;;){for(let r of this.parser.blockParsers)if(r){let s=r(this,e);if(s!=!1){if(s==!0)return null;e.forward();continue e}}break}let n=new bt(this.lineStart+e.pos,e.text.slice(e.pos));for(let r of this.parser.leafBlockParsers)if(r){let s=r(this,n);s&&n.parsers.push(s)}e:for(;this.nextLine()&&e.pos!=e.text.length;){if(e.indent<e.baseIndent+4){for(let r of this.parser.endLeafBlock)if(r(this,e,n))break e}for(let r of n.parsers)if(r.nextLine(this,e,n))return null;n.content+=`
`+e.scrub();for(let r of e.markers)n.marks.push(r)}return this.finishLeaf(n),null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}reuseFragment(e){if(!this.fragments.moveTo(this.absoluteLineStart+e,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1;let n=this.fragments.takeNodes(this);return n?(this.absoluteLineStart+=n,this.lineStart=Ue(this.absoluteLineStart,this.ranges),this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++,this.readLine()):(this.atEnd=!0,this.readLine()),!0):!1}get depth(){return this.stack.length}parentType(e=this.depth-1){return this.parser.nodeSet.types[this.stack[e].type]}nextLine(){return this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++,this.absoluteLineStart=Math.max(this.absoluteLineStart,this.ranges[this.rangeI].from)}scanLine(e){let n=yt;if(n.end=e,e>=this.to)n.text="";else if(n.text=this.lineChunkAt(e),n.end+=n.text.length,this.ranges.length>1){let r=this.absoluteLineStart,s=this.rangeI;for(;this.ranges[s].to<n.end;){s++;let i=this.ranges[s].from,o=this.lineChunkAt(i);n.end=i+o.length,n.text=n.text.slice(0,this.ranges[s-1].to-r)+o,r=n.end-n.text.length}}return n}readLine(){let{line:e}=this,{text:n,end:r}=this.scanLine(this.absoluteLineStart);for(this.absoluteLineEnd=r,e.reset(n);e.depth<this.stack.length;e.depth++){let s=this.stack[e.depth],i=this.parser.skipContextMarkup[s.type];if(!i)throw new Error("Unhandled block context "+u[s.type]);if(!i(s,this,e))break;e.forward()}}lineChunkAt(e){let n=this.input.chunk(e),r;if(this.input.lineChunks)r=n==`
`?"":n;else{let s=n.indexOf(`
`);r=s<0?n:n.slice(0,s)}return e+r.length>this.to?r.slice(0,this.to-e):r}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(e,n,r=0){this.block=_.create(e,r,this.lineStart+n,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(e,n,r=0){this.startContext(this.parser.getNodeType(e),n,r)}addNode(e,n,r){typeof e=="number"&&(e=new B(this.parser.nodeSet.types[e],P,P,(r??this.prevLineEnd())-n)),this.block.addChild(e,n-this.block.from)}addElement(e){this.block.addChild(e.toTree(this.parser.nodeSet),e.from-this.block.from)}addLeafElement(e,n){this.addNode(this.buffer.writeElements(ee(n.children,e.marks),-n.from).finish(n.type,n.to-n.from),n.from)}finishContext(){let e=this.stack.pop(),n=this.stack[this.stack.length-1];n.addChild(e.toTree(this.parser.nodeSet),e.from-n.from),this.block=n}finish(){for(;this.stack.length>1;)this.finishContext();return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(e){return this.ranges.length>1?Re(this.ranges,0,e.topNode,this.ranges[0].from,this.reusePlaceholders):e}finishLeaf(e){for(let r of e.parsers)if(r.finish(this,e))return;let n=ee(this.parser.parseInline(e.content,e.start),e.marks);this.addNode(this.buffer.writeElements(n,-e.start).finish(u.Paragraph,e.content.length),e.start)}elt(e,n,r,s){return typeof e=="string"?g(this.parser.getNodeType(e),n,r,s):new De(e,n)}get buffer(){return new qe(this.parser.nodeSet)}}function Re(t,e,n,r,s){let i=t[e].to,o=[],a=[],l=n.from+r;function f(h,p){for(;p?h>=i:h>i;){let d=t[e+1].from-i;r+=d,h+=d,e++,i=t[e].to}}for(let h=n.firstChild;h;h=h.nextSibling){f(h.from+r,!0);let p=h.from+r,d,m=s.get(h.tree);m?d=m:h.to+r>i?(d=Re(t,e,h,r,s),f(h.to+r,!1)):d=h.toTree(),o.push(d),a.push(p-l)}return f(n.to+r,!1),new B(n.type,o,a,n.to+r-l,n.tree?n.tree.propValues:void 0)}class U extends nt{constructor(e,n,r,s,i,o,a,l,f){super(),this.nodeSet=e,this.blockParsers=n,this.leafBlockParsers=r,this.blockNames=s,this.endLeafBlock=i,this.skipContextMarkup=o,this.inlineParsers=a,this.inlineNames=l,this.wrappers=f,this.nodeTypes=Object.create(null);for(let h of e.types)this.nodeTypes[h.name]=h.id}createParse(e,n,r){let s=new At(this,e,n,r);for(let i of this.wrappers)s=i(s,e,n,r);return s}configure(e){let n=K(e);if(!n)return this;let{nodeSet:r,skipContextMarkup:s}=this,i=this.blockParsers.slice(),o=this.leafBlockParsers.slice(),a=this.blockNames.slice(),l=this.inlineParsers.slice(),f=this.inlineNames.slice(),h=this.endLeafBlock.slice(),p=this.wrappers;if(T(n.defineNodes)){s=Object.assign({},s);let d=r.types.slice(),m;for(let b of n.defineNodes){let{name:k,block:L,composite:S,style:w}=typeof b=="string"?{name:b}:b;if(d.some(A=>A.name==k))continue;S&&(s[d.length]=(A,et,tt)=>S(et,tt,A.value));let y=d.length,M=S?["Block","BlockContext"]:L?y>=u.ATXHeading1&&y<=u.SetextHeading2?["Block","LeafBlock","Heading"]:["Block","LeafBlock"]:void 0;d.push(X.define({id:y,name:k,props:M&&[[H.group,M]]})),w&&(m||(m={}),Array.isArray(w)||w instanceof rt?m[k]=w:Object.assign(m,w))}r=new Ae(d),m&&(r=r.extend(ye(m)))}if(T(n.props)&&(r=r.extend(...n.props)),T(n.remove))for(let d of n.remove){let m=this.blockNames.indexOf(d),b=this.inlineNames.indexOf(d);m>-1&&(i[m]=o[m]=void 0),b>-1&&(l[b]=void 0)}if(T(n.parseBlock))for(let d of n.parseBlock){let m=a.indexOf(d.name);if(m>-1)i[m]=d.parse,o[m]=d.leaf;else{let b=d.before?j(a,d.before):d.after?j(a,d.after)+1:a.length-1;i.splice(b,0,d.parse),o.splice(b,0,d.leaf),a.splice(b,0,d.name)}d.endLeaf&&h.push(d.endLeaf)}if(T(n.parseInline))for(let d of n.parseInline){let m=f.indexOf(d.name);if(m>-1)l[m]=d.parse;else{let b=d.before?j(f,d.before):d.after?j(f,d.after)+1:f.length-1;l.splice(b,0,d.parse),f.splice(b,0,d.name)}}return n.wrap&&(p=p.concat(n.wrap)),new U(r,i,o,a,h,s,l,f,p)}getNodeType(e){let n=this.nodeTypes[e];if(n==null)throw new RangeError(`Unknown node type '${e}'`);return n}parseInline(e,n){let r=new Bt(this,e,n);e:for(let s=n;s<r.end;){let i=r.char(s);for(let o of this.inlineParsers)if(o){let a=o(r,i,s);if(a>=0){s=a;continue e}}s++}return r.resolveMarkers(0)}}function T(t){return t!=null&&t.length>0}function K(t){if(!Array.isArray(t))return t;if(t.length==0)return null;let e=K(t[0]);if(t.length==1)return e;let n=K(t.slice(1));if(!n||!e)return e||n;let r=(o,a)=>(o||P).concat(a||P),s=e.wrap,i=n.wrap;return{props:r(e.props,n.props),defineNodes:r(e.defineNodes,n.defineNodes),parseBlock:r(e.parseBlock,n.parseBlock),parseInline:r(e.parseInline,n.parseInline),remove:r(e.remove,n.remove),wrap:s?i?(o,a,l,f)=>s(i(o,a,l,f),a,l,f):s:i}}function j(t,e){let n=t.indexOf(e);if(n<0)throw new RangeError(`Position specified relative to unknown parser ${e}`);return n}let ze=[X.none];for(let t=1,e;e=u[t];t++)ze[t]=X.define({id:t,name:e,props:t>=u.Escape?[]:[[H.group,t in Be?["Block","BlockContext"]:["Block","LeafBlock"]]],top:e=="Document"});const P=[];class qe{constructor(e){this.nodeSet=e,this.content=[],this.nodes=[]}write(e,n,r,s=0){return this.content.push(e,n,r,4+s*4),this}writeElements(e,n=0){for(let r of e)r.writeTo(this,n);return this}finish(e,n){return B.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:e,length:n})}}class z{constructor(e,n,r,s=P){this.type=e,this.from=n,this.to=r,this.children=s}writeTo(e,n){let r=e.content.length;e.writeElements(this.children,n),e.content.push(this.type,this.from+n,this.to+n,e.content.length+4-r)}toTree(e){return new qe(e).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}}class De{constructor(e,n){this.tree=e,this.from=n}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return P}writeTo(e,n){e.nodes.push(this.tree),e.content.push(e.nodes.length-1,this.from+n,this.to+n,-1)}toTree(){return this.tree}}function g(t,e,n,r){return new z(t,e,n,r)}const je={resolve:"Emphasis",mark:"EmphasisMark"},Fe={resolve:"Emphasis",mark:"EmphasisMark"},E={},J={};class x{constructor(e,n,r,s){this.type=e,this.from=n,this.to=r,this.side=s}}const pe="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";let q=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;try{q=new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]","u")}catch{}const Y={Escape(t,e,n){if(e!=92||n==t.end-1)return-1;let r=t.char(n+1);for(let s=0;s<pe.length;s++)if(pe.charCodeAt(s)==r)return t.append(g(u.Escape,n,n+2));return-1},Entity(t,e,n){if(e!=38)return-1;let r=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(t.slice(n+1,n+31));return r?t.append(g(u.Entity,n,n+1+r[0].length)):-1},InlineCode(t,e,n){if(e!=96||n&&t.char(n-1)==96)return-1;let r=n+1;for(;r<t.end&&t.char(r)==96;)r++;let s=r-n,i=0;for(;r<t.end;r++)if(t.char(r)==96){if(i++,i==s&&t.char(r+1)!=96)return t.append(g(u.InlineCode,n,r+1,[g(u.CodeMark,n,n+s),g(u.CodeMark,r+1-s,r+1)]))}else i=0;return-1},HTMLTag(t,e,n){if(e!=60||n==t.end-1)return-1;let r=t.slice(n+1,t.end),s=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(r);if(s)return t.append(g(u.Autolink,n,n+1+s[0].length,[g(u.LinkMark,n,n+1),g(u.URL,n+1,n+s[0].length),g(u.LinkMark,n+s[0].length,n+1+s[0].length)]));let i=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r);if(i)return t.append(g(u.Comment,n,n+1+i[0].length));let o=/^\?[^]*?\?>/.exec(r);if(o)return t.append(g(u.ProcessingInstruction,n,n+1+o[0].length));let a=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(r);return a?t.append(g(u.HTMLTag,n,n+1+a[0].length)):-1},Emphasis(t,e,n){if(e!=95&&e!=42)return-1;let r=n+1;for(;t.char(r)==e;)r++;let s=t.slice(n-1,n),i=t.slice(r,r+1),o=q.test(s),a=q.test(i),l=/\s|^$/.test(s),f=/\s|^$/.test(i),h=!f&&(!a||l||o),p=!l&&(!o||f||a),d=h&&(e==42||!p||o),m=p&&(e==42||!h||a);return t.append(new x(e==95?je:Fe,n,r,(d?1:0)|(m?2:0)))},HardBreak(t,e,n){if(e==92&&t.char(n+1)==10)return t.append(g(u.HardBreak,n,n+2));if(e==32){let r=n+1;for(;t.char(r)==32;)r++;if(t.char(r)==10&&r>=n+2)return t.append(g(u.HardBreak,n,r+1))}return-1},Link(t,e,n){return e==91?t.append(new x(E,n,n+1,1)):-1},Image(t,e,n){return e==33&&t.char(n+1)==91?t.append(new x(J,n,n+2,1)):-1},LinkEnd(t,e,n){if(e!=93)return-1;for(let r=t.parts.length-1;r>=0;r--){let s=t.parts[r];if(s instanceof x&&(s.type==E||s.type==J)){if(!s.side||t.skipSpace(s.to)==n&&!/[(\[]/.test(t.slice(n+1,n+2)))return t.parts[r]=null,-1;let i=t.takeContent(r),o=t.parts[r]=It(t,i,s.type==E?u.Link:u.Image,s.from,n+1);if(s.type==E)for(let a=0;a<r;a++){let l=t.parts[a];l instanceof x&&l.type==E&&(l.side=0)}return o.to}}return-1}};function It(t,e,n,r,s){let{text:i}=t,o=t.char(s),a=s;if(e.unshift(g(u.LinkMark,r,r+(n==u.Image?2:1))),e.push(g(u.LinkMark,s-1,s)),o==40){let l=t.skipSpace(s+1),f=_e(i,l-t.offset,t.offset),h;f&&(l=t.skipSpace(f.to),l!=f.to&&(h=Xe(i,l-t.offset,t.offset),h&&(l=t.skipSpace(h.to)))),t.char(l)==41&&(e.push(g(u.LinkMark,s,s+1)),a=l+1,f&&e.push(f),h&&e.push(h),e.push(g(u.LinkMark,l,a)))}else if(o==91){let l=$e(i,s-t.offset,t.offset,!1);l&&(e.push(l),a=l.to)}return g(n,r,a,e)}function _e(t,e,n){if(t.charCodeAt(e)==60){for(let s=e+1;s<t.length;s++){let i=t.charCodeAt(s);if(i==62)return g(u.URL,e+n,s+1+n);if(i==60||i==10)return!1}return null}else{let s=0,i=e;for(let o=!1;i<t.length;i++){let a=t.charCodeAt(i);if(C(a))break;if(o)o=!1;else if(a==40)s++;else if(a==41){if(!s)break;s--}else a==92&&(o=!0)}return i>e?g(u.URL,e+n,i+n):i==t.length?null:!1}}function Xe(t,e,n){let r=t.charCodeAt(e);if(r!=39&&r!=34&&r!=40)return!1;let s=r==40?41:r;for(let i=e+1,o=!1;i<t.length;i++){let a=t.charCodeAt(i);if(o)o=!1;else{if(a==s)return g(u.LinkTitle,e+n,i+1+n);a==92&&(o=!0)}}return null}function $e(t,e,n,r){for(let s=!1,i=e+1,o=Math.min(t.length,i+999);i<o;i++){let a=t.charCodeAt(i);if(s)s=!1;else{if(a==93)return r?!1:g(u.LinkLabel,e+n,i+1+n);if(r&&!C(a)&&(r=!1),a==91)return!1;a==92&&(s=!0)}}return null}class Bt{constructor(e,n,r){this.parser=e,this.text=n,this.offset=r,this.parts=[]}char(e){return e>=this.end?-1:this.text.charCodeAt(e-this.offset)}get end(){return this.offset+this.text.length}slice(e,n){return this.text.slice(e-this.offset,n-this.offset)}append(e){return this.parts.push(e),e.to}addDelimiter(e,n,r,s,i){return this.append(new x(e,n,r,(s?1:0)|(i?2:0)))}get hasOpenLink(){for(let e=this.parts.length-1;e>=0;e--){let n=this.parts[e];if(n instanceof x&&(n.type==E||n.type==J))return!0}return!1}addElement(e){return this.append(e)}resolveMarkers(e){for(let r=e;r<this.parts.length;r++){let s=this.parts[r];if(!(s instanceof x&&s.type.resolve&&s.side&2))continue;let i=s.type==je||s.type==Fe,o=s.to-s.from,a,l=r-1;for(;l>=e;l--){let k=this.parts[l];if(k instanceof x&&k.side&1&&k.type==s.type&&!(i&&(s.side&1||k.side&2)&&(k.to-k.from+o)%3==0&&((k.to-k.from)%3||o%3))){a=k;break}}if(!a)continue;let f=s.type.resolve,h=[],p=a.from,d=s.to;if(i){let k=Math.min(2,a.to-a.from,o);p=a.to-k,d=s.from+k,f=k==1?"Emphasis":"StrongEmphasis"}a.type.mark&&h.push(this.elt(a.type.mark,p,a.to));for(let k=l+1;k<r;k++)this.parts[k]instanceof z&&h.push(this.parts[k]),this.parts[k]=null;s.type.mark&&h.push(this.elt(s.type.mark,s.from,d));let m=this.elt(f,p,d,h);this.parts[l]=i&&a.from!=p?new x(a.type,a.from,p,a.side):null,(this.parts[r]=i&&s.to!=d?new x(s.type,d,s.to,s.side):null)?this.parts.splice(r,0,m):this.parts[r]=m}let n=[];for(let r=e;r<this.parts.length;r++){let s=this.parts[r];s instanceof z&&n.push(s)}return n}findOpeningDelimiter(e){for(let n=this.parts.length-1;n>=0;n--){let r=this.parts[n];if(r instanceof x&&r.type==e)return n}return null}takeContent(e){let n=this.resolveMarkers(e);return this.parts.length=e,n}skipSpace(e){return N(this.text,e-this.offset)+this.offset}elt(e,n,r,s){return typeof e=="string"?g(this.parser.getNodeType(e),n,r,s):new De(e,n)}}function ee(t,e){if(!e.length)return t;if(!t.length)return e;let n=t.slice(),r=0;for(let s of e){for(;r<n.length&&n[r].to<s.to;)r++;if(r<n.length&&n[r].from<s.from){let i=n[r];i instanceof z&&(n[r]=new z(i.type,i.from,i.to,ee(i.children,[s])))}else n.splice(r++,0,s)}return n}const Mt=[u.CodeBlock,u.ListItem,u.OrderedList,u.BulletList];class Et{constructor(e,n){this.fragments=e,this.input=n,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,e.length&&(this.fragment=e[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(e,n){for(;this.fragment&&this.fragment.to<=e;)this.nextFragment();if(!this.fragment||this.fragment.from>(e?e-1:0))return!1;if(this.fragmentEnd<0){let i=this.fragment.to;for(;i>0&&this.input.read(i-1,i)!=`
`;)i--;this.fragmentEnd=i?i-1:0}let r=this.cursor;r||(r=this.cursor=this.fragment.tree.cursor(),r.firstChild());let s=e+this.fragment.offset;for(;r.to<=s;)if(!r.parent())return!1;for(;;){if(r.from>=s)return this.fragment.from<=n;if(!r.childAfter(s))return!1}}matches(e){let n=this.cursor.tree;return n&&n.prop(H.contextHash)==e}takeNodes(e){let n=this.cursor,r=this.fragment.offset,s=this.fragmentEnd-(this.fragment.openEnd?1:0),i=e.absoluteLineStart,o=i,a=e.block.children.length,l=o,f=a;for(;;){if(n.to-r>s){if(n.type.isAnonymous&&n.firstChild())continue;break}let h=Ue(n.from-r,e.ranges);if(n.to-r<=e.ranges[e.rangeI].to)e.addNode(n.tree,h);else{let p=new B(e.parser.nodeSet.types[u.Paragraph],[],[],0,e.block.hashProp);e.reusePlaceholders.set(p,n.tree),e.addNode(p,h)}if(n.type.is("Block")&&(Mt.indexOf(n.type.id)<0?(o=n.to-r,a=e.block.children.length):(o=l,a=f,l=n.to-r,f=e.block.children.length)),!n.nextSibling())break}for(;e.block.children.length>a;)e.block.children.pop(),e.block.positions.pop();return o-i}}function Ue(t,e){let n=t;for(let r=1;r<e.length;r++){let s=e[r-1].to,i=e[r].from;s<t&&(n-=i-s)}return n}const vt=ye({"Blockquote/...":c.quote,HorizontalRule:c.contentSeparator,"ATXHeading1/... SetextHeading1/...":c.heading1,"ATXHeading2/... SetextHeading2/...":c.heading2,"ATXHeading3/...":c.heading3,"ATXHeading4/...":c.heading4,"ATXHeading5/...":c.heading5,"ATXHeading6/...":c.heading6,"Comment CommentBlock":c.comment,Escape:c.escape,Entity:c.character,"Emphasis/...":c.emphasis,"StrongEmphasis/...":c.strong,"Link/... Image/...":c.link,"OrderedList/... BulletList/...":c.list,"BlockQuote/...":c.quote,"InlineCode CodeText":c.monospace,"URL Autolink":c.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":c.processingInstruction,"CodeInfo LinkLabel":c.labelName,LinkTitle:c.string,Paragraph:c.content}),Ht=new U(new Ae(ze).extend(vt),Object.keys(D).map(t=>D[t]),Object.keys(D).map(t=>xt[t]),Object.keys(D),Ct,Be,Object.keys(Y).map(t=>Y[t]),Object.keys(Y),[]);function Pt(t,e,n){let r=[];for(let s=t.firstChild,i=e;;s=s.nextSibling){let o=s?s.from:n;if(o>i&&r.push({from:i,to:o}),!s)break;i=s.to}return r}function Tt(t){let{codeParser:e,htmlParser:n}=t;return{wrap:st((s,i)=>{let o=s.type.id;if(e&&(o==u.CodeBlock||o==u.FencedCode)){let a="";if(o==u.FencedCode){let f=s.node.getChild(u.CodeInfo);f&&(a=i.read(f.from,f.to))}let l=e(a);if(l)return{parser:l,overlay:f=>f.type.id==u.CodeText}}else if(n&&(o==u.HTMLBlock||o==u.HTMLTag))return{parser:n,overlay:Pt(s.node,s.from,s.to)};return null})}}const Nt={resolve:"Strikethrough",mark:"StrikethroughMark"},Ot={defineNodes:[{name:"Strikethrough",style:{"Strikethrough/...":c.strikethrough}},{name:"StrikethroughMark",style:c.processingInstruction}],parseInline:[{name:"Strikethrough",parse(t,e,n){if(e!=126||t.char(n+1)!=126||t.char(n+2)==126)return-1;let r=t.slice(n-1,n),s=t.slice(n+2,n+3),i=/\s|^$/.test(r),o=/\s|^$/.test(s),a=q.test(r),l=q.test(s);return t.addDelimiter(Nt,n,n+2,!o&&(!l||i||a),!i&&(!a||o||l))},after:"Emphasis"}]};function O(t,e,n=0,r,s=0){let i=0,o=!0,a=-1,l=-1,f=!1,h=()=>{r.push(t.elt("TableCell",s+a,s+l,t.parser.parseInline(e.slice(a,l),s+a)))};for(let p=n;p<e.length;p++){let d=e.charCodeAt(p);d==124&&!f?((!o||a>-1)&&i++,o=!1,r&&(a>-1&&h(),r.push(t.elt("TableDelimiter",p+s,p+s+1))),a=l=-1):(f||d!=32&&d!=9)&&(a<0&&(a=p),l=p+1),f=!f&&d==92}return a>-1&&(i++,r&&h()),i}function ce(t,e){for(let n=e;n<t.length;n++){let r=t.charCodeAt(n);if(r==124)return!0;r==92&&n++}return!1}const Ge=/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;class me{constructor(){this.rows=null}nextLine(e,n,r){if(this.rows==null){this.rows=!1;let s;if((n.next==45||n.next==58||n.next==124)&&Ge.test(s=n.text.slice(n.pos))){let i=[];O(e,r.content,0,i,r.start)==O(e,s,n.pos)&&(this.rows=[e.elt("TableHeader",r.start,r.start+r.content.length,i),e.elt("TableDelimiter",e.lineStart+n.pos,e.lineStart+n.text.length)])}}else if(this.rows){let s=[];O(e,n.text,n.pos,s,e.lineStart),this.rows.push(e.elt("TableRow",e.lineStart+n.pos,e.lineStart+n.text.length,s))}return!1}finish(e,n){return this.rows?(e.addLeafElement(n,e.elt("Table",n.start,n.start+n.content.length,this.rows)),!0):!1}}const Rt={defineNodes:[{name:"Table",block:!0},{name:"TableHeader",style:{"TableHeader/...":c.heading}},"TableRow",{name:"TableCell",style:c.content},{name:"TableDelimiter",style:c.processingInstruction}],parseBlock:[{name:"Table",leaf(t,e){return ce(e.content,0)?new me:null},endLeaf(t,e,n){if(n.parsers.some(s=>s instanceof me)||!ce(e.text,e.basePos))return!1;let r=t.scanLine(t.absoluteLineEnd+1).text;return Ge.test(r)&&O(t,e.text,e.basePos)==O(t,r,e.basePos)},before:"SetextHeading"}]};class zt{nextLine(){return!1}finish(e,n){return e.addLeafElement(n,e.elt("Task",n.start,n.start+n.content.length,[e.elt("TaskMarker",n.start,n.start+3),...e.parser.parseInline(n.content.slice(3),n.start+3)])),!0}}const qt={defineNodes:[{name:"Task",block:!0,style:c.list},{name:"TaskMarker",style:c.atom}],parseBlock:[{name:"TaskList",leaf(t,e){return/^\[[ xX]\][ \t]/.test(e.content)&&t.parentType().name=="ListItem"?new zt:null},after:"SetextHeading"}]},ge=/(www\.)|(https?:\/\/)|([\w.+-]+@)|(mailto:|xmpp:)/gy,ke=/[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy,Dt=/[\w-]+\.[\w-]+($|\/)/,be=/[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy,we=/\/[a-zA-Z\d@.]+/gy;function Le(t,e,n,r){let s=0;for(let i=e;i<n;i++)t[i]==r&&s++;return s}function jt(t,e){ke.lastIndex=e;let n=ke.exec(t);if(!n||Dt.exec(n[0])[0].indexOf("_")>-1)return-1;let r=e+n[0].length;for(;;){let s=t[r-1],i;if(/[?!.,:*_~]/.test(s)||s==")"&&Le(t,e,r,")")>Le(t,e,r,"("))r--;else if(s==";"&&(i=/&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(t.slice(e,r))))r=e+i.index;else break}return r}function Se(t,e){be.lastIndex=e;let n=be.exec(t);if(!n)return-1;let r=n[0][n[0].length-1];return r=="_"||r=="-"?-1:e+n[0].length-(r=="."?1:0)}const Ft={parseInline:[{name:"Autolink",parse(t,e,n){let r=n-t.offset;ge.lastIndex=r;let s=ge.exec(t.text),i=-1;if(!s)return-1;if(s[1]||s[2]){if(i=jt(t.text,r+s[0].length),i>-1&&t.hasOpenLink){let o=/([^\[\]]|\[[^\]]*\])*/.exec(t.text.slice(r,i));i=r+o[0].length}}else s[3]?i=Se(t.text,r):(i=Se(t.text,r+s[0].length),i>-1&&s[0]=="xmpp:"&&(we.lastIndex=i,s=we.exec(t.text),s&&(i=s.index+s[0].length)));return i<0?-1:(t.addElement(t.elt("URL",n,i+t.offset)),i+t.offset)}}]},_t=[Rt,qt,Ot,Ft];function Ye(t,e,n){return(r,s,i)=>{if(s!=t||r.char(i+1)==t)return-1;let o=[r.elt(n,i,i+1)];for(let a=i+1;a<r.end;a++){let l=r.char(a);if(l==t)return r.addElement(r.elt(e,i,a+1,o.concat(r.elt(n,a,a+1))));if(l==92&&o.push(r.elt("Escape",a,a+++2)),C(l))break}return-1}}const Xt={defineNodes:[{name:"Superscript",style:c.special(c.content)},{name:"SuperscriptMark",style:c.processingInstruction}],parseInline:[{name:"Superscript",parse:Ye(94,"Superscript","SuperscriptMark")}]},$t={defineNodes:[{name:"Subscript",style:c.special(c.content)},{name:"SubscriptMark",style:c.processingInstruction}],parseInline:[{name:"Subscript",parse:Ye(126,"Subscript","SubscriptMark")}]},Ut={defineNodes:[{name:"Emoji",style:c.character}],parseInline:[{name:"Emoji",parse(t,e,n){let r;return e!=58||!(r=/^[a-zA-Z_0-9]+:/.exec(t.slice(n+1,t.end)))?-1:t.addElement(t.elt("Emoji",n,n+1+r[0].length))}}]},Qe=ft({commentTokens:{block:{open:"<!--",close:"-->"}}}),Ze=new H,We=Ht.configure({props:[Ie.add(t=>!t.is("Block")||t.is("Document")||te(t)!=null||Gt(t)?void 0:(e,n)=>({from:n.doc.lineAt(e.from).to,to:e.to})),Ze.add(te),pt.add({Document:()=>null}),ct.add({Document:Qe})]});function te(t){let e=/^(?:ATX|Setext)Heading(\d)$/.exec(t.name);return e?+e[1]:void 0}function Gt(t){return t.name=="OrderedList"||t.name=="BulletList"}function Yt(t,e){let n=t;for(;;){let r=n.nextSibling,s;if(!r||(s=te(r.type))!=null&&s<=e)break;n=r}return n.to}const Qt=ut.of((t,e,n)=>{for(let r=$(t).resolveInner(n,-1);r&&!(r.from<e);r=r.parent){let s=r.type.prop(Ze);if(s==null)continue;let i=Yt(r,s);if(i>n)return{from:n,to:i}}return null});function oe(t){return new ht(Qe,t,[Qt],"markdown")}const Zt=oe(We),Wt=We.configure([_t,$t,Xt,Ut,{props:[Ie.add({Table:(t,e)=>({from:e.doc.lineAt(t.from).to,to:t.to})})]}]),Ve=oe(Wt);function Vt(t,e){return n=>{if(n&&t){let r=null;if(n=/\S*/.exec(n)[0],typeof t=="function"?r=t(n):r=he.matchLanguageName(t,n,!0),r instanceof he)return r.support?r.support.language.parser:dt.getSkippingParser(r.load());if(r)return r.parser}return e?e.parser:null}}class F{constructor(e,n,r,s,i,o,a){this.node=e,this.from=n,this.to=r,this.spaceBefore=s,this.spaceAfter=i,this.type=o,this.item=a}blank(e,n=!0){let r=this.spaceBefore+(this.node.name=="Blockquote"?">":"");if(e!=null){for(;r.length<e;)r+=" ";return r}else{for(let s=this.to-this.from-r.length-this.spaceAfter.length;s>0;s--)r+=" ";return r+(n?this.spaceAfter:"")}}marker(e,n){let r=this.node.name=="OrderedList"?String(+Je(this.item,e)[2]+n):"";return this.spaceBefore+r+this.type+this.spaceAfter}}function Ke(t,e){let n=[];for(let s=t;s&&s.name!="Document";s=s.parent)(s.name=="ListItem"||s.name=="Blockquote"||s.name=="FencedCode")&&n.push(s);let r=[];for(let s=n.length-1;s>=0;s--){let i=n[s],o,a=e.lineAt(i.from),l=i.from-a.from;if(i.name=="FencedCode")r.push(new F(i,l,l,"","","",null));else if(i.name=="Blockquote"&&(o=/^ *>( ?)/.exec(a.text.slice(l))))r.push(new F(i,l,l+o[0].length,"",o[1],">",null));else if(i.name=="ListItem"&&i.parent.name=="OrderedList"&&(o=/^( *)\d+([.)])( *)/.exec(a.text.slice(l)))){let f=o[3],h=o[0].length;f.length>=4&&(f=f.slice(0,f.length-4),h-=4),r.push(new F(i.parent,l,l+h,o[1],f,o[2],i))}else if(i.name=="ListItem"&&i.parent.name=="BulletList"&&(o=/^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(a.text.slice(l)))){let f=o[4],h=o[0].length;f.length>4&&(f=f.slice(0,f.length-4),h-=4);let p=o[2];o[3]&&(p+=o[3].replace(/[xX]/," ")),r.push(new F(i.parent,l,l+h,o[1],f,p,i))}}return r}function Je(t,e){return/^(\s*)(\d+)(?=[.)])/.exec(e.sliceString(t.from,t.from+10))}function Q(t,e,n,r=0){for(let s=-1,i=t;;){if(i.name=="ListItem"){let a=Je(i,e),l=+a[2];if(s>=0){if(l!=s+1)return;n.push({from:i.from+a[1].length,to:i.from+a[0].length,insert:String(s+2+r)})}s=l}let o=i.nextSibling;if(!o)break;i=o}}function ae(t,e){let n=/^[ \t]*/.exec(t)[0].length;if(!n||e.facet(mt)!="	")return t;let r=R(t,4,n),s="";for(let i=r;i>0;)i>=4?(s+="	",i-=4):(s+=" ",i--);return s+t.slice(n)}const Kt=({state:t,dispatch:e})=>{let n=$(t),{doc:r}=t,s=null,i=t.changeByRange(o=>{if(!o.empty||!Ve.isActiveAt(t,o.from))return s={range:o};let a=o.from,l=r.lineAt(a),f=Ke(n.resolveInner(a,-1),r);for(;f.length&&f[f.length-1].from>a-l.from;)f.pop();if(!f.length)return s={range:o};let h=f[f.length-1];if(h.to-h.spaceAfter.length>a-l.from)return s={range:o};let p=a>=h.to-h.spaceAfter.length&&!/\S/.test(l.text.slice(h.to));if(h.item&&p){let L=h.node.firstChild,S=h.node.getChild("ListItem","ListItem");if(L.to>=a||S&&S.to<a||l.from>0&&!/[^\s>]/.test(r.lineAt(l.from-1).text)){let w=f.length>1?f[f.length-2]:null,y,M="";w&&w.item?(y=l.from+w.from,M=w.marker(r,1)):y=l.from+(w?w.to:0);let A=[{from:y,to:a,insert:M}];return h.node.name=="OrderedList"&&Q(h.item,r,A,-2),w&&w.node.name=="OrderedList"&&Q(w.item,r,A),{range:v.cursor(y+M.length),changes:A}}else{let w=Ce(f,t,l);return{range:v.cursor(a+w.length+1),changes:{from:l.from,insert:w+t.lineBreak}}}}if(h.node.name=="Blockquote"&&p&&l.from){let L=r.lineAt(l.from-1),S=/>\s*$/.exec(L.text);if(S&&S.index==h.from){let w=t.changes([{from:L.from+S.index,to:L.to},{from:l.from+h.from,to:l.to}]);return{range:o.map(w),changes:w}}}let d=[];h.node.name=="OrderedList"&&Q(h.item,r,d);let m=h.item&&h.item.from<l.from,b="";if(!m||/^[\s\d.)\-+*>]*/.exec(l.text)[0].length>=h.to)for(let L=0,S=f.length-1;L<=S;L++)b+=L==S&&!m?f[L].marker(r,1):f[L].blank(L<S?R(l.text,4,f[L+1].from)-b.length:null);let k=a;for(;k>l.from&&/\s/.test(l.text.charAt(k-l.from-1));)k--;return b=ae(b,t),Jt(h.node,t.doc)&&(b=Ce(f,t,l)+t.lineBreak+b),d.push({from:k,to:a,insert:t.lineBreak+b}),{range:v.cursor(k+b.length+1),changes:d}});return s?!1:(e(t.update(i,{scrollIntoView:!0,userEvent:"input"})),!0)};function xe(t){return t.name=="QuoteMark"||t.name=="ListMark"}function Jt(t,e){if(t.name!="OrderedList"&&t.name!="BulletList")return!1;let n=t.firstChild,r=t.getChild("ListItem","ListItem");if(!r)return!1;let s=e.lineAt(n.to),i=e.lineAt(r.from),o=/^[\s>]*$/.test(s.text);return s.number+(o?0:1)<i.number}function Ce(t,e,n){let r="";for(let s=0,i=t.length-2;s<=i;s++)r+=t[s].blank(s<i?R(n.text,4,t[s+1].from)-r.length:null,s<i);return ae(r,e)}function en(t,e){let n=t.resolveInner(e,-1),r=e;xe(n)&&(r=n.from,n=n.parent);for(let s;s=n.childBefore(r);)if(xe(s))r=s.from;else if(s.name=="OrderedList"||s.name=="BulletList")n=s.lastChild,r=n.to;else break;return n}const tn=({state:t,dispatch:e})=>{let n=$(t),r=null,s=t.changeByRange(i=>{let o=i.from,{doc:a}=t;if(i.empty&&Ve.isActiveAt(t,i.from)){let l=a.lineAt(o),f=Ke(en(n,o),a);if(f.length){let h=f[f.length-1],p=h.to-h.spaceAfter.length+(h.spaceAfter?1:0);if(o-l.from>p&&!/\S/.test(l.text.slice(p,o-l.from)))return{range:v.cursor(l.from+p),changes:{from:l.from+p,to:o}};if(o-l.from==p&&(!h.item||l.from<=h.item.from||!/\S/.test(l.text.slice(0,h.to)))){let d=l.from+h.from;if(h.item&&h.node.from<h.item.from&&/\S/.test(l.text.slice(h.from,h.to))){let m=h.blank(R(l.text,4,h.to)-R(l.text,4,h.from));return d==l.from&&(m=ae(m,t)),{range:v.cursor(d+m.length),changes:{from:d,to:l.from+h.to,insert:m}}}if(d<o)return{range:v.cursor(d),changes:{from:d,to:o}}}}}return r={range:i}});return r?!1:(e(t.update(s,{scrollIntoView:!0,userEvent:"delete"})),!0)},nn=[{key:"Enter",run:Kt},{key:"Backspace",run:tn}],ne=kt({matchClosingTags:!1});function rn(t={}){let{codeLanguages:e,defaultCodeLanguage:n,addKeymap:r=!0,base:{parser:s}=Zt,completeHTMLTags:i=!0}=t;if(!(s instanceof U))throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");let o=t.extensions?[t.extensions]:[],a=[ne.support],l;n instanceof le?(a.push(n.support),l=n.language):n&&(l=n);let f=e||l?Vt(e,l):void 0;o.push(Tt({codeParser:f,htmlParser:ne.language.parser})),r&&a.push(it.high(ot.of(nn)));let h=oe(s.configure(o));return i&&a.push(h.data.of({autocomplete:sn})),new le(h,a)}function sn(t){let{state:e,pos:n}=t,r=/<[:\-\.\w\u00b7-\uffff]*$/.exec(e.sliceDoc(n-25,n));if(!r)return null;let s=$(e).resolveInner(n,-1);for(;s&&!s.type.isTop;){if(s.name=="CodeBlock"||s.name=="FencedCode"||s.name=="ProcessingInstructionBlock"||s.name=="CommentBlock"||s.name=="Link"||s.name=="Image")return null;s=s.parent}return{from:n-r[0].length,to:n,options:on(),validFor:/^<[:\-\.\w\u00b7-\uffff]*$/}}let Z=null;function on(){if(Z)return Z;let t=gt(new at(lt.create({extensions:ne}),0,!0));return Z=t?t.options:[]}const an=`# Markdown: Basics

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
`,cn={language:rn,code:an};export{cn as default};
