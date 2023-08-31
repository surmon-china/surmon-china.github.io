import{S as v}from"./index-69a9f04d.js";import"./index-d593168d.js";var s="error";function o(n){return new RegExp("^(("+n.join(")|(")+"))\\b","i")}var b=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),m=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),k=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),x=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),I=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),S=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),l=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],a=["else","elseif","case","catch","finally"],f=["next","loop"],w=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],C=o(w),h=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],y=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],E=o(h),R=o(y),O='"',D=o(l),g=o(a),A=o(f),p=o(["end"]),z=o(["do"]);function c(n,e){e.currentIndent++}function d(n,e){e.currentIndent--}function u(n,e){if(n.eatSpace())return null;var t=n.peek();if(t==="'")return n.skipToEnd(),"comment";if(n.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var r=!1;if((n.match(/^\d*\.\d+F?/i)||n.match(/^\d+\.\d*F?/)||n.match(/^\.\d+F?/))&&(r=!0),r)return n.eat(/J/i),"number";var i=!1;if(n.match(/^&H[0-9a-f]+/i)||n.match(/^&O[0-7]+/i)?i=!0:n.match(/^[1-9]\d*F?/)?(n.eat(/J/i),i=!0):n.match(/^0(?![\dx])/i)&&(i=!0),i)return n.eat(/L/i),"number"}return n.match(O)?(e.tokenize=L(n.current()),e.tokenize(n,e)):n.match(I)||n.match(x)?null:n.match(k)||n.match(b)||n.match(C)?"operator":n.match(m)?null:n.match(z)?(c(n,e),e.doInCurrentLine=!0,"keyword"):n.match(D)?(e.doInCurrentLine?e.doInCurrentLine=!1:c(n,e),"keyword"):n.match(g)?"keyword":n.match(p)?(d(n,e),d(n,e),"keyword"):n.match(A)?(d(n,e),"keyword"):n.match(R)||n.match(E)?"keyword":n.match(S)?"variable":(n.next(),s)}function L(n){var e=n.length==1,t="string";return function(r,i){for(;!r.eol();){if(r.eatWhile(/[^'"]/),r.match(n))return i.tokenize=u,t;r.eat(/['"]/)}return e&&(i.tokenize=u),t}}function M(n,e){var t=e.tokenize(n,e),r=n.current();if(r===".")return t=e.tokenize(n,e),t==="variable"?"variable":s;var i="[({".indexOf(r);return i!==-1&&c(n,e),i="])}".indexOf(r),i!==-1&&d(n,e)?s:t}const T={name:"vb",startState:function(){return{tokenize:u,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(n,e){n.sol()&&(e.currentIndent+=e.nextLineIndent,e.nextLineIndent=0,e.doInCurrentLine=0);var t=M(n,e);return e.lastToken={style:t,content:n.current()},t},indent:function(n,e,t){var r=e.replace(/^\s+|\s+$/g,"");return r.match(A)||r.match(p)||r.match(g)?t.unit*(n.currentIndent-1):n.currentIndent<0?0:n.currentIndent*t.unit},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:"'"},autocomplete:l.concat(a).concat(f).concat(w).concat(h).concat(y)}},F=`Imports System
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
`,N={language:()=>v.define(T),code:F};export{N as default};
