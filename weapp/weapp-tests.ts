import _ from 'lodash';
import add from 'lodash/add';

wx.canvasToTempFilePath({
  canvasId: ''
});

_.debounce(() => {
  console.log(1);
}, 100);
add(1, 2);

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

const app = getApp();
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
    this.temp = '';
    this.data.pages.forEach((p: string) => {
      console.log(pages);
    });
    this.data.c = '';
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

function testDecorator() {
  console.log('evaluated');
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(target);
  };
}

// test extend method or prop
interface IMyPage extends IPage {
  propData: any;
  $on(event: string): void;
}

class IMyPage implements IPageClass {
  data: {
    props: string[];
    abc: number;
  } = {
    abc: 1,
    props: []
  };

  props = 'abc';
  abc: () => {};

  onLoad() {
    this.data.props = [''];
    console.log(this.props);
    this.abc = () => 1;
    this.setData({
      abc: 2
    });
    this.$on('abc');
    this.propData = 1;
  }

  @testDecorator()
  myMethod() {
    this.abc();
  }

  onTouch(
    e: wx.ITouchEvent<{
      x: number;
      y: number;
    }>
  ) {
    const {
      type,
      changedTouches,
      currentTarget,
      timeStamp,
      touches,
      detail,
      target
    } = e;
    const { x, y } = detail;
    touches.forEach(touchEvent => {
      const { clientX, clientY } = touchEvent;
    });
  }

  onCanvasTouch(e: wx.ICanvasTouchEvent) {
    e.changedTouches.forEach(touch => {
      const { identifier } = touch;
    });
  }
}

Page(new IMyPage());

Component({
  created() {
    this.triggerEvent('a', {});
  }
});
