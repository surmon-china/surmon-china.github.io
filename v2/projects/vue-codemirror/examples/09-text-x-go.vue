<template>
  <codemirror v-model="code" :options="cmOption" />
</template>

<script>
  import dedent from 'dedent'
  import { codemirror } from 'vue-codemirror'

  // language
  import 'codemirror/mode/go/go.js'

  // theme css
  import 'codemirror/theme/mbo.css'

  export default {
    name: 'codemirror-example-go',
    title: 'Mode: text/x-go & Theme: mbo',
    components: {
      codemirror
    },
    data() {
      return {
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/x-go',
          theme: 'mbo'
        },
        code: dedent`
          // Prime Sieve in Go.
          // Taken from the Go specification.
          // Copyright © The Go Authors.

          package main

          import "fmt"

          // Send the sequence 2, 3, 4, ... to channel 'ch'.
          func generate(ch chan<- int) {
            for i := 2; ; i++ {
              ch <- i  // Send 'i' to channel 'ch'
            }
          }

          // Copy the values from channel 'src' to channel 'dst',
          // removing those divisible by 'prime'.
          func filter(src <-chan int, dst chan<- int, prime int) {
            for i := range src {    // Loop over values received from 'src'.
              if i%prime != 0 {
                dst <- i  // Send 'i' to channel 'dst'.
              }
            }
          }

          // The prime sieve: Daisy-chain filter processes together.
          func sieve() {
            ch := make(chan int)  // Create a new channel.
            go generate(ch)       // Start generate() as a subprocess.
            for {
              prime := <-ch
              fmt.Print(prime, "
          ")
              ch1 := make(chan int)
              go filter(ch, ch1, prime)
              ch = ch1
            }
          }

          func main() {
            sieve()
          }
        `
      }
    }
  }
</script>

