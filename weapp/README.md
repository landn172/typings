# dt-weapp

基于微信小程序文档的 DefinitelyTyped

## 以下 api 暂时未添加

1. 设备
   1. 网络状态-调节亮度 | 震动，
   2. 加速度计，
   3. 罗盘
   4. 蓝牙
   5. iBeacon
   6. 屏幕亮度
   7. 用户截屏事件
   8. 震动
   9. 手机联系人
   10. NFC
   11. WI-Fi
2. 开放接口
   1. 微信运动
   2. 生物认证

## 使用说明

1. 参考 [src/weapp-test.ts](https://github.com/landn172/typings/blob/master/weapp/weapp-tests.ts)使用示例

Page 中实际案例

```ts
interface MyPage extends IPage {}
class MyPage implements IPageClass {
  // ....
}
```

2. tsconfig 配置

```json
{
  "compilerOptions": {
    // .....
    "sourceMap": true,
    "inlineSourceMap": true,
    "inlineSources": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    // 以下两项开启Decorator
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "typeRoots": ["./node_modules/@tuhu", "./node_modules/@types"]
  }
}
```

3. 事件 [新增 v1.1.0] [示例](https://github.com/landn172/typings/blob/master/weapp/weapp-tests.ts)

节选

```ts
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
```
