import{a as p,t,b as l,L as u,p as a}from"./index-DpoEONWk.js";import{h as m}from"./index-BS-TlbDU.js";import{c}from"./index-DYwQiRMP.js";import{L as b,a as n}from"./index-CVNF85wD.js";import"./index-CCOKqeRu.js";import"./index-BkX0AMOV.js";const S=b.deserialize({version:14,states:"%pOVOWOOObQPOOOpOSO'#C_OOOO'#Cp'#CpQVOWOOQxQPOOO!TQQOOQ!YQPOOOOOO,58y,58yO!_OSO,58yOOOO-E6n-E6nO!dQQO'#CqQ{QPOOO!iQPOOQ{QPOOO!qQPOOOOOO1G.e1G.eOOQO,59],59]OOQO-E6o-E6oO!yOpO'#CiO#RO`O'#CiQOQPOOO#ZO#tO'#CmO#fO!bO'#CmOOQO,59T,59TO#qOpO,59TO#vO`O,59TOOOO'#Cr'#CrO#{O#tO,59XOOQO,59X,59XOOOO'#Cs'#CsO$WO!bO,59XOOQO1G.o1G.oOOOO-E6p-E6pOOQO1G.s1G.sOOOO-E6q-E6q",stateData:"$g~OjOS~OQROUROkQO~OWTOXUOZUO`VO~OSXOTWO~OXUO[]OlZO~OY^O~O[_O~OT`O~OYaO~OmcOodO~OmfOogO~O^iOnhO~O_jOphO~ObkOqkOrmO~OcnOsnOtmO~OnpO~OppO~ObkOqkOrrO~OcnOsnOtrO~OWX`~",goto:"!^hPPPiPPPPPPPPPmPPPpPPsy!Q!WTROSRe]Re_QSORYSS[T^Rb[QlfRqlQogRso",nodeNames:"⚠ Content Text Interpolation InterpolationContent }} Entity Attribute VueAttributeName : Identifier @ Is ScriptAttributeValue AttributeScript AttributeScript AttributeName AttributeValue Entity Entity",maxTerm:36,nodeProps:[["isolate",-3,3,13,17,""]],skippedNodes:[0],repeatNodeCount:4,tokenData:"'y~RdXY!aYZ!a]^!apq!ars!rwx!w}!O!|!O!P#t!Q![#y![!]$s!_!`%g!b!c%l!c!}#y#R#S#y#T#j#y#j#k%q#k#o#y%W;'S#y;'S;:j$m<%lO#y~!fSj~XY!aYZ!a]^!apq!a~!wOm~~!|Oo~!b#RX`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|!b#qP;=`<%l!|~#yOl~%W$QXY#t`!b}!O!|!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y%W$pP;=`<%l#y~$zXX~`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|~%lO[~~%qOZ~%W%xXY#t`!b}!O&e!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y!b&jX`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|!b'^XW!b`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|",tokenizers:[6,7,new n("b~RP#q#rU~XP#q#r[~aOT~~",17,4),new n("!k~RQvwX#o#p!_~^TU~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOU~~![P;=`<%lm~!bP#o#p!e~!jOk~~",72,2),new n("[~RPwxU~ZOp~~",11,15),new n("[~RPrsU~ZOn~~",11,14),new n("!e~RQvwXwx!_~^Tc~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOc~~![P;=`<%lm~!dOt~~",66,35),new n("!e~RQrsXvw^~^Or~~cTb~Oprq!]r!^;'Sr;'S;=`!^<%lOr~uUOprq!]r!]!^!X!^;'Sr;'S;=`!^<%lOr~!^Ob~~!aP;=`<%lr~",66,33)],topRules:{Content:[0,1],Attribute:[1,7]},tokenPrec:157}),g=c.parser.configure({top:"SingleExpression"}),o=S.configure({props:[p({Text:t.content,Is:t.definitionOperator,AttributeName:t.attributeName,VueAttributeName:t.keyword,Identifier:t.variableName,"AttributeValue ScriptAttributeValue":t.attributeValue,Entity:t.character,"{{ }}":t.brace,"@ :":t.punctuation})]}),s={parser:g},P=o.configure({wrap:a((O,e)=>O.name=="InterpolationContent"?s:null)}),Q=o.configure({wrap:a((O,e)=>O.name=="AttributeScript"?s:null),top:"Attribute"}),y={parser:P},d={parser:Q},r=m();function i(O){return O.configure({dialect:"selfClosing",wrap:a(T)},"vue")}const R=i(r.language);function T(O,e){switch(O.name){case"Attribute":return/^(@|:|v-)/.test(e.read(O.from,O.from+2))?d:null;case"Text":return y}return null}function X(O={}){let e=r;if(O.base){if(O.base.language.name!="html"||!(O.base.language instanceof l))throw new RangeError("The base option must be the result of calling html(...)");e=O.base}return new u(e.language==r.language?R:i(e.language),[e.support,e.language.data.of({closeBrackets:{brackets:["{",'"']}})])}const f=`<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="changeGreeting">Click me!</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        greeting: 'Hello, Vue 3!'
      }
    },
    methods: {
      changeGreeting() {
        this.greeting = 'Hello, Vue 3 Updated!'
      }
    }
  }
<\/script>

<style scoped>
  h1 {
    color: blue;
  }
</style>
`,V={language:X,code:f};export{V as default};
