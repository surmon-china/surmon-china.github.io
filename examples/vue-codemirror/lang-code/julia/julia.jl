#numbers
1234
1234im
.234
.234im
2.23im
2.3f3
23e2
0x234

#strings
'a'
"asdf"
r"regex"
b"bytestring"

"""
multiline string
"""

#identifiers
a
as123
function_name!

#unicode identifiers
# a = x\ddot
a⃗ = ẍ
# a = v\dot
a⃗ = v̇
#F\vec = m \cdotp a\vec
F⃗ = m·a⃗

#literal identifier multiples
3x
4[1, 2, 3]

#dicts and indexing
x=[1, 2, 3]
x[end-1]
x={"julia"=>"language of technical computing"}


#exception handling
try
  f()
catch
  @printf "Error"
finally
  g()
end

#types
immutable Color{T<:Number}
  r::T
  g::T
  b::T
end

#functions
function change!(x::Vector{Float64})
  for i = 1:length(x)
    x[i] *= 2
  end
end

#function invocation
f('b', (2, 3)...)

#operators
|=
&=
^=
\-
%=
*=
+=
-=
<=
>=
!=
==
%
*
+
-
<
>
!
=
|
&
^
\
?
~
:
$
<:
.<
.>
<<
<<=
>>
>>>>
>>=
>>>=
<<=
<<<=
.<=
.>=
.==
->
//
in
...
//
:=
.//=
.*=
./=
.^=
.%=
.+=
.-=
\=
\\=
||
===
&&
|=
.|=
<:
>:
|>
<|
::
x ? y : z

#macros
@spawnat 2 1+1
@eval(:x)

#keywords and operators
if else elseif while for
 begin let end do
try catch finally return break continue
global local const 
export import importall using
function macro module baremodule 
type immutable quote
true false enumerate


    