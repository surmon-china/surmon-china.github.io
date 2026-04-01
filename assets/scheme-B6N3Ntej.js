import{c as e}from"./dist-D508tbBT.js";var t=`builtin`,n=`comment`,r=`string`,i=`symbol`,a=`atom`,o=`number`,s=`bracket`,c=2;function l(e){for(var t={},n=e.split(` `),r=0;r<n.length;++r)t[n[r]]=!0;return t}var u=l(`λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?`),d=l(`define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless`);function f(e,t,n){this.indent=e,this.type=t,this.prev=n}function p(e,t,n){e.indentStack=new f(t,n,e.indentStack)}function m(e){e.indentStack=e.indentStack.prev}var h=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),g=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),_=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),v=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);function y(e){return e.match(h)}function b(e){return e.match(g)}function x(e,t){return t===!0&&e.backUp(1),e.match(v)}function S(e){return e.match(_)}function C(e,t){for(var n,r=!1;(n=e.next())!=null;){if(n==t.token&&!r){t.state.mode=!1;break}r=!r&&n==`\\`}}var w={name:`scheme`,startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1,sExprQuote:!1}},token:function(e,l){if(l.indentStack==null&&e.sol()&&(l.indentation=e.indentation()),e.eatSpace())return null;var f=null;switch(l.mode){case`string`:C(e,{token:`"`,state:l}),f=r;break;case`symbol`:C(e,{token:`|`,state:l}),f=i;break;case`comment`:for(var h,g=!1;(h=e.next())!=null;){if(h==`#`&&g){l.mode=!1;break}g=h==`|`}f=n;break;case`s-expr-comment`:if(l.mode=!1,e.peek()==`(`||e.peek()==`[`)l.sExprComment=0;else{e.eatWhile(/[^\s\(\)\[\]]/),f=n;break}default:var _=e.next();if(_==`"`)l.mode=`string`,f=r;else if(_==`'`)e.peek()==`(`||e.peek()==`[`?(typeof l.sExprQuote!=`number`&&(l.sExprQuote=0),f=a):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),f=a);else if(_==`|`)l.mode=`symbol`,f=i;else if(_==`#`)if(e.eat(`|`))l.mode=`comment`,f=n;else if(e.eat(/[tf]/i))f=a;else if(e.eat(`;`))l.mode=`s-expr-comment`,f=n;else{var v=null,w=!1,T=!0;e.eat(/[ei]/i)?w=!0:e.backUp(1),e.match(/^#b/i)?v=y:e.match(/^#o/i)?v=b:e.match(/^#x/i)?v=S:e.match(/^#d/i)?v=x:e.match(/^[-+0-9.]/,!1)?(T=!1,v=x):w||e.eat(`#`),v!=null&&(T&&!w&&e.match(/^#[ei]/i),v(e)&&(f=o))}else if(/^[-+0-9.]/.test(_)&&x(e,!0))f=o;else if(_==`;`)e.skipToEnd(),f=n;else if(_==`(`||_==`[`){for(var E=``,D=e.column(),O;(O=e.eat(/[^\s\(\[\;\)\]]/))!=null;)E+=O;E.length>0&&d.propertyIsEnumerable(E)?p(l,D+c,_):(e.eatSpace(),e.eol()||e.peek()==`;`?p(l,D+1,_):p(l,D+e.current().length,_)),e.backUp(e.current().length-1),typeof l.sExprComment==`number`&&l.sExprComment++,typeof l.sExprQuote==`number`&&l.sExprQuote++,f=s}else _==`)`||_==`]`?(f=s,l.indentStack!=null&&l.indentStack.type==(_==`)`?`(`:`[`)&&(m(l),typeof l.sExprComment==`number`&&--l.sExprComment==0&&(f=n,l.sExprComment=!1),typeof l.sExprQuote==`number`&&--l.sExprQuote==0&&(f=a,l.sExprQuote=!1))):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),f=u&&u.propertyIsEnumerable(e.current())?t:`variable`)}return typeof l.sExprComment==`number`?n:typeof l.sExprQuote==`number`?a:f},indent:function(e){return e.indentStack==null?e.indentation:e.indentStack.indent},languageData:{closeBrackets:{brackets:[`(`,`[`,`{`,`"`]},commentTokens:{line:`;;`}}},T={language:()=>e.define(w),code:`; See if the input starts with a given symbol.
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
`};export{T as default};