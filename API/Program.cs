using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(
        builder.Configuration.GetConnectionString("DefaultConnection")
    );
});
builder.Services.AddCors();

var app = builder.Build();

app.UseCors(options =>
{
   options.WithOrigins("https://localhost:3000").AllowAnyHeader().AllowAnyMethod();
});

app.MapControllers();

DbInitialiser.InitDb(app);

app.Run();
