using FluentNHibernate.Mapping;

namespace Aurora.Server.Models.Student;

public class StudentMapping : ClassMap<Student>
{
    private readonly string _tablename = nameof(Student);

    public StudentMapping()
    {
        Id(x => x.id);
        Map(x => x.name);
        Map(x => x.surname);
        Map(x => x.login);
        Map(x => x.password);
        Map(x => x.email);
        Map(x => x._studentEnum).CustomType<StudentEnum>();
        Table(_tablename);
    }
}