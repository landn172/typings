/// <reference path="../base.d.ts" />

declare namespace wx {
  interface PlayVoiceOptions extends BaseOptions {
    /**
     * 需要播放的语音文件的文件路径
     */
    filePath: string;
    /**
     * 指定录音时长，到达指定的录音时长后会自动停止录音，单位：秒，默认值：60
     * @since 1.6.0
     */
    duration?: number;
  }

  /**
   * 开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
   * @deprecated 注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口
   */
  export function playVoice(options: PlayVoiceOptions): void;

  /**
   * 暂停正在播放的语音。
   * 再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
   */
  export function pauseVoice(): void;

  /**
   * 结束播放语音。
   */
  export function stopVoice(): void;

  interface GetBackgroundAudioPlayerStateResult {
    /**
     * 选定音频的长度（单位：s），只有在当前有音乐播放时返回
     */
    duration: number;

    /**
     * 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回
     */
    currentPosition: number;

    /**
     * 播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
     */
    status: number;

    /**
     * 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回
     */
    downloadPercent: number;

    /**
     * 歌曲数据链接，只有在当前有音乐播放时返回
     */
    dataUrl: string;
  }

  interface GetBackgroundAudioPlayerStateOptions extends BaseOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: GetBackgroundAudioPlayerStateResult) => void;
  }

  /**
   * 获取后台音乐播放状态。
   * @deprecated 注意：1.2.0 版本开始，本接口不再维护。建议使用能力更强的 wx.getBackgroundAudioManager 接口
   */
  export function getBackgroundAudioPlayerState(
    options: GetBackgroundAudioPlayerStateOptions
  ): void;

  interface PlayBackgroundAudioOptions extends BaseOptions {
    /**
     * 音乐链接, 目前支持的格式有 m4a, aac, mp3, wav
     */
    dataUrl: string;

    /**
     * 音乐标题
     */
    title?: string;

    /**
     * 封面URL
     */
    coverImgUrl?: string;
  }

  /**
   * 使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。
   * 当用户离开小程序后，音乐将暂停播放；
   * 当用户点击“显示在聊天顶部”时，音乐不会暂停播放；
   * 当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。
   */
  export function playBackgroundAudio(
    options: PlayBackgroundAudioOptions
  ): void;

  /**
   * 暂停播放音乐。
   */
  export function pauseBackgroundAudio(): void;

  interface SeekBackgroundAudioOptions extends BaseOptions {
    /**
     * 音乐位置，单位：秒
     */
    position: number;
  }

  /**
   * 控制音乐播放进度。
   */
  export function seekBackgroundAudio(
    options: SeekBackgroundAudioOptions
  ): void;

  /**
   * 停止播放音乐。
   */
  export function stopBackgroundAudio(): void;

  /**
   * 监听音乐播放。
   */
  export function onBackgroundAudioPlay(callback: BaseCallback): void;

  /**
   * 监听音乐暂停。
   */
  export function onBackgroundAudioPause(callback: BaseCallback): void;

  /**
   * 监听音乐停止。
   */
  export function onBackgroundAudioStop(callback: BaseCallback): void;

  interface backgroundAudioManager {
    /**
     * 当前音频的长度（单位：s），只有在当前有合法的 src 时返回
     */
    readonly duration: number;
    /**
     * 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回
     */
    readonly currentTime: number;
    /**
     * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
     */
    readonly paused: Boolean;
    /**
     * 音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放 ，目前支持的格式有 m4a, aac, mp3, wav
     */
    src: string;
    /**
     * 音频开始播放的位置（单位：s）
     */
    startTime: number;
    /**
     * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。
     */
    buffered: number;
    /**
     * 音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。
     */
    title: number;
    /**
     * 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。
     */
    epname: string;
    /**
     * 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。
     */
    singer: string;
    /**
     * 封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。
     */
    coverImgUrl: string;
    /**
     * 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。
     */
    webUrl: string;

    /**
     * 播放
     */
    play(): void;

    /**
     * 暂停
     */
    pause(): void;

    /**
     * 停止
     */
    stop(): void;

    /**
     * 跳转到指定位置，单位 s
     * @param {number} position
     */
    seek(position: number): void;

    /**
     * 背景音频进入可以播放状态，但不保证后面可以流畅播放
     * @param {BaseCallback} callback
     */
    onCanplay(callback: BaseCallback): void;

    /**
     * 背景音频播放事件
     * @param {BaseCallback} callback
     */
    onPlay(callback: BaseCallback): void;

    /**
     * 背景音频暂停事件
     * @param {BaseCallback} callback
     */
    onPause(callback: BaseCallback): void;

    /**
     * 背景音频停止事件
     * @param {BaseCallback} callback
     */
    onStop(callback: BaseCallback): void;

    /**
     * 背景音频自然播放结束事件
     * @param {BaseCallback} callback
     */
    onEnded(callback: BaseCallback): void;

    /**
     * 背景音频播放进度更新事件
     * @param {BaseCallback} callback
     */
    onTimeUpdate(callback: BaseCallback): void;

    /**
     * 用户在系统音乐播放面板点击上一曲事件（iOS only）
     * @param {BaseCallback} callback
     */
    onPrev(callback: BaseCallback): void;

    /**
     * 用户在系统音乐播放面板点击下一曲事件（iOS only）
     * @param {BaseCallback} callback
     */
    onNext(callback: BaseCallback): void;

    /**
     * 背景音频播放错误事件
     * @param {BaseCallback} callback
     */
    onError(callback: BaseCallback): void;

    /**
     * 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     * @param {BaseCallback} callback
     */
    onWaiting(callback: BaseCallback): void;
  }

  /**
   * 获取全局唯一的背景音频管理器
   * @returns backgroundAudioManager
   */
  export function getBackgroundAudioManager(): backgroundAudioManager;

  /**
   * `audioContext` 通过 audioId 跟一个 audio 组件绑定，通过它可以操作一个 audio 组件。
   */
  interface AudioContext {
    /**
     * 音频的地址
     * @param {string} src
     */
    setSrc(src: string): void;

    /**
     * 播放
     */
    play(): void;

    /**
     * 暂停
     */
    pause(): void;

    /**
     * 跳转到指定位置，单位 s
     * @param {number} position
     */
    seek(position: number): void;
  }

  /**
   * 创建并返回 audio 上下文 audioContext 对象。
   * 在自定义组件下，第二个参数传入组件实例this，以操作组件内 <audio/> 组件
   * @deprecated 注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口
   */
  export function createAudioContext(audioId: string): AudioContext;

  interface innerAudioContext {
    /**
     * 音频的数据链接，用于直接播放。
     */
    src: string;
    /**
     * 开始播放的位置（单位：s），默认 0
     */
    startTime: number;
    /**
     * 是否自动开始播放，默认 false
     */
    autoplay: boolean;
    /**
     * 是否循环播放，默认 false
     */
    loop: boolean;
    /**
     * 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音，默认值 true
     */
    obeyMuteSwitch: boolean;
    /**
     * 音量。范围 0~1。默认为 1
     * @since 1.9.90
     */
    volume: number;
    /**
     * 当前音频的长度（单位：s），只有在当前有合法的 src 时返回
     */
    readonly duration: number;
    /**
     * 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位
     */
    readonly currentTime: number;
    /**
     * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
     */
    readonly paused: boolean;
    /**
     * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。
     */
    readonly buffered: number;

    /**
     * 播放
     */
    play(): void;

    /**
     * 暂停
     */
    pause(): void;

    /**
     * 停止
     */
    stop(): void;

    /**
     * 跳转到指定位置，单位 s
     * @param {number} position
     */
    seek(position: number): void;

    /**
     * 销毁当前实例
     */
    destroy(): void;

    /**
     * 背景音频进入可以播放状态，但不保证后面可以流畅播放
     * @param {BaseCallback} callback
     */
    onCanplay(callback: BaseCallback): void;

    /**
     * 背景音频播放事件
     * @param {BaseCallback} callback
     */
    onPlay(callback: BaseCallback): void;

    /**
     * 背景音频暂停事件
     * @param {BaseCallback} callback
     */
    onPause(callback: BaseCallback): void;

    /**
     * 背景音频停止事件
     * @param {BaseCallback} callback
     */
    onStop(callback: BaseCallback): void;

    /**
     * 背景音频自然播放结束事件
     * @param {BaseCallback} callback
     */
    onEnded(callback: BaseCallback): void;

    /**
     * 背景音频播放进度更新事件
     * @param {BaseCallback} callback
     */
    onTimeUpdate(callback: BaseCallback): void;

    /**
     * 背景音频播放错误事件
     * @param {BaseCallback} callback
     */
    onError(callback: BaseCallback): void;

    /**
     * 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     * @param {BaseCallback} callback
     */
    onWaiting(callback: BaseCallback): void;

    /**
     * 音频进行 seek 操作事件
     * @param {BaseCallback} callback
     */
    onSeeking(callback: BaseCallback): void;

    /**
     * 音频完成 seek 操作事件
     * @param {BaseCallback} callback
     */
    onSeeked(callback: BaseCallback): void;

    /**
     *  取消监听音频完成跳转操作的事件
     *
     * @param {BaseCallback} callback
     * @memberof innerAudioContext
     */
    offSeeked(callback: BaseCallback): void;
  }

  /**
   * 创建并返回内部 audio 上下文 innerAudioContext 对象。
   * 本接口是 wx.createAudioContext 升级版。
   * @since 1.6.0
   */
  export function createInnerAudioContext(): innerAudioContext;
}
