/// <reference path="../base.d.ts" />

declare namespace wx {
  interface SaveImageToPhotosAlbumOptions extends SuccessOptions {
    /**
     * 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
     */
    filePath: string;
  }

  /**
   * 保存图片到系统相册。需要用户授权 scope.writePhotosAlbum
   * @since 1.2.0
   */
  export function saveImageToPhotosAlbum(
    options: SaveImageToPhotosAlbumOptions
  ): void;

  interface GetImageInfoOptions extends BaseOptions {
    /**
     * 图片的路径，可以是相对路径，临时文件路径，存储文件路径
     */
    src: string;

    /**
     * 接口调用成功的回调函数，包含图片信息
     */
    success?: (res: GetImageInfoResult) => void;
  }

  /**
   * 获取图片信息
   */
  export function getImageInfo(options: GetImageInfoOptions): void;

  interface ImageFile {
    /**
     * 本地文件路径
     */
    path: string;

    /**
     * 本地文件大小，单位：B
     */
    size: number;
  }

  interface ChooseImageResult {
    /**
     * 本地文件路径列表
     */
    tempFilePaths: string[];

    /**
     * 图片的本地文件列表，每一项是一个 File 对象
     * @since 1.2.0
     */
    tempFiles: ImageFile[];
  }

  interface ChooseImageOptions extends BaseOptions {
    /**
     * 最多可以选择的图片张数，默认9
     */
    count?: number;

    /**
     * original 原图，compressed 压缩图，默认二者都有
     */
    sizeType?: string[];

    /**
     * album 从相册选图，camera 使用相机，默认二者都有
     */
    sourceType?: string[];

    /**
     * 成功则返回图片的本地文件路径列表 tempFilePaths
     */
    success: (res: ChooseImageResult) => void;
  }

  /**
   * 从本地相册选择图片或使用相机拍照。
   */
  export function chooseImage(options: ChooseImageOptions): void;

  interface PreviewImageOptions extends BaseOptions {
    /**
     * 当前显示图片的链接，不填则默认为 urls 的第一张
     */
    current?: string;

    /**
     * 需要预览的图片链接列表
     */
    urls: string[];
  }

  /**
   * 预览图片。
   */
  export function previewImage(options: PreviewImageOptions): void;

  interface GetImageInfoResult {
    /**
     * 图片宽度，单位px
     */
    width: number;

    /**
     * 图片高度 单位px
     */
    height: number;

    /**
     * 返回图片的本地路径
     */
    path: string;
  }
}
