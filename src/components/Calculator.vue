
<!--  -->
<template>
 <input type="text" v-model.number="num1" placeholder="Enter first number" />
 <select v-model="operation">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
 </select>
 <input type="text" v-model.number="num2" placeholder="Enter second number" />
 <button @click="claculator">Calculate</button>


 <p>Result: {{ result }}</p>
 
 <input type="text" v-model.trim = "msg">
 <br>
 <input type="text" v-model.lazy = "msg">

 <p>Message: {{ msg }}</p>
</template>

<script>
export default {
  data () {
        return {
            num1: 1,
            num2: 0,
            operation: "+",
            result: 0,
            msg:0   
        }
    },
  methods: {
      claculator() {
          switch (this.operation) {
            case "+":
                this.result = this.num1 + this.num2;
                break;
            case "-":
                this.result = this.num1 - this.num2;
                break;
            case "*":
                this.result = this.num1 * this.num2;
                break;
            case "/":
                this.result = this.num1 / this.num2;
                break;
        }
     }
  }
    
}
</script>

<style  scoped>

</style>
