
export function getClientSize() {
  const width = document.documentElement.clientWidth; // 可见区域宽度
  const height = window.innerHeight || document.documentElement.clientHeight; // 可见区域高度
  return { width, height };
}

export function getOffset( node ) {
  const box = node.getBoundingClientRect(); // 返回元素的大小及其相对于视口的位置
  const docElem = document.documentElement; // 返回文档对象的根元素的只读属性（如<html>元素）

  // < ie8 不支持 win.pageXOffset,则使用 document.scrollLeft
  return {
    left: box.left + ( window.pageXOffset || docElem.scrollLeft ) -
      ( docElem.clientLeft || document.body.clientLeft || 0 ),
    top: box.top + ( window.pageYOffset || docElem.scrollTop ) -
      ( docElem.clientTop || document.body.clientTop || 0 )
  };
}


