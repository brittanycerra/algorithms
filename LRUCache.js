/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.
/*
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cacheMap = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
     // Return -1 if the key isn't in the map
    if( !this.cacheMap.has(key) ) {
        return -1;
    }
    
    let holdKey = this.cacheMap.get(key);
    // Delete & re-add key to update order
    this.cacheMap.delete(key);
    this.cacheMap.set(key, holdKey);
    
    return holdKey;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if( this.cacheMap.has(key) ) {
        // Delete key so that order is updated when added
        this.cacheMap.delete(key);
    }
    
    this.cacheMap.set(key, value);
    
    // If adding this new key pushed the map beyond capacity, delete 1st item in cache
    if( this.cacheMap.size > this.capacity ){
        this.cacheMap.delete(this.cacheMap.keys().next().value);
    }
   
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */