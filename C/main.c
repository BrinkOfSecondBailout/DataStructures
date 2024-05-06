#include <stdio.h>

#define USER        0b1
#define ADMIN       0b10
#define DEV         0b100
#define OWNER       0b1000

int main() {
    unsigned int flags = USER;

    void removeAccess(unsigned int access) {
        flags = flags & ~access;
    }

    void increaseAccess(unsigned int access) {
        flags = flags | access;
    }

    void showAllAccess() {
        if (flags & OWNER) {
            printf("Owner access available.\n");
        } else if (flags & DEV) {
            printf("Dev access available.\n");
        } else if (flags & ADMIN) {
            printf("Admin access available.\n");
        } else if (flags & USER) {
            printf("User access available.\n");
        }
    }

    increaseAccess(OWNER);

    showAllAccess();
}