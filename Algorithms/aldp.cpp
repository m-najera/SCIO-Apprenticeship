// https://omegaup.com/arena/problem/aldp
#include <iostream>
using namespace std;

int binarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l + (r - l) / 2;
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);
        return binarySearch(arr, mid + 1, r, x);
    }
    return -1;
}
int P[100000];
int main(void)
{
    int M = 0, N = 0;
    int L, res;
    scanf("%d", &M);
    for (int i = 0; i < M; i++)
    {
        scanf("%d", &P[i]);
    }
    scanf("%d", &N);
    for (int i = 0; i < N - 1; i++)
    {
        scanf("%d", &L);
        res = binarySearch(P, 0, M - 1, L);
        if (res == -1)
        {
            printf("%d ", 0);
        }
        else
        {
            printf("%d ", res + 1);
        }
    }
    scanf("%d", &L);
    res = binarySearch(P, 0, M - 1, L);
    if (res == -1)
    {
        printf("%d", 0);
    }
    else
    {
        printf("%d", res + 1);
    }

    return 0;
}
