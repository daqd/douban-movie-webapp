//获取当前浏览器窗口大小
const getWindowWith = function(){
  let windowSize = {};
  windowSize.windowWidth =  document.documentElement.clientWidth;
  windowSize.windowHeight =  document.documentElement.clientHeight;
  return windowSize;
}
export {getWindowWith}
