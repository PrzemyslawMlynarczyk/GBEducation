namespace Aurora.Server.Models.Student;

public class Student
{
    virtual public Guid id  { get; set; }
    virtual public string name { get; set; }
    virtual public string surname { get; set; }
    virtual public string login { get; set; }
    virtual public string password { get; set; }
    virtual public string email { get; set; }

    public Student() : base()
    {
        
    }
/*
    public Guid getId()
    {
        return id;
    }
    */
    public Student(Guid id, string name, string surname, string login, string password, string email)
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.password = password;
        this.email = email;
    }

    virtual public StudentEnum _studentEnum { get; set; }


}