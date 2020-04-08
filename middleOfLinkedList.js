// Find middle of a linked list
// Solution uses two pointers such that when the faster pointer reaches the end of the list, the slower pointer will be sitting at the halfway point
var middleNode = function(head) {
    let slower = head, faster = head;
    
    while (faster && faster.next) {
        faster = faster.next.next;
        slower = slower.next;
    }
    
    return slower;
};