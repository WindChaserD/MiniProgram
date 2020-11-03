// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:'DD',
      list:[
        {name:'A',num:1},
        {name:'B',num:2},
        {name:'C',num:3}
      ],
      counter:0
  },
  AddNum(){
      // 错误的更改参数方法
      // this.data.counter += 1;
      // console.log(this.data.counter);

      //正确的修改并且更新页面的方法
      this.setData({
        counter: this.data.counter + 1
      })
  },
  SubNum(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
})