<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>mode: {{ editorOption.mode }}</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>theme: {{ editorOption.theme }}</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-codemirror/tree/master/examples/12-text-x-mysql.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <div class="codemirror">
        <!-- codemirror -->
        <button @click="cmRender = !cmRender">toggle</button>
        <codemirror v-model="code" v-if="cmRender" :options="editorOption"></codemirror>
      </div>
    </md-card-media>
  </md-card>
</template>

<script>
  // import { CodeMirror } from 'components/vue-codemirror'
  // require('codemirror/addon/mode/simple.js')
  // require('code-mirror-themes/themes/birds-of-paradise.css')
  // console.log(codeMirrorThemes)
  import 'codemirror/addon/selection/active-line.js';
  import 'codemirror/mode/sql/sql.js';

  export default {
    data() {
      return {
        cmRender: false,
        code: `-- 注意事项：case when 之间的条件必须相互独立，否则case只会返回第一个符合条件的值
select m.event_id,count(0)
(SELECT t.country_id,
       t.province_id,
       t.city_id,
       t.date_p,
       d.channel,
       t.server_id,
       t.time,
       t.event_id,
       t.key,
       t.value
FROM
(SELECT country_id,
       province_id,
       city_id,
       event_id,
       server_id,
       time,
       CASE
           WHEN (event_id='editor_editor_thememakeup_use'
                 AND params['粉底'] is null and params['唇彩色号'] is null and params['腮红颜色'] is null and params['五官立体'] is null and params['眉毛'] is null and params['眼影'] is null and params['睫毛'] is null and params['双眼皮'] is null and params['美瞳'] is null and params['装扮'] is null and params['染发'] IS NULL) THEN 'editor_thememakeup_only'
           WHEN (event_id='editor_editor_thememakeup_use'
                 AND params['主题妆容'] IS NULL) THEN 'editor_editor_combine'
       END AS event_id,
       'null' AS key,
       'null' AS value
FROM stat_sdk_ios
WHERE event_id IS NOT NULL
  AND date_p=20180129
  AND event_source=0
  AND app_key_p='40F04F91868E350A'
GROUP BY country_id,
         province_id,
         city_id,
         event_id,
         server_id,
         time,
         CASE
           WHEN (event_id='editor_editor_thememakeup_use'
                 AND params['粉底'] is null and params['唇彩色号'] is null and params['腮红颜色'] is null and params['五官立体'] is null and params['眉毛'] is null and params['眼影'] is null and params['睫毛'] is null and params['双眼皮'] is null and params['美瞳'] is null and params['装扮'] is null and params['染发'] IS NULL) THEN 'editor_thememakeup_only'
           WHEN (event_id='editor_editor_thememakeup_use'
                 AND params['主题妆容'] IS NULL) THEN 'editor_editor_combine'
         END
UNION ALL
select country_id, 
     province_id, 
     city_id, 
     event_id, 
     server_id,
     time,
     case when camera_photo_take_all='camera_photo_take_all' then 'camera_photo_take_all'
          when camera_makeup_take='camera_makeup_take' then 'camera_makeup_take'
          when camera_AR_take='camera_AR_take' then 'camera_AR_take'
          when camera_makeup_save='camera_makeup_save' then 'camera_makeup_save'
          when camera_AR_save='camera_AR_save' then 'camera_AR_save'
          when camera_thememakeup_only='camera_thememakeup_only' then 'camera_thememakeup_only'
          when camera_theme_AR_combine='camera_theme_AR_combine' then 'camera_theme_AR_combine'
          when camera_makeup_click='camera_makeup_click' then 'camera_makeup_click'
          when camera_AR_click='camera_AR_click' then 'camera_AR_click'
          when camera_photo_save_all='camera_photo_save_all' then 'camera_photo_save_all'
          when editor_photo_save_all='editor_photo_save_all' then 'editor_photo_save_all'
          when camera_save='camera_save' then 'camera_save'
          when camera_take='camera_take' then 'camera_take'
          when camera_normal_makeup_save='camera_normal_makeup_save' then 'camera_normal_makeup_save'
          when photo_save_all='photo_save_all' then 'photo_save_all'
          when camera_original='camera_original' then 'camera_original'
          when function_enter='function_enter' then 'function_enter'
          when camera_enter='camera_enter' then 'camera_enter'
          when editor_enter='editor_enter' then 'editor_enter'
          when editor_photo_save='editor_photo_save' then 'editor_photo_save'
          when editor_photoedit_enter='editor_photoedit_enter' then 'editor_photoedit_enter'
          when editor_share_click='editor_share_click' then 'editor_share_click'
          when camera_phototaken='camera_phototaken' then 'camera_phototaken'
          when cameraAR_videotaken='cameraAR_videotaken' then 'cameraAR_videotaken'
          when camera_photo_save='camera_photo_save' then 'camera_photo_save'
          when cameraAR_videosave='cameraAR_videosave' then 'cameraAR_videosave'
          when camera_share_click='camera_share_click' then 'camera_share_click'
          when editor_functionpage_click='editor_functionpage_click' then 'editor_functionpage_click'
          when editor_editor_thememakeup_use='editor_editor_thememakeup_use' then 'editor_editor_thememakeup_use'
          when editor_material_click='editor_material_click' then 'editor_material_click'
      end as event_id,
      key,
      value
FROM
(SELECT country_id, 
     province_id, 
     city_id, 
     event_id, 
     server_id,
       time,
       case when event_id in ('takephotoparam','camera_phototaken') then 'camera_photo_take_all' end as camera_photo_take_all,
       case when (event_id='selfie_phototaken_only' and p.k='主题妆容') 
         or (event_id='selfie_phototaken_combine' and p.k='主题妆容') then 'camera_makeup_take' end as camera_makeup_take,
       case when (event_id='selfie_phototaken_only' and p.k='AR') 
         or (event_id='selfie_phototaken_combine' and p.k='AR') then 'camera_AR_take' end as camera_AR_take,
       case when (event_id='selfie_photosave_only' and p.k='主题妆容') 
         or (event_id='selfie_photosave_combine' and p.k='主题妆容') then 'camera_makeup_save' end as camera_makeup_save,
       case when (event_id='selfie_photosave_only' and p.k='AR') 
         or (event_id='selfie_photosave_combine' and p.k='AR') then 'camera_AR_save' end as camera_AR_save,
       case when (event_id='selfie_photosave_only' and p.k='主题妆容') then 'camera_thememakeup_only' end as camera_thememakeup_only,
       case when (event_id='selfie_photosave_combine') then 'camera_theme_AR_combine' end as camera_theme_AR_combine,
       case when (event_id='selfie_makeups_click' and p.k='主题妆容') then 'camera_makeup_click' end as camera_makeup_click,
       case when (event_id='selfie_makeups_click' and p.k='AR') then 'camera_AR_click' end as camera_AR_click,
       case when (event_id='photomakeup' and p.k='妆容编辑照片数' and p.v in ('多人照','单人照','识别不到人脸')) 
         or (event_id='photomakeup' and p.k='妆容编辑照片数（v2.6之后）' and p.v in ('多人照','单人照','识别不到人脸')) 
         or (event_id='camera_photo_save') then 'camera_photo_save_all' end as camera_photo_save_all,       
       case when (event_id='editmup_savepic' and p.k='保存照片数' and p.v in ('保存照片数','识别不到人脸','单照片')) 
         or (event_id='editmup_savepic' and p.k='保存照片数（v2.6之后）' and p.v in ('识别不到人脸','多人照','单人照')) 
         or (event_id='editor_photo_save') then 'editor_photo_save_all' end as editor_photo_save_all,       
       case when event_id in ('cameraAR_videosave','camera_photo_save') THEN 'camera_save' end as camera_save,       
       case when event_id in ('camera_phototaken','cameraAR_videotaken') THEN 'camera_take' end as camera_take,  
       case when (event_id='camera_photo_save' and p.k='主题妆容') then 'camera_normal_makeup_save' end as camera_normal_makeup_save,
       case when event_id in ('camera_photo_save','editor_photo_save') then 'photo_save_all' end as photo_save_all,
       case when (event_id='camera_photo_save' and p.k='原图') then 'camera_original' end as camera_original,
       case when event_id in ('camera_enter','editor_enter') then 'function_enter' end as function_enter,
       case when event_id='camera_enter' then 'camera_enter' end as camera_enter,
       case when event_id='editor_enter' then 'editor_enter' end as editor_enter,
       case when event_id='editor_photo_save' then 'editor_photo_save' end as editor_photo_save, 
       case when event_id='editor_photoedit_enter' then 'editor_photoedit_enter' end as editor_photoedit_enter, 
       case when event_id='editor_share_click' then 'editor_share_click' end as editor_share_click, 
       case when event_id='camera_phototaken' then 'camera_phototaken' end as camera_phototaken, 
       case when event_id='cameraAR_videotaken' then 'cameraAR_videotaken' end as cameraAR_videotaken, 
       case when event_id='camera_photo_save' then 'camera_photo_save' end as camera_photo_save, 
       case when event_id='cameraAR_videosave' then 'cameraAR_videosave' end as cameraAR_videosave, 
       case when event_id='camera_share_click' then 'camera_share_click' end as camera_share_click,        
       case when event_id='editor_functionpage_click' then 'editor_functionpage_click' end as editor_functionpage_click,
       case when event_id='editor_editor_thememakeup_use' then 'editor_editor_thememakeup_use' end as editor_editor_thememakeup_use,
       case when event_id in ('editor_thememakeup_impress','editor_editormakeup_material_click') then 'editor_material_click' end as editor_material_click,
       -- 上面这些都是event_id,因为里面有很多条件不相互独立，只能放在多列
       case when (event_id='editor_thememakeup_impress' and p.k='妆容ID') 
          or (event_id='editor_functionpage_click') 
          or (event_id='editor_editor_thememakeup_use' and p.k in ('主题妆容','粉底','唇彩色号','腮红颜色','五官立体','眉毛','眼影','睫毛','双眼皮','美瞳','装扮','染发')) then '子功能'
       end as key,
       -- 上面这些都是event_id,条件相互独立，因此放在同一列
       case when (event_id='editor_thememakeup_impress' and p.k='妆容ID') 
              or (event_id='editor_editor_thememakeup_use' and p.k='主题妆容') 
              or (event_id='editor_functionpage_click' and p.v='主题妆容') then '主题妆容'
       when (event_id='editor_functionpage_click' and p.v='粉底') 
         or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='粉底') then '粉底'
     when (event_id='editor_functionpage_click' and p.v='唇彩') 
       or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='唇彩色号') then '唇彩'
     when (event_id='editor_functionpage_click' and p.v='腮红颜色') 
       or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='腮红颜色') then '腮红颜色'
     when (event_id='editor_functionpage_click' and p.v='五官立体') or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='五官立体') then '五官立体'
     when (event_id='editor_functionpage_click' and p.v='眉毛') 
       or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='眉毛') then '眉毛'
     when (event_id='editor_functionpage_click' and p.v='眼影') 
       or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='眼影') then '眼影'
     when (event_id='editor_functionpage_click' and p.v='睫毛') or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='睫毛') then '睫毛'
     when (event_id='editor_functionpage_click' and p.v='双眼皮') 
       or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='双眼皮') then '双眼皮'
     when (event_id='editor_functionpage_click' and p.v='美瞳') 
       or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='美瞳') then '美瞳'
     when (event_id='editor_functionpage_click' and p.v='装扮') 
       or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='装扮') then '装扮'
     when (event_id='editor_functionpage_click' and p.v='染发') 
       or (event_id in ('editor_editor_thememakeup_use','editor_material_click') and p.k='染发') then '染发'
     end as value
     -- 上面这些是value，条件相互独立，因此放在同一列
FROM stat_sdk_ios LATERAL VIEW explode(params)p AS k,
                               v
WHERE event_id IS NOT NULL
  AND date_p=20180129
  AND event_source=0
  AND app_key_p='40F04F91868E350A')p )t
LEFT JOIN
  (SELECT date_p,
          channel,
          server_id
   FROM sdk_channel_active_daily
   WHERE type_p='ios'
     AND date_p=20180129
     AND channel IS NOT NULL
     AND app_key='40F04F91868E350A'
     AND server_id IS NOT NULL)d ON t.date_p=d.date_p
AND t.server_id=d.server_id

GROUP BY t.country_id,
       t.province_id,
       t.city_id,
       t.date_p,
       d.channel,
       t.server_id,
       t.time,
       t.event_id,
       t.key,
       t.value) m
group by event_id


select t.date_p,t.device_id,t.uid,k,v
from stat_meipai.tmp_meipai_event  t lateral view  explode (map(
  'play', play,
  'comment', comment,
  'like', \`like\`
)) t2 as k,v
where date_p =20180101

select  x.client_id,x.isnew,k as event,v as event_coount from (
SELECT a.client_id,
       a.isnew,
       count(a.device_id) AS activedeviceCount,
       sum(a.isreturn) AS nextdeviceRcount,
       sum(CASE WHEN (b.mediascreatecount>0) THEN 1 ELSE 0 END) AS mediascreateDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.mediascreatecount>0) THEN 1 ELSE 0 END) AS mediascreateDRcount,
       sum(CASE WHEN (b.mediaslockcount>0) THEN 1 ELSE 0 END) AS mediaslockDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.mediaslockcount>0) THEN 1 ELSE 0 END) AS mediaslockDRcount,
       sum(CASE WHEN (b.playcount>0) THEN 1 ELSE 0 END) AS playDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.playcount>0) THEN 1 ELSE 0 END) AS playDRcount,
       sum(CASE WHEN (b.play0count>0) THEN 1 ELSE 0 END) AS play0Dcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.play0count>0) THEN 1 ELSE 0 END) AS play0DRcount,
       sum(CASE WHEN (b.play3count>0) THEN 1 ELSE 0 END) AS play3Dcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.play3count>0) THEN 1 ELSE 0 END) AS play3DRcount,
       sum(CASE WHEN (b.effeplaycount>0) THEN 1 ELSE 0 END) AS effeplayDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.effeplaycount>0) THEN 1 ELSE 0 END) AS effeplayDRcount,
       sum(CASE WHEN (b.likecount>0) THEN 1 ELSE 0 END) AS likeDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.likecount>0) THEN 1 ELSE 0 END) AS likeDRcount,
       sum(CASE WHEN (b.likedeletecount>0) THEN 1 ELSE 0 END) AS likedeleteDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.likedeletecount>0) THEN 1 ELSE 0 END) AS likedeleteDRcount,
       sum(CASE WHEN ((b.likecount-b.likedeletecount)>0) THEN 1 ELSE 0 END) AS likedeleteDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND (b.likecount-b.likedeletecount)>0) THEN 1 ELSE 0 END) AS endlikecreateDRcount,
       sum(CASE WHEN (b.commentcreatecount>0) THEN 1 ELSE 0 END) AS commentcreateDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.commentcreatecount>0) THEN 1 ELSE 0 END) AS commentcreateDRcount,
       sum(CASE WHEN (b.commentdeletecount>0) THEN 1 ELSE 0 END) AS commentdeleteDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.commentdeletecount>0) THEN 1 ELSE 0 END) AS commentdeleteDRcount,
       sum(CASE WHEN ((b.commentcreatecount-b.commentdeletecount)>0) THEN 1 ELSE 0 END) AS commentdeleteDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND (b.commentcreatecount-b.commentdeletecount)>0) THEN 1 ELSE 0 END) AS endcommentcreateDRcount,
       sum(CASE WHEN (b.friendshipcount>0) THEN 1 ELSE 0 END) AS friendshipDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.friendshipcount>0) THEN 1 ELSE 0 END) AS friendshipDRcount,
       sum(CASE WHEN (b.friendshipdeletecount>0) THEN 1 ELSE 0 END) AS friendshipdeleteDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.friendshipdeletecount>0) THEN 1 ELSE 0 END) AS friendshipdeleteDRcount,
       sum(CASE WHEN ((b.friendshipcount-b.friendshipdeletecount)>0) THEN 1 ELSE 0 END) AS friendshipDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND (b.friendshipcount-b.friendshipdeletecount)>0) THEN 1 ELSE 0 END) AS friendshipcreateDRcount,
       sum(CASE WHEN (b.uploadsharecount>0) THEN 1 ELSE 0 END) AS uploadshareDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.uploadsharecount>0) THEN 1 ELSE 0 END) AS uploadshareDRcount,
       sum(CASE WHEN (b.mediaspagesharecount>0) THEN 1 ELSE 0 END) AS mediaspageshareDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND b.mediaspagesharecount>0) THEN 1 ELSE 0 END) AS mediaspageshareDRcount,
       sum(CASE WHEN ((b.uploadsharecount+b.mediaspagesharecount)>0) THEN 1 ELSE 0 END) AS mediaspageshareDcount,
       sum(CASE WHEN (a.isreturn>0
                      AND (b.uploadsharecount+b.mediaspagesharecount)>0) THEN 1 ELSE 0 END) AS shareDRcount
FROM
  (SELECT client_id,
          device_id,
          isnew,
          isreturn
   FROM stat_meipai.meipai_active_retention_odz
   WHERE device_id IS NOT NULL
     AND device_id!=""
     AND client_id IN (1089857299,
                       1089857302)
     AND date_p=$caldate
   GROUP BY client_id,
            device_id,
            isnew,
            isreturn)a
LEFT JOIN
  (SELECT client_id,
          device_id,
          mediascreatecount,
          mediaslockcount,
          playcount,
          play0count,
          play3count,
          effeplaycount,
          likecount,
          likedeletecount,
          commentcreatecount,
          commentdeletecount,
          friendshipcount,
          friendshipdeletecount,
          uploadsharecount,
          mediaspagesharecount
   FROM stat_meipai.meipai_device_behaviorcount_odz
   WHERE date_p=$caldate
     AND client_id IN (1089857299,
                       1089857302)
     AND device_id IS NOT NULL
   GROUP BY client_id,
            device_id,
            mediascreatecount,
            mediaslockcount,
            playcount,
            play0count,
            play3count,
            effeplaycount,
            likecount,
            likedeletecount,
            commentcreatecount,
            commentdeletecount,
            friendshipcount,
            friendshipdeletecount,
            uploadsharecount,
            mediaspagesharecount)b ON a.client_id=b.client_id
AND a.device_id=b.device_id
GROUP BY a.client_id,
         a.isnew ) x lateral view explode (map(
  'mediascreateDcount', mediascreateDcount,
  'mediaslockDcount', mediaslockDcount,
  'playDcount', \`playDcount\`
)) t2 as k,v 

--set hive.auto.convert.join = true;
SELECT n.os_p,
       m.app,
       n.month,
       count(n.server_id_1),
       count(n.server_id_2)
FROM --/*+MAPJOIN(b)*/
  (SELECT CASE
              WHEN app_des LIKE '美图秀秀%' THEN '美图秀秀'
              WHEN app_des LIKE '美颜相机%' THEN '美颜相机'
              WHEN app_des LIKE '%美拍%' THEN '美拍'
              WHEN app_des LIKE '美妆相机%' THEN '美妆相机'
              WHEN app_des LIKE '潮自拍%' THEN '潮自拍'
              WHEN app_des LIKE '美图美妆%' THEN '美图美妆'
          END AS app,
          app_key,
          platform
   FROM stat_sdk.appkey_relation_table
   WHERE platform in(1,2)) m
join 
  (select a.os_p,a.app_key_p,a.month,a.date_p,a.server_id as server_id_1,c.server_id as server_id_2 from 
  (SELECT os_p,
          app_key_p,
          concat_ws('-',substr(date_p,1,4),substr(date_p,5,2)) AS MONTH,
          from_unixtime(unix_timestamp(concat(date_p,"") ,'yyyyMMdd'), 'yyyy-MM-dd') AS date_p,
          server_id
   FROM stat_sdk.sdk_daily_device
   WHERE os_p in('ios','android')
     AND type_p='active'
     AND date_p BETWEEN 20171201 AND 20180131
   GROUP BY os_p,
            from_unixtime(unix_timestamp(concat(date_p,"") ,'yyyyMMdd'), 'yyyy-MM-dd'),
            app_key_p,
            concat_ws('-',substr(date_p,1,4),substr(date_p,5,2)),
            server_id)a

LEFT JOIN
  (SELECT os_p,
          app_key_p,
          concat_ws('-',substr(date_p,1,4),substr(date_p,5,2)) AS MONTH,
          date_sub(from_unixtime(unix_timestamp(concat(date_p,"") ,'yyyyMMdd'), 'yyyy-MM-dd'),1) AS date_r,
          server_id
   FROM stat_sdk.sdk_daily_device
   WHERE os_p in('ios','android')
     AND type_p='active'
     AND date_p BETWEEN 20171201 AND 20180131
   GROUP BY os_p,
            date_p,
            app_key_p,
            date_sub(from_unixtime(unix_timestamp(concat(date_p,"") ,'yyyyMMdd'), 'yyyy-MM-dd'),1),
            server_id) c ON a.date_p=c.date_r and a.os_p =c.os_p and a.app_key_p =c.app_key_p and a.server_id =c.server_id) n
on m.app_key_p =n.app_key_p
GROUP BY n.os_p,
       m.app,
       n.month       


SELECT \`date\` ,
       date_week ,
       date_month ,
       os_type ,
       app ,
       remain_uv_1d ,
       remain_uv_7d ,
       remain_uv_30d ,
       user_remain_uv_1d ,
       user_remain_uv_7d ,
       user_remain_uv_30d ,
       remain_new_uv_1d ,
       remain_new_uv_7d ,
       remain_new_uv_30d
FROM
  (SELECT $date_day AS \`date\`,
          '0' AS date_week,
          '0' AS date_month ,
          os_type ,
          app ,
          max(remain_uv_1d) AS remain_uv_1d ,
          max(remain_uv_7d) AS remain_uv_7d ,
          max(remain_uv_30d) AS remain_uv_30d ,
          max(user_remain_uv_1d) AS user_remain_uv_1d ,
          max(user_remain_uv_7d) AS user_remain_uv_7d ,
          max(user_remain_uv_30d) AS user_remain_uv_30d ,
          max(remain_new_uv_1d) AS remain_new_uv_1d ,
          max(remain_new_uv_7d) AS remain_new_uv_7d ,
          max(remain_new_uv_30d) AS remain_new_uv_30d ,
          count(1) AS cnt
   FROM stat_meipu.client_user_remain
   WHERE date_p=$date_day
   GROUP BY os_type,
            app
   UNION ALL SELECT '0' AS \`date\`,
                    $date_week AS date_week,
                    '0' AS date_month ,
                    os_type ,
                    app ,
                    max(remain_uv_1d) AS remain_uv_1d ,
                    max(remain_uv_7d) AS remain_uv_7d ,
                    max(remain_uv_30d) AS remain_uv_30d ,
                    max(user_remain_uv_1d) AS user_remain_uv_1d ,
                    max(user_remain_uv_7d) AS user_remain_uv_7d ,
                    max(user_remain_uv_30d) AS user_remain_uv_30d ,
                    max(remain_new_uv_1d) AS remain_new_uv_1d ,
                    max(remain_new_uv_7d) AS remain_new_uv_7d ,
                    max(remain_new_uv_30d) AS remain_new_uv_30d ,
                    count(1) AS cnt
   FROM stat_meipu.client_user_remain
   WHERE date_p=$date_week
   GROUP BY os_type,
            app
   UNION ALL SELECT '0' AS \`date\`,
                    '0' AS date_week,
                    $date_month AS date_month ,
                    os_type ,
                    app ,
                    max(remain_uv_1d) AS remain_uv_1d ,
                    max(remain_uv_7d) AS remain_uv_7d ,
                    max(remain_uv_30d) AS remain_uv_30d ,
                    max(user_remain_uv_1d) AS user_remain_uv_1d ,
                    max(user_remain_uv_7d) AS user_remain_uv_7d ,
                    max(user_remain_uv_30d) AS user_remain_uv_30d ,
                    max(remain_new_uv_1d) AS remain_new_uv_1d ,
                    max(remain_new_uv_7d) AS remain_new_uv_7d ,
                    max(remain_new_uv_30d) AS remain_new_uv_30d ,
                    count(1) AS cnt
   FROM stat_meipu.client_user_remain
   WHERE date_p=$date_month
   GROUP BY os_type,
            app)a

对当前这个app是否新增，1：已存在，2：新增 
`,
        editorOption: {
          tabSize: 4,
          // mode: 'text/javascript',
          mode: 'text/x-mariadb',
          line: true,
          lineNumbers: true,
          lineWrapping: false,
          styleActiveLine: true,
          // theme: 'base16-dark',
          autoRefresh: true,
          viewportMargin: Infinity,
          coverGutterNextToScrollbar: false,
          fixedGutter: true,
        }
      }
    },
    methods: {
      scroll() {
        console.log('scroll')
      }
    }
  }
</script>

