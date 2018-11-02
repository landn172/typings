/// <reference path="../base.d.ts" />

declare namespace wx {
  interface livePlayerContextRequestFullScreenOptions extends BaseOptions {
    /**
     * 有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）
     * @default 0
     */
    direction?: 0 | 90 | -90;
  }

  interface livePlayerContext {
    /**
     * 播放
     */
    play(options: BaseOptions): void;

    /**
     * 停止
     */
    stop(options: BaseOptions): void;

    /**
     * 静音
     */
    mute(options: BaseOptions): void;

    /**
     * 暂停
     */
    pause(options: BaseOptions): void;

    /**
     * 恢复
     */
    resume(options: BaseOptions): void;

    /**
     * 进入全屏
     * @param {wx.livePlayerContextRequestFullScreenOptions} options
     */
    requestFullScreen(options: livePlayerContextRequestFullScreenOptions): void;

    /**
     * 退出全屏
     */
    exitFullScreen(options: BaseOptions): void;
  }

  /**
   * 操作对应的 <live-player/> 组件。
   * 创建并返回 live-player 上下文 LivePlayerContext 对象。
   * 在自定义组件下，第二个参数传入组件实例this，以操作组件内 <live-player/> 组件
   * @param {number} domId <live-player/> 组件的 id
   * @param context 当前组件实例
   * @returns {wx.livePlayerContext}
   * @since 1.7.0
   */
  export function createLivePlayerContext(
    domId: number,
    context: any
  ): livePlayerContext;

  interface livePusherContext {
    /**
     * 播放推流
     */
    start(options: BaseOptions): void;
    /**
     * 播放推流
     */
    play(options: BaseOptions): void;

    /**
     * 停止推流
     */
    stop(options: BaseOptions): void;

    /**
     * 暂停推流
     */
    pause(options: BaseOptions): void;

    /**
     * 恢复推流
     */
    resume(options: BaseOptions): void;

    /**
     * 切换前后摄像头
     */
    switchCamera(options: BaseOptions): void;

    /**
     * 快照
     * @param options
     * @since 1.9.90
     */
    snapshot(options: BaseOptions): void;

    /**
     * 切换
     * @param options
     * @since 2.1.0
     */
    toggleTorch(options: BaseOptions): void;
  }

  /**
   * 创建并返回 live-pusher 上下文 LivePusherContext 对象，
   * LivePusherContext 与页面的 <live-pusher /> 组件绑定，一个页面只能有一个 live-pusher，
   * 通过它可以操作对应的 <live-pusher/> 组件。
   * 在自定义组件下，第一个参数传入组件实例this，以操作组件内 <live-pusher/> 组件
   * @param context 当前组件实例
   * @returns {wx.livePusherContext}
   * @since 1.7.0
   */
  export function createLivePusherContext(context: any): livePusherContext;
}
