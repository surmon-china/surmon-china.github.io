import{L as W,i as A,c as K,e as F,a as G,t as s,b as Y,B as M,C as H,y as J}from"./index-GjPgjiyQ.js";import{E as ee,L as te}from"./index-VxGlUboA.js";const ae=36,T=1,re=2,b=3,y=4,ne=5,se=6,oe=7,ie=8,le=9,ce=10,de=11,me=12,fe=13,ue=14,pe=15,ge=16,_e=17,q=18,he=19,j=20,Z=21,U=22,Oe=23,be=24;function x(t){return t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57}function ve(t){return t>=48&&t<=57||t>=97&&t<=102||t>=65&&t<=70}function m(t,e,r){for(let a=!1;;){if(t.next<0)return;if(t.next==e&&!a){t.advance();return}a=r&&!a&&t.next==92,t.advance()}}function ke(t){for(;;){if(t.next<0||t.peek(1)<0)return;if(t.next==36&&t.peek(1)==36){t.advance(2);return}t.advance()}}function D(t,e){for(;!(t.next!=95&&!x(t.next));)e!=null&&(e+=String.fromCharCode(t.next)),t.advance();return e}function ye(t){if(t.next==39||t.next==34||t.next==96){let e=t.next;t.advance(),m(t,e,!1)}else D(t)}function B(t,e){for(;t.next==48||t.next==49;)t.advance();e&&t.next==e&&t.advance()}function X(t,e){for(;;){if(t.next==46){if(e)break;e=!0}else if(t.next<48||t.next>57)break;t.advance()}if(t.next==69||t.next==101)for(t.advance(),(t.next==43||t.next==45)&&t.advance();t.next>=48&&t.next<=57;)t.advance()}function L(t){for(;!(t.next<0||t.next==10);)t.advance()}function u(t,e){for(let r=0;r<e.length;r++)if(e.charCodeAt(r)==t)return!0;return!1}const z=` 	\r
`;function I(t,e,r){let a=Object.create(null);a.true=a.false=ne,a.null=a.unknown=se;for(let n of t.split(" "))n&&(a[n]=j);for(let n of e.split(" "))n&&(a[n]=Z);for(let n of(r||"").split(" "))n&&(a[n]=be);return a}const S="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",C="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",Q={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,doubleDollarQuotedStrings:!1,unquotedBitLiterals:!1,treatBitsAsBytes:!1,charSetCasts:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:I(C,S)};function xe(t,e,r,a){let n={};for(let l in Q)n[l]=(t.hasOwnProperty(l)?t:Q)[l];return e&&(n.words=I(e,r||"",a)),n}function V(t){return new ee(e=>{var r;let{next:a}=e;if(e.advance(),u(a,z)){for(;u(e.next,z);)e.advance();e.acceptToken(ae)}else if(a==36&&e.next==36&&t.doubleDollarQuotedStrings)ke(e),e.acceptToken(b);else if(a==39||a==34&&t.doubleQuotedStrings)m(e,a,t.backslashEscapes),e.acceptToken(b);else if(a==35&&t.hashComments||a==47&&e.next==47&&t.slashComments)L(e),e.acceptToken(T);else if(a==45&&e.next==45&&(!t.spaceAfterDashes||e.peek(1)==32))L(e),e.acceptToken(T);else if(a==47&&e.next==42){e.advance();for(let n=-1,l=1;!(e.next<0);)if(e.advance(),n==42&&e.next==47){if(l--,!l){e.advance();break}n=-1}else n==47&&e.next==42?(l++,n=-1):n=e.next;e.acceptToken(re)}else if((a==101||a==69)&&e.next==39)e.advance(),m(e,39,!0);else if((a==110||a==78)&&e.next==39&&t.charSetCasts)e.advance(),m(e,39,t.backslashEscapes),e.acceptToken(b);else if(a==95&&t.charSetCasts)for(let n=0;;n++){if(e.next==39&&n>1){e.advance(),m(e,39,t.backslashEscapes),e.acceptToken(b);break}if(!x(e.next))break;e.advance()}else if(a==40)e.acceptToken(oe);else if(a==41)e.acceptToken(ie);else if(a==123)e.acceptToken(le);else if(a==125)e.acceptToken(ce);else if(a==91)e.acceptToken(de);else if(a==93)e.acceptToken(me);else if(a==59)e.acceptToken(fe);else if(t.unquotedBitLiterals&&a==48&&e.next==98)e.advance(),B(e),e.acceptToken(U);else if((a==98||a==66)&&(e.next==39||e.next==34)){const n=e.next;e.advance(),t.treatBitsAsBytes?(m(e,n,t.backslashEscapes),e.acceptToken(Oe)):(B(e,n),e.acceptToken(U))}else if(a==48&&(e.next==120||e.next==88)||(a==120||a==88)&&e.next==39){let n=e.next==39;for(e.advance();ve(e.next);)e.advance();n&&e.next==39&&e.advance(),e.acceptToken(y)}else if(a==46&&e.next>=48&&e.next<=57)X(e,!0),e.acceptToken(y);else if(a==46)e.acceptToken(ue);else if(a>=48&&a<=57)X(e,!1),e.acceptToken(y);else if(u(a,t.operatorChars)){for(;u(e.next,t.operatorChars);)e.advance();e.acceptToken(pe)}else if(u(a,t.specialVar))e.next==a&&e.advance(),ye(e),e.acceptToken(_e);else if(u(a,t.identifierQuotes))m(e,a,!1),e.acceptToken(he);else if(a==58||a==44)e.acceptToken(ge);else if(x(a)){let n=D(e,String.fromCharCode(a));e.acceptToken(e.next==46?q:(r=t.words[n.toLowerCase()])!==null&&r!==void 0?r:q)}})}const E=V(Q),Qe=te.deserialize({version:14,states:"%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",stateData:",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",goto:"#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",nodeNames:"⚠ LineComment BlockComment String Number Bool Null ( ) [ ] { } ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:38,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,E],topRules:{Script:[0,25]},tokenPrec:0});function w(t){let e=t.cursor().moveTo(t.from,-1);for(;/Comment/.test(e.name);)e.moveTo(e.from,-1);return e.node}function g(t,e){let r=t.sliceString(e.from,e.to),a=/^([`'"])(.*)\1$/.exec(r);return a?a[2]:r}function v(t){return t&&(t.name=="Identifier"||t.name=="QuotedIdentifier")}function we(t,e){if(e.name=="CompositeIdentifier"){let r=[];for(let a=e.firstChild;a;a=a.nextSibling)v(a)&&r.push(g(t,a));return r}return[g(t,e)]}function R(t,e){for(let r=[];;){if(!e||e.name!=".")return r;let a=w(e);if(!v(a))return r;r.unshift(g(t,a)),e=w(a)}}function Se(t,e){let r=J(t).resolveInner(e,-1),a=Pe(t.doc,r);return r.name=="Identifier"||r.name=="QuotedIdentifier"||r.name=="Keyword"?{from:r.from,quoted:r.name=="QuotedIdentifier"?t.doc.sliceString(r.from,r.from+1):null,parents:R(t.doc,w(r)),aliases:a}:r.name=="."?{from:e,quoted:null,parents:R(t.doc,r),aliases:a}:{from:e,quoted:null,parents:[],empty:!0,aliases:a}}const Ce=new Set("where group having order union intersect except all distinct limit offset fetch for".split(" "));function Pe(t,e){let r;for(let n=e;!r;n=n.parent){if(!n)return null;n.name=="Statement"&&(r=n)}let a=null;for(let n=r.firstChild,l=!1,o=null;n;n=n.nextSibling){let i=n.name=="Keyword"?t.sliceString(n.from,n.to).toLowerCase():null,d=null;if(!l)l=i=="from";else if(i=="as"&&o&&v(n.nextSibling))d=g(t,n.nextSibling);else{if(i&&Ce.has(i))break;o&&v(n)&&(d=g(t,n))}d&&(a||(a=Object.create(null)),a[d]=we(t,o)),o=/Identifier$/.test(n.name)?n:null}return a}function Te(t,e){return t?e.map(r=>Object.assign(Object.assign({},r),{label:t+r.label+t,apply:void 0})):e}const qe=/^\w*$/,Ue=/^[`'"]?\w*[`'"]?$/;class P{constructor(){this.list=[],this.children=void 0}child(e){let r=this.children||(this.children=Object.create(null));return r[e]||(r[e]=new P)}childCompletions(e){return this.children?Object.keys(this.children).filter(r=>r).map(r=>({label:r,type:e})):[]}}function Be(t,e,r,a){let n=new P,l=n.child(a||"");for(let o in t){let i=o.indexOf("."),f=(i>-1?n.child(o.slice(0,i)):l).child(i>-1?o.slice(i+1):o);f.list=t[o].map(p=>typeof p=="string"?{label:p,type:"property"}:p)}l.list=(e||l.childCompletions("type")).concat(r?l.child(r).list:[]);for(let o in n.children){let i=n.child(o);i.list.length||(i.list=i.childCompletions("type"))}return n.list=l.list.concat(n.childCompletions("type")),o=>{let{parents:i,from:d,quoted:f,empty:p,aliases:h}=Se(o.state,o.pos);if(p&&!o.explicit)return null;h&&i.length==1&&(i=h[i[0]]||i);let c=n;for(let O of i){for(;!c.children||!c.children[O];)if(c==n)c=l;else if(c==l&&r)c=c.child(r);else return null;c=c.child(O)}let N=f&&o.state.sliceDoc(o.pos,o.pos+1)==f,k=c.list;return c==n&&h&&(k=k.concat(Object.keys(h).map(O=>({label:O,type:"constant"})))),{from:d,to:N?o.pos+1:void 0,options:Te(f,k),validFor:f?Ue:qe}}}function Xe(t,e){let r=Object.keys(t).map(a=>({label:e?a.toUpperCase():a,type:t[a]==Z?"type":t[a]==j?"keyword":"variable",boost:-1}));return M(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],H(r))}let Le=Qe.configure({props:[A.add({Statement:K()}),F.add({Statement(t){return{from:t.firstChild.to,to:t.to}},BlockComment(t){return{from:t.from+2,to:t.to-2}}}),G({Keyword:s.keyword,Type:s.typeName,Builtin:s.standard(s.name),Bits:s.number,Bytes:s.string,Bool:s.bool,Null:s.null,Number:s.number,String:s.string,Identifier:s.name,QuotedIdentifier:s.special(s.string),SpecialVar:s.special(s.name),LineComment:s.lineComment,BlockComment:s.blockComment,Operator:s.operator,"Semi Punctuation":s.punctuation,"( )":s.paren,"{ }":s.brace,"[ ]":s.squareBracket})]});class _{constructor(e,r){this.dialect=e,this.language=r}get extension(){return this.language.extension}static define(e){let r=xe(e,e.keywords,e.types,e.builtin),a=Y.define({name:"sql",parser:Le.configure({tokenizers:[{from:E,to:V(r)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}});return new _(r,a)}}function ze(t,e=!1){return Xe(t.dialect.words,e)}function Re(t,e=!1){return t.language.data.of({autocomplete:ze(t,e)})}function je(t){return t.schema?Be(t.schema,t.tables,t.defaultTable,t.defaultSchema):()=>null}function Ze(t){return t.schema?(t.dialect||$).language.data.of({autocomplete:je(t)}):[]}function Ne(t={}){let e=t.dialect||$;return new W(e.language,[Ze(t),Re(e,!!t.upperCaseKeywords)])}const $=_.define({}),We=_.define({charSetCasts:!0,doubleDollarQuotedStrings:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:C+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:S+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),De="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",Ie=S+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",Ve="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",Ae=_.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:C+"group_concat "+De,types:Ie,builtin:Ve});export{Ae as M,We as P,Ne as s};