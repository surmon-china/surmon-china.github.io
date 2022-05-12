# Literals
1234
0.0e101
.123
0b01010011100
0o01234567
0x0987654321abcdef
7
2147483647
3L
79228162514264337593543950336L
0x100000000L
79228162514264337593543950336
0xdeadbeef
3.14j
10.j
10j
.001j
1e100j
3.14e-10j


# String Literals
'For\''
"God\""
"""so loved
the world"""
'''that he gave
his only begotten\' '''
'that whosoever believeth \
in him'
''

# Identifiers
__a__
a.b
a.b.c

#Unicode identifiers on Python3
# a = x\ddot
a⃗ = ẍ
# a = v\dot
a⃗ = v̇

#F\vec = m \cdot a\vec
F⃗ = m•a⃗ 

# Operators
+ - * / % & | ^ ~ < >
== != <= >= <> << >> // **
and or not in is

#infix matrix multiplication operator (PEP 465)
A @ B

# Delimiters
() [] {} , : ` = ; @ .  # Note that @ and . require the proper context on Python 2.
+= -= *= /= %= &= |= ^=
//= >>= <<= **=

# Keywords
as assert break class continue def del elif else except
finally for from global if import lambda pass raise
return try while with yield

# Python 2 Keywords (otherwise Identifiers)
exec print

# Python 3 Keywords (otherwise Identifiers)
nonlocal

# Types
bool classmethod complex dict enumerate float frozenset int list object
property reversed set slice staticmethod str super tuple type

# Python 2 Types (otherwise Identifiers)
basestring buffer file long unicode xrange

# Python 3 Types (otherwise Identifiers)
bytearray bytes filter map memoryview open range zip

# Some Example code
import os
from package import ParentClass

@nonsenseDecorator
def doesNothing():
    pass

class ExampleClass(ParentClass):
    @staticmethod
    def example(inputStr):
        a = list(inputStr)
        a.reverse()
        return ''.join(a)

    def __init__(self, mixin = 'Hello'):
        self.mixin = mixin

# Python 3.6 f-strings (https://www.python.org/dev/peps/pep-0498/)
f'My name is {name}, my age next year is {age+1}, my anniversary is {anniversary:%A, %B %d, %Y}.'
f'He said his name is {name!r}.'
f"""He said his name is {name!r}."""
f'{"quoted string"}'
f'{{ {4*10} }}'
f'This is an error }'
f'This is ok }}'
fr'x={4*10}\n'
