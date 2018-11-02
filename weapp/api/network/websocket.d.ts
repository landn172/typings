/// <reference path="../base.d.ts" />
declare namespace wx {
  interface ConnectSocketOptions extends BaseOptions {
    /**
     * 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
     */
    url: string;

    /**
     * 请求的数据
     */
    data?: string;

    /**
     * HTTP Header , header 中不能设置 Referer
     */
    header?: IData;

    /**
     * 默认是GET，有效值为： OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
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
     * 子协议数组
     * @since 1.4.0
     */
    protocols?: string[];
  }

  /**
   * WebSocket 任务，可通过 wx.connectSocket() 接口创建返回。
   * @since 1.7.0
   */
  interface SocketTask extends BaseOptions {
    /**
     * 通过 WebSocket 连接发送数据。
     */
    send?: (options: SendSocketTaskOptions) => void;

    /**
     * 关闭 WebSocket 连接。
     */
    close?: (options: CloseSocketTaskOptions) => void;

    /**
     * 监听 WebSocket 连接打开事件。
     */
    onOpen?: (res: any) => void;

    /**
     * 监听 WebSocket 连接关闭事件。
     */
    onClose?: (res: any) => void;

    /**
     * 监听 WebSocket 连接打开事件。
     */
    onError?: (
      res: {
        errMsg: string;
      }
    ) => void;

    onMessage?: (
      data: {
        errMsg: string | ArrayBuffer;
      }
    ) => void;
  }

  /**
   * 创建一个 [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket?t=1477656499061) 连接；
   * 基础库 1.7.0 之前，一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
   * 基础库版本 1.7.0 及以后，支持存在多个 WebSokcet 连接，每次成功调用 wx.connectSocket 会返回一个新的 SocketTask。
   */
  export function connectSocket(options: ConnectSocketOptions): SocketTask;

  /**
   * 监听WebSocket连接打开事件。
   */
  export function onSocketOpen(callback: BaseCallback): void;

  /**
   * 监听WebSocket错误。
   */
  export function onSocketError(callback: BaseCallback): void;

  export interface SendSocketMessageOptions extends BaseOptions {
    /**
     * 需要发送的内容
     */
    data: string | ArrayBuffer;
  }

  /**
   * 通过 WebSocket 连接发送数据，需要先 [wx.connectSocket](#wx.connectSocket)，并在 [wx.onSocketOpen](#wx.onSocketOpen) 回调之后才能发送。
   */
  export function sendSocketMessage(options: SendSocketMessageOptions): void;

  interface SocketMessageResponse {
    /**
     * 服务器返回的消息
     */
    data: string | any[];
  }

  /**
   * 监听WebSocket接受到服务器的消息事件。
   */
  export function onSocketMessage(
    callback: (res: SocketMessageResponse) => void
  ): void;

  /**
   *
   */
  interface CloseSocketOptions extends BaseOptions {
    /**
     * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
     * @since 1.4.0
     */
    code?: number;
    /**
     * 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
     * @since 1.4.0
     */
    reason?: string;
  }

  /**
   * 关闭WebSocket连接。
   */
  export function closeSocket(options: CloseSocketOptions): void;

  /**
   * 通过 WebSocket 连接发送数据, 参数。
   * @since 1.7.0
   */
  interface SendSocketTaskOptions extends BaseOptions {
    /**
     * 需要发送的内容
     */
    data: string | ArrayBuffer;
  }

  /**
   * 关闭 WebSocket 连接, 参数。
   * @since 1.7.0
   */
  interface CloseSocketTaskOptions extends BaseOptions {
    /**
     * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
     */
    code?: number;

    /**
     * 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
     */
    reason?: string;
  }

  /**
   * 监听WebSocket关闭。
   * @since 1.7.0
   */
  export function onSocketClose(callback: BaseCallback): void;
}
