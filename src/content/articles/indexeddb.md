---
title: IndexedDB
description: 
created_at: '2021-06-01 22:00:00'
updated_at: '2021-06-01 22:00:00'
---

```
  import Dexie from 'dexie'

  mounted: function () {
    var db = new Dexie("FriendDatabase");
    db.version(1).stores({
      friends: "++id,name,age"
    });
       db.friends.add({name: "Josephine", age: 21}).then(function() {
       return db.friends.where("age").below(25).toArray();
   }).then(function (youngFriends) {
       alert ("My young friends: " + JSON.stringify(youngFriends));
   }).catch(function (e) {
       alert ("Error: " + (e.stack || e));
   });
  },
```