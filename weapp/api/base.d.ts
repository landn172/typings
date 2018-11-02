declare namespace wx {
  interface IData {
    [key: string]: any;
  }

  /**
   * callback回掉函数
   */
  type BaseCallback = (res: any) => void;

  interface BaseOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: BaseCallback;

    /**
     * 接口调用失败的回调函数
     */
    fail?: BaseCallback;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: BaseCallback;
  }

  interface SuccessOptions extends BaseOptions {
    /**
     * 接口调用成功的回调函数
     * @param {{errMsg: string}} res
     */
    success?: (
      res: {
        errMsg: string;
      }
    ) => void;
  }

  interface IEventTarget {
    /**
     * 事件源组件的id
     */
    id: string;
    /**
     * 当前组件的类型
     */
    tagName: string;
    /**
     * 事件源组件上由data-开头的自定义属性组成的集合
     */
    dataset: wx.IData;
  }

  interface IEventTouch {
    clientX: number;
    clientY: number;
    identifier: number;
    pageX: number;
    pageY: number;
  }

  /**
   * base事件参数
   */
  interface IBaseEvent {
    /**
     * 事件类型
     */
    type: string;
    timeStamp: number;
    target: IEventTarget;
    currentTarget: IEventTarget;
  }

  interface ICustomEvent<P extends wx.IData = wx.IData> extends IBaseEvent {
    /**
     * 额外的信息
     */
    detail: P;
  }

  /**
   * 触摸事件返回
   */
  interface ITouchEvent<
    P extends wx.IData = wx.IData,
    T extends IEventTouch = IEventTouch
  > extends ICustomEvent<P> {
    touches: T[];
    changedTouches: T[];
  }

  interface ShareOptions {
    /**
     * 分享标题, 默认为当前小程序名称
     */
    title?: string;

    /**
     * 分享描述, 默认为当前小程序名称
     */
    desc?: string;

    /**
     * 分享路径, 默认为当前页面path, 必须是以 / 开头的完整路径
     */
    path?: string;
  }
}
