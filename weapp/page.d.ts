/// <reference path="./index.d.ts" />

declare type CombinedPageInstance<Instance extends Page, Data, Method> = {
  data: Data;
} & Instance &
  Method &
  wx.IData;

declare type ThisTypedPageOptionsWithArrayProps<
  P extends Page,
  Data extends Record<string, any>,
  Method
> = PageOptions<P, Data> &
  Method &
  ThisType<CombinedPageInstance<P, Data, Method>>;

/**
 * Page 实现的接口对象
 */
declare interface PageOptions<P extends Page = Page, Data = DefaultData<P>> {
  /**
   * 开发者可以添加任意的函数或数据到 object 参数中，
   * 在页面的函数中用 this 可以访问
   */
  [key: string]: any;

  /**
   * 生命周期函数--监听页面加载
   * @param options 接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query
   */
  onLoad?: (options?: wx.IData) => void;

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady?: () => void;

  /**
   * 生命周期函数--监听页面显示
   */
  onShow?: () => void;

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide?: () => void;

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload?: () => void;

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh?: () => void;

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom?: () => void;

  onShareAppMessage?: () => wx.ShareOptions;

  /**
   * 将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
   */
  // setData: (data: any) => void;

  /**
   * 页面滚动触发事件的处理函数
   */
  onPageScroll?: ({ scrollTop }: { scrollTop: number }) => void;

  /**
   * 当前是 tab 页时，点击 tab 时触发
   */
  onTabItemTap?: () => void;
}

declare interface IPage {
  /**
   * 将数据从逻辑层发送到视图层，同时改变对应的
   */
  setData(opts: wx.IData): void;
  /**
   * 获取到当前页面的路径
   * @version 1.2.0
   */
  route: string;
  /**
   * @deprecated 请使用route但须考虑兼容
   */
  __route__: string;
}

declare interface Page extends IPage {}

declare type DefaultData<V> = object | ((this: V) => object);
declare type DefaultMethods<V> = {
  [key: string]: (this: V, ...args: any[]) => any;
};

/**
 * Page的构造方法
 */
declare interface IPageConstructor<P extends Page = Page> {
  <Data = Record<string, any>, Method = object>(
    opts: ThisTypedPageOptionsWithArrayProps<P, Data, Method>
  ): void;
}

/**
 * getCurrentPages() 函数用于获取当前页面栈的实例，
 * 以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
 */
declare function getCurrentPages(): CombinedPageInstance<
  Page,
  DefaultData<Page>,
  DefaultMethods<Page>
>[];

declare var Page: IPageConstructor;
