wx.canvasToTempFilePath({
  canvasId: ""
});

App({
  data: {
    abc: 1
  },
  onShow(opts) {
    const referrerInfo = opts.referrerInfo;
    if (referrerInfo) {
      const { appId, extraData } = referrerInfo;
    }
    const data = this.data.abc;
  }
});

let app = getApp();
const appData = app.data;

Page({
  data: {
    abc: 1,
    pages: []
  },
  onPageScroll(opts) {
    const scrollTop = opts.scrollTop;
    const route = this.__route__ as string;
    this.setData({
      pages: [{}]
    });
    this.temp = "";
    this.data.pages.forEach((p: string) => {
      console.log(pages);
    });
    this.data.c = "";
  },
  onShowIn() {
    if (!this.data) {
      return;
    }
    this.data.c = 1;
    const abc = this.data.abc;
    const a = this.d;
    const temp = this.temp;
    this.setData({
      abc: 2
    });
  },
  d: 1
});

const pages = getCurrentPages();
pages.forEach(page => {
  const abc = page.abc;
  const { data, route } = page;
});
