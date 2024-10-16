<script>
    export default{
        // beforeUnmount(){
        //     console.log('beforeUnmonunt');
        // },
        // unmounted(){
        //     console.log('unmounted');
        // },

      inject:['message',
        
      ],

        data(){
      return {
        number : 10,
      };
    },

    computed : {
      doubleNum(){
        return this.number *2;
      }
    },
    methods : {
      increment(){
        this.number++;
      },
    },

    }

</script>

<template>
    <h1>컴포넌트1</h1>
    <p>First Component</p>
    <p>{{ number }}</p>
</template>

<style>
    h1{
        color: cornflowerblue;
    }
    p{
        color: salmon;
    }
</style>