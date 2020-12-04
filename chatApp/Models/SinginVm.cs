using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class SinginVm
    {
        [Required(ErrorMessage = "Nazwa uzttkownika jest wymagana!")]
        [MinLength(length:3, ErrorMessage = "Nazwa uzytkonwika nie moze byc krotsza niz 3 znaki.")]
        public string UserName { get; set; }
    }
}
