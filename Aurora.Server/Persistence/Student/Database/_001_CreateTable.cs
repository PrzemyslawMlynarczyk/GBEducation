namespace Aurora.Server.Models.Student.Database;
using FluentMigrator;
[Migration(001)]
public class _001_CreateTable : Migration
{
    public override void Up()
    {
        Create.Table("Student")
            .WithColumn("id").AsGuid().NotNullable().PrimaryKey()
            .WithColumn("name").AsString().Nullable()
            .WithColumn("surname").AsString().Nullable()
            .WithColumn("login").AsString().Nullable()
            .WithColumn("password").AsString().Nullable()
            .WithColumn("email").AsString().Nullable()
            .WithColumn("_studentEnum").AsInt32().Nullable();
    }

    public override void Down()
    {
        if (Schema.Table("Student").Exists())
        {
            Delete.Table("Student");
        }
    }
}