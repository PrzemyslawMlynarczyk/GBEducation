
using Microsoft.AspNetCore.Identity;

namespace Aurora.Server.Models.AspNetUsers
{
    public class AspNetUsers : IdentityUser
    {
       
        virtual public string? name { get; set; }
        virtual public string? surname { get; set; }

        public virtual Guid? FK_idclass { get; set; }


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
