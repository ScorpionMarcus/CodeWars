using System;

namespace ObjectOrientedPiracy
{
    class Program
    {
        static void Main(string[] args)
        {
            Ship titanic = new Ship(15, 10);
            Console.WriteLine(titanic.IsWorthIt());
        }

        public class Ship
        {
            public int Draft;
            public int Crew;

            public Ship(int draft, int crew)
            {
                Draft = draft;
                Crew = crew;
            }

            public bool IsWorthIt()
            {
                return Draft - Crew * 1.5 > 20;
            }
        }
    }
}
