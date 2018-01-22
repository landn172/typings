wx.canvasToTempFilePath({
  canvasId: ""
});

App({
  onShow(opts) {
    const referrerInfo = opts.referrerInfo;
    if (referrerInfo) {
      const { appId, extraData } = referrerInfo;
    }
  }
});

let app = getApp();
const data = app.glb;

Page({
  onPageScroll(opts) {
    const scrollTop = opts.scrollTop;
    const route = this.__route__ as string;
  }
});
