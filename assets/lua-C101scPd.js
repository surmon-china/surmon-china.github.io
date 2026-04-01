import{c as e}from"./dist-D508tbBT.js";function t(e){return RegExp(`^(?:`+e.join(`|`)+`)`,`i`)}function n(e){return RegExp(`^(?:`+e.join(`|`)+`)$`,`i`)}var r=n(`_G,_VERSION,assert,collectgarbage,dofile,error,getfenv,getmetatable,ipairs,load,loadfile,loadstring,module,next,pairs,pcall,print,rawequal,rawget,rawset,require,select,setfenv,setmetatable,tonumber,tostring,type,unpack,xpcall,coroutine.create,coroutine.resume,coroutine.running,coroutine.status,coroutine.wrap,coroutine.yield,debug.debug,debug.getfenv,debug.gethook,debug.getinfo,debug.getlocal,debug.getmetatable,debug.getregistry,debug.getupvalue,debug.setfenv,debug.sethook,debug.setlocal,debug.setmetatable,debug.setupvalue,debug.traceback,close,flush,lines,read,seek,setvbuf,write,io.close,io.flush,io.input,io.lines,io.open,io.output,io.popen,io.read,io.stderr,io.stdin,io.stdout,io.tmpfile,io.type,io.write,math.abs,math.acos,math.asin,math.atan,math.atan2,math.ceil,math.cos,math.cosh,math.deg,math.exp,math.floor,math.fmod,math.frexp,math.huge,math.ldexp,math.log,math.log10,math.max,math.min,math.modf,math.pi,math.pow,math.rad,math.random,math.randomseed,math.sin,math.sinh,math.sqrt,math.tan,math.tanh,os.clock,os.date,os.difftime,os.execute,os.exit,os.getenv,os.remove,os.rename,os.setlocale,os.time,os.tmpname,package.cpath,package.loaded,package.loaders,package.loadlib,package.path,package.preload,package.seeall,string.byte,string.char,string.dump,string.find,string.format,string.gmatch,string.gsub,string.len,string.lower,string.match,string.rep,string.reverse,string.sub,string.upper,table.concat,table.insert,table.maxn,table.remove,table.sort`.split(`,`)),i=n([`and`,`break`,`elseif`,`false`,`nil`,`not`,`or`,`return`,`true`,`function`,`end`,`if`,`then`,`else`,`do`,`while`,`repeat`,`until`,`for`,`in`,`local`]),a=n([`function`,`if`,`repeat`,`do`,`\\(`,`{`]),o=n([`end`,`until`,`\\)`,`}`]),s=t([`end`,`until`,`\\)`,`}`,`else`,`elseif`]);function c(e){for(var t=0;e.eat(`=`);)++t;return e.eat(`[`),t}function l(e,t){var n=e.next();return n==`-`&&e.eat(`-`)?e.eat(`[`)&&e.eat(`[`)?(t.cur=u(c(e),`comment`))(e,t):(e.skipToEnd(),`comment`):n==`"`||n==`'`?(t.cur=d(n))(e,t):n==`[`&&/[\[=]/.test(e.peek())?(t.cur=u(c(e),`string`))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),`number`):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),`variable`):null}function u(e,t){return function(n,r){for(var i=null,a;(a=n.next())!=null;)if(i==null)a==`]`&&(i=0);else if(a==`=`)++i;else if(a==`]`&&i==e){r.cur=l;break}else i=null;return t}}function d(e){return function(t,n){for(var r=!1,i;(i=t.next())!=null&&!(i==e&&!r);)r=!r&&i==`\\`;return r||(n.cur=l),`string`}}var f={name:`lua`,startState:function(){return{basecol:0,indentDepth:0,cur:l}},token:function(e,t){if(e.eatSpace())return null;var n=t.cur(e,t),s=e.current();return n==`variable`&&(i.test(s)?n=`keyword`:r.test(s)&&(n=`builtin`)),n!=`comment`&&n!=`string`&&(a.test(s)?++t.indentDepth:o.test(s)&&--t.indentDepth),n},indent:function(e,t,n){var r=s.test(t);return e.basecol+n.unit*(e.indentDepth-(r?1:0))},languageData:{indentOnInput:/^\s*(?:end|until|else|\)|\})$/,commentTokens:{line:`--`,block:{open:`--[[`,close:`]]--`}}}},p={language:()=>e.define(f),code:`Set = {}

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
print(s1 == s2 * s1)  --> true`};export{p as default};