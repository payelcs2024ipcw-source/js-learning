#include <iostream>
using namespace std;

int fact(int n){}

int main(){
    int a;
    cout<< " enter number: " << endl;
    cin >> a;
    if ( a< 0){
        cout<< "cannot be a negative\n"; 
    }
    cout<< "fibonacci: ";
    for(int i=0; i < a; ++i){
        cout<<fib(i)<<endl;
    }
    cout<< endl;
    return 0;
}