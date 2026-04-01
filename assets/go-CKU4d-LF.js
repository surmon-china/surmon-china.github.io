import{c as e}from"./dist-D508tbBT.js";var t={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0,any:!0,comparable:!0},n={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},r=/[+\-*&^%:=<>!|\/]/,i;function a(e,a){var c=e.next();if(c==`"`||c==`'`||c=="`")return a.tokenize=o(c),a.tokenize(e,a);if(/[\d\.]/.test(c))return c==`.`?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):c==`0`?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),`number`;if(/[\[\]{}\(\),;\:\.]/.test(c))return i=c,null;if(c==`/`){if(e.eat(`*`))return a.tokenize=s,s(e,a);if(e.eat(`/`))return e.skipToEnd(),`comment`}if(r.test(c))return e.eatWhile(r),`operator`;e.eatWhile(/[\w\$_\xa1-\uffff]/);var l=e.current();return t.propertyIsEnumerable(l)?((l==`case`||l==`default`)&&(i=`case`),`keyword`):n.propertyIsEnumerable(l)?`atom`:`variable`}function o(e){return function(t,n){for(var r=!1,i,o=!1;(i=t.next())!=null;){if(i==e&&!r){o=!0;break}r=!r&&e!="`"&&i==`\\`}return(o||!(r||e=="`"))&&(n.tokenize=a),`string`}}function s(e,t){for(var n=!1,r;r=e.next();){if(r==`/`&&n){t.tokenize=a;break}n=r==`*`}return`comment`}function c(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function l(e,t,n){return e.context=new c(e.indented,t,n,null,e.context)}function u(e){if(e.context.prev){var t=e.context.type;return(t==`)`||t==`]`||t==`}`)&&(e.indented=e.context.indented),e.context=e.context.prev}}var d={name:`go`,startState:function(e){return{tokenize:null,context:new c(-e,0,`top`,!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(n.align??=!1,t.indented=e.indentation(),t.startOfLine=!0,n.type==`case`&&(n.type=`}`)),e.eatSpace())return null;i=null;var r=(t.tokenize||a)(e,t);return r==`comment`?r:(n.align??=!0,i==`{`?l(t,e.column(),`}`):i==`[`?l(t,e.column(),`]`):i==`(`?l(t,e.column(),`)`):i==`case`?n.type=`case`:(i==`}`&&n.type==`}`||i==n.type)&&u(t),t.startOfLine=!1,r)},indent:function(e,t,n){if(e.tokenize!=a&&e.tokenize!=null)return null;var r=e.context,i=t&&t.charAt(0);if(r.type==`case`&&/^(?:case|default)\b/.test(t))return r.indented;var o=i==r.type;return r.align?r.column+(o?0:1):r.indented+(o?0:n.unit)},languageData:{indentOnInput:/^\s([{}]|case |default\s*:)$/,commentTokens:{line:`//`,block:{open:`/*`,close:`*/`}}}},f={language:()=>e.define(d),code:`package main
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
}`};export{f as default};