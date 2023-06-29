package Array;
// https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/
class ReverseArrayString{

    public int[] reverseArray(int[] arr) {
        int start = 0;
        int end = arr.length-1;
        while(start < end){
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        return arr;
    }
    public static void main(String args[]){
        ReverseArrayString ra = new ReverseArrayString();
        int[] intArray = new int[]{ 1,2,3,4,5,6,7,8,9,10 }; 
        int[] revArray = ra.reverseArray(intArray);
        for(int x: revArray){
            System.out.print(x+",");
        }
    }
}