
using Microsoft.AspNetCore.Identity;

namespace Aurora.Server.Models.AspNetUsers
{
    public class AspNetUsers : IdentityUser
    {
       
        virtual public string? name { get; set; }
        virtual public string? surname { get; set; }
        virtual public string? login { get; set; }
       
       

        public AspNetUsers() : base()
        {

        }
        /*
            public Guid getId()
            {
                return id;
            }
            */
        

        virtual public AspNetUsersEnum? _AspNetUsersEnum { get; set; }

    }
}
