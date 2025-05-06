class ListNode {
    //a constructor is basically a special function that is used to create and initialise objects in oop
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
const mergeTwoList = (list1, list2) => {
    let mergedList = [];
    if (list1.length === 0 && list2.length === 0) return mergedList

    const head = new ListNode(0)
    const current = head;

    while(list1 && list2){
        if(list1.val <list2.val){
            current.next = list1
            list1 = list1.next
        }
        else{
            current.next = list2
            list2 = list2.next
        }   
        current = current.next;
    }
    return head.next

}

mergeTwoList([1, 2, 3], [4, 5, 6])