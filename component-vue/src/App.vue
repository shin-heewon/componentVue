<script>
import FirstChild from './components/FirstChild.vue';
import {message, reversed} from '@/keys.js';//provide 속성의 키를 Symbol 값으로 사용하여 데이터를 주입


  export default {

    components :{
     FirstChild,
    },
    provide(){
      return{
        // message : this.message,
        // reversed : this.reversed,
        [message] : this.message,
        [reversed] : this.reversedMessage,
      }
    },
    data(){
      return {
        message:'Hello FirstChild!',
      }
    },
    computed:{
      reversedMessage(){
        return this.message.split('').reverse().join('');
      }
    },
    
  }
</script>

<template>
  <FirstChild/>
</template>

