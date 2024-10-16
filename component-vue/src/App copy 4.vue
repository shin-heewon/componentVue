<script>
import UserProfile from './components/UserProfile.vue';


  export default {

    components :{
      UserProfile,
    },
    data(){
      return {
        name : '김',//유효성 검사에서 한 글자 이상이라고 했는데 해당이 한 글자만 적어서 저장이 안됨?
      }
    },
    methods:{
      printHello(name, age){
        alert(`HELLO!! ${name}(${age})님!! `);
      }
    }


  }
</script>

<template>
  <!--<UserProfile :name="name" company="ssg.com" v-bind:age="age"/> :age="30" 과 같다. 컴포넌트 사용자 정의 속성을 v-bind: 이용한 것과 같음-->
  <!-- <UserProfile :name="name" v-bind:age="age"/> -->
   <UserProfile @print-hello="(name, age)=>printHello(name, age)"/>
</template>

