<script>
import FirstChild from './components/FirstChild.vue';//컴포넌트를 지역등록하기 위해 불러옴

  export default {
    components:{//지역 등록
      FirstChild//불러온 FirstChild 컴포넌트를 components 옵션 속성으로 지역 등록
    },
    data(){
      return {
        visible: true, //visible 데이터 정의 및 초기값 세팅
      }
    },

    beforeCreate(){
      console.log('beforCreate');
    },
    created(){
      setTimeout(()=>{
        this.visible = false;//컴포넌트가 생성된 후 3초 후에 visible 데이터값을 false로 바꿈
      }, 3000);

      console.log('created');
    },
    beforeMount(){
      console.log('beforeMounted');
    },
    mounted(){
      console.log('mounted');
    },
    beforeUpdated(){
      console.log('beforeUpdated');
    },
    updated(){
      console.log('updated');
    },
    beforeUnmount(){
      console.log('beforeUnmount');
    },
    unmounted(){
      console.log('unmounted');
    },

  }
</script>



<template>
  <FirstChild v-if="visible"/>
</template>



<style>

</style>
