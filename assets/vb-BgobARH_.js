import{c as e}from"./dist-D508tbBT.js";var t=`error`;function n(e){return RegExp(`^((`+e.join(`)|(`)+`))\\b`,`i`)}var r=RegExp(`^[\\+\\-\\*/%&\\\\|\\^~<>!]`),i=RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),a=RegExp(`^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))`),o=RegExp(`^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))`),s=RegExp(`^((//=)|(>>=)|(<<=)|(\\*\\*=))`),c=RegExp(`^[_A-Za-z][_A-Za-z0-9]*`),l=[`class`,`module`,`sub`,`enum`,`select`,`while`,`if`,`function`,`get`,`set`,`property`,`try`,`structure`,`synclock`,`using`,`with`],u=[`else`,`elseif`,`case`,`catch`,`finally`],d=[`next`,`loop`],f=[`and`,`andalso`,`or`,`orelse`,`xor`,`in`,`not`,`is`,`isnot`,`like`],p=n(f),m=`#const.#else.#elseif.#end.#if.#region.addhandler.addressof.alias.as.byref.byval.cbool.cbyte.cchar.cdate.cdbl.cdec.cint.clng.cobj.compare.const.continue.csbyte.cshort.csng.cstr.cuint.culng.cushort.declare.default.delegate.dim.directcast.each.erase.error.event.exit.explicit.false.for.friend.gettype.goto.handles.implements.imports.infer.inherits.interface.isfalse.istrue.lib.me.mod.mustinherit.mustoverride.my.mybase.myclass.namespace.narrowing.new.nothing.notinheritable.notoverridable.of.off.on.operator.option.optional.out.overloads.overridable.overrides.paramarray.partial.private.protected.public.raiseevent.readonly.redim.removehandler.resume.return.shadows.shared.static.step.stop.strict.then.throw.to.true.trycast.typeof.until.until.when.widening.withevents.writeonly`.split(`.`),h=`object.boolean.char.string.byte.sbyte.short.ushort.int16.uint16.integer.uinteger.int32.uint32.long.ulong.int64.uint64.decimal.single.double.float.date.datetime.intptr.uintptr`.split(`.`),g=n(m),_=n(h),v=`"`,y=n(l),b=n(u),x=n(d),S=n([`end`]),C=n([`do`]),w=null;function T(e,t){t.currentIndent++}function E(e,t){t.currentIndent--}function D(e,n){if(e.eatSpace())return null;if(e.peek()===`'`)return e.skipToEnd(),`comment`;if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var l=!1;if((e.match(/^\d*\.\d+F?/i)||e.match(/^\d+\.\d*F?/)||e.match(/^\.\d+F?/))&&(l=!0),l)return e.eat(/J/i),`number`;var u=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?u=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),u=!0):e.match(/^0(?![\dx])/i)&&(u=!0),u)return e.eat(/L/i),`number`}return e.match(v)?(n.tokenize=O(e.current()),n.tokenize(e,n)):e.match(s)||e.match(o)?null:e.match(a)||e.match(r)||e.match(p)?`operator`:e.match(i)?null:e.match(C)?(T(e,n),n.doInCurrentLine=!0,`keyword`):e.match(y)?(n.doInCurrentLine?n.doInCurrentLine=!1:T(e,n),`keyword`):e.match(b)?`keyword`:e.match(S)?(E(e,n),E(e,n),`keyword`):e.match(x)?(E(e,n),`keyword`):e.match(_)||e.match(g)?`keyword`:e.match(c)?`variable`:(e.next(),t)}function O(e){var t=e.length==1,n=`string`;return function(r,i){for(;!r.eol();){if(r.eatWhile(/[^'"]/),r.match(e))return i.tokenize=D,n;r.eat(/['"]/)}return t&&(i.tokenize=D),n}}function k(e,n){var r=n.tokenize(e,n),i=e.current();if(i===`.`)return r=n.tokenize(e,n),r===`variable`?`variable`:t;var a=`[({`.indexOf(i);return a!==-1&&T(e,n),w===`dedent`&&E(e,n)||(a=`])}`.indexOf(i),a!==-1&&E(e,n))?t:r}var A={name:`vb`,startState:function(){return{tokenize:D,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var n=k(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,``);return r.match(x)||r.match(S)||r.match(b)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit},languageData:{closeBrackets:{brackets:[`(`,`[`,`{`,`"`]},commentTokens:{line:`'`},autocomplete:l.concat(u).concat(d).concat(f).concat(m).concat(h)}},j={language:()=>e.define(A),code:`Imports System
Imports System.Collections.Generic

Module Module1

    Sub Main()
        Dim a As New M8Ball

        Do While True

            Dim q As String = ""
            Console.Write("ask me about the future... ")
            q = Console.ReadLine()

            If q.Trim <> "" Then
                Console.WriteLine("the answer is... {0}", a.getAnswer(q))
            Else
                Exit Do
            End If
        Loop

    End Sub

End Module

Class M8Ball

    Public Answers As System.Collections.Generic.Dictionary(Of Integer, String)

    Public Sub New()
        Answers = New System.Collections.Generic.Dictionary(Of Integer, String)
        Answers.Add(0, "It is certain")
        Answers.Add(1, "It is decidedly so")
        Answers.Add(2, "Without a doubt")
        Answers.Add(3, "Yes, definitely")
        Answers.Add(4, "You may rely on ")
        Answers.Add(5, "As I see it, yes")
        Answers.Add(6, "Most likely")
        Answers.Add(7, "Outlook good")
        Answers.Add(8, "Signs point to yes")
        Answers.Add(9, "Yes")
        Answers.Add(10, "Reply hazy, try again")
        Answers.Add(11, "Ask again later")
        Answers.Add(12, "Better not tell you now")
        Answers.Add(13, "Cannot predict now")
        Answers.Add(14, "Concentrate and ask again")
        Answers.Add(15, "Don't count on it")
        Answers.Add(16, "My reply is no")
        Answers.Add(17, "My sources say no")
        Answers.Add(18, "Outlook not so")
        Answers.Add(19, "Very doubtful")
    End Sub

    Public Function getAnswer(theQuestion As String) As String
        Dim r As New Random
        Return Answers(r.Next(0, 19))
    End Function

End Class
`};export{j as default};