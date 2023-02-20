export default () => ({
  async request(url = "", options = { method: "get" }) {
    return await fetch(`http://127.0.0.1:3003/news/${url}`, options).then((r) =>
      r.json()
    );
  },
  // 进行请求
  async get(url) {
    return await this.request(url);
  },

  // 进行删除
  async delete(url) {
    return await this.request(url, { method: "delete" });
  },

  /**
   * 发起post请求进行添加操作
   * 发送的 JSON 类型需要设置请求头为 application/json;charset=utf-8
   * this.request('',{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
   * */
  // 进行post请求
  async post(data) {
    return await this.request("", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
});
