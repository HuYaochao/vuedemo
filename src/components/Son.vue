 <template>  
  <div>
    <slot name="header"></slot> <!-- 具名插槽 "header" -->
    <slot></slot> <!-- 默认插槽 -->
    <slot name="footer"></slot> <!-- 具名插槽 "footer" -->
  </div>
</template>

<script>
export default {
  name: 'ChildComponent'
};
</script>
