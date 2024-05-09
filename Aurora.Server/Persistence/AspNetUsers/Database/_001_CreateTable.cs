namespace Aurora.Server.Models.Student.Database;
using FluentMigrator;
[Migration(001)]
public class _001_CreateTable : Migration
{
    public override void Up()
    {
        Create.Table("AspNetUsers")
             .WithColumn("Id").AsString().NotNullable().PrimaryKey()
            .WithColumn("UserName").AsString().Nullable()
            .WithColumn("NormalizedUserName").AsString().Nullable()
            .WithColumn("Email").AsString().Nullable()
            .WithColumn("NormalizedEmail").AsString().Nullable()
            .WithColumn("EmailConfirmed").AsBoolean().Nullable()
            .WithColumn("PasswordHash").AsString().Nullable()
            .WithColumn("SecurityStamp").AsString().Nullable()
            .WithColumn("ConcurrencyStamp").AsString().Nullable()
            .WithColumn("PhoneNumber").AsString().Nullable().Nullable()
            .WithColumn("PhoneNumberConfirmed").AsBoolean().Nullable()
            .WithColumn("TwoFactorEnabled").AsBoolean().Nullable()
            .WithColumn("LockoutEnd").AsDateTimeOffset().Nullable()
            .WithColumn("LockoutEnabled").AsBoolean().Nullable()
            .WithColumn("AccessFailedCount").AsInt32().Nullable()
            .WithColumn("name").AsString().Nullable()
            .WithColumn("surname").AsString().Nullable()
            .WithColumn("login").AsString().Nullable()
            .WithColumn("_AspNetUsersEnum").AsInt32().Nullable();
    }

    public override void Down()
    {
        if (Schema.Table("AspNetUsers").Exists())
        {
            Delete.Table("AspNetUsers");
        }
    }
}