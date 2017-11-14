using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static readonly string[] Summaries = {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static readonly string[] Names = {
            "Andrew", "Harry", "John", "Billy", "Gary", "Peter", "Barry", "Michael", "Robert", "Eddie"
        };

        private static readonly string[] Adresses = {
            "Chicago", "Los Angeles", "New York", "Philadelphie", "Seattle", "Miami", "Boston", "Las Vegas", "Indianapolis", "San Francisco"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<TestForecast> TestForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new TestForecast
            {
                Name = Names[rng.Next(Names.Length)],
                Age = rng.Next(21, 77),
                Adress = Adresses[rng.Next(Adresses.Length)]
            });
        }

        public class TestForecast
        {
            public string Name { get; set; }
            public int Age { get; set; }
            public string Adress { get; set; }
        }
    }
}
