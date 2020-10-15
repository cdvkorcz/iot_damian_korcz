using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace ExampleApp
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();

            var content = (StackLayout)this.Content;
        }

        public class App : Application
        {
            public App()
            {
                MainPage = new MainPage();
            }
 
        }
    }
}
