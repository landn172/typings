/// <reference path="../base.d.ts" />

declare namespace wx {
  interface StartRecordResult {
    /**
     * 录音文件的临时路径
     */
    tempFilePath: string;
  }

  interface StartRecordOptions extends BaseOptions {
    /**
     * 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
     */
    success?: (res: StartRecordResult) => void;
  }

  /**
   * 开始录音。当主动调用 `wx.stopRecord`，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。
   * 当用户离开小程序时，此接口无法调用。
   * 需要用户授权 scope.record
   * @deprecated 注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 wx.getRecorderManager 接口
   */
  export function startRecord(options: StartRecordOptions): void;

  /**
   *​ 主动调用停止录音。
   */
  export function stopRecord(): void;

  interface RecorderManagerStartOptions {
    /**
     * 指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）
     */
    duration?: number;
    /**
     * 采样率，有效值 8000/16000/44100
     */
    sampleRate?: number;
    /**
     * 录音通道数，有效值 1/2
     */
    numberOfChannels?: number;
    /**
     * 编码码率，有效值见下表格
     */
    encodeBitRate?: number;
    /**
     * 音频格式，有效值 aac/mp3
     */
    format?: string;
    /**
     * 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。
     */
    frameSize?: number;

    /**
     * 指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源
     * @since 2.1.0
     */
    audioSource?: string;
  }

  interface RecorderManagerStopCallback {
    /**
     * 录音文件的临时路径
     */
    tempFilePath: string;
  }

  interface RecorderManagerFrameRecordedCallback {
    /**
     * 录音分片结果数据
     */
    frameBuffer: ArrayBuffer;
    /**
     * 当前帧是否正常录音结束前的最后一帧
     */
    isLastFrame: boolean;
  }

  interface RecorderManagerErrorCallback {
    /**
     * 错误信息
     */
    errMsg: string;
  }

  /**
   * 全局唯一的录音管理器
   */
  interface recorderManager {
    /**
     * 开始录音
     * @param {wx.RecorderManagerStartOptions} options
     */
    start(options: RecorderManagerStartOptions): void;

    /**
     * 暂停录音
     */
    pause(): void;

    /**
     * 继续录音
     */
    resume(): void;

    /**
     * 停止录音
     */
    stop(): void;

    /**
     * 录音开始事件
     * @param {BaseCallback} callback
     */
    onStart(callback: BaseCallback): void;

    /**
     * 录音暂停事件
     * @param {BaseCallback} callback
     */
    onPause(callback: BaseCallback): void;

    /**
     * 录音停止事件，会回调文件地址
     * @param {RecorderManagerStopCallback} callback
     */
    onStop(callback: (res: RecorderManagerStopCallback) => void): void;

    /**
     * 已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件
     * @param {RecorderManagerFrameRecordedCallback} callback
     */
    onFrameRecorded(
      callback: (res: RecorderManagerFrameRecordedCallback) => void
    ): void;

    /**
     * 录音错误事件, 会回调错误信息
     * @param {RecorderManagerErrorCallback} callback
     */
    onError(callback: (res: RecorderManagerErrorCallback) => void): void;
  }

  /**
   * 获取全局唯一的录音管理器 recorderManager。
   * @since 1.6.0
   * @returns recorderManager
   */
  export function getRecorderManager(): recorderManager;
}
