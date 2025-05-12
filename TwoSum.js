const TwoSum = (nums, target) => {
    
    const map = new Map()
    let remainder =0;
    for(let i=0; i<nums.length; i++){
        remainder = target - nums[i]
        if(map.has(remainder)){
            return [map.get(remainder), i]
        }
        map.set(nums[i], i)
    }
    return map;

}

console.log(TwoSum(nums = [3,2,4], target = 6))
