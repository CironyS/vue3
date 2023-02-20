/**
 * 将网络请求封装到一个文件中
 * 在父组件中，只调用一次网络请求,请求数据的方法要手动调用，不能再函数当中写，否则调用一次函数就执行一次，避免这样
 */
import { ref, watch } from "vue";
import useRequest from "../composables/useRequest";

const todos = ref([]);

// 进行排序
const orderBy = ref("desc");

export default () => {
  const request = useRequest();

  // 要进行手动调用请求函数
  const load = async () => {
    todos.value = await request.get();
    sort();
  };

  // 进行删除操作
  const del = async id => {
    await request.delete(id);
    load();
  };

  const sort = () => {
    todos.value = Array.prototype.sort.call(todos.value, (a, b) => {
      return orderBy.value == "asc" ? a.id - b.id : b.id - a.id;
    });
  };

  // 监听排序默认值
  watch(orderBy, value => sort());

  // 进行添加操作
  const add = async title => {
    await request.post(title);
    load();
  };

  return { todos, load, del, add, orderBy };
};
