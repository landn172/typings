/// <reference path="../base.d.ts" />

declare namespace wx {
  export interface UploadFileResult {
    /**
     * 开发者服务器返回的数据
     */
    data: string;

    /**
     * HTTP状态码
     */
    statusCode: number;
  }

  /**
   * 返回一个 uploadTask 对象，通过 uploadTask，可监听上传进度变化事件，以及取消上传任务。
   * @since 1.4.0
   */
  export interface uploadTask {
    /**
     * 监听上传进度变化事件
     */
    onProgressUpdate?: (
      callback: (res: onProgressUpdateResult) => void
    ) => void;
    /**
     * 中断上传任务
     */
    abort?: () => void;
  }

  /**
   * 进度变化
   * @since 1.4.0
   */
  export interface onProgressUpdateResult {
    /**
     * 上传进度百分比
     */
    progress: number;

    /**
     * 已经上传的数据长度，单位 Bytes
     */
    totalBytesSent: number;

    /**
     * 预期需要上传的数据总长度，单位 Bytes
     */
    totalBytesExpectedToSend: number;
  }

  export interface UploadFileOptions extends BaseOptions {
    /**
     * 开发者服务器 url
     */
    url: string;

    /**
     * 要上传文件资源的路径
     */
    filePath: string;

    /**
     * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     */
    name: string;

    /**
     * HTTP 请求 Header , header 中不能设置 Referer
     */
    header?: IData;

    /**
     * HTTP 请求中其他额外的 form data
     */
    formData?: IData;

    /**
     * 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
     */
    success?: (res?: UploadFileResult) => void;
  }

  /**
   * 将本地资源上传到开发者服务器。
   * 如页面通过 [wx.chooseImage](#wx.chooseImage) 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。
   * 客户端发起一个 HTTPS POST 请求，其中 `Content-Type` 为 `multipart/form-data` 。
   */
  export function uploadFile(options: UploadFileOptions): uploadTask | void;
}
