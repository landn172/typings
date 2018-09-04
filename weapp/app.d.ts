/// <reference path="./index.d.ts" />

declare type AppShowOptions = {
  /**
   * 打开小程序的路径
   * @type {string}
   */
  path: string;
  /**
   * 打开小程序的query
   *
   * @type {object}
   */
  query: object;
  /**
   * 打开小程序的场景值
   *
   * @type {number}
   */
  scene: number;
  /**
   * shareTicket，详见:
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#%E8%8E%B7%E5%8F%96%E6%9B%B4%E5%A4%9A%E8%BD%AC%E5%8F%91%E4%BF%A1%E6%81%AF
   * @type {string}
   */
  shareTicket: string;
  /**
   * 当场景为由从另一个小程序或公众号或App打开时
   */
  referrerInfo?: {
    /**
     * 来源小程序或公众号或App的 appId
     *
     * @type {string}
     */
    appId: string;
    /**
     * 来源小程序传过来的数据
     * scene=1037或1038等时支持，具体详见文档
     * @type {object}
     */
    extraData: object;
  };
};

declare type CombinedAppInstance<
  Instance extends App,
  Data,
  Method
> = Instance & Method & wx.IData;

declare type ThisTypedAppOptionsWithArrayProps<
  A extends AppOptions,
  Data extends Record<string, any>,
  Method
> = AppOptions<A, Data> &
  Method &
  ThisType<CombinedAppInstance<A, Data, Method>>;

declare interface AppOptions<P extends App = App, Data = DefaultData<P>> {
  [key: string]: any;
  /**
   * 生命周期函数--监听小程序初始化。当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch?: (opts: AppShowOptions) => void;

  /**
   * 生命周期函数--监听小程序显示。当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow?: (opts: AppShowOptions) => void;

  /**
   * 生命周期函数--监听小程序隐藏。当小程序从前台进入后台，会触发 onHide
   */
  onHide?: () => void;

  /**
   * 错误监听函数--当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError?: (msg: string) => void;

  /**
   * 小程序要打开的页面不存在时触发。
   * @version 1.9.90
   * @param res.path 不存在页面的路径
   * @param res.query 打开不存在页面的 query
   * @param res.isEntryPage 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）
   */
  onPageNotFound?: (
    res: {
      path: string;
      query: any;
      isEntryPage: boolean;
    }
  ) => void;
}

/**
 * App 实现的接口对象
 */
declare interface IApp {
  [key: string]: any;
}

declare interface App extends IApp {}

/**
 * Page的构造方法
 */
declare interface IAppConstructor<P extends App = App> {
  <Data = Record<string, any>, Method = object>(
    opts: ThisTypedAppOptionsWithArrayProps<P, Data, Method>
  ): void;
}

declare var App: IAppConstructor;

declare function getApp(): AppOptions;
