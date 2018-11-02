/// <reference path="../base.d.ts" />

declare namespace wx {
  interface RequestResult {
    /**
     * 开发者服务器返回的数据
     */
    data: string | IData | ArrayBuffer;
    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode: number;
    /**
     * 开发者服务器返回的 HTTP Response Header
     * @since 1.2.0
     */
    header: IData;
  }

  interface RequestOptions extends BaseOptions {
    /**
     * 开发者服务器接口地址
     */
    url: string;

    /**
     * 请求的参数
     */
    data?: string | IData;

    /**
     * 设置请求的 header , header 中不能设置 Referer
     */
    header?: IData;

    /**
     * （需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     */
    methods?:
      | 'OPTIONS'
      | 'GET'
      | 'HEAD'
      | 'POST'
      | 'PUT'
      | 'DELETE'
      | 'TRACE'
      | 'CONNECT';

    /**
     * 默认为 json。如果设置了 dataType 为 json，则会尝试对响应的数据做一次 JSON.parse
     */
    dataType?: string;

    /**
     * 设置响应的数据类型。合法值：text、arraybuffer
     * @since 1.7.0
     */
    responseType?: string;

    /**
     * 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
     */
    success?: (res?: RequestResult) => void;
  }

  /**
   * 返回一个 requestTask 对象，通过 requestTask，可中断请求任务。
   * @since 1.4.0
   */
  interface requestTask {
    abort?: () => void;
  }

  /**
   * 发起网络请求。`wx.request`发起的是https请求。**一个微信小程序，同时只能有5个网络请求连接**。
   */
  export function request(options: RequestOptions): requestTask | void;
}
