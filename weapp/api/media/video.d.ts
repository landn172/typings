/// <reference path="../base.d.ts" />

declare namespace wx {
  interface ChooseVideoResult {
    /**
     * 选定视频的临时文件路径
     */
    tempFilePath: string;

    /**
     * 选定视频的时间长度
     */
    duration: number;

    /**
     * 选定视频的数据量大小
     */
    size: number;

    /**
     * 返回选定视频的长
     */
    height: number;

    /**
     * 返回选定视频的宽
     */
    width: number;
  }

  interface ChooseVideoOptions extends BaseOptions {
    /**
     * album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
     * @default ['album', 'camera']
     */
    sourceType?: Array<'album' | 'camera'>;
    /**
     * 是否压缩所选的视频源文件，默认值为true，需要压缩
     * @since 1.6.0
     * @default true
     */
    compressed: boolean;
    /**
     * 拍摄视频最长拍摄时间，单位秒。最长支持60秒
     * @default 60
     */
    maxDuration?: number;
    /**
     * 前置或者后置摄像头，默认为前后都有，即：['front', 'back']
     * @default 'back'
     */
    camera?: Array<'front' | 'back'>;

    /**
     * 接口调用成功，返回视频文件的临时文件路径
     */
    success?: (res: ChooseVideoResult) => void;
  }

  /**
   * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
   */
  export function chooseVideo(options: ChooseVideoOptions): void;

  interface SaveVideoToPhotosAlbumOptions extends SuccessOptions {
    /**
     * 视频文件路径，可以是临时文件路径也可以是永久文件路径
     */
    filePath: string;
  }

  /**
   * 保存视频到系统相册。需要用户授权 scope.writePhotosAlbum
   * @param {SaveVideoToPhotosAlbumOptions} options
   * @since 1.2.0
   */
  export function saveVideoToPhotosAlbum(
    options: SaveVideoToPhotosAlbumOptions
  ): void;

  /**
   * `videoContext` 通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件。
   */
  interface VideoContext {
    /**
     * 播放
     */
    play(): void;

    /**
     * 暂停
     */
    pause(): void;

    /**
     * 停止视频
     */
    stop(): void;

    /**
     * 跳转到指定位置，单位 s
     * @param {number} position
     */
    seek(position: number): void;

    /**
     * 发送弹幕，danmu 包含两个属性 text, color
     * @param {{text: string, color: string}} danmu
     */
    sendDanmu(danmu: { text: string; color: string }): void;

    /**
     * 设置倍速播放，支持的倍率有 0.5/0.8/1.0/1.25/1.5  1.4.0
     * @param {number} rate
     */
    playbackRate(rate: number): void;

    /**
     * 进入全屏
     * @param {number} direction 1.7.0起支持
     * @since 1.4.0
     */
    requestFullScreen(direction: number): void;

    /**
     * 退出全屏
     */
    exitFullScreen(): void;

    /**
     * 显示状态栏，仅在iOS全屏下有效
     */
    showStatusBar(): void;

    /**
     * 隐藏状态栏，仅在iOS全屏下有效
     */
    hideStatusBar(): void;
  }

  /**
   * 创建并返回 video 上下文 videoContext 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 <video/> 组件
   */
  export function createVideoContext(videoId: string): VideoContext;
}
