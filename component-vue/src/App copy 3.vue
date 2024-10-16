<script>
import FirstChild from './components/FirstChild.vue';


  export default {

    components :{
      FirstChild,
      // provide(){//컴포넌트 공유해주는 메소드?
      //   return {
      //     message : this.message,
      //   };
      // },
    },

    // data(){
    //   return {
    //     message : '하이 뷰!',
    //     reverseMessage : this.reverseMessage,
    //   }
    // },

    // computed : {
    //   reverseMessage(){
    //     return this.message.split('').reverse().join('');
    //   },
    // },

    mounted(){
      // const dom1 = this.$refs.dom1;//마운트 된 후!!에 DOM객체인 dom1에 접근해야 한다., beforeMount상태에서는 불가능, 객체 참조는 가능하지만 값은 못 들고(참조) 옴
      // const text = dom1.innerText;
      // console.log(text);

      const childNum = this.$refs.child.number;
      const childDoubleNum = this.$refs.child.doubleNum;

      console.log(`메서드 호출 전 : ${childNum}`);
      console.log(`메서드 호출 전 : ${childDoubleNum}`);
      
      setTimeout(()=>{
        this.$refs.child.increment();

        //변수를 재할당 하는 것은 좋지 않음, provide 함수를 사용해서 공유 개념으로 자식 컴포넌트의 값을 받는 것이 좋음
        // const childNum = this.$refs.child.number;
        // const childDoubleNum = this.$refs.child.doubleNum; 
        
        console.log(`메서드 호출 후 : ${childNum}`);
        console.log(`메서드 호출 후 : ${childDoubleNum}`);
      });
    },
    
    // beforeMount(){
    //   const dom1 = this.$refs.dom1;//마운트 된 후!!에 DOM객체인 dom1에 접근해야 한다., beforeMount상태에서는 불가능, 객체 참조는 가능하지만 값은 못 들고(참조) 옴
    //   const text = dom1.innerText;
    //   console.log(`마운트 전 ${text}`);
    // }
  }
</script>

<template>
  <!-- <h1 ref="dom1">h1 태그입니당</h1> -->
   <FirstChild ref="child"/>
</template>

