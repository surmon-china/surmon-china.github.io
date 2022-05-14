import dedent from 'dedent'
import NaiveBayes from 'naivebayes'

const init = dedent`
import NaiveBayes from 'naivebayes'

const classifier = new NaiveBayes()
`

const code = dedent`
// classifier
console.log(classifier)

// positive
classifier.learn('What is your name?', 'positive')
classifier.learn('amazing, awesome movie!! Yeah!! Oh boy.', 'positive')
classifier.learn('Sweet, this is incredibly, amazing, perfect, great!!', 'positive')
classifier.learn('Do one thing at a time, and do well.', 'positive')
classifier.learn('Never forget to say “thanks”.', 'positive')
classifier.learn('Believe in yourself.', 'positive')
classifier.learn('Never put off what you can do today until tomorrow.', 'positive')
classifier.learn('Do not aim for success if you want it; just do what you love and believe in, and it will come naturally.', 'positive')
classifier.learn('Whatever is worth doing is worth doing well.', 'positive')
classifier.learn('Keep on going never give up.', 'positive')
classifier.learn('The foolish man seeks happiness in the distance, the wise grows it under his feet.', 'positive')

// foul
classifier.learn('Get out !Beat it! Get lost!', 'foul')
classifier.learn('Go to hell! Go to the devil!', 'foul')
classifier.learn('Oh, hell is bells!', 'foul')
classifier.learn('You SOB (son of a)!', 'foul')
classifier.learn('You damned (disgusting) bastard!', 'foul')
classifier.learn('Idiot! You damned fool!', 'foul')
classifier.learn('Disgusting!', 'foul')
classifier.learn('I will see you in hell first!', 'foul')
classifier.learn('You pig!', 'foul')
classifier.learn('God damn !', 'foul')
classifier.learn('Whore! Slut!', 'foul')
classifier.learn('You hypocrite!', 'foul')
classifier.learn('You ass licker (kisser)!', 'foul')
classifier.learn('What a mess!', 'foul')

// categorize
console.log('expected: positive, actually: ', classifier.categorize('My name is Surmon.'))
console.log('expected: positive, actually: ', classifier.categorize('awesome, cool, amazing!! Yay.'))
console.log('expected: foul, actually: ', classifier.categorize('get out!!!'))
console.log('expected: foul, actually: ', classifier.categorize('Fuck!'))

// category probability
console.log('positive & probability: ', classifier.categorize('How are you?', true))

// all probabilities
console.log('probabilities: ', classifier.probabilities('Love is the only thing that holds the dark at bay.'))

console.log('JSON:', classifier.toJson())
`

export default {
  name: 'Base case',
  factory: () => new NaiveBayes(),
  init,
  code
}
