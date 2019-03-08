using System;
using System.Text.RegularExpressions;

namespace ClassLibrary1
{
    public class Validate : IValidate
    {
        public bool validateEmail(string email)
        {
            Regex reg = new Regex(@"^[\w]+@([\w]+\.?)+[\w]+$", RegexOptions.Compiled | RegexOptions.IgnoreCase);
            return reg.Match(email).Success;

        }
    }
}
