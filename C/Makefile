CFLAGS = -Wno-implicit-function-declaration

all: final

final: main.o hello.o
	echo "Linking and compiling the final application"
	gcc $(CFLAGS) main.o hello.o -o final
	chmod +x final
	echo "Successful overall compilation"

main.o: main.c
	echo "Compiling the main file"
	gcc $(CFLAGS) -c main.c

hello.o: hello.c
	echo "Compiling the hello file"
	gcc $(CFLAGS) -c hello.c


clean:
	echo "Removing all but the source files"
	rm main.o hello.o final