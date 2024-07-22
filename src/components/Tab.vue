<template>
  <div class="tab">
    <!--  tab栏  -->
    <ul>
      <li @click="change(index)" 
      :class="index == currentIndex ?'active':'' " 
      v-for="(item,index) in list"
      :key="item.id">{{ item.title }}
      </li> 
    </ul>

    <!--  对应显示的图片 -->
    <div :class="index == currentIndex ? 'current' : '' " 
    v-for="(item,index) in list" :key="item.id">
     <img :src="item.imgSrc" alt="">
     
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      currentIndex: 0,
      list: [
        { id: 1, title: 'apple', imgSrc: 'src/assets/img/apple.png' },
        { id: 2, title: 'lemon', imgSrc: 'src/assets/img/lemon.png' },
        { id: 3, title: 'orange', imgSrc: 'src/assets/img/orange.png' }
      ]
    }
  },
  methods: {
    change(index) {
      this.currentIndex = index
    }

  },
}
</script>
<style scoped>
.tab ul {
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.tab ul li {
  box-sizing: border-box;
  padding: 0;
  float: left;
  width: 100px;
  height: 45px;
  line-height: 45px;
  list-style: none;
  text-align: center;
  border-top: 1px solid blue;
  border-right: 1px solid blue;
  cursor: pointer;
}

.tab ul li:first-child {
  border-left: 1px solid blue;
}

.tab ul li.active {
  background-color: orange;
}

.tab div {
  width: 500px;
  height: 300px;
  display: none;
  text-align: center;
  font-size: 30px;
  line-height: 300px;
  border: 1px solid blue;
  border-top: 0px;
}

.tab div.current {
  display: block;
}
</style>