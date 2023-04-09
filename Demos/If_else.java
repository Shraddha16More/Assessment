import java.util.*;
import java.io.*;

class Main{
	public static void main(String[] arg)
	{
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();

		if(a%2==0)
		{
			System.out.println("Even number");
		}
		else 
		{
			System.out.println("Odd number");
		}
	}
}