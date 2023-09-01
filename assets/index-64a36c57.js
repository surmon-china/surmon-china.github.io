import{S as r}from"./index-05bf2d35.js";import"./index-d2958fc7.js";const l={name:"toml",startState:function(){return{inString:!1,stringType:"",lhs:!0,inArray:0}},token:function(n,e){if(!e.inString&&(n.peek()=='"'||n.peek()=="'")&&(e.stringType=n.peek(),n.next(),e.inString=!0),n.sol()&&e.inArray===0&&(e.lhs=!0),e.inString){for(;e.inString&&!n.eol();)n.peek()===e.stringType?(n.next(),e.inString=!1):n.peek()==="\\"?(n.next(),n.next()):n.match(/^.[^\\\"\']*/);return e.lhs?"property":"string"}else{if(e.inArray&&n.peek()==="]")return n.next(),e.inArray--,"bracket";if(e.lhs&&n.peek()==="["&&n.skipTo("]"))return n.next(),n.peek()==="]"&&n.next(),"atom";if(n.peek()==="#")return n.skipToEnd(),"comment";if(n.eatSpace())return null;if(e.lhs&&n.eatWhile(function(i){return i!="="&&i!=" "}))return"property";if(e.lhs&&n.peek()==="=")return n.next(),e.lhs=!1,null;if(!e.lhs&&n.match(/^\d\d\d\d[\d\-\:\.T]*Z/))return"atom";if(!e.lhs&&(n.match("true")||n.match("false")))return"atom";if(!e.lhs&&n.peek()==="[")return e.inArray++,n.next(),"bracket";if(!e.lhs&&n.match(/^\-?\d+(?:\.\d+)?/))return"number";n.eatSpace()||n.next()}return null},languageData:{commentTokens:{line:"#"}}},o=`# This is a TOML document. Boom.

title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
organization = "GitHub"
bio = "GitHub Cofounder & CEO\\nLikes tater tots and beer."
dob = 1979-05-27T07:32:00Z # First class dates? Why not?

[database]
server = "192.168.1.1"
ports = [ 8001, 8001, 8002 ]
connection_max = 5000
enabled = true

[servers]

  # You can indent as you please. Tabs or spaces. TOML don't care.
  [servers.alpha]
  ip = "10.0.0.1"
  dc = "eqdc10"
  
  [servers.beta]
  ip = "10.0.0.2"
  dc = "eqdc10"
  
[clients]
data = [ ["gamma", "delta"], [1, 2] ]

# Line breaks are OK when inside arrays
hosts = [
  "alpha",
  "omega"
]
`,c={language:()=>r.define(l),code:o};export{c as default};
