// Definitions by: landn172 <https://github.com/landn172>

/// <reference path="./page.d.ts" />
/// <reference path="./app.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="./api/index.d.ts" />

declare namespace wx {
  interface IEventCanvasTouch {
    identifier: number;
    x: number;
    y: number;
  }

  /**
   * canvas触摸事件返回
   */
  export interface ICanvasTouchEvent<
    T extends IEventCanvasTouch = IEventCanvasTouch
  > extends IBaseEvent {
    touches: T[];
    changedTouches: T[];
  }

  // ---------------------------------- 媒体API列表 ----------------------------------

  export interface SaveFileOptions extends BaseOptions {
    /**
     * 需要保存的文件的临时路径
     */
    tempFilePath: string;

    /**
     * 返回文件的保存路径
     * @param {{savedFilePath: string}} res 文件的保存路径
     */
    success?: (
      res: {
        savedFilePath: string;
      }
    ) => void;
  }

  /**
   * 保存文件到本地。
   * 注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
   * @param {wx.SaveFileOptions} options
   */
  export function saveFile(options: SaveFileOptions): void;

  export interface FileListItem {
    /**
     * 文件的本地路径
     */
    filePath: string;

    /**
     * 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;

    /**
     * 文件大小，单位B
     */
    size: number;
  }

  export interface GetSavedFileListResult {
    /**
     * 接口调用结果
     */
    errMsg: string;

    /**
     * 文件列表
     */
    fileList: FileListItem[];
  }

  export interface GetSavedFileListOptions extends BaseOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: GetSavedFileListResult) => void;
  }

  /**
   * 获取本地已保存的文件列表
   * @param {wx.GetSavedFileListOptions} options
   */
  export function getSavedFileList(options: GetSavedFileListOptions): void;

  export interface GetSavedFileInfoResult {
    /**
     * 接口调用结果
     */
    errMsg: string;

    /**
     * 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;

    /**
     * 文件大小，单位B
     */
    size: number;
  }

  export interface GetSavedFileInfoOptions extends BaseOptions {
    /**
     * 文件路径
     */
    filePath: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: GetSavedFileInfoResult) => void;
  }

  /**
   * 获取本地文件的文件信息
   * 此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
   * @param {wx.GetSavedFileInfoOptions} options
   */
  export function getSavedFileInfo(options: GetSavedFileInfoOptions): void;

  export interface RemoveSavedFileOptions extends BaseOptions {
    /**
     * 需要删除的文件路径
     */
    filePath: string;
  }

  /**
   * 删除本地存储的文件
   * @param {wx.RemoveSavedFileOptions} options
   */
  export function removeSavedFile(options: RemoveSavedFileOptions): void;

  export interface OpenDocumentOptions extends BaseOptions {
    /**
     * 文件路径，可通过 downFile 获得
     */
    filePath: string;
    /**
     * 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx
     * @since 1.4.0
     */
    fileType?: string;
  }

  /**
   * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
   * @param {wx.OpenDocumentOptions} options
   */
  export function openDocument(options: OpenDocumentOptions): void;

  // ---------------------------------- 数据API列表 ----------------------------------

  export interface SetStorageOptions extends BaseOptions {
    /**
     * 本地缓存中的指定的 key
     */
    key: string;

    /**
     * 需要存储的内容
     */
    data: any;
  }

  /**
   * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
   * @param {wx.SetStorageOptions} options
   */
  export function setStorage(options: SetStorageOptions): void;

  /**
   * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
   * @param {string} key
   * @param {wx.IData | string} data
   */
  export function setStorageSync(key: string, data: any): void;

  export interface GetStorageOptions extends SuccessOptions {
    /**
     * 本地缓存中的指定的 key
     */
    key: string;
  }

  /**
   * 从本地缓存中异步获取指定 key 对应的内容。
   * @param {wx.GetStorageOptions} options
   */
  export function getStorage(options: GetStorageOptions): void;

  /**
   * 从本地缓存中同步获取指定 key 对应的内容。
   * @param {string} key
   * @returns any
   */
  export function getStorageSync(key: string): any;

  export interface GetStorageInfoResult {
    /**
     * 当前storage中所有的key
     */
    keys: string[];

    /**
     * 当前占用的空间大小, 单位kb
     */
    currentSize: number;

    /**
     * 限制的空间大小，单位kb
     */
    limitSize: number;
  }

  export interface GetStorageInfoOptions extends BaseOptions {
    /**
     * 接口调用的回调函数
     */
    success?: (res: GetStorageInfoResult) => void;
  }

  /**
   * 从本地缓存中异步获取指定 key 对应的内容。
   * @param {wx.GetStorageInfoOptions} options
   */
  export function getStorageInfo(options: GetStorageInfoOptions): void;

  /**
   * 从本地缓存中同步获取指定 key 对应的内容。
   * @returns {wx.GetStorageInfoResult}
   */
  export function getStorageInfoSync(): GetStorageInfoResult;

  export interface RemoveStorageOptions extends BaseOptions {
    /**
     * 本地缓存中的指定的 key
     */
    key: string;

    /**
     * 接口调用的回调函数
     */
    success: () => void;
  }

  /**
   * 从本地缓存中异步移除指定 key 。
   * @param {wx.RemoveStorageOptions} options
   */
  export function removeStorage(options: RemoveStorageOptions): void;

  /**
   * 从本地缓存中同步移除指定 key 。
   * @param {string} key
   */
  export function removeStorageSync(key: string): void;

  /**
   * 清理本地数据缓存。
   */
  export function clearStorage(): void;

  /**
   * 同步清理本地数据缓存。
   */
  export function clearStorageSync(): void;

  // ---------------------------------- 位置API列表 ----------------------------------

  export interface Location {
    /**
     * 纬度，浮点数，范围为-90~90，负数表示南纬
     */
    latitude: number;

    /**
     * 经度，浮点数，范围为-180~180，负数表示西经
     */
    longitude: number;
  }

  export interface GetLocationResult extends Location {
    /**
     * 速度，浮点数，单位m/s
     */
    speed: number;

    /**
     * 位置的精确度
     */
    accuracy: number;
    /**
     * 高度，单位 m
     * @since 1.2.0
     */
    altitude: number;

    /**
     * 垂直精度，单位 m（Android 无法获取，返回 0）
     * @since 1.2.0
     */
    verticalAccuracy: number;

    /**
     * 水平精度，单位 m
     * @since 1.2.0
     */
    horizontalAccuracy: number;
  }

  export interface GetLocationOptions extends BaseOptions {
    /**
     * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 `wx.openLocation` 的坐标
     */
    type?: string;

    /**
     * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
     * @since 1.6.0
     */
    altitude: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: GetLocationResult) => void;
  }

  /**
   * 获取当前的地理位置、速度。
   * 当用户离开小程序后，此接口无法调用；
   * 当用户点击“显示在聊天顶部”时，此接口可继续调用。
   * @param {wx.GetLocationOptions} options
   */
  export function getLocation(options: GetLocationOptions): void;

  export interface ChooseLocationResult extends Location {
    /**
     * 位置名称
     */
    name: string;

    /**
     * 详细地址
     */
    address: string;
  }

  export interface ChooseLocationOptions extends BaseOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: ChooseLocationResult) => void;
  }

  /**
   * 打开地图选择位置
   * 需要用户授权 scope.userLocation
   * @param {wx.ChooseLocationOptions} options
   */
  export function chooseLocation(options: ChooseLocationOptions): void;

  export interface OpenLocationOptions extends BaseOptions, Location {
    /**
     * 缩放比例，范围1~28，默认为28
     */
    scale?: number;

    /**
     * 位置名
     */
    name?: string;

    /**
     * 地址的详细说明
     */
    address?: string;
  }

  /**
   * 使用微信内置地图查看位置
   * 需要用户授权 scope.userLocation
   * @param {wx.OpenLocationOptions} options
   */
  export function openLocation(options: OpenLocationOptions): void;

  export interface GetCenterLocationOptions extends BaseOptions {
    /**
     * 接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}
     */
    success?: (res: Location) => void;
  }

  export interface MapTranslateMarkerOptions {
    /**
     *  指定marker
     */
    markerId: number;
    /**
     * 指定marker移动到的目标点
     */
    destination: Location;
    /**
     * 移动过程中是否自动旋转marker
     */
    autoRotate: boolean;
    /**
     *  marker的旋转角度
     */
    rotate: number;
    /**
     * 动画持续时长，默认值1000ms，平移与旋转分别计算
     */
    duration?: number;
    /**
     * 动画结束回调函数
     */
    animationEnd?: BaseCallback;
    /**
     * 接口调用失败的回调函数
     */
    fail?: BaseCallback;
  }

  export interface MapIncludePointsOptions {
    /**
     * 要显示在可视区域内的坐标点列表
     */
    points: Location[];
    /**
     *  坐标点形成的矩形边缘到地图边缘的距离，单位像素。
     *  格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。
     *  开发者工具暂不支持padding参数。
     */
    padding?: any[];
  }

  export interface MapGetRegionOptions extends BaseOptions {
    /**
     *  接口调用成功的回调函数，，西南角与东北角的经纬度
     * @param {{southwest: number, northeast: number}} res
     */
    success?: (
      res: {
        southwest: number;
        northeast: number;
      }
    ) => void;
  }

  export interface MapGetScaleOptions extends BaseOptions {
    /**
     * 接口调用成功的回调函数
     * @param {{scale: number}} res
     */
    success(res: { scale: number }): void;
  }

  /**
   * mapContext 通过 mapId 跟一个 <map/> 组件绑定，通过它可以操作对应的 <map/> 组件。
   */
  export interface MapContext {
    /**
     * 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 wx.openLocation
     */
    getCenterLocation(options: GetCenterLocationOptions): void;

    /**
     * 将地图中心移动到当前定位点，需要配合map组件的show-location使用
     */
    moveToLocation(): void;

    /**
     * 平移marker，带动画
     * @param {wx.MapTranslateMarkerOptions} options
     * @since 1.2.0
     */
    translateMarker(options: MapTranslateMarkerOptions): void;

    /**
     * 缩放视野展示所有经纬度
     * @param {wx.MapIncludePointsOptions} options
     * @since 1.2.0
     */
    includePoints(options: MapIncludePointsOptions): void;

    /**
     * 获取当前地图的视野范围
     * @param {wx.MapGetRegionOptions} options
     * @since 1.4.0
     */
    getRegion(options: MapGetRegionOptions): void;

    /**
     * 获取当前地图的缩放级别
     * @param {wx.MapGetScaleOptions} options
     * @since 1.4.0
     */
    getScale(options: MapGetScaleOptions): void;
  }

  /**
   * 创建并返回 map 上下文 mapContext 对象
   * 在自定义组件下，第二个参数传入组件实例this，以操作组件内 <map/> 组件
   * @param {string} mapId
   * @param context
   * @returns {wx.MapContext}
   */
  export function createMapContext(mapId: string, context: any): MapContext;

  // ---------------------------------- 设备API列表 ----------------------------------

  export interface GetSystemInfoResult {
    /**
     * 手机品牌
     * @since 1.5.0
     */
    brand: string;
    /**
     * 手机型号
     */
    model: string;

    /**
     * 设备像素比
     */
    pixelRatio: number;
    /**
     * 屏幕宽度
     * @since 1.1.0
     */
    screenWidth: number;
    /**
     * 屏幕高度
     * @since 1.1.0
     */
    screenHeight: number;

    /**
     * 窗口宽度
     */
    windowWidth: number;

    /**
     * 窗口高度
     */
    windowHeight: number;

    /**
     * 状态栏的高度
     * @since 1.9.0
     */
    statusBarHeight?: number;

    /**
     * 微信设置的语言
     */
    language: string;

    /**
     * 微信版本号
     */
    version: string;

    /**
     * 操作系统版本
     */
    system: string;

    /**
     * 客户端平台
     */
    platform: string;
    /**
     * 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px
     * @since 1.5.0
     */
    fontSizeSetting: number;
    /**
     * 客户端基础库版本
     * @since 1.1.0
     */
    SDKVersion: string;
  }

  export interface GetSystemInfoOptions extends BaseOptions {
    /**
     * 接口调用成功的回调
     */
    success?: (res: GetSystemInfoResult) => void;
  }

  /**
   * 获取系统信息。
   */
  export function getSystemInfo(options: GetSystemInfoOptions): void;

  /**
   * 获取系统信息同步接口
   */
  export function getSystemInfoSync(): GetSystemInfoResult;

  /**
   * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
   * 参数说明： 使用${API}.${method}.${param}.${options}或者${component}.${attribute}.${option}方式来调用
   * @param {string} args
   * @returns {boolean}
   */
  export function canIUse(args: string): boolean;

  export interface GetNetworkTypeResult {
    /**
     * 网络类型
     */
    networkType: '2g' | '3g' | '4g' | 'wifi' | 'none' | 'unknown';
  }

  export interface GetNetworkTypeOptions extends BaseOptions {
    /**
     * 接口调用成功，返回网络类型 networkType
     */
    success?: (res: GetNetworkTypeResult) => void;
  }

  /**
   * 获取网络类型。
   */
  export function getNetworkType(options: GetNetworkTypeOptions): void;

  export interface OnNetworkStatusChangeResult {
    /**
     * 当前是否有网络连接
     */
    isConnected: boolean;
    /**
     * 网络类型
     */
    networkType: '2g' | '3g' | '4g' | 'wifi' | 'none' | 'unknown';
  }

  /**
   * 监听网络状态变化。
   * @since 1.1.0
   */
  export function onNetworkStatusChange(
    callback: (res: OnNetworkStatusChangeResult) => void
  ): void;

  export interface AccelerometerChangeResponse {
    /**
     * X 轴
     */
    x: number;

    /**
     * Y 轴
     */
    y: number;

    /**
     * Z 轴
     */
    z: number;
  }

  /**
   * 监听重力感应数据，频率：5次/秒
   */
  export function onAccelerometerChange(
    callback: (res: AccelerometerChangeResponse) => void
  ): void;

  export interface CompassChangeResponse {
    /**
     * 面对的方向度数
     */
    direction: number;
  }

  /**
   * 监听罗盘数据，频率：5次/秒
   */
  export function onCompassChange(
    callback: (res: CompassChangeResponse) => void
  ): void;

  export interface IBluetoothAdapterStateChangeResponse {
    /** 蓝牙适配器是否可用 */
    available: boolean;
    /** 蓝牙适配器是否处于搜索状态  */
    discovering: boolean;
  }

  /**
   * 监听蓝牙适配器状态变化事件
   * @param callback
   */
  export function onBluetoothAdapterStateChange(
    callback: (res: IBluetoothAdapterStateChangeResponse) => void
  ): void;

  /**
   * 蓝牙设备
   */
  export interface IBluetoothDevice {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name: string;
    /**
     * 用于区分设备的 id
     */
    deviceId: string;
    /**
     * 当前蓝牙设备的信号强度
     */
    RSSI: number;
    /**
     * 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。
     */
    advertisData: ArrayBuffer;
    /**
     * 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段
     */
    advertisServiceUUIDs: string[];
    /**
     * 当前蓝牙设备的广播数据段中的 LocalName 数据段
     */
    localName: string;
    /**
     * 当前蓝牙设备的广播数据段中的 ServiceData 数据段
     */
    serviceData: ArrayBuffer;
  }

  /**
   * 监听寻找到新设备的事件
   * @param callback
   */
  export function onBluetoothDeviceFound(
    callback: (res: IBluetoothDevice[]) => void
  ): void;

  export interface IBLEConnectionStateChangeResponse {
    /** 蓝牙设备ID */
    deviceId: string;
    /** 是否处于已连接状态 */
    connected: boolean;
  }

  /**
   * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
   * @param callback
   */
  export function onBLEConnectionStateChange(
    callback: (res: IBLEConnectionStateChangeResponse) => void
  ): void;

  export interface MakePhoneCallOptions {
    /**
     * 需要拨打的电话号码
     */
    phoneNumber: string;
  }

  /**
   * 拨打电话
   */
  export function makePhoneCall(options: MakePhoneCallOptions): void;

  export interface ScanCodeResult {
    /**
     * 码的内容
     */
    result: string;

    /**
     * 所扫码的类型
     */
    scanType: string;

    /**
     * 所扫码的字符集
     */
    charSet: string;

    /**
     * 当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path
     */
    path: string;
  }

  export interface ScanCodeOptions extends BaseOptions {
    /**
     * 是否只能从相机扫码，不允许从相册选择图片
     * @since 1.2.0
     */
    onlyFromCamera: boolean;
    /**
     * 扫码类型，参数类型是数组，二维码是'qrCode'，一维码是'barCode'，DataMatrix是‘datamatrix’，pdf417是‘pdf417’。
     * @since 1.7.0
     */
    scanType: string[];
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: ScanCodeResult) => void;
  }

  /**
   * 调起客户端扫码界面，扫码成功后返回对应的结果
   */
  export function scanCode(options: ScanCodeOptions): void;

  export interface SetClipboardDataOptions extends BaseOptions {
    /**
     * 需要设置剪贴板的内容
     */
    data: string;
  }

  /**
   * 设置系统剪贴板的内容
   * @param {SetClipboardDataOptions} options
   * @since 1.1.0
   */
  export function setClipboardData(options: SetClipboardDataOptions): void;

  /**
   * 获取系统剪贴板内容
   * @param {wx.SuccessOptions} options
   * @since 1.1.0
   */
  export function getClipboardData(options: SuccessOptions): void;

  // ---------------------------------- 界面API列表 ----------------------------------

  export interface ShowToastOptions extends BaseOptions {
    /**
     * 提示的内容
     */
    title: string;

    /**
     * 图标，只支持"success"、"loading"
     * 'none' @since 1.9.0
     */
    icon?: 'success' | 'loading' | 'none';

    /**
     * 自定义图标的本地路径，image 的优先级高于 icon
     */
    image?: string;

    /**
     * 提示的延迟时间，单位毫秒，默认：1500, 最大为10000
     */
    duration?: number;

    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean;
  }

  /**
   * 显示消息提示框
   */
  export function showToast(options: ShowToastOptions): void;

  export interface ShowLoadingOptions extends BaseOptions {
    /**
     * 提示的内容
     */
    title: string;
    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean;
  }

  /**
   * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
   * @param {ShowLoadingOptions} options
   * @since 1.1.0
   */
  export function showLoading(options: ShowLoadingOptions): void;

  /**
   * 隐藏消息提示框
   */
  export function hideToast(): void;

  /**
   * 隐藏 loading 提示框
   * @since 1.1.0
   */
  export function hideLoading(): void;

  export interface ShowModalResult {
    /**
     * confirm==1时，表示用户点击确定按钮
     */
    confirm: number;
    /**
     * 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
     */
    cancel: boolean;
  }

  export interface ShowModalOptions extends BaseOptions {
    /**
     * 提示的标题
     */
    title: string;

    /**
     * 提示的内容
     */
    content: string;

    /**
     * 是否显示取消按钮，默认为 true
     */
    showCancel?: boolean;

    /**
     * 取消按钮的文字，默认为"取消",最多 4 个字符
     */
    cancelText?: string;

    /**
     * 取消按钮的文字颜色，默认为"#000000"
     */
    cancelColor?: string;

    /**
     * 确定按钮的文字，默认为"确定",最多 4 个字符
     */
    confirmText?: string;

    /**
     * 确定按钮的文字颜色，默认为"#3CC51F"
     */
    confirmColor?: string;

    /**
     * 接口调用成功的回调函数，返回res.confirm==1时，表示用户点击确定按钮
     */
    success?: (res?: ShowModalResult) => void;
  }

  /**
   * 显示消息提示框
   */
  export function showModal(options: ShowModalOptions): void;

  export interface ShowActionSheetResult {
    /**
     * 用户是否取消选择
     */
    cancel: boolean;

    /**
     * 用户点击的按钮，从上到下的顺序，从0开始
     */
    tapIndex: number;
  }

  export interface ShowActionSheetOptions extends BaseOptions {
    /**
     * 按钮的文字数组，数组长度最大为6个
     */
    itemList: string[];

    /**
     * 按钮的文字颜色，默认为"#000000"
     */
    itemColor?: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: ShowActionSheetResult) => void;
  }

  /**
   * 显示操作菜单
   */
  export function showActionSheet(options: ShowActionSheetOptions): void;

  export interface SetNavigationBarTitleOptions extends BaseOptions {
    /**
     * 页面标题
     */
    title: string;
  }

  /**
   * 动态设置当前页面的标题。
   */
  export function setNavigationBarTitle(
    options: SetNavigationBarTitleOptions
  ): void;

  /**
   * 在当前页面显示导航条加载动画。
   */
  export function showNavigationBarLoading(): void;

  /**
   * 隐藏导航条加载动画。
   */
  export function hideNavigationBarLoading(): void;

  export interface SetNavigationBarColorAnimation {
    /**
     * 动画变化时间，默认0，单位：毫秒
     */
    duration: number;
    /**
     * 动画变化方式，默认 linear
     * linear  动画从头到尾的速度是相同的。
     * easeIn  动画以低速开始
     * easeOut  动画以低速结束。
     * easeInOut  动画以低速开始和结束。
     */
    timingFunc: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  }

  export interface SetNavigationBarColorOptions extends SuccessOptions {
    /**
     * 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
     */
    frontColor: '#ffffff' | '#000000';
    /**
     * 背景颜色值，有效值为十六进制颜色
     */
    backgroundColor: string;
    /**
     * 动画效果
     */
    animation?: SetNavigationBarColorAnimation;
  }

  /**
   * 设置导航条颜色，动画
   * @param {SetNavigationBarColorOptions} options
   * @since 1.4.0
   */
  export function setNavigationBarColor(
    options: SetNavigationBarColorOptions
  ): void;

  export interface SetTabBarBadgeOptions extends BaseOptions {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
    /**
     * 显示的文本，超过 3 个字符则显示成“…”
     */
    text: string;
  }

  /**
   * 为 tabBar 某一项的右上角添加文本
   * @param {SetTabBarBadgeOptions} options
   * @since 1.9.0
   */
  export function setTabBarBadge(options: SetTabBarBadgeOptions): void;

  export interface RemoveTabBarBadgeOptions extends BaseOptions {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
  }

  /**
   * 移除 tabBar 某一项右上角的文本
   * @param {RemoveTabBarBadgeOptions} options
   * @since 1.9.0
   */
  export function removeTabBarBadge(options: RemoveTabBarBadgeOptions): void;

  /**
   * 显示 tabBar 某一项的右上角的红点
   * @param {BaseOptions} options
   * @since 1.9.0
   */
  export function showTabBarRedDot(options: BaseOptions): void;

  /**
   * 隐藏 tabBar 某一项的右上角的红点
   * @param {BaseOptions} options
   * @since 1.9.0
   */
  export function hideTabBarRedDot(options: BaseOptions): void;

  export interface SetTabBarStyleOptions extends BaseOptions {
    /**
     * tab 上的文字默认颜色
     */
    color: string;
    /**
     * tab 上的文字选中时的颜色
     */
    selectedColor: string;
    /**
     * tab 的背景色
     */
    backgroundColor: string;
    /**
     * tabbar上边框的颜色， 仅支持 black/white
     */
    borderStyle: 'black' | 'white';
  }

  /**
   * 动态设置 tabBar 的整体样式
   * @param {SetTabBarStyleOptions} options
   * @since 1.9.0
   */
  export function setTabBarStyle(options: SetTabBarStyleOptions): void;

  export interface SetTabBarItemOptions extends BaseOptions {
    /**
     * tabBar 的哪一项，从左边算起
     */
    index: number;
    /**
     * tab 上按钮文字
     */
    text?: string;
    /**
     * 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
     */
    iconPath?: string;
    /**
     *  选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
     */
    selectedIconPath?: string;
  }

  /**
   * 动态设置 tabBar 某一项的内容
   * @param {SetTabBarItemOptions} options
   * @since 1.9.0
   */
  export function setTabBarItem(options: SetTabBarItemOptions): void;

  export interface HasShowTabBarOptions extends BaseOptions {
    /**
     *  是否需要动画效果，默认无
     */
    aniamtion?: boolean;
  }

  /**
   * 隐藏 tabBar
   * @param {HasShowTabBarOptions} options
   * @since 1.9.0
   */
  export function hideTabBar(options: HasShowTabBarOptions): void;

  /**
   * 显示 tabBar
   * @param {HasShowTabBarOptions} options
   * @since 1.9.0
   */
  export function showTabBar(options: HasShowTabBarOptions): void;

  export interface SetTopBarTextOptions extends BaseOptions {
    /**
     * 置顶栏文字内容
     */
    text: string;
  }

  /**
   * 动态设置置顶栏文字内容，只有当前小程序被置顶时能生效，
   * 如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容。
   * 注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，
   * 会回调 fail，errMsg："setTopBarText: fail invoke too frequently"
   * @param {SetTopBarTextOptions} options
   */
  export function setTopBarText(options: SetTopBarTextOptions): void;

  export interface NavigateToOptions extends BaseOptions {
    /**
     * 需要跳转的应用内页面的路径 , 路径后可以带参数。
     * 参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
     * 注意：目前页面路径最多只能十层。
     */
    url: string;
  }

  /**
   * 保留当前页面，跳转到应用内的某个页面，使用 `wx.navigateBack` 可以返回到原页面。
   */
  export function navigateTo(options: NavigateToOptions): void;

  /**
   * 关闭当前页面，跳转到应用内的某个页面。
   */
  export function redirectTo(options: NavigateToOptions): void;

  /**
   * 关闭所有页面，打开到应用内的某个页面。
   * @param {wx.NavigateToOptions} options
   * @since 1.1.0
   */
  export function reLaunch(options: NavigateToOptions): void;

  export interface SwitchTabOptions extends BaseOptions {
    /**
     * 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
     */
    url: string;
  }

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   */
  export function switchTab(options: SwitchTabOptions): void;

  export interface NavigateBackOptions {
    /**
     * 返回的页面数，如果 delta 大于现有页面数，则返回到首页。默认值为1。
     */
    delta?: number;
  }

  /**
   * 关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层。
   */
  export function navigateBack(options: NavigateBackOptions): void;

  /**
   * 动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。
   */
  export interface Animation {
    /**
     * 表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
     */
    step(options?: AnimationOptions): void;

    /**
     * 导出动画数据传递给组件的animation属性
     */
    export(): any;

    // 样式

    /**
     * 透明度，参数范围 0~1
     */
    opacity(value: number): this;

    /**
     * 颜色值
     */
    backgroundColor(color: string): this;

    /**
     * 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
     */
    width(value: number | string): this;

    /**
     * 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
     */
    height(value: number | string): this;

    /**
     * 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
     */
    top(value: number | string): this;

    /**
     * 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
     */
    left(value: number | string): this;

    /**
     * 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
     */
    bottom(value: number | string): this;

    /**
     * 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
     */
    right(value: number | string): this;

    // 旋转

    /**
     * deg的范围-180~180，从原点顺时针旋转一个deg角度
     */
    rotate(value: number): this;

    /**
     * deg的范围-180~180，在X轴旋转一个deg角度
     */
    rotateX(value: number): this;

    /**
     * deg的范围-180~180，在Y轴旋转一个deg角度
     */
    rotateY(value: number): this;

    /**
     * deg的范围-180~180，在Z轴旋转一个deg角度
     */
    rotateZ(value: number): this;

    /**
     * 同 [transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d?t=1477656494026)
     */
    rotate3d(x: number, y: number, z: number, a: number): this;

    // 缩放

    /**
     * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
     */
    scale(sx: number, sy?: number): this;

    /**
     * 在X轴缩放sx倍数
     */
    scaleX(sx: number): this;

    /**
     * 在Y轴缩放sy倍数
     */
    scaleY(sy: number): this;

    /**
     * 在Z轴缩放sz倍数
     */
    scaleZ(sz: number): this;

    /**
     * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
     */
    scale3d(sx: number, sy: number, sz: number): this;

    // 偏移

    /**
     * 一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
     */
    translate(tx: number, ty?: number): this;

    /**
     * 在X轴偏移tx，单位px
     */
    translateX(tx: number): this;

    /**
     * 在Y轴偏移ty，单位px
     */
    translateY(ty: number): this;

    /**
     * 在Z轴偏移tz，单位px
     */
    translateZ(tz: number): this;

    /**
     * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
     */
    translate3d(tx: number, ty: number, tz: number): this;

    // 倾斜

    /**
     * 参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
     */
    skew(ax: number, ay?: number): this;

    /**
     * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
     */
    skewX(ax: number): this;

    /**
     * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
     */
    skewY(ay: number): this;

    // 矩阵变形

    /**
     * 同 [transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix?t=1477656494026)
     */
    matrix(
      a: number,
      b: number,
      c: number,
      d: number,
      tx: number,
      ty: number
    ): this;

    /**
     * 同 [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d?t=1477656494026)
     */
    matrix3d(
      a1: number,
      b1: number,
      c1: number,
      d1: number,
      a2: number,
      b2: number,
      c2: number,
      d2: number,
      a3: number,
      b3: number,
      c3: number,
      d3: number,
      a4: number,
      b4: number,
      c4: number,
      d4: number
    ): this;
  }

  export type TextBaseLineOptions = 'top' | 'bottom' | 'middle' | 'normal';

  export type TextAlignOptions = 'left' | 'center' | 'right';

  export interface AnimationOptions {
    /**
     * 动画持续时间，单位ms，默认值 400
     */
    duration?: number;

    /**
     * 定义动画的效果，默认值"linear"
     */
    timingFunction?:
      | 'linear'
      | 'ease'
      | 'ease-in'
      | 'ease-in-out'
      | 'ease-out'
      | 'step-start'
      | 'step-end';

    /**
     * 动画延迟时间，单位 ms，默认值 0
     */
    delay?: number;

    /**
     * 设置transform-origin，默认为"50% 50% 0"
     */
    transformOrigin?: string;
  }

  export function createAnimation(options?: AnimationOptions): Animation;

  export interface PageScrollToOptions {
    /**
     * 滚动到页面的目标位置（单位px）
     */
    scrollTop: number;
    /**
     * 滚动动画的时长，默认300ms，单位 ms
     */
    duration?: number;
  }

  /**
   * 将页面滚动到目标位置。
   * @param {PageScrollToOptions} options
   */
  export function pageScrollTo(options: PageScrollToOptions): void;

  export interface CanvasContext {
    /**
     * 获取当前 `context` 上存储的绘图动作
     */
    getActions(): any[];

    /**
     * 清空当前的存储绘图动作
     */
    clearActions(): void;

    /**
     * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
     * @param callback v1.7.0 绘制完成后回调
     * @param reserve 非必填。本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
     */
    draw(reserve?: boolean, callback?: Function): void;

    /**
     * clip() 方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）。
     * @since 1.6.0
     */
    clip(): void;

    // 变形

    /**
     * 在调用 `scale` 方法后，之后创建的路径其横纵坐标会被缩放。多次调用 `scale`，倍数会相乘。
     * @param scaleWidth 横坐标缩放的倍数
     * @param scaleHeight 纵坐标轴缩放的倍数
     */
    scale(scaleWidth: number, scaleHeight: number): void;

    /**
     * 以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
     * @param rotate 旋转角度，以弧度计，范围为 0 ~ 2π
     */
    rotate(rotate: number): void;

    /**
     * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
     * @param x 水平坐标平移量
     * @param y 竖直坐标平移量
     */
    translate(x: number, y: number): void;

    /**
     * 保存当前坐标轴的缩放、旋转、平移信息
     */
    save(): void;

    /**
     * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
     */
    restore(): void;

    // 绘制

    /**
     * 清除画布上在该矩形区域内的内容。
     * @param x 矩形区域左上角的x坐标
     * @param y 矩形区域左上角的y坐标
     * @param width 矩形区域的宽度
     * @param height 矩形区域的高度
     */
    clearRect(x: number, y: number, width: number, height: number): void;

    /**
     * 在画布上绘制被填充的文本。
     * @param text 在画布上输出的文本
     * @param x  绘制文本的左上角x坐标位置
     * @param y 绘制文本的左上角y坐标位置
     */
    fillText(text: string, x: number, y: number): void;

    /**
     * 绘制图像，图像保持原始尺寸。
     * @param imageResource 所要绘制的图片资源，通过 `chooseImage` 得到一个文件路径或者一个项目目录内的图片
     * @param x 图像左上角的x坐标
     * @param y 图像左上角的y坐标
     */
    drawImage(
      imageResource: string,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;

    /**
     * 对当前路径进行填充
     */
    fill(): void;

    /**
     * 对当前路径进行描边
     */
    stroke(): void;

    // 路径后可以带参数。

    /**
     * 开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。
     * 同一个路径内的多次 `setFillStyle`、`setStrokeStyle`、`setLineWidth` 等设置，以最后一次设置为准。
     */
    beginPath(): void;

    /**
     * 关闭一个路径
     */
    closePath(): void;

    /**把路径移动到画布中的指定点，不创建线条。
     * @param x 目标位置的x坐标
     * @param y 目标位置的y坐标
     */
    moveTo(x: number, y: number): void;

    /**
     * 在当前位置添加一个新点，然后在画布中创建从该点到最后指定点的路径。
     * @param x 目标位置的x坐标
     * @param y 目标位置的y坐标
     */
    lineTo(x: number, y: number): void;

    /**
     * 画一条弧线。
     * 创建一个圆可以用 arc() 方法指定其实弧度为0，终止弧度为 2 * Math.PI。
     * 用 stroke() 或者 fill() 方法来在 canvas 中画弧线。
     * @param x 圆的x坐标
     * @param y 圆的y坐标
     * @param r 圆的半径
     * @param sAngle 起始弧度，单位弧度（在3点钟方向）
     * @param eAngle 终止弧度
     * @param counterclockwise 可选。指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。
     */
    arc(
      x: number,
      y: number,
      r: number,
      sAngle: number,
      eAngle: number,
      counterclockwise?: boolean
    ): void;

    /**
     * 添加一个矩形路径到当前路径。
     * @param x 矩形路径左上角的x坐标
     * @param y 矩形路径左上角的y坐标
     * @param width 矩形路径的宽度
     * @param height 矩形路径的高度
     */
    rect(x: number, y: number, width: number, height: number): void;

    /**
     * 填充一个矩形。用 setFillStyle() 设置矩形的填充色，如果没设置默认是黑色。
     * @param x 矩形路径左上角的x坐标
     * @param y 矩形路径左上角的y坐标
     * @param width 矩形路径的宽度
     * @param height 矩形路径的高度
     */
    fillRect(x: number, y: number, width: number, height: number): void;

    /**
     * 画一个矩形(非填充)。用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是黑色。
     * @param x 矩形路径左上角的x坐标
     * @param y 矩形路径左上角的y坐标
     * @param width 矩形路径的宽度
     * @param height 矩形路径的高度
     */
    strokeRect(x: number, y: number, width: number, height: number): void;

    /**
     * 创建二次贝塞尔曲线路径。
     * @param cpx 贝塞尔控制点的x坐标
     * @param cpy 贝塞尔控制点的y坐标
     * @param x 结束点的x坐标
     * @param y 结束点的y坐标
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

    /**
     * 创建三次方贝塞尔曲线路径。
     * @param cp1x 第一个贝塞尔控制点的 x 坐标
     * @param cp1y 第一个贝塞尔控制点的 y 坐标
     * @param cp2x 第二个贝塞尔控制点的 x 坐标
     * @param cp2y 第二个贝塞尔控制点的 y 坐标
     * @param x 结束点的x坐标
     * @param y 结束点的y坐标
     */
    bezierCurveTo(
      cp1x: number,
      cp1y: number,
      cp2x: number,
      cp2y: number,
      x: number,
      y: number
    ): void;

    // 样式

    /**
     * 用于设置文字的水平对齐
     * @since 1.4.0
     * @param {TextBaseLineOptions} textBaseline
     * @memberof CanvasContext
     */
    setTextBaseline(textBaseline: TextBaseLineOptions): void;

    /**
     * 用于设置文字的对齐
     *
     * @param {TextAlignOptions} align
     * @memberof CanvasContext
     */
    setTextAlign(align: TextAlignOptions): void;

    /**
     * 设置阴影样式。
     *
     * @param {number} offsetX
     * @param {number} offsetY
     * @param {number} blur
     * @param {string} color
     * @memberof CanvasContext
     */
    setShadow(
      offsetX: number,
      offsetY: number,
      blur: number,
      color: string
    ): void;

    /**
     * 设置纯色填充。
     * @param color 设置为填充样式的颜色('rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串)
     */
    setFillStyle(color: string): void;

    /**
     * 字体
     *
     * @type {string}
     * @memberof CanvasContext
     */
    font: string;

    /**
     * 测量文本尺寸信息，目前仅返回文本宽度。同步接口。
     *
     * @param {string} text
     * @returns {{ width: number }}
     * @since 1.9.90
     * @memberof CanvasContext
     */
    measureText(text: string): { width: number };

    /**
     * 设置纯色描边
     * @param color 设置为填充样式的颜色('rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串)
     */
    setStrokeStyle(color: string): void;

    /**
     * 设置线条的宽度。
     *
     * @param {number[]} pattern 一组描述交替绘制线段和间距（坐标空间单位）长度的数字
     * @param {number} offset 虚线偏移量
     * @memberof CanvasContext
     */
    setLineDash(pattern: number[], offset: number): void;

    /**
     * 设置全局画笔透明度。
     * @param alpha 透明度，0 表示完全透明，1 表示完全不透明
     */
    setGlobalAlpha(alpha: number): void;

    /**
     * 设置阴影样式。
     * @param offsetX 阴影相对于形状在水平方向的偏移
     * @param offsetY 阴影相对于形状在竖直方向的偏移
     * @param blur 阴影的模糊级别，数值越大越模糊(0~100)
     * @param color 阴影的颜色('rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串)
     */
    setShadow(
      offsetX: number,
      offsetY: number,
      blur: number,
      color: string
    ): void;

    /**
     * 创建一个线性的渐变颜色。需要使用 addColorStop() 来指定渐变点，至少要两个。
     * @param x0 起点的x坐标
     * @param y0 起点的y坐标
     * @param x1 终点的x坐标
     * @param y1 终点的y坐标
     */
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): void;

    /**
     * 创建一个圆形的渐变颜色。起点在圆心，终点在圆环。需要使用 addColorStop() 来指定渐变点，至少要两个。
     * @param x 圆心的x坐标
     * @param y 圆心的y坐标
     * @param r 圆的半径
     */
    createCircularGradient(x: number, y: number, r: number): void;

    /**
     * 设置字体的字号。
     * @param fontSize 字体的字号
     */
    setFontSize(fontSize: number): void;

    /**
     * 设置线条的宽度。
     * @param lineWidth 线条的宽度
     */
    setLineWidth(lineWidth: number): void;

    /**
     * 设置线条的结束端点样式。
     * @param lineCap 线条的结束端点样式('butt'、'round'、'square')
     */
    setLineCap(lineCap: string): void;

    /**
     * 设置两条线相交时，所创建的拐角类型。
     * @param lineJoin 两条线相交时，所创建的拐角类型('bevel'、'round'、'miter')
     */
    setLineJoin(lineJoin: string): void;

    /**设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当setLineJoin为'miter'时才有效。超过最大倾斜长度的，连接处将以lineJoin为bevel来显示
     * @param miterLimit 最大斜接长度
     */
    setMiterLimit(miterLimit: number): void;

    /**
     * 创建一个矩形。
     * 用 fill() 或者 stroke() 方法将矩形真正的画到 canvas 中。
     * @memberof CanvasContext
     */
    rect(x: number, y: number, width: number, height: number): void;
  }

  /**
   * 创建 canvas 绘图上下文(指定 canvasId)
   * @param canvasId 画布表示，传入定义在 <canvas/> 的 canvas-id
   */
  export function createCanvasContext(canvasId: string): CanvasContext;

  /**
   * 创建并返回绘图上下文context对象。
   */
  export function createContext(): CanvasContext;

  export interface DrawCanvasOptions {
    /**
     * 画布标识，传入 <canvas/> 的 cavas-id
     */
    canvasId: string;

    /**
     * 绘图动作数组，由 wx.createContext 创建的 context，调用 getActions 方法导出绘图动作数组。
     */
    actions: any[];

    /**
     * 本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；
     * 若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
     */
    reserve?: boolean;
  }

  /**
   * 绘制画布
   */
  export function drawCanvas(options: DrawCanvasOptions): void;

  export interface CanvasToTempFilePathOptions {
    /**
     * 画布标识，传入 <canvas/> 的 cavas-id
     */
    canvasId: string;
  }

  /**
   * 把当前画布的内容导出生成图片，并返回文件路径
   */
  export function canvasToTempFilePath(
    options: CanvasToTempFilePathOptions
  ): string;

  /**
   * 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
   * @param {SuccessOptions} options
   * @since 1.5.0
   */
  export function startPullDownRefresh(options: SuccessOptions): void;

  /**
   * 停止当前页面下拉刷新。
   */
  export function stopPullDownRefresh(): void;

  // ---------------------------------- WXML节点信息 ----------------------------------

  export interface FieldsOptions {
    /**
     * 是否返回节点id
     */
    id?: boolean;
    /**
     * 是否返回节点dataset
     */
    dataset?: boolean;
    /**
     * 是否返回节点布局位置（left right top bottom）
     */
    rect?: boolean;
    /**
     * 是否返回节点尺寸（width height）
     */
    size?: boolean;
    /**
     * 是否返回节点的 scrollLeft scrollTop ，节点必须是scroll-view或者viewport
     */
    scrollOffset?: boolean;
    /**
     * 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， id class style 和事件绑定的属性值不可获取）
     */
    properties?: any[];
  }

  interface IBaseNodesRef {
    /**
     * 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。
     * @param cb 回调 节点信息会在callback中返回
     * @returns {wx.SelectQuery}
     */
    boundingClientRect(cb?: (rect: any) => void): SelectQuery;

    /**
     * 添加节点的滚动位置查询请求，以像素为单位。
     * 节点必须是`scroll-view`或者viewport
     * @param cb 在执行SelectQuery的exec方法后，节点信息会在callback中返回
     * @returns {wx.SelectQuery}
     */
    scrollOffset(cb?: (res: IScrollRect) => void): SelectQuery;

    /**
     * 获取节点的相关信息，需要获取的字段在fields中指定。
     * @param {FieldsOptions} fields
     * @param {wx.IData} res
     * @returns {wx.SelectQuery}
     */
    fields(fields: FieldsOptions, cb?: (res: any) => void): SelectQuery;
  }

  /**
   * 节点信息
   */
  interface INodesInfo {
    /**
     * 节点的ID
     */
    id: string;
    /**
     * 节点的dataset
     */
    dataset: IData;
  }

  interface IRect extends INodesInfo {
    /**
     * 节点的宽度
     */
    width: number;
    /**
     * 节点的高度
     */
    height: number;
    /**
     * 节点的上边界坐标
     */
    top: number;
    /**
     * 节点的右边界坐标
     */
    right: number;
    /**
     * 节点的下边界坐标
     */
    bottom: number;
    /**
     * 节点的左边界坐标
     */
    left: number;
  }

  interface IScrollRect extends INodesInfo {
    /**
     * 节点的水平滚动位置
     */
    scrollLeft: number;
    /**
     * 节点的竖直滚动位置
     */
    scrollTop: number;
  }

  interface IFieldCbData extends IRect {}
  interface IFieldCbData extends IScrollRect {}
  interface IFieldCbData extends IData {}

  export interface NodesRef extends IBaseNodesRef {
    boundingClientRect(cb?: (rect: IRect) => void): SelectQuery;
    fields(
      fields: FieldsOptions,
      cb?: (res: IFieldCbData) => void
    ): SelectQuery;
  }

  export interface NodesRefs extends IBaseNodesRef {
    boundingClientRect(cb?: (rects: IRect[]) => void): SelectQuery;
    fields(
      fields: FieldsOptions,
      cb?: (res: IFieldCbData[]) => void
    ): SelectQuery;
  }

  export interface SelectQuery {
    /**
     * 将选择器的选取范围更改为自定义组件component内。
     * @param context
     * @returns {wx.SelectQuery}
     * @since 1.6.0
     */
    in(context: any): SelectQuery;

    /**
     * 在当前页面下选择第一个匹配选择器selector的节点，返回一个NodesRef对象实例，可以用于获取节点信息。
     * @param {string} selector - 类似于css的选择器
     * @returns {NodesRef}
     */
    select(selector: string): NodesRef;

    /**
     * 在当前页面下选择所有匹配选择器selector的节点
     * @param {string} selector
     * @returns {NodesRef}
     */
    selectAll(selector: string): NodesRefs;

    /**
     * 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息
     * @returns {NodesRef}
     */
    selectViewport(): NodesRef;

    /**
     * 执行所有的请求，请求结果按请求次序构成数组，在callback的第一个参数中返回。
     * @param {wx.IData} res
     */
    exec(cb?: (res: any[]) => void): void;
  }

  /**
   * 返回一个SelectorQuery对象实例。
   * @returns {SelectQuery}
   * @since 1.4.0
   */
  export function createSelectorQuery(): SelectQuery;

  // ---------------------------------- 第三方平台 ----------------------------------

  export interface GetExtConfigOptions extends SuccessOptions {
    /**
     * 第三方平台自定义的数据
     */
    extConfig: IData;
  }

  /**
   * 获取第三方平台自定义的数据字段。
   * @param {GetExtConfigOptions} options
   * @since 1.1.0
   */
  export function getExtConfig(options: GetExtConfigOptions): void;

  /**
   * 获取第三方平台自定义的数据字段的同步接口。
   * @returns {{extConfig: wx.IData}}
   * @since 1.1.0
   */
  export function getExtConfigSync(): {
    extConfig: IData;
  };

  // ---------------------------------- 开放接口API列表 ----------------------------------

  export interface LoginResult {
    /**
     * 调用结果
     */
    errMsg: string;

    /**
     * 用户允许登录后，回调内容会带上 code（有效期五分钟），开发者需要将 code 发送到开发者服务器后台，
     * 使用 `code` 换取 `session_key` api，将 code 换成 openid 和 session_key
     */
    code: string;
  }

  export interface LoginOptions extends BaseOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: LoginResult) => void;
  }

  /**
   * 调用接口获取**登录凭证（code）**进而换取用户登录态信息，
   * 包括用户的**唯一标识（openid）** 及本次登录的 **会话密钥（session_key）**。**用户数据的加解密通讯**需要依赖会话密钥完成。
   */
  export function login(options: LoginOptions): void;

  /**
   * 检查登陆态是否过期
   */
  export function checkSession(options: BaseOptions): void;

  export interface AuthorizeOptions extends SuccessOptions {
    /**
     * 需要获取权限的scope，详见 scope 列表
     */
    scope: string;
  }

  /**
   * 提前向用户发起授权请求。
   * 调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。
   * 如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
   * @param {AuthorizeOptions} options
   */
  export function authorize(options: AuthorizeOptions): void;

  export interface GetUserInfoResult {
    /**
     * 用户信息对象，不包含 openid 等敏感信息
     */
    userInfo: UserInfo;

    /**
     * 不包括敏感信息的原始数据字符串，用于计算签名。
     */
    rawData: string;

    /**
     * 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。
     */
    signature: string;

    /**
     * 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法
     */
    encryptData: string;

    /**
     * 加密算法的初始向量，详细见加密数据解密算法
     */
    iv: string;
  }

  /**
   * 用户信息
   */
  export interface UserInfo {
    /**
     * 用户昵称
     */
    nickName: string;

    /**
     * 头像地址
     */
    avatarUrl: string;

    /**
     * 性别 0：未知、1：男、2：女
     */
    gender: number;

    /**
     * 省份
     */
    province: string;

    /**
     * 城市
     */
    city: string;

    /**
     * 国家
     */
    country: string;

    /**
     * language  String  用户的语言，简体中文为zh_CN
     */
    language: string;
  }

  export interface GetUserInfoOptions extends BaseOptions {
    /**
     * 是否带上登录态信息
     * @since 1.1.0
     */
    withCredentials?: boolean;
    /**
     * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。默认为en。
     * @since 1.3.0
     */
    lang?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: GetUserInfoResult) => void;
  }

  /**
   * 获取用户信息，需要先调用 wx.login 接口。
   */
  export function getUserInfo(options: GetUserInfoOptions): void;

  export interface RequestPaymentOptions extends BaseOptions {
    /**
     * 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
     */
    timeStamp: number;

    /**
     * 随机字符串，长度为32个字符以下。
     */
    nonceStr: string;

    /**
     * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
     */
    package: string;

    /**
     * 签名算法，暂支持 MD5
     */
    signType: string;

    /**
     * 签名,具体签名方案参见[微信公众号支付帮助文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3&t=1477656495417)
     */
    paySign: string;
  }

  /**
   * 发起微信支付。
   */
  export function requestPayment(options: RequestPaymentOptions): void;

  export interface ShowShareMenuOptions extends BaseOptions {
    /**
     *  是否使用带 shareTicket 的转发详情
     */
    withShareTicket: boolean;
  }

  /**
   * 显示当前页面的转发按钮
   * @param {ShowShareMenuOptions} options
   * @since 1.1.0
   */
  export function showShareMenu(options: ShowShareMenuOptions): void;

  /**
   * 隐藏转发按钮
   * @param {BaseOptions} options
   * @since 1.1.0
   */
  export function hideShareMenu(options: BaseOptions): void;

  /**
   * 更新转发属性
   * @param {ShowShareMenuOptions} options
   * @since 1.2.0
   */
  export function updateShareMenu(options: ShowShareMenuOptions): void;

  export interface GetShareInfoResult {
    /**
     * 错误信息
     */
    errMsg: string;
    /**
     * 包括敏感数据在内的完整转发信息的加密数据，详细见加密数据解密算法
     */
    encryptedData: string;
    /**
     * 加密算法的初始向量，详细见加密数据解密算法
     */
    iv: string;
  }

  export interface GetShareInfoOptions extends BaseOptions {
    shareTicket: string;
    /**
     * 接口调用成功的回调函数
     * @param {GetShareInfoResult} res
     */
    success?: (res: GetShareInfoResult) => void;
    /**
     * 接口调用失败的回调函数
     * @param {GetShareInfoResult} res
     */
    fail?: (res: GetShareInfoResult) => void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     * @param {GetShareInfoResult} res
     */
    complete?: (res: GetShareInfoResult) => void;
  }

  /**
   * 获取转发详细信息
   * @param {GetShareInfoOptions} options
   * @since 1.1.0
   */
  export function getShareInfo(options: GetShareInfoOptions): void;

  export interface ChooseAddressOptions extends SuccessOptions {
    /**
     * 收货人姓名
     */
    userName: string;
    /**
     * 邮编
     */
    postalCode: string;
    /**
     * 国标收货地址第一级地址
     */
    provinceName: string;
    /**
     * 国标收货地址第二级地址
     */
    cityName: string;
    /**
     * 国标收货地址第三级地址
     */
    countyName: string;
    /**
     * 详细收货地址信息
     */
    detailInfo: string;
    /**
     * 收货地址国家码
     */
    nationalCode: string;
    /**
     * 收货人手机号码
     */
    telNumber: string;
  }

  /**
   * 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
   * @param {ChooseAddressOptions} options
   * @since 1.1.0
   */
  export function chooseAddress(options: ChooseAddressOptions): void;

  export interface Card {
    /**
     * 卡券 Id
     */
    cardId: string;
    /**
     * 卡券的扩展参数
     */
    cardExt: string;
  }

  export interface CardItem extends Card {
    /**
     * 加密 code，为用户领取到卡券的code加密后的字符串
     */
    code: string;
    /**
     * 是否成功
     */
    isSuccess: boolean;
  }

  export interface AddCardOptions extends BaseOptions {
    /**
     * 需要添加的卡券列表
     */
    cardList: Card[];

    /**
     * 卡券添加结果列表
     * @param {{cardList: CardItem[]}} res
     */
    success?: (
      res: {
        cardList: CardItem[];
      }
    ) => void;
  }

  /**
   * 批量添加卡券。
   * @param {AddCardOptions} options
   * @since 1.1.0
   */
  export function addCard(options: AddCardOptions): void;

  export interface openCardItem {
    /**
     * 需要打开的卡券 Id
     */
    cardId: string;
    /**
     * 由 addCard 的返回对象中的加密 code 通过解密后得到
     */
    code: string;
  }

  export interface OpenCardOptions extends BaseOptions {
    /**
     *  需要打开的卡券列表
     */
    cardList: openCardItem[];
  }

  /**
   * 查看微信卡包中的卡券。
   * @param {OpenCardOptions} options
   * @since 1.1.0
   */
  export function openCard(options: OpenCardOptions): void;

  export interface SettingOptions {
    /**
     * 用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权，
     * @param {{authSetting: wx.IData}} res
     */
    success?: (
      res: {
        authSetting: IData;
      }
    ) => void;
  }

  /**
   * 调起客户端小程序设置界面，返回用户设置的操作结果。
   * @param {SettingOptions} options
   * @since 1.1.0
   */
  export function openSetting(options: SettingOptions): void;

  /**
   * 获取用户的当前设置。
   * @param {SettingOptions} options
   * @since 1.1.0
   */
  export function getSetting(options: SettingOptions): void;

  export interface NavigateToMiniProgramOptions extends SuccessOptions {
    /**
     * 要打开的小程序 appId
     */
    appId: string;
    /**
     * 打开的页面路径，如果为空则打开首页
     */
    path?: string;
    /**
     *  需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。
     */
    extraData?: IData;
    /**
     * 要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版） ，
     * 仅在当前小程序为开发版或体验版时此参数有效；
     * 如果当前小程序是体验版或正式版，则打开的小程序必定是正式版。
     * 默认值 release
     */
    envVersion?: string;
  }

  /**
   * 打开同一公众号下关联的另一个小程序。
   * @param {NavigateToMiniProgramOptions} options
   * @since 1.3.0
   */
  export function navigateToMiniProgram(
    options: NavigateToMiniProgramOptions
  ): void;

  export interface NavigateBackMiniProgramOptions extends SuccessOptions {
    /**
     * 需要返回给上一个小程序的数据，上一个小程序可在 App.onShow() 中获取到这份数据。
     */
    extraData?: IData;
  }

  /**
   * 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功
   * @param {NavigateBackMiniProgramOptions} options
   * @since 1.3.0
   */
  export function navigateBackMiniProgram(
    options: NavigateBackMiniProgramOptions
  ): void;

  export interface ChooseInvoiceTitleResult {
    /**
     * 抬头类型（0：单位，1：个人）
     */
    type: string;
    /**
     * 抬头名称
     */
    title: string;
    /**
     * 抬头税号
     */
    taxNumber: string;
    /**
     * 单位地址
     */
    companyAddress: string;
    /**
     * 手机号码
     */
    telephone: string;
    /**
     * 银行名称
     */
    bankName: string;
    /**
     * 银行账号
     */
    bankAccount: string;
    /**
     * 接口调用结果
     */
    errMsg: string;
  }

  export interface ChooseInvoiceTitleOptions extends BaseOptions {
    /**
     * 接口调用成功的回调函数
     * @param {wx.ChooseInvoiceTitleResult} res
     */
    success?: (res: ChooseInvoiceTitleResult) => void;
  }

  /**
   * 选择用户的发票抬头。
   * @param {ChooseInvoiceTitleOptions} options
   * @since 1.5.0
   */
  export function chooseInvoiceTitle(options: ChooseInvoiceTitleOptions): void;
}
