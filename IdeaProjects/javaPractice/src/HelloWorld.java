public class HelloWorld {

    public static void main(String[] args) {
        System.out.print("Hello");
        System.out.print(", World! \n");

        int myFavoriteNumber = 17;
        System.out.println(myFavoriteNumber);

        String myString = "Popeye";
        System.out.println(myString);

        double myNumber = 3.14;
        System.out.println(myNumber);

//        int x = 5;
//        System.out.println(++x);
//        System.out.println(x);

        String theNumberThree = "three";
        Object o = theNumberThree;
//        int three = (int) o;

//        int x = 4;
//        x += 5;

//        int x = 3;
//        int y = 4;
//        y *= x;

        int x = 10;
        int y = 2;
        x /= y;
        y -= x;
        System.out.println(y);

        short potato = 32767;
        potato +=1;
        potato +=1;
        potato +=1;
        //if you increment outside the bounds of a data type's allowed bounds, it rolls over to the negative and continues counting.
        System.out.println(potato);





    }
}
