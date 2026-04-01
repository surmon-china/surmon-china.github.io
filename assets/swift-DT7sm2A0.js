import{c as e}from"./dist-D508tbBT.js";function t(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}var n=t(`_.var.let.actor.class.enum.extension.import.protocol.struct.func.typealias.associatedtype.open.public.internal.fileprivate.private.deinit.init.new.override.self.subscript.super.convenience.dynamic.final.indirect.lazy.required.static.unowned.unowned(safe).unowned(unsafe).weak.as.is.break.case.continue.default.else.fallthrough.for.guard.if.in.repeat.switch.where.while.defer.return.inout.mutating.nonmutating.isolated.nonisolated.catch.do.rethrows.throw.throws.async.await.try.didSet.get.set.willSet.assignment.associativity.infix.left.none.operator.postfix.precedence.precedencegroup.prefix.right.Any.AnyObject.Type.dynamicType.Self.Protocol.__COLUMN__.__FILE__.__FUNCTION__.__LINE__`.split(`.`)),r=t([`var`,`let`,`actor`,`class`,`enum`,`extension`,`import`,`protocol`,`struct`,`func`,`typealias`,`associatedtype`,`for`]),i=t([`true`,`false`,`nil`,`self`,`super`,`_`]),a=t([`Array`,`Bool`,`Character`,`Dictionary`,`Double`,`Float`,`Int`,`Int8`,`Int16`,`Int32`,`Int64`,`Never`,`Optional`,`Set`,`String`,`UInt8`,`UInt16`,`UInt32`,`UInt64`,`Void`]),o=`+-/*%=|&<>~^?!`,s=`:;,.(){}[]`,c=/^\-?0b[01][01_]*/,l=/^\-?0o[0-7][0-7_]*/,u=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,d=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,f=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,p=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,m=/^\#[A-Za-z]+/,h=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;function g(e,t,g){if(e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;var _=e.peek();if(_==`/`){if(e.match(`//`))return e.skipToEnd(),`comment`;if(e.match(`/*`))return t.tokenize.push(y),y(e,t)}if(e.match(m))return`builtin`;if(e.match(h))return`attribute`;if(e.match(c)||e.match(l)||e.match(u)||e.match(d))return`number`;if(e.match(p))return`property`;if(o.indexOf(_)>-1)return e.next(),`operator`;if(s.indexOf(_)>-1)return e.next(),e.match(`..`),`punctuation`;var b;if(b=e.match(/("""|"|')/)){var x=v.bind(null,b[0]);return t.tokenize.push(x),x(e,t)}if(e.match(f)){var S=e.current();return a.hasOwnProperty(S)?`type`:i.hasOwnProperty(S)?`atom`:n.hasOwnProperty(S)?(r.hasOwnProperty(S)&&(t.prev=`define`),`keyword`):g==`define`?`def`:`variable`}return e.next(),null}function _(){var e=0;return function(t,n,r){var i=g(t,n,r);if(i==`punctuation`){if(t.current()==`(`)++e;else if(t.current()==`)`){if(e==0)return t.backUp(1),n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);--e}}return i}}function v(e,t,n){for(var r=e.length==1,i,a=!1;i=t.peek();)if(a){if(t.next(),i==`(`)return n.tokenize.push(_()),`string`;a=!1}else if(t.match(e))return n.tokenize.pop(),`string`;else t.next(),a=i==`\\`;return r&&n.tokenize.pop(),`string`}function y(e,t){for(var n;n=e.next();)if(n===`/`&&e.eat(`*`))t.tokenize.push(y);else if(n===`*`&&e.eat(`/`)){t.tokenize.pop();break}return`comment`}function b(e,t,n){this.prev=e,this.align=t,this.indented=n}function x(e,t){var n=t.match(/^\s*($|\/[\/\*]|[)}\]])/,!1)?null:t.column()+1;e.context=new b(e.context,n,e.indented)}function S(e){e.context&&=(e.indented=e.context.indented,e.context.prev)}var C={name:`swift`,startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var n=t.prev;t.prev=null;var r=(t.tokenize[t.tokenize.length-1]||g)(e,t,n);if(!r||r==`comment`?t.prev=n:t.prev||=r,r==`punctuation`){var i=/[\(\[\{]|([\]\)\}])/.exec(e.current());i&&(i[1]?S:x)(t,e)}return r},indent:function(e,t,n){var r=e.context;if(!r)return 0;var i=/^[\]\}\)]/.test(t);return r.align==null?r.indented+(i?0:n.unit):r.align-(i?1:0)},languageData:{indentOnInput:/^\s*[\)\}\]]$/,commentTokens:{line:`//`,block:{open:`/*`,close:`*/`}},closeBrackets:{brackets:[`(`,`[`,`{`,`'`,`"`,"`"]}}},w={language:()=>e.define(C),code:`import Foundation

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

}`};export{w as default};