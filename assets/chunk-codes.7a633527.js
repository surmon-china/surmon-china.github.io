var c=Object.defineProperty,d=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(t,n,e)=>n in t?c(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,i=(t,n)=>{for(var e in n||(n={}))p.call(n,e)&&r(t,e,n[e]);if(a)for(var e of a(n))m.call(n,e)&&r(t,e,n[e]);return t},o=(t,n)=>d(t,u(n));const s={"./codes/brainfuck.bf":`[ This program prints "Hello World!" and a newline to the screen, its
  length is 106 active command characters [it is not the shortest.]

  This loop is a "comment loop", it's a simple way of adding a comment
  to a BF program such that you don't have to worry about any command
  characters. Any ".", ",", "+", "-", "<" and ">" characters are simply
  ignored, the "[" and "]" characters just have to be balanced.
]
+++++ +++               Set Cell #0 to 8
[
    >++++               Add 4 to Cell #1; this will always set Cell #1 to 4
    [                   as the cell will be cleared by the loop
        >++             Add 2 to Cell #2
        >+++            Add 3 to Cell #3
        >+++            Add 3 to Cell #4
        >+              Add 1 to Cell #5
        <<<<-           Decrement the loop counter in Cell #1
    ]                   Loop till Cell #1 is zero; number of iterations is 4
    >+                  Add 1 to Cell #2
    >+                  Add 1 to Cell #3
    >-                  Subtract 1 from Cell #4
    >>+                 Add 1 to Cell #6
    [<]                 Move back to the first zero cell you find; this will
                        be Cell #1 which was cleared by the previous loop
    <-                  Decrement the loop Counter in Cell #0
]                       Loop till Cell #0 is zero; number of iterations is 8

The result of this is:
Cell No :   0   1   2   3   4   5   6
Contents:   0   0  72 104  88  32   8
Pointer :   ^

>>.                     Cell #2 has value 72 which is 'H'
>---.                   Subtract 3 from Cell #3 to get 101 which is 'e'
+++++++..+++.           Likewise for 'llo' from Cell #3
>>.                     Cell #5 is 32 for the space
<-.                     Subtract 1 from Cell #4 for 87 to give a 'W'
<.                      Cell #3 was set to 'o' from the end of 'Hello'
+++.------.--------.    Cell #3 for 'rl' and 'd'
>>+.                    Add 1 to Cell #5 gives us an exclamation point
>++.                    And finally a newline from Cell #6`,"./codes/clojure.clj":`(ns game-of-life
  "Conway's Game of Life, based on the work of
  Christophe Grand (http://clj-me.cgrand.net/2011/08/19/conways-game-of-life)
  and Laurent Petit (https://gist.github.com/1200343).")

;;; Core game of life's algorithm functions

(defn neighbors
  "Given a cell's coordinates \`[x y]\`, returns the coordinates of its
  neighbors."
  [[x y]]
  (for [dx [-1 0 1]
        dy (if (zero? dx)
             [-1 1]
             [-1 0 1])]
    [(+ dx x) (+ dy y)]))

(defn step
  "Given a set of living \`cells\`, computes the new set of living cells."
  [cells]
  (set (for [[cell n] (frequencies (mapcat neighbors cells))
             :when (or (= n 3)
                       (and (= n 2)
                            (cells cell)))]
         cell)))

;;; Utility methods for displaying game on a text terminal

(defn print-grid
  "Prints a \`grid\` of \`w\` columns and \`h\` rows, on *out*, representing a
  step in the game."
  [grid w h]
  (doseq [x (range (inc w))
          y (range (inc h))]
    (when (= y 0) (println))
    (print (if (grid [x y])
             "[X]"
             " . "))))

(defn print-grids
  "Prints a sequence of \`grids\` of \`w\` columns and \`h\` rows on *out*,
  representing several steps."
  [grids w h]
  (doseq [grid grids]
    (print-grid grid w h)
    (println)))

;;; Launches an example grid

(def grid
  "\`grid\` represents the initial set of living cells"
  #{[2 1] [2 2] [2 3]})

(print-grids (take 3 (iterate step grid)) 5 5)`,"./codes/coffeescript.coffee":`# CoffeeScript mode for CodeMirror
# Copyright (c) 2011 Jeff Pickhardt, released under
# the MIT License.
#
# Modified from the Python CodeMirror mode, which also is 
# under the MIT License Copyright (c) 2010 Timothy Farrell.
#
# The following script, Underscore.coffee, is used to 
# demonstrate CoffeeScript mode for CodeMirror.
#
# To download CoffeeScript mode for CodeMirror, go to:
# https://github.com/pickhardt/coffeescript-codemirror-mode

# **Underscore.coffee
# (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.**
# Underscore is freely distributable under the terms of the
# [MIT license](http://en.wikipedia.org/wiki/MIT_License).
# Portions of Underscore are inspired by or borrowed from
# [Prototype.js](http://prototypejs.org/api), Oliver Steele's
# [Functional](http://osteele.com), and John Resig's
# [Micro-Templating](http://ejohn.org).
# For all details and documentation:
# http://documentcloud.github.com/underscore/


# Baseline setup
# --------------

# Establish the root object, \`window\` in the browser, or \`global\` on the server.
root = this


# Save the previous value of the \`_\` variable.
previousUnderscore = root._

### Multiline
    comment
###

# Establish the object that gets thrown to break out of a loop iteration.
# \`StopIteration\` is SOP on Mozilla.
breaker = if typeof(StopIteration) is 'undefined' then '__break__' else StopIteration


#### Docco style single line comment (title)


# Helper function to escape **RegExp** contents, because JS doesn't have one.
escapeRegExp = (string) -> string.replace(/([.*+?^\${}()|[\\]\\/\\\\])/g, '\\\\$1')


# Save bytes in the minified (but not gzipped) version:
ArrayProto = Array.prototype
ObjProto = Object.prototype


# Create quick reference variables for speed access to core prototypes.
slice = ArrayProto.slice
unshift = ArrayProto.unshift
toString = ObjProto.toString
hasOwnProperty = ObjProto.hasOwnProperty
propertyIsEnumerable = ObjProto.propertyIsEnumerable


# All **ECMA5** native implementations we hope to use are declared here.
nativeForEach = ArrayProto.forEach
nativeMap = ArrayProto.map
nativeReduce = ArrayProto.reduce
nativeReduceRight = ArrayProto.reduceRight
nativeFilter = ArrayProto.filter
nativeEvery = ArrayProto.every
nativeSome = ArrayProto.some
nativeIndexOf = ArrayProto.indexOf
nativeLastIndexOf = ArrayProto.lastIndexOf
nativeIsArray = Array.isArray
nativeKeys = Object.keys


# Create a safe reference to the Underscore object for use below.
_ = (obj) -> new wrapper(obj)


# Export the Underscore object for **CommonJS**.
if typeof(exports) != 'undefined' then exports._ = _


# Export Underscore to global scope.
root._ = _


# Current version.
_.VERSION = '1.1.0'


# Collection Functions
# --------------------

# The cornerstone, an **each** implementation.
# Handles objects implementing **forEach**, arrays, and raw objects.
_.each = (obj, iterator, context) ->
  try
    if nativeForEach and obj.forEach is nativeForEach
      obj.forEach iterator, context
    else if _.isNumber obj.length
      iterator.call context, obj[i], i, obj for i in [0...obj.length]
    else
      iterator.call context, val, key, obj for own key, val of obj
  catch e
    throw e if e isnt breaker
  obj


# Return the results of applying the iterator to each element. Use JavaScript
# 1.6's version of **map**, if possible.
_.map = (obj, iterator, context) ->
  return obj.map(iterator, context) if nativeMap and obj.map is nativeMap
  results = []
  _.each obj, (value, index, list) ->
    results.push iterator.call context, value, index, list
  results


# **Reduce** builds up a single result from a list of values. Also known as
# **inject**, or **foldl**. Uses JavaScript 1.8's version of **reduce**, if possible.
_.reduce = (obj, iterator, memo, context) ->
  if nativeReduce and obj.reduce is nativeReduce
    iterator = _.bind iterator, context if context
    return obj.reduce iterator, memo
  _.each obj, (value, index, list) ->
    memo = iterator.call context, memo, value, index, list
  memo


# The right-associative version of **reduce**, also known as **foldr**. Uses
# JavaScript 1.8's version of **reduceRight**, if available.
_.reduceRight = (obj, iterator, memo, context) ->
  if nativeReduceRight and obj.reduceRight is nativeReduceRight
    iterator = _.bind iterator, context if context
    return obj.reduceRight iterator, memo
  reversed = _.clone(_.toArray(obj)).reverse()
  _.reduce reversed, iterator, memo, context


# Return the first value which passes a truth test.
_.detect = (obj, iterator, context) ->
  result = null
  _.each obj, (value, index, list) ->
    if iterator.call context, value, index, list
      result = value
      _.breakLoop()
  result


# Return all the elements that pass a truth test. Use JavaScript 1.6's
# **filter**, if it exists.
_.filter = (obj, iterator, context) ->
  return obj.filter iterator, context if nativeFilter and obj.filter is nativeFilter
  results = []
  _.each obj, (value, index, list) ->
    results.push value if iterator.call context, value, index, list
  results


# Return all the elements for which a truth test fails.
_.reject = (obj, iterator, context) ->
  results = []
  _.each obj, (value, index, list) ->
    results.push value if not iterator.call context, value, index, list
  results


# Determine whether all of the elements match a truth test. Delegate to
# JavaScript 1.6's **every**, if it is present.
_.every = (obj, iterator, context) ->
  iterator ||= _.identity
  return obj.every iterator, context if nativeEvery and obj.every is nativeEvery
  result = true
  _.each obj, (value, index, list) ->
    _.breakLoop() unless (result = result and iterator.call(context, value, index, list))
  result


# Determine if at least one element in the object matches a truth test. Use
# JavaScript 1.6's **some**, if it exists.
_.some = (obj, iterator, context) ->
  iterator ||= _.identity
  return obj.some iterator, context if nativeSome and obj.some is nativeSome
  result = false
  _.each obj, (value, index, list) ->
    _.breakLoop() if (result = iterator.call(context, value, index, list))
  result


# Determine if a given value is included in the array or object,
# based on \`===\`.
_.include = (obj, target) ->
  return _.indexOf(obj, target) isnt -1 if nativeIndexOf and obj.indexOf is nativeIndexOf
  return true for own key, val of obj when val is target
  false


# Invoke a method with arguments on every item in a collection.
_.invoke = (obj, method) ->
  args = _.rest arguments, 2
  (if method then val[method] else val).apply(val, args) for val in obj


# Convenience version of a common use case of **map**: fetching a property.
_.pluck = (obj, key) ->
  _.map(obj, (val) -> val[key])


# Return the maximum item or (item-based computation).
_.max = (obj, iterator, context) ->
  return Math.max.apply(Math, obj) if not iterator and _.isArray(obj)
  result = computed: -Infinity
  _.each obj, (value, index, list) ->
    computed = if iterator then iterator.call(context, value, index, list) else value
    computed >= result.computed and (result = {value: value, computed: computed})
  result.value


# Return the minimum element (or element-based computation).
_.min = (obj, iterator, context) ->
  return Math.min.apply(Math, obj) if not iterator and _.isArray(obj)
  result = computed: Infinity
  _.each obj, (value, index, list) ->
    computed = if iterator then iterator.call(context, value, index, list) else value
    computed < result.computed and (result = {value: value, computed: computed})
  result.value


# Sort the object's values by a criterion produced by an iterator.
_.sortBy = (obj, iterator, context) ->
  _.pluck(((_.map obj, (value, index, list) ->
    {value: value, criteria: iterator.call(context, value, index, list)}
  ).sort((left, right) ->
    a = left.criteria; b = right.criteria
    if a < b then -1 else if a > b then 1 else 0
  )), 'value')


# Use a comparator function to figure out at what index an object should
# be inserted so as to maintain order. Uses binary search.
_.sortedIndex = (array, obj, iterator) ->
  iterator ||= _.identity
  low = 0
  high = array.length
  while low < high
    mid = (low + high) >> 1
    if iterator(array[mid]) < iterator(obj) then low = mid + 1 else high = mid
  low


# Convert anything iterable into a real, live array.
_.toArray = (iterable) ->
  return [] if (!iterable)
  return iterable.toArray() if (iterable.toArray)
  return iterable if (_.isArray(iterable))
  return slice.call(iterable) if (_.isArguments(iterable))
  _.values(iterable)


# Return the number of elements in an object.
_.size = (obj) -> _.toArray(obj).length


# Array Functions
# ---------------

# Get the first element of an array. Passing \`n\` will return the first N
# values in the array. Aliased as **head**. The \`guard\` check allows it to work
# with **map**.
_.first = (array, n, guard) ->
  if n and not guard then slice.call(array, 0, n) else array[0]


# Returns everything but the first entry of the array. Aliased as **tail**.
# Especially useful on the arguments object. Passing an \`index\` will return
# the rest of the values in the array from that index onward. The \`guard\`
# check allows it to work with **map**.
_.rest = (array, index, guard) ->
  slice.call(array, if _.isUndefined(index) or guard then 1 else index)


# Get the last element of an array.
_.last = (array) -> array[array.length - 1]


# Trim out all falsy values from an array.
_.compact = (array) -> item for item in array when item


# Return a completely flattened version of an array.
_.flatten = (array) ->
  _.reduce array, (memo, value) ->
    return memo.concat(_.flatten(value)) if _.isArray value
    memo.push value
    memo
  , []


# Return a version of the array that does not contain the specified value(s).
_.without = (array) ->
  values = _.rest arguments
  val for val in _.toArray(array) when not _.include values, val


# Produce a duplicate-free version of the array. If the array has already
# been sorted, you have the option of using a faster algorithm.
_.uniq = (array, isSorted) ->
  memo = []
  for el, i in _.toArray array
    memo.push el if i is 0 || (if isSorted is true then _.last(memo) isnt el else not _.include(memo, el))
  memo


# Produce an array that contains every item shared between all the
# passed-in arrays.
_.intersect = (array) ->
  rest = _.rest arguments
  _.select _.uniq(array), (item) ->
    _.all rest, (other) ->
      _.indexOf(other, item) >= 0


# Zip together multiple lists into a single array -- elements that share
# an index go together.
_.zip = ->
  length = _.max _.pluck arguments, 'length'
  results = new Array length
  for i in [0...length]
    results[i] = _.pluck arguments, String i
  results


# If the browser doesn't supply us with **indexOf** (I'm looking at you, MSIE),
# we need this function. Return the position of the first occurrence of an
# item in an array, or -1 if the item is not included in the array.
_.indexOf = (array, item) ->
  return array.indexOf item if nativeIndexOf and array.indexOf is nativeIndexOf
  i = 0; l = array.length
  while l - i
    if array[i] is item then return i else i++
  -1


# Provide JavaScript 1.6's **lastIndexOf**, delegating to the native function,
# if possible.
_.lastIndexOf = (array, item) ->
  return array.lastIndexOf(item) if nativeLastIndexOf and array.lastIndexOf is nativeLastIndexOf
  i = array.length
  while i
    if array[i] is item then return i else i--
  -1


# Generate an integer Array containing an arithmetic progression. A port of
# [the native Python **range** function](http://docs.python.org/library/functions.html#range).
_.range = (start, stop, step) ->
  a = arguments
  solo = a.length <= 1
  i = start = if solo then 0 else a[0]
  stop = if solo then a[0] else a[1]
  step = a[2] or 1
  len = Math.ceil((stop - start) / step)
  return [] if len <= 0
  range = new Array len
  idx = 0
  loop
    return range if (if step > 0 then i - stop else stop - i) >= 0
    range[idx] = i
    idx++
    i+= step


# Function Functions
# ------------------

# Create a function bound to a given object (assigning \`this\`, and arguments,
# optionally). Binding with arguments is also known as **curry**.
_.bind = (func, obj) ->
  args = _.rest arguments, 2
  -> func.apply obj or root, args.concat arguments


# Bind all of an object's methods to that object. Useful for ensuring that
# all callbacks defined on an object belong to it.
_.bindAll = (obj) ->
  funcs = if arguments.length > 1 then _.rest(arguments) else _.functions(obj)
  _.each funcs, (f) -> obj[f] = _.bind obj[f], obj
  obj


# Delays a function for the given number of milliseconds, and then calls
# it with the arguments supplied.
_.delay = (func, wait) ->
  args = _.rest arguments, 2
  setTimeout((-> func.apply(func, args)), wait)


# Memoize an expensive function by storing its results.
_.memoize = (func, hasher) ->
  memo = {}
  hasher or= _.identity
  ->
    key = hasher.apply this, arguments
    return memo[key] if key of memo
    memo[key] = func.apply this, arguments


# Defers a function, scheduling it to run after the current call stack has
# cleared.
_.defer = (func) ->
  _.delay.apply _, [func, 1].concat _.rest arguments


# Returns the first function passed as an argument to the second,
# allowing you to adjust arguments, run code before and after, and
# conditionally execute the original function.
_.wrap = (func, wrapper) ->
  -> wrapper.apply wrapper, [func].concat arguments


# Returns a function that is the composition of a list of functions, each
# consuming the return value of the function that follows.
_.compose = ->
  funcs = arguments
  ->
    args = arguments
    for i in [funcs.length - 1..0] by -1
      args = [funcs[i].apply(this, args)]
    args[0]


# Object Functions
# ----------------

# Retrieve the names of an object's properties.
_.keys = nativeKeys or (obj) ->
  return _.range 0, obj.length if _.isArray(obj)
  key for key, val of obj


# Retrieve the values of an object's properties.
_.values = (obj) ->
  _.map obj, _.identity


# Return a sorted list of the function names available in Underscore.
_.functions = (obj) ->
  _.filter(_.keys(obj), (key) -> _.isFunction(obj[key])).sort()


# Extend a given object with all of the properties in a source object.
_.extend = (obj) ->
  for source in _.rest(arguments)
    obj[key] = val for key, val of source
  obj


# Create a (shallow-cloned) duplicate of an object.
_.clone = (obj) ->
  return obj.slice 0 if _.isArray obj
  _.extend {}, obj


# Invokes interceptor with the obj, and then returns obj.
# The primary purpose of this method is to "tap into" a method chain,
# in order to perform operations on intermediate results within
 the chain.
_.tap = (obj, interceptor) ->
  interceptor obj
  obj


# Perform a deep comparison to check if two objects are equal.
_.isEqual = (a, b) ->
  # Check object identity.
  return true if a is b
  # Different types?
  atype = typeof(a); btype = typeof(b)
  return false if atype isnt btype
  # Basic equality test (watch out for coercions).
  return true if \`a == b\`
  # One is falsy and the other truthy.
  return false if (!a and b) or (a and !b)
  # One of them implements an \`isEqual()\`?
  return a.isEqual(b) if a.isEqual
  # Check dates' integer values.
  return a.getTime() is b.getTime() if _.isDate(a) and _.isDate(b)
  # Both are NaN?
  return false if _.isNaN(a) and _.isNaN(b)
  # Compare regular expressions.
  if _.isRegExp(a) and _.isRegExp(b)
    return a.source is b.source and
           a.global is b.global and
           a.ignoreCase is b.ignoreCase and
           a.multiline is b.multiline
  # If a is not an object by this point, we can't handle it.
  return false if atype isnt 'object'
  # Check for different array lengths before comparing contents.
  return false if a.length and (a.length isnt b.length)
  # Nothing else worked, deep compare the contents.
  aKeys = _.keys(a); bKeys = _.keys(b)
  # Different object sizes?
  return false if aKeys.length isnt bKeys.length
  # Recursive comparison of contents.
  return false for key, val of a when !(key of b) or !_.isEqual(val, b[key])
  true


# Is a given array or object empty?
_.isEmpty = (obj) ->
  return obj.length is 0 if _.isArray(obj) or _.isString(obj)
  return false for own key of obj
  true


# Is a given value a DOM element?
_.isElement = (obj) -> obj and obj.nodeType is 1


# Is a given value an array?
_.isArray = nativeIsArray or (obj) -> !!(obj and obj.concat and obj.unshift and not obj.callee)


# Is a given variable an arguments object?
_.isArguments = (obj) -> obj and obj.callee


# Is the given value a function?
_.isFunction = (obj) -> !!(obj and obj.constructor and obj.call and obj.apply)


# Is the given value a string?
_.isString = (obj) -> !!(obj is '' or (obj and obj.charCodeAt and obj.substr))


# Is a given value a number?
_.isNumber = (obj) -> (obj is +obj) or toString.call(obj) is '[object Number]'


# Is a given value a boolean?
_.isBoolean = (obj) -> obj is true or obj is false


# Is a given value a Date?
_.isDate = (obj) -> !!(obj and obj.getTimezoneOffset and obj.setUTCFullYear)


# Is the given value a regular expression?
_.isRegExp = (obj) -> !!(obj and obj.exec and (obj.ignoreCase or obj.ignoreCase is false))


# Is the given value NaN -- this one is interesting. \`NaN != NaN\`, and
# \`isNaN(undefined) == true\`, so we make sure it's a number first.
_.isNaN = (obj) -> _.isNumber(obj) and window.isNaN(obj)


# Is a given value equal to null?
_.isNull = (obj) -> obj is null


# Is a given variable undefined?
_.isUndefined = (obj) -> typeof obj is 'undefined'


# Utility Functions
# -----------------

# Run Underscore.js in noConflict mode, returning the \`_\` variable to its
# previous owner. Returns a reference to the Underscore object.
_.noConflict = ->
  root._ = previousUnderscore
  this


# Keep the identity function around for default iterators.
_.identity = (value) -> value


# Run a function \`n\` times.
_.times = (n, iterator, context) ->
  iterator.call context, i for i in [0...n]


# Break out of the middle of an iteration.
_.breakLoop = -> throw breaker


# Add your own custom functions to the Underscore object, ensuring that
# they're correctly added to the OOP wrapper as well.
_.mixin = (obj) ->
  for name in _.functions(obj)
    addToWrapper name, _[name] = obj[name]


# Generate a unique integer id (unique within the entire client session).
# Useful for temporary DOM ids.
idCounter = 0
_.uniqueId = (prefix) ->
  (prefix or '') + idCounter++


# By default, Underscore uses **ERB**-style template delimiters, change the
# following template settings to use alternative delimiters.
_.templateSettings = {
  start: '<%'
  end: '%>'
  interpolate: /<%=(.+?)%>/g
}


# JavaScript templating a-la **ERB**, pilfered from John Resig's
# *Secrets of the JavaScript Ninja*, page 83.
# Single-quote fix from Rick Strahl.
# With alterations for arbitrary delimiters, and to preserve whitespace.
_.template = (str, data) ->
  c = _.templateSettings
  endMatch = new RegExp("'(?=[^"+c.end.substr(0, 1)+"]*"+escapeRegExp(c.end)+")","g")
  fn = new Function 'obj',
    'var p=[],print=function(){p.push.apply(p,arguments);};' +
    'with(obj||{}){p.push(\\'' +
    str.replace(/\\r/g, '\\\\r')
       .replace(/\\n/g, '\\\\n')
       .replace(/\\t/g, '\\\\t')
       .replace(endMatch,"\uFFFD\uFFFD\uFFFD")
       .split("'").join("\\\\'")
       .split("\uFFFD\uFFFD\uFFFD").join("'")
       .replace(c.interpolate, "',$1,'")
       .split(c.start).join("');")
       .split(c.end).join("p.push('") +
       "');}return p.join('');"
  if data then fn(data) else fn


# Aliases
# -------

_.forEach = _.each
_.foldl = _.inject = _.reduce
_.foldr = _.reduceRight
_.select = _.filter
_.all = _.every
_.any = _.some
_.contains = _.include
_.head = _.first
_.tail = _.rest
_.methods = _.functions


# Setup the OOP Wrapper
# ---------------------

# If Underscore is called as a function, it returns a wrapped object that
# can be used OO-style. This wrapper holds altered versions of all the
# underscore functions. Wrapped objects may be chained.
wrapper = (obj) ->
  this._wrapped = obj
  this


# Helper function to continue chaining intermediate results.
result = (obj, chain) ->
  if chain then _(obj).chain() else obj


# A method to easily add functions to the OOP wrapper.
addToWrapper = (name, func) ->
  wrapper.prototype[name] = ->
    args = _.toArray arguments
    unshift.call args, this._wrapped
    result func.apply(_, args), this._chain


# Add all ofthe Underscore functions to the wrapper object.
_.mixin _


# Add all mutator Array functions to the wrapper.
_.each ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], (name) ->
  method = Array.prototype[name]
  wrapper.prototype[name] = ->
    method.apply(this._wrapped, arguments)
    result(this._wrapped, this._chain)


# Add all accessor Array functions to the wrapper.
_.each ['concat', 'join', 'slice'], (name) ->
  method = Array.prototype[name]
  wrapper.prototype[name] = ->
    result(method.apply(this._wrapped, arguments), this._chain)


# Start chaining a wrapped Underscore object.
wrapper::chain = ->
  this._chain = true
  this


# Extracts the result from a wrapped and chained object.
wrapper::value = -> this._wrapped
`,"./codes/cpp.cpp":`#include "pch.h"
#include "Direct3DBase.h"

using namespace Microsoft::WRL;
using namespace Windows::UI::Core;
using namespace Windows::Foundation;

// Constructor.
Direct3DBase::Direct3DBase()
{
}

// Initialize the Direct3D resources required to run.
void Direct3DBase::Initialize(CoreWindow^ window)
{
    m_window = window;
    
    CreateDeviceResources();
    CreateWindowSizeDependentResources();
}

// These are the resources that depend on the device.
void Direct3DBase::CreateDeviceResources()
{
    // This flag adds support for surfaces with a different color channel ordering than the API default.
    // It is recommended usage, and is required for compatibility with Direct2D.
    UINT creationFlags = D3D11_CREATE_DEVICE_BGRA_SUPPORT;

#if defined(_DEBUG)
    // If the project is in a debug build, enable debugging via SDK Layers with this flag.
    creationFlags |= D3D11_CREATE_DEVICE_DEBUG;
#endif

    // This array defines the set of DirectX hardware feature levels this app will support.
    // Note the ordering should be preserved.
    // Don't forget to declare your application's minimum required feature level in its
    // description.  All applications are assumed to support 9.1 unless otherwise stated.
    D3D_FEATURE_LEVEL featureLevels[] = 
    {
        D3D_FEATURE_LEVEL_11_1,
        D3D_FEATURE_LEVEL_11_0,
        D3D_FEATURE_LEVEL_10_1,
        D3D_FEATURE_LEVEL_10_0,
        D3D_FEATURE_LEVEL_9_3,
        D3D_FEATURE_LEVEL_9_2,
        D3D_FEATURE_LEVEL_9_1
    };

    // Create the DX11 API device object, and get a corresponding context.
    ComPtr<ID3D11Device> device;
    ComPtr<ID3D11DeviceContext> context;
    DX::ThrowIfFailed(
        D3D11CreateDevice(
            nullptr,                    // specify null to use the default adapter
            D3D_DRIVER_TYPE_HARDWARE,
            nullptr,                    // leave as nullptr unless software device
            creationFlags,              // optionally set debug and Direct2D compatibility flags
            featureLevels,              // list of feature levels this app can support
            ARRAYSIZE(featureLevels),   // number of entries in above list
            D3D11_SDK_VERSION,          // always set this to D3D11_SDK_VERSION
            &device,                    // returns the Direct3D device created
            &m_featureLevel,            // returns feature level of device created
            &context                    // returns the device immediate context
            )
        );

    // Get the DirectX11.1 device by QI off the DirectX11 one.
    DX::ThrowIfFailed(
        device.As(&m_d3dDevice)
        );

    // And get the corresponding device context in the same way.
    DX::ThrowIfFailed(
        context.As(&m_d3dContext)
        );
}

// Allocate all memory resources that change on a window SizeChanged event.
void Direct3DBase::CreateWindowSizeDependentResources()
{ 
    // Store the window bounds so the next time we get a SizeChanged event we can
    // avoid rebuilding everything if the size is identical.
    m_windowBounds = m_window->Bounds;

    // If the swap chain already exists, resize it.
    if(m_swapChain != nullptr)
    {
        DX::ThrowIfFailed(
            m_swapChain->ResizeBuffers(2, 0, 0, DXGI_FORMAT_B8G8R8A8_UNORM, 0)
            );
    }
    // Otherwise, create a new one.
    else
    {
        // Create a descriptor for the swap chain.
        DXGI_SWAP_CHAIN_DESC1 swapChainDesc = {0};
        swapChainDesc.Width = 0;                                     // use automatic sizing
        swapChainDesc.Height = 0;
        swapChainDesc.Format = DXGI_FORMAT_B8G8R8A8_UNORM;           // this is the most common swapchain format
        swapChainDesc.Stereo = false; 
        swapChainDesc.SampleDesc.Count = 1;                          // don't use multi-sampling
        swapChainDesc.SampleDesc.Quality = 0;
        swapChainDesc.BufferUsage = DXGI_USAGE_RENDER_TARGET_OUTPUT;
        swapChainDesc.BufferCount = 2;                               // use two buffers to enable flip effect
        swapChainDesc.Scaling = DXGI_SCALING_NONE;
        swapChainDesc.SwapEffect = DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL; // we recommend using this swap effect for all applications
        swapChainDesc.Flags = 0;

        // Once the desired swap chain description is configured, it must be created on the same adapter as our D3D Device

        // First, retrieve the underlying DXGI Device from the D3D Device
        ComPtr<IDXGIDevice1>  dxgiDevice;
        DX::ThrowIfFailed(
            m_d3dDevice.As(&dxgiDevice)
            );

        // Identify the physical adapter (GPU or card) this device is running on.
        ComPtr<IDXGIAdapter> dxgiAdapter;
        DX::ThrowIfFailed(
            dxgiDevice->GetAdapter(&dxgiAdapter)
            );

        // And obtain the factory object that created it.
        ComPtr<IDXGIFactory2> dxgiFactory;
        DX::ThrowIfFailed(
            dxgiAdapter->GetParent(
                __uuidof(IDXGIFactory2), 
                &dxgiFactory
                )
            );

    Windows::UI::Core::CoreWindow^ p = m_window.Get();

        // Create a swap chain for this window from the DXGI factory.
        DX::ThrowIfFailed(
            dxgiFactory->CreateSwapChainForCoreWindow(
                m_d3dDevice.Get(),
                reinterpret_cast<IUnknown*>(p),
                &swapChainDesc,
                nullptr,    // allow on all displays
                &m_swapChain
                )
            );
            
        // Ensure that DXGI does not queue more than one frame at a time. This both reduces 
        // latency and ensures that the application will only render after each VSync, minimizing 
        // power consumption.
        DX::ThrowIfFailed(
            dxgiDevice->SetMaximumFrameLatency(1)
            );
    }
    
    // Obtain the backbuffer for this window which will be the final 3D rendertarget.
    ComPtr<ID3D11Texture2D> backBuffer;
    DX::ThrowIfFailed(
        m_swapChain->GetBuffer(
            0,
            __uuidof(ID3D11Texture2D),
            &backBuffer
            )
        );

    // Create a view interface on the rendertarget to use on bind.
    DX::ThrowIfFailed(
        m_d3dDevice->CreateRenderTargetView(
            backBuffer.Get(),
            nullptr,
            &m_renderTargetView
            )
        );

    // Cache the rendertarget dimensions in our helper class for convenient use.
    D3D11_TEXTURE2D_DESC backBufferDesc;
    backBuffer->GetDesc(&backBufferDesc);
    m_renderTargetSize.Width  = static_cast<float>(backBufferDesc.Width);
    m_renderTargetSize.Height = static_cast<float>(backBufferDesc.Height);

    // Create a descriptor for the depth/stencil buffer.
    CD3D11_TEXTURE2D_DESC depthStencilDesc(
        DXGI_FORMAT_D24_UNORM_S8_UINT, 
        backBufferDesc.Width,
        backBufferDesc.Height,
        1,
        1,
        D3D11_BIND_DEPTH_STENCIL);

    // Allocate a 2-D surface as the depth/stencil buffer.
    ComPtr<ID3D11Texture2D> depthStencil;
    DX::ThrowIfFailed(
        m_d3dDevice->CreateTexture2D(
            &depthStencilDesc,
            nullptr,
            &depthStencil
            )
        );

    // Create a DepthStencil view on this surface to use on bind.
    DX::ThrowIfFailed(
        m_d3dDevice->CreateDepthStencilView(
            depthStencil.Get(),
            &CD3D11_DEPTH_STENCIL_VIEW_DESC(D3D11_DSV_DIMENSION_TEXTURE2D),
            &m_depthStencilView
            )
        );

    // Create a viewport descriptor of the full window size.
    CD3D11_VIEWPORT viewPort(
        0.0f,
        0.0f,
        static_cast<float>(backBufferDesc.Width),
        static_cast<float>(backBufferDesc.Height)
        );
        
    // Set the current viewport using the descriptor.
    m_d3dContext->RSSetViewports(1, &viewPort);
}

void Direct3DBase::UpdateForWindowSizeChange()
{
    if (m_window->Bounds.Width  != m_windowBounds.Width ||
        m_window->Bounds.Height != m_windowBounds.Height)
    {
        m_renderTargetView = nullptr;
        m_depthStencilView = nullptr;
        CreateWindowSizeDependentResources();
    }
}

void Direct3DBase::Present()
{
    // The first argument instructs DXGI to block until VSync, putting the application
    // to sleep until the next VSync. This ensures we don't waste any cycles rendering
    // frames that will never be displayed to the screen.
    HRESULT hr = m_swapChain->Present(1, 0);

    // If the device was removed either by a disconnect or a driver upgrade, we 
    // must completely reinitialize the renderer.
    if (hr == DXGI_ERROR_DEVICE_REMOVED || hr == DXGI_ERROR_DEVICE_RESET)
    {
        Initialize(m_window.Get());
    }
    else
    {
        DX::ThrowIfFailed(hr);
    }
}
`,"./codes/css.css":`/* Some example CSS */

@import url('something.css');

body {
  margin: 0;
  padding: 3em 6em;
  font-family: tahoma, arial, sans-serif;
  color: #000;
}

#navigation a {
  font-weight: bold;
  text-decoration: none !important;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 1.7em;
}

h1:before,
h2:before {
  content: '::';
}

code {
  font-family: courier, monospace;
  font-size: 80%;
  color: #418a8a;
}
`,"./codes/dockerfile":`# Install Ghost blogging platform and run development environment
#
# VERSION 1.0.0

FROM ubuntu:12.10
MAINTAINER Amer Grgic "amer@livebyt.es"
WORKDIR /data/ghost

# Install dependencies for nginx installation
RUN apt-get update
RUN apt-get install -y python g++ make software-properties-common --force-yes
RUN add-apt-repository ppa:chris-lea/node.js
RUN apt-get update
# Install unzip
RUN apt-get install -y unzip
# Install curl
RUN apt-get install -y curl
# Install nodejs & npm
RUN apt-get install -y rlwrap
RUN apt-get install -y nodejs 
# Download Ghost v0.4.1
RUN curl -L https://ghost.org/zip/ghost-latest.zip -o /tmp/ghost.zip
# Unzip Ghost zip to /data/ghost
RUN unzip -uo /tmp/ghost.zip -d /data/ghost
# Add custom config js to /data/ghost
ADD ./config.example.js /data/ghost/config.js
# Install Ghost with NPM
RUN cd /data/ghost/ && npm install --production
# Expose port 2368
EXPOSE 2368
# Run Ghost
CMD ["npm","start"]
`,"./codes/erlang.erl":`%% -*- mode: erlang; erlang-indent-level: 2 -*-
%%% Created :  7 May 2012 by mats cronqvist <masse@klarna.com>

%% @doc
%% Demonstrates how to print a record.
%% @end

-module('ex').
-author('mats cronqvist').
-export([demo/0,
         rec_info/1]).

-record(demo,{a="One",b="Two",c="Three",d="Four"}).

rec_info(demo) -> record_info(fields,demo).

demo() -> expand_recs(?MODULE,#demo{a="A",b="BB"}).

expand_recs(M,List) when is_list(List) ->
  [expand_recs(M,L)||L<-List];
expand_recs(M,Tup) when is_tuple(Tup) ->
  case tuple_size(Tup) of
    L when L < 1 -> Tup;
    L ->
      try
        Fields = M:rec_info(element(1,Tup)),
        L = length(Fields)+1,
        lists:zip(Fields,expand_recs(M,tl(tuple_to_list(Tup))))
      catch
        _:_ -> list_to_tuple(expand_recs(M,tuple_to_list(Tup)))
      end
  end;
expand_recs(_,Term) ->
  Term.

`,"./codes/go.go":`package main
import (
	"fmt"
	"errors"
	"strings"
)
type Value struct {
	Name string
	MilesAway int
}
type Node struct {
	Value				// Embedded struct
	next, prev  *Node
}
type List struct {
	head, tail *Node
}
func (l *List) First() *Node {
	return l.head
}
func (n *Node) Next() *Node {
	return n.next
}
func (n *Node) Prev() *Node {
	return n.prev
}
// Create new node with value
func (l *List) Push(v Value) *List {
	n := &Node{Value: v}
	if l.head == nil {
		l.head = n		// First node
	} else {
		l.tail.next = n	// Add after prev last node
		n.prev = l.tail // Link back to prev last node
	}
	l.tail = n  		// reset tail to newly added node
	return l
}
func (l *List) Find(name string) *Node {
	found := false
	var ret *Node = nil
	for n := l.First(); n != nil && !found; n = n.Next() {
		if n.Value.Name == name {
			found = true
			ret = n
		}
	}
	return ret
}
func (l *List) Delete(name string) bool {
	success := false
	node2del := l.Find(name)
	if node2del != nil {
		fmt.Println("Delete - FOUND: ", name)
		prev_node := node2del.prev
		next_node := node2del.next
		// Remove this node
		prev_node.next = node2del.next
		next_node.prev = node2del.prev
		success = true
	}
	return success
}
var errEmpty = errors.New("ERROR - List is empty")
// Pop last item from list
func (l *List) Pop() (v Value, err error) {
	if l.tail == nil {
		err = errEmpty
	} else {
		v = l.tail.Value
		l.tail = l.tail.prev
		if l.tail == nil {
			l.head = nil
		}
	}
	return v, err
}

func main() {
	dashes := strings.Repeat("-", 50)
	l := new(List)  // Create Doubly Linked List

	l.Push(Value{Name: "Atlanta", MilesAway: 0})
	l.Push(Value{Name: "Las Vegas", MilesAway: 1961})
	l.Push(Value{Name: "New York", MilesAway: 881})

	processed := make(map[*Node]bool)

	fmt.Println("First time through list...")
	for n := l.First(); n != nil; n = n.Next() {
		fmt.Printf("%v\\n", n.Value)
		if processed[n] {
			fmt.Printf("%s as been processed\\n", n.Value)
		}
		processed[n] = true
	}
	fmt.Println(dashes)
	fmt.Println("Second time through list...")
	for n := l.First(); n != nil; n = n.Next() {
		fmt.Printf("%v", n.Value)
		if processed[n] {
			fmt.Println(" has been processed")
		} else { fmt.Println() }
		processed[n] = true
	}

	fmt.Println(dashes)
	var found_node *Node
	city_to_find := "New York"
	found_node = l.Find(city_to_find)
	if found_node == nil {
		fmt.Printf("NOT FOUND: %v\\n", city_to_find)
	} else {
		fmt.Printf("FOUND: %v\\n", city_to_find)
	}

	city_to_find = "Chicago"
	found_node = l.Find(city_to_find)
	if found_node == nil {
		fmt.Printf("NOT FOUND: %v\\n", city_to_find)
	} else {
		fmt.Printf("FOUND: %v\\n", city_to_find)
	}

	fmt.Println(dashes)
	city_to_remove := "Las Vegas"
	successfully_removed_city := l.Delete(city_to_remove)
	if successfully_removed_city {
		fmt.Printf("REMOVED: %v\\n", city_to_remove)
	} else {
		fmt.Printf("DID NOT REMOVE: %v\\n", city_to_remove)
	}

	city_to_remove = "Chicago"
	successfully_removed_city = l.Delete(city_to_remove)
	if successfully_removed_city {
		fmt.Printf("REMOVED: %v\\n", city_to_remove)
	} else {
		fmt.Printf("DID NOT REMOVE: %v\\n", city_to_remove)
	}

	fmt.Println(dashes)
	fmt.Println("* Pop each value off list...")
	for v, err := l.Pop(); err == nil; v, err = l.Pop() {
		fmt.Printf("%v\\n", v)
	}
	fmt.Println(l.Pop())  // Generate error - attempt to pop from empty list
}`,"./codes/html.html":`<html style="color: green">
  <!-- this is a comment -->
  <head>
    <title>Mixed HTML Example</title>
    <style>
      h1 {
        font-family: comic sans;
        color: #f0f;
      }
      div {
        background: yellow !important;
      }
      body {
        max-width: 50em;
        margin: 1em 2em 1em 5em;
      }
    </style>
  </head>
  <body>
    <h1>Mixed HTML Example</h1>
    <script>
      function jsFunc(arg1, arg2) {
        if (arg1 && arg2) document.body.innerHTML = 'achoo'
      }
    <\/script>
  </body>
</html>
`,"./codes/java.java":`/*
  Basic Java example using FizzBuzz
*/

import java.util.Random;

public class Example {
  public static void main (String[] args){
    // Generate a random number between 1-100. (See generateRandomNumber method.)
    int random = generateRandomNumber(100);

    // Output generated number.
    System.out.println("Generated number: " + random + "\\n");

    // Loop between 1 and the number we just generated.
    for (int i=1; i<=random; i++){
      // If i is divisible by both 3 and 5, output "FizzBuzz".
      if (i % 3 == 0 && i % 5 == 0){
        System.out.println("FizzBuzz");
      }
      // If i is divisible by 3, output "Fizz"
      else if (i % 3 == 0){
        System.out.println("Fizz");
      }
      // If i is divisible by 5, output "Buzz".
      else if (i % 5 == 0){
        System.out.println("Buzz");
      }
      // If i is not divisible by either 3 or 5, output the number.
      else {
        System.out.println(i);
      }
    }
  }

  /**
    Generates a new random number between 0 and 100.
    @param bound The highest number that should be generated.
    @return An integer representing a randomly generated number between 0 and 100.
  */
  private static int generateRandomNumber(int bound){
    // Create new Random generator object and generate the random number.
    Random randGen = new Random();
    int randomNum = randGen.nextInt(bound);

    // If the random number generated is zero, use recursion to regenerate the number until it is not zero.
    if (randomNum < 1){
      randomNum = generateRandomNumber(bound);
    }

    return randomNum;
  }
}
 `,"./codes/javascript.js":`// Demo code (the actual new parser character stream implementation)

function StringStream(string) {
  this.pos = 0
  this.string = string
}

StringStream.prototype = {
  done: function () {
    return this.pos >= this.string.length
  },
  peek: function () {
    return this.string.charAt(this.pos)
  },
  next: function () {
    if (this.pos < this.string.length) return this.string.charAt(this.pos++)
  },
  eat: function (match) {
    var ch = this.string.charAt(this.pos)
    if (typeof match == 'string') var ok = ch == match
    else var ok = ch && match.test ? match.test(ch) : match(ch)
    if (ok) {
      this.pos++
      return ch
    }
  },
  eatWhile: function (match) {
    var start = this.pos
    while (this.eat(match));
    if (this.pos > start) return this.string.slice(start, this.pos)
  },
  backUp: function (n) {
    this.pos -= n
  },
  column: function () {
    return this.pos
  },
  eatSpace: function () {
    var start = this.pos
    while (/\\s/.test(this.string.charAt(this.pos))) this.pos++
    return this.pos - start
  },
  match: function (pattern, consume, caseInsensitive) {
    if (typeof pattern == 'string') {
      function cased(str) {
        return caseInsensitive ? str.toLowerCase() : str
      }
      if (cased(this.string).indexOf(cased(pattern), this.pos) == this.pos) {
        if (consume !== false) this.pos += str.length
        return true
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern)
      if (match && consume !== false) this.pos += match[0].length
      return match
    }
  }
}
`,"./codes/json.json":`{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`,"./codes/jsx.jsx":`// Code snippets from http://facebook.github.io/react/docs/jsx-in-depth.html

// Rendering HTML tags
var myDivElement = <div className="foo" />
ReactDOM.render(myDivElement, document.getElementById('example'))

// Rendering React components
var MyComponent = React.createClass({
  /*...*/
})
var myElement = <MyComponent someProperty={true} />
ReactDOM.render(myElement, document.getElementById('example'))

// Namespaced components
var Form = MyFormComponent

var App = (
  <Form>
    <Form.Row>
      <Form.Label />
      <Form.Input />
    </Form.Row>
  </Form>
)

// Attribute JavaScript expressions
var person = <Person name={window.isLoggedIn ? window.name : ''} />

// Boolean attributes
;<input type="button" disabled />
;<input type="button" disabled={true} />

// Child JavaScript expressions
var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>

// Comments
var content = (
  <Nav>
    {/* child comment, put {} around */}
    <Person
      /* multi
         line
         comment */
      name={window.isLoggedIn ? window.name : ''} // end of line comment
    />
  </Nav>
)
`,"./codes/julia.jl":`#numbers
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
# a = x\\ddot
a\u20D7 = x\u0308
# a = v\\dot
a\u20D7 = v\u0307
#F\\vec = m \\cdotp a\\vec
F\u20D7 = m\xB7a\u20D7

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
\\-
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
\\
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
\\=
\\\\=
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


    `,"./codes/lua.lua":`Set = {}

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
print(s1 == s2 * s1)  --> true`,"./codes/markdown.md":`# Markdown: Basics

<ul id="ProjectSubmenu">
    <li><a href="/projects/markdown/" title="Markdown Project Page">Main</a></li>
    <li><a class="selected" title="Markdown Basics">Basics</a></li>
    <li><a href="/projects/markdown/syntax" title="Markdown Syntax Documentation">Syntax</a></li>
    <li><a href="/projects/markdown/license" title="Pricing and License Information">License</a></li>
    <li><a href="/projects/markdown/dingus" title="Online Markdown Web Form">Dingus</a></li>
</ul>

## Getting the Gist of Markdown's Formatting Syntax

This page offers a brief overview of what it's like to use Markdown.
The [syntax page] [s] provides complete, detailed documentation for
every feature, but Markdown should be very easy to pick up simply by
looking at a few examples of it in action. The examples on this page
are written in a before/after style, showing example syntax and the
HTML output produced by Markdown.

It's also helpful to simply try Markdown out; the [Dingus] [d] is a
web application that allows you type your own Markdown-formatted text
and translate it to XHTML.

**Note:** This document is itself written using Markdown; you
can [see the source for it by adding '.text' to the URL] [src].

[s]: /projects/markdown/syntax 'Markdown Syntax'
[d]: /projects/markdown/dingus 'Markdown Dingus'
[src]: /projects/markdown/basics.text

## Paragraphs, Headers, Blockquotes

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like
a blank line -- a line containing nothing but spaces or tabs is
considered blank.) Normal paragraphs should not be indented with
spaces or tabs.

Markdown offers two styles of headers: _Setext_ and _atx_.
Setext-style headers for \`<h1>\` and \`<h2>\` are created by
"underlining" with equal signs (\`=\`) and hyphens (\`-\`), respectively.
To create an atx-style header, you put 1-6 hash marks (\`#\`) at the
beginning of the line -- the number of hashes equals the resulting
HTML header level.

Blockquotes are indicated using email-style '\`>\`' angle brackets.

Markdown:

# A First Level Header

## A Second Level Header

Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.

### Header 3

> This is a blockquote.
>
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote

Output:

<h1>A First Level Header</h1>

<h2>A Second Level Header</h2>

<p>Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.</p>

<p>The quick brown fox jumped over the lazy
dog's back.</p>

<h3>Header 3</h3>

<blockquote>
    <p>This is a blockquote.</p>

    <p>This is the second paragraph in the blockquote.</p>

    <h2>This is an H2 in a blockquote</h2>

</blockquote>

### Phrase Emphasis

Markdown uses asterisks and underscores to indicate spans of emphasis.

Markdown:

Some of these words _are emphasized_.
Some of these words _are emphasized also_.

Use two asterisks for **strong emphasis**.
Or, if you prefer, **use two underscores instead**.

Output:

<p>Some of these words <em>are emphasized</em>.
Some of these words <em>are emphasized also</em>.</p>

<p>Use two asterisks for <strong>strong emphasis</strong>.
Or, if you prefer, <strong>use two underscores instead</strong>.</p>

## Lists

Unordered (bulleted) lists use asterisks, pluses, and hyphens (\`*\`,
\`+\`, and \`-\`) as list markers. These three markers are
interchangeable; this:

- Candy.
- Gum.
- Booze.

this:

- Candy.
- Gum.
- Booze.

and this:

- Candy.
- Gum.
- Booze.

all produce the same output:

    <ul>
    <li>Candy.</li>
    <li>Gum.</li>
    <li>Booze.</li>
    </ul>

Ordered (numbered) lists use regular numbers, followed by periods, as
list markers:

1.  Red
2.  Green
3.  Blue

Output:

<ol>
<li>Red</li>
<li>Green</li>
<li>Blue</li>
</ol>

If you put blank lines between items, you'll get \`<p>\` tags for the
list item text. You can create multi-paragraph list items by indenting
the paragraphs by 4 spaces or 1 tab:

- A list item.

  With multiple paragraphs.

- Another item in the list.

Output:

<ul>
<li><p>A list item.</p>
<p>With multiple paragraphs.</p></li>
<li><p>Another item in the list.</p></li>
</ul>

### Links

Markdown supports two styles for creating links: _inline_ and
_reference_. With both styles, you use square brackets to delimit the
text you want to turn into a link.

Inline-style links use parentheses immediately after the link text.
For example:

    This is an [example link](http://example.com/).

Output:

    <p>This is an <a href="http://example.com/">
    example link</a>.</p>

Optionally, you may include a title attribute in the parentheses:

    This is an [example link](http://example.com/ "With a Title").

Output:

    <p>This is an <a href="http://example.com/" title="With a Title">
    example link</a>.</p>

Reference-style links allow you to refer to your links by names, which
you define elsewhere in your document:

    I get 10 times more traffic from [Google][1] than from
    [Yahoo][2] or [MSN][3].

    [1]: http://google.com/        "Google"
    [2]: http://search.yahoo.com/  "Yahoo Search"
    [3]: http://search.msn.com/    "MSN Search"

Output:

    <p>I get 10 times more traffic from <a href="http://google.com/"
    title="Google">Google</a> than from <a href="http://search.yahoo.com/"
    title="Yahoo Search">Yahoo</a> or <a href="http://search.msn.com/"
    title="MSN Search">MSN</a>.</p>

The title attribute is optional. Link names may contain letters,
numbers and spaces, but are _not_ case sensitive:

    I start my morning with a cup of coffee and
    [The New York Times][NY Times].

    [ny times]: http://www.nytimes.com/

Output:

    <p>I start my morning with a cup of coffee and
    <a href="http://www.nytimes.com/">The New York Times</a>.</p>

### Images

Image syntax is very much like link syntax.

Inline (titles are optional):

    ![alt text](/path/to/img.jpg "Title")

Reference-style:

    ![alt text][id]

    [id]: /path/to/img.jpg "Title"

Both of the above examples produce the same output:

    <img src="/path/to/img.jpg" alt="alt text" title="Title" />

### Code

In a regular paragraph, you can create code span by wrapping text in
backtick quotes. Any ampersands (\`&\`) and angle brackets (\`<\` or
\`>\`) will automatically be translated into HTML entities. This makes
it easy to use Markdown to write about HTML example code:

    I strongly recommend against using any \`<blink>\` tags.

    I wish SmartyPants used named entities like \`&mdash;\`
    instead of decimal-encoded entities like \`&#8212;\`.

Output:

    <p>I strongly recommend against using any
    <code>&lt;blink&gt;</code> tags.</p>

    <p>I wish SmartyPants used named entities like
    <code>&amp;mdash;</code> instead of decimal-encoded
    entities like <code>&amp;#8212;</code>.</p>

To specify an entire block of pre-formatted code, indent every line of
the block by 4 spaces or 1 tab. Just like with code spans, \`&\`, \`<\`,
and \`>\` characters will be escaped automatically.

Markdown:

    If you want your page to validate under XHTML 1.0 Strict,
    you've got to put paragraph tags in your blockquotes:

        <blockquote>
            <p>For example.</p>
        </blockquote>

Output:

    <p>If you want your page to validate under XHTML 1.0 Strict,
    you've got to put paragraph tags in your blockquotes:</p>

    <pre><code>&lt;blockquote&gt;
        &lt;p&gt;For example.&lt;/p&gt;
    &lt;/blockquote&gt;
    </code></pre>

## Fenced code blocks (and syntax highlighting)

\`\`\`javascript
for (var i = 0; i < items.length; i++) {
  console.log(items[i], i) // log them
}
\`\`\`
`,"./codes/mysql.sql":`CREATE TABLE shop (
    article INT(4) UNSIGNED ZEROFILL DEFAULT '0000' NOT NULL,
    dealer  CHAR(20)                 DEFAULT ''     NOT NULL,
    price   DOUBLE(16,2)             DEFAULT '0.00' NOT NULL,
    PRIMARY KEY(article, dealer));
INSERT INTO shop VALUES
    (1,'A',3.45),(1,'B',3.99),(2,'A',10.99),(3,'B',1.45),
    (3,'C',1.69),(3,'D',1.25),(4,'D',19.95);`,"./codes/nginx.conf":`server {
  listen 173.255.219.235:80;
  server_name website.com.au;
  rewrite / $scheme://www.$host$request_uri permanent; ## Forcibly prepend a www
}

server {
  listen 173.255.219.235:443;
  server_name website.com.au;
  rewrite / $scheme://www.$host$request_uri permanent; ## Forcibly prepend a www
}

server {

  listen      173.255.219.235:80;
  server_name www.website.com.au;

  root        /data/www;
  index       index.html index.php;

  location / {
    index index.html index.php;     ## Allow a static html file to be shown first
    try_files $uri $uri/ @handler;  ## If missing pass the URI to Magento's front handler
    expires 30d;                    ## Assume all files are cachable
  }

  ## These locations would be hidden by .htaccess normally
  location /app/                { deny all; }
  location /includes/           { deny all; }
  location /lib/                { deny all; }
  location /media/downloadable/ { deny all; }
  location /pkginfo/            { deny all; }
  location /report/config.xml   { deny all; }
  location /var/                { deny all; }

  location /var/export/ { ## Allow admins only to view export folder
    auth_basic           "Restricted"; ## Message shown in login window
    auth_basic_user_file /rs/passwords/testfile; ## See /etc/nginx/htpassword
    autoindex            on;
  }

  location  /. { ## Disable .htaccess and other hidden files
    return 404;
  }

  location @handler { ## Magento uses a common front handler
    rewrite / /index.php;
  }

  location ~ .php/ { ## Forward paths like /js/index.php/x.js to relevant handler
    rewrite ^/(.*.php)/ /$1 last;
  }

  location ~ \\\\.php$ {
    if (!-e $request_filename) { rewrite / /index.php last; } ## Catch 404s that try_files miss

    fastcgi_pass   127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_param PATH_INFO $fastcgi_script_name;
    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include        /rs/confs/nginx/fastcgi_params;
  }
}

server {

  listen              173.255.219.235:443;
  server_name         website.com.au www.website.com.au;

  root   /data/www;
  index index.html index.php;

  ssl                 on;
  ssl_certificate     /rs/ssl/ssl.crt;
  ssl_certificate_key /rs/ssl/ssl.key;

  ssl_session_timeout  5m;

  ssl_protocols  SSLv2 SSLv3 TLSv1;
  ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
  ssl_prefer_server_ciphers   on;

  location / {
    index index.html index.php; ## Allow a static html file to be shown first
    try_files $uri $uri/ @handler; ## If missing pass the URI to Magento's front handler
    expires 30d; ## Assume all files are cachable
  }

  ## These locations would be hidden by .htaccess normally
  location /app/                { deny all; }
  location /includes/           { deny all; }
  location /lib/                { deny all; }
  location /media/downloadable/ { deny all; }
  location /pkginfo/            { deny all; }
  location /report/config.xml   { deny all; }
  location /var/                { deny all; }

  location /var/export/ { ## Allow admins only to view export folder
    auth_basic           "Restricted"; ## Message shown in login window
    auth_basic_user_file htpasswd; ## See /etc/nginx/htpassword
    autoindex            on;
  }

  location  /. { ## Disable .htaccess and other hidden files
    return 404;
  }

  location @handler { ## Magento uses a common front handler
    rewrite / /index.php;
  }

  location ~ .php/ { ## Forward paths like /js/index.php/x.js to relevant handler
    rewrite ^/(.*.php)/ /$1 last;
  }

  location ~ .php$ { ## Execute PHP scripts
    if (!-e $request_filename) { rewrite  /index.php last; } ## Catch 404s that try_files miss

    fastcgi_pass 127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_param PATH_INFO $fastcgi_script_name;
    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include        /rs/confs/nginx/fastcgi_params;

    fastcgi_param HTTPS on;
  }
}
`,"./codes/pascal.pas":`program GreetingsNumberOfTimes;

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
`,"./codes/perl.pl":`#
# One more approach is to use the array/hash conversion rules to
# build keyword parameters, with defaults.
#

use strict;

# Print a string one or more times under all sorts of controls.
sub barko {
    # Check for correct pairing.
    @_ % 2 == 0 or
        die "barko: Odd number of arguments.\\n";

    # Store the parms, with defaults.
    my %parms = ( 'string' => 'snake',  # String to print
                  'between' => '',      # Place between chars.
                  'repeat' => 1,        # Repeat this many times.
                  'cascade' => 0,       # Move each line right this much more.
                  'blankafter' => 1,    # Extra blank line afterwards.
                  @_);
    # Now %parms is a list of keyword => value pairs as sent, using
    # defaults for keys not sent.

    # Add the between to the string.
    my $str = substr($parms{'string'}, 1);
    $str =~ s/(.)/$parms{'between'}$1/g;
    $str = substr($parms{'string'}, 0, 1) . $str;

    # Printin' time!
    my $preamt = 0;
    for(my $n = $parms{'repeat'}; $n--; ) {
        print ((' ' x $preamt), "$str\\n");
        $preamt += $parms{'cascade'};
    }
    print "\\n" if $parms{'blankafter'};
}

# Call with various options.  These can be sent in any order.
barko;
barko(repeat => 3, string => 'BOZON', cascade => 1);
barko(between => ' ');
barko(between => '<->', repeat => 5);
barko(string => '** done **', blankafter => 0);`,"./codes/pgsql.sql":`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,"./codes/php.php":`<!DOCTYPE html>
<html>
<body>

<?php
//Initialize the XML parser
$parser=xml_parser_create();

//Function to use at the start of an element
function start($parser,$element_name,$element_attrs) {
    switch($element_name) {
        case "NOTE":
        echo "-- Note --<br>";
    break;
        case "TO":
        echo "To: ";
    break;
        case "FROM":
        echo "From: ";
    break;
        case "HEADING":
        echo "Heading: ";
    break;
        case "BODY":
        echo "Message: ";
    }
}

//Function to use at the end of an element
function stop($parser,$element_name) {
    echo "<br>";
}

//Function to use when finding character data
function char($parser,$data) {
    echo $data;
}

//Specify element handler
xml_set_element_handler($parser,"start","stop");

//Specify data handler
xml_set_character_data_handler($parser,"char");

//Open XML file
$fp=fopen("note.xml","r");

//Read data
while ($data=fread($fp,4096)) {
    xml_parse($parser,$data,feof($fp)) or
    die (sprintf("XML Error: %s at line %d",
    xml_error_string(xml_get_error_code($parser)),
    xml_get_current_line_number($parser)));
}

//Free the XML parser
xml_parser_free($parser);
?>

</body>
</html>`,"./codes/powershell.ps1":`## Define the service name in a variable
$ServiceName = 'EventLog'

## Read the service from Windows to return a service object
$ServiceInfo = Get-Service -Name $ServiceName

## If the server is not running (ne)
if ($ServiceInfo.Status -ne 'Running') {
	## Write to the console that the service is not running
	Write-Host 'Service is not started, starting service'
	## Start the service
	Start-Service -Name $ServiceName
	## Update the $ServiceInfo object to reflect the new state
	$ServiceInfo.Refresh()
	## Write to the console the Status property which indicates the state of the service
	Write-Host $ServiceInfo.Status
} else { ## If the Status is anything but Running
	## Write to the console the service is already running
	Write-Host 'The service is already running.'
}`,"./codes/python.py":`# Literals
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
'For\\''
"God\\""
"""so loved
the world"""
'''that he gave
his only begotten\\' '''
'that whosoever believeth \\
in him'
''

# Identifiers
__a__
a.b
a.b.c

#Unicode identifiers on Python3
# a = x\\ddot
a\u20D7 = x\u0308
# a = v\\dot
a\u20D7 = v\u0307

#F\\vec = m \\cdot a\\vec
F\u20D7 = m\u2022a\u20D7 

# Operators
+ - * / % & | ^ ~ < >
== != <= >= <> << >> // **
and or not in is

#infix matrix multiplication operator (PEP 465)
A @ B

# Delimiters
() [] {} , : \` = ; @ .  # Note that @ and . require the proper context on Python 2.
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
fr'x={4*10}\\n'
`,"./codes/r.r":`X <- list(height = 5.4, weight = 54)
cat("Printing objects: "); print(X)
print("Accessing individual elements:")
cat(sprintf("Your height is %s and your weight is %s\\n", X$height, X$weight))

# Functions:
square <- function(x) {
  return(x * x)
}
cat(sprintf("The square of 3 is %s\\n", square(3)))

# In R, the last expression in a function is, by default, what is
# returned. The idiomatic way to write the function is:
square <- function(x) {
  x * x
}
# or, for functions with short content:
square <- function(x) x * x

# Function arguments with default values:
cube <- function(x = 5) x * x * x
cat(sprintf("Calling cube with 2 : %s\\n", cube(2))  # will give 2^3
cat(sprintf("Calling cube        : %s\\n", cube())   # will default to 5^3.

powers <- function(x) list(x2 = x*x, x3 = x*x*x, x4 = x*x*x*x)

cat("Powers of 3: "); print(powers(3))

# Data frames
df <- data.frame(letters = letters[1:5], '#letter' = 1:5)
print(df$letters)
print(df$\`#letter\`)

# Operators:
m1 <- matrix(1:6, 2, 3)
m2 <- m1 %*% t(m1)
cat("Matrix product: "); print(m2)

# Assignments:
a <- 1
b <<- 2
c = 3
4 -> d
5 ->> e
`,"./codes/ruby.rb":`# Using re's to break up a line.
print "Please enter a line: "
line = gets.chomp

res = [ ]
while res != ''
    # String leading blanks.
    line.sub!(/^\\s*/, '')

    break if line == ''

    # See what the leading is for next action.
    if line[0].chr == '"' then
        # Quoted.
        line.sub!(/^"([^"]*)"/, '')
        res.push($1)
    elsif line.sub!(/^(\\d+):(\\S+)/, '')
        # Repeated with n:
        $1.to_i.times { res.push($2) }
    else
        # Just a word.
        line.sub!(/^(\\S+)/, '')
        res.push($1)
    end

end

res.each { |x| print "  [", x, "]\\n" }`,"./codes/rust.rs":`// Suppress all warnings from casts which overflow.
#![allow(overflowing_literals)]

fn main() {
    let decimal = 65.4321_f32;

    // Error! No implicit conversion
    let integer: u8 = decimal;
    // FIXME ^ Comment out this line

    // Explicit conversion
    let integer = decimal as u8;
    let character = integer as char;

    // Error! There are limitations in conversion rules. 
    // A float cannot be directly converted to a char.
    let character = decimal as char;
    // FIXME ^ Comment out this line

    println!("Casting: {} -> {} -> {}", decimal, integer, character);

    // when casting any value to an unsigned type, T,
    // T::MAX + 1 is added or subtracted until the value
    // fits into the new type

    // 1000 already fits in a u16
    println!("1000 as a u16 is: {}", 1000 as u16);

    // 1000 - 256 - 256 - 256 = 232
    // Under the hood, the first 8 least significant bits (LSB) are kept,
    // while the rest towards the most significant bit (MSB) get truncated.
    println!("1000 as a u8 is : {}", 1000 as u8);
    // -1 + 256 = 255
    println!("  -1 as a u8 is : {}", (-1i8) as u8);

    // For positive numbers, this is the same as the modulus
    println!("1000 mod 256 is : {}", 1000 % 256);

    // When casting to a signed type, the (bitwise) result is the same as
    // first casting to the corresponding unsigned type. If the most significant
    // bit of that value is 1, then the value is negative.

    // Unless it already fits, of course.
    println!(" 128 as a i16 is: {}", 128 as i16);
    // 128 as u8 -> 128, whose two's complement in eight bits is:
    println!(" 128 as a i8 is : {}", 128 as i8);

    // repeating the example above
    // 1000 as u8 -> 232
    println!("1000 as a u8 is : {}", 1000 as u8);
    // and the two's complement of 232 is -24
    println!(" 232 as a i8 is : {}", 232 as i8);
    
    // Since Rust 1.45, the \`as\` keyword performs a *saturating cast* 
    // when casting from float to int. If the floating point value exceeds 
    // the upper bound or is less than the lower bound, the returned value 
    // will be equal to the bound crossed.
    
    // 300.0 is 255
    println!("300.0 is {}", 300.0_f32 as u8);
    // -100.0 as u8 is 0
    println!("-100.0 as u8 is {}", -100.0_f32 as u8);
    // nan as u8 is 0
    println!("nan as u8 is {}", f32::NAN as u8);
    
    // This behavior incurs a small runtime cost and can be avoided 
    // with unsafe methods, however the results might overflow and 
    // return **unsound values**. Use these methods wisely:
    unsafe {
        // 300.0 is 44
        println!("300.0 is {}", 300.0_f32.to_int_unchecked::<u8>());
        // -100.0 as u8 is 156
        println!("-100.0 as u8 is {}", (-100.0_f32).to_int_unchecked::<u8>());
        // nan as u8 is 0
        println!("nan as u8 is {}", f32::NAN.to_int_unchecked::<u8>());
    }
}
`,"./codes/scheme.scm":`; See if the input starts with a given symbol.
(define (match-symbol input pattern)
  (cond ((null? (remain input)) #f)
	((eqv? (car (remain input)) pattern) (r-cdr input))
	(else #f)))

; Allow the input to start with one of a list of patterns.
(define (match-or input pattern)
  (cond ((null? pattern) #f)
	((match-pattern input (car pattern)))
	(else (match-or input (cdr pattern)))))

; Allow a sequence of patterns.
(define (match-seq input pattern)
  (if (null? pattern)
      input
      (let ((match (match-pattern input (car pattern))))
	(if match (match-seq match (cdr pattern)) #f))))

; Match with the pattern but no problem if it does not match.
(define (match-opt input pattern)
  (let ((match (match-pattern input (car pattern))))
    (if match match input)))

; Match anything (other than '()), until pattern is found. The rather
; clumsy form of requiring an ending pattern is needed to decide where
; the end of the match is. If none is given, this will match the rest
; of the sentence.
(define (match-any input pattern)
  (cond ((null? (remain input)) #f)
	((null? pattern) (f-cons (remain input) (clear-remain input)))
	(else
	 (let ((accum-any (collector)))
	   (define (match-pattern-any input pattern)
	     (cond ((null? (remain input)) #f)
		   (else (accum-any (car (remain input)))
			 (cond ((match-pattern (r-cdr input) pattern))
			       (else (match-pattern-any (r-cdr input) pattern))))))
	   (let ((retval (match-pattern-any input (car pattern))))
	     (if retval
		 (f-cons (accum-any) retval)
		 #f))))))
`,"./codes/shell.sh":`#!/bin/bash
# Simple line count example, using bash
#
# Bash tutorial: http://linuxconfig.org/Bash_scripting_Tutorial#8-2-read-file-into-bash-array
# My scripting link: http://www.macs.hw.ac.uk/~hwloidl/docs/index.html#scripting
#
# Usage: ./line_count.sh file
# -----------------------------------------------------------------------------

# Link filedescriptor 10 with stdin
exec 10<&0
# stdin replaced with a file supplied as a first argument
exec < $1
# remember the name of the input file
in=$1

# init
file="current_line.txt"
let count=0

# this while loop iterates over all lines of the file
while read LINE
do
    # increase line counter
    ((count++))
    # write current line to a tmp file with name $file (not needed for counting)
    echo $LINE > $file
    # this checks the return code of echo (not needed for writing; just for demo)
    if [ $? -ne 0 ]
     then echo "Error in writing to file \${file}; check its permissions!"
    fi
done

echo "Number of lines: $count"
echo "The last line of the file is: \`cat \${file}\`"

# Note: You can achieve the same by just using the tool wc like this
echo "Expected number of lines: \`wc -l $in\`"

# restore stdin from filedescriptor 10
# and close filedescriptor 10
exec 0<&10 10<&-`,"./codes/sql.sql":`CREATE TABLE dbo.EmployeePhoto
(
    EmployeeId INT NOT NULL PRIMARY KEY,
    Photo VARBINARY(MAX) FILESTREAM NULL,
    MyRowGuidColumn UNIQUEIDENTIFIER NOT NULL ROWGUIDCOL
                    UNIQUE DEFAULT NEWID()
);

GO

/*
text_of_comment
/* nested comment */
*/

-- line comment

CREATE NONCLUSTERED INDEX IX_WorkOrder_ProductID
    ON Production.WorkOrder(ProductID)
    WITH (FILLFACTOR = 80,
        PAD_INDEX = ON,
        DROP_EXISTING = ON);
GO

WHILE (SELECT AVG(ListPrice) FROM Production.Product) < $300
BEGIN
   UPDATE Production.Product
      SET ListPrice = ListPrice * 2
   SELECT MAX(ListPrice) FROM Production.Product
   IF (SELECT MAX(ListPrice) FROM Production.Product) > $500
      BREAK
   ELSE
      CONTINUE
END
PRINT 'Too much for the market to bear';

MERGE INTO Sales.SalesReason AS [Target]
USING (VALUES ('Recommendation','Other'), ('Review', 'Marketing'), ('Internet', 'Promotion'))
       AS [Source] ([NewName], NewReasonType)
ON [Target].[Name] = [Source].[NewName]
WHEN MATCHED
THEN UPDATE SET ReasonType = [Source].NewReasonType
WHEN NOT MATCHED BY TARGET
THEN INSERT ([Name], ReasonType) VALUES ([NewName], NewReasonType)
OUTPUT $action INTO @SummaryOfChanges;

SELECT ProductID, OrderQty, SUM(LineTotal) AS Total
FROM Sales.SalesOrderDetail
WHERE UnitPrice < $5.00
GROUP BY ProductID, OrderQty
ORDER BY ProductID, OrderQty
OPTION (HASH GROUP, FAST 10);
`,"./codes/stylus.styl":`/* Stylus mode */

#id,
.class,
article
  font-family Arial, sans-serif

#id,
.class,
article {
  font-family: Arial, sans-serif;
}

// Variables
font-size-base = 16px
line-height-base = 1.5
font-family-base = "Helvetica Neue", Helvetica, Arial, sans-serif
text-color = lighten(#000, 20%)

body
  font font-size-base/line-height-base font-family-base
  color text-color

body {
  font: 400 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
}

// Variables
link-color = darken(#428bca, 6.5%)
link-hover-color = darken(link-color, 15%)
link-decoration = none
link-hover-decoration = false

// Mixin
tab-focus()
  outline thin dotted
  outline 5px auto -webkit-focus-ring-color
  outline-offset -2px

a
  color link-color
  if link-decoration
    text-decoration link-decoration
  &:hover
  &:focus
    color link-hover-color
    if link-hover-decoration
      text-decoration link-hover-decoration
  &:focus
    tab-focus()

a {
  color: #3782c4;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2f6ea7;
}
a:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
`,"./codes/swift.swift":`import Foundation

protocol APIControllerProtocol {
    func didReceiveAPIResults(results: NSArray)
}

class APIController {
    var delegate: APIControllerProtocol

    init(delegate: APIControllerProtocol) {
        self.delegate = delegate
    }

    func get(path: String) {
        let url = NSURL(string: path)
        let session = NSURLSession.sharedSession()
        let task = session.dataTaskWithURL(url!, completionHandler: {data, response, error -> Void in
            println("Task completed")
            if(error != nil) {
                // If there is an error in the web request, print it to the console
                println(error.localizedDescription)
            }
            var err: NSError?
            if let jsonResult = NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.MutableContainers, error: &err) as? NSDictionary {
                if(err != nil) {
                    // If there is an error parsing JSON, print it to the console
                    println("JSON Error \\(err!.localizedDescription)")
                }
                if let results: NSArray = jsonResult["results"] as? NSArray {
                    self.delegate.didReceiveAPIResults(results)
                }
            }
        })

        // The task is just an object with all these properties set
        // In order to actually make the web request, we need to "resume"
        task.resume()
    }

    func searchItunesFor(searchTerm: String) {
        // The iTunes API wants multiple terms separated by + symbols, so replace spaces with + signs
        let itunesSearchTerm = searchTerm.stringByReplacingOccurrencesOfString(" ", withString: "+", options: NSStringCompareOptions.CaseInsensitiveSearch, range: nil)

        // Now escape anything else that isn't URL-friendly
        if let escapedSearchTerm = itunesSearchTerm.stringByAddingPercentEscapesUsingEncoding(NSUTF8StringEncoding) {
            let urlPath = "https://itunes.apple.com/search?term=\\(escapedSearchTerm)&media=music&entity=album"
        }
    }

}`,"./codes/tcl.tcl":`proc find {{basedir .} {filterScript {}}} {
    set oldwd [pwd]
    cd $basedir
    set cwd [pwd]
    set filenames [glob -nocomplain * .*]
    set files {}
    set filt [string length $filterScript]
    foreach filename $filenames {
        if {!$filt || [eval $filterScript [list $filename]]} {
            lappend files [file join $cwd $filename]
        }
        if {[file isdirectory $filename]} {
            set files [concat $files [find $filename $filterScript]]
        }
    }
    cd $oldwd
    return $files
}
`,"./codes/toml.toml":`# This is a TOML document. Boom.

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
`,"./codes/tsx.tsx":`/// <reference path='../../typings/index.d.ts' />
interface Nothing {}
class CommentBox extends React.Component<
  { url: string; pollInterval: number },
  CommentData
> {
  constructor() {
    super()
    this.state = { data: [] }
  }
  fetchComments() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => this.setState({ data: data }),
      error: (xhr, status, err) => console.error(status, err)
    })
  }
  componentDidMount() {
    this.fetchComments()
    setInterval(this.fetchComments.bind(this), this.props.pollInterval)
  }
  render() {
    let handleCommentSubmit = (comment: { author: string; text: string }) => {
      console.warn('comment submitted!', comment)
      const updated = this.state.data.slice(0)
      updated.push(comment)
      this.setState({ data: updated })
    }
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={handleCommentSubmit} />
      </div>
    )
  }
}

class CommentList extends React.Component<CommentData, Nothing> {
  render() {
    const nodes = this.props.data.map((comment) => (
      <Commentt author={comment.author}>{comment.text}</Commentt>
    ))
    return <div className="commentList">{nodes}</div>
  }
}

class CommentForm extends React.Component<
  { onCommentSubmit: (t: { author: string; text: string }) => void },
  Nothing
> {
  render() {
    let handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const author = (this.refs['author'] as any as HTMLInputElement).value.trim()
      const text = (this.refs['text'] as any as HTMLInputElement).value.trim()
      if (author.length > 0 && text.length > 0) {
        this.props.onCommentSubmit({ author: author, text: text })
      }
    }

    return (
      <form className="commentForm" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

interface CommentProps {
  author: string
  children?: string
}

class Commentt extends React.Component<CommentProps, Nothing> {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">{this.props.author}</h2>
        {this.props.children}
      </div>
    )
  }
}
interface CommentDataItem {
  author: string
  text: string
}
interface CommentData {
  data: Array<CommentDataItem>
}

ReactDOM.render(
  <CommentBox url="/public/js/comments.json" pollInterval={5000} />,
  document.getElementById('content')
)
`,"./codes/typescript.ts":`import _axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { Filter, FindOptions, Sort, UpdateFilter, Document } from 'mongodb'

// https://github.com/surmon-china/mongodb-data-api/pull/3/files @maxfi
type Projection = FindOptions['projection']

// https://github.com/surmon-china/mongodb-data-api/pull/4/files @maxfi
type NoInfer<A extends any> = [A][A extends any ? 0 : never]

type AnyKeys<T> = { [P in keyof T]?: T[P] | any }
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U

/**
 * Specific region of endpoint.
 * @link https://docs.atlas.mongodb.com/api/data-api-resources/#regional-requests
 */
export enum Region {
  Virginia = 'us-east-1',
  Oregon = 'us-west-2',
  Ireland = 'eu-west-1',
  Sydney = 'ap-southeast-2'
}

// https://docs.atlas.mongodb.com/api/data-api-resources/#base-url
const getUrlEndpoint = (appId: string, region?: Region) => {
  return region
    ? \`https://\${region}.aws.data.mongodb-api.com/app/\${appId}/endpoint/data/beta\`
    : \`https://data.mongodb-api.com/app/\${appId}/endpoint/data/beta\`
}
const getActionUrl = (endpoint: string, action: string) => {
  return \`\${endpoint}/action/\${action}\`
}

type ExtendBaseParams<T> = BaseParams & T
interface BaseParams {
  dataSource?: string
  database?: string
  collection?: string
  [key: string]: any
}

interface BaseConfig {
  /**
   * Specific Data API key.
   * @link https://docs.atlas.mongodb.com/api/data-api/#2.-create-a-data-api-key
   */
  apiKey: string
}
interface UrlEndpointConfig extends BaseConfig {
  /**
   * Specific URL Endpoint.
   * @link https://docs.atlas.mongodb.com/api/data-api/#3.-send-a-data-api-request
   */
  urlEndpoint: string
}
interface PackEndpointConfig extends BaseConfig {
  /**
   * Specific Data App ID.
   * @link https://docs.atlas.mongodb.com/api/data-api/#3.-send-a-data-api-request
   */
  appId: string
  region?: Region
}

export type Config = XOR<UrlEndpointConfig, PackEndpointConfig>

export class MongoDBDataAPI<InnerDoc = Document> {
  #config: Config
  #baseParams: BaseParams
  #axios: AxiosInstance

  constructor(config: Config, baseParams?: BaseParams, axios?: AxiosInstance) {
    if (!config.apiKey) {
      throw new Error('Invalid API key!')
    }

    this.#config = config
    this.#baseParams = baseParams || {}
    this.#axios = axios || _axios.create()
  }

  #newAPI<D>(params: BaseParams) {
    return new MongoDBDataAPI<D>(
      { ...this.#config },
      {
        ...this.#baseParams,
        ...params
      }
    )
  }

  /** Select a cluster. */
  public $cluster(clusterName: string) {
    return this.#newAPI<InnerDoc>({ dataSource: clusterName }) as Omit<
      MongoDBDataAPI<InnerDoc>,
      '$cluster' | '$collection'
    >
  }

  /** Select a database. */
  public $database(database: string) {
    return this.#newAPI<InnerDoc>({ database }) as Omit<
      MongoDBDataAPI<InnerDoc>,
      '$cluster' | '$database'
    >
  }

  /** Select a collection. */
  public $collection<Doc = InnerDoc>(collection: string) {
    return this.#newAPI<Doc>({ collection }) as Omit<
      MongoDBDataAPI<Doc>,
      '$cluster' | '$database' | '$collection'
    >
  }

  /**
   * Execute a API action.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/
   */
  public $$action<Result = unknown>(
    name: string,
    params: BaseParams = {},
    axiosConfig?: AxiosRequestConfig
  ): Promise<Result> {
    const mergedParams = {
      ...this.#baseParams,
      ...params
    }

    if (!mergedParams.dataSource || !mergedParams.database || !mergedParams.collection) {
      return Promise.reject('Invalid params: dataSource, database, collection')
    }

    const API_KEY_FIELD = 'api-key'

    return this.#axios({
      method: 'post',
      data: JSON.stringify(mergedParams),
      url: this.#config.urlEndpoint
        ? getActionUrl(this.#config.urlEndpoint, name)
        : getActionUrl(getUrlEndpoint(this.#config.appId!, this.#config.region), name),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        [API_KEY_FIELD]: this.#config.apiKey
      },
      ...axiosConfig
    })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        // https://docs.atlas.mongodb.com/api/data-api-resources/#error-codes
        const errorJSON = error.toJSON()
        errorJSON.config.headers[API_KEY_FIELD] = '*****'
        return Promise.reject(error.toJSON())
      })
  }

  /**
   * Find a Single Document.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#find-a-single-document
   */
  public findOne<D = InnerDoc, T = NoInfer<D>>(
    params?: ExtendBaseParams<{
      filter?: Filter<T>
      projection?: Projection
    }>
  ) {
    return this.$$action<{ document: D | null }>('findOne', params)
  }

  /**
   * Find Multiple Documents.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#find-multiple-documents
   */
  public find<D = InnerDoc, T = NoInfer<D>>(
    params?: ExtendBaseParams<{
      filter?: Filter<T>
      projection?: Projection
      sort?: Sort
      limit?: number
      skip?: number
    }>
  ) {
    return this.$$action<{ documents: Array<D> }>('find', params)
  }

  /**
   * Insert a Single Document.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#insert-a-single-document
   */
  public insertOne<D = InnerDoc, T = NoInfer<D>>(
    params: ExtendBaseParams<{ document: AnyKeys<T> | Document }>
  ) {
    return this.$$action<{ insertedId: string }>('insertOne', params)
  }

  /**
   * Insert Multiple Documents.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#insert-multiple-documents
   */
  public insertMany<D = InnerDoc, T = NoInfer<D>>(
    params: ExtendBaseParams<{ documents: Array<AnyKeys<T> | Document> }>
  ) {
    return this.$$action<{ insertedIds: Array<string> }>('insertMany', params)
  }

  /**
   * Update a Single Document.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#update-a-single-document
   */
  public updateOne<D = InnerDoc, T = NoInfer<D>>(
    params: ExtendBaseParams<{
      filter: Filter<T>
      update: UpdateFilter<T>
      upsert?: boolean
    }>
  ) {
    return this.$$action<{
      matchedCount: number
      modifiedCount: number
      upsertedId?: string
    }>('updateOne', params)
  }

  /**
   * Update Multiple Documents.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#update-multiple-documents
   */
  public updateMany<D = InnerDoc, T = NoInfer<D>>(
    params: ExtendBaseParams<{
      filter: Filter<T>
      update: UpdateFilter<T>
      upsert?: boolean
    }>
  ) {
    return this.$$action<{
      matchedCount: number
      modifiedCount: number
      upsertedId?: string
    }>('updateMany', params)
  }

  /**
   * Replace a Single Document.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#replace-a-single-document
   */
  public replaceOne<D = InnerDoc, T = NoInfer<D>>(
    params: ExtendBaseParams<{
      filter: Filter<T>
      replacement: any
      upsert?: boolean
    }>
  ) {
    return this.$$action<{
      matchedCount: number
      modifiedCount: number
      upsertedId?: string
    }>('replaceOne', params)
  }

  /**
   * Delete a Single Document.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#delete-a-single-document
   */
  public deleteOne<D = InnerDoc, T = NoInfer<D>>(
    params: ExtendBaseParams<{ filter: Filter<T> }>
  ) {
    return this.$$action<{ deletedCount: number }>('deleteOne', params)
  }

  /**
   * Delete Multiple Documents.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#delete-multiple-documents
   */
  public deleteMany<D = InnerDoc, T = NoInfer<D>>(
    params: ExtendBaseParams<{ filter: Filter<T> }>
  ) {
    return this.$$action<{ deletedCount: number }>('deleteMany', params)
  }

  /**
   * Run an Aggregation Pipeline.
   * @link https://docs.atlas.mongodb.com/api/data-api-resources/#run-an-aggregation-pipeline
   */
  public aggregate<T extends Array<any>>(
    params: ExtendBaseParams<{ pipeline: Array<Document> }>
  ) {
    return this.$$action<{ documents: T }>('pipeline', params)
  }
}

export const createMongoDBDataAPI = (config: Config, axios?: AxiosInstance) => {
  return new MongoDBDataAPI(config, void 0, axios)
}
`,"./codes/vb.vb":`Imports System
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
`,"./codes/vbscript.vbs":`' Pete Guhl
' 03-04-2012
'
' Basic VBScript support for codemirror2

Const ForReading = 1, ForWriting = 2, ForAppending = 8

Call Sub020_PostBroadcastToUrbanAirship(strUserName, strPassword, intTransmitID, strResponse)

If Not IsNull(strResponse) AND Len(strResponse) = 0 Then
	boolTransmitOkYN = False
Else
	' WScript.Echo "Oh Happy Day! Oh Happy DAY!"
	boolTransmitOkYN = True
End If
`,"./codes/xml.xml":`<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
  <food>
    <name>Belgian Waffles</name>
    <price>$5.95</price>
    <description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>
    <calories>650</calories>
  </food>
  <food>
    <name>Strawberry Belgian Waffles</name>
    <price>$7.95</price>
    <description>Light Belgian waffles covered with strawberries and whipped cream</description>
    <calories>900</calories>
  </food>
  <food>
    <name>Berry-Berry Belgian Waffles</name>
    <price>$8.95</price>
    <description>Light Belgian waffles covered with an assortment of fresh berries and whipped cream</description>
    <calories>900</calories>
  </food>
  <food>
    <name>French Toast</name>
    <price>$4.50</price>
    <description>Thick slices made from our homemade sourdough bread</description>
    <calories>600</calories>
  </food>
  <food>
    <name>Homestyle Breakfast</name>
    <price>$6.95</price>
    <description>Two eggs, bacon or sausage, toast, and our ever-popular hash browns</description>
    <calories>950</calories>
  </food>
</breakfast_menu>
`,"./codes/yaml.yaml":`---
doe: 'a deer, a female deer'
ray: 'a drop of golden sun'
pi: 3.14159
xmas: true
french-hens: 3
calling-birds:
  - huey
  - dewey
  - louie
  - fred
xmas-fifth-day:
  calling-birds: four
  french-hens: 3
  golden-rings: 5
  partridges:
    count: 1
    location: 'a pear tree'
  turtle-doves: two
`};var f=Object.keys(s).reduce((t,n)=>{const e=n.split("/"),l=e[e.length-1].split(".")[0];return o(i({},t),{[l]:s[n]})},{});export{f as default};
