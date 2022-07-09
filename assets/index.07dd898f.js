import{S as l}from"./index.4b2436cb.js";import"./index.5bbbf6dc.js";var a=["true","false","on","off","yes","no"],f=new RegExp("\\b(("+a.join(")|(")+"))$","i");const o={token:function(i,n){var e=i.peek(),r=n.escaped;if(n.escaped=!1,e=="#"&&(i.pos==0||/\s/.test(i.string.charAt(i.pos-1))))return i.skipToEnd(),"comment";if(i.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(n.literal&&i.indentation()>n.keyCol)return i.skipToEnd(),"string";if(n.literal&&(n.literal=!1),i.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,i.match("---")||i.match("..."))return"def";if(i.match(/^\s*-\s+/))return"meta"}if(i.match(/^(\{|\}|\[|\])/))return e=="{"?n.inlinePairs++:e=="}"?n.inlinePairs--:e=="["?n.inlineList++:n.inlineList--,"meta";if(n.inlineList>0&&!r&&e==",")return i.next(),"meta";if(n.inlinePairs>0&&!r&&e==",")return n.keyCol=0,n.pair=!1,n.pairStart=!1,i.next(),"meta";if(n.pairStart){if(i.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta";if(i.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable";if(n.inlinePairs==0&&i.match(/^\s*-?[0-9\.\,]+\s?$/)||n.inlinePairs>0&&i.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(i.match(f))return"keyword"}return!n.pair&&i.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=i.indentation(),"atom"):n.pair&&i.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped=e=="\\",i.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},languageData:{commentTokens:{line:"#"}}};var u=`---
doe: 'a deer, a female deer'
ray: 'a drop of golden sun'
pi: 3.14159
xmas: true
french-hens: 3
calling-birds:
  - huey
  - dewey
  - louie
  - fred
xmas-fifth-day:
  calling-birds: four
  french-hens: 3
  golden-rings: 5
  partridges:
    count: 1
    location: 'a pear tree'
  turtle-doves: two
`,p={language:()=>l.define(o),code:u};export{p as default};
