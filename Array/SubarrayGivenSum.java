package Array;

// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
// In case of multiple subarrays, return the subarray which comes first on moving from left to right.
// https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1/?page=7&company[]=Amazon&category[]=Arrays&sortBy=submissions#
import java.util.*;

class SubarrayGivenSum {
    // static int subarraySum(int arr[], int n, int sum)
    // {
    // int curr_sum = arr[0], start = 0, i;

    // // Pick a starting point
    // for (i = 1; i <= n; i++) {
    // // If curr_sum exceeds the sum,
    // // then remove the starting elements
    // while (curr_sum > sum && start < i - 1) {
    // curr_sum = curr_sum - arr[start];
    // start++;
    // }

    // // If curr_sum becomes equal to sum,
    // // then return true
    // if (curr_sum == sum) {
    // int p = i - 1;
    // System.out.println(
    // "Sum found between indexes " + start
    // + " and " + p);
    // return 1;
    // }

    // // Add this element to curr_sum
    // if (i < n)
    // curr_sum = curr_sum + arr[i];
    // }

    // System.out.println("No subarray found");
    // return 0;
    // }

    // //Function to find a continuous sub-array which adds up to a given number.
    static ArrayList<Integer> subarraySum(int[] arr, int n, int s) {
        ArrayList<Integer> result = new ArrayList<Integer>();
        int index = 0;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            if (i < n) {
                sum += arr[i];
            }
            System.out.println(sum + " and " + s + " and index = " + index + " arr ind " + i);
            while (sum > s && index < i - 1) {
                sum = sum - arr[index];
                index++;
            }
            if (sum == s) {
                result.add(index + 1);
                result.add(i + 1);
                break;
            } else if (i == arr.length - 1) {
                i = index++;
                sum = 0;
            }
        }
        if (result.size() == 0) {
            result.add(-1);
        }
        return result;

    }

    public static void main(String args[]) {
        int[] arr = new int[] { 142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191, 43, 89,
                107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30, 24, 85, 155, 157, 41, 167, 177,
                132, 109, 145, 40, 27, 124, 138, 139, 119, 83, 130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187,
                22, 146, 125, 73, 71, 30, 178, 174, 98, 113 };
        System.out.println(SubarrayGivenSum.subarraySum(arr, arr.length, 665));
    }
}