import java.util.*;
import java.io.*;
 
class Main{

    public static void main(String[] args)
    {
        SalutationInterface obj = () ->
        {
            return "Hello!";
        };
        System.out.println(obj.sayHello());
    }
}
interface SalutationInterface {
    public String sayHello();
}


