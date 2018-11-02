/// <reference path="../base.d.ts" />
/// <reference path="./upload.d.ts" />

declare namespace wx {
  /**
   * 返回一个 downloadTask 对象，通过 downloadTask，可监听上传进度变化事件，以及取消上传任务。
   * @since 1.4.0
   */
  interface downloadTask extends uploadTask {}

  interface DownloadFileResult {
    /**
     * 文件的临时路径
     */
    tempFilePath: string;

    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode: number;
  }

  interface DownloadFileOptions extends BaseOptions {
    /**
     * 下载资源的 url
     */
    url: string;

    /**
     * HTTP 请求 Header
     */
    header?: IData;

    /**
     * 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     */
    success?: (res: DownloadFileResult) => void;
  }

  /**
   * 下载文件资源到本地。
   * 客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
   */
  export function downloadFile(
    options: DownloadFileOptions
  ): downloadTask | void;
}
