## Stacks
Stacks is an ordered list in which insertions or if we say in normal words push or elements can be added,deletion or other functions like display can be done.

* Stack follows LIFO rule that means Last In First Out in simple terms, whatever comes at the last is removed first.
* Stack mainly has three functions-pop,push and display
* Stack can be implemented by arrays,linked list(singly,doubly,circular) or even using queue
* Stack is helpful in UNDO/REDO functions in editors and alll



### A simple stack implementation using C lang

 ```
     #include <stdio.h>
#include <stdlib.h>

struct node{
     int data;
     struct node *next;
}*start=NULL;

void push(int x){
     struct node *p;
     p=(struct node *)(malloc(sizeof(struct node)));
     // t=(struct node *)(malloc(sizeof(struct node)));
     p->data=x;  
     p->next=start;
   start=p;

}




void display(){
     struct node *t;
      t=(struct node *)(malloc(sizeof(struct node)));
      t=start;
      if(t==NULL){
          printf("Stack is empty");
          return;
      }
      else{
          while(t!=NULL){
               printf("\t %d",t->data);
               t=t->next;
          }
      }
}



void pop() {
    if (start == NULL) {
        printf("Stack is empty\n");
        return ;
    } else {
        struct node *p = start;
        int m = p->data;
        start = start->next;
        free(p);
        printf("Popped element is %d",m);
    }
}





     int main() {
    int choice = 0;

    while (choice != 4) {
        printf("\nEnter a choice\n");
        printf("\n 1. POP");
        printf("\n 2. PUSH");
        printf("\n 3. DISPLAY");
        printf("\n 4. EXIT\n");
        scanf("%d", &choice);

        switch (choice) {
            case 1: pop();
                break;
            case 2:
                printf("Enter an element to push\n");
                int el;
                scanf("%d", &el);
                push(el);
                break;
            case 3:
                display();
                break;
            case 4:
                printf("\nExiting program");
                break;
            default:
                printf("Enter a valid choice");
                break;
        }
    
}
     
     
return 0;
}

```

* In the above code snippet, it is a menu driven program that implements the basic functions of Stack
