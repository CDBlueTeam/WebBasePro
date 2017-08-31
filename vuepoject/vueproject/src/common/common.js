/*
* 存放公共函数信息
*
*
*/
function getAliyunClient(){
  var client = new OSS.Wrapper({
     accessKeyId:'rgBGhs03VupDUUGB',
     accessKeySecret:'UFZDDSBq6qCsNmZv7HXUgGyLEqkhfn',
     endpoint:'oss-cn-zhangjiakou.aliyuncs.com',
     bucket:'fjjh-oss'
   })
  return client;
}
//显示图片信息
export function setUploadImageContainer(_filInfo,_elementContainerId){
  //获取本地图片上传地址
  if(window.FileReader){
    //判断上传是否是一个图片
    if((_filInfo.type).indexOf('image/')===-1){
      alert('请选择图片进行上传');
      return false;
    }
    let _elementContainer = document.getElementById(_elementContainerId);
    //创建li列表
    let _elementLI = document.createElement('li');
    _elementContainer.appendChild(_elementLI);
    //创建img
    let _elementImg = document.createElement('img');
    let reader = new FileReader();
    reader.readAsDataURL(_filInfo);
    reader.onload=(evt)=>{
      _elementImg.setAttribute('alt',_filInfo.name);
      _elementImg.setAttribute('src',evt.target.result);
      _elementLI.appendChild(_elementImg);
    }
  }
}
//上传图片至阿里云
export function aliYunUpLoadImage(_fileList){
    let client = getAliyunClient();
    let sucessUploadInfo = [];
    for(let value of _fileList){
      let storeAs = 'fjjh_head_img/'+value.name;
      client.multipartUpload(storeAs,value)
      .then((result)=>{
        result.name = result.name.split("/")[1];
        sucessUploadInfo.push(result);
      })
      .catch((err)=>{
        sucessUploadInfo.push(err);
      })
    }
    return sucessUploadInfo;
}




