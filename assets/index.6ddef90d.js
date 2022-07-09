import{S as p}from"./index.4b2436cb.js";import"./index.5bbbf6dc.js";var m={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0},v={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},a=/[+\-*&^%:=<>!|\/]/,i;function o(t,n){var e=t.next();if(e=='"'||e=="'"||e=="`")return n.tokenize=y(e),n.tokenize(t,n);if(/[\d\.]/.test(e))return e=="."?t.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):e=="0"?t.match(/^[xX][0-9a-fA-F]+/)||t.match(/^0[0-7]+/):t.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(e))return i=e,null;if(e=="/"){if(t.eat("*"))return n.tokenize=c,c(t,n);if(t.eat("/"))return t.skipToEnd(),"comment"}if(a.test(e))return t.eatWhile(a),"operator";t.eatWhile(/[\w\$_\xa1-\uffff]/);var r=t.current();return m.propertyIsEnumerable(r)?((r=="case"||r=="default")&&(i="case"),"keyword"):v.propertyIsEnumerable(r)?"atom":"variable"}function y(t){return function(n,e){for(var r=!1,u,l=!1;(u=n.next())!=null;){if(u==t&&!r){l=!0;break}r=!r&&t!="`"&&u=="\\"}return(l||!(r||t=="`"))&&(e.tokenize=o),"string"}}function c(t,n){for(var e=!1,r;r=t.next();){if(r=="/"&&e){n.tokenize=o;break}e=r=="*"}return"comment"}function d(t,n,e,r,u){this.indented=t,this.column=n,this.type=e,this.align=r,this.prev=u}function f(t,n,e){return t.context=new d(t.indented,n,e,null,t.context)}function s(t){if(!!t.context.prev){var n=t.context.type;return(n==")"||n=="]"||n=="}")&&(t.indented=t.context.indented),t.context=t.context.prev}}const _={startState:function(t){return{tokenize:null,context:new d(-t,0,"top",!1),indented:0,startOfLine:!0}},token:function(t,n){var e=n.context;if(t.sol()&&(e.align==null&&(e.align=!1),n.indented=t.indentation(),n.startOfLine=!0,e.type=="case"&&(e.type="}")),t.eatSpace())return null;i=null;var r=(n.tokenize||o)(t,n);return r=="comment"||(e.align==null&&(e.align=!0),i=="{"?f(n,t.column(),"}"):i=="["?f(n,t.column(),"]"):i=="("?f(n,t.column(),")"):i=="case"?e.type="case":(i=="}"&&e.type=="}"||i==e.type)&&s(n),n.startOfLine=!1),r},indent:function(t,n,e){if(t.tokenize!=o&&t.tokenize!=null)return null;var r=t.context,u=n&&n.charAt(0);if(r.type=="case"&&/^(?:case|default)\b/.test(n))return t.context.type="}",r.indented;var l=u==r.type;return r.align?r.column+(l?0:1):r.indented+(l?0:e.unit)},languageData:{indentOnInput:/^\s([{}]|case |default\s*:)$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}};var h=`package main
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
}`,P={language:()=>p.define(_),code:h};export{P as default};
