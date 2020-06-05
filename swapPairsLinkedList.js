/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if( !head || !head.next ) {
        return head;
    }
    
    // First is now the og 2nd node
    let newHead = head.next;
    // Next is og 3rd node. It will be used to swap the next pair.
    let next = newHead.next;
    // 2nd node is now the og 1st node
    newHead.next = head;
    // Get 3rd node by swapping the next two
    head.next = swapPairs(next);
    
    return newHead;
};