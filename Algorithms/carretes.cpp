#include <iostream>
using namespace std;

int main(void)
{
  int l,c1,c2;
  scanf("%d",&l);
  char s1[l],s2[l];
  int sum=0;
  scanf("%s",s1);
  scanf("%s",s2);
  for (int i = 0; i < l; i++) {
      if (s1[i]!=s2[i]){
          c1 = s1[i]-48;
          c2 = s2[i]-48;
          sum += min(max(c1, c2) - min(c1, c2), 10 - max(c1, c2) + min(c1, c2));
      }
  }
  printf("%d",sum);
  return 0;
  
}