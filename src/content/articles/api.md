---
title: API-PHP
description: 
created_at: '2021-06-01 22:00:00'
updated_at: '2021-06-01 22:00:00'
---

```
<?php
$url = "https://live.fc2.com/adult/contents/allchannellist.php";
$json = file_get_contents($url);
$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$arr = json_decode($json,true);

if ($arr === NULL) {
        return;
}else{
        $json_count = count($arr["channel"]);
        $json_time = $arr["time"];
        $bc_id　= array();
        $bc_title = array();
        for($i=$json_count-1;$i>=0;$i--){
            echo $arr["channel"][$i]["id"].'<br>';
            if($arr["channel"][$i]["title"] == ''){
              echo 'NoTitle<br>';
            } else {
              echo $arr["channel"][$i]["title"].'<br>';
            }
            echo $arr["channel"][$i]["name"].'<br>';
            echo $arr["channel"][$i]["image"].'<br>';
            echo $arr["channel"][$i]["type"].'<br>';
            echo $arr["channel"][$i]["sex"].'<br>';
            echo $arr["channel"][$i]["lang"].'<br>';
            echo $arr["channel"][$i]["count"].'<br>';
            echo $arr["channel"][$i]["total"].'<br>';
            echo $arr["channel"][$i]["login"].'<br>';
            echo $arr["channel"][$i]["video"].'<br>';
            echo $arr["channel"][$i]["app"].'<br>';
            echo $arr["channel"][$i]["pay"].'<br>';
            echo $arr["channel"][$i]["amount"].'<br>';
            echo $arr["channel"][$i]["interval"].'<br>';
            echo $arr["channel"][$i]["start"].'<br>';
            echo $arr["channel"][$i]["start_time"].'<br>';
            echo '<br>';
        }
        echo $json_count;
        echo '<br>';
        echo $json_time;
}
```
