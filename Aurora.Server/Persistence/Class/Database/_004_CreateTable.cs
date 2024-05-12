namespace Aurora.Server.Persistence.Class.Database;
using FluentMigrator;
[Migration(001)]

    public class _004_CreateTable : Migration
    {
    readonly string tableName = nameof(Models.Class);
    public override void Up()
    {
        Create.Table("Class")
             .WithColumn(nameof(Models.Class.Class.Id)).AsString().NotNullable().PrimaryKey()
             .WithColumn(nameof(Models.Class.Class.Name_class)).AsString().Nullable();


    }

    public override void Down()
    {
        if (Schema.Table(tableName).Exists())
        {
            Delete.Table(tableName);
        }
    }

}

