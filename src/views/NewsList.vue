<template>
  <article class="newsList">
    <h2>NEWS<span>(총 {{allUserNumber}}개)</span></h2>
    
    <ul>
      <li v-for="v in data" :key="v.id">
        <p>{{v.date}}</p>
        <p>{{v.content}}</p>
        <button @click="close(v.id)">X</button>
      </li>
    </ul>
  </article>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';

export default {
  name: 'NewsList',
  computed:{
    ...mapState(['data']),
    ...mapGetters(['allUserNumber'])
  },
  methods:{
    ...mapActions(['getData','deleteUser']),
    close(id){
      this.deleteUser(id);
    }
  },
  created(){
    this.getData()
  },
}
</script>

<style lang="scss">
ul,li{list-style-type: none;padding:0;margin:0;}
h2{text-align: center;}
h2 span{font-size:1rem;}
  .newsList{
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width:20%;
        background:radial-gradient(circle, rgba(238, 174, 202, 0.611) 0%, rgba(192, 221, 255, 0.557) 100%);
        padding:30px;
        position: relative;
        margin:5%;
        button{position:absolute; right:10px; top:10px;}
        p{
          display:-webkit-box; 
          word-wrap:break-word; 
          -webkit-line-clamp:3; 
          -webkit-box-orient:vertical; 
          overflow:hidden; 
          text-overflow:ellipsis;
        }
      }
    }
  }
</style>
