import{c as e}from"./dist-D508tbBT.js";function t(e){for(var t={},n=e.split(` `),r=0;r<n.length;++r)t[n[r]]=!0;return t}var n=t(`absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write`),r={null:!0},i=/[+\-*&%=<>!?|\/]/;function a(e,t){var a=e.next();if(a==`#`&&t.startOfLine)return e.skipToEnd(),`meta`;if(a==`"`||a==`'`)return t.tokenize=o(a),t.tokenize(e,t);if(a==`(`&&e.eat(`*`))return t.tokenize=s,s(e,t);if(a==`{`)return t.tokenize=c,c(e,t);if(/[\[\]\(\),;\:\.]/.test(a))return null;if(/\d/.test(a))return e.eatWhile(/[\w\.]/),`number`;if(a==`/`&&e.eat(`/`))return e.skipToEnd(),`comment`;if(i.test(a))return e.eatWhile(i),`operator`;e.eatWhile(/[\w\$_]/);var l=e.current().toLowerCase();return n.propertyIsEnumerable(l)?`keyword`:r.propertyIsEnumerable(l)?`atom`:`variable`}function o(e){return function(t,n){for(var r=!1,i,a=!1;(i=t.next())!=null;){if(i==e&&!r){a=!0;break}r=!r&&i==`\\`}return(a||!r)&&(n.tokenize=null),`string`}}function s(e,t){for(var n=!1,r;r=e.next();){if(r==`)`&&n){t.tokenize=null;break}n=r==`*`}return`comment`}function c(e,t){for(var n;n=e.next();)if(n==`}`){t.tokenize=null;break}return`comment`}var l={name:`pascal`,startState:function(){return{tokenize:null}},token:function(e,t){return e.eatSpace()?null:(t.tokenize||a)(e,t)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{block:{open:`(*`,close:`*)`}}}},u={language:()=>e.define(l),code:`program GreetingsNumberOfTimes;

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
`};export{u as default};