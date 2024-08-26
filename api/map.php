
<!DOCTYPE html>
<html lang="zh-cn">

<head>
  <meta charset="utf-8">
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="format-detection" content="telephone=no">
  <meta name="format-detection" content="address=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="author" content="Jiao" />
  <meta name="renderer" content="webkit">
  <style>
    html,body,#mymap{ width: 100%; height: 100%;}
    *{ padding: 0; margin: 0;}
    .amap-info-content{ padding:15px 20px;}
    .amap-info-content h5{ font-size: 15px; color: #333; margin-bottom: 3px;}
    .amap-info-content p{ font-size: 14px; color: #999;}
  </style>
</head>
<body>
  <div id="mymap"></div>
  <script src="https://cache.amap.com/lbs/static/es5.min.js"></script>
  <script src="https://webapi.amap.com/maps?v=1.4.15&key=ecb3e94f0bf9961ac7d6c6bc7902d310&plugin=AMap.Scale,AMap.OverView,AMap.ToolBar"></script>

              
  <script type="text/javascript">
          var mapObj = new AMap.Map("mymap", {zoom: 18, center: [114.275445,30.611239],resizeEnable: true,scrollWheel:false});
          var lnglats = [
              [108.91,34.24]
          ];
          var markerArr = [  
            { tel: "thht@spacecircling.com", title: "武汉研发中心"},
          ];  
          var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(7, -38)});
          for (var i = 0, marker; i < lnglats.length; i++) {
            var marker = new AMap.Marker({
                position: lnglats[i],
                icon:"https://www.spacecircling.com.cn/static/style/pc/images/map.png",
                map: mapObj
            });
            marker.content = "<h5>" + markerArr[i].title +"</h5><p>电话：" + markerArr[i].tel +"</p>";
            marker.on('click', markerClick);
          }
          mapObj.panBy(0, 0);
          function markerClick(e) {
              infoWindow.setContent(e.target.content);
              infoWindow.open(mapObj, e.target.getPosition());
          }
          mapObj.plugin(["AMap.ControlBar"],function(){
              var controlBar = new AMap.ControlBar(Options)
              map.addControl(controlBar)
          });
          
          mapObj.plugin(["AMap.ToolBar"],function(){
              var tool = new AMap.ToolBar();
              mapObj.addControl(tool);    
          });
      </script>
</body>

</html>
