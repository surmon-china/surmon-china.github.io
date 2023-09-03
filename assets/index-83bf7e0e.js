import{S as d}from"./index-5a742e16.js";import"./index-2f6da573.js";function c(e){return new RegExp("^(?:"+e.join("|")+")","i")}function o(e){return new RegExp("^(?:"+e.join("|")+")$","i")}var f=o(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),g=o(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),p=o(["function","if","repeat","do","\\(","{"]),m=o(["end","until","\\)","}"]),b=c(["end","until","\\)","}","else","elseif"]);function l(e){for(var n=0;e.eat("=");)++n;return e.eat("["),n}function s(e,n){var t=e.next();return t=="-"&&e.eat("-")?e.eat("[")&&e.eat("[")?(n.cur=u(l(e),"comment"))(e,n):(e.skipToEnd(),"comment"):t=='"'||t=="'"?(n.cur=h(t))(e,n):t=="["&&/[\[=]/.test(e.peek())?(n.cur=u(l(e),"string"))(e,n):/\d/.test(t)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(t)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function u(e,n){return function(t,r){for(var a=null,i;(i=t.next())!=null;)if(a==null)i=="]"&&(a=0);else if(i=="=")++a;else if(i=="]"&&a==e){r.cur=s;break}else a=null;return n}}function h(e){return function(n,t){for(var r=!1,a;(a=n.next())!=null&&!(a==e&&!r);)r=!r&&a=="\\";return r||(t.cur=s),"string"}}const k={name:"lua",startState:function(){return{basecol:0,indentDepth:0,cur:s}},token:function(e,n){if(e.eatSpace())return null;var t=n.cur(e,n),r=e.current();return t=="variable"&&(g.test(r)?t="keyword":f.test(r)&&(t="builtin")),t!="comment"&&t!="string"&&(p.test(r)?++n.indentDepth:m.test(r)&&--n.indentDepth),t},indent:function(e,n,t){var r=b.test(n);return e.basecol+t.unit*(e.indentDepth-(r?1:0))},languageData:{indentOnInput:/^\s*(?:end|until|else|\)|\})$/,commentTokens:{line:"--",block:{open:"--[[",close:"]]--"}}}},w=`Set = {}

Set.mt = {}    -- metatable for sets


function Set.mt.__add (a,b)
  local res = Set.new{}
  for k in pairs(a) do res[k] = true end
  for k in pairs(b) do res[k] = true end
  return res
end


function Set.mt.__mul (a,b)
  local res = Set.new{}
  for k in pairs(a) do
    res[k] = b[k]
  end
  return res
end


function Set.mt.__le (a,b)    -- set containment
  for k in pairs(a) do
    if not b[k] then return false end
  end
  return true
end


function Set.mt.__lt (a,b)
  return a <= b and not (b <= a)
end


function Set.mt.__eq (a,b)
  return a <= b and b <= a
end


function Set.mt.__tostring (set)
  local s = "{"
  local sep = ""
  for e in pairs(set) do
    s = s .. sep .. e
    sep = ", "
  end
  return s .. "}"
end


function Set.new (t)
  local set = {}
  setmetatable(set, Set.mt)
  for _, l in ipairs(t) do set[l] = true end
  return set
end


-- some examples
s1 = Set.new{10, 20, 30, 50}
s2 = Set.new{30, 1}
s3 = s1 + s2
print(s3)               --> {10, 30, 20, 1, 50}
print((s1 + s2)*s1)     --> {10, 20, 30, 50}

s1 = Set.new{2, 4}
s2 = Set.new{4, 10, 2}
print(s1 <= s2)       --> true
print(s1 < s2)        --> true
print(s1 >= s1)       --> true
print(s1 > s1)        --> false
print(s1 == s2 * s1)  --> true`,x={language:()=>d.define(k),code:w};export{x as default};
