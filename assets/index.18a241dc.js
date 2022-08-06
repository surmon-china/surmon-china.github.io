import{S as u}from"./index.d5099d42.js";import"./index.643a1a36.js";function c(n){for(var r={},e=n.split(" "),t=0;t<e.length;++t)r[e[t]]=!0;return r}var f=c("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),d={null:!0},a=/[+\-*&%=<>!?|\/]/;function p(n,r){var e=n.next();if(e=="#"&&r.startOfLine)return n.skipToEnd(),"meta";if(e=='"'||e=="'")return r.tokenize=m(e),r.tokenize(n,r);if(e=="("&&n.eat("*"))return r.tokenize=l,l(n,r);if(e=="{")return r.tokenize=s,s(n,r);if(/[\[\]\(\),;\:\.]/.test(e))return null;if(/\d/.test(e))return n.eatWhile(/[\w\.]/),"number";if(e=="/"&&n.eat("/"))return n.skipToEnd(),"comment";if(a.test(e))return n.eatWhile(a),"operator";n.eatWhile(/[\w\$_]/);var t=n.current();return f.propertyIsEnumerable(t)?"keyword":d.propertyIsEnumerable(t)?"atom":"variable"}function m(n){return function(r,e){for(var t=!1,i,o=!1;(i=r.next())!=null;){if(i==n&&!t){o=!0;break}t=!t&&i=="\\"}return(o||!t)&&(e.tokenize=null),"string"}}function l(n,r){for(var e=!1,t;t=n.next();){if(t==")"&&e){r.tokenize=null;break}e=t=="*"}return"comment"}function s(n,r){for(var e;e=n.next();)if(e=="}"){r.tokenize=null;break}return"comment"}const g={startState:function(){return{tokenize:null}},token:function(n,r){if(n.eatSpace())return null;var e=(r.tokenize||p)(n,r);return e=="comment"||e=="meta",e},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{block:{open:"(*",close:"*)"}}}},k=`program GreetingsNumberOfTimes;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils;

var
  greetingsMessage: string;
  numberOfTimes, i: integer;

begin
  try
    { TODO -oUser -cConsole Main : Insert code here }
    greetingsMessage := 'Hello World!';
    numberOfTimes := 10;

    for i := 1 to numberOfTimes do
    begin
      Writeln(greetingsMessage);
    end;
  except
    on E: Exception do
      Writeln(E.ClassName, ': ', E.Message);
  end;
end.
`,v={language:()=>u.define(g),code:k};export{v as default};
