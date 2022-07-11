# jsjs

[https://zhuanlan.zhihu.com/p/34191831](https://zhuanlan.zhihu.com/p/34191831)

醉了,一个玩具项目那么多 star．好吧，近期我把这东西代码和注释完善一下，不追求一定能工业应用，但至少能做出一个教学级别项目给大家展示设计思路，保证不辜负这么多 star．

![demo.jpg](/demo.gif)

基于原项目做一下修改:

1. 运行的代码作用域修改为继承自全局作用域，此前为手动传入需要使用的api，类似于eval

2. 代码中函数调用`test()`(非`x.xxx()`类调用)this绑定为null(`strict mode`)，此前为interpreter实例，类似于eval