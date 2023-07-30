import{S as s}from"./index-76955c4a.js";import"./index-a51b6adf.js";function l(e){for(var n={},r=0;r<e.length;r++)n[e[r]]=!0;return n}var p=l(["_","var","let","actor","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","isolated","nonisolated","catch","do","rethrows","throw","throws","async","await","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),f=l(["var","let","actor","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),d=l(["true","false","nil","self","super","_"]),h=l(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),g="+-/*%=|&<>~^?!",v=":;,.(){}[]",y=/^\-?0b[01][01_]*/,S=/^\-?0o[0-7][0-7_]*/,k=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,m=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,w=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,_=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,x=/^\#[A-Za-z]+/,b=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;function u(e,n,r){if(e.sol()&&(n.indented=e.indentation()),e.eatSpace())return null;var i=e.peek();if(i=="/"){if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return n.tokenize.push(c),c(e,n)}if(e.match(x))return"builtin";if(e.match(b))return"attribute";if(e.match(y)||e.match(S)||e.match(k)||e.match(m))return"number";if(e.match(_))return"property";if(g.indexOf(i)>-1)return e.next(),"operator";if(v.indexOf(i)>-1)return e.next(),e.match(".."),"punctuation";var t;if(t=e.match(/("""|"|')/)){var o=I.bind(null,t[0]);return n.tokenize.push(o),o(e,n)}if(e.match(w)){var a=e.current();return h.hasOwnProperty(a)?"type":d.hasOwnProperty(a)?"atom":p.hasOwnProperty(a)?(f.hasOwnProperty(a)&&(n.prev="define"),"keyword"):r=="define"?"def":"variable"}return e.next(),null}function A(){var e=0;return function(n,r,i){var t=u(n,r,i);if(t=="punctuation"){if(n.current()=="(")++e;else if(n.current()==")"){if(e==0)return n.backUp(1),r.tokenize.pop(),r.tokenize[r.tokenize.length-1](n,r);--e}}return t}}function I(e,n,r){for(var i=e.length==1,t,o=!1;t=n.peek();)if(o){if(n.next(),t=="(")return r.tokenize.push(A()),"string";o=!1}else{if(n.match(e))return r.tokenize.pop(),"string";n.next(),o=t=="\\"}return i&&r.tokenize.pop(),"string"}function c(e,n){for(var r;r=e.next();)if(r==="/"&&e.eat("*"))n.tokenize.push(c);else if(r==="*"&&e.eat("/")){n.tokenize.pop();break}return"comment"}function z(e,n,r){this.prev=e,this.align=n,this.indented=r}function N(e,n){var r=n.match(/^\s*($|\/[\/\*]|[)}\]])/,!1)?null:n.column()+1;e.context=new z(e.context,r,e.indented)}function O(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}const P={name:"swift",startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,n){var r=n.prev;n.prev=null;var i=n.tokenize[n.tokenize.length-1]||u,t=i(e,n,r);if(!t||t=="comment"?n.prev=r:n.prev||(n.prev=t),t=="punctuation"){var o=/[\(\[\{]|([\]\)\}])/.exec(e.current());o&&(o[1]?O:N)(n,e)}return t},indent:function(e,n,r){var i=e.context;if(!i)return 0;var t=/^[\]\}\)]/.test(n);return i.align!=null?i.align-(t?1:0):i.indented+(t?0:r.unit)},languageData:{indentOnInput:/^\s*[\)\}\]]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}},T=`import Foundation

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

}`,R={language:()=>s.define(P),code:T};export{R as default};
