---
title: API-PHP
description: 
created_at: '2021-06-01 22:00:00'
updated_at: '2021-06-01 22:00:00'
---


重たくてループの中で別APIを呼び出せない

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  <title>get</title>
</head>
<body>

<?php
$url = "https://live.fc2.com/adult/contents/allchannellist.php";
$json = file_get_contents($url);
$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$arr = json_decode($json,true);

if ($arr === NULL) {
  return;
}else{
  $json_count = count($arr["channel"]);
  $json_time = date('Y/m/d H:i:s', $arr["time"]);
  $bc_id　= array();
  $bc_title = array();
  $m = 0;
  echo '<div>'.$json_count.'</div>';
  echo '<div>'.$json_time.'</div>';
  for($i=$json_count-1;$i>=0;$i--){
  #  $channel = "https://live.fc2.com/api/memberApi.php?streamid=".$arr["channel"][$i]["id"]."&channel=1";
  #  $channel_json = file_get_contents($channel);
  #  $channel_json = mb_convert_encoding($channel_json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
  #  $channel_arr = json_decode($channel_json,true);

  #  echo $channel_arr["data"]["channel_data"]["channelid"].'<br>';
        
    $flag_sex = $arr["channel"][$i]["sex"];
    $flag_lang = $arr["channel"][$i]["lang"];
    $flag_video = $arr["channel"][$i]["video"];
    if($flag_sex == 'w' && $flag_lang == 'ja' && $flag_video == '0'){
      $cid = $arr["channel"][$i]["id"];

      if($arr["channel"][$i]["title"] == ''){
        $ctitle = 'NoTitle';
      } else {
        $ctitle = $arr["channel"][$i]["title"];
      }
      if($arr["channel"][$i]["image"] == ''){
        $cimage = 'NoImage';
      } else {
        $cimage = $arr["channel"][$i]["image"];
      }
          
      $uname = $arr["channel"][$i]["name"];
      $ctype = $arr["channel"][$i]["type"];
      # echo $arr["channel"][$i]["sex"].'<br>';
      # echo $arr["channel"][$i]["lang"].'<br>';
      $ccount = $arr["channel"][$i]["count"];
      $ctotal = $arr["channel"][$i]["total"];
      $clogin = $arr["channel"][$i]["login"];
      # echo $arr["channel"][$i]["video"].'<br>';
      $capp = $arr["channel"][$i]["app"];
      $cpay = $arr["channel"][$i]["pay"];
      $camount =  $arr["channel"][$i]["amount"];
      $cinterval =  $arr["channel"][$i]["interval"];
      $cstart =  $arr["channel"][$i]["start"];
      $cstartunix =  $arr["channel"][$i]["start_time"];
      $m++;
?>
<div class="table-container">
  <table class="table m-4">
    <tr>
      <th>channel_count</th>
      <td><?= $m ?></td>
    </tr>
    <tr>
      <th>channel_id</th>
      <td><?= $cid ?></td>
    </tr>
    <tr>
      <th>channel_title</th>
      <td><?= $ctitle ?></td>
    </tr>
    <tr>
      <th>user_name</th>
      <td><?= $uname ?></td>
    </tr>
    <tr>
      <th>channel_image</th>
      <td><?= $cimage ?></td>
    </tr>
    <?php if($cimage == 'NoImage'){} else { ?>
    <tr>
      <th>channel_image</th>
      <td>
        <figure class="image">
          <img style="width: 40px;" src="<?= $cimage ?>">
        </figure>
      </td>
    </tr>
    <?php } ?>
    <tr>
      <th>channel_type</th>
      <td><?= $ctype ?>(<?php if($ctype=='0'){ echo 'オープンチャット'; }elseif($ctype=='1'){ echo '多人数チャット'; }else{ echo '2ショットチャット'; } ?>)</td>
    </tr>
    <tr>
      <th>channel_count</th>
      <td><?= $ccount ?></td>
    </tr>
    <tr>
      <th>channel_total</th>
      <td><?= $ctotal ?></td>
    </tr>
    <tr>
      <th>channel_login</th>
      <td><?= $clogin ?>(<?php if($clogin=='0'){ echo '制限なし'; }elseif($clogin=='1'){ echo 'ログイン限定'; }else{ echo 'ポイント所持限定'; } ?>)</td>
    </tr>
    <tr>
      <th>channel_app</th>
      <td><?= $capp ?>(<?php if($capp=='0'){ echo 'PC配信'; }elseif($capp=='1'){ echo 'スマホ配信'; } ?>)</td>
    </tr>
    <tr>
      <th>channel_pay</th>
      <td><?= $cpay ?>(<?php if($cpay=='0'){ echo '無料'; }elseif($cpay=='1'){ echo '有料'; } ?>)</td>
    </tr>
    <tr>
      <th>channel_amount</th>
      <td><?= $camount ?></td>
    </tr>
    <tr>
      <th>channel_interval</th>
      <td><?= $cinterval ?></td>
    </tr>
    <tr>
      <th>channel_start</th>
      <td><?= $cstart ?></td>
    </tr>
    <tr>
      <th>channel_unix_start</th>
      <td><?= $cstartunix ?></td>
    </tr>
  </table>
</div>
<?php
    } else {}
  }
}
?>

</body>
</html>
```
