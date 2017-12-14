function isNum(o) {
  return !isNaN(o)
}

chrome.tabs.onUpdated.addListener(function(id, object, tab){
  chrome.storage.sync.get('user', function(data){
    
    if (data){
      if (data.user.accounts){
        
        if (object.status == 'loading'){
          if (tab.url.indexOf('classroom.google.com')  > -1){
            console.log(tab.url);
            var split = tab.url.split('/');
            var length = split.length;
            
            if (split[length-2] != data.user.accounts && isNum(split[length-2])){
              split[length-2] = data.user.accounts;
              var newLink = split.join('/');
              chrome.tabs.update(tab.id, {'url': newLink});
            }
          }
        }
      }
    }
  });
});

