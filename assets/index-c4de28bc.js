import{S as E}from"./index-5a742e16.js";import"./index-2f6da573.js";var S="builtin",l="comment",g="string",v="symbol",c="atom",b="number",x="bracket",q=2;function w(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}var y=w("λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),M=w("define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless");function C(e,n,t){this.indent=e,this.type=n,this.prev=t}function u(e,n,t){e.indentStack=new C(n,t,e.indentStack)}function N(e){e.indentStack=e.indentStack.prev}var Q=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),I=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),R=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),B=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);function $(e){return e.match(Q)}function O(e){return e.match(I)}function f(e,n){return n===!0&&e.backUp(1),e.match(B)}function U(e){return e.match(R)}function k(e,n){for(var t,r=!1;(t=e.next())!=null;){if(t==n.token&&!r){n.state.mode=!1;break}r=!r&&t=="\\"}}const A={name:"scheme",startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1,sExprQuote:!1}},token:function(e,n){if(n.indentStack==null&&e.sol()&&(n.indentation=e.indentation()),e.eatSpace())return null;var t=null;switch(n.mode){case"string":k(e,{token:'"',state:n}),t=g;break;case"symbol":k(e,{token:"|",state:n}),t=v;break;case"comment":for(var r,s=!1;(r=e.next())!=null;){if(r=="#"&&s){n.mode=!1;break}s=r=="|"}t=l;break;case"s-expr-comment":if(n.mode=!1,e.peek()=="("||e.peek()=="[")n.sExprComment=0;else{e.eatWhile(/[^\s\(\)\[\]]/),t=l;break}default:var i=e.next();if(i=='"')n.mode="string",t=g;else if(i=="'")e.peek()=="("||e.peek()=="["?(typeof n.sExprQuote!="number"&&(n.sExprQuote=0),t=c):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),t=c);else if(i=="|")n.mode="symbol",t=v;else if(i=="#")if(e.eat("|"))n.mode="comment",t=l;else if(e.eat(/[tf]/i))t=c;else if(e.eat(";"))n.mode="s-expr-comment",t=l;else{var a=null,o=!1,m=!0;e.eat(/[ei]/i)?o=!0:e.backUp(1),e.match(/^#b/i)?a=$:e.match(/^#o/i)?a=O:e.match(/^#x/i)?a=U:e.match(/^#d/i)?a=f:e.match(/^[-+0-9.]/,!1)?(m=!1,a=f):o||e.eat("#"),a!=null&&(m&&!o&&e.match(/^#[ei]/i),a(e)&&(t=b))}else if(/^[-+0-9.]/.test(i)&&f(e,!0))t=b;else if(i==";")e.skipToEnd(),t=l;else if(i=="("||i=="["){for(var d="",p=e.column(),h;(h=e.eat(/[^\s\(\[\;\)\]]/))!=null;)d+=h;d.length>0&&M.propertyIsEnumerable(d)?u(n,p+q,i):(e.eatSpace(),e.eol()||e.peek()==";"?u(n,p+1,i):u(n,p+e.current().length,i)),e.backUp(e.current().length-1),typeof n.sExprComment=="number"&&n.sExprComment++,typeof n.sExprQuote=="number"&&n.sExprQuote++,t=x}else i==")"||i=="]"?(t=x,n.indentStack!=null&&n.indentStack.type==(i==")"?"(":"[")&&(N(n),typeof n.sExprComment=="number"&&--n.sExprComment==0&&(t=l,n.sExprComment=!1),typeof n.sExprQuote=="number"&&--n.sExprQuote==0&&(t=c,n.sExprQuote=!1))):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),y&&y.propertyIsEnumerable(e.current())?t=S:t="variable")}return typeof n.sExprComment=="number"?l:typeof n.sExprQuote=="number"?c:t},indent:function(e){return e.indentStack==null?e.indentation:e.indentStack.indent},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:";;"}}},D=`; See if the input starts with a given symbol.
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
`,L={language:()=>E.define(A),code:D};export{L as default};
