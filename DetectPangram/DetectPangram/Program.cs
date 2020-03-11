using System;

namespace Codewars
{
    class Program
    {
        static void Main(string[] args)
        {
            string sentence = "The quick brown fox jumps over the lazy dog.";
            //string failString = "A pangram is a sentence that contains every single letter of the alphabet at least once.";

            IsPangram(sentence);
        }

        public static bool IsPangram(string str)
        {
            string alphabet = "abcdefghijklmnopqrstuvwxyz";
            int count = 0;

            foreach (char c in alphabet)
            {
                foreach (char i in str.ToLower())
                {
                    if (c == i)
                    {
                        count++;
                        break;
                    }
                }
            }

            if (count == 26)
            {
                Console.WriteLine("The string is a pangram.");
                return true;
            }
            else
            {
                Console.WriteLine("The string is not a pangram.");
                return false;
            }

            throw new NotImplementedException();
        }
    }
}
