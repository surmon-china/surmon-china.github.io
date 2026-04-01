import{c as e}from"./dist-D508tbBT.js";var t={name:`toml`,startState:function(){return{inString:!1,stringType:``,lhs:!0,inArray:0}},token:function(e,t){let n;if(!t.inString&&(n=e.match(/^('''|"""|'|")/))&&(t.stringType=n[0],t.inString=!0),e.sol()&&!t.inString&&t.inArray===0&&(t.lhs=!0),t.inString){for(;t.inString;)if(e.match(t.stringType))t.inString=!1;else if(e.peek()===`\\`)e.next(),e.next();else if(e.eol())break;else e.match(/^.[^\\\"\']*/);return t.lhs?`property`:`string`}else if(t.inArray&&e.peek()===`]`)return e.next(),t.inArray--,`bracket`;else if(t.lhs&&e.peek()===`[`&&e.skipTo(`]`))return e.next(),e.peek()===`]`&&e.next(),`atom`;else if(e.peek()===`#`)return e.skipToEnd(),`comment`;else if(e.eatSpace())return null;else if(t.lhs&&e.eatWhile(function(e){return e!=`=`&&e!=` `}))return`property`;else if(t.lhs&&e.peek()===`=`)return e.next(),t.lhs=!1,null;else if(!t.lhs&&e.match(/^\d\d\d\d[\d\-\:\.T]*Z/))return`atom`;else if(!t.lhs&&(e.match(`true`)||e.match(`false`)))return`atom`;else if(!t.lhs&&e.peek()===`[`)return t.inArray++,e.next(),`bracket`;else if(!t.lhs&&e.match(/^\-?\d+(?:\.\d+)?/))return`number`;else e.eatSpace()||e.next();return null},languageData:{commentTokens:{line:`#`}}},n={language:()=>e.define(t),code:`# This is a TOML document. Boom.

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
`};export{n as default};