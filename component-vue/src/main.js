

import { createApp } from 'vue'
import App from './App.vue'

// import FirstChild from '@/components/FirstChild.vue'
// import SecondChild from './components/SecondChild.vue';
// import ThirdChild from './components/ThirdChild.vue';


const app = createApp(App);
// app.component('FirstChild', FirstChild);
// app.component('SecondChild', SecondChild);
// app.component('ThirdChild', ThirdChild);

app.provide('globalMessage', 'SSG-JAVA-Developer-class-4TH');//key-value 형태
//main.js provide 기능을 사용하여 모든 컴포넌트에서 provide()함수로 정의한 데이터를 공유함


app.mount('#app');