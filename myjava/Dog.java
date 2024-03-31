package myjava;

public class Dog implements Animal {
    public void makeSound() {
        System.out.println("Woof");
    }

    public void makeSound(Dog d) {
        System.out.println("Dog woof to Cat");
    }

    public void makeSound(Cat c) {
        System.out.println("Dog woof to Dog");
    }

    public void makeSound(Animal a) {
        System.out.println("Dog woof to Animal");
    }
}
