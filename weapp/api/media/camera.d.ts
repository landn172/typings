/// <reference path="../base.d.ts" />

declare namespace wx {
  interface cameraContextTakePhoto extends BaseOptions {
    /**
     * 成像质量，值为high, normal, low，默认normal
     */
    quality?: string;
    /**
     * 接口调用成功的回调函数
     * @param {{tempImagePath: string}} res
     */
    success?: (
      res: {
        tempImagePath: string;
      }
    ) => void;
  }

  interface cameraContextStartRecord extends BaseOptions {
    /**
     * 超过30s或页面onHide时会结束录像
     * @param {{tempThumbPath: string, tempVideoPath: string}} res
     */
    timeoutCallback?: (
      res: {
        tempThumbPath: string;
        tempVideoPath: string;
      }
    ) => void;
  }

  interface cameraContextStopRecord extends BaseOptions {
    /**
     * 接口调用成功的回调函数
     * @param {{tempThumbPath: string, tempVideoPath: string}} res
     */
    success?: (
      res: {
        tempThumbPath: string;
        tempVideoPath: string;
      }
    ) => void;
  }

  interface cameraContext {
    /**
     * 拍照，可指定质量，成功则返回图片
     */
    takePhoto(options: cameraContextTakePhoto): void;

    /**
     * 开始录像
     */
    startRecord(options: cameraContextStartRecord): void;

    /**
     * 结束录像，成功则返回封面与视频
     */
    stopRecord(options: cameraContextStopRecord): void;
  }

  /**
   * 创建并返回 camera 上下文 cameraContext 对象，cameraContext 与页面的 camera 组件绑定，
   * 一个页面只能有一个camera，通过它可以操作对应的 <camera/> 组件。
   * 在自定义组件下，第一个参数传入组件实例this，以操作组件内 <camera/> 组件
   * @since 1.6.0
   * @param context 当前组件实例
   * @returns {wx.cameraContext}
   */
  export function createCameraContext(context: any): cameraContext;
}
