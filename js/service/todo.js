let db;
let openRequest = indexedDB.open('todo_items', 1);

openRequest.onupgradeneeded = function(e) {
  let db = e.target.result;
  console.log('running onupgradeneeded');
  if (!db.objectStoreNames.contains('items')) {
    let storeOS = db.createObjectStore('items',
      {keyPath: 'name'});
  }
};

openRequest.onsuccess = function(e) {
  console.log('running onsuccess');
  db = e.target.result;
  addItem();
};

openRequest.onerror = function(e) {
  console.log('onerror!');
  console.dir(e);
};

export function addItem() {
  let transaction = db.transaction(['items'], 'readwrite');
  let items = transaction.objectStore('items');
  let item = {
    titel: 'test item',
    description: 'this is a test item for the todo list',
    deadLine: new Date().getTime()
  };

 let request = items.add(item);

 request.onerror = function(e) {
    console.log('Error', e.target.error.name);
  };

  request.onsuccess = function(e) {
    console.log('Woot! Did it');
  };
}
