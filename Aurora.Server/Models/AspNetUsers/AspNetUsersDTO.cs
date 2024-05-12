namespace Aurora.Server.Models.AspNetUsers
{
    public class AspNetUsersDTO 
    {
         public string Name { get; set; }
         public string Surname { get; set; }
         public bool EmailConfirmed { get; set; }
         public string Email { get; set; }
          public Guid? FK_Idclass { get; set; }
    }
}
