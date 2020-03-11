using System;
using System.Numerics;

namespace EasyLine
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Easyline.EasyLine(19));
            Console.WriteLine(BigInteger.Parse("35345263800")); 
        }

        public class Easyline
        {
            public static BigInteger EasyLine(int n)
            {
                double sum = 1;

                for (int i = 1; i <= n; i++)
                    sum *= (n + i) / i;

                BigInteger number;
                number = (BigInteger)sum;

                return number;
            }
        }
    }   
}
