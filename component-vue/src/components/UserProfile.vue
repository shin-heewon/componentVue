<script>
    export default{
        //props: ['name', 'company', 'age'],//사용자 정의 속성 name, company 값을 받는다.

        props: {
            name : {
                type : String,
                Required : false,
                validator : function(value){
                    return value.length > 1;
                }
            }, 
            age:{
                type : Number,
                default: function(){
                    return 10;
                }
                }, 
            company:String
        },

        created(){
            console.log(typeof this.age);
        },
        emits:[
            'print-hello',
        ],

        methods : {
            parentEventCall(){
                this.$emit('print-hello', 'ssg', 20);
            }
        }

    }
</script>

<template>
    <!-- <p>이름 : {{ name }}</p>
    <p>나이 : {{ age }}</p>
    <p>회사명 : {{ company }}</p> -->
    <button @click="$emit('print-hello', 'ssg', 20)">클릭1</button><!-- $emit() 발신 방식을 인라인 핸들러 방식-->
    <br>
    <!-- <button @click="parentEventCall">클릭2</button>메서드 핸들러 방식 -->

</template>