
document.getElementById('account').onchange = function() {
  var account = document.getElementById('account');
  
  var change = {'user' : {'accounts': account.options[account.selectedIndex].value}};
  chrome.storage.sync.set(change);
};