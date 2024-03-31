package credit;

public class Runner {
    public static void main(String[] args) {
        Card bronze = new Bronze();
        Card silver = new Silver();
        Card gold = new Gold();

        bronze.printTier();
        silver.printTier();
        gold.printTier();
    }
}
