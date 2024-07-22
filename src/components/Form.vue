<!--  -->
<template>
 ID: <input type = 'text' v-model="id" v-focus>
 <label>
    品牌<input type="text" v-model="brand" v-color="'red'">
  </label>
  <button @click="add" :disabled="submit">添加车辆</button>
  <label>
    <input type="text" v-model.lazy="keyword">
  </label>
  <button>搜索</button>
  <span>车辆总数：{{ total }}</span>

  <table border="2" width="800">
    <thead>
      <tr>
        <th>汽车编号</th>
        <th>汽车品牌</th>
        <th>创建时间</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value) in search()" :key=value.id>
        <td>{{ value.id }}</td>
        <td>{{ value.brand }}</td>
        <td>{{ value.date }}</td>
        <td>
          <a href="javascript:;">编辑</a>
          <a href="javascript:;" @click="deleteById(value.id)">删除</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
        return {
            id: '',
            brand: '',
            color: '',
            list: [
            {id:1, brand:'奔驰',date:new Date()},
            {id:2, brand:'奥迪',date:new Date()},
            {id:3, brand:'宝马',date:new Date()},
            ],
            submit: false,
            keyword: '',
            len: 0
        
    }
    },
    methods: {
      add() {
        this.list.push({ id: this.id, brand: this.brand, date: new Date() });
        this.id = this.brand = '';
      },
      deleteById(id) {
        var index = this.list.findIndex((item, index) => {
          return item.id == id
        });
        this.list.splice(index, 1);
        this.list = this.list.filter((item, index) => {

          return item.id != id;
        });
        
      },
      search() {
        var arr = this.list.filter((item) => {
          return item.brand.includes(this.keyword);
        });
        this.len = arr.length;
        return arr;
      }
  },
  directives: {
      
    focus: {
      inserted: function (el) {
        el.focus()
      }
    },
    color: {
      mounted(el, binging) {
        el.style.color = binging.value;
      }
    }
  },
  computed: {
    total() {
      return this.list.length;
      }
  },
  watch: {
    brand(newValue) {
      var flag = this.list.some(function (item) {
        return item.brand == newValue.trim();
      });
      if (flag) {
        this.submit = true;
      } else {
        this.submit = false;
      }
      }
    }
  }

</script>

<style  scoped>
input {
  margin: 10px 20px;
}

span {
  margin-left: 60px;
}

a {
  margin-left: 10px;
}

</style>
