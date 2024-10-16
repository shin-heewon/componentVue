<script>
import {message, reversed} from '@/keys.js';//provide 속성의 키를 Symbol 값으로 사용하여 데이터를 주입


    export default{
        // inject : [
        //   'message',
        //   'reversed',
        // ],
        inject : {
          customMessage : {
            from : message, //keys.js에서 정의한 심볼 값
            default : 'default Hello',
          },

          customReversedMessage : {
            from : reversed,
            default : '디폴트',
          },
        },
    }

</script>

<template>
    <h1>{{customMessage}}</h1>
    <h1>{{ customReversedMessage }}</h1>
</template>

<style>
    h1{
        color: cornflowerblue;
    }
    p{
        color: salmon;
    }
</style>