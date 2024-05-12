using Aurora.Server.Models.AspNetUsers;
using FluentNHibernate.Mapping;
namespace Aurora.Server.Models.AspNetUsers;

public class ClassMapping : ClassMap<Models.Class.Class>
{
    private readonly string _tablename = nameof(Class);

    public ClassMapping()
    {
        Id(x => x.Id);
        Map(x => x.Name_class);
        Table(_tablename);
    }

}
