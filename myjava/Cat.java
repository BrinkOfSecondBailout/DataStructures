package myjava;

public class Cat implements Animal {
    public void makeSound() {
        System.out.println("Meow");
    }
    
    public void makeSound(Dog d) {
        System.out.println("Cat meow to Dog");
    }
    
    public void makeSound(Cat c) {
        System.out.println("Cat meow to Cat");
    }

    public void makeSound(Animal a) {
        System.out.println("Cat meow to Animal");
    }
}
